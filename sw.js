const V='words-v31';const F=['./','index.html','cards.js','manifest.json','icon-192.png','icon-512.png','images/gnarled.jpg','images/bogs.jpg','images/loam.jpg','images/bark.jpg','images/scaly.jpg','images/strewn.jpg','images/doused.jpg','images/brackishness.jpg'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(V).then(c=>Promise.all(F.map(u=>fetch(new Request(u,{cache:'reload'})).then(r=>{if(!r.ok)throw new Error(u);return c.put(u,r)})))));
  self.skipWaiting();
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));
});
self.addEventListener('message',e=>{if(e.data&&e.data.type==='SKIP_WAITING')self.skipWaiting()});
function good(r,req){if(!r||!r.ok||r.redirected)return false;const t=r.headers.get('content-type')||'';if(req.mode==='navigate'||req.url.endsWith('.html'))return t.includes('text/html');if(req.url.endsWith('.js'))return t.includes('javascript');return true}
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET'||new URL(q.url).origin!==location.origin)return;
e.respondWith(caches.open(V).then(async c=>{const key=q.mode==='navigate'?'index.html':q;const hit=await c.match(key,{ignoreSearch:true});
const net=fetch(q,{cache:'reload'}).then(r=>{if(good(r,q)){c.put(key,r.clone());return r}if(hit)return hit;return r}).catch(()=>hit||Response.error());
if(q.mode==='navigate'||!hit)return net;e.waitUntil(net);return hit}))});
