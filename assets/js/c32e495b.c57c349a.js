"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[29982],{11863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"end-user-flows/mfa/authenticator-app-otp","title":"Authenticator app OTP","description":"Concepts","source":"@site/docs/end-user-flows/mfa/authenticator-app-otp.md","sourceDirName":"end-user-flows/mfa","slug":"/end-user-flows/mfa/authenticator-app-otp","permalink":"/end-user-flows/mfa/authenticator-app-otp","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/end-user-flows/mfa/authenticator-app-otp.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Configure MFA","permalink":"/end-user-flows/mfa/configure-mfa"},"next":{"title":"Passkeys (WebAuthn)","permalink":"/end-user-flows/mfa/webauthn"}}');var s=n(86070),o=n(15658);const a={sidebar_position:2},r="Authenticator app OTP",c={},l=[{value:"Concepts",id:"concepts",level:2},{value:"Authentication flows",id:"authentication-flows",level:2},{value:"Authentication app OTP setup flows",id:"authentication-app-otp-setup-flows",level:3},{value:"Authentication app OTP verification flows",id:"authentication-app-otp-verification-flows",level:3}];function p(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"authenticator-app-otp",children:"Authenticator app OTP"})}),"\n",(0,s.jsx)(t.h2,{id:"concepts",children:"Concepts"}),"\n",(0,s.jsxs)(t.p,{children:["The Authenticator app, also referred to as the Software Token, is one of the most widely adopted ",(0,s.jsx)(t.a,{href:"https://auth.wiki/mfa",children:"MFA"})," methods. It generates temporary, ",(0,s.jsx)(t.a,{href:"https://auth.wiki/otp",children:"one-time passwords (OTP)"})," to enhance the security of online service authentication. Unlike physical hardware tokens, software tokens are typically applications or plugins that users install on their devices, be it a smartphone or a computer browser. Software tokens can operate locally on a single device or synchronize across various devices, depending on the authenticator's capabilities and individual user settings."]}),"\n",(0,s.jsx)(t.p,{children:"Popular examples of software tokens include Google Authenticator, Microsoft Authenticator, Duo, 1Password, Authy, and more."}),"\n",(0,s.jsx)(t.h2,{id:"authentication-flows",children:"Authentication flows"}),"\n",(0,s.jsx)(t.h3,{id:"authentication-app-otp-setup-flows",children:"Authentication app OTP setup flows"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"QR Code or Secret Key"}),": Users receive a QR code or a secret key from your service."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Add account"}),": Using their authenticator app, users scan the QR code or manually enter the secret key to add their account."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Dynamic one-time password"}),": The authenticator app displays a six-digit code that refreshes every 1-2 minutes for the added account."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Complete MFA setup"}),": Users enter this code within its validity into the MFA setup page, completing the setup of Authenticator App OTP for MFA."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"OTP set up flow",src:n(38378).A+"",width:"3986",height:"1520"})}),"\n",(0,s.jsx)(t.h3,{id:"authentication-app-otp-verification-flows",children:"Authentication app OTP verification flows"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Login attempt"}),": During login, users are prompted for MFA."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Retrieve OTP"}),": Open their authenticator app to retrieve the OTP for the respective account."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Enter OTP"}),": Users enter the OTP displayed in the app within its validity into the 2-step verification page."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Authentication"}),": The system verifies the OTP, granting access upon successful validation."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"OTP verification flow",src:n(69387).A+"",width:"2704",height:"1238"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},38378:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/otp-set-up-flow-69a6e5fe60cccaad368240770c1da3a9.png"},69387:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/otp-verification-flow-49801a8f920430d2f6e315eaef445545.png"},15658:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(30758);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);