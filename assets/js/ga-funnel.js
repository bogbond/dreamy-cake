/* v2.0.0: aggregate journey measurement, never form contents or personal details. */
(function(){
  'use strict';
  var pagePath=location.pathname;
  var match=pagePath.match(/^\/Products\/([a-z0-9-]+)\/?$/);
  var slug=match?match[1]:'none';
  var pageType=match?'product':/^\/Bespoke-Order\//.test(pagePath)?'bespoke':/^\/Corporate-Cakes\//.test(pagePath)?'corporate':pagePath==='/'?'home':'information';
  var receiptKey='dc_analytics_accepted_v1';
  var seen=Object.create(null),states=new WeakMap(),pendingVisible=new Map();
  var forms=[];
  function accepted(){return window.__dc_consent_choice==='accept';}
  function emit(name,params){
    if(!accepted())return false;
    try { window.gtag('event',name,Object.assign({page_path:pagePath,page_type:pageType,product_slug:slug},params||{}));return true; } catch(e){return false;}
  }
  function once(key,name,params){if(seen[key])return;if(emit(name,params))seen[key]=true;}
  function identify(form){
    if(form.id==='bespokeOrderForm')return {form_id:'bespoke',form_type:'bespoke'};
    if(form.id==='contactFormEnhanced')return {form_id:'home_contact',form_type:'contact'};
    if(form.id==='corporateEnquiryForm')return {form_id:'corporate',form_type:'corporate'};
    return {form_id:slug==='none'?'general':slug,form_type:'product'};
  }
  function managed(form){return !!form&&forms.indexOf(form)!==-1;}
  function productOf(form){
    if(slug!=='none')return slug;
    var selected=form.querySelector('input[name="cake_category"]:checked');
    return selected?({'Celebration Cake':'celebration-cake','Themed Cake':'themed-cake','Mini / Bento Cake':'mini-bento-cake','Wedding / Tiered Cake':'wedding-cake'}[selected.value]||'none'):'none';
  }
  function state(form){if(!states.has(form))states.set(form,{receipt:false});return states.get(form);}
  function formEmit(form,name,params){return emit(name,Object.assign(identify(form),{product_slug:productOf(form)},params||{}));}
  function group(control){
    var name=control.name||'';
    if(/name|email|phone|company/.test(name))return 'contact_details';
    if(/date|time|event|guest|serving/.test(name))return 'occasion';
    if(/address|postcode|recipient|delivery|collection|fulfil/.test(name))return 'fulfilment';
    if(/attachment|file|photo|image/.test(name))return 'inspiration_upload';
    if(/message|note|reference|link|design/.test(name))return 'design';
    if(/allerg|diet/.test(name))return 'product_details';
    return 'product_details';
  }
  function start(form){once('start:'+identify(form).form_id,'enquiry_form_start',identify(form));}
  function receipt(form){
    var s=state(form);if(s.receipt)return;s.receipt=true;
    if(!accepted())return;
    var payload={at:Date.now(),form:identify(form),product_slug:productOf(form),page_path:pagePath,page_type:pageType};
    try {sessionStorage.setItem(receiptKey,JSON.stringify(payload));}
    catch(e){formEmit(form,'generate_lead',{provider:'formspark'});}
  }
  function consumeReceipt(){
    if(!/^\/Thank-You\//.test(pagePath)||!accepted())return;
    once('thankyou','thank_you_view');
    try {
      var raw=sessionStorage.getItem(receiptKey); if(!raw)return;
      sessionStorage.removeItem(receiptKey);
      var r=JSON.parse(raw);
      if(!r||!r.form||Date.now()-r.at<0||Date.now()-r.at>600000)return;
      if(!/^[a-z0-9_-]{1,80}$/.test(r.form.form_id)||!/^(product|contact|bespoke|corporate)$/.test(r.form.form_type))return;
      emit('generate_lead',{form_id:r.form.form_id,form_type:r.form.form_type,product_slug:r.product_slug,page_path:r.page_path,page_type:r.page_type,provider:'formspark'});
    }catch(e){}
  }
  function locationOf(el){
    if(el.closest('footer'))return 'footer';if(el.closest('header'))return 'header';
    var section=el.closest('section[id]');return section?section.id:'body';
  }
  function inspectVisible(){
    if(!accepted())return;
    pendingVisible.forEach(function(fn,node){
      var r=node.getBoundingClientRect(),w=r.right-r.left,h=r.bottom-r.top;
      var visible=Math.max(0,Math.min(r.right,innerWidth)-Math.max(r.left,0))*Math.max(0,Math.min(r.bottom,innerHeight)-Math.max(r.top,0));
      if(w>0&&h>0&&visible/(w*h)>=0.5)fn();
    });
  }
  var observer=typeof IntersectionObserver==='function'?new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting&&entry.intersectionRatio>=0.5){var fn=pendingVisible.get(entry.target);if(fn)fn();}});},{threshold:0.5}):null;
  function observe(node,fn){if(!node)return;pendingVisible.set(node,fn);if(observer)observer.observe(node);}
  function ready(){
    if(!accepted())return;
    if(slug!=='none')once('product','view_item',{items:[{item_id:slug,item_name:slug,item_category:'cakes'}]});
    inspectVisible();consumeReceipt();
  }
  function boot(){
    forms=Array.prototype.slice.call(document.querySelectorAll('form.product-form, #contactFormEnhanced, #bespokeOrderForm, #corporateEnquiryForm'));
    forms.forEach(function(form){observe(form.querySelector('input:not([type="hidden"]),select,textarea')||form,function(){once('formview:'+identify(form).form_id,'enquiry_form_view',identify(form));});});
    document.querySelectorAll('#pricing .price-card').forEach(function(card){
      var item={item_id:card.getAttribute('data-item-id')||'cake',item_name:card.getAttribute('data-item-name')||'Cake',item_category:'cakes'};
      observe(card,function(){once('card:'+item.item_id,'view_item_list',{item_list_name:'Cake Menu',items:[item]});});
    });
    ['pricing','portfolio','contact','sizes-guide','home-reviews'].forEach(function(id){
      var section=document.getElementById(id);if(section)observe(section.querySelector('h2,h3')||section,function(){once('section:'+id,'section_view',{section_id:id});});
    });
    function promotions(){document.querySelectorAll('.dc-promo-overlay, #dc-bundle-offer').forEach(function(p){
      var node=p.querySelector('h2')||p,id=p.id==='dc-bundle-offer'?'bundle':'seasonal';
      if(!pendingVisible.has(node))observe(node,function(){once('promotion:'+id,'view_promotion',{promotion_id:id});});
    });}
    promotions();
    if(typeof MutationObserver==='function'&&document.body)new MutationObserver(promotions).observe(document.body,{childList:true});
    ready();
  }
  document.addEventListener('dc:analytics-ready',ready);
  document.addEventListener('focusin',function(e){var form=e.target.closest&&e.target.closest('form');if(managed(form))once('formview:'+identify(form).form_id,'enquiry_form_view',identify(form));});
  document.addEventListener('input',function(e){
    var el=e.target,form=el.closest&&el.closest('form');if(!managed(form)||el.type==='hidden'||el.name==='_honey')return;
    start(form);once('step:'+identify(form).form_id+':'+group(el),'enquiry_form_step',Object.assign(identify(form),{step_name:group(el)}));
  });
  document.addEventListener('change',function(e){
    var el=e.target,form=el.closest&&el.closest('form');if(!managed(form))return;start(form);
    // Only fixed commercial options; never free text or medical/dietary details.
    if(el.name==='cake_size'&&(el.tagName==='SELECT'||el.type==='radio')){
      var size=String(el.value).match(/^(6-inch short|6-inch regular|6-inch tall|8-inch regular|8-inch tall|10-inch regular|Mini \/ Bento|Mini 2-tier|2-tier classic)/);
      if(size)formEmit(form,'enquiry_option_select',{option_name:'cake_size',option_code:size[1].toLowerCase().replace(/[^a-z0-9]+/g,'_')});
    }
    if(el.name==='cake_category'&&el.type==='radio')formEmit(form,'enquiry_option_select',{option_name:'cake_category',option_code:'category_'+productOf(form).replace(/-/g,'_')});
    if(el.name==='fulfilment'&&el.type==='radio'&&/^(collection|delivery)$/.test(el.value))formEmit(form,'enquiry_option_select',{option_name:'fulfilment',option_code:el.value});
    once('step:'+identify(form).form_id+':'+group(el),'enquiry_form_step',Object.assign(identify(form),{step_name:group(el)}));
  });
  document.addEventListener('invalid',function(e){
    var form=e.target.closest&&e.target.closest('form');if(!managed(form))return;
    once('invalid:'+identify(form).form_id+':'+group(e.target),'enquiry_validation_error',Object.assign(identify(form),{field_group:group(e.target),error_type:'invalid_field'}));
  },true);
  document.addEventListener('dc:form-status',function(e){
    var d=e.detail||{},form=d.form;if(!managed(form))return;
    if(d.stage==='attempt'){state(form).receipt=false;formEmit(form,'enquiry_submit_attempt',{});}
    else if(d.stage==='accepted')receipt(form);
    else if(d.stage==='error')formEmit(form,'enquiry_submit_error',{error_type:/^(security_verification|unconfirmed_delivery|service_unavailable|request_failed)$/.test(d.error_type)?d.error_type:'request_failed'});
    else if(d.stage==='handoff')formEmit(form,'enquiry_handoff',{provider:/^(formly|formsubmit)$/.test(d.provider)?d.provider:'other'});
  });
  document.addEventListener('click',function(e){
    var target=e.target;
    if(target.closest&&target.closest('#home-reviews button'))emit('review_interaction',{interaction:'carousel_control',location:'home-reviews'});
    if(target.closest&&target.closest('#portfolio .gallery img'))emit('portfolio_interaction',{interaction:'view_design',location:'portfolio'});
    if(target.closest&&target.closest('.dc-promo-overlay button, #dc-bundle-offer button'))emit('select_promotion',{interaction:'dismiss',promotion_id:target.closest('#dc-bundle-offer')?'bundle':'seasonal'});
    if(target.closest&&target.closest('#dc-promo-launcher'))emit('select_promotion',{interaction:'open',promotion_id:'seasonal'});
    var a=e.target.closest&&e.target.closest('a');if(!a)return;
    var href=a.getAttribute('href')||'',where=locationOf(a);
    var contact=/^tel:/i.test(href)?'phone':/^mailto:/i.test(href)?'email':/^https:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)?'whatsapp':null;
    if(contact){if(a.closest('.credits'))return;emit('contact_click',{contact_method:contact,location:where});return;}
    var url;try{url=new URL(href,location.href);}catch(err){return;}
    if(url.origin!==location.origin)return;
    if(a.closest('.dc-promo-overlay, #dc-bundle-offer'))emit('select_promotion',{interaction:'open_collection',promotion_id:a.closest('#dc-bundle-offer')?'bundle':'seasonal'});
    if((/^\/(Bespoke-Order|Products)\//.test(url.pathname)&&(/#order/.test(url.hash)||url.pathname==='/Bespoke-Order/'))||url.hash==='#corporate-enquiry'||url.hash==='#contact')emit('order_click',{location:where});
    var card=a.closest('#pricing .price-card');if(card)emit('select_item',{item_list_name:'Cake Menu',items:[{item_id:card.getAttribute('data-item-id')||'cake',item_name:card.getAttribute('data-item-name')||'Cake',item_category:'cakes'}]});
    if(a.closest('#home-reviews'))emit('review_interaction',{interaction:'open_reviews',location:where});
    if(a.closest('#portfolio'))emit('portfolio_interaction',{interaction:'request_design',location:where});
    if(a.closest('.know-more'))emit('info_chip_click',{location:where});
  },{passive:true});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
