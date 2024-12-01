"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[80086],{13605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"end-user-flows/security-verification/README","title":"\u5b89\u5168\u9a8c\u8bc1","description":"\u5f53\u7ecf\u8fc7\u8ba4\u8bc1 (Authentication) \u7684\u7528\u6237\u5c1d\u8bd5\u6267\u884c\u654f\u611f\u6216\u9ad8\u98ce\u9669\u64cd\u4f5c\u65f6\u2014\u2014\u4f8b\u5982\u66f4\u6539\u5bc6\u7801\u3001\u8fdb\u884c\u652f\u4ed8\u6216\u8bbf\u95ee\u654f\u611f\u4fe1\u606f\u5982\u5de5\u8d44\u5355\u6216\u94f6\u884c\u8d26\u6237\u8be6\u7ec6\u4fe1\u606f\u2014\u2014\u989d\u5916\u7684\u5b89\u5168\u63aa\u65bd\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\u3002\u6b64\u6d41\u7a0b\u5728\u94f6\u884c\u3001\u533b\u7597\u548c\u653f\u5e9c\u670d\u52a1\u7b49\u654f\u611f\u5e94\u7528\u4e2d\u5c24\u4e3a\u5173\u952e\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/security-verification/README.mdx","sourceDirName":"end-user-flows/security-verification","slug":"/end-user-flows/security-verification/","permalink":"/zh-CN/end-user-flows/security-verification/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/security-verification/README.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"docsSidebar","previous":{"title":"\u901a\u8fc7 Account API \u8bbe\u7f6e\u8d26\u6237","permalink":"/zh-CN/end-user-flows/account-settings/by-account-api"},"next":{"title":"\u901a\u8fc7 Management API \u5b9e\u73b0\u5b89\u5168\u9a8c\u8bc1","permalink":"/zh-CN/end-user-flows/security-verification/by-management-api"}}');var o=n(86070),i=n(15658),s=n(96347);const c={sidebar_position:7},a="\u5b89\u5168\u9a8c\u8bc1",l={},u=[];function d(e){const t={em:"em",h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components},{DocCardList:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("DocCardList",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"\u5b89\u5168\u9a8c\u8bc1",children:"\u5b89\u5168\u9a8c\u8bc1"})}),"\n",(0,o.jsx)(t.p,{children:"\u5f53\u7ecf\u8fc7\u8ba4\u8bc1 (Authentication) \u7684\u7528\u6237\u5c1d\u8bd5\u6267\u884c\u654f\u611f\u6216\u9ad8\u98ce\u9669\u64cd\u4f5c\u65f6\u2014\u2014\u4f8b\u5982\u66f4\u6539\u5bc6\u7801\u3001\u8fdb\u884c\u652f\u4ed8\u6216\u8bbf\u95ee\u654f\u611f\u4fe1\u606f\u5982\u5de5\u8d44\u5355\u6216\u94f6\u884c\u8d26\u6237\u8be6\u7ec6\u4fe1\u606f\u2014\u2014\u989d\u5916\u7684\u5b89\u5168\u63aa\u65bd\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\u3002\u6b64\u6d41\u7a0b\u5728\u94f6\u884c\u3001\u533b\u7597\u548c\u653f\u5e9c\u670d\u52a1\u7b49\u654f\u611f\u5e94\u7528\u4e2d\u5c24\u4e3a\u5173\u952e\u3002"}),"\n",(0,o.jsxs)(t.p,{children:["\u8fd9\u4e2a\u8fc7\u7a0b\u88ab\u79f0\u4e3a ",(0,o.jsx)(t.em,{children:"\u5b89\u5168\u9a8c\u8bc1"}),"\uff0c\u8981\u6c42\u7528\u6237\u91cd\u65b0\u9a8c\u8bc1\u5176\u8eab\u4efd\u4ee5\u786e\u8ba4\u4ed6\u4eec\u662f\u6388\u6743\u7684\u8d26\u6237\u6301\u6709\u4eba\u3002\u901a\u8fc7\u5b9e\u65bd\u5b89\u5168\u9a8c\u8bc1\uff0c\u7cfb\u7edf\u52a0\u5f3a\u4e86\u5bf9\u672a\u6388\u6743\u8bbf\u95ee\u7684\u4fdd\u62a4\uff0c\u4e3a\u9ad8\u98ce\u9669\u64cd\u4f5c\u589e\u52a0\u4e86\u5173\u952e\u7684\u5b89\u5168\u5c42\uff0c\u5e76\u6709\u52a9\u4e8e\u4fdd\u62a4\u654f\u611f\u6570\u636e\u3002"]}),"\n",(0,o.jsx)(n,{items:[{type:"link",label:"\u4f7f\u7528 Logto Management API",href:"/end-user-flows/security-verification/by-management-api",description:"\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 Logto Management API \u5c06\u5b89\u5168\u9a8c\u8bc1\u8fc7\u7a0b\u6dfb\u52a0\u5230\u4f60\u7684\u5e94\u7528\u4e2d\u3002",customProps:{icon:(0,o.jsx)(s.A,{})}}]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},96347:(e,t,n)=>{n.d(t,{A:()=>s});var r,o=n(30758);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(null,arguments)}const s=e=>{let{title:t,titleId:n,...s}=e;return o.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",viewBox:"0 0 18 18","aria-labelledby":n},s),t?o.createElement("title",{id:n},t):null,r||(r=o.createElement("path",{fill:"currentColor",d:"M14.723 2.737a.75.75 0 0 0-.63-.15 6 6 0 0 1-4.665-.952.75.75 0 0 0-.856 0 6 6 0 0 1-4.664.952.75.75 0 0 0-.908.735V8.91a6.75 6.75 0 0 0 2.827 5.498l2.738 1.95a.75.75 0 0 0 .87 0l2.737-1.95A6.75 6.75 0 0 0 15 8.91V3.322a.75.75 0 0 0-.277-.585M13.5 8.91a5.25 5.25 0 0 1-2.197 4.275L9 14.828l-2.302-1.643A5.25 5.25 0 0 1 4.5 8.91V4.185A7.5 7.5 0 0 0 9 3.142a7.5 7.5 0 0 0 4.5 1.043zm-3.345-1.718L8.138 9.217l-.668-.675a.753.753 0 1 0-1.065 1.065l1.2 1.2a.75.75 0 0 0 1.065 0l2.58-2.557a.753.753 0 0 0-1.065-1.065z"})))}},15658:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(30758);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);