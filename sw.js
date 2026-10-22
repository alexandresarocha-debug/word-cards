const V='words-v11';const F=['./','index.html','cards.js','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim()});
function good(r,req){if(!r||!r.ok||r.redirected)return false;const t=r.headers.get('content-type')||'';if(req.mode==='navigate'||req.url.endsWith('.html'))return t.includes('text/html');if(req.url.endsWith('.js'))return t.includes('javascript');return true}
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET'||new URL(q.url).origin!==location.origin)return;
e.respondWith(caches.open(V).then(async c=>{const key=q.mode==='navigate'?'index.html':q;const hit=await c.match(key,{ignoreSearch:true});
const net=fetch(q,{cache:'no-store'}).then(r=>{if(good(r,q)){c.put(key,r.clone());return r}if(hit)return hit;return r}).catch(()=>hit||Response.error());
if(hit){e.waitUntil(net);return hit}return net}))});
