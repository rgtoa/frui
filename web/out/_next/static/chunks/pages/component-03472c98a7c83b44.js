(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4770],{6122:function(e,s,r){"use strict";let l=r(24246);s.Z=function(e){let{color:s,info:r,warning:t,success:i,error:n,muted:c,solid:a,outline:o,curved:d,rounded:u,pill:p,style:f,className:h,children:b}=e,x={classes:["frui-alert"],styles:{}};d?x.classes.push("frui-curved"):u?x.classes.push("frui-rounded"):p&&x.classes.push("frui-pill"),"outline"==(o?"outline":"solid")?(x.classes.push("frui-solid","frui-thin"),s?(x.styles.borderColor=s,x.styles.color=s):r?x.classes.push("frui-bd-info","frui-tx-info"):t?x.classes.push("frui-bd-warning","frui-tx-warning"):i?x.classes.push("frui-bd-success","frui-tx-success"):n?x.classes.push("frui-bd-error","frui-tx-error"):c&&x.classes.push("frui-bd-muted","frui-tx-muted")):(x.classes.push("frui-tx-white"),s?x.styles.backgroundColor=s:r?x.classes.push("frui-bg-info"):t?x.classes.push("frui-bg-warning"):i?x.classes.push("frui-bg-success"):n?x.classes.push("frui-bg-error"):c&&x.classes.push("frui-bg-muted"));let m={classes:[...x.classes,h].join(" "),styles:Object.assign(Object.assign({},x.styles),f)};return(0,l.jsx)("div",Object.assign({className:m.classes,style:m.styles},{children:b}))}},51646:function(e,s,r){"use strict";var l=this&&this.__rest||function(e,s){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>s.indexOf(l)&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,l=Object.getOwnPropertySymbols(e);t<l.length;t++)0>s.indexOf(l[t])&&Object.prototype.propertyIsEnumerable.call(e,l[t])&&(r[l[t]]=e[l[t]]);return r};Object.defineProperty(s,"__esModule",{value:!0});let t=r(24246);s.default=function(e){let{block:s,full:r,color:i,xs:n,sm:c,md:a,lg:o,xl:d,xl2:u,xl3:p,xl4:f,xl5:h,curved:b,rounded:x,pill:m,info:j,warning:y,success:v,error:w,muted:N,outline:g,transparent:k,solid:T,style:O,className:C,children:S}=e,_=l(e,["block","full","color","xs","sm","md","lg","xl","xl2","xl3","xl4","xl5","curved","rounded","pill","info","warning","success","error","muted","outline","transparent","solid","style","className","children"]),A={classes:["frui-btn"],styles:{}};s&&A.classes.push("frui-block"),r&&A.classes.push("frui-full"),A.classes.push(`frui-btn-${n?"xs":c?"sm":a?"md":o?"lg":d?"xl":u?"2xl":p?"3xl":f?"4xl":h?"5xl":"md"}`);let z=g?"outline":k?"transparent":"solid";b?A.classes.push("frui-curved"):x?A.classes.push("frui-rounded"):m&&A.classes.push("frui-pill"),"outline"===z||"transparent"===z?(A.classes.push("frui-solid","frui-thin"),"outline"===z&&A.classes.push("frui-bg-white"),i?(A.styles.borderColor=i,A.styles.color=i):j?A.classes.push("frui-bd-info","frui-tx-info"):y?A.classes.push("frui-bd-warning","frui-tx-warning"):v?A.classes.push("frui-bd-success","frui-tx-success"):w?A.classes.push("frui-bd-error","frui-tx-error"):N&&A.classes.push("frui-bd-muted","frui-tx-muted")):(A.classes.push("frui-tx-white"),i?A.styles.backgroundColor=i:j?A.classes.push("frui-bg-info"):y?A.classes.push("frui-bg-warning"):v?A.classes.push("frui-bg-success"):w?A.classes.push("frui-bg-error"):N&&A.classes.push("frui-bg-muted"));let P={classes:[...A.classes,C].join(" "),styles:Object.assign(Object.assign({},A.styles),O)};return(0,t.jsx)("button",Object.assign({className:P.classes,style:P.styles},_,{children:S}))}},41323:function(e,s,r){"use strict";let l=r(24246);s.Z=e=>{let{show:s,color:r,label:t,style:i={},className:n}=e;i.borderColor=r||"#666666";let c={};!1===s&&(c.display="none");let a=["frui-loader"];return n&&a.push(n),(0,l.jsxs)("div",Object.assign({style:c},{children:[(0,l.jsx)("span",{className:a.join(" "),style:i}),t]}))}},81562:function(e,s,r){"use strict";let l=r(24246);s.Z=function(e){let{value:s,max:r=100,color:t,className:i,style:n}=e,c=["frui-progress"],a=["frui-progress-bar"];i&&(c.push(i),a.push(i));let o=Object.assign({width:`${Math.min(100,s/r*100)}%`,backgroundColor:t||"currentColor"},n);return(0,l.jsx)("div",Object.assign({className:c.join(" ")},{children:(0,l.jsx)("div",{className:a.join(" "),style:o})}))}},54974:function(e,s,r){"use strict";var l=this&&this.__rest||function(e,s){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>s.indexOf(l)&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,l=Object.getOwnPropertySymbols(e);t<l.length;t++)0>s.indexOf(l[t])&&Object.prototype.propertyIsEnumerable.call(e,l[t])&&(r[l[t]]=e[l[t]]);return r},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.Tgroup=s.Trow=s.Tcol=s.Tfoot=s.Thead=s.Table=void 0;let i=r(24246),n=t(r(27378)),c=({width:e})=>(0,i.jsx)("hr",{style:{borderWidth:0,margin:0,width:e}});class a extends n.default.Component{table(){return"TableCol"}render(){let e=this.props,{stickyBottom:s,stickyLeft:r,stickyRight:t,stickyTop:n,noWrap:a,rowSpan:o,colSpan:d,wrap1:u,wrap2:p,wrap3:f,wrap4:h,wrap5:b,className:x,children:m}=e,j=l(e,["stickyBottom","stickyLeft","stickyRight","stickyTop","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),y=["frui-tbl-col"];(s||r||t||n)&&(y.push("frui-tbl-sticky"),s&&y.push("frui-tbl-sticky-b","frui-tbl-z1"),r&&y.push("frui-tbl-sticky-l","frui-tbl-z2"),t&&y.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&y.push("frui-tbl-sticky-t","frui-tbl-z1")),a&&y.push("frui-tbl-nowrap");let v={};o&&(v.rowSpan=o||0),d&&(v.colSpan=d||0);let w=null;return u?w=(0,i.jsx)(c,{width:"100px"}):p?w=(0,i.jsx)(c,{width:"200px"}):f?w=(0,i.jsx)(c,{width:"300px"}):h?w=(0,i.jsx)(c,{width:"400px"}):b&&(w=(0,i.jsx)(c,{width:"500px"})),x&&y.push(x),(0,i.jsxs)("td",Object.assign({valign:"top"},j,{className:y.join(" ")},v,{children:[m,w]}))}}s.Tcol=a;class o extends n.default.Component{table(){return"TableFoot"}render(){let e=this.props,{stickyBottom:s,stickyLeft:r,stickyRight:t,noWrap:n,rowSpan:c,colSpan:a,className:o,children:d}=e,u=l(e,["stickyBottom","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","className","children"]),p=["frui-tbl-foot"];(s||r||t)&&(p.push("frui-tbl-sticky"),s&&p.push("frui-tbl-sticky-b","frui-tbl-z1"),r&&p.push("frui-tbl-sticky-l","frui-tbl-z2"),t&&p.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&p.push("frui-tbl-nowrap"));let f={};return c&&(f.rowSpan=c||0),a&&(f.colSpan=a||0),o&&p.push(o),(0,i.jsx)("th",Object.assign({},u,{className:p.join(" ")},f,{children:d}))}}s.Tfoot=o;class d extends n.default.Component{table(){return"TableGroup"}render(){return this.props.children}}s.Tgroup=d;class u extends n.default.Component{table(){return"TableRow"}render(){let e=this.props,{noWrap:s,rowSpan:r,colSpan:t,className:n,children:c}=e,a=l(e,["noWrap","rowSpan","colSpan","className","children"]),o=["frui-tbl-row"];s&&o.push("frui-tbl-nowrap");let d={};return r&&(d.rowSpan=r||0),t&&(d.colSpan=t||0),n&&o.push(n),(0,i.jsx)("tr",Object.assign({},a,{className:o.join(" ")},d,{children:c}))}}s.Trow=u;class p extends n.default.Component{table(){return"TableHead"}render(){let e=this.props,{stickyTop:s,stickyLeft:r,stickyRight:t,noWrap:n,rowSpan:a,colSpan:o,wrap1:d,wrap2:u,wrap3:p,wrap4:f,wrap5:h,className:b,children:x}=e,m=l(e,["stickyTop","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),j=["frui-tbl-head"];(r||t||s)&&(j.push("frui-tbl-sticky"),s&&(j.push("frui-tbl-sticky-t"),r&&t?j.push("frui-tbl-z4"):r||t?j.push("frui-tbl-z3"):j.push("frui-tbl-z1")),r&&j.push("frui-tbl-sticky-l","frui-tbl-z1"),t&&j.push("frui-tbl-sticky-r","frui-tbl-z1")),n&&j.push("frui-tbl-nowrap");let y={};a&&(y.rowSpan=a||0),o&&(y.colSpan=o||0);let v=null;return d?v=(0,i.jsx)(c,{width:"100px"}):u?v=(0,i.jsx)(c,{width:"200px"}):p?v=(0,i.jsx)(c,{width:"300px"}):f?v=(0,i.jsx)(c,{width:"400px"}):h&&(v=(0,i.jsx)(c,{width:"500px"})),b&&j.push(b),(0,i.jsxs)("th",Object.assign({},m,{className:j.join(" ")},y,{children:[x,v]}))}}s.Thead=p;let f=function(e){var s,r;let l=[];if(Array.isArray(e))for(let t of e)t&&(Array.isArray(t)?l.push.apply(l,f(t)):"object"==typeof t&&t.props&&"thead"in t.props?l.push(t):"function"==typeof(null===(r=null===(s=null==t?void 0:t.type)||void 0===s?void 0:s.prototype)||void 0===r?void 0:r.table)&&"TableHead"===t.type.prototype.table()&&l.push(t));return l},h=function(e){var s,r;let l=[];if(Array.isArray(e))for(let t of e)Array.isArray(t)?l.push.apply(l,h(t)):"object"==typeof t&&t.props&&"tfoot"in t.props?l.push(t):"function"==typeof(null===(r=null===(s=null==t?void 0:t.type)||void 0===s?void 0:s.prototype)||void 0===r?void 0:r.table)&&"TableFoot"===t.type.prototype.table()&&l.push(t);return l},b=function(e){var s,r,l,t;let i=[];if(Array.isArray(e))for(let n of e)if(Array.isArray(n))i.push.apply(i,b(n));else if("object"==typeof n&&n.props&&"tbody"in n.props)i.push(n);else if("function"==typeof(null===(r=null===(s=null==n?void 0:n.type)||void 0===s?void 0:s.prototype)||void 0===r?void 0:r.table)&&"TableGroup"===n.type.prototype.table()){let e=n.props.children||[];Array.isArray(e)&&e.length>0&&i.push(...e)}else"function"==typeof(null===(t=null===(l=null==n?void 0:n.type)||void 0===l?void 0:l.prototype)||void 0===t?void 0:t.table)&&"TableRow"===n.type.prototype.table()&&i.push(n);return i};function x(e){let s=e.children||[];Array.isArray(s)||(s=[s]);let r=f(s),l=b(s),t=h(s),n=["frui-tbl-overflow"];return e.className&&n.push(e.className),(0,i.jsx)("div",Object.assign({className:n.join(" "),style:e.style},{children:(0,i.jsxs)("table",Object.assign({className:"frui-tbl"},{children:[r&&(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:r})}),l&&(0,i.jsx)("tbody",{children:l}),t&&(0,i.jsx)("tfoot",{children:(0,i.jsx)("tr",{children:t})})]}))}))}s.default=x,s.Table=x},90890:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component",function(){return r(65406)}])},18604:function(e,s,r){"use strict";var l=r(24246);r(27378);var t=r(79894),i=r.n(t);let n=e=>{let{href:s,label:r,icon:t,last:n}=e,c=s?(0,l.jsx)(i(),{href:s,className:"inline-flex items-center text-t2",children:r}):(0,l.jsx)("span",{className:"inline-flex items-center font-semibold text-t1",children:r});return(0,l.jsxs)(l.Fragment,{children:[t&&(0,l.jsx)("i",{className:"fas fa-fw fa-".concat(t," inline-block mr-1 text-t1")}),c,!n&&(0,l.jsx)("i",{className:"fas fa-fw fa-chevron-right mx-1 text-t1"})]})},c=e=>{var s;let{trail:r}=e;if(0===r.length)return null;let t=r[r.length-1],n=t.href||(null===(s=r[r.length-2])||void 0===s?void 0:s.href);return n?(0,l.jsxs)(i(),{className:"flex md:hidden items-center cursor-pointer whitespace-nowrap overflow-x-hidden",href:n,children:[(0,l.jsx)("i",{className:"mr-1 fas fa-fw fa-chevron-left text-xl text-t2"}),!!t.icon&&(0,l.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(t.icon," text-sm")}),(0,l.jsx)("span",{className:"font-bold",children:t.label})]}):(0,l.jsxs)("div",{className:"flex md:hidden items-center whitespace-nowrap overflow-x-hidden",children:[!!t.icon&&(0,l.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(t.icon," text-sm")}),(0,l.jsx)("span",{className:"font-bold",children:t.label})]})};s.Z=e=>{let{crumbs:s,className:r}=e,t=[...s].filter(e=>!!e.label),i=["hidden md:flex items-center whitespace-nowrap overflow-x-auto"];return r&&i.push(r),(0,l.jsxs)("nav",{children:[(0,l.jsx)("div",{className:i.join(" "),children:t.map((e,s)=>(0,l.jsx)(n,{href:e.href,label:e.label,icon:e.icon,last:s===t.length-1},s))}),(0,l.jsx)(c,{trail:t})]})}},65406:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return x}});var l=r(24246),t=r(22879),i=r(86677),n=r(18604),c=r(78968),a=r(6122),o=r(23485),d=r(51646),u=r.n(d),p=r(41323),f=r(54974),h=r.n(f),b=r(81562);function x(){let{_:e}=(0,t.useLanguage)(),s=(0,i.useRouter)();return(0,l.jsx)(c.sF,{uri:"/component",title:"Components",description:"Components in FRUI, are compounded interfaces built on top of ReactJS native components and HTML elements.",children:(0,l.jsxs)("main",{className:"flex flex-col h-full w-full",children:[(0,l.jsx)("div",{className:"p-3 bg-b2",children:(0,l.jsx)(n.Z,{crumbs:[{icon:"icons",label:"Components"}]})}),(0,l.jsxs)("div",{className:"flex-grow px-3 pt-3 pb-5 overflow-auto",children:[(0,l.jsx)("h1",{className:"flex items-center uppercase font-bold text-xl",children:e("Components")}),(0,l.jsx)("p",{className:"px-3 pt-3",children:"Thanks to our sponsors, contributors, and users. The following components have been unlocked and are free to use."}),(0,l.jsxs)("div",{className:"flex flex-wrap mt-4",children:[(0,l.jsx)("div",{className:"block basis-1/2 md:basis-1/3 text-center cursor-pointer",onClick:()=>s.push("/component/alert"),children:(0,l.jsxs)("div",{className:"m-2 border border-b2 rounded overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center h-[100px] w-full bg-b1 px-3",children:(0,l.jsxs)(a.Z,{curved:!0,info:!0,className:"w-full",children:[(0,l.jsx)("i",{className:"fas fa-check-circle mr-2"}),e("Success")]})}),(0,l.jsx)("h2",{className:"my-2 font-semibold text-center uppercase",children:e("Alert")})]})}),(0,l.jsx)("div",{className:"block basis-1/2 md:basis-1/3 text-center cursor-pointer",onClick:()=>s.push("/component/badge"),children:(0,l.jsxs)("div",{className:"m-2 border border-b2 rounded overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center h-[100px] w-full bg-b1",children:(0,l.jsx)(o.default,{success:!0,pill:!0,className:"text-xs my-3 inline-block",children:"99"})}),(0,l.jsx)("h2",{className:"my-2 font-semibold text-center uppercase",children:e("Badge")})]})}),(0,l.jsx)("div",{className:"block basis-1/2 md:basis-1/3 text-center cursor-pointer",onClick:()=>s.push("/component/button"),children:(0,l.jsxs)("div",{className:"m-2 border border-b2 rounded overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center h-[100px] w-full bg-b1",children:(0,l.jsx)(u(),{error:!0,rounded:!0,className:"my-1",children:"Submit"})}),(0,l.jsx)("h2",{className:"my-2 font-semibold text-center uppercase",children:e("Button")})]})}),(0,l.jsx)("div",{className:"block basis-1/2 md:basis-1/3 text-center cursor-pointer",onClick:()=>s.push("/component/loader"),children:(0,l.jsxs)("div",{className:"m-2 border border-b2 rounded overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center h-[100px] w-full bg-b1",children:(0,l.jsx)(p.Z,{show:!0})}),(0,l.jsx)("h2",{className:"my-2 font-semibold text-center uppercase",children:e("Loader")})]})}),(0,l.jsx)("div",{className:"block basis-1/2 md:basis-1/3 text-center cursor-pointer",onClick:()=>s.push("/component/modal"),children:(0,l.jsxs)("div",{className:"m-2 border border-b2 rounded overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center h-[100px] w-full bg-black px-3",children:(0,l.jsxs)("div",{className:"rounded overflow-hidden w-full",children:[(0,l.jsxs)("header",{className:"flex items-center bg-b1 p-2",children:[(0,l.jsx)("h3",{className:"flex-grow uppercase font-semibold",children:"Confirm"}),(0,l.jsx)("a",{href:"#",className:"float-right font-bold",children:"\xd7"})]}),(0,l.jsx)("div",{className:"bg-b2 p-2",children:"Are You Sure?"})]})}),(0,l.jsx)("h2",{className:"my-2 font-semibold text-center uppercase",children:e("Modal")})]})}),(0,l.jsx)("div",{className:"block basis-1/2 md:basis-1/3 text-center cursor-pointer",onClick:()=>s.push("/component/progressbar"),children:(0,l.jsxs)("div",{className:"m-2 border border-b2 rounded overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center h-[100px] w-full bg-b1",children:(0,l.jsx)("div",{className:"relative w-3/4 h-4 bg-gray-300 rounded",children:(0,l.jsx)(b.Z,{value:50,max:100,className:"h-4 bg-blue-500 rounded"})})}),(0,l.jsx)("h2",{className:"my-2 font-semibold text-center uppercase",children:e("Progress Bar")})]})}),(0,l.jsx)("div",{className:"block basis-1/2 md:basis-1/3 text-center cursor-pointer",onClick:()=>s.push("/component/table"),children:(0,l.jsxs)("div",{className:"m-2 border border-b2 rounded overflow-auto",children:[(0,l.jsx)("div",{className:"flex items-center justify-center h-[100px] w-full bg-black px-3",children:(0,l.jsx)("div",{className:"overflow-auto w-full",children:(0,l.jsxs)(h(),{children:[(0,l.jsx)(f.Thead,{className:"bg-b2 text-left text-white !py-2",children:e("ID")}),(0,l.jsx)(f.Thead,{className:"bg-b2 text-left text-white !py-2",children:e("Name")}),(0,l.jsxs)(f.Trow,{children:[(0,l.jsx)(f.Tcol,{className:"bg-b1 text-left !py-2",children:"1"}),(0,l.jsx)(f.Tcol,{className:"bg-b1 text-left !py-2",children:"Jacob"})]})]})})}),(0,l.jsx)("h2",{className:"my-2 font-semibold text-center uppercase",children:e("Table")})]})}),(0,l.jsx)("div",{className:"block basis-1/2 md:basis-1/3 text-center cursor-pointer",onClick:()=>s.push("/component/toast"),children:(0,l.jsxs)("div",{className:"m-2 border border-b2 rounded overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center h-[100px] w-full bg-b1 px-3"}),(0,l.jsx)("h2",{className:"my-2 font-semibold text-center uppercase",children:e("Toast")})]})})]}),(0,l.jsxs)("h2",{className:"px-3 flex items-center uppercase font-bold text-xl mt-4",children:[(0,l.jsx)("i",{className:"fas fa-lock mr-2"}),e("Locked")]}),(0,l.jsx)("p",{className:"px-3 pt-3",children:"The following components have are locked until enough there are enough users and demand for such components."}),(0,l.jsxs)("div",{className:"flex flex-wrap mt-4",children:[(0,l.jsx)("div",{className:"block basis-1/2 md:basis-1/3 text-center cursor-pointer",children:(0,l.jsxs)("div",{className:"m-2 border border-b2 rounded overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center h-[100px] w-full bg-b1 px-3",children:"Unlocks at 2,000 downloads"}),(0,l.jsx)("h2",{className:"my-2 font-semibold text-center uppercase",children:e("Bread Crumb")})]})}),(0,l.jsx)("div",{className:"block basis-1/2 md:basis-1/3 text-center cursor-pointer",children:(0,l.jsxs)("div",{className:"m-2 border border-b2 rounded overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center h-[100px] w-full bg-b1 px-3",children:"Unlocks at 4,000 downloads"}),(0,l.jsx)("h2",{className:"my-2 font-semibold text-center uppercase",children:e("Pagination")})]})}),(0,l.jsx)("div",{className:"block basis-1/2 md:basis-1/3 text-center cursor-pointer",children:(0,l.jsxs)("div",{className:"m-2 border border-b2 rounded overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center h-[100px] w-full bg-b1 px-3",children:"Unlocks at 8,000 downloads"}),(0,l.jsx)("h2",{className:"my-2 font-semibold text-center uppercase",children:e("Tabs")})]})}),(0,l.jsx)("div",{className:"block basis-1/2 md:basis-1/3 text-center cursor-pointer",children:(0,l.jsxs)("div",{className:"m-2 border border-b2 rounded overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center h-[100px] w-full bg-b1 px-3",children:"Unlocks at 10,000 downloads"}),(0,l.jsx)("h2",{className:"my-2 font-semibold text-center uppercase",children:e("Accordion")})]})}),(0,l.jsx)("div",{className:"block basis-1/2 md:basis-1/3 text-center cursor-pointer",children:(0,l.jsxs)("div",{className:"m-2 border border-b2 rounded overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center h-[100px] w-full bg-b1 px-3",children:"Unlocks at 12,000 downloads"}),(0,l.jsx)("h2",{className:"my-2 font-semibold text-center uppercase",children:e("Tooltip")})]})})]})]})]})})}},86677:function(e,s,r){e.exports=r(51648)}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=90890)}),_N_E=e.O()}]);