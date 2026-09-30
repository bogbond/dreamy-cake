// Cloudflare Worker module. All credentials are configured as encrypted Worker secrets.
// Required: FORMSPARK_FORM_ID, TURNSTILE_SECRET_KEY,
// CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET.
const ORIGINS = ['https://dreamycake.co.uk', 'https://www.dreamycake.co.uk'];
const MAX_FILE = Math.floor(9.5 * 1024 * 1024);
const MAX_REQUEST = MAX_FILE + 128 * 1024;
const EXTENSIONS = ['jpg','jpeg','png','webp','gif','bmp','heic','heif','pdf','tif','tiff'];
const TYPES = ['image/jpeg','image/png','image/webp','image/gif','image/bmp','image/heic','image/heif','application/pdf','image/tiff'];
class FormError extends Error {
  constructor(status,message){ super(message); this.status=status; }
}
function reply(origin,status,message,success=false){
  return new Response(JSON.stringify({success,message}), {
    status,
    headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store',
      'Access-Control-Allow-Origin':origin,'Vary':'Origin','X-Content-Type-Options':'nosniff'}
  });
}
async function limitedBody(request){
  if(Number(request.headers.get('Content-Length')) > MAX_REQUEST) throw new FormError(413,'The attachment is too large. Please choose a file under 10 MB.');
  if(!request.body) throw new FormError(400,'The request is empty.');
  const reader=request.body.getReader();
  const chunks=[];
  let size=0;
  while(true){
    const part=await reader.read();
    if(part.done) break;
    size+=part.value.byteLength;
    if(size>MAX_REQUEST){ await reader.cancel(); throw new FormError(413,'The attachment is too large. Please choose a file under 10 MB.'); }
    chunks.push(part.value);
  }
  const bytes=new Uint8Array(size);
  let offset=0;
  for(const chunk of chunks){ bytes.set(chunk,offset); offset+=chunk.byteLength; }
  try { return await new Response(bytes,{headers:{'Content-Type':request.headers.get('Content-Type')}}).formData(); }
  catch { throw new FormError(400,'The form data could not be read.'); }
}
function text(value,max){ return typeof value==='string' && value.length<=max ? value.trim() : ''; }
function payloadFrom(form,origin){
  const raw=form.get('payload');
  if(typeof raw!=='string' || raw.length>65000) throw new FormError(400,'The request is too long. Please shorten your message.');
  let data;
  try { data=JSON.parse(raw); } catch { throw new FormError(400,'The request could not be read.'); }
  if(!data || Array.isArray(data) || typeof data!=='object') throw new FormError(400,'The request could not be read.');
  const name=text(data.name,200), email=text(data.email,254);
  if(!name || !/^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/.test(email)) throw new FormError(400,'Please enter your name and a valid email address.');
  let page;
  try { page=new URL(data.page); } catch { throw new FormError(400,'The form page could not be verified.'); }
  if(page.origin!==origin) throw new FormError(400,'The form page could not be verified.');
  if(!Array.isArray(data.fields) || !data.fields.length || data.fields.length>100) throw new FormError(400,'Please complete your enquiry.');
  const fields=data.fields.map(row=>{
    if(!row || typeof row!=='object' || !text(row.label,200) || typeof row.value!=='string' || row.value.length>10000){
      throw new FormError(400,'Please shorten the details in your enquiry.');
    }
    return `${text(row.label,200)}: ${row.value}`;
  });
  return {name,email,subject:text(data.subject,150)||'Dreamy Cake enquiry',form:text(data.form,200),page:page.href,fields};
}
async function checkFile(file){
  if(!file || typeof file==='string' || file.size===0) return null;
  const extension=file.name.split('.').pop().toLowerCase();
  if(file.size>MAX_FILE) throw new FormError(413,'The attachment is too large. Please choose a file under 10 MB.');
  if(!EXTENSIONS.includes(extension) || (file.type && !TYPES.includes(file.type))) throw new FormError(400,'Please choose an image or PDF attachment.');
  const b=new Uint8Array(await file.slice(0,16).arrayBuffer());
  const ascii=(start,end)=>String.fromCharCode(...b.slice(start,end));
  const valid=b[0]===0xff && b[1]===0xd8 && b[2]===0xff ||
    b[0]===0x89 && ascii(1,4)==='PNG' || ascii(0,3)==='GIF' || ascii(0,2)==='BM' ||
    ascii(0,4)==='RIFF' && ascii(8,12)==='WEBP' || ascii(4,8)==='ftyp' ||
    ascii(0,5)==='%PDF-' || ascii(0,4)==='II*\0' || ascii(0,4)==='MM\0*';
  if(!valid) throw new FormError(400,'This file does not appear to be an image or PDF.');
  return file;
}
async function timedFetch(url,options,ms=15000){
  return fetch(url,{...options,signal:AbortSignal.timeout(ms)});
}
async function verify(form,request,env,origin){
  const token=text(form.get('cf-turnstile-response'),2048);
  if(!token) throw new FormError(400,'Please complete the security verification.');
  const body=new URLSearchParams({secret:env.TURNSTILE_SECRET_KEY,response:token});
  const ip=request.headers.get('CF-Connecting-IP');
  if(ip) body.set('remoteip',ip);
  const response=await timedFetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',body});
  const result=await response.json();
  if(!response.ok || !result.success || result.hostname!==new URL(origin).hostname || result.action!=='cake_enquiry'){
    throw new FormError(400,'Security verification expired or failed. Please complete it again.');
  }
}
async function upload(file,env,id){
  const timestamp=String(Math.floor(Date.now()/1000));
  const publicId=`dreamy-cake/enquiries/${id}`;
  const unsigned=`public_id=${publicId}&timestamp=${timestamp}${env.CLOUDINARY_API_SECRET}`;
  const digest=await crypto.subtle.digest('SHA-1',new TextEncoder().encode(unsigned));
  const signature=Array.from(new Uint8Array(digest),b=>b.toString(16).padStart(2,'0')).join('');
  const body=new FormData();
  body.append('file',file,file.name);
  body.append('timestamp',timestamp);
  body.append('public_id',publicId);
  body.append('api_key',env.CLOUDINARY_API_KEY);
  body.append('signature',signature);
  const response=await timedFetch(`https://api.cloudinary.com/v1_1/${encodeURIComponent(env.CLOUDINARY_CLOUD_NAME)}/auto/upload`,{method:'POST',body},30000);
  const result=await response.json();
  if(!response.ok || !result.secure_url || !result.secure_url.startsWith('https://res.cloudinary.com/')){
    throw new FormError(502,'The photo could not be uploaded. Please contact us by email or WhatsApp.');
  }
  return result.secure_url;
}
export default {
  async fetch(request,env){
    const origin=request.headers.get('Origin')||'';
    if(!ORIGINS.includes(origin)) return new Response('Forbidden',{status:403});
    if(new URL(request.url).pathname!=='/submit') return reply(origin,404,'Not found.');
    if(request.method==='OPTIONS') return new Response(null,{status:204,headers:{
      'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'POST, OPTIONS',
      'Access-Control-Allow-Headers':'Content-Type','Access-Control-Max-Age':'600','Vary':'Origin'
    }});
    if(request.method!=='POST') return reply(origin,405,'Please submit the form using POST.');
    try {
      if(!request.headers.get('Content-Type')?.startsWith('multipart/form-data;')) throw new FormError(400,'Please submit the enquiry through the website form.');
      for(const key of ['FORMSPARK_FORM_ID','TURNSTILE_SECRET_KEY','CLOUDINARY_CLOUD_NAME','CLOUDINARY_API_KEY','CLOUDINARY_API_SECRET']){
        if(!env[key]) throw new FormError(503,'The enquiry service is temporarily unavailable. Please contact us by email or WhatsApp.');
      }
      if(!/^[a-zA-Z0-9_-]+$/.test(env.FORMSPARK_FORM_ID)) throw new FormError(503,'The enquiry service is temporarily unavailable.');
      const form=await limitedBody(request);
      if(text(form.get('_honeypot'),10000)) throw new FormError(400,'The request could not be accepted.');
      const data=payloadFrom(form,origin);
      const files=form.getAll('attachment');
      if(files.length>1) throw new FormError(400,'Please attach only one file.');
      const file=await checkFile(files[0]);
      // Nothing reaches either paid/quota-limited provider until Turnstile succeeds.
      await verify(form,request,env,origin);
      const id=crypto.randomUUID();
      const photo=file ? await upload(file,env,id) : '';
      const submission={name:data.name,email:data.email,subject:data.subject,
        Form:data.form,'Page URL':data.page,'Submission ID':id,
        'Submitted at':new Date().toISOString(),message:data.fields.join('\n\n')};
      if(photo){ submission['Attachment URL']=photo; submission['Attachment name']=file.name; }
      const response=await timedFetch(`https://submit-form.com/${env.FORMSPARK_FORM_ID}`,{
        method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(submission)
      },20000);
      const result=await response.json().catch(()=>({}));
      if(response.status===429) throw new FormError(503,'The enquiry service is temporarily unavailable. Please contact us by email or WhatsApp.');
      if(!response.ok || result.error) throw new FormError(502,'We could not confirm delivery. Please contact us by email or WhatsApp before sending again.');
      return reply(origin,200,'Your enquiry was accepted.',true);
    } catch(error){
      return reply(origin,error instanceof FormError ? error.status : 502,
        error instanceof FormError ? error.message : 'We could not confirm delivery. Please contact us by email or WhatsApp before sending again.');
    }
  }
};
