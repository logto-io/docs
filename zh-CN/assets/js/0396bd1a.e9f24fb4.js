"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[22229],{14940:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"developers/webhooks/secure-webhooks","title":"\u5b89\u5168 Webhook","description":"\u4e00\u65e6\u4f60\u7684\u670d\u52a1\u5668\u51c6\u5907\u597d\u63a5\u6536 Webhook \u8bf7\u6c42\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u786e\u4fdd\u5b83\u80fd\u591f\u5b89\u5168\u5730\u5904\u7406\u8fd9\u4e9b\u8bf7\u6c42\u3002Logto \u4e3a\u6bcf\u4e2a Webhook \u8bf7\u6c42\u8d1f\u8f7d\u751f\u6210\u4e00\u4e2a\u7b7e\u540d\uff0c\u8fd9\u4f7f\u4f60\u80fd\u591f\u9a8c\u8bc1\u8bf7\u6c42\u662f\u5426\u6765\u81ea Logto\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developers/webhooks/secure-webhooks.mdx","sourceDirName":"developers/webhooks","slug":"/developers/webhooks/secure-webhooks","permalink":"/zh-CN/developers/webhooks/secure-webhooks","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/developers/webhooks/secure-webhooks.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"secure-webhooks","title":"\u5b89\u5168 Webhook","sidebar_label":"\u5b89\u5168 Webhook","sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Webhooks \u8bf7\u6c42","permalink":"/zh-CN/developers/webhooks/webhooks-request"},"next":{"title":"\u5ba1\u8ba1\u65e5\u5fd7","permalink":"/zh-CN/developers/audit-logs"}}');var s=n(86070),r=n(15658);const i={id:"secure-webhooks",title:"\u5b89\u5168 Webhook",sidebar_label:"\u5b89\u5168 Webhook",sidebar_position:5},c="\u5b89\u5168 Webhook",d={},h=[{value:"\u83b7\u53d6\u7b7e\u540d\u5bc6\u94a5",id:"\u83b7\u53d6\u7b7e\u540d\u5bc6\u94a5",level:2},{value:"\u9a8c\u8bc1\u7b7e\u540d",id:"\u9a8c\u8bc1\u7b7e\u540d",level:2}];function l(e){const o={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components},{CloudLink:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"\u5b89\u5168-webhook",children:"\u5b89\u5168 Webhook"})}),"\n",(0,s.jsx)(o.p,{children:"\u4e00\u65e6\u4f60\u7684\u670d\u52a1\u5668\u51c6\u5907\u597d\u63a5\u6536 Webhook \u8bf7\u6c42\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u786e\u4fdd\u5b83\u80fd\u591f\u5b89\u5168\u5730\u5904\u7406\u8fd9\u4e9b\u8bf7\u6c42\u3002Logto \u4e3a\u6bcf\u4e2a Webhook \u8bf7\u6c42\u8d1f\u8f7d\u751f\u6210\u4e00\u4e2a\u7b7e\u540d\uff0c\u8fd9\u4f7f\u4f60\u80fd\u591f\u9a8c\u8bc1\u8bf7\u6c42\u662f\u5426\u6765\u81ea Logto\u3002"}),"\n",(0,s.jsx)(o.h2,{id:"\u83b7\u53d6\u7b7e\u540d\u5bc6\u94a5",children:"\u83b7\u53d6\u7b7e\u540d\u5bc6\u94a5"}),"\n",(0,s.jsxs)(o.p,{children:["\u4f60\u9700\u8981\u4ece ",(0,s.jsx)(n,{to:"/webhooks",children:"Logto \u63a7\u5236\u53f0 > Webhooks"})," \u7684 Webhook \u8be6\u60c5\u9875\u9762\u83b7\u53d6\u7b7e\u540d\u5bc6\u94a5\uff0c\u4ee5\u9a8c\u8bc1\u7b7e\u540d\u3002"]}),"\n",(0,s.jsx)(o.h2,{id:"\u9a8c\u8bc1\u7b7e\u540d",children:"\u9a8c\u8bc1\u7b7e\u540d"}),"\n",(0,s.jsxs)(o.p,{children:["\u4ece Webhook \u8bf7\u6c42\u7684 ",(0,s.jsx)(o.code,{children:"logto-signature-sha-256"})," \u5934\u4e2d\u63d0\u53d6\u7b7e\u540d\u3002"]}),"\n",(0,s.jsx)(o.p,{children:"\u4e4b\u540e\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528\u4f60\u7684\u7b7e\u540d\u5bc6\u94a5\u548c Webhook \u8bf7\u6c42\u4f53\u751f\u6210\u4e00\u4e2a\u7b7e\u540d\uff0c\u5e76\u786e\u4fdd\u7ed3\u679c\u4e0e\u6765\u81ea Logto \u7684\u7b7e\u540d\u5339\u914d\u3002"}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsx)(o.p,{children:"\u4f7f\u7528 Webhook \u8bf7\u6c42\u7684\u539f\u59cb\u4e3b\u4f53\u8fdb\u884c\u7b7e\u540d\u751f\u6210\uff1b\u907f\u514d\u4f7f\u7528\u89e3\u6790\u540e\u7684\u4e3b\u4f53\uff0c\u56e0\u4e3a\u670d\u52a1\u5668\u53ef\u80fd\u4f1a\u5728\u5230\u8fbe\u4f60\u7684 Webhook \u7aef\u70b9\u5904\u7406\u7a0b\u5e8f\u4e4b\u524d\u5bf9\u5176\u8fdb\u884c\u9884\u5904\u7406\u3002"})}),"\n",(0,s.jsx)(o.p,{children:"Logto \u4f7f\u7528 HMAC \u5341\u516d\u8fdb\u5236\u6458\u8981\u6765\u8ba1\u7b97\u7b7e\u540d\u3002"}),"\n",(0,s.jsx)(o.p,{children:"\u4ee5\u4e0b\u662f\u5728 Node.js \u4e2d\u9a8c\u8bc1\u7b7e\u540d\u7684\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-tsx",children:"import { createHmac } from 'node:crypto';\n\nexport const verify = (signingKey: string, rawBody: Buffer[], expectedSignature: string) => {\n  const hmac = createHmac('sha256', signingKey);\n  hmac.update(rawBody);\n  const signature = hmac.digest('hex');\n  return signature === expectedSignature;\n};\n"})})]})}function a(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},15658:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>c});var t=n(30758);const s={},r=t.createContext(s);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);