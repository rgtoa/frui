(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4854],{41323:function(e,s,l){"use strict";let t=l(24246);s.Z=e=>{let{show:s,color:l,label:n,style:a={},className:r}=e;a.borderColor=l||"#666666";let c={};!1===s&&(c.display="none");let o=["frui-loader"];return r&&o.push(r),(0,t.jsxs)("div",Object.assign({style:c},{children:[(0,t.jsx)("span",{className:o.join(" "),style:a}),n]}))}},38536:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/loader",function(){return l(3525)}])},36493:function(e,s,l){"use strict";l.d(s,{C:function(){return i},Z:function(){return o}});var t=l(24246),n=l(22879),a=l(74631),r=l(48717),c=l(14707);function o(e){let{value:s,quote:l,l:n,r:a,children:r}=e;return(0,t.jsxs)(t.Fragment,{children:[n?(0,t.jsx)("span",{children:"\xa0"}):"",(0,t.jsxs)("code",{className:"text-sm text-t2 bg-b1 font-semibold inline-block p-0.5",children:[l?"`":"",s||r,l?"`":""]}),a?(0,t.jsx)("span",{children:"\xa0"}):""]})}function i(e){let{className:s,copy:l=!0,children:o,language:i}=e,{_:d}=(0,n.useLanguage)();return(0,t.jsxs)("div",{className:"flex text-sm bg-black ".concat(s||""),children:[(0,t.jsx)(a.Z,{className:"flex-grow !p-4 !bg-transparent",language:i,style:r._4,children:o}),l&&(0,t.jsxs)("div",{className:"text-sm p-4 text-gray-400 cursor-pointer whitespace-nowrap",onClick:()=>{navigator.clipboard.writeText(o.toString()),(0,c.ZP)("success",d("Copied to clipboard"))},children:[(0,t.jsx)("i",{className:"fas fa-copy"})," ",d("Copy")]})]})}},18604:function(e,s,l){"use strict";var t=l(24246);l(27378);var n=l(79894),a=l.n(n);let r=e=>{let{href:s,label:l,icon:n,last:r}=e,c=s?(0,t.jsx)(a(),{href:s,className:"inline-flex items-center text-t2",children:l}):(0,t.jsx)("span",{className:"inline-flex items-center font-semibold text-t1",children:l});return(0,t.jsxs)(t.Fragment,{children:[n&&(0,t.jsx)("i",{className:"fas fa-fw fa-".concat(n," inline-block mr-1 text-t1")}),c,!r&&(0,t.jsx)("i",{className:"fas fa-fw fa-chevron-right mx-1 text-t1"})]})},c=e=>{var s;let{trail:l}=e;if(0===l.length)return null;let n=l[l.length-1],r=n.href||(null===(s=l[l.length-2])||void 0===s?void 0:s.href);return r?(0,t.jsxs)(a(),{className:"flex md:hidden items-center cursor-pointer whitespace-nowrap overflow-x-hidden",href:r,children:[(0,t.jsx)("i",{className:"mr-1 fas fa-fw fa-chevron-left text-xl text-t2"}),!!n.icon&&(0,t.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(n.icon," text-sm")}),(0,t.jsx)("span",{className:"font-bold",children:n.label})]}):(0,t.jsxs)("div",{className:"flex md:hidden items-center whitespace-nowrap overflow-x-hidden",children:[!!n.icon&&(0,t.jsx)("i",{className:"mr-0.5 fas fa-fw fa-".concat(n.icon," text-sm")}),(0,t.jsx)("span",{className:"font-bold",children:n.label})]})};s.Z=e=>{let{crumbs:s,className:l}=e,n=[...s].filter(e=>!!e.label),a=["hidden md:flex items-center whitespace-nowrap overflow-x-auto"];return l&&a.push(l),(0,t.jsxs)("nav",{children:[(0,t.jsx)("div",{className:a.join(" "),children:n.map((e,s)=>(0,t.jsx)(r,{href:e.href,label:e.label,icon:e.icon,last:s===n.length-1},s))}),(0,t.jsx)(c,{trail:n})]})}},3525:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return x}});var t=l(24246),n=l(22879),a=l(79894),r=l.n(a),c=l(18604),o=l(1343),i=l(41323),d=l(36493);function x(){let{_:e}=(0,n.useLanguage)();return(0,t.jsx)(o.sF,{children:(0,t.jsxs)("main",{className:"flex flex-col h-full w-full",children:[(0,t.jsx)("div",{className:"p-3 bg-b2",children:(0,t.jsx)(c.Z,{crumbs:[{icon:"icons",label:"Components",href:"/component"},{label:"Loader"}]})}),(0,t.jsxs)("div",{className:"flex-grow px-3 pt-3 pb-5 overflow-auto",children:[(0,t.jsx)("h1",{className:"flex items-center uppercase font-bold text-xl",children:e("Loader")}),(0,t.jsx)("p",{className:"py-4",children:(0,t.jsxs)(n.Translate,{children:["By default, loaders wont show until ",(0,t.jsx)(d.Z,{value:"show"})," is set to ",(0,t.jsx)(d.Z,{value:"true"}),"."]})}),(0,t.jsxs)("div",{className:"curved overflow-hidden",children:[(0,t.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,t.jsx)(i.Z,{show:!0})}),(0,t.jsx)(d.C,{language:"typescript",children:"<Loader show={true} />"})]}),(0,t.jsx)("h2",{className:"uppercase font-bold text-lg mt-8",children:e("Custom Color")}),(0,t.jsx)("p",{className:"py-4",children:(0,t.jsx)(n.Translate,{children:"Loaders can have custom CSS compatible colors which includes hex and color names."})}),(0,t.jsxs)("div",{className:"curved overflow-hidden",children:[(0,t.jsx)("div",{className:"flex items-center justify-center p-3 bg-b1",children:(0,t.jsx)(i.Z,{show:!0,color:"salmon"})}),(0,t.jsx)(d.C,{language:"typescript",children:'<Loader show={true} color="salmon" />'})]}),(0,t.jsx)("h2",{className:"uppercase font-bold text-lg mt-8",children:e("Custom Styles")}),(0,t.jsx)("p",{className:"py-4",children:(0,t.jsxs)(n.Translate,{children:["You can add your own custom class to the loader component or use the ",(0,t.jsx)(d.Z,{value:"frui-loader"})," CSS class."]})}),(0,t.jsxs)("div",{className:"flex items-center border-t border-b2 mt-8 pt-4",children:[(0,t.jsxs)(r(),{className:"text-t2",href:"/component/button",children:[(0,t.jsx)("i",{className:"fas fa-arrow-left mr-2"}),e("Buttons")]}),(0,t.jsx)("div",{className:"flex-grow"}),(0,t.jsxs)(r(),{className:"text-t2",href:"/component/modal",children:[e("Modals"),(0,t.jsx)("i",{className:"fas fa-arrow-right ml-2"})]})]})]})]})})}}},function(e){e.O(0,[9461,2888,9774,179],function(){return e(e.s=38536)}),_N_E=e.O()}]);