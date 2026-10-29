// Stage 1 only. Other pages continue using the original Formspark form/payload.
const key=s=>String(s||'').normalize('NFKC').toLowerCase().replace(/\(optional\)/g,'').replace(/[^\p{L}\p{N}]/gu,'');
const field=(label,aliases=[],empty='Not provided')=>({label,aliases:[label,...aliases].map(key),empty});
const customer=[field('Full name',['Your name','Name']),field('Email address',['Email']),field('Phone number',['Phone','Phone (optional)'])];
const contact=[['Contact details',customer],['Enquiry',[field('Subject'),field('Message')]]];
const cupcakes=[
 ['Customer',customer],
 ['Event',[field('Event date',['Date']),field('Time',['Time (optional)']),field('Event type',['Event type (optional)'],'Not selected')]],
 ['Cupcakes',[field('Product',['Product name']),field('Quantity',['Cupcake qty','Cupcake quantity']),field('Flavours',['Cupcake flavours','Cupcake Flavours'],'Not selected'),field('Flavour selection summary',['Cupcake flavour selection']),field('Flavour split',['Flavour split (optional)','Flavour split / notes (optional)','Cupcake flavour split','Flavour quantities (optional)']),field('Frosting',['Frosting type'],'Not selected'),field('Dietary preference',[],'Not selected')]],
 ['Design & notes',[field('Reference links',['Reference links (optional)']),field('Notes / design ideas',['Notes','Message']),field('Budget guide',['Budget from (optional)','Budget from'])]],
 ['Collection & delivery',[field('Delivery or collection',['Delivery or collection?','Collection / delivery'],'Not selected'),field('Postcode / area',['Postcode'])]]
];
export function pilotKind(data){
 let path;try{path=new URL(data.page).pathname.toLowerCase().replace(/\/index\.html$/,'/');}catch{return null;}
 if(path==='/'&&data.form==='Contact form - Home page')return 'contact';
 if(path==='/products/cupcakes/'&&data.form==='Product order form - Cupcakes')return 'cupcakes';
 return null;
}
export function pilotNotification(data,meta,env){
 const kind=pilotKind(data);if(!kind)return null;
 const formId=env[kind==='contact'?'FORMSPARK_CONTACT_FORM_ID':'FORMSPARK_CUPCAKES_FORM_ID'];
 if(!formId)return null;
 if(!/^[a-zA-Z0-9_-]+$/.test(formId))throw Error('Invalid pilot email destination');
 const rows=(data.fieldRows||[]).map(r=>({label:r.label,value:r.value,key:key(r.label)}));const used=new Set();
 const groups=(kind==='contact'?contact:cupcakes).map(([title,schema])=>({title,items:schema.map(f=>{
   const matches=rows.map((r,i)=>({r,i})).filter(({r})=>f.aliases.includes(r.key));matches.forEach(({i})=>used.add(i));
   let value=matches.map(({r})=>r.value.trim()).filter(Boolean).join('\n');
   if(!value&&f.label==='Full name')value=data.name;
   if(!value&&f.label==='Email address')value=data.email;
   return {label:f.label,value:value||f.empty,empty:!value};
 })}));
 const extra=rows.filter((r,i)=>!used.has(i)).map(r=>({label:r.label,value:r.value.trim()||'Not provided',empty:!r.value.trim()}));
 if(extra.length)groups.push({title:'Additional details',items:extra});
 const reference='DC-'+meta.id.replaceAll('-','').slice(0,12);
 return {formId,submission:{name:data.name,email:data.email,subject:data.subject,Form:data.form,'Page URL':data.page,'Submission ID':meta.id,'Submitted at':meta.createdAt,
   message:data.fields.join('\n\n'),Heading:kind==='contact'?'Contact enquiry':'Cupcake enquiry',Groups:groups,
   Attachment:{provided:!!meta.photo,name:meta.fileName||'Not attached',url:meta.photo||''},
   Reference:reference,_email:{from:'Dreamy Cake',subject:'Dreamy Cake | '+(kind==='contact'?'Contact enquiry':'Cupcake enquiry')+' — '+data.name.replace(/[\r\n]+/g,' ').slice(0,80)+' ['+reference+']'}
 }};
}
