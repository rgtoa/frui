(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9905],{54974:function(e,s,l){"use strict";var t=this&&this.__rest||function(e,s){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>s.indexOf(t)&&(l[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)0>s.indexOf(t[r])&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(l[t[r]]=e[t[r]]);return l},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.Tgroup=s.Trow=s.Tcol=s.Tfoot=s.Thead=s.Table=void 0;let a=l(24246),n=r(l(27378)),o=({width:e})=>(0,a.jsx)("hr",{style:{borderWidth:0,margin:0,width:e}});class i extends n.default.Component{table(){return"TableCol"}render(){let e=this.props,{stickyBottom:s,stickyLeft:l,stickyRight:r,stickyTop:n,noWrap:i,rowSpan:c,colSpan:d,wrap1:p,wrap2:u,wrap3:h,wrap4:f,wrap5:x,className:b,children:j}=e,m=t(e,["stickyBottom","stickyLeft","stickyRight","stickyTop","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),g=["frui-tbl-col"];(s||l||r||n)&&(g.push("frui-tbl-sticky"),s&&g.push("frui-tbl-sticky-b","frui-tbl-z1"),l&&g.push("frui-tbl-sticky-l","frui-tbl-z2"),r&&g.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&g.push("frui-tbl-sticky-t","frui-tbl-z1")),i&&g.push("frui-tbl-nowrap");let y={};c&&(y.rowSpan=c||0),d&&(y.colSpan=d||0);let v=null;return p?v=(0,a.jsx)(o,{width:"100px"}):u?v=(0,a.jsx)(o,{width:"200px"}):h?v=(0,a.jsx)(o,{width:"300px"}):f?v=(0,a.jsx)(o,{width:"400px"}):x&&(v=(0,a.jsx)(o,{width:"500px"})),b&&g.push(b),(0,a.jsxs)("td",Object.assign({valign:"top"},m,{className:g.join(" ")},y,{children:[j,v]}))}}s.Tcol=i;class c extends n.default.Component{table(){return"TableFoot"}render(){let e=this.props,{stickyBottom:s,stickyLeft:l,stickyRight:r,noWrap:n,rowSpan:o,colSpan:i,className:c,children:d}=e,p=t(e,["stickyBottom","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","className","children"]),u=["frui-tbl-foot"];(s||l||r)&&(u.push("frui-tbl-sticky"),s&&u.push("frui-tbl-sticky-b","frui-tbl-z1"),l&&u.push("frui-tbl-sticky-l","frui-tbl-z2"),r&&u.push("frui-tbl-sticky-r","frui-tbl-z2"),n&&u.push("frui-tbl-nowrap"));let h={};return o&&(h.rowSpan=o||0),i&&(h.colSpan=i||0),c&&u.push(c),(0,a.jsx)("th",Object.assign({},p,{className:u.join(" ")},h,{children:d}))}}s.Tfoot=c;class d extends n.default.Component{table(){return"TableGroup"}render(){return this.props.children}}s.Tgroup=d;class p extends n.default.Component{table(){return"TableRow"}render(){let e=this.props,{noWrap:s,rowSpan:l,colSpan:r,className:n,children:o}=e,i=t(e,["noWrap","rowSpan","colSpan","className","children"]),c=["frui-tbl-row"];s&&c.push("frui-tbl-nowrap");let d={};return l&&(d.rowSpan=l||0),r&&(d.colSpan=r||0),n&&c.push(n),(0,a.jsx)("tr",Object.assign({},i,{className:c.join(" ")},d,{children:o}))}}s.Trow=p;class u extends n.default.Component{table(){return"TableHead"}render(){let e=this.props,{stickyTop:s,stickyLeft:l,stickyRight:r,noWrap:n,rowSpan:i,colSpan:c,wrap1:d,wrap2:p,wrap3:u,wrap4:h,wrap5:f,className:x,children:b}=e,j=t(e,["stickyTop","stickyLeft","stickyRight","noWrap","rowSpan","colSpan","wrap1","wrap2","wrap3","wrap4","wrap5","className","children"]),m=["frui-tbl-head"];(l||r||s)&&(m.push("tbl-sticky"),s&&(m.push("tbl-sticky-t"),l&&r?m.push("tbl-z4"):l||r?m.push("tbl-z3"):m.push("tbl-z1")),l&&m.push("tbl-sticky-l","tbl-z1"),r&&m.push("tbl-sticky-r","tbl-z1")),n&&m.push("frui-tbl-nowrap");let g={};i&&(g.rowSpan=i||0),c&&(g.colSpan=c||0);let y=null;return d?y=(0,a.jsx)(o,{width:"100px"}):p?y=(0,a.jsx)(o,{width:"200px"}):u?y=(0,a.jsx)(o,{width:"300px"}):h?y=(0,a.jsx)(o,{width:"400px"}):f&&(y=(0,a.jsx)(o,{width:"500px"})),x&&m.push(x),(0,a.jsxs)("th",Object.assign({},j,{className:m.join(" ")},g,{children:[b,y]}))}}s.Thead=u;let h=function(e){var s,l;let t=[];if(Array.isArray(e))for(let r of e)r&&(Array.isArray(r)?t.push.apply(t,h(r)):"object"==typeof r&&r.props&&"thead"in r.props?t.push(r):"function"==typeof(null===(l=null===(s=null==r?void 0:r.type)||void 0===s?void 0:s.prototype)||void 0===l?void 0:l.table)&&"TableHead"===r.type.prototype.table()&&t.push(r));return t},f=function(e){var s,l;let t=[];if(Array.isArray(e))for(let r of e)Array.isArray(r)?t.push.apply(t,f(r)):"object"==typeof r&&r.props&&"tfoot"in r.props?t.push(r):"function"==typeof(null===(l=null===(s=null==r?void 0:r.type)||void 0===s?void 0:s.prototype)||void 0===l?void 0:l.table)&&"TableFoot"===r.type.prototype.table()&&t.push(r);return t},x=function(e){var s,l,t,r;let a=[];if(Array.isArray(e))for(let n of e)if(Array.isArray(n))a.push.apply(a,x(n));else if("object"==typeof n&&n.props&&"tbody"in n.props)a.push(n);else if("function"==typeof(null===(l=null===(s=null==n?void 0:n.type)||void 0===s?void 0:s.prototype)||void 0===l?void 0:l.table)&&"TableGroup"===n.type.prototype.table()){let e=n.props.children||[];Array.isArray(e)&&e.length>0&&a.push(...e)}else"function"==typeof(null===(r=null===(t=null==n?void 0:n.type)||void 0===t?void 0:t.prototype)||void 0===r?void 0:r.table)&&"TableRow"===n.type.prototype.table()&&a.push(n);return a};function b(e){let s=e.children||[];Array.isArray(s)||(s=[s]);let l=h(s),t=x(s),r=f(s),n=["frui-tbl-overflow"];return e.className&&n.push(e.className),(0,a.jsx)("div",Object.assign({className:n.join(" "),style:e.style},{children:(0,a.jsxs)("table",Object.assign({className:"frui-tbl"},{children:[l&&(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:l})}),t&&(0,a.jsx)("tbody",{children:t}),r&&(0,a.jsx)("tfoot",{children:(0,a.jsx)("tr",{children:r})})]}))}))}s.default=b,s.Table=b},42378:function(e,s,l){"use strict";var t=this&&this.__rest||function(e,s){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>s.indexOf(t)&&(l[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)0>s.indexOf(t[r])&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(l[t[r]]=e[t[r]]);return l};Object.defineProperty(s,"__esModule",{value:!0}),s.useInput=void 0;let r=l(24246);function a({onChange:e,onUpdate:s}){return{handlers:{change:l=>{e&&e(l),s&&s(l.target.value)}}}}s.useInput=a,s.default=function(e){let{error:s,className:l,onChange:n,onUpdate:o,passRef:i}=e,c=t(e,["error","className","onChange","onUpdate","passRef"]),{handlers:d}=a({onChange:n,onUpdate:o}),p=["frui-field-input"];return s&&p.push("frui-tx-error","frui-bd-error"),l&&p.push(l),(0,r.jsx)("input",Object.assign({},c,{className:p.join(" "),ref:i,onChange:d.change}))}},84194:function(e,s,l){"use strict";var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),s.SelectDropdown=s.useSelect=void 0;let r=l(24246),a=l(27378),n=t(l(42378));function o(e){let{options:s,value:l,defaultValue:t,onDropdown:r,onSelected:n,onUpdate:o}=e,i=void 0!==t?t:void 0!==l?l:void 0,c=s.find(e=>e.value===i),[d,p]=(0,a.useState)(""),[u,h]=(0,a.useState)(c),[f,x]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{l&&h(s.find(e=>e.value===l))},[l]),{selected:u,showing:f,handlers:{toggle(){x(!f),r&&r(!f)},search(e){setTimeout(()=>{p(e.target.value)})},match(e){let s=(d||"").toLowerCase();return"string"==typeof e.keyword?e.keyword.toLowerCase().indexOf(s)>=0:"function"==typeof e.keyword?e.keyword(s):void 0!==e.value&&null!==e.value?e.value.toString().toLowerCase().indexOf(s)>=0:"string"!=typeof e.label||e.label.toLowerCase().indexOf(s)>=0},select(e){x(!1),h(e),r&&r(!1),n&&n(e),o&&o(e.value)}}}}function i(e){let{options:s,show:l,searchable:t,select:a,search:o,match:i}=e;return(0,r.jsxs)("div",Object.assign({className:"frui-field-select-dropdown",style:l?void 0:{display:"none"}},{children:[t&&(0,r.jsxs)("div",Object.assign({className:"frui-field-select-search"},{children:[(0,r.jsx)(n.default,{className:"frui-field-select-search-control",onKeyUp:o}),(0,r.jsx)("span",Object.assign({className:"frui-field-select-search-icon"},{children:"\uD83D\uDD0E"}))]})),(0,r.jsx)("div",Object.assign({className:"frui-field-select-options"},{children:s.filter(i).map((e,s)=>(0,r.jsx)("div",Object.assign({onClick:s=>a(e),className:"frui-field-select-option"},{children:e.label}),s))}))]}))}s.useSelect=o,s.SelectDropdown=i,s.default=function(e){let{options:s,searchable:l,value:t,defaultValue:a,placeholder:n="Choose an Option",error:c,className:d,style:p,onDropdown:u,onSelected:h,onUpdate:f}=e,x="object"!=typeof s||Array.isArray(s)?s:Object.keys(s).map(e=>({value:e,label:s[e]})),{selected:b,showing:j,handlers:m}=o({options:x,value:t,defaultValue:a,onDropdown:u,onSelected:h,onUpdate:f}),g=["frui-field-select"];d&&g.push(d);let y=["frui-field-select-placeholder"];return c&&y.push("frui-tx-error","frui-bd-error"),(0,r.jsxs)("div",Object.assign({className:g.join(" "),style:p},{children:[(0,r.jsx)("div",Object.assign({className:"frui-field-select-control",onClick:m.toggle},{children:(null==b?void 0:b.label)||(0,r.jsx)("span",Object.assign({className:y.join(" ")},{children:n}))})),(0,r.jsx)(i,{options:x,show:j,error:c,searchable:l,select:m.select,search:m.search,match:m.match})]}))}},34835:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/field/select",function(){return l(6697)}])},36493:function(e,s,l){"use strict";l.d(s,{C:function(){return c},Z:function(){return i}});var t=l(24246),r=l(22879),a=l(74631),n=l(48717),o=l(14707);function i(e){let{value:s,quote:l,l:r,r:a,children:n}=e;return(0,t.jsxs)(t.Fragment,{children:[r?(0,t.jsx)("span",{children:"\xa0"}):"",(0,t.jsxs)("code",{className:"text-sm text-t2 bg-b1 font-semibold inline-block p-0.5",children:[l?"`":"",s||n,l?"`":""]}),a?(0,t.jsx)("span",{children:"\xa0"}):""]})}function c(e){let{className:s,copy:l=!0,children:i,language:c}=e,{_:d}=(0,r.useLanguage)();return(0,t.jsxs)("div",{className:"flex text-sm bg-black ".concat(s||""),children:[(0,t.jsx)(a.Z,{className:"flex-grow !p-4 !bg-transparent",language:c,style:n._4,children:i}),l&&(0,t.jsxs)("div",{className:"text-sm p-4 text-gray-400 cursor-pointer whitespace-nowrap",onClick:()=>{navigator.clipboard.writeText(i.toString()),(0,o.ZP)("success",d("Copied to clipboard"))},children:[(0,t.jsx)("i",{className:"fas fa-copy"})," ",d("Copy")]})]})}},18604:function(e,s,l){"use strict";var t=l(24246);l(27378);var r=l(79894),a=l.n(r);let n=e=>{let{href:s,label:l,icon:r,last:n}=e,o=s?(0,t.jsx)(a(),{href:s,className:"inline-flex items-center text-t2",children:l}):(0,t.jsx)("span",{className:"inline-flex items-center font-semibold text-t1",children:l});return(0,t.jsxs)(t.Fragment,{children:[r&&(0,t.jsx)("i",{className:"fas fa-fw fa-".concat(r," inline-block mr-1 text-t1")}),o,!n&&(0,t.jsx)("i",{className:"fas fa-fw fa-chevron-right mx-1 text-t1"})]})},o=e=>{var s;let{trail:l}=e;if(0===l.length)return null;let r=l[l.length-1],n=r.href||(null===(s=l[l.length-2])||void 0===s?void 0:s.href);return n?(0,t.jsxs)(a(),{className:"flex md:hidden items-center cursor-pointer whitespace-nowrap overflow-x-hidden",href:n,children:[(0,t.jsx)("i",{className:"mr-1 fas fa-fw fa-chevron-left text-xl text-t2"}),!!r.icon&&(0,t.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(r.icon," text-sm")}),(0,t.jsx)("span",{className:"font-bold",children:r.label})]}):(0,t.jsxs)("div",{className:"flex md:hidden items-center whitespace-nowrap overflow-x-hidden",children:[!!r.icon&&(0,t.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(r.icon," text-sm")}),(0,t.jsx)("span",{className:"font-bold",children:r.label})]})};s.Z=e=>{let{crumbs:s,className:l}=e,r=[...s].filter(e=>!!e.label),a=["hidden md:flex items-center whitespace-nowrap overflow-x-auto"];return l&&a.push(l),(0,t.jsxs)("nav",{children:[(0,t.jsx)("div",{className:a.join(" "),children:r.map((e,s)=>(0,t.jsx)(n,{href:e.href,label:e.label,icon:e.icon,last:s===r.length-1},s))}),(0,t.jsx)(o,{trail:r})]})}},63527:function(e,s,l){"use strict";l.d(s,{Z:function(){return i}});var t=l(24246),r=l(22879),a=l(79531),n=l(54974),o=l.n(n);function i(e){let{props:s}=e,{_:l}=(0,r.useLanguage)(),i=(0,a.Z)("bg-b2","bg-b1");return(0,t.jsxs)(o(),{children:[(0,t.jsx)(n.Thead,{className:"text-left bg-b3",children:l("Name")}),(0,t.jsx)(n.Thead,{className:"text-left bg-b3",children:l("Type")}),(0,t.jsx)(n.Thead,{className:"text-center bg-b3",children:l("Required")}),(0,t.jsx)(n.Thead,{className:"text-left bg-b3",children:l("Notes")}),s.map((e,s)=>(0,t.jsxs)(n.Trow,{children:[(0,t.jsx)(n.Tcol,{className:"".concat(i(s)),children:e[0]}),(0,t.jsx)(n.Tcol,{className:"".concat(i(s)),children:e[1]}),(0,t.jsx)(n.Tcol,{className:"".concat(i(s)," text-center"),children:e[2]}),(0,t.jsx)(n.Tcol,{className:"".concat(i(s)),children:e[3]})]},s))]})}},79531:function(e,s,l){"use strict";function t(e,s){let l=e;return t=>"number"==typeof t?t%2==0?e:s:(t&&(l=l===e?s:e),l)}l.d(s,{Z:function(){return t}})},6697:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return m}});var t=l(24246),r=l(22879),a=l(79894),n=l.n(a),o=l(84194),i=l.n(o),c=l(54974),d=l.n(c),p=l(1343),u=l(18604),h=l(63527),f=l(36493);let x="\n<Select \n  className=\"w-full z-20 text-black\" \n  options={[\n    { label: 'Foo', value: 'foo', keyword: 'foo' },\n    { label: 'Bar', value: 'bar', keyword: 'bar' }\n  ]}\n/>".trim(),b="\n<Select \n  className=\"w-full z-30 text-black\" \n  options={[\n    { \n      label: (<strong className=\"font-bold\">Foo</strong>), \n      value: 'foo', \n      keyword: 'foo' \n    },\n    { \n      label: (<strong className=\"font-bold\">Bar</strong>), \n      value: 'bar', \n      keyword: 'bar' \n    }\n  ]}\n/>".trim(),j="\n<Select \n  className=\"w-full z-30 text-black\" \n  options={{ foo: 'Foo', bar: 'Bar' }}\n  onDropdown={open => console.log('dropdown', open)}\n  onSelected={option => console.log('selected', option)}\n  onUpdate={value => alert(JSON.stringify(value))}\n/>".trim();function m(){let{_:e}=(0,r.useLanguage)(),s=[[e("className"),e("string"),e("No"),e("Standard HTML class names")],[e("defaultValue"),e("string"),e("No"),e("Alias to value")],[e("error"),e("string|boolean"),e("No"),e("Any error message")],[e("name"),e("string"),e("No"),e("Used for react server components.")],[e("onDropdown"),e("Function"),e("No"),e("Event handler when dropdown opens/closes")],[e("onSelected"),e("Function"),e("No"),e("Event handler when an option has been selected")],[e("onUpdate"),e("Function"),e("No"),e("Update event handler")],[e("options"),e("Option[]"),e("Yes"),e("List of select options.")],[e("placeholder"),e("string"),e("No"),e("Display text when no value set")],[e("searchable"),e("boolean"),e("No"),e("Add a search field")],[e("style"),e("CSS Object"),e("No"),e("Standard CSS object")],[e("value"),e("string"),e("No"),e("Selected value from the options")]];return(0,t.jsx)(p.sF,{children:(0,t.jsxs)("main",{className:"flex flex-col h-full w-full",children:[(0,t.jsx)("div",{className:"p-3 bg-b2",children:(0,t.jsx)(u.Z,{crumbs:[{icon:"rectangle-list",label:"Fields",href:"/field"},{label:"Select"}]})}),(0,t.jsxs)("div",{className:"flex-grow relative h-full",children:[(0,t.jsxs)("aside",{className:"hidden lg:block absolute top-0 bottom-0 right-0 z-1 w-56 border-l border-b1 text-sm",children:[(0,t.jsx)("h4",{className:"p-3 border-b border-b1 bg-b1 uppercase font-semibold",children:(0,t.jsx)(n(),{href:"#top",children:e("Select")})}),(0,t.jsxs)("ul",{className:"list-disc py-3 pr-3 pl-6",children:[(0,t.jsx)("li",{className:"pl-3 pb-1",children:(0,t.jsx)(n(),{href:"#props",children:e("Props")})}),(0,t.jsx)("li",{className:"pl-3 pb-1",children:(0,t.jsx)(n(),{href:"#basic",children:e("Basics")})}),(0,t.jsx)("li",{className:"pl-3 pb-1",children:(0,t.jsx)(n(),{href:"#events",children:e("Events")})}),(0,t.jsx)("li",{className:"pl-3 pb-1",children:(0,t.jsx)(n(),{href:"#errors",children:e("Errors")})}),(0,t.jsx)("li",{className:"pl-3 pb-1",children:(0,t.jsx)(n(),{href:"#styles",children:e("Custom Styles")})})]})]}),(0,t.jsxs)("div",{className:"absolute top-0 bottom-0 left-0 right-0 lg:right-56 px-3 pt-3 pb-5 h-full overflow-auto",children:[(0,t.jsx)("h1",{id:"top",className:"flex items-center uppercase font-bold text-xl",children:e("Select")}),(0,t.jsx)(f.C,{language:"typescript",className:"mt-2",children:"import Select from 'frui/fields/Select';"}),(0,t.jsx)("h2",{id:"props",className:"uppercase font-bold text-lg mt-8",children:e("Props")}),(0,t.jsx)("p",{className:"py-4",children:(0,t.jsxs)(r.Translate,{children:["The following props are accepted by ",(0,t.jsx)(f.Z,{value:"Select"}),"."]})}),(0,t.jsx)(h.Z,{props:s}),(0,t.jsx)("h2",{id:"basic",className:"uppercase font-bold text-lg mt-8",children:e("Basics")}),(0,t.jsx)("p",{className:"py-4",children:(0,t.jsxs)(r.Translate,{children:["The following is a basic example of a",(0,t.jsx)(f.Z,{l:!0,value:"Select"})," field."]})}),(0,t.jsxs)("div",{className:"curved",children:[(0,t.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,t.jsx)(i(),{className:"w-full z-40 text-black",options:{foo:"Foo",bar:"Bar"},placeholder:"Select Option",searchable:!0})}),(0,t.jsx)(f.C,{language:"typescript",children:"<Select className=\"w-full z-40 text-black\" options={{ foo: 'Foo', bar: 'Bar' }} placeholder=\"Select Option\" searchable />"})]}),(0,t.jsx)("p",{className:"py-4",children:(0,t.jsx)(r.Translate,{children:"You can also express options as an array of objects."})}),(0,t.jsx)("div",{className:"curved overflow-hidden",children:(0,t.jsx)(f.C,{language:"typescript",children:x})}),(0,t.jsx)("p",{className:"py-4",children:(0,t.jsx)(r.Translate,{children:"With array options, you can use React on labels."})}),(0,t.jsxs)("div",{className:"curved",children:[(0,t.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,t.jsx)(i(),{className:"w-full z-30 text-black",options:[{label:(0,t.jsx)("strong",{className:"font-bold",children:"Foo"}),value:"foo",keyword:"foo"},{label:(0,t.jsx)("strong",{className:"font-bold",children:"Bar"}),value:"bar",keyword:"bar"}]})}),(0,t.jsx)(f.C,{language:"typescript",children:b})]}),(0,t.jsx)("h2",{id:"events",className:"uppercase font-bold text-lg mt-8",children:e("Events")}),(0,t.jsx)("p",{className:"py-4",children:(0,t.jsxs)(r.Translate,{children:["The following example makes use of all the possible events for ",(0,t.jsx)(f.Z,{value:"Select"}),"."]})}),(0,t.jsxs)("div",{className:"curved",children:[(0,t.jsx)("div",{className:"relative flex items-center justify-center p-3 bg-b1",children:(0,t.jsx)(i(),{className:"w-full z-20 text-black",options:{foo:"Foo",bar:"Bar"},onDropdown:e=>console.log("dropdown",e),onSelected:e=>console.log("selected",e),onUpdate:e=>alert(JSON.stringify(e))})}),(0,t.jsx)(f.C,{language:"typescript",children:j})]}),(0,t.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("On Dropdown")}),(0,t.jsx)("p",{className:"py-4",children:(0,t.jsxs)(r.Translate,{children:["The ",(0,t.jsx)(f.Z,{value:"onDropdown"})," event is triggered when the dropdown opens or closes. The following arguments are passed to the event handler:"]})}),(0,t.jsxs)(d(),{children:[(0,t.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Name")}),(0,t.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Type")}),(0,t.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Sample")}),(0,t.jsxs)(c.Trow,{children:[(0,t.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("open")}),(0,t.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("boolean")}),(0,t.jsx)(c.Tcol,{className:"bg-b1 text-left",children:(0,t.jsx)(f.Z,{value:"true"})})]})]}),(0,t.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("On Selected")}),(0,t.jsx)("p",{className:"py-4",children:(0,t.jsxs)(r.Translate,{children:["The ",(0,t.jsx)(f.Z,{value:"onSelected"})," event is triggered when an option has been selected. The following arguments are passed to the event handler:"]})}),(0,t.jsxs)(d(),{children:[(0,t.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Name")}),(0,t.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Type")}),(0,t.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Sample")}),(0,t.jsxs)(c.Trow,{children:[(0,t.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("option")}),(0,t.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("SelectOption")}),(0,t.jsx)(c.Tcol,{className:"bg-b1 text-left",children:(0,t.jsx)(f.C,{language:"json",copy:!1,children:"{\n  label: 'Foo',\n  value: 'foo',\n  keyword: 'foo'\n}"})})]})]}),(0,t.jsx)("h3",{className:"font-semibold text-md mt-8",children:e("On Update")}),(0,t.jsx)("p",{className:"py-4",children:(0,t.jsxs)(r.Translate,{children:["The ",(0,t.jsx)(f.Z,{value:"onUpdate"})," event is triggered when the value has been updated. The following arguments are passed to the event handler:"]})}),(0,t.jsxs)(d(),{children:[(0,t.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Name")}),(0,t.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Type")}),(0,t.jsx)(c.Thead,{className:"bg-b3 text-left",children:e("Sample")}),(0,t.jsxs)(c.Trow,{children:[(0,t.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("value")}),(0,t.jsx)(c.Tcol,{className:"bg-b1 text-left",children:e("string")}),(0,t.jsx)(c.Tcol,{className:"bg-b1 text-left",children:(0,t.jsx)(f.Z,{value:"foo",quote:!0})})]})]}),(0,t.jsx)("h2",{id:"errors",className:"uppercase font-bold text-lg mt-8",children:e("Errors")}),(0,t.jsx)("p",{className:"py-4",children:(0,t.jsxs)(r.Translate,{children:["You can pass the ",(0,t.jsx)(f.Z,{value:"error"})," prop to highlight the Select field red."]})}),(0,t.jsxs)("div",{className:"curved",children:[(0,t.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,t.jsx)(i(),{options:{foo:"Foo",bar:"Bar"},className:"w-full z-10 text-black",error:!0,value:"US"})}),(0,t.jsx)(f.C,{language:"typescript",children:"<Select options={{ foo: 'Foo', bar: 'Bar' }} className=\"w-full z-10 text-black\" error={string|true} value=\"US\" />"})]}),(0,t.jsx)("h2",{id:"styles",className:"uppercase font-bold text-lg mt-8",children:e("Custom Styles")}),(0,t.jsx)("p",{className:"py-4",children:(0,t.jsxs)(r.Translate,{children:["You can add your own custom class to selects or use any of the respective",(0,t.jsx)(f.Z,{l:!0,value:"frui-field-select"}),",",(0,t.jsx)(f.Z,{l:!0,value:"frui-field-select-control"}),",",(0,t.jsx)(f.Z,{l:!0,value:"frui-field-select-placeholder"}),",",(0,t.jsx)(f.Z,{l:!0,value:"frui-field-select-dropdown"}),",",(0,t.jsx)(f.Z,{l:!0,value:"frui-field-select-search"}),",",(0,t.jsx)(f.Z,{l:!0,value:"frui-field-select-search-control"}),",",(0,t.jsx)(f.Z,{l:!0,value:"frui-field-select-search-icon"}),",",(0,t.jsx)(f.Z,{l:!0,value:"frui-field-select-options"}),",",(0,t.jsx)(f.Z,{l:!0,value:"frui-field-select-option"}),", and",(0,t.jsx)(f.Z,{l:!0,value:"frui-field-select-label"})," CSS classes."]})}),(0,t.jsxs)("div",{className:"flex items-center border-t border-b2 mt-8 pt-4",children:[(0,t.jsxs)(n(),{className:"text-t2",href:"/field/radio",children:[(0,t.jsx)("i",{className:"fas fa-arrow-left mr-2"}),e("Radio")]}),(0,t.jsx)("div",{className:"flex-grow"}),(0,t.jsxs)(n(),{className:"text-t2",href:"/field/slug",children:[e("Slug"),(0,t.jsx)("i",{className:"fas fa-arrow-right ml-2"})]})]})]})]})]})})}}},function(e){e.O(0,[9461,2888,9774,179],function(){return e(e.s=34835)}),_N_E=e.O()}]);