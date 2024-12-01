"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[46765],{63205:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"end-user-flows/enterprise-sso/enterprise-sso-identity","title":"Identit\xe9 SSO d\'entreprise","description":"Liaison de compte SSO d\'entreprise","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/enterprise-sso-identity.mdx","sourceDirName":"end-user-flows/enterprise-sso","slug":"/end-user-flows/enterprise-sso/enterprise-sso-identity","permalink":"/fr/end-user-flows/enterprise-sso/enterprise-sso-identity","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/enterprise-sso-identity.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"IdP-initiated SSO","permalink":"/fr/end-user-flows/enterprise-sso/idp-initiated-sso"},"next":{"title":"Authentification multi-facteurs","permalink":"/fr/end-user-flows/mfa/"}}');var i=t(86070),r=t(15658);const o={sidebar_position:3},d="Identit\xe9 SSO d'entreprise",a={},u=[{value:"Liaison de compte SSO d&#39;entreprise",id:"liaison-de-compte-sso-dentreprise",level:2},{value:"Authentification multi-facteurs (MFA) avec SSO d&#39;entreprise",id:"authentification-multi-facteurs-mfa-avec-sso-dentreprise",level:2},{value:"Suppression d&#39;un connecteur d&#39;entreprise",id:"suppression-dun-connecteur-dentreprise",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"identit\xe9-sso-dentreprise",children:"Identit\xe9 SSO d'entreprise"})}),"\n",(0,i.jsx)(s.h2,{id:"liaison-de-compte-sso-dentreprise",children:"Liaison de compte SSO d'entreprise"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Nouveaux utilisateurs se connectant avec SSO d'entreprise"})}),"\n",(0,i.jsxs)(s.p,{children:["Lorsqu'un nouvel utilisateur s'inscrit avec une nouvelle identit\xe9 SSO d'entreprise, Logto cr\xe9era automatiquement un nouveau compte utilisateur associ\xe9 \xe0 l'identit\xe9 d'entreprise. ",(0,i.jsx)(s.code,{children:"primary email"}),", ",(0,i.jsx)(s.code,{children:"name"})," et ",(0,i.jsx)(s.code,{children:"avatar"})," seront automatiquement remplis avec les donn\xe9es fournies par le fournisseur d'identit\xe9 (IdP). Les autres donn\xe9es de profil utilisateur suppl\xe9mentaires seront stock\xe9es sous le profil d'identit\xe9 SSO de l'utilisateur."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["La situation de liaison de profil pourrait \xeatre diff\xe9rente lorsque ",(0,i.jsx)(s.a,{href:"/integrations/saml-sso#step-3-configure-user-attributes-mapping",children:"le mappage des attributs SAML"})," n'est pas correctement configur\xe9 ou que l'email de l'utilisateur n'est pas fourni par le fournisseur d'identit\xe9."]})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Utilisateurs existants se connectant avec SSO d'entreprise"})}),"\n",(0,i.jsx)(s.p,{children:"Si l'adresse email professionnelle associ\xe9e \xe0 l'identit\xe9 SSO d'entreprise correspond \xe0 un compte utilisateur existant dans Logto, Logto liera automatiquement l'identit\xe9 SSO d'entreprise au compte utilisateur existant."}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Une fois qu'un domaine de messagerie a \xe9t\xe9 associ\xe9 \xe0 un connecteur SSO d'entreprise, tous les utilisateurs existants avec le domaine de messagerie sp\xe9cifi\xe9 seront restreints \xe0 se connecter avec le connecteur SSO d'entreprise. Leurs m\xe9thodes de connexion pr\xe9c\xe9dentes seront bloqu\xe9es. Par exemple, email / mot de passe, code de v\xe9rification par email et m\xe9thodes de connexion sociale."})}),"\n",(0,i.jsx)(s.h2,{id:"authentification-multi-facteurs-mfa-avec-sso-dentreprise",children:"Authentification multi-facteurs (MFA) avec SSO d'entreprise"}),"\n",(0,i.jsxs)(s.p,{children:["Lors de l'utilisation du SSO d'entreprise, les exigences MFA sont g\xe9n\xe9ralement g\xe9r\xe9es par l'IdP. Dans Logto, toutes les identit\xe9s authentifi\xe9es par l'IdP sont consid\xe9r\xe9es comme fiables, donc la ",(0,i.jsx)(s.a,{href:"/end-user-flows/mfa",children:"validation MFA"})," est contourn\xe9e pour les utilisateurs se connectant via SSO d'entreprise afin d'am\xe9liorer l'exp\xe9rience utilisateur. Il est essentiel de s'assurer que la protection MFA est activ\xe9e du c\xf4t\xe9 de l'",(0,i.jsx)(s.a,{href:"/end-user-flows/enterprise-sso#key-components-of-enterprise-sso",children:"IdP"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"suppression-dun-connecteur-dentreprise",children:"Suppression d'un connecteur d'entreprise"}),"\n",(0,i.jsx)(s.p,{children:"Lorsque vous supprimez un connecteur d'entreprise de Logto :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Les comptes utilisateurs restent"})," : Les comptes utilisateurs ne sont pas supprim\xe9s ; seul leur lien avec le fournisseur d'identit\xe9 d'entreprise est supprim\xe9."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"La prochaine fois que les utilisateurs se connectent"})," : La prochaine fois que ces utilisateurs tenteront de se connecter, ils seront invit\xe9s \xe0 utiliser une m\xe9thode alternative, telle que la m\xe9thode de connexion standard configur\xe9e dans Logto (par exemple, email et mot de passe). S'ils n'ont pas pr\xe9c\xe9demment d\xe9fini de mot de passe, ils seront guid\xe9s pour en cr\xe9er un \xe0 ce moment-l\xe0."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Suppression du profil d'identit\xe9 SSO de l'utilisateur"})," : L'identit\xe9 SSO de l'utilisateur ainsi que les donn\xe9es de profil associ\xe9es seront supprim\xe9es de Logto."]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},15658:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>d});var n=t(30758);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);