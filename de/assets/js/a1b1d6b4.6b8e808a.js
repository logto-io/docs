"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[13878],{65297:(e,n,i)=>{i.d(n,{Ay:()=>d,RM:()=>s});var r=i(86070),t=i(15658);const s=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["F\xfcr weitere Informationen \xfcber SSO und wie man SSO in Logto konfiguriert, schaue bitte in der ",(0,r.jsx)(n.a,{href:"/connectors/enterprise-connectors",children:"Enterprise SSO (SAML & OIDC)"})," Dokumentation nach, um loszulegen."]})})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},86621:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"integrations/sso/google-workspace/README","title":"Single Sign-On mit Google Workspace einrichten","description":"Mit minimalem Konfigurationsaufwand erm\xf6glicht dieser Connector die Integration mit Microsoft Entra ID f\xfcr Enterprise SSO.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/integrations/sso/google-workspace/README.mdx","sourceDirName":"integrations/sso/google-workspace","slug":"/integrations/google-workspace","permalink":"/de/integrations/google-workspace","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/integrations/sso/google-workspace/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/google-workspace","sidebar_label":"Google Workspace","sidebar_custom_props":{"description":"Einheitliches und sicheres Management des Benutzerzugangs innerhalb des Google-\xd6kosystems.","logoFilename":"google.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Microsoft Entra ID (SAML)","permalink":"/de/integrations/entra-id-saml"},"next":{"title":"OIDC (Enterprise)","permalink":"/de/integrations/oidc-sso"}}');var t=i(86070),s=i(15658),o=i(65297);const d={slug:"/integrations/google-workspace",sidebar_label:"Google Workspace",sidebar_custom_props:{description:"Einheitliches und sicheres Management des Benutzerzugangs innerhalb des Google-\xd6kosystems.",logoFilename:"google.svg"}},l="Single Sign-On mit Google Workspace einrichten",c={},a=[...o.RM,{value:"Schritt 1: Ein neues Projekt auf der Google Cloud Platform erstellen",id:"schritt-1-ein-neues-projekt-auf-der-google-cloud-platform-erstellen",level:2},{value:"Schritt 2: Den Zustimmungsbildschirm f\xfcr deine Anwendung konfigurieren",id:"schritt-2-den-zustimmungsbildschirm-f\xfcr-deine-anwendung-konfigurieren",level:2},{value:"Schritt 3: Eine neue OAuth-Anmeldeinformation erstellen",id:"schritt-3-eine-neue-oauth-anmeldeinformation-erstellen",level:2},{value:"Schritt 4: Logto-Connector mit den Client-Anmeldeinformationen einrichten",id:"schritt-4-logto-connector-mit-den-client-anmeldeinformationen-einrichten",level:2},{value:"Schritt 5: Zus\xe4tzliche Berechtigungen (Optional)",id:"schritt-5-zus\xe4tzliche-berechtigungen-optional",level:2},{value:"Schritt 6: E-Mail-Domains festlegen und den SSO-Connector aktivieren",id:"schritt-6-e-mail-domains-festlegen-und-den-sso-connector-aktivieren",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"single-sign-on-mit-google-workspace-einrichten",children:"Single Sign-On mit Google Workspace einrichten"})}),"\n",(0,t.jsx)(n.p,{children:"Mit minimalem Konfigurationsaufwand erm\xf6glicht dieser Connector die Integration mit Microsoft Entra ID f\xfcr Enterprise SSO."}),"\n",(0,t.jsx)(o.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"schritt-1-ein-neues-projekt-auf-der-google-cloud-platform-erstellen",children:"Schritt 1: Ein neues Projekt auf der Google Cloud Platform erstellen"}),"\n",(0,t.jsxs)(n.p,{children:["Bevor du Google Workspace als Authentifizierungsanbieter verwenden kannst, musst du ein Projekt in der ",(0,t.jsx)(n.a,{href:"https://console.developers.google.com/",children:"Google API Console"})," einrichten, um OAuth 2.0-Anmeldeinformationen zu erhalten. Wenn du bereits ein Projekt hast, kannst du diesen Schritt \xfcberspringen. Andernfalls erstelle ein neues Projekt unter deiner Google-Organisation."]}),"\n",(0,t.jsx)(n.h2,{id:"schritt-2-den-zustimmungsbildschirm-f\xfcr-deine-anwendung-konfigurieren",children:"Schritt 2: Den Zustimmungsbildschirm f\xfcr deine Anwendung konfigurieren"}),"\n",(0,t.jsx)(n.p,{children:"Um eine neue OIDC-Anmeldeinformation zu erstellen, musst du den Zustimmungsbildschirm f\xfcr deine Anwendung konfigurieren."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Gehe zur Seite ",(0,t.jsx)(n.a,{href:"https://console.cloud.google.com/apis/credentials/consent",children:"OAuth-Zustimmungsbildschirm"})," und w\xe4hle den Benutzertyp ",(0,t.jsx)(n.code,{children:"Intern"})," aus. Dadurch wird die OAuth-Anwendung nur f\xfcr Benutzer innerhalb deiner Organisation verf\xfcgbar."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Google Workspace consent screen user type.webp",src:i(97577).A+"",width:"2604",height:"1363"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["F\xfclle die Einstellungen des ",(0,t.jsx)(n.code,{children:"Zustimmungsbildschirms"})," gem\xe4\xdf den Anweisungen auf der Seite aus. Du musst die folgenden Mindestinformationen angeben:"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Anwendungsname"}),": Der Name deiner Anwendung. Er wird auf dem Zustimmungsbildschirm angezeigt."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Support-E-Mail"}),": Die Support-E-Mail deiner Anwendung. Sie wird auf dem Zustimmungsbildschirm angezeigt."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Google Workspace consent screen settings.webp",src:i(22250).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Setze die ",(0,t.jsx)(n.code,{children:"Berechtigungen (Scopes)"})," f\xfcr deine Anwendung. Um die Identit\xe4tsinformationen und die E-Mail-Adresse des Benutzers ordnungsgem\xe4\xdf vom IdP abzurufen, m\xfcssen Logto SSO-Connectors die folgenden Berechtigungen vom IdP gew\xe4hren:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Google Workspace consent screen scopes.webp",src:i(66466).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"openid"}),": Diese Berechtigung ist f\xfcr die OIDC-Authentifizierung erforderlich. Sie wird verwendet, um das ID-Token abzurufen und Zugriff auf den userInfo-Endpunkt des IdP zu erhalten."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"profile"}),": Diese Berechtigung ist erforderlich, um auf die grundlegenden Profilinformationen des Benutzers zuzugreifen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"email"}),": Diese Berechtigung ist erforderlich, um auf die E-Mail-Adresse des Benutzers zuzugreifen."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Klicke auf die Schaltfl\xe4che ",(0,t.jsx)(n.code,{children:"Speichern"}),", um die Einstellungen des Zustimmungsbildschirms zu speichern."]}),"\n",(0,t.jsx)(n.h2,{id:"schritt-3-eine-neue-oauth-anmeldeinformation-erstellen",children:"Schritt 3: Eine neue OAuth-Anmeldeinformation erstellen"}),"\n",(0,t.jsxs)(n.p,{children:["Gehe zur Seite ",(0,t.jsx)(n.a,{href:"https://console.cloud.google.com/apis/credentials",children:"Anmeldeinformationen"})," und klicke auf die Schaltfl\xe4che ",(0,t.jsx)(n.code,{children:"Anmeldeinformationen erstellen"}),". W\xe4hle die Option ",(0,t.jsx)(n.code,{children:"OAuth-Client-ID"})," aus dem Dropdown-Men\xfc, um eine neue OAuth-Anmeldeinformation f\xfcr deine Anwendung zu erstellen."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Google Workspace create credentials.webp",src:i(36036).A+"",width:"2604",height:"1363"})}),"\n",(0,t.jsx)(n.p,{children:"Fahre mit der Einrichtung der OAuth-Anmeldeinformation fort, indem du die folgenden Informationen ausf\xfcllst:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Google Workspace credentials config.webp",src:i(7552).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["W\xe4hle ",(0,t.jsx)(n.code,{children:"Webanwendung"})," als Anwendungstyp aus."]}),"\n",(0,t.jsxs)(n.li,{children:["F\xfclle den ",(0,t.jsx)(n.code,{children:"Namen"})," deiner Client-Anwendung aus, zum Beispiel ",(0,t.jsx)(n.code,{children:"Logto SSO Connector"}),". Dies hilft dir, die Anmeldeinformationen in der Zukunft zu identifizieren."]}),"\n",(0,t.jsxs)(n.li,{children:["F\xfclle die ",(0,t.jsx)(n.code,{children:"Autorisierte Weiterleitungs-URIs"})," mit der Logto-Callback-URI aus. Dies ist die URI, zu der Google den Browser des Benutzers nach erfolgreicher Authentifizierung umleitet. Nachdem sich ein Benutzer erfolgreich beim IdP authentifiziert hat, leitet der IdP den Browser des Benutzers zusammen mit einem Autorisierungscode zur\xfcck zu dieser festgelegten URI. Logto wird den Authentifizierungsprozess basierend auf dem von dieser URI erhaltenen Autorisierungscode abschlie\xdfen."]}),"\n",(0,t.jsxs)(n.li,{children:["F\xfclle die ",(0,t.jsx)(n.code,{children:"Autorisierte JavaScript-Urspr\xfcnge"})," mit dem Ursprung der Logto-Callback-URI aus. Dies stellt sicher, dass nur deine Logto-Anwendung Anfragen an den Google OAuth-Server senden kann."]}),"\n",(0,t.jsxs)(n.li,{children:["Klicke auf die Schaltfl\xe4che ",(0,t.jsx)(n.code,{children:"Erstellen"}),", um die OAuth-Anmeldeinformation zu erstellen."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"schritt-4-logto-connector-mit-den-client-anmeldeinformationen-einrichten",children:"Schritt 4: Logto-Connector mit den Client-Anmeldeinformationen einrichten"}),"\n",(0,t.jsx)(n.p,{children:"Nach erfolgreicher Erstellung der OAuth-Anmeldeinformation erh\xe4ltst du ein Eingabeaufforderungsfenster mit der Client-ID und dem Client-Geheimnis."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Google Workspace client credentials.webp",src:i(79887).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(n.p,{children:["Kopiere die ",(0,t.jsx)(n.code,{children:"Client-ID"})," und das ",(0,t.jsx)(n.code,{children:"Client-Geheimnis"})," und f\xfclle die entsprechenden Felder im ",(0,t.jsx)(n.code,{children:"Verbindung"}),"-Tab des Logto SSO-Connectors aus."]}),"\n",(0,t.jsx)(n.p,{children:"Jetzt hast du erfolgreich einen Google Workspace SSO-Connector auf Logto konfiguriert."}),"\n",(0,t.jsx)(n.h2,{id:"schritt-5-zus\xe4tzliche-berechtigungen-optional",children:"Schritt 5: Zus\xe4tzliche Berechtigungen (Optional)"}),"\n",(0,t.jsxs)(n.p,{children:["Verwende das Feld ",(0,t.jsx)(n.code,{children:"Berechtigung (Scope)"}),", um zus\xe4tzliche Berechtigungen zu deiner OAuth-Anfrage hinzuzuf\xfcgen. Dadurch kannst du mehr Informationen vom Google OAuth-Server anfordern. Bitte sieh dir die ",(0,t.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/scopes",children:"Google OAuth-Berechtigungen"})," Dokumentation f\xfcr weitere Informationen an."]}),"\n",(0,t.jsxs)(n.p,{children:["Unabh\xe4ngig von den benutzerdefinierten Berechtigungseinstellungen sendet Logto immer die Berechtigungen ",(0,t.jsx)(n.code,{children:"openid"}),", ",(0,t.jsx)(n.code,{children:"profile"})," und ",(0,t.jsx)(n.code,{children:"email"})," an den IdP. Dies stellt sicher, dass Logto die Identit\xe4tsinformationen und die E-Mail-Adresse des Benutzers ordnungsgem\xe4\xdf abrufen kann."]}),"\n",(0,t.jsx)(n.h2,{id:"schritt-6-e-mail-domains-festlegen-und-den-sso-connector-aktivieren",children:"Schritt 6: E-Mail-Domains festlegen und den SSO-Connector aktivieren"}),"\n",(0,t.jsxs)(n.p,{children:["Gib die ",(0,t.jsx)(n.code,{children:"E-Mail-Domains"})," deiner Organisation im ",(0,t.jsx)(n.code,{children:"SSO-Erfahrung"}),"-Tab des Logto-Connectors an. Dadurch wird der SSO-Connector als Authentifizierungsmethode f\xfcr diese Benutzer aktiviert."]}),"\n",(0,t.jsx)(n.p,{children:"Benutzer mit E-Mail-Adressen in den angegebenen Domains werden zur Verwendung deines SSO-Connectors als einzige Authentifizierungsmethode umgeleitet."}),"\n",(0,t.jsxs)(n.p,{children:["F\xfcr weitere Informationen \xfcber den Google Workspace SSO-Connector, sieh dir bitte den ",(0,t.jsx)(n.a,{href:"https://developers.google.com/identity/openid-connect/openid-connect",children:"Google OpenID Connector"})," an."]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},79887:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/google_workspace_client_credentials-04b46e076f40fb0bd433529cb59d6f46.webp"},66466:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/google_workspace_consent_screen_scopes-eb352a52b1f1056877a6b93edf68a0bb.webp"},22250:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/google_workspace_consent_screen_settings-e7eb6c977bb7d90015b38d1d9f84673e.webp"},97577:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/google_workspace_consent_screen_user_type-f5da0e8e1d400973d4702ce1f553fd27.webp"},36036:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/google_workspace_create_credentials-4b2f8a7bd881d99886aa1131503ea227.webp"},7552:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/google_workspace_credentials_config-0a4787d6350ce1a7c3e0c337bb0726c6.webp"},15658:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var r=i(30758);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);