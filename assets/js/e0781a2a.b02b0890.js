"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[73184],{12792:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"connectors/sms-connectors/sms-templates","title":"SMS templates","description":"Logto provides four different templates for customizing SMS content, which are categorized based on their usage type: Register, SignIn, ForgotPassword, and Generic. It is highly recommended that you use different templates for various use cases, or it could hit rate limit, leading to a temporary outage of your service.","source":"@site/docs/connectors/sms-connectors/sms-templates.mdx","sourceDirName":"connectors/sms-connectors","slug":"/connectors/sms-connectors/sms-templates","permalink":"/connectors/sms-connectors/sms-templates","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/connectors/sms-connectors/sms-templates.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"sms-templates","title":"SMS templates","sidebar_label":"SMS templates","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"SMS connectors","permalink":"/connectors/sms-connectors/"},"next":{"title":"Social connectors","permalink":"/connectors/social-connectors"}}');var o=s(86070),i=s(15658);const r={id:"sms-templates",title:"SMS templates",sidebar_label:"SMS templates",sidebar_position:2},c=void 0,a={},d=[{value:"SMS template types and examples",id:"sms-template-types-and-examples",level:2}];function l(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Logto provides four different templates for customizing SMS content, which are categorized based on their usage type: Register, SignIn, ForgotPassword, and Generic. It is highly recommended that you use different templates for various use cases, or it could hit rate limit, leading to a temporary outage of your service."}),"\n",(0,o.jsx)(t.h2,{id:"sms-template-types-and-examples",children:"SMS template types and examples"}),"\n",(0,o.jsx)(t.p,{children:"There are some examples just for reference:"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Usage"}),(0,o.jsx)(t.th,{children:"Scenario"}),(0,o.jsx)(t.th,{children:"Template Example"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Register"}),(0,o.jsx)(t.td,{children:"Users create an account using their email and verify it by entering a verification code sent by Logto to their email."}),(0,o.jsxs)(t.td,{children:["Your Logto sign-up verification code is ",(0,o.jsx)(t.code,{children:"{{code}}"}),". The code will remain active for 10 minutes."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"SignIn"}),(0,o.jsx)(t.td,{children:"Users sign in using their email and verify by entering verification code instead of entering a password."}),(0,o.jsxs)(t.td,{children:["Your Logto sign-in verification code is ",(0,o.jsx)(t.code,{children:"{{code}}"}),". The code will remain active for 10 minutes."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"ForgotPassword"}),(0,o.jsx)(t.td,{children:"If users forget their password during login, they can choose to verify their identity using the email they've already verified with Logto."}),(0,o.jsxs)(t.td,{children:["Your Logto password change verification code is ",(0,o.jsx)(t.code,{children:"{{code}}"}),". The code will remain active for 10 minutes."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Generic"}),(0,o.jsx)(t.td,{children:"This template can be used as a general backup option for various scenarios, including testing connector configurations and so on."}),(0,o.jsxs)(t.td,{children:["Your Logto verification code is ",(0,o.jsx)(t.code,{children:"{{code}}"}),". The code will remain active for 10 minutes."]})]})]})]}),"\n",(0,o.jsx)(t.p,{children:"It's important to understand these parameters:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The verification code is valid for 10 minutes. We currently do not support customization on the expiry time."}),"\n",(0,o.jsxs)(t.li,{children:["Logto will replace the ",(0,o.jsx)(t.code,{children:"{{code}}"})," placeholder in the SMS template with a verification code. Therefore, please ensure that the template has a placeholder reserved."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Some countries and regions may not allow sending unapproved content via SMS due to compliance requirements. SMS templates need to be registered and approved by the SMS provider before they can be used. In such cases, the content might be indexed by template ID to the corresponding template."})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},15658:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var n=s(30758);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);