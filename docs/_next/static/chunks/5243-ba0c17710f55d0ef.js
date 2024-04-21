"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5243],{51646:function(e,t,r){var a=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};Object.defineProperty(t,"__esModule",{value:!0});let l=r(24246);t.default=function(e){let{block:t,full:r,color:s,xs:n,sm:i,md:u,lg:o,xl:f,xl2:c,xl3:d,xl4:p,xl5:h,curved:m,rounded:y,pill:b,info:g,warning:v,success:x,error:O,muted:j,outline:_,transparent:w,solid:N,style:S,className:A,children:P}=e,D=a(e,["block","full","color","xs","sm","md","lg","xl","xl2","xl3","xl4","xl5","curved","rounded","pill","info","warning","success","error","muted","outline","transparent","solid","style","className","children"]),E={classes:["frui-btn"],styles:{}};t&&E.classes.push("frui-block"),r&&E.classes.push("frui-full"),E.classes.push(`frui-btn-${n?"xs":i?"sm":u?"md":o?"lg":f?"xl":c?"2xl":d?"3xl":p?"4xl":h?"5xl":"md"}`);let M=_?"outline":w?"transparent":"solid";m?E.classes.push("frui-curved"):y?E.classes.push("frui-rounded"):b&&E.classes.push("frui-pill"),"outline"===M||"transparent"===M?(E.classes.push("frui-solid","frui-thin"),"outline"===M&&E.classes.push("frui-bg-white"),s?(E.styles.borderColor=s,E.styles.color=s):g?E.classes.push("frui-bd-info","frui-tx-info"):v?E.classes.push("frui-bd-warning","frui-tx-warning"):x?E.classes.push("frui-bd-success","frui-tx-success"):O?E.classes.push("frui-bd-error","frui-tx-error"):j&&E.classes.push("frui-bd-muted","frui-tx-muted")):(E.classes.push("frui-tx-white"),s?E.styles.backgroundColor=s:g?E.classes.push("frui-bg-info"):v?E.classes.push("frui-bg-warning"):x?E.classes.push("frui-bg-success"):O?E.classes.push("frui-bg-error"):j&&E.classes.push("frui-bg-muted"));let V={classes:[...E.classes,A].join(" "),styles:Object.assign(Object.assign({},E.styles),S)};return(0,l.jsx)("button",Object.assign({className:V.classes,style:V.styles},D,{children:P}))}},10969:function(e,t,r){var a=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useFieldset=void 0;let s=r(24246),n=r(27378),i=l(r(51646));function u(e){let{value:t,defaultValue:r,emptyValue:a,onChange:l,onUpdate:s}=e,i=Array.isArray(r)?[...r]:[],[u,o]=(0,n.useState)(i),f={set:e=>{let t=JSON.stringify(e);if(t!==JSON.stringify(u)){let e=JSON.parse(t).map(e=>null===e?void 0:e),r=e.filter(e=>void 0!==e);o(e),l&&l(r),s&&s(r)}},add:()=>f.set(u.concat([a]))};return(0,n.useEffect)(()=>{Array.isArray(t)&&f.set([...t])},[t]),{values:u,handlers:f}}t.useFieldset=u,t.default=function(e){return function(t){let{add:r,config:l,value:n,defaultValue:o,emptyValue:f,error:c,onChange:d,onUpdate:p}=t,h=a(t,["add","config","value","defaultValue","emptyValue","error","onChange","onUpdate"]),{values:m,handlers:y}=u({value:n,defaultValue:o,emptyValue:f,onChange:d,onUpdate:p});return(0,s.jsxs)(s.Fragment,{children:[m.map((t,r)=>void 0!==t?(0,s.jsx)(e,{config:l,index:r,values:m,error:c,set:y.set},r):null),(0,s.jsxs)(i.default,Object.assign({muted:!0},h,{onClick:y.add,type:"button"},{children:[(0,s.jsx)("span",Object.assign({className:"frui-fieldset-add"},{children:"+"})),r||"Add"]}))]})}}},70413:function(e,t,r){var a=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDate=void 0;let s=r(24246),n=l(r(42378));function i({onUpdate:e}){return t=>{if(e&&t)try{let r=new Date(t).toUTCString();e(new Date(r).toISOString())}catch(e){}}}t.useDate=i,t.default=function(e){let{defaultValue:t,className:r,onUpdate:l}=e,u=a(e,["defaultValue","className","onUpdate"]),o=i({onUpdate:l}),f=["frui-field-date"];return r&&f.push(r),(0,s.jsx)(n.default,Object.assign({},u,{type:"date",defaultValue:t?new Date(t).toISOString().split("T")[0]:void 0,className:f.join(" "),onUpdate:o}))}},9049:function(e,t,r){var a=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDatetime=void 0;let s=r(24246),n=r(70413),i=l(r(42378));function u({defaultValue:e,onUpdate:t}){let r;let a=(0,n.useDate)({onUpdate:t});if(e)try{r=new Date(e).toISOString().replace("Z","")}catch(e){}return{value:r,update:a}}t.useDatetime=u,t.default=function(e){let{defaultValue:t,className:r,onUpdate:l}=e,n=a(e,["defaultValue","className","onUpdate"]),{value:o,update:f}=u({defaultValue:t,onUpdate:l}),c=["frui-field-datetime"];return r&&c.push(r),(0,s.jsx)(i.default,Object.assign({},n,{type:"datetime-local",defaultValue:o,className:c.join(" "),onUpdate:f}))}},42378:function(e,t,r){var a=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r};Object.defineProperty(t,"__esModule",{value:!0}),t.useInput=void 0;let l=r(24246);function s({onChange:e,onUpdate:t}){return{handlers:{change:r=>{e&&e(r),t&&t(r.target.value)}}}}t.useInput=s,t.default=function(e){let{error:t,className:r,onChange:n,onUpdate:i,passRef:u}=e,o=a(e,["error","className","onChange","onUpdate","passRef"]),{handlers:f}=s({onChange:n,onUpdate:i}),c=["frui-field-input"];return t&&c.push("frui-tx-error","frui-bd-error"),r&&c.push(r),(0,l.jsx)("input",Object.assign({},o,{className:c.join(" "),ref:u,onChange:f.change}))}},34277:function(e,t,r){var a=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MetadataFields=t.useMetadata=void 0;let s=r(24246),n=l(r(51646)),i=l(r(10969)),u=l(r(42378)),o=l(r(83010)),f=l(r(70413)),c=l(r(9049)),d=l(r(11118));function p(e){let{type:t,values:r,index:a,set:l}=e,s="number"===t,n=["date","time","datetime"].includes(t||"");return{handlers:{update:(e,t)=>{let s=[...r||[]],n=["",""],i=s[a];n[0]=i?i[0]:"",n[1]=i?i[1]:"","name"===e?n[0]=t:n[1]=t,s[a]=n,l(s)},remove:()=>{let e=[...r||[]];e[a]=void 0,l(e)}},input:{isDate:n,isText:!n&&!s,isNumber:s}}}function h(e){let{config:t={},values:r,index:a,error:l,set:i}=e,{type:h,min:m,max:y,step:b,placeholder:g}=t,{handlers:v,input:x}=p({type:h,values:r,index:a,set:i}),O=r?r[a]:void 0;return(0,s.jsxs)("div",Object.assign({className:"frui-field-metadata-row"},{children:[(0,s.jsx)(u.default,{className:"frui-field-metadata-name",placeholder:Array.isArray(g)?g[0]:void 0,defaultValue:Array.isArray(O)?O[0]:void 0,onUpdate:e=>v.update("name",e),error:l,required:!0}),x.isText&&(0,s.jsx)(u.default,{type:h,className:"frui-field-metadata-value",placeholder:Array.isArray(g)?g[1]:void 0,defaultValue:Array.isArray(O)?O[1]:void 0,onUpdate:e=>v.update("value",e),error:l,required:!0}),x.isNumber&&(0,s.jsx)(o.default,{min:m,max:y,step:b,className:"frui-field-metadata-value",placeholder:Array.isArray(g)?g[1]:void 0,defaultValue:Array.isArray(O)?O[1]:void 0,onUpdate:e=>v.update("value",e),error:l,required:!0}),x.isDate&&"date"===h&&(0,s.jsx)(f.default,{type:"date",className:"frui-field-metadata-value",placeholder:Array.isArray(g)?g[1]:void 0,defaultValue:Array.isArray(O)?O[1]:void 0,onUpdate:e=>v.update("value",e),error:l,required:!0}),x.isDate&&"time"===h&&(0,s.jsx)(d.default,{type:"time",className:"frui-field-metadata-value",placeholder:Array.isArray(g)?g[1]:void 0,defaultValue:Array.isArray(O)?O[1]:void 0,onUpdate:e=>v.update("value",e),error:l,required:!0}),x.isDate&&("datetime"===h||"datetime-local"===h)&&(0,s.jsx)(c.default,{type:"datetime-local",className:"frui-field-metadata-value",placeholder:Array.isArray(g)?g[1]:void 0,defaultValue:Array.isArray(O)?O[1]:void 0,onUpdate:e=>v.update("value",e),error:l,required:!0}),(0,s.jsx)(n.default,Object.assign({outline:!0,error:!0,onClick:v.remove,className:"frui-field-metadata-remove"},{children:"\xd7"}))]}))}t.useMetadata=p,t.MetadataFields=h;let m=(0,i.default)(h);t.default=function(e){let{type:t,min:r,max:l,step:n,placeholder:i}=e,u=a(e,["type","min","max","step","placeholder"]),o=Array.isArray(i)?i:[i,i];return(0,s.jsx)(m,Object.assign({},u,{config:{type:t,min:r,max:l,step:n,placeholder:o},emptyValue:["",""]}))}},83010:function(e,t,r){var a=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useNumber=void 0;let s=r(24246),n=r(27378),i=l(r(42378));function u(e,t,r){if(!r||!e.length)return e;e[e.length-1]===t&&(e=e.substring(0,e.length-1));let a=RegExp(`\\${t}`,"g");return!(e.match(a)||[]).length&&r>0&&(e+=t+"0".repeat(r)),e[0]===t&&(e="0"+e),0===e.indexOf(`-${t}`)&&(e="-0."+e.substr(t.length+1)),r>0&&(e+="0".repeat(r-e.split(t)[1].length)),e}function o(e,t,r=0){var a;let{min:l,max:s,separator:n=",",decimal:i=".",decimals:o=0,absolute:f=!1}=t,c=i||".",d=RegExp(`[^0-9-\\${c}]`,"g"),p=e.replace(d,"");return a=p=function(e,t,r,a){if(r<0)return e;if(!r)return e.replaceAll(t,"");a=a||e.lastIndexOf(t);let l=RegExp(`\\${t}`,"g");return(e.match(l)||[]).length>1&&(e=[e.substring(0,a).replaceAll(t,""),e.substring(a+1).replaceAll(t,"")].join(t)),(e.split(t)[1]||"").length>r&&(e=e.substring(0,e.length-1)),e}(p=function(e,t){let r=(e.match(/\-/g)||[]).length%2;return(!t&&r?"-":"")+(e=(e=e.replaceAll("-","")).replace(RegExp("^0+","g"),""))}(p,f),c,o,r),l&&!isNaN(l)&&parseFloat(a)<l&&(a=String(l)),s&&!isNaN(s)&&parseFloat(a)>s&&(a=String(s)),{value:u(p=a,c,o),display:function(e,t,r){let a=RegExp(`\\B(?<!\\${t}\\d*)(?=(\\d{3})+(?!\\d))`,"g");if(t){if(-1!==e.indexOf(r)){let[l,s]=e.split(r);e=[l=l.replace(a,t),s].join(r)}else e=e.replace(a,t)}return e}(p,n,i)}}function f(e){var t;let{value:r,defaultValue:a,min:l,max:s,separator:i=",",decimal:f=".",step:c,absolute:d=!1,controls:p,onUpdate:h,onChange:m}=e,y=c&&(null===(t=String(c).split(".")[1])||void 0===t?void 0:t.length)||-1,b={min:Number(l)||void 0,max:Number(s)||void 0,separator:i,decimal:f,decimals:y,absolute:d},g=o(String(a||""),b),[v,x]=(0,n.useState)(g.value),[O,j]=(0,n.useState)(g.display),[_,w]=(0,n.useState)(0),[N,S]=(0,n.useState)(),A={update:e=>{o(String(e),b)},passRef:e=>{e&&!N&&(p&&p({update:A.update,value:v}),S(e))},format:e=>{let{value:t,display:r}=function(e,t){let r=e.selectionStart?e.selectionStart-1:0;return o(e.value,t,r)}(e.target,b);Number(v)!==Number(t)&&(m&&m(e),h&&h(String(Number(t))),x(t));let a=e.target.selectionStart||0;O!==r&&(r.length>O.length?w(a+(r.length-O.length)-1):r.length<O.length?w(a-(O.length-r.length)+1):w(a),j(r))},defocus:()=>{j(u(O,f,y))}};return(0,n.useEffect)(()=>{N&&_>=0&&(N.selectionStart=_,N.selectionEnd=_)},[_]),(0,n.useEffect)(()=>{if(void 0===r)return;let e=o(String(r||""),b);x(e.value),j(e.display)},[r]),{displayValue:O,handlers:A}}t.useNumber=f,t.default=function(e){let{name:t,value:r,defaultValue:l,min:n,max:u,separator:o=",",decimal:c=".",step:d,absolute:p=!1,controls:h,onUpdate:m,onChange:y}=e,b=a(e,["name","value","defaultValue","min","max","separator","decimal","step","absolute","controls","onUpdate","onChange"]),{displayValue:g,handlers:v}=f({value:r,defaultValue:l,min:n,max:u,separator:o,decimal:c,step:d,absolute:p,controls:h,onUpdate:m,onChange:y});return(0,s.jsx)(i.default,Object.assign({passRef:v.passRef},b,{onChange:v.format,onBlur:v.defocus,value:g}))}},11118:function(e,t,r){var a=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]]);return r},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTime=void 0;let s=r(24246),n=l(r(42378));function i({defaultValue:e}){let t;if(e)try{let[r,a]=new Date(e).toISOString().split(":");t=[r.split("T")[1],a].join(":")}catch(e){}return t}t.useTime=i,t.default=function(e){let{defaultValue:t,className:r}=e,l=a(e,["defaultValue","className"]),u=i({defaultValue:t}),o=["frui-field-time"];return r&&o.push(r),(0,s.jsx)(n.default,Object.assign({type:"time",className:o.join(" "),defaultValue:u},l))}},18604:function(e,t,r){var a=r(24246);r(27378);var l=r(79894),s=r.n(l);let n=e=>{let{href:t,label:r,icon:l,last:n}=e,i=t?(0,a.jsx)(s(),{href:t,className:"inline-flex items-center text-t2",children:r}):(0,a.jsx)("span",{className:"inline-flex items-center font-semibold text-t1",children:r});return(0,a.jsxs)(a.Fragment,{children:[l&&(0,a.jsx)("i",{className:"fas fa-fw fa-".concat(l," inline-block mr-1 text-t1")}),i,!n&&(0,a.jsx)("i",{className:"fas fa-fw fa-chevron-right mx-1 text-t1"})]})},i=e=>{var t;let{trail:r}=e;if(0===r.length)return null;let l=r[r.length-1],n=l.href||(null===(t=r[r.length-2])||void 0===t?void 0:t.href);return n?(0,a.jsxs)(s(),{className:"flex md:hidden items-center cursor-pointer whitespace-nowrap overflow-x-hidden",href:n,children:[(0,a.jsx)("i",{className:"mr-1 fas fa-fw fa-chevron-left text-xl text-t2"}),!!l.icon&&(0,a.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(l.icon," text-sm")}),(0,a.jsx)("span",{className:"font-bold",children:l.label})]}):(0,a.jsxs)("div",{className:"flex md:hidden items-center whitespace-nowrap overflow-x-hidden",children:[!!l.icon&&(0,a.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(l.icon," text-sm")}),(0,a.jsx)("span",{className:"font-bold",children:l.label})]})};t.Z=e=>{let{crumbs:t,className:r}=e,l=[...t].filter(e=>!!e.label),s=["hidden md:flex items-center whitespace-nowrap overflow-x-auto"];return r&&s.push(r),(0,a.jsxs)("nav",{children:[(0,a.jsx)("div",{className:s.join(" "),children:l.map((e,t)=>(0,a.jsx)(n,{href:e.href,label:e.label,icon:e.icon,last:t===l.length-1},t))}),(0,a.jsx)(i,{trail:l})]})}}}]);