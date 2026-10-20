/* Shared, keyboard-accessible preferences UI. No consent on dismiss/navigation. */
(function(){
  'use strict';
  if(!window.DreamyConsent||document.querySelector('[data-dc-cookie-ui]'))return;
  var api=window.DreamyConsent,restoreFocus=null,dialog=null,banner=null;
  var manage=document.createElement('button');
  manage.type='button';manage.className='dc-consent-manage dc-cookie-manage';
  manage.textContent='Cookies';manage.setAttribute('aria-label','Manage cookies');manage.setAttribute('data-dc-cookie-ui','');
  manage.addEventListener('click',openDetails);document.body.appendChild(manage);
  function action(label,handler){var b=document.createElement('button');b.type='button';b.className='dc-cookie-button';b.textContent=label;b.addEventListener('click',handler);return b;}
  function save(analytics,advertising){api.set({analytics:analytics,advertising:advertising});if(banner){banner.remove();banner=null;}closeDetails();}
  function showBanner(){
    if(banner)return;
    banner=document.createElement('section');banner.className='dc-cookie-banner';banner.setAttribute('aria-labelledby','dc-cookie-title');
    banner.innerHTML='<div class="dc-cookie-intro"><span class="dc-cookie-eyebrow">YOUR PRIVACY</span><h2 id="dc-cookie-title">Your cookie preferences</h2><p>We use essential cookies to keep our website working smoothly. With your permission, Google Analytics helps us improve your browsing experience and understand which Google ads lead to enquiries.</p><a href="/Privacy-Policy/#cookies">Privacy &amp; cookie details</a></div>';
    var actions=document.createElement('div');actions.className='dc-cookie-actions';
    var details=action('More details',openDetails);details.className='dc-cookie-details';
    actions.append(action('Accept all',function(){save(true,true);}),details);
    banner.appendChild(actions);document.body.appendChild(banner);
  }
  function closeDetails(){if(!dialog)return;dialog.close();dialog.remove();dialog=null;if(restoreFocus&&restoreFocus.isConnected)restoreFocus.focus();}
  function openDetails(){
    if(dialog)return;
    restoreFocus=document.activeElement;
    var prefs=api.get();dialog=document.createElement('dialog');dialog.className='dc-cookie-dialog';dialog.setAttribute('aria-labelledby','dc-cookie-settings-title');
    dialog.innerHTML='<div class="dc-cookie-dialog-head"><div><span class="dc-cookie-eyebrow">YOUR PRIVACY</span><h2 id="dc-cookie-settings-title">Cookie preferences</h2></div><button type="button" class="dc-cookie-close" aria-label="Close cookie preferences">×</button></div>'+
      '<p class="dc-cookie-description">Choose which optional cookies you&rsquo;d like to allow, then select Save choices. Optional measurement begins only when you accept or save your preferences. You can update your choice at any time using Cookies.</p>'+
      '<div class="dc-cookie-category"><div><h3>Essential</h3><p>Keep the website working, remember your cookie preferences and protect enquiry forms from spam.</p></div><label class="dc-cookie-switch"><input type="checkbox" role="switch" checked disabled aria-label="Essential cookies, always on"><span aria-hidden="true"></span><small>Always on</small></label></div>'+
      '<div class="dc-cookie-category"><div><h3>Analytics</h3><p id="dc-cookie-analytics-note">Help us improve the website by understanding how visitors explore our cakes and use our enquiry forms, using Google Analytics.</p></div><label class="dc-cookie-switch"><input id="dc-cookie-analytics" type="checkbox" role="switch" aria-label="Analytics cookies" aria-describedby="dc-cookie-analytics-note"><span aria-hidden="true"></span></label></div>'+
      '<div class="dc-cookie-category"><div><h3>Advertising measurement</h3><p id="dc-cookie-advertising-note">Help us understand which Google ads lead to enquiries. Uses Google Analytics, so Analytics must also be enabled. We do not use this setting for personalised ads or remarketing.</p></div><label class="dc-cookie-switch"><input id="dc-cookie-advertising" type="checkbox" role="switch" aria-label="Advertising measurement cookies" aria-describedby="dc-cookie-advertising-note"><span aria-hidden="true"></span></label></div>'+
      '<p class="dc-cookie-description">Your messages, contact details and uploaded filenames are not included in our analytics events.</p><p class="dc-cookie-description">Your preferences are remembered for up to 180 days. <a href="/Privacy-Policy/#cookies">Read our Privacy &amp; Cookie Policy</a>.</p>';
    var analytics=dialog.querySelector('#dc-cookie-analytics'),ads=dialog.querySelector('#dc-cookie-advertising');
    // Initial switches are a draft only. Never overwrite an explicit saved refusal.
    analytics.checked=prefs.needsReview?true:prefs.analytics;ads.checked=prefs.needsReview?true:prefs.advertising;ads.disabled=!analytics.checked;
    analytics.addEventListener('change',function(){ads.disabled=!analytics.checked;if(!analytics.checked)ads.checked=false;});
    var buttons=document.createElement('div');buttons.className='dc-cookie-dialog-actions';
    buttons.append(action('Accept all',function(){save(true,true);}),action('Save choices',function(){save(analytics.checked,ads.checked);}));
    dialog.appendChild(buttons);dialog.querySelector('.dc-cookie-close').addEventListener('click',closeDetails);
    dialog.addEventListener('cancel',function(event){event.preventDefault();closeDetails();});
    document.body.appendChild(dialog);dialog.showModal();dialog.querySelector('.dc-cookie-close').focus();
  }
  if(api.get().needsReview)showBanner();
})();
