/* Cookie preferences v2. Optional purposes require a saved, explicit choice. */
(function(){
  'use strict';
  var key='dc_consent_v2',ttl=180*24*60*60*1000,now=Date.now();
  var current={version:2,essential:true,analytics:false,advertising:false,needsReview:true,updatedAt:0,expiresAt:0};
  function copy(){return Object.assign({},current);}
  function persist(){try{localStorage.setItem(key,JSON.stringify(current));localStorage.setItem('dc_consent',JSON.stringify({choice:current.analytics?'accept':'reject'}));}catch(e){}}
  try{
    var raw=localStorage.getItem(key),saved=raw?JSON.parse(raw):null;
    if(saved&&saved.version===2&&typeof saved.analytics==='boolean'&&typeof saved.advertising==='boolean'&&Number.isFinite(saved.updatedAt)&&Number.isFinite(saved.expiresAt)&&saved.updatedAt<=now&&saved.expiresAt>now&&saved.expiresAt<=saved.updatedAt+ttl){
      current=Object.assign({},current,saved,{essential:true,advertising:saved.analytics&&saved.advertising});
    }else if(!raw){
      var legacy=JSON.parse(localStorage.getItem('dc_consent')||'{}');
      if(legacy.choice==='accept'||legacy.choice==='reject'){
        current.analytics=legacy.choice==='accept';current.needsReview=current.analytics;
        current.updatedAt=now;current.expiresAt=now+ttl;persist();
      }
    }
  }catch(e){}
  window.__dc_consent_choice=current.analytics?'accept':'reject';
  window.DreamyConsent={
    get:copy,
    set:function(preferences){
      var stamp=Date.now();
      current={version:2,essential:true,analytics:preferences.analytics===true,advertising:preferences.analytics===true&&preferences.advertising===true,needsReview:false,updatedAt:stamp,expiresAt:stamp+ttl};
      window.__dc_consent_choice=current.analytics?'accept':'reject';persist();
      document.dispatchEvent(new CustomEvent('dc:consent-change',{detail:copy()}));
      return copy();
    }
  };
  window.addEventListener('storage',function(event){
    if(event.key===key||event.key===null)location.reload();
  });
})();
