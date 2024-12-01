"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[79156],{1469:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"organizations/organization-management","title":"Organisation verwalten","description":"Dieser Abschnitt behandelt, wie Entwickler ihre Organisationen \xfcber die Logto Console oder die Logto Management API verwalten, nicht wie Organisationsadministratoren selbstst\xe4ndig ihre Mitglieder innerhalb deiner App verwalten. Um mehr dar\xfcber zu erfahren, wie du deine Organisationserfahrung entwickeln kannst, schaue dir bitte diesen Leitfaden an.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/organizations/organization-management.mdx","sourceDirName":"organizations","slug":"/organizations/organization-management","permalink":"/de/organizations/organization-management","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/organizations/organization-management.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Organisationsdatenstruktur","permalink":"/de/organizations/organization-data"},"next":{"title":"Just-in-Time-Bereitstellung","permalink":"/de/organizations/just-in-time-provisioning"}}');var r=i(86070),a=i(15658);const s={sidebar_position:3},o="Organisation verwalten",l={},d=[{value:"Verwaltung \xfcber die Logto Console",id:"verwaltung-\xfcber-die-logto-console",level:2},{value:"Eine Organisation erstellen",id:"eine-organisation-erstellen",level:3},{value:"Grundeinstellungen",id:"grundeinstellungen",level:3},{value:"MFA f\xfcr Organisationsmitglieder erforderlich machen",id:"mfa-f\xfcr-organisationsmitglieder-erforderlich-machen",level:3},{value:"Just-in-Time-Bereitstellung",id:"just-in-time-bereitstellung",level:3},{value:"Organisationsmitglieder verwalten",id:"organisationsmitglieder-verwalten",level:3},{value:"Organisation M2M-Anwendungen verwalten",id:"organisation-m2m-anwendungen-verwalten",level:3},{value:"Verwaltung \xfcber die Logto Management API",id:"verwaltung-\xfcber-die-logto-management-api",level:2}];function u(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components},{CloudLink:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"organisation-verwalten",children:"Organisation verwalten"})}),"\n",(0,r.jsxs)(n.p,{children:["Dieser Abschnitt behandelt, wie Entwickler ihre Organisationen \xfcber die Logto Console oder die Logto Management API verwalten, nicht wie Organisationsadministratoren selbstst\xe4ndig ihre Mitglieder innerhalb deiner App verwalten. Um mehr dar\xfcber zu erfahren, wie du deine Organisationserfahrung entwickeln kannst, schaue dir bitte ",(0,r.jsx)(n.a,{href:"/end-user-flows/organization-experience/organization-management",children:"diesen Leitfaden"})," an."]}),"\n",(0,r.jsx)(n.h2,{id:"verwaltung-\xfcber-die-logto-console",children:"Verwaltung \xfcber die Logto Console"}),"\n",(0,r.jsx)(n.h3,{id:"eine-organisation-erstellen",children:"Eine Organisation erstellen"}),"\n",(0,r.jsxs)(n.p,{children:["Navigiere zu ",(0,r.jsx)(i,{to:"/organizations",children:"Console > Organisationen"}),' und klicke auf die Schaltfl\xe4che "Organisation erstellen".']}),"\n",(0,r.jsx)(n.h3,{id:"grundeinstellungen",children:"Grundeinstellungen"}),"\n",(0,r.jsx)(n.p,{children:"Du kannst die grundlegenden Attribute der Organisation wie Name, Beschreibung, Logo usw. konfigurieren."}),"\n",(0,r.jsx)(n.h3,{id:"mfa-f\xfcr-organisationsmitglieder-erforderlich-machen",children:"MFA f\xfcr Organisationsmitglieder erforderlich machen"}),"\n",(0,r.jsx)(n.p,{children:"Du kannst verlangen, dass alle Mitglieder einer Organisation MFA aktivieren. Dies ist eine Sicherheitsma\xdfnahme, um sicherzustellen, dass alle Mitglieder eine zus\xe4tzliche Schutzschicht beim Zugriff auf die Ressourcen der Organisation haben."}),"\n",(0,r.jsx)(n.p,{children:'Um diese Funktion zu aktivieren, gehe zur Detailseite der Organisation und schalte den "Multi-Faktor-Authentifizierung (MFA)"-Schalter ein.'}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Du musst ",(0,r.jsx)(n.a,{href:"/end-user-flows/mfa",children:"mindestens eine MFA-Methode aktivieren"}),", damit diese Funktion ordnungsgem\xe4\xdf funktioniert."]})}),"\n",(0,r.jsxs)(n.p,{children:["Sobald aktiviert, k\xf6nnen Mitglieder ohne konfigurierte MFA keine ",(0,r.jsx)(n.a,{href:"/authorization/organization-template/protect-organization-resources#step-2-fetch-organization-token",children:"Organisationstokens"})," austauschen, bis sie MFA eingerichtet haben."]}),"\n",(0,r.jsx)(n.p,{children:"Bitte beachte, dass:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Diese Funktion nur \xfcberpr\xfcft, ob der Benutzer MFA konfiguriert hat. Sie zwingt die Benutzer nicht, MFA beim Austausch von Zugangstokens zu verwenden."}),"\n",(0,r.jsx)(n.li,{children:"Diese Funktion nicht einschr\xe4nkt, welche MFA-Methoden Benutzer verwenden k\xf6nnen."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"just-in-time-bereitstellung",children:"Just-in-Time-Bereitstellung"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://auth.wiki/jit-provisioning",children:"Just-in-Time-Bereitstellung"})," f\xfcgt Benutzer automatisch zu einer Organisation hinzu, wenn sie sich zum ersten Mal bei der App anmelden. In Logto wird dies f\xfcr ",(0,r.jsx)(n.a,{href:"/end-user-flows/enterprise-sso",children:"Enterprise SSO"})," und E-Mail-Dom\xe4nen-basierte Bereitstellung unterst\xfctzt. Wenn Benutzer bestimmte Kriterien erf\xfcllen, wie z. B. die Anmeldung \xfcber einen bestimmten Enterprise IdP oder die Verwendung einer E-Mail mit einer bestimmten Dom\xe4ne, werden sie automatisch zur Organisation hinzugef\xfcgt."]}),"\n",(0,r.jsx)(n.p,{children:"Du kannst auch Standardrollen f\xfcr Mitglieder festlegen, wenn sie der Organisation beitreten."}),"\n",(0,r.jsxs)(n.p,{children:["F\xfcr weitere Details zur Just-in-Time-Bereitstellung und wie man sie einrichtet, siehe ",(0,r.jsx)(n.a,{href:"/organizations/just-in-time-provisioning",children:"diesen Abschnitt"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"organisationsmitglieder-verwalten",children:"Organisationsmitglieder verwalten"}),"\n",(0,r.jsx)(n.p,{children:"Benutzer k\xf6nnen eine oder mehrere Rollen innehaben. Beim Hinzuf\xfcgen von Mitgliedern zu einer Organisation hast du die M\xf6glichkeit, mehreren Benutzern gleichzeitig Rollen zuzuweisen. Wenn du diese Zuweisung leer l\xe4sst, erhalten die hinzugef\xfcgten Benutzer keine Rollen."}),"\n",(0,r.jsxs)(n.p,{children:["Auf der ",(0,r.jsx)(i,{to:"/users",children:" Console > Benutzerverwaltung > Benutzerdetailseite"})," kannst du sehen, zu welchen Organisationen der Benutzer geh\xf6rt und welche Organisationsrollen er hat."]}),"\n",(0,r.jsx)(n.h3,{id:"organisation-m2m-anwendungen-verwalten",children:"Organisation M2M-Anwendungen verwalten"}),"\n",(0,r.jsxs)(n.p,{children:["Maschine-zu-Maschine-Anwendungen k\xf6nnen ebenfalls zu Organisationen hinzugef\xfcgt werden. Du kannst ",(0,r.jsx)(n.a,{href:"/organizations/understand-how-organizations-work#organization-m2m-application",children:"Maschine-zu-Maschine-Anwendungen Rollen zuweisen"}),", wie du Benutzern Rollen zuweist."]}),"\n",(0,r.jsxs)(n.p,{children:["Auf der ",(0,r.jsx)(i,{to:"/applications",children:" Console > Anwendungen > Anwendungsdetailseite"})," kannst du sehen, mit welchen Organisationen die Anwendung verbunden ist und welche Organisationsrollen sie hat."]}),"\n",(0,r.jsx)(n.h2,{id:"verwaltung-\xfcber-die-logto-management-api",children:"Verwaltung \xfcber die Logto Management API"}),"\n",(0,r.jsxs)(n.p,{children:["Alles, was du in der Logto Console tun kannst, kann auch \xfcber die ",(0,r.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api",children:"Management API"})," durchgef\xfchrt werden. Dies umfasst, ist aber nicht beschr\xe4nkt auf:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Erstellen, l\xf6schen oder bearbeiten einer Organisation."}),"\n",(0,r.jsx)(n.li,{children:"Verwaltung der Organisationstemplate: Erstellen, l\xf6schen oder bearbeiten von Organisationsberechtigungen und -rollen."}),"\n",(0,r.jsx)(n.li,{children:"Mitglieder zu einer Organisation hinzuf\xfcgen oder aus einer Organisation entfernen."}),"\n",(0,r.jsx)(n.li,{children:"Zuweisen oder Entfernen der Organisationsrollen eines Benutzers."}),"\n",(0,r.jsx)(n.li,{children:"Maschine-zu-Maschine-Anwendungen zu einer Organisation hinzuf\xfcgen oder aus einer Organisation entfernen."}),"\n",(0,r.jsx)(n.li,{children:"Zuweisen oder Entfernen der Organisationsrollen einer Maschine-zu-Maschine-Anwendung."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Du kannst auch diesen Abschnitt nutzen, um die Management API zu verwenden, um mehr Organisationserfahrung und -verwaltung auf Organisationsebene zu erm\xf6glichen. ",(0,r.jsx)(n.a,{href:"/end-user-flows/organization-experience",children:"Mehr erfahren"})]}),"\n",(0,r.jsxs)(n.p,{children:["F\xfcr eine vollst\xe4ndige Liste der F\xe4higkeiten, siehe bitte unsere ",(0,r.jsx)(n.a,{href:"https://openapi.logto.io/group/endpoint-organizations",children:"API-Referenzen"}),"."]})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(30758);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);