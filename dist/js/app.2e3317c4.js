(function(){var n={1073:function(n){n.exports={url:"https://anegy.nl"}},7698:function(n,o,r){"use strict";var t=r(9242),e=r(3396);function d(n,o,r,t,d,i){const u=(0,e.up)("HelloWorld");return(0,e.wg)(),(0,e.j4)(u)}var i=r(7139);const u=n=>((0,e.dD)("data-v-4126ed9d"),n=n(),(0,e.Cn)(),n),l={class:"body"},s=u((()=>(0,e._)("h1",null,"Skribbl Word List",-1))),a=u((()=>(0,e._)("p",null,"Add your words here (one by one):",-1))),c=u((()=>(0,e._)("p",null,[(0,e._)("strong",null,"Your added words:")],-1))),f=["onClick"],p=u((()=>(0,e._)("i",{class:"fa fa-trash"},null,-1))),h=[p],w=u((()=>(0,e._)("br",null,null,-1)));function b(n,o,r,d,u,p){return(0,e.wg)(),(0,e.iD)("div",l,[s,a,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":o[0]||(o[0]=n=>u.word=n),id:"inputFieldWord",type:"text"},null,512),[[t.nr,u.word]]),(0,e._)("button",{onClick:o[1]||(o[1]=n=>p.addWord(u.word)),id:"addWordButton"}," + "),c,((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(u.words,(n=>((0,e.wg)(),(0,e.iD)("div",{key:n,class:"word"},[(0,e._)("p",null,(0,i.zw)(n.word),1),(0,e._)("button",{class:"btn",onClick:o=>p.deleteWord(n.id)},h,8,f)])))),128)),w,(0,e._)("button",{id:"sendButton",onClick:o[2]||(o[2]=(...n)=>p.sendWords&&p.sendWords(...n))},"Send words")])}r(560);var v=r(1076),y=r(1073),g=r.n(y),_=r(4806),m=r.n(_),k={name:"HelloWorld",data(){return{words:[],word:""}},methods:{addWord(n){n&&(this.words.push({id:Math.random(),word:n}),this.word="")},deleteWord(n){m().remove(this.words,(o=>o.id===n))},sendWords(){v.Z.post(`${g().url}/Library/mail.php`,{content:this.words},{headers:{"Content-Type":"application/json"}}).then((()=>{alert("Success"),this.words=[]})).catch((n=>{alert(n),console.log(n)}))}}},O=r(89);const W=(0,O.Z)(k,[["render",b],["__scopeId","data-v-4126ed9d"]]);var j=W,C={name:"App",components:{HelloWorld:j}};const S=(0,O.Z)(C,[["render",d]]);var x=S;(0,t.ri)(x).mount("#app")}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var d=o[t]={id:t,loaded:!1,exports:{}};return n[t].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=n,function(){var n=[];r.O=function(o,t,e,d){if(!t){var i=1/0;for(a=0;a<n.length;a++){t=n[a][0],e=n[a][1],d=n[a][2];for(var u=!0,l=0;l<t.length;l++)(!1&d||i>=d)&&Object.keys(r.O).every((function(n){return r.O[n](t[l])}))?t.splice(l--,1):(u=!1,d<i&&(i=d));if(u){n.splice(a--,1);var s=e();void 0!==s&&(o=s)}}return o}d=d||0;for(var a=n.length;a>0&&n[a-1][2]>d;a--)n[a]=n[a-1];n[a]=[t,e,d]}}(),function(){r.n=function(n){var o=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(o,{a:o}),o}}(),function(){r.d=function(n,o){for(var t in o)r.o(o,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)}}(),function(){r.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){r.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n}}(),function(){var n={143:0};r.O.j=function(o){return 0===n[o]};var o=function(o,t){var e,d,i=t[0],u=t[1],l=t[2],s=0;if(i.some((function(o){return 0!==n[o]}))){for(e in u)r.o(u,e)&&(r.m[e]=u[e]);if(l)var a=l(r)}for(o&&o(t);s<i.length;s++)d=i[s],r.o(n,d)&&n[d]&&n[d][0](),n[d]=0;return r.O(a)},t=self["webpackChunkskribbl_words"]=self["webpackChunkskribbl_words"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(7698)}));t=r.O(t)})();
//# sourceMappingURL=app.2e3317c4.js.map