(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6254],{54974:function(e,t,s){"use strict";var r=this&&this.__rest||function(e,t){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(s[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(s[r[l]]=e[r[l]]);return s},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Tgroup=t.Trow=t.Tcol=t.Tfoot=t.Thead=t.Table=void 0;let a=s(24246),n=l(s(27378)),i=({width:e})=>(0,a.jsx)("hr",{style:{borderWidth:0,margin:0,width:e}});class o extends n.default.Component{table(){return"TableCol"}render(){let e=this.props,{stickyBottom:t,stickyLeft:s,stickyRight:l,stickyTop:n,noWrap:o,rowSpan:c,colSpan:p,wrap1:u,wrap2:d,wrap3:f,wrap4:h,wrap5:x,className:b,children:m}=e,j=r(e,["stickyBottom","stickyLeft","stickyRight","stickyTop","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),y=["frui-tbl-col"];(t||s||l||n)&&(y.push("frui-tbl-sticky"),t&&y.push("frui-tbl-sticky-b","frui-tbl-z1"),s&&y.push("frui-tbl-sticky-l","frui-tbl-z2"),l&&y.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&y.push("frui-tbl-sticky-t","frui-tbl-z1")),o&&y.push("frui-tbl-nowrap");let w={};c&&(w.rowSpan=c||0),p&&(w.colSpan=p||0);let g=null;return u?g=(0,a.jsx)(i,{width:"100px"}):d?g=(0,a.jsx)(i,{width:"200px"}):f?g=(0,a.jsx)(i,{width:"300px"}):h?g=(0,a.jsx)(i,{width:"400px"}):x&&(g=(0,a.jsx)(i,{width:"500px"})),b&&y.push(b),(0,a.jsxs)("td",Object.assign({valign:"top"},j,{className:y.join(" ")},w,{children:[m,g]}))}}t.Tcol=o;class c extends n.default.Component{table(){return"TableFoot"}render(){let e=this.props,{stickyBottom:t,stickyLeft:s,stickyRight:l,noWrap:n,rowSpan:i,colSpan:o,className:c,children:p}=e,u=r(e,["stickyBottom","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","className","children"]),d=["frui-tbl-foot"];(t||s||l)&&(d.push("frui-tbl-sticky"),t&&d.push("frui-tbl-sticky-b","frui-tbl-z1"),s&&d.push("frui-tbl-sticky-l","frui-tbl-z2"),l&&d.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&d.push("frui-tbl-nowrap"));let f={};return i&&(f.rowSpan=i||0),o&&(f.colSpan=o||0),c&&d.push(c),(0,a.jsx)("th",Object.assign({},u,{className:d.join(" ")},f,{children:p}))}}t.Tfoot=c;class p extends n.default.Component{table(){return"TableGroup"}render(){return this.props.children}}t.Tgroup=p;class u extends n.default.Component{table(){return"TableRow"}render(){let e=this.props,{noWrap:t,rowSpan:s,colSpan:l,className:n,children:i}=e,o=r(e,["noWrap","rowSpan","colSpan","className","children"]),c=["frui-tbl-row"];t&&c.push("frui-tbl-nowrap");let p={};return s&&(p.rowSpan=s||0),l&&(p.colSpan=l||0),n&&c.push(n),(0,a.jsx)("tr",Object.assign({},o,{className:c.join(" ")},p,{children:i}))}}t.Trow=u;class d extends n.default.Component{table(){return"TableHead"}render(){let e=this.props,{stickyTop:t,stickyLeft:s,stickyRight:l,noWrap:n,rowSpan:o,colSpan:c,wrap1:p,wrap2:u,wrap3:d,wrap4:f,wrap5:h,className:x,children:b}=e,m=r(e,["stickyTop","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),j=["frui-tbl-head"];(s||l||t)&&(j.push("tbl-sticky"),t&&(j.push("tbl-sticky-t"),s&&l?j.push("tbl-z4"):s||l?j.push("tbl-z3"):j.push("tbl-z1")),s&&j.push("tbl-sticky-l","tbl-z1"),l&&j.push("tbl-sticky-r","tbl-z1")),n&&j.push("frui-tbl-nowrap");let y={};o&&(y.rowSpan=o||0),c&&(y.colSpan=c||0);let w=null;return p?w=(0,a.jsx)(i,{width:"100px"}):u?w=(0,a.jsx)(i,{width:"200px"}):d?w=(0,a.jsx)(i,{width:"300px"}):f?w=(0,a.jsx)(i,{width:"400px"}):h&&(w=(0,a.jsx)(i,{width:"500px"})),x&&j.push(x),(0,a.jsxs)("th",Object.assign({},m,{className:j.join(" ")},y,{children:[b,w]}))}}t.Thead=d;let f=function(e){var t,s;let r=[];if(Array.isArray(e))for(let l of e)l&&(Array.isArray(l)?r.push.apply(r,f(l)):"object"==typeof l&&l.props&&"thead"in l.props?r.push(l):"function"==typeof(null===(s=null===(t=null==l?void 0:l.type)||void 0===t?void 0:t.prototype)||void 0===s?void 0:s.table)&&"TableHead"===l.type.prototype.table()&&r.push(l));return r},h=function(e){var t,s;let r=[];if(Array.isArray(e))for(let l of e)Array.isArray(l)?r.push.apply(r,h(l)):"object"==typeof l&&l.props&&"tfoot"in l.props?r.push(l):"function"==typeof(null===(s=null===(t=null==l?void 0:l.type)||void 0===t?void 0:t.prototype)||void 0===s?void 0:s.table)&&"TableFoot"===l.type.prototype.table()&&r.push(l);return r},x=function(e){var t,s,r,l;let a=[];if(Array.isArray(e))for(let n of e)if(Array.isArray(n))a.push.apply(a,x(n));else if("object"==typeof n&&n.props&&"tbody"in n.props)a.push(n);else if("function"==typeof(null===(s=null===(t=null==n?void 0:n.type)||void 0===t?void 0:t.prototype)||void 0===s?void 0:s.table)&&"TableGroup"===n.type.prototype.table()){let e=n.props.children||[];Array.isArray(e)&&e.length>0&&a.push(...e)}else"function"==typeof(null===(l=null===(r=null==n?void 0:n.type)||void 0===r?void 0:r.prototype)||void 0===l?void 0:l.table)&&"TableRow"===n.type.prototype.table()&&a.push(n);return a};function b(e){let t=e.children||[];Array.isArray(t)||(t=[t]);let s=f(t),r=x(t),l=h(t),n=["frui-tbl-overflow"];return e.className&&n.push(e.className),(0,a.jsx)("div",Object.assign({className:n.join(" "),style:e.style},{children:(0,a.jsxs)("table",Object.assign({className:"frui-tbl"},{children:[s&&(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:s})}),r&&(0,a.jsx)("tbody",{children:r}),l&&(0,a.jsx)("tfoot",{children:(0,a.jsx)("tr",{children:l})})]}))}))}t.default=b,t.Table=b},96508:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __webpack_unused_export__;__webpack_unused_export__={value:!0};let jsx_runtime_1=__webpack_require__(24246);function Formula(props){let{value,data={},formula}=props,calculations=formula.replace(/\{this\}/,String(Number(value)||0));for(let key in data)calculations=calculations.replace(RegExp(`\\{${key}\\}`),String(Number(data[key])||0));calculations=calculations.replace(/\{[^\}]*\}/,"0");let solution=0;try{solution=eval(`(${calculations})`)}catch(e){}return(0,jsx_runtime_1.jsx)(jsx_runtime_1.Fragment,{children:solution})}exports.Z=Formula},87189:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/format/formula",function(){return s(86504)}])},36493:function(e,t,s){"use strict";s.d(t,{C:function(){return c},Z:function(){return o}});var r=s(24246),l=s(22879),a=s(74631),n=s(48717),i=s(14707);function o(e){let{value:t,quote:s,l,r:a,children:n}=e,i=t||n;return(0,r.jsxs)(r.Fragment,{children:[l?(0,r.jsx)("span",{children:"\xa0"}):"",(0,r.jsxs)("code",{className:"text-sm text-t2 bg-b1 font-semibold inline-block p-0.5",children:[s?"`":"",i,s?"`":""]}),a?(0,r.jsx)("span",{children:"\xa0"}):""]})}function c(e){let{className:t,copy:s=!0,children:o,language:c}=e,{_:p}=(0,l.useLanguage)(),u=()=>{navigator.clipboard.writeText(o.toString()),(0,i.ZP)("success",p("Copied to clipboard"))};return(0,r.jsxs)("div",{className:"flex text-sm bg-black ".concat(t||""),children:[(0,r.jsx)(a.Z,{className:"flex-grow !p-4 !bg-transparent",language:c,style:n._4,children:o}),s&&(0,r.jsxs)("div",{className:"text-sm p-4 text-gray-400 cursor-pointer whitespace-nowrap",onClick:u,children:[(0,r.jsx)("i",{className:"fas fa-copy"})," ",p("Copy")]})]})}},18604:function(e,t,s){"use strict";var r=s(24246);s(27378);var l=s(79894),a=s.n(l);let n=e=>{let{href:t,label:s,icon:l,last:n}=e,i=t?(0,r.jsx)(a(),{href:t,className:"inline-flex items-center text-t2",children:s}):(0,r.jsx)("span",{className:"inline-flex items-center font-semibold text-t1",children:s});return(0,r.jsxs)(r.Fragment,{children:[l&&(0,r.jsx)("i",{className:"fas fa-fw fa-".concat(l," inline-block mr-1 text-t1")}),i,!n&&(0,r.jsx)("i",{className:"fas fa-fw fa-chevron-right mx-1 text-t1"})]})},i=e=>{var t;let{trail:s}=e;if(0===s.length)return null;let l=s[s.length-1],n=l.href||(null===(t=s[s.length-2])||void 0===t?void 0:t.href);return n?(0,r.jsxs)(a(),{className:"flex md:hidden items-center cursor-pointer whitespace-nowrap overflow-x-hidden",href:n,children:[(0,r.jsx)("i",{className:"mr-1 fas fa-fw fa-chevron-left text-xl text-t2"}),!!l.icon&&(0,r.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(l.icon," text-sm")}),(0,r.jsx)("span",{className:"font-bold",children:l.label})]}):(0,r.jsxs)("div",{className:"flex md:hidden items-center whitespace-nowrap overflow-x-hidden",children:[!!l.icon&&(0,r.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(l.icon," text-sm")}),(0,r.jsx)("span",{className:"font-bold",children:l.label})]})},o=e=>{let{crumbs:t,className:s}=e,l=[...t].filter(e=>!!e.label),a=["hidden md:flex items-center whitespace-nowrap overflow-x-auto"];return s&&a.push(s),(0,r.jsxs)("nav",{children:[(0,r.jsx)("div",{className:a.join(" "),children:l.map((e,t)=>(0,r.jsx)(n,{href:e.href,label:e.label,icon:e.icon,last:t===l.length-1},t))}),(0,r.jsx)(i,{trail:l})]})};t.Z=o},63527:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var r=s(24246),l=s(22879),a=s(79531),n=s(54974),i=s.n(n);function o(e){let{props:t}=e,{_:s}=(0,l.useLanguage)(),o=(0,a.Z)("bg-b2","bg-b1");return(0,r.jsxs)(i(),{children:[(0,r.jsx)(n.Thead,{className:"text-left bg-b3",children:s("Name")}),(0,r.jsx)(n.Thead,{className:"text-left bg-b3",children:s("Type")}),(0,r.jsx)(n.Thead,{className:"text-center bg-b3",children:s("Required")}),(0,r.jsx)(n.Thead,{className:"text-left bg-b3",children:s("Notes")}),t.map((e,t)=>(0,r.jsxs)(n.Trow,{children:[(0,r.jsx)(n.Tcol,{className:"".concat(o(t)),children:e[0]}),(0,r.jsx)(n.Tcol,{className:"".concat(o(t)),children:e[1]}),(0,r.jsx)(n.Tcol,{className:"".concat(o(t)," text-center"),children:e[2]}),(0,r.jsx)(n.Tcol,{className:"".concat(o(t)),children:e[3]})]},t))]})}},79531:function(e,t,s){"use strict";function r(e,t){let s=e;return r=>"number"==typeof r?r%2==0?e:t:(r&&(s=s===e?t:e),s)}s.d(t,{Z:function(){return r}})},86504:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var r=s(24246),l=s(22879),a=s(79894),n=s.n(a),i=s(96508),o=s(1343),c=s(18604),p=s(63527),u=s(36493);function d(){let{_:e}=(0,l.useLanguage)(),t=[{icon:"text-height",label:"Formats",href:"/format"},{label:"Formula"}],s=[[e("data"),e("string"),e("No"),e("Variables of the formula")],[e("formula"),e("string"),e("Yes"),e("Formula template")],[e("value"),e("string"),e("Yes"),e("Default value")]];return(0,r.jsx)(o.sF,{children:(0,r.jsxs)("main",{className:"flex flex-col h-full w-full",children:[(0,r.jsx)("div",{className:"p-3 bg-b2",children:(0,r.jsx)(c.Z,{crumbs:t})}),(0,r.jsxs)("div",{className:"flex-grow relative h-full",children:[(0,r.jsxs)("aside",{className:"hidden lg:block absolute top-0 bottom-0 right-0 z-1 w-56 border-l border-b1 text-sm",children:[(0,r.jsx)("h4",{className:"p-3 border-b border-b1 bg-b1 uppercase font-semibold",children:(0,r.jsx)(n(),{href:"#top",children:e("Formula")})}),(0,r.jsxs)("ul",{className:"list-disc py-3 pr-3 pl-6",children:[(0,r.jsx)("li",{className:"pl-3 pb-1",children:(0,r.jsx)(n(),{href:"#props",children:e("Props")})}),(0,r.jsx)("li",{className:"pl-3 pb-1",children:(0,r.jsx)(n(),{href:"#basic",children:e("Basics")})})]})]}),(0,r.jsxs)("div",{className:"absolute top-0 bottom-0 left-0 right-0 lg:right-56 px-3 pt-3 pb-5 h-full overflow-auto",children:[(0,r.jsx)("h1",{id:"top",className:"flex items-center uppercase font-bold text-xl",children:e("Formula")}),(0,r.jsx)(u.C,{language:"typescript",className:"mt-2",children:"import Formula from 'frui/formats/Formula';"}),(0,r.jsx)("h2",{id:"props",className:"uppercase font-bold text-lg mt-8",children:e("Props")}),(0,r.jsx)(p.Z,{props:s}),(0,r.jsx)("h2",{id:"basic",className:"uppercase font-bold text-lg mt-8",children:e("Basics")}),(0,r.jsxs)("div",{className:"curved overflow-hidden",children:[(0,r.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,r.jsx)(i.Z,{value:"29",formula:"{x} + {this} + {y}",data:{x:4,y:5}})}),(0,r.jsx)(u.C,{language:"typescript",children:'<Formula value="29" formula="{x} + {this} + {y}" data={{ x: 4, y: 5 }} />'})]}),(0,r.jsxs)("div",{className:"flex items-center border-t border-b2 mt-8 pt-4",children:[(0,r.jsxs)(n(),{className:"text-t2",href:"/format",children:[(0,r.jsx)("i",{className:"fas fa-arrow-left mr-2"}),e("Formats")]}),(0,r.jsx)("div",{className:"flex-grow"}),(0,r.jsxs)(n(),{className:"text-t2",href:"/format/country",children:[e("Country"),(0,r.jsx)("i",{className:"fas fa-arrow-right ml-2"})]})]})]})]})]})})}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9461,2888,9774,179],function(){return t(87189)}),_N_E=e.O()}]);