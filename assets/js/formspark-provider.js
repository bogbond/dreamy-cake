/* Public configuration only. Provider credentials belong in the Cloudflare Worker. */
(function(){
  'use strict';
  var configPromise;
  var captchaPromise;
  function config(){
    if(!configPromise){
      configPromise = fetch('/assets/data/formspark-config.json', {cache:'no-store'})
        .then(function(r){ if(!r.ok) throw new Error('The form service settings could not be loaded.'); return r.json(); })
        .then(function(c){
          if(!c.gateway || !/^https:\/\/[^/]+\/submit$/.test(c.gateway) || !c.turnstileSiteKey){
            throw new Error('The form service is not ready yet. Please contact us by email or WhatsApp.');
          }
          return c;
        });
    }
    return configPromise;
  }
  function loadCaptcha(){
    if(window.turnstile) return Promise.resolve();
    if(!captchaPromise){
      captchaPromise = new Promise(function(resolve,reject){
        var script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.onload = resolve;
        script.onerror = function(){ reject(new Error('Security verification could not load. Please check your connection.')); };
        document.head.appendChild(script);
      });
    }
    return captchaPromise;
  }
  function prepare(form){
    if(form._dreamyCaptchaReady) return form._dreamyCaptchaReady;
    form._dreamyCaptchaReady = config().then(function(c){
      return loadCaptcha().then(function(){
        var box = document.createElement('div');
        box.className = 'my-3';
        box.setAttribute('data-dreamy-captcha','true');
        var button = form.querySelector('button[type="submit"], input[type="submit"]');
        if(button) button.parentNode.insertBefore(box,button);
        else form.appendChild(box);
        form._dreamyCaptchaId = window.turnstile.render(box, {
          sitekey:c.turnstileSiteKey,
          action:'cake_enquiry',
          theme:'light',
          callback:function(token){ form._dreamyCaptchaToken = token; },
          'expired-callback':function(){ form._dreamyCaptchaToken = ''; },
          'error-callback':function(){ form._dreamyCaptchaToken = ''; }
        });
        return c;
      });
    });
    return form._dreamyCaptchaReady;
  }
  function resetCaptcha(form){
    form._dreamyCaptchaToken = '';
    if(window.turnstile && form._dreamyCaptchaId != null) window.turnstile.reset(form._dreamyCaptchaId);
  }
  function send(form,fileInput,payload){
    return prepare(form).then(function(c){
      if(!form._dreamyCaptchaToken) throw new Error('Please complete the security verification before sending.');
      var body = new FormData();
      body.append('payload',JSON.stringify(payload));
      body.append('cf-turnstile-response',form._dreamyCaptchaToken);
      var trap = form.querySelector('[name="_honey"]');
      body.append('_honeypot',trap ? trap.value : '');
      if(fileInput && fileInput.files.length) body.append('attachment',fileInput.files[0]);
      var controller = new AbortController();
      var timer = window.setTimeout(function(){ controller.abort(); },75000);
      return fetch(c.gateway,{method:'POST',body:body,signal:controller.signal,credentials:'omit'})
        .then(function(r){
          return r.json().catch(function(){ return {}; }).then(function(result){
            if(!r.ok || result.success !== true){
              throw new Error(result.message || 'The request could not be accepted. Please contact us by email or WhatsApp.');
            }
          });
        }).catch(function(error){
          if(error.name === 'AbortError') throw new Error('We could not confirm delivery. Please contact us by email or WhatsApp before sending again.');
          if(error instanceof TypeError) throw new Error('We could not confirm delivery. Please check your connection and contact us before sending again.');
          throw error;
        }).finally(function(){ window.clearTimeout(timer); resetCaptcha(form); });
    });
  }
  window.DreamyFormspark = {prepare:prepare,send:send};
})();
