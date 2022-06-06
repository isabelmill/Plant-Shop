(function(){"use strict";var t={7575:function(t,n,e){var r=e(9242),a=e(3396);function o(t,n,e,r,o,c){const s=(0,a.up)("app-header"),i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),(0,a.Wm)(i)],64)}var c=e(7139);const s={class:"app-header"},i=(0,a._)("div",{class:"logo"}," PLANT SHOP",-1),l=(0,a.Uk)("HOME"),u=(0,a.Uk)("STATS"),d=(0,a.Uk)("ADMIN"),p={class:"shopping-cart"},f={class:"dropbtn"},m={key:0,class:"dropdown-content"},h={class:"products"},v={class:"total"},g=(0,a._)("p",null,"Total: ",-1);function y(t,n,e,r,o,y){const w=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("section",s,[i,(0,a._)("nav",null,[(0,a.Wm)(w,{to:"/"},{default:(0,a.w5)((()=>[l])),_:1}),(0,a.Wm)(w,{to:"/stats"},{default:(0,a.w5)((()=>[u])),_:1}),(0,a.Wm)(w,{to:"/admin"},{default:(0,a.w5)((()=>[d])),_:1})]),(0,a._)("div",p,[(0,a._)("button",f,"Shopping Cart "+(0,c.zw)(y.cartProducts.length),1),y.cartProducts.length>0?((0,a.wg)(),(0,a.iD)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.cartProducts,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"cart-products",key:t},[(0,a._)("div",h,[(0,a._)("p",null,(0,c.zw)(t.title),1),(0,a._)("p",null,(0,c.zw)(t.price)+" $",1)])])))),128)),(0,a._)("div",v,[g,(0,a._)("p",null,(0,c.zw)(y.cartTotal)+" $",1)]),(0,a._)("button",{onClick:n[0]||(n[0]=(...t)=>y.pay&&y.pay(...t))},"Checkout")])):(0,a.kq)("",!0)])])}var w={name:"app-header",methods:{pay(){this.$store.dispatch({type:"pay",cart:this.cartProducts,total:this.cartTotal})}},computed:{cartProducts(){return this.$store.getters.cart},cartTotal(){return this.$store.getters.cartTotal}}},b=e(89);const P=(0,b.Z)(w,[["render",y]]);var _=P,T={name:"app",async created(){await this.$store.dispatch({type:"loadPlants"})},methods:{},components:{appHeader:_}};const k=(0,b.Z)(T,[["render",o]]);var E=k,S=e(678);const O={class:"home"},C={class:"plants-home"},D={class:"plant-img"},$=["src"],j={class:"img-on-hover"},A={class:"price-cart"},q=["onClick"];function H(t,n,e,r,o,s){return(0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("div",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.plants,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"plant",key:t._id},[(0,a._)("div",D,[(0,a._)("img",{src:t.img,alt:""},null,8,$),(0,a._)("div",j,[(0,a._)("p",null,(0,c.zw)(t.description),1)])]),(0,a._)("h2",null,(0,c.zw)(t.title),1),(0,a._)("div",A,[(0,a._)("h4",null,(0,c.zw)(t.price)+" USD",1),(0,a._)("button",{onClick:n=>s.buyPlant(t)},"+ Add To Cart",8,q)])])))),128))])])}var R={name:"HomeView",methods:{buyPlant(t){this.$store.commit({type:"addToCart",product:t})}},computed:{plants(){return this.$store.getters.plants}},components:{}};const z=(0,b.Z)(R,[["render",H]]);var M=z;const x=[{path:"/",name:"home",component:M},{path:"/stats",name:"stats",component:()=>e.e(443).then(e.bind(e,5285))},{path:"/admin",name:"admin",component:()=>e.e(328).then(e.bind(e,2958))}],L=(0,S.p7)({history:(0,S.PO)("/"),routes:x});var U=L,I=e(65),N=e(8466),W=e(3894);const Y={query:F,save:G,makeTransaction:Z};async function F(){try{return await W.R.get("transaction")}catch(t){console.log("query err:",t)}}async function G(t){try{return await W.R.post("transaction/",t)}catch(n){console.log("save err:",n)}}function Z(t,n){let e=t.map((t=>t._id)),r={date:new Date(Date.now()).toString(),formattedDate:B(),products:t,productsIds:[...new Set(e)],total:n};return r}function B(){let t=new Date,n=String(t.getDate()).padStart(2,"0"),e=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();return t=n+"."+e+"."+r,t}var K=(0,I.MT)({state:{plants:null,allPlants:null,transactions:null,cart:[]},getters:{plants(t){return t.plants},allPlants(t){return t.allPlants},transactions(t){return t.transactions},cart(t){return t.cart},cartLength(t){return t.cart.length},cartTotal({cart:t}){return t.reduce(((t,n)=>t+n.price),0)},mostSold(t){return t.transactions}},mutations:{setTransactions(t,{transactions:n}){t.transactions=n},setPlants(t,{plants:n}){t.plants=n},setAllPlants(t,{plants:n}){t.allPlants=n},removePlant(t,{id:n}){const e=t.plants.findIndex((t=>t._id===n));t.plants.splice(e,1)},savePlant(t,{plant:n}){const e=t.plants.findIndex((t=>t._id===n._id));-1!==e?t.plants.splice(e,1,n):t.plants.push(n)},addToCart(t,{product:n}){t.cart.unshift(n)},clearCart(t){t.cart=[]}},actions:{async loadPlants({commit:t}){try{let n=await N.P.query();t({type:"setPlants",plants:n})}catch(n){console.log("Error cant load plants")}},async loadTransactions({commit:t}){try{let n=await Y.query();t({type:"setTransactions",transactions:n})}catch(n){console.log("Error cant load transactions")}},async removePlant({commit:t},{id:n}){try{await N.P.remove(n),t({type:"removePlant",id:n})}catch(e){console.log("Error cant remove plant")}},async savePlant({commit:t},{plant:n}){try{await N.P.save(n),t({type:"savePlant",plant:n})}catch(e){console.log("Error cant save plant")}},async pay({commit:t},{cart:n,total:e}){try{let r=Y.makeTransaction(n,e);await Y.save(r),t({type:"clearCart"})}catch(r){console.log("Error cant update transaction")}}},modules:{}});(0,r.ri)(E).use(K).use(U).mount("#app")},3894:function(t,n,e){e.d(n,{R:function(){return s}});var r=e(6265),a=e.n(r);const o="/api/";console.log("BASE_URL:",o);var c=a().create({withCredentials:!0});const s={get(t,n){return i(t,"GET",n)},post(t,n){return i(t,"POST",n)},put(t,n){return i(t,"PUT",n)},delete(t,n){return i(t,"DELETE",n)}};async function i(t,n="GET",e=null){try{const r=await c({url:`${o}${t}`,method:n,data:e,params:"GET"===n?e:null});return r.data}catch(r){throw console.log(`Had Issues ${n}ing to the backend, endpoint: ${t}, with data:`,e),console.dir(r),r}}},8466:function(t,n,e){e.d(n,{P:function(){return a}});var r=e(3894);const a={query:o,save:s,remove:c,getEmptyPlant:i};async function o(){try{return await r.R.get("plant")}catch(t){console.log("query err:",t)}}async function c(t){try{return await r.R["delete"](`plant/${t}`)}catch(n){console.log("remove err:",n)}}async function s(t){try{return t._id?await r.R.put(`plant/${t._id}`,t):await r.R.post("plant/",t)}catch(n){console.log("save err:",n)}}function i(){return{title:"",price:"",description:"",img:""}}}},n={};function e(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return t[r](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,r,a,o){if(!r){var c=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],o=t[u][2];for(var s=!0,i=0;i<r.length;i++)(!1&o||c>=o)&&Object.keys(e.O).every((function(t){return e.O[t](r[i])}))?r.splice(i--,1):(s=!1,o<c&&(c=o));if(s){t.splice(u--,1);var l=a();void 0!==l&&(n=l)}}return n}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,a,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,r){return e.f[r](t,n),n}),[]))}}(),function(){e.u=function(t){return"assets/js/"+{328:"admin",443:"about"}[t]+"."+{328:"7dd9e992",443:"afba7196"}[t]+".js"}}(),function(){e.miniCssF=function(t){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="front-end:";e.l=function(r,a,o,c){if(t[r])t[r].push(a);else{var s,i;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+o){s=d;break}}s||(i=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,e.nc&&s.setAttribute("nonce",e.nc),s.setAttribute("data-webpack",n+o),s.src=r),t[r]=[a];var p=function(n,e){s.onerror=s.onload=null,clearTimeout(f);var a=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(t){return t(e)})),n)return n(e)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),i&&document.head.appendChild(s)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.f.j=function(n,r){var a=e.o(t,n)?t[n]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(e,r){a=t[n]=[e,r]}));r.push(a[2]=o);var c=e.p+e.u(n),s=new Error,i=function(r){if(e.o(t,n)&&(a=t[n],0!==a&&(t[n]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+c+")",s.name="ChunkLoadError",s.type=o,s.request=c,a[1](s)}};e.l(c,i,"chunk-"+n,n)}},e.O.j=function(n){return 0===t[n]};var n=function(n,r){var a,o,c=r[0],s=r[1],i=r[2],l=0;if(c.some((function(n){return 0!==t[n]}))){for(a in s)e.o(s,a)&&(e.m[a]=s[a]);if(i)var u=i(e)}for(n&&n(r);l<c.length;l++)o=c[l],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(u)},r=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(7575)}));r=e.O(r)})();
//# sourceMappingURL=app.3478eefa.js.map