if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let t={};const c=e=>n(e,s),d={module:{uri:s},exports:t,require:c};i[s]=Promise.all(o.map((e=>d[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-0de99855"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"img/facebook_128px.png",revision:"be5934f108d83659a841384e4b690d0c"},{url:"img/facebook_512px.png",revision:"b5879409f4dedbdd98a09ca2937d0963"},{url:"index.html",revision:"3b30d6e4e1ce7c226042b48524b565e8"},{url:"manifest.json",revision:"84f2850fbf06e02d619dc8d551693ef1"},{url:"manifest.webapp",revision:"71431808a6cc2577bebbc07ad50b7484"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map