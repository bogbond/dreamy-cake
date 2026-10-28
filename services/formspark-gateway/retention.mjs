// Only the existing Dreamy Cake enquiry-upload namespace is eligible.
const PREFIX='dreamy-cake/enquiries/';
const ID=/^dreamy-cake\/enquiries\/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;
const CLOUD='r8lufmpe';
const RESOURCE_TYPES=['image','raw','video'];
const MAX_CALLS=45; // Below Workers Free's 50-subrequest ceiling.

export function expiresAt(createdAt){
  if(typeof createdAt!=='string'||!/^\d{4}-\d{2}-\d{2}T/.test(createdAt))return null;
  const date=new Date(createdAt);if(!Number.isFinite(date.getTime()))return null;
  const day=date.getUTCDate();date.setUTCDate(1);date.setUTCMonth(date.getUTCMonth()+6);
  const last=new Date(Date.UTC(date.getUTCFullYear(),date.getUTCMonth()+1,0)).getUTCDate();
  date.setUTCDate(Math.min(day,last));return date.toISOString();
}

export function isExpired(asset,type,now){
  if(!asset||!RESOURCE_TYPES.includes(type)||asset.resource_type!==type||asset.type!=='upload'||!ID.test(asset.public_id||''))return false;
  const expiry=expiresAt(asset.created_at);return expiry!==null&&Date.parse(expiry)<=now;
}

export async function cleanExpired(env,{now=Date.now(),dryRun=env.RETENTION_DRY_RUN==='true'}={}){
  if(env.CLOUDINARY_CLOUD_NAME!==CLOUD||!env.CLOUDINARY_API_KEY||!env.CLOUDINARY_API_SECRET)throw Error('Dreamy Cake retention configuration is missing or out of scope');
  if(!Number.isFinite(now))throw Error('Invalid retention clock');
  const authorization='Basic '+btoa(env.CLOUDINARY_API_KEY+':'+env.CLOUDINARY_API_SECRET);
  const stats={event:'dreamy-cake-retention',dryRun,checkedAt:new Date(now).toISOString(),scanned:0,eligible:0,expired:0,deleted:0,requests:0};
  async function api(type,options={},params){
    if(stats.requests>=MAX_CALLS)throw Error('Dreamy Cake retention reached its bounded API budget; inspect scheduled run before retrying');
    stats.requests++;
    const url=new URL(`https://api.cloudinary.com/v1_1/${CLOUD}/resources/${type}/upload`);
    if(params)url.search=new URLSearchParams(params).toString();
    const response=await fetch(url,{...options,headers:{Authorization:authorization},signal:AbortSignal.timeout(15000)});
    const result=await response.json().catch(()=>null);
    if(!response.ok||!result||result.error)throw Error('Dreamy Cake retention provider request failed: '+response.status);
    return result;
  }
  // Finish a complete, read-only inventory before starting any deletion.
  const candidates=[];
  for(const type of RESOURCE_TYPES){
    let cursor;const cursors=new Set();
    do{
      const query={prefix:PREFIX,max_results:'500',fields:'public_id,resource_type,type,created_at'};
      if(cursor)query.next_cursor=cursor;
      const result=await api(type,{},query);
      if(!Array.isArray(result.resources))throw Error('Invalid retention inventory response');
      for(const asset of result.resources){
        stats.scanned++;
        if(ID.test(asset.public_id||'')&&asset.type==='upload'&&asset.resource_type===type&&expiresAt(asset.created_at))stats.eligible++;
        if(isExpired(asset,type,now)){stats.expired++;candidates.push({id:asset.public_id,type});}
      }
      cursor=result.next_cursor;
      if(cursor){if(typeof cursor!=='string'||cursors.has(cursor))throw Error('Invalid retention pagination cursor');cursors.add(cursor);}
    }while(cursor);
  }
  if(dryRun)return stats;
  for(const type of RESOURCE_TYPES){
    const ids=[...new Set(candidates.filter(x=>x.type===type).map(x=>x.id))];
    for(let start=0;start<ids.length;start+=100){
      const batch=ids.slice(start,start+100);
      if(batch.some(id=>!ID.test(id)))throw Error('Refused an out-of-scope retention batch');
      const body=new URLSearchParams({invalidate:'true'});for(const id of batch)body.append('public_ids[]',id);
      const result=await api(type,{method:'DELETE',body});
      if(!result.deleted||typeof result.deleted!=='object'||result.partial)throw Error('Incomplete retention deletion response');
      if(Object.keys(result.deleted).some(id=>!batch.includes(id)))throw Error('Unexpected retention deletion response');
      for(const id of batch){if(!['deleted','not_found'].includes(result.deleted[id]))throw Error('A retention deletion did not complete');stats.deleted++;}
    }
  }
  return stats;
}
