(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7599],{51646:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};Object.defineProperty(t,"__esModule",{value:!0});let l=r(24246);t.default=function(e){let{block:t,full:r,color:s,xs:a,sm:i,md:o,lg:c,xl:u,xl2:p,xl3:d,xl4:f,xl5:h,curved:x,rounded:m,pill:b,info:g,warning:y,success:v,error:j,muted:k,outline:w,transparent:N,solid:O,style:T,className:S,children:M}=e,$=n(e,["block","full","color","xs","sm","md","lg","xl","xl2","xl3","xl4","xl5","curved","rounded","pill","info","warning","success","error","muted","outline","transparent","solid","style","className","children"]),_={classes:["frui-btn"],styles:{}};t&&_.classes.push("frui-block"),r&&_.classes.push("frui-full"),_.classes.push(`frui-btn-${a?"xs":i?"sm":o?"md":c?"lg":u?"xl":p?"2xl":d?"3xl":f?"4xl":h?"5xl":"md"}`);let C=w?"outline":N?"transparent":"solid";x?_.classes.push("frui-curved"):m?_.classes.push("frui-rounded"):b&&_.classes.push("frui-pill"),"outline"===C||"transparent"===C?(_.classes.push("frui-solid","frui-thin"),"outline"===C&&_.classes.push("frui-bg-white"),s?(_.styles.borderColor=s,_.styles.color=s):g?_.classes.push("frui-bd-info","frui-tx-info"):y?_.classes.push("frui-bd-warning","frui-tx-warning"):v?_.classes.push("frui-bd-success","frui-tx-success"):j?_.classes.push("frui-bd-error","frui-tx-error"):k&&_.classes.push("frui-bd-muted","frui-tx-muted")):(_.classes.push("frui-tx-white"),s?_.styles.backgroundColor=s:g?_.classes.push("frui-bg-info"):y?_.classes.push("frui-bg-warning"):v?_.classes.push("frui-bg-success"):j?_.classes.push("frui-bg-error"):k&&_.classes.push("frui-bg-muted"));let H={classes:[..._.classes,S].join(" "),styles:Object.assign(Object.assign({},_.styles),T)};return(0,l.jsx)("button",Object.assign({className:H.classes,style:H.styles},$,{children:M}))}},54974:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Tgroup=t.Trow=t.Tcol=t.Tfoot=t.Thead=t.Table=void 0;let s=r(24246),a=l(r(27378)),i=({width:e})=>(0,s.jsx)("hr",{style:{borderWidth:0,margin:0,width:e}});class o extends a.default.Component{table(){return"TableCol"}render(){let e=this.props,{stickyBottom:t,stickyLeft:r,stickyRight:l,stickyTop:a,noWrap:o,rowSpan:c,colSpan:u,wrap1:p,wrap2:d,wrap3:f,wrap4:h,wrap5:x,className:m,children:b}=e,g=n(e,["stickyBottom","stickyLeft","stickyRight","stickyTop","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),y=["frui-tbl-col"];(t||r||l||a)&&(y.push("frui-tbl-sticky"),t&&y.push("frui-tbl-sticky-b","frui-tbl-z1"),r&&y.push("frui-tbl-sticky-l","frui-tbl-z2"),l&&y.push("frui-tbl-sticky-r","frui-tbl-z2"),a&&y.push("frui-tbl-sticky-t","frui-tbl-z1")),o&&y.push("frui-tbl-nowrap");let v={};c&&(v.rowSpan=c||0),u&&(v.colSpan=u||0);let j=null;return p?j=(0,s.jsx)(i,{width:"100px"}):d?j=(0,s.jsx)(i,{width:"200px"}):f?j=(0,s.jsx)(i,{width:"300px"}):h?j=(0,s.jsx)(i,{width:"400px"}):x&&(j=(0,s.jsx)(i,{width:"500px"})),m&&y.push(m),(0,s.jsxs)("td",Object.assign({valign:"top"},g,{className:y.join(" ")},v,{children:[b,j]}))}}t.Tcol=o;class c extends a.default.Component{table(){return"TableFoot"}render(){let e=this.props,{stickyBottom:t,stickyLeft:r,stickyRight:l,noWrap:a,rowSpan:i,colSpan:o,className:c,children:u}=e,p=n(e,["stickyBottom","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","className","children"]),d=["frui-tbl-foot"];(t||r||l)&&(d.push("frui-tbl-sticky"),t&&d.push("frui-tbl-sticky-b","frui-tbl-z1"),r&&d.push("frui-tbl-sticky-l","frui-tbl-z2"),l&&d.push("frui-tbl-sticky-r","frui-tbl-z2"),a&&d.push("frui-tbl-nowrap"));let f={};return i&&(f.rowSpan=i||0),o&&(f.colSpan=o||0),c&&d.push(c),(0,s.jsx)("th",Object.assign({},p,{className:d.join(" ")},f,{children:u}))}}t.Tfoot=c;class u extends a.default.Component{table(){return"TableGroup"}render(){return this.props.children}}t.Tgroup=u;class p extends a.default.Component{table(){return"TableRow"}render(){let e=this.props,{noWrap:t,rowSpan:r,colSpan:l,className:a,children:i}=e,o=n(e,["noWrap","rowSpan","colSpan","className","children"]),c=["frui-tbl-row"];t&&c.push("frui-tbl-nowrap");let u={};return r&&(u.rowSpan=r||0),l&&(u.colSpan=l||0),a&&c.push(a),(0,s.jsx)("tr",Object.assign({},o,{className:c.join(" ")},u,{children:i}))}}t.Trow=p;class d extends a.default.Component{table(){return"TableHead"}render(){let e=this.props,{stickyTop:t,stickyLeft:r,stickyRight:l,noWrap:a,rowSpan:o,colSpan:c,wrap1:u,wrap2:p,wrap3:d,wrap4:f,wrap5:h,className:x,children:m}=e,b=n(e,["stickyTop","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),g=["frui-tbl-head"];(r||l||t)&&(g.push("tbl-sticky"),t&&(g.push("tbl-sticky-t"),r&&l?g.push("tbl-z4"):r||l?g.push("tbl-z3"):g.push("tbl-z1")),r&&g.push("tbl-sticky-l","tbl-z1"),l&&g.push("tbl-sticky-r","tbl-z1")),a&&g.push("frui-tbl-nowrap");let y={};o&&(y.rowSpan=o||0),c&&(y.colSpan=c||0);let v=null;return u?v=(0,s.jsx)(i,{width:"100px"}):p?v=(0,s.jsx)(i,{width:"200px"}):d?v=(0,s.jsx)(i,{width:"300px"}):f?v=(0,s.jsx)(i,{width:"400px"}):h&&(v=(0,s.jsx)(i,{width:"500px"})),x&&g.push(x),(0,s.jsxs)("th",Object.assign({},b,{className:g.join(" ")},y,{children:[m,v]}))}}t.Thead=d;let f=function(e){var t,r;let n=[];if(Array.isArray(e))for(let l of e)l&&(Array.isArray(l)?n.push.apply(n,f(l)):"object"==typeof l&&l.props&&"thead"in l.props?n.push(l):"function"==typeof(null===(r=null===(t=null==l?void 0:l.type)||void 0===t?void 0:t.prototype)||void 0===r?void 0:r.table)&&"TableHead"===l.type.prototype.table()&&n.push(l));return n},h=function(e){var t,r;let n=[];if(Array.isArray(e))for(let l of e)Array.isArray(l)?n.push.apply(n,h(l)):"object"==typeof l&&l.props&&"tfoot"in l.props?n.push(l):"function"==typeof(null===(r=null===(t=null==l?void 0:l.type)||void 0===t?void 0:t.prototype)||void 0===r?void 0:r.table)&&"TableFoot"===l.type.prototype.table()&&n.push(l);return n},x=function(e){var t,r,n,l;let s=[];if(Array.isArray(e))for(let a of e)if(Array.isArray(a))s.push.apply(s,x(a));else if("object"==typeof a&&a.props&&"tbody"in a.props)s.push(a);else if("function"==typeof(null===(r=null===(t=null==a?void 0:a.type)||void 0===t?void 0:t.prototype)||void 0===r?void 0:r.table)&&"TableGroup"===a.type.prototype.table()){let e=a.props.children||[];Array.isArray(e)&&e.length>0&&s.push(...e)}else"function"==typeof(null===(l=null===(n=null==a?void 0:a.type)||void 0===n?void 0:n.prototype)||void 0===l?void 0:l.table)&&"TableRow"===a.type.prototype.table()&&s.push(a);return s};function m(e){let t=e.children||[];Array.isArray(t)||(t=[t]);let r=f(t),n=x(t),l=h(t),a=["frui-tbl-overflow"];return e.className&&a.push(e.className),(0,s.jsx)("div",Object.assign({className:a.join(" "),style:e.style},{children:(0,s.jsxs)("table",Object.assign({className:"frui-tbl"},{children:[r&&(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:r})}),n&&(0,s.jsx)("tbody",{children:n}),l&&(0,s.jsx)("tfoot",{children:(0,s.jsx)("tr",{children:l})})]}))}))}t.default=m,t.Table=m},50797:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useMarkdown=void 0;let s=r(24246),a=r(27378),i=l(r(87042)),o=l(r(38900)),c=l(r(51646)),u=r(37803);function p({onUpdate:e}){let[t,r]=(0,a.useState)("edit");return{mode:t,handlers:{mode:r,update:t=>{e&&e(t)}}}}t.useMarkdown=p,t.default=function(e){let{onUpdate:t,defaultValue:r,value:l,rows:a=9,children:d}=e,f=n(e,["onUpdate","defaultValue","value","rows","children"]),{mode:h,handlers:x}=p({onUpdate:t}),m=(null==d?void 0:d.toString())||l||r||"",b=(0,u.renderToStaticMarkup)((0,s.jsx)(i.default,{children:m}));return(0,s.jsxs)("div",Object.assign({className:"frui-field-markdown"},{children:[(0,s.jsxs)("div",Object.assign({className:"frui-field-markdown-nav"},{children:[(0,s.jsx)(c.default,Object.assign({muted:"edit"===h,onClick:()=>x.mode("edit")},{children:"✎"})),(0,s.jsx)(c.default,Object.assign({muted:"preview"===h,onClick:()=>x.mode("preview")},{children:"⚎"}))]})),(0,s.jsx)("div",Object.assign({style:{display:"edit"===h?"block":"none"}},{children:(0,s.jsx)(o.default,Object.assign({},f,{rows:a,value:l,defaultValue:r,onUpdate:x.update}))})),(0,s.jsx)("iframe",{className:"frui-field-markdown-preview",style:{display:"preview"===h?"block":"none"},srcDoc:b})]}))}},38900:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};Object.defineProperty(t,"__esModule",{value:!0}),t.useTextarea=void 0;let l=r(24246);function s({onChange:e,onUpdate:t}){return{handlers:{change:r=>{e&&e(r),t&&t(r.target.value)}}}}t.useTextarea=s,t.default=function(e){let{error:t,className:r,onChange:a,onUpdate:i,passRef:o}=e,c=n(e,["error","className","onChange","onUpdate","passRef"]),{handlers:u}=s({onChange:a,onUpdate:i}),p=["frui-field-textarea"];return t&&p.push("frui-tx-error","frui-bd-error"),r&&p.push(r),(0,l.jsx)("textarea",Object.assign({},c,{className:p.join(" "),ref:o,onChange:u.change}))}},87042:function(e,t,r){var n,l=function(e){if(e&&e.t)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,t}(r(27378));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var a=["children","options"],i=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(function(e,t){return e[t.toLowerCase()]=t,e},{for:"htmlFor"}),o={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"“"},c=["style","script"],u=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,p=/mailto:/i,d=/\n{2,}$/,f=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,h=/^ *> ?/gm,x=/^ {2,}\n/,m=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,b=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,g=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,y=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,v=/^(?:\n *)*\n/,j=/\r\n?/g,k=/^\[\^([^\]]+)](:.*)\n/,w=/^\[\^([^\]]+)]/,N=/\f/g,O=/^\s*?\[(x|\s)\]/,T=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,S=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,M=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,$=/&([a-zA-Z]+);/g,_=/^<!--[\s\S]*?(?:-->)/,C=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,H=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,A=/^\{.*\}$/,E=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,L=/^<([^ >]+@[^ >]+)>/,P=/^<([^ >]+:\/[^ >]+)>/,I=/-([a-z])?/gi,z=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,R=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,Z=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,U=/^\[([^\]]*)\] ?\[([^\]]*)\]/,W=/(\[|\])/g,G=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,B=/\t/g,D=/^ *\| */,F=/(^ *\||\| *$)/g,X=/ *$/,V=/^ *:-+: *$/,q=/^ *:-+ *$/,Q=/^ *-+: *$/,Y=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,J=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,K=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,ee=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,et=/^\\([^0-9A-Za-z\s])/,er=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,en=/^\n+/,el=/^([ \t]*)/,es=/\\([^\\])/g,ea=/ *\n+$/,ei=/(?:^|\n)( *)$/,eo="(?:\\d+\\.)",ec="(?:[*+-])";function eu(e){return"( *)("+(1===e?eo:ec)+") +"}var ep=eu(1),ed=eu(2);function ef(e){return RegExp("^"+(1===e?ep:ed))}var eh=ef(1),ex=ef(2);function em(e){return RegExp("^"+(1===e?ep:ed)+"[^\\n]*(?:\\n(?!\\1"+(1===e?eo:ec)+" )[^\\n]*)*(\\n|$)","gm")}var eb=em(1),eg=em(2);function ey(e){var t=1===e?eo:ec;return RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}var ev=ey(1),ej=ey(2);function ek(e,t){var r=1===t,n=r?ev:ej,l=r?eb:eg,s=r?eh:ex;return{u:function(e,t,r){var l=ei.exec(r);return l&&(t.o||!t.i&&!t._)?n.exec(e=l[1]+e):null},l:eU.HIGH,p:function(e,t,n){var a=r?+e[2]:void 0,i=e[0].replace(d,"\n").match(l),o=!1;return{m:i.map(function(e,r){var l=RegExp("^ {1,"+s.exec(e)[0].length+"}","gm"),a=e.replace(l,"").replace(s,""),c=r===i.length-1,u=-1!==a.indexOf("\n\n")||c&&o;o=u;var p,d=n.i,f=n.o;n.o=!0,u?(n.i=!1,p=a.replace(ea,"\n\n")):(n.i=!0,p=a.replace(ea,""));var h=t(p,n);return n.i=d,n.o=f,h}),v:r,g:a}},h:function(t,r,n){return e(t.v?"ol":"ul",{key:n.k,start:t.g},t.m.map(function(t,l){return e("li",{key:l},r(t,n))}))}}}var ew=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,eN=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,eO=[f,b,g,T,S,_,z,eb,ev,eg,ej],eT=[].concat(eO,[/^[^\n]+(?:  \n|\n{2,})/,M,H]);function eS(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function eM(e){return Q.test(e)?"right":V.test(e)?"center":q.test(e)?"left":null}function e$(e,t,r){var n=r.S;r.S=!0;var l=t(e.trim(),r);r.S=n;var s=[[]];return l.forEach(function(e,t){"tableSeparator"===e.type?0!==t&&t!==l.length-1&&s.push([]):("text"!==e.type||null!=l[t+1]&&"tableSeparator"!==l[t+1].type||(e.$=e.$.replace(X,"")),s[s.length-1].push(e))}),s}function e_(e,t,r){r.i=!0;var n=e$(e[1],t,r),l=e[2].replace(F,"").split("|").map(eM),s=e[3].trim().split("\n").map(function(e){return e$(e,t,r)});return r.i=!1,{O:l,j:s,A:n,type:"table"}}function eC(e,t){return null==e.O[t]?{}:{textAlign:e.O[t]}}function eH(e){return function(t,r){return r.i?e.exec(t):null}}function eA(e){return function(t,r){return r.i||r._?e.exec(t):null}}function eE(e){return function(t,r){return r.i||r._?null:e.exec(t)}}function eL(e){return function(t){return e.exec(t)}}function eP(e,t,r){if(t.i||t._||r&&!r.endsWith("\n"))return null;var n="";e.split("\n").every(function(e){return!eO.some(function(t){return t.test(e)})&&(n+=e+"\n",e.trim())});var l=n.trimEnd();return""==l?null:[n,l]}function eI(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(e){return null}return e}function ez(e){return e.replace(es,"$1")}function eR(e,t,r){var n=r.i||!1,l=r._||!1;r.i=!0,r._=!0;var s=e(t,r);return r.i=n,r._=l,s}function eZ(e,t,r){return r.i=!1,e(t+"\n\n",r)}var eU,eW=function(e,t,r){return{$:eR(t,e[1],r)}};function eG(){return{}}function eB(){return null}function eD(e,t,r){for(var n=e,l=t.split(".");l.length&&void 0!==(n=n[l[0]]);)l.shift();return n||r}function eF(e,t){void 0===t&&(t={}),t.overrides=t.overrides||{},t.slugify=t.slugify||eS,t.namedCodesToUnicode=t.namedCodesToUnicode?s({},o,t.namedCodesToUnicode):o;var r,n=t.createElement||l.createElement;function a(e,r){var l,a,i=eD(t.overrides,e+".props",{});return n.apply(void 0,[(a=eD(l=t.overrides,e))?"function"==typeof a||"object"==typeof a&&"render"in a?a:eD(l,e+".component",e):e,s({},r,i,{className:function(){return[].slice.call(arguments).filter(Boolean).join(" ")}(null==r?void 0:r.className,i.className)||void 0})].concat([].slice.call(arguments,2)))}function d(e){var r=!1;t.forceInline?r=!0:t.forceBlock||(r=!1===G.test(e));for(var n=es(Q(r?e:e.trimEnd().replace(en,"")+"\n\n",{i:r}));"string"==typeof n[n.length-1]&&!n[n.length-1].trim();)n.pop();if(null===t.wrapper)return n;var s,i=t.wrapper||(r?"span":"div");if(n.length>1||t.forceWrapper)s=n;else{if(1===n.length)return"string"==typeof(s=n[0])?a("span",{key:"outer"},s):s;s=null}return l.createElement(i,{key:"outer"},s)}function F(e){var t=e.match(u);return t?t.reduce(function(e,t,r){var n=t.indexOf("=");if(-1!==n){var s,a,o,c,u=(-1!==(s=t.slice(0,n)).indexOf("-")&&null===s.match(C)&&(s=s.replace(I,function(e,t){return t.toUpperCase()})),s).trim(),p=('"'===(o=(a=t.slice(n+1).trim())[0])||"'"===o)&&a.length>=2&&a[a.length-1]===o?a.slice(1,-1):a,f=i[u]||u,h=e[f]=(c=p,"style"===u?c.split(/;\s?/).reduce(function(e,t){var r=t.slice(0,t.indexOf(":"));return e[r.replace(/(-[a-z])/g,function(e){return e[1].toUpperCase()})]=t.slice(r.length+1).trim(),e},{}):"href"===u?eI(c):(c.match(A)&&(c=c.slice(1,c.length-1)),"true"===c||"false"!==c&&c));"string"==typeof h&&(M.test(h)||H.test(h))&&(e[f]=l.cloneElement(d(h.trim()),{key:r}))}else"style"!==t&&(e[i[t]||t]=!0);return e},{}):null}var X=[],V={},q={blockQuote:{u:eE(f),l:eU.HIGH,p:function(e,t,r){return{$:t(e[0].replace(h,""),r)}},h:function(e,t,r){return a("blockquote",{key:r.k},t(e.$,r))}},breakLine:{u:eL(x),l:eU.HIGH,p:eG,h:function(e,t,r){return a("br",{key:r.k})}},breakThematic:{u:eE(m),l:eU.HIGH,p:eG,h:function(e,t,r){return a("hr",{key:r.k})}},codeBlock:{u:eE(g),l:eU.MAX,p:function(e){return{$:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),L:void 0}},h:function(e,t,r){return a("pre",{key:r.k},a("code",s({},e.M,{className:e.L?"lang-"+e.L:""}),e.$))}},codeFenced:{u:eE(b),l:eU.MAX,p:function(e){return{M:F(e[3]||""),$:e[4],L:e[2]||void 0,type:"codeBlock"}}},codeInline:{u:eA(y),l:eU.LOW,p:function(e){return{$:e[2]}},h:function(e,t,r){return a("code",{key:r.k},e.$)}},footnote:{u:eE(k),l:eU.MAX,p:function(e){return X.push({I:e[2],B:e[1]}),{}},h:eB},footnoteReference:{u:eH(w),l:eU.HIGH,p:function(e){return{$:e[1],R:"#"+t.slugify(e[1])}},h:function(e,t,r){return a("a",{key:r.k,href:eI(e.R)},a("sup",{key:r.k},e.$))}},gfmTask:{u:eH(O),l:eU.HIGH,p:function(e){return{T:"x"===e[1].toLowerCase()}},h:function(e,t,r){return a("input",{checked:e.T,key:r.k,readOnly:!0,type:"checkbox"})}},heading:{u:eE(T),l:eU.HIGH,p:function(e,r,n){return{$:eR(r,e[2],n),C:t.slugify(e[2]),D:e[1].length}},h:function(e,t,r){return a("h"+e.D,{id:e.C,key:r.k},t(e.$,r))}},headingSetext:{u:eE(S),l:eU.MAX,p:function(e,t,r){return{$:eR(t,e[1],r),D:"="===e[2]?1:2,type:"heading"}}},htmlComment:{u:eL(_),l:eU.HIGH,p:function(){return{}},h:eB},image:{u:eA(eN),l:eU.HIGH,p:function(e){return{N:e[1],R:ez(e[2]),Z:e[3]}},h:function(e,t,r){return a("img",{key:r.k,alt:e.N||void 0,title:e.Z||void 0,src:eI(e.R)})}},link:{u:eH(ew),l:eU.LOW,p:function(e,t,r){var n,l,s,a;return{$:(n=e[1],l=r.i||!1,s=r._||!1,r.i=!1,r._=!0,a=t(n,r),r.i=l,r._=s,a),R:ez(e[2]),Z:e[3]}},h:function(e,t,r){return a("a",{key:r.k,href:eI(e.R),title:e.Z},t(e.$,r))}},linkAngleBraceStyleDetector:{u:eH(P),l:eU.MAX,p:function(e){return{$:[{$:e[1],type:"text"}],R:e[1],type:"link"}}},linkBareUrlDetector:{u:function(e,t){return t.F?null:eH(E)(e,t)},l:eU.MAX,p:function(e){return{$:[{$:e[1],type:"text"}],R:e[1],Z:void 0,type:"link"}}},linkMailtoDetector:{u:eH(L),l:eU.MAX,p:function(e){var t=e[1],r=e[1];return p.test(r)||(r="mailto:"+r),{$:[{$:t.replace("mailto:",""),type:"text"}],R:r,type:"link"}}},orderedList:ek(a,1),unorderedList:ek(a,2),newlineCoalescer:{u:eE(v),l:eU.LOW,p:eG,h:function(){return"\n"}},paragraph:{u:eP,l:eU.LOW,p:eW,h:function(e,t,r){return a("p",{key:r.k},t(e.$,r))}},ref:{u:eH(R),l:eU.MAX,p:function(e){return V[e[1]]={R:e[2],Z:e[4]},{}},h:eB},refImage:{u:eA(Z),l:eU.MAX,p:function(e){return{N:e[1]||void 0,P:e[2]}},h:function(e,t,r){return a("img",{key:r.k,alt:e.N,src:eI(V[e.P].R),title:V[e.P].Z})}},refLink:{u:eH(U),l:eU.MAX,p:function(e,t,r){return{$:t(e[1],r),q:t(e[0].replace(W,"\\$1"),r),P:e[2]}},h:function(e,t,r){return V[e.P]?a("a",{key:r.k,href:eI(V[e.P].R),title:V[e.P].Z},t(e.$,r)):a("span",{key:r.k},t(e.q,r))}},table:{u:eE(z),l:eU.HIGH,p:e_,h:function(e,t,r){return a("table",{key:r.k},a("thead",null,a("tr",null,e.A.map(function(n,l){return a("th",{key:l,style:eC(e,l)},t(n,r))}))),a("tbody",null,e.j.map(function(n,l){return a("tr",{key:l},n.map(function(n,l){return a("td",{key:l,style:eC(e,l)},t(n,r))}))})))}},tableSeparator:{u:function(e,t){return t.S?D.exec(e):null},l:eU.HIGH,p:function(){return{type:"tableSeparator"}},h:function(){return" | "}},text:{u:eL(er),l:eU.MIN,p:function(e){return{$:e[0].replace($,function(e,r){return t.namedCodesToUnicode[r]?t.namedCodesToUnicode[r]:e})}},h:function(e){return e.$}},textBolded:{u:eA(Y),l:eU.MED,p:function(e,t,r){return{$:t(e[2],r)}},h:function(e,t,r){return a("strong",{key:r.k},t(e.$,r))}},textEmphasized:{u:eA(J),l:eU.LOW,p:function(e,t,r){return{$:t(e[2],r)}},h:function(e,t,r){return a("em",{key:r.k},t(e.$,r))}},textEscaped:{u:eA(et),l:eU.HIGH,p:function(e){return{$:e[1],type:"text"}}},textMarked:{u:eA(K),l:eU.LOW,p:eW,h:function(e,t,r){return a("mark",{key:r.k},t(e.$,r))}},textStrikethroughed:{u:eA(ee),l:eU.LOW,p:eW,h:function(e,t,r){return a("del",{key:r.k},t(e.$,r))}}};!0!==t.disableParsingRawHTML&&(q.htmlBlock={u:eL(M),l:eU.HIGH,p:function(e,t,r){var n=RegExp("^"+e[3].match(el)[1],"gm"),l=e[3].replace(n,""),s=eT.some(function(e){return e.test(l)})?eZ:eR,a=e[1].toLowerCase(),i=-1!==c.indexOf(a);r.F=r.F||"a"===a;var o=i?e[3]:s(t,l,r);return r.F=!1,{M:F(e[2]),$:o,G:i,H:i?a:e[1]}},h:function(e,t,r){return a(e.H,s({key:r.k},e.M),e.G?e.$:t(e.$,r))}},q.htmlSelfClosing={u:eL(H),l:eU.HIGH,p:function(e){return{M:F(e[2]||""),H:e[1]}},h:function(e,t,r){return a(e.H,s({},e.M,{key:r.k}))}});var Q=((r=Object.keys(q)).sort(function(e,t){var r=q[e].l,n=q[t].l;return r!==n?r-n:e<t?-1:1}),function(e,t){return function e(t,n){for(var l=[],s="";t;)for(var a=0;a<r.length;){var i=r[a],o=q[i],c=o.u(t,n,s);if(c){var u=c[0];t=t.substring(u.length);var p=o.p(c,e,n);null==p.type&&(p.type=i),l.push(p),s=u;break}a++}return l}(e.replace(j,"\n").replace(N,"").replace(B,"    "),t)}),es=function e(t,r){if(void 0===r&&(r={}),Array.isArray(t)){for(var n,l,s=r.k,a=[],i=!1,o=0;o<t.length;o++){r.k=o;var c=e(t[o],r),u="string"==typeof c;u&&i?a[a.length-1]+=c:null!==c&&a.push(c),i=u}return r.k=s,a}return n=e,l=r,q[t.type].h(t,n,l)},ea=d(e);return X.length?a("div",null,ea,a("footer",{key:"footer"},X.map(function(e){return a("div",{id:t.slugify(e.B),key:e.B},e.B,es(Q(e.I,{i:!0})))}))):ea}(n=eU||(eU={}))[n.MAX=0]="MAX",n[n.HIGH=1]="HIGH",n[n.MED=2]="MED",n[n.LOW=3]="LOW",n[n.MIN=4]="MIN";var eX=function(e){var t=e.children,r=e.options,n=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(r=s[n])>=0||(l[r]=e[r]);return l}(e,a);return l.cloneElement(eF(t,r),n)};Object.assign(eX,{compiler:eF}),e.exports=eX},16866:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/field/markdown",function(){return r(82543)}])},36493:function(e,t,r){"use strict";r.d(t,{C:function(){return c},Z:function(){return o}});var n=r(24246),l=r(22879),s=r(74631),a=r(48717),i=r(14707);function o(e){let{value:t,quote:r,l,r:s,children:a}=e;return(0,n.jsxs)(n.Fragment,{children:[l?(0,n.jsx)("span",{children:"\xa0"}):"",(0,n.jsxs)("code",{className:"text-sm text-t2 bg-b1 font-semibold inline-block p-0.5",children:[r?"`":"",t||a,r?"`":""]}),s?(0,n.jsx)("span",{children:"\xa0"}):""]})}function c(e){let{className:t,copy:r=!0,children:o,language:c}=e,{_:u}=(0,l.useLanguage)();return(0,n.jsxs)("div",{className:"flex text-sm bg-black ".concat(t||""),children:[(0,n.jsx)(s.Z,{className:"flex-grow !p-4 !bg-transparent",language:c,style:a._4,children:o}),r&&(0,n.jsxs)("div",{className:"text-sm p-4 text-gray-400 cursor-pointer whitespace-nowrap",onClick:()=>{navigator.clipboard.writeText(o.toString()),(0,i.ZP)("success",u("Copied to clipboard"))},children:[(0,n.jsx)("i",{className:"fas fa-copy"})," ",u("Copy")]})]})}},18604:function(e,t,r){"use strict";var n=r(24246);r(27378);var l=r(79894),s=r.n(l);let a=e=>{let{href:t,label:r,icon:l,last:a}=e,i=t?(0,n.jsx)(s(),{href:t,className:"inline-flex items-center text-t2",children:r}):(0,n.jsx)("span",{className:"inline-flex items-center font-semibold text-t1",children:r});return(0,n.jsxs)(n.Fragment,{children:[l&&(0,n.jsx)("i",{className:"fas fa-fw fa-".concat(l," inline-block mr-1 text-t1")}),i,!a&&(0,n.jsx)("i",{className:"fas fa-fw fa-chevron-right mx-1 text-t1"})]})},i=e=>{var t;let{trail:r}=e;if(0===r.length)return null;let l=r[r.length-1],a=l.href||(null===(t=r[r.length-2])||void 0===t?void 0:t.href);return a?(0,n.jsxs)(s(),{className:"flex md:hidden items-center cursor-pointer whitespace-nowrap overflow-x-hidden",href:a,children:[(0,n.jsx)("i",{className:"mr-1 fas fa-fw fa-chevron-left text-xl text-t2"}),!!l.icon&&(0,n.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(l.icon," text-sm")}),(0,n.jsx)("span",{className:"font-bold",children:l.label})]}):(0,n.jsxs)("div",{className:"flex md:hidden items-center whitespace-nowrap overflow-x-hidden",children:[!!l.icon&&(0,n.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(l.icon," text-sm")}),(0,n.jsx)("span",{className:"font-bold",children:l.label})]})};t.Z=e=>{let{crumbs:t,className:r}=e,l=[...t].filter(e=>!!e.label),s=["hidden md:flex items-center whitespace-nowrap overflow-x-auto"];return r&&s.push(r),(0,n.jsxs)("nav",{children:[(0,n.jsx)("div",{className:s.join(" "),children:l.map((e,t)=>(0,n.jsx)(a,{href:e.href,label:e.label,icon:e.icon,last:t===l.length-1},t))}),(0,n.jsx)(i,{trail:l})]})}},63527:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(24246),l=r(22879),s=r(79531),a=r(54974),i=r.n(a);function o(e){let{props:t}=e,{_:r}=(0,l.useLanguage)(),o=(0,s.Z)("bg-b2","bg-b1");return(0,n.jsxs)(i(),{children:[(0,n.jsx)(a.Thead,{className:"text-left bg-b3",children:r("Name")}),(0,n.jsx)(a.Thead,{className:"text-left bg-b3",children:r("Type")}),(0,n.jsx)(a.Thead,{className:"text-center bg-b3",children:r("Required")}),(0,n.jsx)(a.Thead,{className:"text-left bg-b3",children:r("Notes")}),t.map((e,t)=>(0,n.jsxs)(a.Trow,{children:[(0,n.jsx)(a.Tcol,{className:"".concat(o(t)),children:e[0]}),(0,n.jsx)(a.Tcol,{className:"".concat(o(t)),children:e[1]}),(0,n.jsx)(a.Tcol,{className:"".concat(o(t)," text-center"),children:e[2]}),(0,n.jsx)(a.Tcol,{className:"".concat(o(t)),children:e[3]})]},t))]})}},79531:function(e,t,r){"use strict";function n(e,t){let r=e;return n=>"number"==typeof n?n%2==0?e:t:(n&&(r=r===e?t:e),r)}r.d(t,{Z:function(){return n}})},82543:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(24246),l=r(22879),s=r(79894),a=r.n(s),i=r(50797),o=r.n(i),c=r(54974),u=r.n(c),p=r(1343),d=r(18604),f=r(63527),h=r(36493);function x(){let{_:e}=(0,l.useLanguage)(),t=[[e("className"),e("string"),e("No"),e("Standard HTML class names")],[e("defaultValue"),e("string"),e("No"),e("Default value (Uncontrolled)")],[e("error"),e("string|boolean"),e("No"),e("Any error message")],[e("name"),e("string"),e("No"),e("Used for react server components.")],[e("onChange"),e("Function"),e("No"),e("Event handler when value has changed")],[e("onUpdate"),e("Function"),e("No"),e("Update event handler")],[e("passRef"),e("LegacyRef"),e("No"),e("Passes ref to html textarea")],[e("rows"),e("number"),e("No"),e("Number of visible rows")],[e("style"),e("CSS Object"),e("No"),e("Standard CSS object")],[e("value"),e("string"),e("No"),e("Default value (Controlled)")]];return(0,n.jsx)(p.sF,{children:(0,n.jsxs)("main",{className:"flex flex-col h-full w-full",children:[(0,n.jsx)("div",{className:"p-3 bg-b2",children:(0,n.jsx)(d.Z,{crumbs:[{icon:"rectangle-list",label:"Fields",href:"/field"},{label:"Markdown"}]})}),(0,n.jsxs)("div",{className:"flex-grow relative h-full",children:[(0,n.jsxs)("aside",{className:"hidden lg:block absolute top-0 bottom-0 right-0 z-1 w-56 border-l border-b1 text-sm",children:[(0,n.jsx)("h4",{className:"p-3 border-b border-b1 bg-b1 uppercase font-semibold",children:(0,n.jsx)(a(),{href:"#top",children:e("Markdown")})}),(0,n.jsxs)("ul",{className:"list-disc py-3 pr-3 pl-6",children:[(0,n.jsx)("li",{className:"pl-3 pb-1",children:(0,n.jsx)(a(),{href:"#props",children:e("Props")})}),(0,n.jsx)("li",{className:"pl-3 pb-1",children:(0,n.jsx)(a(),{href:"#basic",children:e("Basics")})}),(0,n.jsx)("li",{className:"pl-3 pb-1",children:(0,n.jsx)(a(),{href:"#events",children:e("Events")})}),(0,n.jsx)("li",{className:"pl-3 pb-1",children:(0,n.jsx)(a(),{href:"#errors",children:e("Errors")})})]})]}),(0,n.jsxs)("div",{className:"absolute top-0 bottom-0 left-0 right-0 lg:right-56 px-3 pt-3 pb-5 h-full overflow-auto",children:[(0,n.jsx)("h1",{id:"top",className:"flex items-center uppercase font-bold text-xl",children:e("Markdown")}),(0,n.jsx)(h.C,{language:"typescript",className:"mt-2",children:"import Markdown from 'frui/fields/Markdown';"}),(0,n.jsx)("h2",{id:"props",className:"uppercase font-bold text-lg mt-8",children:e("Props")}),(0,n.jsx)("p",{children:(0,n.jsxs)(l.Translate,{children:["Markdown accepts all props of a standard HTML Textare element. See ",(0,n.jsx)("a",{className:"text-t2 underline",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea",target:"_blank",children:"Moz"})," for standard textarea attributes."]})}),(0,n.jsx)(f.Z,{props:t}),(0,n.jsx)("h2",{id:"basic",className:"uppercase font-bold text-lg mt-8",children:e("Basics")}),(0,n.jsx)("p",{className:"py-4",children:(0,n.jsxs)(l.Translate,{children:["Markdown wraps the HTML standard ",(0,n.jsx)("code",{className:"text-sm text-t2",children:"`<textarea />`"})," element. Therefore, you can use any textarea attributes as props."]})}),(0,n.jsxs)("div",{className:"curved overflow-hidden",children:[(0,n.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)(o(),{name:"name",placeholder:"Enter name..",defaultValue:"# Hello World"})})}),(0,n.jsx)(h.C,{language:"typescript",children:'<Markdown name="name" placeholder="Enter name.." defaultValue="# Hello World" />'})]}),(0,n.jsx)("h2",{id:"events",className:"uppercase font-bold text-lg mt-8",children:e("Events")}),(0,n.jsx)("p",{className:"py-4",children:(0,n.jsxs)(l.Translate,{children:[(0,n.jsx)(h.Z,{value:"onUpdate"})," is like ",(0,n.jsx)(h.Z,{value:"onChange",r:!0}),"except the value is passed instead of the change event."]})}),(0,n.jsxs)("div",{className:"curved overflow-hidden",children:[(0,n.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)(o(),{onUpdate:e=>alert(e),value:"# Hello World"})})}),(0,n.jsx)(h.C,{language:"typescript",children:'<Markdown onUpdate={value => alert(value)} value="# Hello World" />'})]}),(0,n.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("On Change")}),(0,n.jsx)("p",{className:"py-4",children:(0,n.jsxs)(l.Translate,{children:["The ",(0,n.jsx)(h.Z,{value:"onChange"})," event is triggered when the value has changed. The following arguments are passed to the event handler:"]})}),(0,n.jsxs)(u(),{children:[(0,n.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Name")}),(0,n.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Type")}),(0,n.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Sample")}),(0,n.jsxs)(c.Trow,{children:[(0,n.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("event")}),(0,n.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("Event Object")}),(0,n.jsxs)(c.Tcol,{className:"bg-b1 text-left",children:["see: ",(0,n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event",target:"_blank",children:"Change Event"})]})]})]}),(0,n.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("On Update")}),(0,n.jsx)("p",{className:"py-4",children:(0,n.jsxs)(l.Translate,{children:["The ",(0,n.jsx)(h.Z,{value:"onUpdate"})," event is triggered when the value has been updated. The following arguments are passed to the event handler:"]})}),(0,n.jsxs)(u(),{children:[(0,n.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Name")}),(0,n.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Type")}),(0,n.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Sample")}),(0,n.jsxs)(c.Trow,{children:[(0,n.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("value")}),(0,n.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("string")}),(0,n.jsx)(c.Tcol,{className:"bg-b1 text-left",children:(0,n.jsx)(h.Z,{value:"foobar",quote:!0})})]})]}),(0,n.jsx)("h2",{id:"errors",className:"uppercase font-bold text-lg mt-8",children:e("Errors")}),(0,n.jsx)("p",{className:"py-4",children:(0,n.jsxs)(l.Translate,{children:["You can pass the ",(0,n.jsx)(h.Z,{value:"error"})," prop to highlight the markdown field red."]})}),(0,n.jsxs)("div",{className:"curved overflow-hidden",children:[(0,n.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)(o(),{error:!0,onUpdate:e=>alert(e),value:"# Not a hotdog."})})}),(0,n.jsx)(h.C,{language:"typescript",children:'<Markdown error onUpdate={value => alert(value)} value="# Not a hotdog." />'})]}),(0,n.jsxs)("div",{className:"flex items-center border-t border-b2 mt-8 pt-4",children:[(0,n.jsxs)(a(),{className:"text-t2",href:"/field/input",children:[(0,n.jsx)("i",{className:"fas fa-arrow-left mr-2"}),e("Input")]}),(0,n.jsx)("div",{className:"flex-grow"}),(0,n.jsxs)(a(),{className:"text-t2",href:"/field/mask",children:[e("Mask"),(0,n.jsx)("i",{className:"fas fa-arrow-right ml-2"})]})]})]})]})]})})}}},function(e){e.O(0,[9774,9461,2888,179],function(){return e(e.s=16866)}),_N_E=e.O()}]);