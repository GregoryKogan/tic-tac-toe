import{v as ie,k as ve,x as De,p as b,c as f,b as x,h as $,j as o,y as me,z as ge,T as Tt,S as he,g as X,s as j,r as K,A,B as Rt,C as He,D as J,E as re,F as Ue,G as ye,H as zt,_ as be,m as O,I as le,n as oe,J as Ie,l as qe,K as jt,L as U,M as T,N as Q,O as Ye,P as Pe,Q as At,R as Ot,U as Gt,V as Ee,q as Z,t as ee,W as Xe,X as E,Y as Ft,d as Ke,i as Mt,a as Wt,Z as Dt,o as Ht,$ as Je,f as Ut,a0 as qt,a1 as Yt,a2 as ue,a3 as Xt,a4 as Kt,a5 as Jt,a6 as Qt,u as Qe,a7 as Zt,a8 as Be,a9 as en,aa as Le,ab as te,ac as _e,w as z,ad as tn,ae as nn,af as sn}from"./index-6ac8331f.js";import{m as B,b as L,a as R,u as an}from"./tag-160b16b5.js";const rn=["top","bottom"],ln=["start","end","left","right"];function on(e,t){let[s,n]=e.split(" ");return n||(n=ie(rn,s)?"start":ie(ln,s)?"top":"center"),{side:Ne(s,t),align:Ne(n,t)}}function Ne(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const un=ve({name:"Field3x3Cell",setup(){return{store:De()}},props:{i:{type:Number,required:!0},j:{type:Number,required:!0}},methods:{onClick(){this.store.game3x3.makeMove(this.i,this.j)}}}),cn="/tic-tac-toe/assets/cross-3d79b9a1.svg",dn="/tic-tac-toe/assets/circle-9e7bd914.svg";const Ze=b({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function et(e){return{dimensionStyles:f(()=>({height:x(e.height),maxHeight:x(e.maxHeight),maxWidth:x(e.maxWidth),minHeight:x(e.minHeight),minWidth:x(e.minWidth),width:x(e.width)}))}}function fn(e){return{aspectStyles:f(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const tt=b({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...B(),...Ze()},"VResponsive"),Te=$()({name:"VResponsive",props:tt(),setup(e,t){let{slots:s}=t;const{aspectStyles:n}=fn(e),{dimensionStyles:a}=et(e);return L(()=>{var i;return o("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[a.value,e.style]},[o("div",{class:"v-responsive__sizer",style:n.value},null),(i=s.additional)==null?void 0:i.call(s),s.default&&o("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}}),vn=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),q=(e,t)=>{let{slots:s}=t;const{transition:n,disabled:a,...i}=e,{component:r=Tt,...l}=typeof n=="object"?n:{};return me(r,ge(typeof n=="string"?{name:a?"":n}:l,i,{disabled:a}),s)};function mn(e,t){if(!he)return;const s=t.modifiers||{},n=t.value,{handler:a,options:i}=typeof n=="object"?n:{handler:n,options:{}},r=new IntersectionObserver(function(){var _;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const g=(_=e._observe)==null?void 0:_[t.instance.$.uid];if(!g)return;const m=l.some(c=>c.isIntersecting);a&&(!s.quiet||g.init)&&(!s.once||m||g.init)&&a(m,l,u),m&&s.once?nt(e,t):g.init=!0},i);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:r},r.observe(e)}function nt(e,t){var n;const s=(n=e._observe)==null?void 0:n[t.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const gn={mounted:mn,unmounted:nt},hn=gn,yn=b({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...tt(),...B(),...vn()},"VImg"),Re=$()({name:"VImg",directives:{intersect:hn},props:yn(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:s,slots:n}=t;const a=X("VImg"),i=j(""),r=K(),l=j(e.eager?"loading":"idle"),u=j(),g=j(),m=f(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),_=f(()=>m.value.aspect||u.value/g.value||0);A(()=>e.src,()=>{c(l.value!=="idle")}),A(_,(d,p)=>{!d&&p&&r.value&&S(r.value)}),Rt(()=>c());function c(d){if(!(e.eager&&d)&&!(he&&!d&&!e.eager)){if(l.value="loading",m.value.lazySrc){const p=new Image;p.src=m.value.lazySrc,S(p,null)}m.value.src&&He(()=>{var p;s("loadstart",((p=r.value)==null?void 0:p.currentSrc)||m.value.src),setTimeout(()=>{var I;if(!a.isUnmounted)if((I=r.value)!=null&&I.complete){if(r.value.naturalWidth||C(),l.value==="error")return;_.value||S(r.value,null),l.value==="loading"&&v()}else _.value||S(r.value),y()})})}}function v(){var d;a.isUnmounted||(y(),S(r.value),l.value="loaded",s("load",((d=r.value)==null?void 0:d.currentSrc)||m.value.src))}function C(){var d;a.isUnmounted||(l.value="error",s("error",((d=r.value)==null?void 0:d.currentSrc)||m.value.src))}function y(){const d=r.value;d&&(i.value=d.currentSrc||d.src)}let k=-1;J(()=>{clearTimeout(k)});function S(d){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const I=()=>{if(clearTimeout(k),a.isUnmounted)return;const{naturalHeight:F,naturalWidth:M}=d;F||M?(u.value=M,g.value=F):!d.complete&&l.value==="loading"&&p!=null?k=window.setTimeout(I,p):(d.currentSrc.endsWith(".svg")||d.currentSrc.startsWith("data:image/svg+xml"))&&(u.value=1,g.value=1)};I()}const h=f(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),w=()=>{var I;if(!m.value.src||l.value==="idle")return null;const d=o("img",{class:["v-img__img",h.value],style:{objectPosition:e.position},src:m.value.src,srcset:m.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:r,onLoad:v,onError:C},null),p=(I=n.sources)==null?void 0:I.call(n);return o(q,{transition:e.transition,appear:!0},{default:()=>[re(p?o("picture",{class:"v-img__picture"},[p,d]):d,[[zt,l.value==="loaded"]])]})},N=()=>o(q,{transition:e.transition},{default:()=>[m.value.lazySrc&&l.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",h.value],style:{objectPosition:e.position},src:m.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),P=()=>n.placeholder?o(q,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!n.error)&&o("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,G=()=>n.error?o(q,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&o("div",{class:"v-img__error"},[n.error()])]}):null,ne=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,H=j(!1);{const d=A(_,p=>{p&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{H.value=!0})}),d())})}return L(()=>{const d=Te.filterProps(e);return re(o(Te,ge({class:["v-img",{"v-img--booting":!H.value},e.class],style:[{width:x(e.width==="auto"?u.value:e.width)},e.style]},d,{aspectRatio:_.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>o(ye,null,[o(w,null,null),o(N,null,null),o(ne,null,null),o(P,null,null),o(G,null,null)]),default:n.default}),[[Ue("intersect"),{handler:c,options:e.options},null,{once:!0}]])}),{currentSrc:i,image:r,state:l,naturalWidth:u,naturalHeight:g}}});function bn(e,t,s,n,a,i){return O(),le("div",{onClick:t[0]||(t[0]=(...r)=>e.onClick&&e.onClick(...r)),class:"field-3x3-cell"},[e.store.game3x3.getCell(e.i,e.j)==1?(O(),oe(Re,{key:0,transition:!1,src:cn})):Ie("",!0),e.store.game3x3.getCell(e.i,e.j)==2?(O(),oe(Re,{key:1,transition:!1,src:dn})):Ie("",!0)])}const _n=be(un,[["render",bn],["__scopeId","data-v-15eab25d"]]),Cn=ve({name:"Field3x3",components:{Field3x3Cell:_n}});const Sn={class:"field-3x3"};function pn(e,t,s,n,a,i){const r=qe("Field3x3Cell");return O(),le("div",Sn,[(O(),le(ye,null,jt(9,l=>o(r,{key:l,i:Math.floor((l-1)/3),j:(l-1)%3},null,8,["i","j"])),64))])}const kn=be(Cn,[["render",pn],["__scopeId","data-v-bdf455bc"]]),wn=ve({name:"Home",setup(){return{store:De()}},components:{Field3x3:kn},computed:{status(){switch(this.store.game3x3.getStatus()){case U.inProgress:return"in progress";case U.draw:return"draw";case U.player1Won:return"crosses won";case U.player2Won:return"circles won";default:return"unknown"}}}});const st=b({border:[Boolean,Number,String]},"border");function at(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{borderClasses:f(()=>{const n=Q(e)?e.value:e.border,a=[];if(n===!0||n==="")a.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const i of String(n).split(" "))a.push(`border-${i}`);return a})}}const xn=[null,"default","comfortable","compact"],it=b({density:{type:String,default:"default",validator:e=>xn.includes(e)}},"density");function rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{densityClasses:f(()=>`${t}--density-${e.density}`)}}const lt=b({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function ot(e){return{elevationClasses:f(()=>{const s=Q(e)?e.value:e.elevation,n=[];return s==null||n.push(`elevation-${s}`),n})}}const ut=b({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function ct(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{roundedClasses:f(()=>{const n=Q(e)?e.value:e.rounded,a=[];if(n===!0||n==="")a.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const i of String(n).split(" "))a.push(`rounded-${i}`);return a})}}function dt(e){return Ye(()=>{const t=[],s={};if(e.value.background)if(Pe(e.value.background)){if(s.backgroundColor=e.value.background,!e.value.text&&At(e.value.background)){const n=Ot(e.value.background);if(n.a==null||n.a===1){const a=Gt(n);s.color=a,s.caretColor=a}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(Pe(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:s}})}function ce(e,t){const s=f(()=>({text:Q(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:a}=dt(s);return{textColorClasses:n,textColorStyles:a}}const Vn=["elevated","flat","tonal","outlined","text","plain"];function $n(e,t){return o(ye,null,[e&&o("span",{key:"overlay",class:`${t}__overlay`},null),o("span",{key:"underlay",class:`${t}__underlay`},null)])}const ft=b({color:String,variant:{type:String,default:"elevated",validator:e=>Vn.includes(e)}},"variant");function In(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();const s=f(()=>{const{variant:i}=Ee(e);return`${t}--variant-${i}`}),{colorClasses:n,colorStyles:a}=dt(f(()=>{const{variant:i,color:r}=Ee(e);return{[["elevated","flat"].includes(i)?"background":"text"]:r}}));return{colorClasses:n,colorStyles:a,variantClasses:s}}const vt=b({divided:Boolean,...st(),...B(),...it(),...lt(),...ut(),...R(),...Z(),...ft()},"VBtnGroup"),ze=$()({name:"VBtnGroup",props:vt(),setup(e,t){let{slots:s}=t;const{themeClasses:n}=ee(e),{densityClasses:a}=rt(e),{borderClasses:i}=at(e),{elevationClasses:r}=ot(e),{roundedClasses:l}=ct(e);Xe({VBtn:{height:"auto",color:E(e,"color"),density:E(e,"density"),flat:!0,variant:E(e,"variant")}}),L(()=>o(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,i.value,a.value,r.value,l.value,e.class],style:e.style},s))}}),Pn=b({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),En=b({value:null,disabled:Boolean,selectedClass:String},"group-item");function Bn(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=X("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=Ft();Ke(Symbol.for(`${t.description}:id`),a);const i=Mt(t,null);if(!i){if(!s)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const r=E(e,"value"),l=f(()=>!!(i.disabled.value||e.disabled));i.register({id:a,value:r,disabled:l},n),J(()=>{i.unregister(a)});const u=f(()=>i.isSelected(a)),g=f(()=>u.value&&[i.selectedClass.value,e.selectedClass]);return A(u,m=>{n.emit("group:selected",{value:m})}),{id:a,isSelected:u,toggle:()=>i.select(a,!u.value),select:m=>i.select(a,m),selectedClass:g,value:r,disabled:l,group:i}}function Ln(e,t){let s=!1;const n=Wt([]),a=Dt(e,"modelValue",[],c=>c==null?[]:mt(n,qt(c)),c=>{const v=Tn(n,c);return e.multiple?v:v[0]}),i=X("useGroup");function r(c,v){const C=c,y=Symbol.for(`${t.description}:id`),S=Ut(y,i==null?void 0:i.vnode).indexOf(v);S>-1?n.splice(S,0,C):n.push(C)}function l(c){if(s)return;u();const v=n.findIndex(C=>C.id===c);n.splice(v,1)}function u(){const c=n.find(v=>!v.disabled);c&&e.mandatory==="force"&&!a.value.length&&(a.value=[c.id])}Ht(()=>{u()}),J(()=>{s=!0});function g(c,v){const C=n.find(y=>y.id===c);if(!(v&&(C!=null&&C.disabled)))if(e.multiple){const y=a.value.slice(),k=y.findIndex(h=>h===c),S=~k;if(v=v??!S,S&&e.mandatory&&y.length<=1||!S&&e.max!=null&&y.length+1>e.max)return;k<0&&v?y.push(c):k>=0&&!v&&y.splice(k,1),a.value=y}else{const y=a.value.includes(c);if(e.mandatory&&y)return;a.value=v??!y?[c]:[]}}function m(c){if(e.multiple,a.value.length){const v=a.value[0],C=n.findIndex(S=>S.id===v);let y=(C+c)%n.length,k=n[y];for(;k.disabled&&y!==C;)y=(y+c)%n.length,k=n[y];if(k.disabled)return;a.value=[n[y].id]}else{const v=n.find(C=>!C.disabled);v&&(a.value=[v.id])}}const _={register:r,unregister:l,selected:a,select:g,disabled:E(e,"disabled"),prev:()=>m(n.length-1),next:()=>m(1),isSelected:c=>a.value.includes(c),selectedClass:f(()=>e.selectedClass),items:f(()=>n),getItemIndex:c=>Nn(n,c)};return Ke(t,_),_}function Nn(e,t){const s=mt(e,[t]);return s.length?e.findIndex(n=>n.id===s[0]):-1}function mt(e,t){const s=[];return t.forEach(n=>{const a=e.find(r=>Je(n,r.value)),i=e[n];(a==null?void 0:a.value)!=null?s.push(a.id):i!=null&&s.push(i.id)}),s}function Tn(e,t){const s=[];return t.forEach(n=>{const a=e.findIndex(i=>i.id===n);if(~a){const i=e[a];s.push(i.value!=null?i.value:a)}}),s}const gt=Symbol.for("vuetify:v-btn-toggle"),Rn=b({...vt(),...Pn()},"VBtnToggle");$()({name:"VBtnToggle",props:Rn(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const{isSelected:n,next:a,prev:i,select:r,selected:l}=Ln(e,gt);return L(()=>{const u=ze.filterProps(e);return o(ze,ge({class:["v-btn-toggle",e.class]},u,{style:e.style}),{default:()=>{var g;return[(g=s.default)==null?void 0:g.call(s,{isSelected:n,next:a,prev:i,select:r,selected:l})]}})}),{next:a,prev:i,select:r}}});const zn=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),se=$(!1)({name:"VDefaultsProvider",props:zn(),setup(e,t){let{slots:s}=t;const{defaults:n,disabled:a,reset:i,root:r,scoped:l}=Yt(e);return Xe(n,{reset:i,root:r,scoped:l,disabled:a}),()=>{var u;return(u=s.default)==null?void 0:u.call(s)}}});const jn=["x-small","small","default","large","x-large"],Ce=b({size:{type:[String,Number],default:"default"}},"size");function Se(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return Ye(()=>{let s,n;return ie(jn,e.size)?s=`${t}--size-${e.size}`:e.size&&(n={width:x(e.size),height:x(e.size)}),{sizeClasses:s,sizeStyles:n}})}const An=b({color:String,start:Boolean,end:Boolean,icon:ue,...B(),...Ce(),...R({tag:"i"}),...Z()},"VIcon"),ae=$()({name:"VIcon",props:An(),setup(e,t){let{attrs:s,slots:n}=t;const a=K(),{themeClasses:i}=ee(e),{iconData:r}=Xt(f(()=>a.value||e.icon)),{sizeClasses:l}=Se(e),{textColorClasses:u,textColorStyles:g}=ce(E(e,"color"));return L(()=>{var _,c;const m=(_=n.default)==null?void 0:_.call(n);return m&&(a.value=(c=Kt(m).filter(v=>v.type===Jt&&v.children&&typeof v.children=="string")[0])==null?void 0:c.children),o(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",i.value,l.value,u.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[l.value?void 0:{fontSize:x(e.size),height:x(e.size),width:x(e.size)},g.value,e.style],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},{default:()=>[m]})}),{}}});function On(e,t){const s=K(),n=j(!1);if(he){const a=new IntersectionObserver(i=>{e==null||e(i,a),n.value=!!i.find(r=>r.isIntersecting)},t);J(()=>{a.disconnect()}),A(s,(i,r)=>{r&&(a.unobserve(r),n.value=!1),i&&a.observe(i)},{flush:"post"})}return{intersectionRef:s,isIntersecting:n}}const Gn=b({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...B(),...Ce(),...R({tag:"div"}),...Z()},"VProgressCircular"),Fn=$()({name:"VProgressCircular",props:Gn(),setup(e,t){let{slots:s}=t;const n=20,a=2*Math.PI*n,i=K(),{themeClasses:r}=ee(e),{sizeClasses:l,sizeStyles:u}=Se(e),{textColorClasses:g,textColorStyles:m}=ce(E(e,"color")),{textColorClasses:_,textColorStyles:c}=ce(E(e,"bgColor")),{intersectionRef:v,isIntersecting:C}=On(),{resizeRef:y,contentRect:k}=an(),S=f(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),h=f(()=>Number(e.width)),w=f(()=>u.value?Number(e.size):k.value?k.value.width:Math.max(h.value,32)),N=f(()=>n/(1-h.value/w.value)*2),P=f(()=>h.value/w.value*N.value),G=f(()=>x((100-S.value)/100*a));return Qt(()=>{v.value=i.value,y.value=i.value}),L(()=>o(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":C.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},r.value,l.value,g.value,e.class],style:[u.value,m.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[o("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${N.value} ${N.value}`},[o("circle",{class:["v-progress-circular__underlay",_.value],style:c.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":P.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),o("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":P.value,"stroke-dasharray":a,"stroke-dashoffset":G.value},null)]),s.default&&o("div",{class:"v-progress-circular__content"},[s.default({value:S.value})])]})),{}}}),je={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Mn=b({location:String},"location");function Wn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Qe();return{locationStyles:f(()=>{if(!e.location)return{};const{side:i,align:r}=on(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function l(g){return s?s(g):0}const u={};return i!=="center"&&(t?u[je[i]]=`calc(100% - ${l(i)}px)`:u[i]=0),r!=="center"?t?u[je[r]]=`calc(100% - ${l(r)}px)`:u[r]=0:(i==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),u})}}const Dn=b({loading:[Boolean,String]},"loader");function Hn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{loaderClasses:f(()=>({[`${t}--loading`]:e.loading}))}}const Un=["static","relative","fixed","absolute","sticky"],qn=b({position:{type:String,validator:e=>Un.includes(e)}},"position");function Yn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{positionClasses:f(()=>e.position?`${t}--${e.position}`:void 0)}}function Xn(){const e=X("useRoute");return f(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Kn(e,t){const s=Zt("RouterLink"),n=f(()=>!!(e.href||e.to)),a=f(()=>(n==null?void 0:n.value)||Be(t,"click")||Be(e,"click"));if(typeof s=="string")return{isLink:n,isClickable:a,href:E(e,"href")};const i=e.to?s.useLink(e):void 0,r=Xn();return{isLink:n,isClickable:a,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&f(()=>{var l,u,g;return e.exact?r.value?((g=i.isExactActive)==null?void 0:g.value)&&Je(i.route.value.query,r.value.query):(u=i.isExactActive)==null?void 0:u.value:(l=i.isActive)==null?void 0:l.value}),href:f(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const Jn=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function Qn(e,t){A(()=>{var s;return(s=e.isActive)==null?void 0:s.value},s=>{e.isLink.value&&s&&t&&He(()=>{t(!0)})},{immediate:!0})}const de=Symbol("rippleStop"),Zn=80;function Ae(e,t){e.style.transform=t,e.style.webkitTransform=t}function fe(e){return e.constructor.name==="TouchEvent"}function ht(e){return e.constructor.name==="KeyboardEvent"}const es=function(e,t){var _;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,a=0;if(!ht(e)){const c=t.getBoundingClientRect(),v=fe(e)?e.touches[e.touches.length-1]:e;n=v.clientX-c.left,a=v.clientY-c.top}let i=0,r=.3;(_=t._ripple)!=null&&_.circle?(r=.15,i=t.clientWidth/2,i=s.center?i:i+Math.sqrt((n-i)**2+(a-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const l=`${(t.clientWidth-i*2)/2}px`,u=`${(t.clientHeight-i*2)/2}px`,g=s.center?l:`${n-i}px`,m=s.center?u:`${a-i}px`;return{radius:i,scale:r,x:g,y:m,centerX:l,centerY:u}},Y={show(e,t){var v;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=t==null?void 0:t._ripple)!=null&&v.enabled))return;const n=document.createElement("span"),a=document.createElement("span");n.appendChild(a),n.className="v-ripple__container",s.class&&(n.className+=` ${s.class}`);const{radius:i,scale:r,x:l,y:u,centerX:g,centerY:m}=es(e,t,s),_=`${i*2}px`;a.className="v-ripple__animation",a.style.width=_,a.style.height=_,t.appendChild(n);const c=window.getComputedStyle(t);c&&c.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),Ae(a,`translate(${l}, ${u}) scale3d(${r},${r},${r})`),a.dataset.activated=String(performance.now()),setTimeout(()=>{a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),Ae(a,`translate(${g}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const s=t[t.length-1];if(s.dataset.isHiding)return;s.dataset.isHiding="true";const n=performance.now()-Number(s.dataset.activated),a=Math.max(250-n,0);setTimeout(()=>{s.classList.remove("v-ripple__animation--in"),s.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((l=s.parentNode)==null?void 0:l.parentNode)===e&&e.removeChild(s.parentNode)},300)},a)}};function yt(e){return typeof e>"u"||!!e}function W(e){const t={},s=e.currentTarget;if(!(!(s!=null&&s._ripple)||s._ripple.touched||e[de])){if(e[de]=!0,fe(e))s._ripple.touched=!0,s._ripple.isTouch=!0;else if(s._ripple.isTouch)return;if(t.center=s._ripple.centered||ht(e),s._ripple.class&&(t.class=s._ripple.class),fe(e)){if(s._ripple.showTimerCommit)return;s._ripple.showTimerCommit=()=>{Y.show(e,s,t)},s._ripple.showTimer=window.setTimeout(()=>{var n;(n=s==null?void 0:s._ripple)!=null&&n.showTimerCommit&&(s._ripple.showTimerCommit(),s._ripple.showTimerCommit=null)},Zn)}else Y.show(e,s,t)}}function Oe(e){e[de]=!0}function V(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{V(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),Y.hide(t)}}function bt(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let D=!1;function _t(e){!D&&(e.keyCode===Le.enter||e.keyCode===Le.space)&&(D=!0,W(e))}function Ct(e){D=!1,V(e)}function St(e){D&&(D=!1,V(e))}function pt(e,t,s){const{value:n,modifiers:a}=t,i=yt(n);if(i||Y.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=a.center,e._ripple.circle=a.circle,en(n)&&n.class&&(e._ripple.class=n.class),i&&!s){if(a.stop){e.addEventListener("touchstart",Oe,{passive:!0}),e.addEventListener("mousedown",Oe);return}e.addEventListener("touchstart",W,{passive:!0}),e.addEventListener("touchend",V,{passive:!0}),e.addEventListener("touchmove",bt,{passive:!0}),e.addEventListener("touchcancel",V),e.addEventListener("mousedown",W),e.addEventListener("mouseup",V),e.addEventListener("mouseleave",V),e.addEventListener("keydown",_t),e.addEventListener("keyup",Ct),e.addEventListener("blur",St),e.addEventListener("dragstart",V,{passive:!0})}else!i&&s&&kt(e)}function kt(e){e.removeEventListener("mousedown",W),e.removeEventListener("touchstart",W),e.removeEventListener("touchend",V),e.removeEventListener("touchmove",bt),e.removeEventListener("touchcancel",V),e.removeEventListener("mouseup",V),e.removeEventListener("mouseleave",V),e.removeEventListener("keydown",_t),e.removeEventListener("keyup",Ct),e.removeEventListener("dragstart",V),e.removeEventListener("blur",St)}function ts(e,t){pt(e,t,!1)}function ns(e){delete e._ripple,kt(e)}function ss(e,t){if(t.value===t.oldValue)return;const s=yt(t.oldValue);pt(e,t,s)}const as={mounted:ts,unmounted:ns,updated:ss},is=b({active:{type:Boolean,default:void 0},symbol:{type:null,default:gt},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ue,appendIcon:ue,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...st(),...B(),...it(),...Ze(),...lt(),...En(),...Dn(),...Mn(),...qn(),...ut(),...Jn(),...Ce(),...R({tag:"button"}),...Z(),...ft({variant:"elevated"})},"VBtn"),rs=$()({name:"VBtn",directives:{Ripple:as},props:is(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:s,slots:n}=t;const{themeClasses:a}=ee(e),{borderClasses:i}=at(e),{colorClasses:r,colorStyles:l,variantClasses:u}=In(e),{densityClasses:g}=rt(e),{dimensionStyles:m}=et(e),{elevationClasses:_}=ot(e),{loaderClasses:c}=Hn(e),{locationStyles:v}=Wn(e),{positionClasses:C}=Yn(e),{roundedClasses:y}=ct(e),{sizeClasses:k,sizeStyles:S}=Se(e),h=Bn(e,e.symbol,!1),w=Kn(e,s),N=f(()=>{var d;return e.active!==void 0?e.active:w.isLink.value?(d=w.isActive)==null?void 0:d.value:h==null?void 0:h.isSelected.value}),P=f(()=>(h==null?void 0:h.disabled.value)||e.disabled),G=f(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),ne=f(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function H(d){var p;P.value||w.isLink.value&&(d.metaKey||d.ctrlKey||d.shiftKey||d.button!==0||s.target==="_blank")||((p=w.navigate)==null||p.call(w,d),h==null||h.toggle())}return Qn(w,h==null?void 0:h.select),L(()=>{var we,xe;const d=w.isLink.value?"a":e.tag,p=!!(e.prependIcon||n.prepend),I=!!(e.appendIcon||n.append),F=!!(e.icon&&e.icon!==!0),M=(h==null?void 0:h.isSelected.value)&&(!w.isLink.value||((we=w.isActive)==null?void 0:we.value))||!h||((xe=w.isActive)==null?void 0:xe.value);return re(o(d,{type:d==="a"?void 0:"button",class:["v-btn",h==null?void 0:h.selectedClass.value,{"v-btn--active":N.value,"v-btn--block":e.block,"v-btn--disabled":P.value,"v-btn--elevated":G.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},a.value,i.value,M?r.value:void 0,g.value,_.value,c.value,C.value,y.value,k.value,u.value,e.class],style:[M?l.value:void 0,m.value,v.value,S.value,e.style],disabled:P.value||void 0,href:w.href.value,onClick:H,value:ne.value},{default:()=>{var Ve;return[$n(!0,"v-btn"),!e.icon&&p&&o("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?o(se,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):o(ae,{key:"prepend-icon",icon:e.prependIcon},null)]),o("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&F?o(ae,{key:"content-icon",icon:e.icon},null):o(se,{key:"content-defaults",disabled:!F,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var $e;return[(($e=n.default)==null?void 0:$e.call(n))??e.text]}})]),!e.icon&&I&&o("span",{key:"append",class:"v-btn__append"},[n.append?o(se,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):o(ae,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&o("span",{key:"loader",class:"v-btn__loader"},[((Ve=n.loader)==null?void 0:Ve.call(n))??o(Fn,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Ue("ripple"),!P.value&&e.ripple,null]])}),{}}});const ls=b({fluid:{type:Boolean,default:!1},...B(),...R()},"VContainer"),os=$()({name:"VContainer",props:ls(),setup(e,t){let{slots:s}=t;const{rtlClasses:n}=Qe();return L(()=>o(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},n.value,e.class],style:e.style},s)),{}}}),wt=(()=>te.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),xt=(()=>te.reduce((e,t)=>{const s="offset"+_e(t);return e[s]={type:[String,Number],default:null},e},{}))(),Vt=(()=>te.reduce((e,t)=>{const s="order"+_e(t);return e[s]={type:[String,Number],default:null},e},{}))(),Ge={col:Object.keys(wt),offset:Object.keys(xt),order:Object.keys(Vt)};function us(e,t,s){let n=e;if(!(s==null||s===!1)){if(t){const a=t.replace(e,"");n+=`-${a}`}return e==="col"&&(n="v-"+n),e==="col"&&(s===""||s===!0)||(n+=`-${s}`),n.toLowerCase()}}const cs=["auto","start","end","center","baseline","stretch"],ds=b({cols:{type:[Boolean,String,Number],default:!1},...wt,offset:{type:[String,Number],default:null},...xt,order:{type:[String,Number],default:null},...Vt,alignSelf:{type:String,default:null,validator:e=>cs.includes(e)},...B(),...R()},"VCol"),Fe=$()({name:"VCol",props:ds(),setup(e,t){let{slots:s}=t;const n=f(()=>{const a=[];let i;for(i in Ge)Ge[i].forEach(l=>{const u=e[l],g=us(i,l,u);g&&a.push(g)});const r=a.some(l=>l.startsWith("v-col-"));return a.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return me(e.tag,{class:[n.value,e.class],style:e.style},(a=s.default)==null?void 0:a.call(s))}}}),pe=["start","end","center"],$t=["space-between","space-around","space-evenly"];function ke(e,t){return te.reduce((s,n)=>{const a=e+_e(n);return s[a]=t(),s},{})}const fs=[...pe,"baseline","stretch"],It=e=>fs.includes(e),Pt=ke("align",()=>({type:String,default:null,validator:It})),vs=[...pe,...$t],Et=e=>vs.includes(e),Bt=ke("justify",()=>({type:String,default:null,validator:Et})),ms=[...pe,...$t,"stretch"],Lt=e=>ms.includes(e),Nt=ke("alignContent",()=>({type:String,default:null,validator:Lt})),Me={align:Object.keys(Pt),justify:Object.keys(Bt),alignContent:Object.keys(Nt)},gs={align:"align",justify:"justify",alignContent:"align-content"};function hs(e,t,s){let n=gs[e];if(s!=null){if(t){const a=t.replace(e,"");n+=`-${a}`}return n+=`-${s}`,n.toLowerCase()}}const ys=b({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:It},...Pt,justify:{type:String,default:null,validator:Et},...Bt,alignContent:{type:String,default:null,validator:Lt},...Nt,...B(),...R()},"VRow"),We=$()({name:"VRow",props:ys(),setup(e,t){let{slots:s}=t;const n=f(()=>{const a=[];let i;for(i in Me)Me[i].forEach(r=>{const l=e[r],u=hs(i,r,l);u&&a.push(u)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return me(e.tag,{class:["v-row",n.value,e.class],style:e.style},(a=s.default)==null?void 0:a.call(s))}}});function bs(e,t,s,n,a,i){const r=qe("Field3x3");return O(),oe(We,{style:{width:"100vw",height:"100vh"},justify:"center",align:"center"},{default:z(()=>[o(Fe,{justify:"center",align:"center"},{default:z(()=>[o(os,null,{default:z(()=>[o(We,{justify:"center"},{default:z(()=>[o(Fe,{align:"center"},{default:z(()=>[o(r),tn("h3",null,"Status: "+nn(e.status),1),o(rs,{onClick:t[0]||(t[0]=l=>e.store.game3x3.replay()),style:{"margin-top":"20px"}},{default:z(()=>[sn("replay")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Ss=be(wn,[["render",bs]]);export{Ss as default};