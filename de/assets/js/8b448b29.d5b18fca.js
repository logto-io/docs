"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[19708],{61660:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"end-user-flows/mfa/authenticator-app-otp","title":"Authenticator-App OTP","description":"Konzepte","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/mfa/authenticator-app-otp.md","sourceDirName":"end-user-flows/mfa","slug":"/end-user-flows/mfa/authenticator-app-otp","permalink":"/de/end-user-flows/mfa/authenticator-app-otp","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/mfa/authenticator-app-otp.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"MFA konfigurieren","permalink":"/de/end-user-flows/mfa/configure-mfa"},"next":{"title":"Passkeys (WebAuthn)","permalink":"/de/end-user-flows/mfa/webauthn"}}');var r=t(86070),s=t(15658);const a={sidebar_position:2},o="Authenticator-App OTP",u={},l=[{value:"Konzepte",id:"konzepte",level:2},{value:"Authentifizierungsabl\xe4ufe",id:"authentifizierungsabl\xe4ufe",level:2},{value:"Authenticator-App OTP-Einrichtungsabl\xe4ufe",id:"authenticator-app-otp-einrichtungsabl\xe4ufe",level:3},{value:"Authenticator-App OTP-Verifizierungsabl\xe4ufe",id:"authenticator-app-otp-verifizierungsabl\xe4ufe",level:3}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"authenticator-app-otp",children:"Authenticator-App OTP"})}),"\n",(0,r.jsx)(n.h2,{id:"konzepte",children:"Konzepte"}),"\n",(0,r.jsxs)(n.p,{children:["Die Authenticator-App, auch als Software-Token bezeichnet, ist eine der am weitesten verbreiteten ",(0,r.jsx)(n.a,{href:"https://auth.wiki/mfa",children:"MFA"}),"-Methoden. Sie generiert tempor\xe4re, ",(0,r.jsx)(n.a,{href:"https://auth.wiki/otp",children:"Einmalpassw\xf6rter (OTP)"}),", um die Sicherheit der Authentifizierung bei Online-Diensten zu erh\xf6hen. Im Gegensatz zu physischen Hardware-Token sind Software-Token in der Regel Anwendungen oder Plugins, die Benutzer auf ihren Ger\xe4ten installieren, sei es ein Smartphone oder ein Computerbrowser. Software-Token k\xf6nnen lokal auf einem einzelnen Ger\xe4t betrieben werden oder sich je nach den F\xe4higkeiten des Authenticators und den individuellen Benutzereinstellungen \xfcber verschiedene Ger\xe4te synchronisieren."]}),"\n",(0,r.jsx)(n.p,{children:"Beliebte Beispiele f\xfcr Software-Token sind Google Authenticator, Microsoft Authenticator, Duo, 1Password, Authy und mehr."}),"\n",(0,r.jsx)(n.h2,{id:"authentifizierungsabl\xe4ufe",children:"Authentifizierungsabl\xe4ufe"}),"\n",(0,r.jsx)(n.h3,{id:"authenticator-app-otp-einrichtungsabl\xe4ufe",children:"Authenticator-App OTP-Einrichtungsabl\xe4ufe"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"QR-Code oder geheimer Schl\xfcssel"}),": Benutzer erhalten einen QR-Code oder einen geheimen Schl\xfcssel von deinem Dienst."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Konto hinzuf\xfcgen"}),": Mit ihrer Authenticator-App scannen Benutzer den QR-Code oder geben den geheimen Schl\xfcssel manuell ein, um ihr Konto hinzuzuf\xfcgen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Dynamisches Einmalpasswort"}),": Die Authenticator-App zeigt einen sechsstelligen Code an, der sich alle 1-2 Minuten f\xfcr das hinzugef\xfcgte Konto aktualisiert."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"MFA-Einrichtung abschlie\xdfen"}),": Benutzer geben diesen Code innerhalb seiner G\xfcltigkeit auf der MFA-Einrichtungsseite ein und schlie\xdfen damit die Einrichtung des Authenticator-App OTP f\xfcr MFA ab."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"OTP-Einrichtungsablauf",src:t(73746).A+"",width:"3986",height:"1520"})}),"\n",(0,r.jsx)(n.h3,{id:"authenticator-app-otp-verifizierungsabl\xe4ufe",children:"Authenticator-App OTP-Verifizierungsabl\xe4ufe"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Anmeldeversuch"}),": W\xe4hrend der Anmeldung werden Benutzer zur MFA aufgefordert."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"OTP abrufen"}),": \xd6ffne ihre Authenticator-App, um das OTP f\xfcr das jeweilige Konto abzurufen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"OTP eingeben"}),": Benutzer geben das in der App angezeigte OTP innerhalb seiner G\xfcltigkeit auf der Seite zur 2-Schritt-Verifizierung ein."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Authentifizierung"}),": Das System \xfcberpr\xfcft das OTP und gew\xe4hrt bei erfolgreicher Validierung den Zugriff."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"OTP-Verifizierungsablauf",src:t(71091).A+"",width:"2704",height:"1238"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},73746:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/otp-set-up-flow-69a6e5fe60cccaad368240770c1da3a9.png"},71091:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/otp-verification-flow-49801a8f920430d2f6e315eaef445545.png"},15658:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(30758);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);