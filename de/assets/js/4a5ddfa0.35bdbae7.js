"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[97940],{45359:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>d,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"end-user-flows/consent-screen","title":"Zustimmungsbildschirm","description":"Was ist der Zustimmungsbildschirm?","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/consent-screen.mdx","sourceDirName":"end-user-flows","slug":"/end-user-flows/consent-screen","permalink":"/de/end-user-flows/consent-screen","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/consent-screen.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Direkte Anmeldung","permalink":"/de/end-user-flows/authentication-parameters/direct-sign-in"},"next":{"title":"Abmeldung","permalink":"/de/end-user-flows/sign-out"}}');var r=i(86070),s=i(15658);const d={sidebar_position:5},o="Zustimmungsbildschirm",u={},a=[{value:"Was ist der Zustimmungsbildschirm?",id:"was-ist-der-zustimmungsbildschirm",level:2},{value:"Wann sieht der Benutzer den Zustimmungsbildschirm in Logto?",id:"wann-sieht-der-benutzer-den-zustimmungsbildschirm-in-logto",level:2},{value:"Wie konfiguriert man den Zustimmungsbildschirm?",id:"wie-konfiguriert-man-den-zustimmungsbildschirm",level:2},{value:"Verwandte Ressourcen",id:"verwandte-ressourcen",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components},{Url:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"zustimmungsbildschirm",children:"Zustimmungsbildschirm"})}),"\n",(0,r.jsx)(n.h2,{id:"was-ist-der-zustimmungsbildschirm",children:"Was ist der Zustimmungsbildschirm?"}),"\n",(0,r.jsx)(n.p,{children:'Stell dir vor, du meldest dich bei Logto mit deinem Google-Konto an. Wenn du auf die Schaltfl\xe4che "Mit Google anmelden" klickst, wirst du zur Anmeldeseite von Google weitergeleitet. Nachdem du deine Google-Anmeldedaten eingegeben hast, wirst du aufgefordert, Logto die Erlaubnis zu erteilen, auf deine Google-Kontoinformationen zuzugreifen. Dies ist der Zustimmungsbildschirm f\xfcr Benutzer.'}),"\n",(0,r.jsxs)(n.p,{children:["Diese Seite nennen wir den Benutzer-",(0,r.jsx)(n.strong,{children:"Zustimmungsbildschirm"})," oder ",(0,r.jsx)(n.strong,{children:"Zustimmungsseite"}),". Es handelt sich um einen standardm\xe4\xdfigen ",(0,r.jsx)(n.a,{href:"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications",children:"OIDC / OAuth 2.0-Ablauf"}),", der es Benutzern erm\xf6glicht, ",(0,r.jsx)(n.a,{href:"/integrate-logto/third-party-applications",children:"Drittanbieteranwendungen"})," die Erlaubnis zu erteilen, in ihrem Namen auf ihre Daten zuzugreifen. Sein Hauptzweck besteht darin, Benutzer \xfcber die Erfassung, Verarbeitung und Nutzung ihrer pers\xf6nlichen Daten zu informieren und ihre ausdr\xfcckliche Zustimmung oder Einwilligung f\xfcr diese Aktivit\xe4ten einzuholen."]}),"\n",(0,r.jsxs)(n.p,{children:["Auf einem Zustimmungsbildschirm werden den Benutzern in der Regel ",(0,r.jsx)(n.a,{href:"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding#customize-the-branding-information",children:"Informationen"})," \xfcber die Arten von Daten pr\xe4sentiert, die gesammelt werden, wie sie verwendet werden und ob sie mit Dritten geteilt werden. Diese Informationen sind entscheidend f\xfcr die Transparenz und erm\xf6glichen es den Benutzern, fundierte Entscheidungen \xfcber ihre Privatsph\xe4re und Datensicherheit zu treffen."]}),"\n",(0,r.jsxs)(n.p,{children:["Zustimmungsseiten sind besonders wichtig im Kontext von Datenschutzbestimmungen wie der Datenschutz-Grundverordnung (",(0,r.jsx)(n.a,{href:"https://gdpr-info.eu/art-4-gdpr/",children:"DSGVO"}),") in der Europ\xe4ischen Union oder dem California Consumer Privacy Act (",(0,r.jsx)(n.a,{href:"https://oag.ca.gov/privacy/ccpa",children:"CCPA"}),") in den Vereinigten Staaten, die von Organisationen verlangen, klare und eindeutige Zustimmung von Benutzern einzuholen, bevor sie ihre pers\xf6nlichen Informationen verarbeiten."]}),"\n",(0,r.jsx)(n.h2,{id:"wann-sieht-der-benutzer-den-zustimmungsbildschirm-in-logto",children:"Wann sieht der Benutzer den Zustimmungsbildschirm in Logto?"}),"\n",(0,r.jsxs)(n.p,{children:["Wie bereits erw\xe4hnt, erscheint der Zustimmungsbildschirm, wenn Benutzer sich bei Logto mit einem Drittanbieter-Identit\xe4tsanbieter (IdP) wie Google, Facebook oder Apple anmelden. In diesem Setup fungiert Logto als Dienstanbieter (SP), der Zugriff auf Benutzerinformationen vom IdP anfordert. Der Zustimmungsbildschirm wird in der Regel angezeigt, wenn der ",(0,r.jsx)(n.a,{href:"https://auth.wiki/service-provider",children:"SP"})," und der ",(0,r.jsx)(n.a,{href:"https://auth.wiki/identity-provider",children:"IdP"})," separate Organisationen sind und die Benutzerautorisierung erforderlich ist, um den Datenaustausch zu erleichtern."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Zustimmungsbildschirm Logto als SP",src:i(47448).A+"",width:"2750",height:"1328"})}),"\n",(0,r.jsxs)(n.p,{children:["\xc4hnlich wird in Logto, wenn Logto als IdP fungiert, der Zustimmungsbildschirm angezeigt, wenn Benutzer sich bei einer ",(0,r.jsx)(n.a,{href:"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications",children:(0,r.jsx)(n.strong,{children:"OIDC / OAuth-Drittanbieteranwendung"})})," anmelden, die mit Logto integriert ist. Dieser Bildschirm informiert die Benutzer \xfcber die Daten, die die Anwendung anfordert, und bittet um ihre Erlaubnis, fortzufahren. Benutzer k\xf6nnen die angeforderten Berechtigungen \xfcberpr\xfcfen und entscheiden, ob sie der Anwendung die Autorisierung erteilen m\xf6chten."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Zustimmungsbildschirm Logto als IdP",src:i(39436).A+"",width:"2502",height:"1392"})}),"\n",(0,r.jsx)(n.h2,{id:"wie-konfiguriert-man-den-zustimmungsbildschirm",children:"Wie konfiguriert man den Zustimmungsbildschirm?"}),"\n",(0,r.jsx)(n.p,{children:"Der Logto-Zustimmungsablauf erm\xf6glicht es dir, Anmeldungen von Drittanbieteranwendungen zu autorisieren. Du kannst das Branding und die Berechtigungsanfragen f\xfcr jede OIDC-Drittanbieteranwendung anpassen."}),"\n",(0,r.jsxs)(n.p,{children:["Erfahre mehr \xfcber die Einrichtung der ",(0,r.jsx)(n.a,{href:"/integrate-logto/third-party-applications/",children:"Drittanbieteranwendung"})," und die Konfiguration des ",(0,r.jsx)(n.a,{href:"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding/",children:"Zustimmungsbildschirms"})," in Logto."]}),"\n",(0,r.jsx)(n.h2,{id:"verwandte-ressourcen",children:"Verwandte Ressourcen"}),"\n",(0,r.jsx)(t,{href:"https://www.youtube.com/watch?v=sW-C7SRt9OM",children:(0,r.jsx)(n.p,{children:"Verwandle deinen Dienst in einen sicheren OIDC IdP mit Zustimmungsbildschirm."})}),"\n",(0,r.jsx)(t,{href:"https://blog.logto.io/user-consent-screen",children:(0,r.jsx)(n.p,{children:"Einf\xfchrung in den Benutzer-Zustimmungsbildschirm."})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},39436:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/consent-screen-logto-as-idp-275ecb52736d0849cb8f1e5587c265d8.png"},47448:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/consent-screen-logto-as-sp-adf12fcb5eef8db7f4b989b0376fa629.png"},15658:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var t=i(30758);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);