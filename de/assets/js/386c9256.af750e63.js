"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[13167],{36006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"end-user-flows/enterprise-sso/enterprise-sso-identity","title":"Enterprise SSO-Identit\xe4t","description":"Verkn\xfcpfung von Enterprise SSO-Konten","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/enterprise-sso-identity.mdx","sourceDirName":"end-user-flows/enterprise-sso","slug":"/end-user-flows/enterprise-sso/enterprise-sso-identity","permalink":"/de/end-user-flows/enterprise-sso/enterprise-sso-identity","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/enterprise-sso-identity.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"IdP-initiiertes SSO","permalink":"/de/end-user-flows/enterprise-sso/idp-initiated-sso"},"next":{"title":"Multi-Faktor-Authentifizierung","permalink":"/de/end-user-flows/mfa/"}}');var i=t(86070),s=t(15658);const o={sidebar_position:3},d="Enterprise SSO-Identit\xe4t",l={},u=[{value:"Verkn\xfcpfung von Enterprise SSO-Konten",id:"verkn\xfcpfung-von-enterprise-sso-konten",level:2},{value:"Multi-Faktor-Authentifizierung (MFA) mit Enterprise SSO",id:"multi-faktor-authentifizierung-mfa-mit-enterprise-sso",level:2},{value:"L\xf6schen eines Enterprise Connectors",id:"l\xf6schen-eines-enterprise-connectors",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"enterprise-sso-identit\xe4t",children:"Enterprise SSO-Identit\xe4t"})}),"\n",(0,i.jsx)(n.h2,{id:"verkn\xfcpfung-von-enterprise-sso-konten",children:"Verkn\xfcpfung von Enterprise SSO-Konten"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Neue Benutzer melden sich mit Enterprise SSO an"})}),"\n",(0,i.jsxs)(n.p,{children:["Wenn sich ein neuer Benutzer mit einer neuen Enterprise SSO-Identit\xe4t anmeldet, erstellt Logto automatisch ein neues Benutzerkonto, das mit der Enterprise-Identit\xe4t verkn\xfcpft ist. ",(0,i.jsx)(n.code,{children:"prim\xe4re E-Mail"}),", ",(0,i.jsx)(n.code,{children:"Name"})," und ",(0,i.jsx)(n.code,{children:"Avatar"})," werden automatisch mit den vom IdP bereitgestellten Daten ausgef\xfcllt. Weitere zus\xe4tzliche Benutzerdaten werden im SSO-Identit\xe4tsprofil des Benutzers gespeichert."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Die Profilverkn\xfcpfungssituation kann unterschiedlich sein, wenn die ",(0,i.jsx)(n.a,{href:"/integrations/saml-sso#step-3-configure-user-attributes-mapping",children:"SAML-Attributzuordnung"})," nicht korrekt konfiguriert ist oder die Benutzer-E-Mail nicht vom Identit\xe4tsanbieter bereitgestellt wird."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Bestehende Benutzer melden sich mit Enterprise SSO an"})}),"\n",(0,i.jsx)(n.p,{children:"Wenn die Arbeits-E-Mail-Adresse, die mit der Enterprise SSO-Identit\xe4t verkn\xfcpft ist, mit einem bestehenden Benutzerkonto in Logto \xfcbereinstimmt, wird Logto die Enterprise SSO-Identit\xe4t automatisch mit dem bestehenden Benutzerkonto verkn\xfcpfen."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Sobald eine E-Mail-Domain mit einem Enterprise SSO-Connector verkn\xfcpft wurde, werden alle bestehenden Benutzer mit der angegebenen E-Mail-Domain darauf beschr\xe4nkt, sich mit dem Enterprise SSO-Connector anzumelden. Ihre vorherigen Anmeldemethoden werden blockiert, z. B. E-Mail/Passwort, E-Mail-Best\xe4tigungscode und soziale Anmeldemethoden."})}),"\n",(0,i.jsx)(n.h2,{id:"multi-faktor-authentifizierung-mfa-mit-enterprise-sso",children:"Multi-Faktor-Authentifizierung (MFA) mit Enterprise SSO"}),"\n",(0,i.jsxs)(n.p,{children:["Bei der Verwendung von Enterprise SSO werden MFA-Anforderungen typischerweise vom IdP verwaltet. In Logto werden alle authentifizierten Identit\xe4ten vom IdP als vertrauensw\xfcrdig angesehen, sodass die ",(0,i.jsx)(n.a,{href:"/end-user-flows/mfa",children:"MFA-Validierung"})," f\xfcr Benutzer, die sich \xfcber Enterprise SSO anmelden, um die Benutzererfahrung zu verbessern, umgangen wird. Es ist wichtig sicherzustellen, dass der MFA-Schutz auf der ",(0,i.jsx)(n.a,{href:"/end-user-flows/enterprise-sso#key-components-of-enterprise-sso",children:"IdP"}),"-Seite aktiviert ist."]}),"\n",(0,i.jsx)(n.h2,{id:"l\xf6schen-eines-enterprise-connectors",children:"L\xf6schen eines Enterprise Connectors"}),"\n",(0,i.jsx)(n.p,{children:"Wenn du einen Enterprise Connector aus Logto l\xf6schst:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Benutzerkonten bleiben bestehen"}),": Die Benutzerkonten werden nicht gel\xf6scht; nur ihre Verbindung zum Enterprise-Identit\xe4tsanbieter wird entfernt."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"N\xe4chstes Mal, wenn sich Benutzer anmelden"}),": Beim n\xe4chsten Anmeldeversuch dieser Benutzer werden sie aufgefordert, eine alternative Methode zu verwenden, wie die in Logto konfigurierte Standard-Anmeldemethode (z. B. E-Mail und Passwort). Wenn sie zuvor kein Passwort festgelegt haben, werden sie an dieser Stelle dazu angeleitet, eines zu erstellen."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"L\xf6schung des Benutzer-SSO-Identit\xe4tsprofils"}),": Die SSO-Identit\xe4t des Benutzers sowie die zugeh\xf6rigen Profildaten werden aus Logto gel\xf6scht."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},15658:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(30758);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);