(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7267],{54974:function(e,t,s){"use strict";var l=this&&this.__rest||function(e,t){var s={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(s[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)0>t.indexOf(l[r])&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(s[l[r]]=e[l[r]]);return s},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Tgroup=t.Trow=t.Tcol=t.Tfoot=t.Thead=t.Table=void 0;let a=s(24246),n=r(s(27378)),i=({width:e})=>(0,a.jsx)("hr",{style:{borderWidth:0,margin:0,width:e}});class o extends n.default.Component{table(){return"TableCol"}render(){let e=this.props,{stickyBottom:t,stickyLeft:s,stickyRight:r,stickyTop:n,noWrap:o,rowSpan:c,colSpan:p,wrap1:d,wrap2:u,wrap3:h,wrap4:f,wrap5:b,className:x,children:m}=e,j=l(e,["stickyBottom","stickyLeft","stickyRight","stickyTop","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),y=["frui-tbl-col"];(t||s||r||n)&&(y.push("frui-tbl-sticky"),t&&y.push("frui-tbl-sticky-b","frui-tbl-z1"),s&&y.push("frui-tbl-sticky-l","frui-tbl-z2"),r&&y.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&y.push("frui-tbl-sticky-t","frui-tbl-z1")),o&&y.push("frui-tbl-nowrap");let g={};c&&(g.rowSpan=c||0),p&&(g.colSpan=p||0);let w=null;return d?w=(0,a.jsx)(i,{width:"100px"}):u?w=(0,a.jsx)(i,{width:"200px"}):h?w=(0,a.jsx)(i,{width:"300px"}):f?w=(0,a.jsx)(i,{width:"400px"}):b&&(w=(0,a.jsx)(i,{width:"500px"})),x&&y.push(x),(0,a.jsxs)("td",Object.assign({valign:"top"},j,{className:y.join(" ")},g,{children:[m,w]}))}}t.Tcol=o;class c extends n.default.Component{table(){return"TableFoot"}render(){let e=this.props,{stickyBottom:t,stickyLeft:s,stickyRight:r,noWrap:n,rowSpan:i,colSpan:o,className:c,children:p}=e,d=l(e,["stickyBottom","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","className","children"]),u=["frui-tbl-foot"];(t||s||r)&&(u.push("frui-tbl-sticky"),t&&u.push("frui-tbl-sticky-b","frui-tbl-z1"),s&&u.push("frui-tbl-sticky-l","frui-tbl-z2"),r&&u.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&u.push("frui-tbl-nowrap"));let h={};return i&&(h.rowSpan=i||0),o&&(h.colSpan=o||0),c&&u.push(c),(0,a.jsx)("th",Object.assign({},d,{className:u.join(" ")},h,{children:p}))}}t.Tfoot=c;class p extends n.default.Component{table(){return"TableGroup"}render(){return this.props.children}}t.Tgroup=p;class d extends n.default.Component{table(){return"TableRow"}render(){let e=this.props,{noWrap:t,rowSpan:s,colSpan:r,className:n,children:i}=e,o=l(e,["noWrap","rowSpan","colSpan","className","children"]),c=["frui-tbl-row"];t&&c.push("frui-tbl-nowrap");let p={};return s&&(p.rowSpan=s||0),r&&(p.colSpan=r||0),n&&c.push(n),(0,a.jsx)("tr",Object.assign({},o,{className:c.join(" ")},p,{children:i}))}}t.Trow=d;class u extends n.default.Component{table(){return"TableHead"}render(){let e=this.props,{stickyTop:t,stickyLeft:s,stickyRight:r,noWrap:n,rowSpan:o,colSpan:c,wrap1:p,wrap2:d,wrap3:u,wrap4:h,wrap5:f,className:b,children:x}=e,m=l(e,["stickyTop","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),j=["frui-tbl-head"];(s||r||t)&&(j.push("tbl-sticky"),t&&(j.push("tbl-sticky-t"),s&&r?j.push("tbl-z4"):s||r?j.push("tbl-z3"):j.push("tbl-z1")),s&&j.push("tbl-sticky-l","tbl-z1"),r&&j.push("tbl-sticky-r","tbl-z1")),n&&j.push("frui-tbl-nowrap");let y={};o&&(y.rowSpan=o||0),c&&(y.colSpan=c||0);let g=null;return p?g=(0,a.jsx)(i,{width:"100px"}):d?g=(0,a.jsx)(i,{width:"200px"}):u?g=(0,a.jsx)(i,{width:"300px"}):h?g=(0,a.jsx)(i,{width:"400px"}):f&&(g=(0,a.jsx)(i,{width:"500px"})),b&&j.push(b),(0,a.jsxs)("th",Object.assign({},m,{className:j.join(" ")},y,{children:[x,g]}))}}t.Thead=u;let h=function(e){var t,s;let l=[];if(Array.isArray(e))for(let r of e)r&&(Array.isArray(r)?l.push.apply(l,h(r)):"object"==typeof r&&r.props&&"thead"in r.props?l.push(r):"function"==typeof(null===(s=null===(t=null==r?void 0:r.type)||void 0===t?void 0:t.prototype)||void 0===s?void 0:s.table)&&"TableHead"===r.type.prototype.table()&&l.push(r));return l},f=function(e){var t,s;let l=[];if(Array.isArray(e))for(let r of e)Array.isArray(r)?l.push.apply(l,f(r)):"object"==typeof r&&r.props&&"tfoot"in r.props?l.push(r):"function"==typeof(null===(s=null===(t=null==r?void 0:r.type)||void 0===t?void 0:t.prototype)||void 0===s?void 0:s.table)&&"TableFoot"===r.type.prototype.table()&&l.push(r);return l},b=function(e){var t,s,l,r;let a=[];if(Array.isArray(e))for(let n of e)if(Array.isArray(n))a.push.apply(a,b(n));else if("object"==typeof n&&n.props&&"tbody"in n.props)a.push(n);else if("function"==typeof(null===(s=null===(t=null==n?void 0:n.type)||void 0===t?void 0:t.prototype)||void 0===s?void 0:s.table)&&"TableGroup"===n.type.prototype.table()){let e=n.props.children||[];Array.isArray(e)&&e.length>0&&a.push(...e)}else"function"==typeof(null===(r=null===(l=null==n?void 0:n.type)||void 0===l?void 0:l.prototype)||void 0===r?void 0:r.table)&&"TableRow"===n.type.prototype.table()&&a.push(n);return a};function x(e){let t=e.children||[];Array.isArray(t)||(t=[t]);let s=h(t),l=b(t),r=f(t),n=["frui-tbl-overflow"];return e.className&&n.push(e.className),(0,a.jsx)("div",Object.assign({className:n.join(" "),style:e.style},{children:(0,a.jsxs)("table",Object.assign({className:"frui-tbl"},{children:[s&&(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:s})}),l&&(0,a.jsx)("tbody",{children:l}),r&&(0,a.jsx)("tfoot",{children:(0,a.jsx)("tr",{children:r})})]}))}))}t.default=x,t.Table=x},91428:function(e,t,s){"use strict";let l=s(24246),r=s(54974);t.Z=function(e){let{style:t={},className:s,value:a,stripes:n}=e;if(!a||!a.length)return null;let i={head:Object.assign(Object.assign({},t),{textAlign:"left",backgroundColor:n?n[0]:void 0}),rows:[Object.assign(Object.assign({},t),{backgroundColor:n?n[1]:void 0}),Object.assign(Object.assign({},t),{backgroundColor:n?n[2]:void 0})]};return(0,l.jsxs)(r.Table,{children:[Object.keys(a[0]).map(e=>(0,l.jsx)(r.Thead,Object.assign({className:s,style:i.head},{children:e}),e)),a.map((e,t)=>(0,l.jsx)(r.Trow,{children:Object.values(e).map((e,a)=>(0,l.jsx)(r.Tcol,Object.assign({className:s,style:i.rows[t%2]},{children:e}),`${t}-${a}`))},t))]})}},58926:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/format/table",function(){return s(82075)}])},36493:function(e,t,s){"use strict";s.d(t,{C:function(){return c},Z:function(){return o}});var l=s(24246),r=s(22879),a=s(74631),n=s(48717),i=s(14707);function o(e){let{value:t,quote:s,l:r,r:a,children:n}=e;return(0,l.jsxs)(l.Fragment,{children:[r?(0,l.jsx)("span",{children:"\xa0"}):"",(0,l.jsxs)("code",{className:"text-sm text-t2 bg-b1 font-semibold inline-block p-0.5",children:[s?"`":"",t||n,s?"`":""]}),a?(0,l.jsx)("span",{children:"\xa0"}):""]})}function c(e){let{className:t,copy:s=!0,children:o,language:c}=e,{_:p}=(0,r.useLanguage)();return(0,l.jsxs)("div",{className:"flex text-sm bg-black ".concat(t||""),children:[(0,l.jsx)(a.Z,{className:"flex-grow !p-4 !bg-transparent",language:c,style:n._4,children:o}),s&&(0,l.jsxs)("div",{className:"text-sm p-4 text-gray-400 cursor-pointer whitespace-nowrap",onClick:()=>{navigator.clipboard.writeText(o.toString()),(0,i.ZP)("success",p("Copied to clipboard"))},children:[(0,l.jsx)("i",{className:"fas fa-copy"})," ",p("Copy")]})]})}},18604:function(e,t,s){"use strict";var l=s(24246);s(27378);var r=s(79894),a=s.n(r);let n=e=>{let{href:t,label:s,icon:r,last:n}=e,i=t?(0,l.jsx)(a(),{href:t,className:"inline-flex items-center text-t2",children:s}):(0,l.jsx)("span",{className:"inline-flex items-center font-semibold text-t1",children:s});return(0,l.jsxs)(l.Fragment,{children:[r&&(0,l.jsx)("i",{className:"fas fa-fw fa-".concat(r," inline-block mr-1 text-t1")}),i,!n&&(0,l.jsx)("i",{className:"fas fa-fw fa-chevron-right mx-1 text-t1"})]})},i=e=>{var t;let{trail:s}=e;if(0===s.length)return null;let r=s[s.length-1],n=r.href||(null===(t=s[s.length-2])||void 0===t?void 0:t.href);return n?(0,l.jsxs)(a(),{className:"flex md:hidden items-center cursor-pointer whitespace-nowrap overflow-x-hidden",href:n,children:[(0,l.jsx)("i",{className:"mr-1 fas fa-fw fa-chevron-left text-xl text-t2"}),!!r.icon&&(0,l.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(r.icon," text-sm")}),(0,l.jsx)("span",{className:"font-bold",children:r.label})]}):(0,l.jsxs)("div",{className:"flex md:hidden items-center whitespace-nowrap overflow-x-hidden",children:[!!r.icon&&(0,l.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(r.icon," text-sm")}),(0,l.jsx)("span",{className:"font-bold",children:r.label})]})};t.Z=e=>{let{crumbs:t,className:s}=e,r=[...t].filter(e=>!!e.label),a=["hidden md:flex items-center whitespace-nowrap overflow-x-auto"];return s&&a.push(s),(0,l.jsxs)("nav",{children:[(0,l.jsx)("div",{className:a.join(" "),children:r.map((e,t)=>(0,l.jsx)(n,{href:e.href,label:e.label,icon:e.icon,last:t===r.length-1},t))}),(0,l.jsx)(i,{trail:r})]})}},63527:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var l=s(24246),r=s(22879),a=s(79531),n=s(54974),i=s.n(n);function o(e){let{props:t}=e,{_:s}=(0,r.useLanguage)(),o=(0,a.Z)("bg-b2","bg-b1");return(0,l.jsxs)(i(),{children:[(0,l.jsx)(n.Thead,{className:"text-left bg-b3",children:s("Name")}),(0,l.jsx)(n.Thead,{className:"text-left bg-b3",children:s("Type")}),(0,l.jsx)(n.Thead,{className:"text-center bg-b3",children:s("Required")}),(0,l.jsx)(n.Thead,{className:"text-left bg-b3",children:s("Notes")}),t.map((e,t)=>(0,l.jsxs)(n.Trow,{children:[(0,l.jsx)(n.Tcol,{className:"".concat(o(t)),children:e[0]}),(0,l.jsx)(n.Tcol,{className:"".concat(o(t)),children:e[1]}),(0,l.jsx)(n.Tcol,{className:"".concat(o(t)," text-center"),children:e[2]}),(0,l.jsx)(n.Tcol,{className:"".concat(o(t)),children:e[3]})]},t))]})}},79531:function(e,t,s){"use strict";function l(e,t){let s=e;return l=>"number"==typeof l?l%2==0?e:t:(l&&(s=s===e?t:e),s)}s.d(t,{Z:function(){return l}})},82075:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var l=s(24246),r=s(22879),a=s(79894),n=s.n(a),i=s(91428),o=s(1343),c=s(18604),p=s(63527),d=s(36493);let u="\n<Table \n  value={[\n    { id: 1, name: 'John Doe', age: 30, created: '2021-01-01' },\n    { id: 2, name: 'Jane Doe', age: 25, created: '2021-01-02' }\n  ]} \n  stripes={['#999999', '#EFEFEF', '#CCCCCC']} \n/>".trim();function h(){let{_:e}=(0,r.useLanguage)(),t=[[e("className"),e("string"),e("No"),e("Standard HTML class names applied to all cells")],[e("stripe"),e("[string, string, string]"),e("No"),e("Background color settings for head and rows")],[e("style"),e("CSS Object"),e("No"),e("Standard CSS object applied to all cells")],[e("value"),e("string"),e("Yes"),e("Default value")]];return(0,l.jsx)(o.sF,{children:(0,l.jsxs)("main",{className:"flex flex-col h-full w-full",children:[(0,l.jsx)("div",{className:"p-3 bg-b2",children:(0,l.jsx)(c.Z,{crumbs:[{icon:"text-height",label:"Formats",href:"/format"},{label:"Table"}]})}),(0,l.jsxs)("div",{className:"flex-grow relative h-full",children:[(0,l.jsxs)("aside",{className:"hidden lg:block absolute top-0 bottom-0 right-0 z-1 w-56 border-l border-b1 text-sm",children:[(0,l.jsx)("h4",{className:"p-3 border-b border-b1 bg-b1 uppercase font-semibold",children:(0,l.jsx)(n(),{href:"#top",children:e("Table")})}),(0,l.jsxs)("ul",{className:"list-disc py-3 pr-3 pl-6",children:[(0,l.jsx)("li",{className:"pl-3 pb-1",children:(0,l.jsx)(n(),{href:"#props",children:e("Props")})}),(0,l.jsx)("li",{className:"pl-3 pb-1",children:(0,l.jsx)(n(),{href:"#basic",children:e("Basics")})})]})]}),(0,l.jsxs)("div",{className:"absolute top-0 bottom-0 left-0 right-0 lg:right-56 px-3 pt-3 pb-5 h-full overflow-auto",children:[(0,l.jsx)("h1",{id:"top",className:"flex items-center uppercase font-bold text-xl",children:e("Table")}),(0,l.jsx)(d.C,{language:"typescript",className:"mt-2",children:"import Table from 'frui/formats/Table';"}),(0,l.jsx)("h2",{id:"props",className:"uppercase font-bold text-lg mt-8",children:e("Props")}),(0,l.jsx)(p.Z,{props:t}),(0,l.jsx)("h2",{id:"basic",className:"uppercase font-bold text-lg mt-8",children:e("Basics")}),(0,l.jsx)("p",{children:(0,l.jsx)(r.Translate,{children:"The header values are based on the keys of the first row."})}),(0,l.jsxs)("div",{className:"curved overflow-hidden",children:[(0,l.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,l.jsx)("div",{className:"text-left text-black w-full",children:(0,l.jsx)(i.Z,{value:[{id:1,name:"John Doe",age:30,created:"2021-01-01"},{id:2,name:"Jane Doe",age:25,created:"2021-01-02"}],stripes:["#999999","#EFEFEF","#CCCCCC"]})})}),(0,l.jsx)(d.C,{language:"typescript",children:u})]}),(0,l.jsxs)("div",{className:"flex items-center border-t border-b2 mt-8 pt-4",children:[(0,l.jsxs)(n(),{className:"text-t2",href:"/format/separated",children:[(0,l.jsx)("i",{className:"fas fa-arrow-left mr-2"}),e("Separated")]}),(0,l.jsx)("div",{className:"flex-grow"}),(0,l.jsxs)(n(),{className:"text-t2",href:"/format/taglist",children:[e("Taglist"),(0,l.jsx)("i",{className:"fas fa-arrow-right ml-2"})]})]})]})]})]})})}}},function(e){e.O(0,[9461,2888,9774,179],function(){return e(e.s=58926)}),_N_E=e.O()}]);