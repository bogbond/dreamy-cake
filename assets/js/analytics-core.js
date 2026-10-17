/* Dreamy Cake analytics v1. Basic consent: no Google tag until analytics consent.
   Only the published website can send data. Local previews retain an in-memory log. */
(function(){
  'use strict';
  var id = 'G-CC2NRDSRQ9';
  var live = location.protocol === 'https:' && /^(www\.)?dreamycake\.co\.uk$/.test(location.hostname);
  var choice = null;
  try { var saved=JSON.parse(localStorage.getItem('dc_consent')||'{}'); choice=/^(accept|reject)$/.test(saved.choice)?saved.choice:null; } catch(e){}
  window.GA_MEASUREMENT_ID=id;
  window.__dc_consent_choice=choice;
  window.__ga_loaded=false;
  window.dataLayer=window.dataLayer||[];
  window['ga-disable-'+id]=choice!=='accept'||!live;
  var log=[];
  function enqueue(){window.dataLayer.push(arguments);}
  var allowedEvents=['view_item','view_item_list','select_item','section_view','order_click','contact_click','info_chip_click','enquiry_form_view','enquiry_form_start','enquiry_form_step','enquiry_option_select','enquiry_validation_error','enquiry_submit_attempt','enquiry_submit_error','generate_lead','enquiry_handoff','thank_you_view','view_promotion','select_promotion','review_interaction','portfolio_interaction'];
  var allowedParams=['page_path','page_type','product_slug','form_id','form_type','location','step_name','option_name','option_code','field_group','error_type','provider','contact_method','interaction','section_id','promotion_id','item_list_name','items','item_id','item_name','item_category'];
  function pathOnly(value){
    try { var u=new URL(value,location.origin); return u.origin===location.origin?u.origin+u.pathname:u.origin+'/'; } catch(e){return '';}
  }
  function cleanParams(params){
    var result={};
    allowedParams.forEach(function(key){
      var value=params&&params[key];
      if(value==null)return;
      if(key==='items'){
        if(Array.isArray(value))result.items=value.slice(0,25).map(function(item){
          var clean={}; ['item_id','item_name','item_category'].forEach(function(k){if(typeof item[k]==='string'&&/^[a-zA-Z0-9 _/.-]{1,90}$/.test(item[k]))clean[k]=item[k];});
          return clean;
        });
      } else if(typeof value==='string' && /^[a-zA-Z0-9 _/.-]{1,100}$/.test(value))result[key]=value;
    });
    return result;
  }
  function notify(){document.dispatchEvent(new CustomEvent('dc:analytics-ready'));}
  function consentParams(granted){return {analytics_storage:granted?'granted':'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',functionality_storage:'granted',security_storage:'granted'};}
  window.gtag=function(command,name,params){
    try {
      if(command==='consent'){
        var granted=window.__dc_consent_choice==='accept';
        window['ga-disable-'+id]=!granted||!live;
        enqueue('consent',name,consentParams(granted));
        if(name==='update'&&granted&&window.__ga_loaded)window.setTimeout(notify,0);
        return;
      }
      if(window.__dc_consent_choice!=='accept')return;
      if(command==='event'){
        if(allowedEvents.indexOf(name)===-1)return;
        var safe=cleanParams(params);
        if(!live){log.push({event:name,params:safe});document.dispatchEvent(new CustomEvent('dc:analytics-debug',{detail:{event:name,params:safe}}));return;}
        enqueue('event',name,safe);
      } else if(live){enqueue.apply(null,arguments);}
    }catch(e){}
  };
  window.dcClearGACookies=function(){
    try {sessionStorage.removeItem('dc_analytics_accepted_v1');}catch(e){}
    try { document.cookie.split(';').forEach(function(c){
      var name=c.split('=')[0].trim(); if(!/^(_ga(?:_|$)|_gid$|_gat)/.test(name))return;
      ['',location.hostname,'.'+location.hostname,'.dreamycake.co.uk'].forEach(function(domain){document.cookie=name+'=; Max-Age=0; path=/'+(domain?'; domain='+domain:'');});
    }); }catch(e){}
  };
  window.dcLoadGAOnce=function(){
    if(window.__dc_consent_choice!=='accept')return;
    window['ga-disable-'+id]=!live;
    if(window.__ga_loaded)return;
    window.__ga_loaded=true;
    if(live){
      window.gtag('js',new Date());
      var config={send_page_view:true,page_location:location.origin+location.pathname,page_referrer:pathOnly(document.referrer),allow_google_signals:false,allow_ad_personalization_signals:false};
      // Preserve campaign attribution without forwarding arbitrary query parameters.
      var query=new URLSearchParams(location.search);
      [['utm_source','campaign_source'],['utm_medium','campaign_medium'],['utm_campaign','campaign_name'],['utm_id','campaign_id'],['utm_content','campaign_content'],['utm_term','campaign_term']].forEach(function(pair){
        var v=query.get(pair[0]);if(v&&/^[a-zA-Z0-9 _.-]{1,100}$/.test(v))config[pair[1]]=v;
      });
      // Keep recognised advertising click IDs available for attribution, without
      // copying other URL fields or granting advertising consent.
      var attribution=new URLSearchParams();
      ['gclid','dclid','gbraid','wbraid','gad_source'].forEach(function(key){
        var value=query.get(key);if(value&&/^[a-zA-Z0-9_-]{1,256}$/.test(value))attribution.set(key,value);
      });
      if(attribution.toString())config.page_location+='?'+attribution.toString();
      window.gtag('config',id,config);
      if(!document.querySelector('script[data-dc-google-tag]')){
        var script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+id;script.setAttribute('data-dc-google-tag','');document.head.appendChild(script);
      }
    }
    notify();
  };
  if(!live)window.DreamyAnalyticsDebug={events:log,clear:function(){log.length=0;}};
  window.gtag('consent','default',{});
  if(choice==='accept')window.dcLoadGAOnce();
  else window.dcClearGACookies();
})();
