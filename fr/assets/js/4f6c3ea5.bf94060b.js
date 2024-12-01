"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[21490],{94541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"authorization/organization-template/protect-api-reources","title":"Prot\xe9ger la ressource API avec le mod\xe8le d\'organisation","description":"En plus de Prot\xe9ger votre API qui s\xe9curise les ressources en s\'assurant qu\'un JWT valide est pr\xe9sent, les r\xf4les d\'Organisation peuvent \xe9galement \xeatre appliqu\xe9s pour filtrer les Port\xe9es. Dans cet article, nous nous concentrerons sur la fa\xe7on dont le R\xf4le d\'Organisation affecte la d\xe9l\xe9gation et la validation des Port\xe9es dans votre flux d\'Authentification.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/authorization/organization-template/protect-api-reources.mdx","sourceDirName":"authorization/organization-template","slug":"/authorization/organization-template/protect-api-reources","permalink":"/fr/authorization/organization-template/protect-api-reources","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/authorization/organization-template/protect-api-reources.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Prot\xe9ger les ressources de l\'organisation","permalink":"/fr/authorization/organization-template/protect-organization-resources"},"next":{"title":"Autorisation","permalink":"/fr/authorization/"}}');var r=t(86070),i=t(15658);const a={sidebar_position:3},s="Prot\xe9ger la ressource API avec le mod\xe8le d'organisation",l={},c=[{value:"Le param\xe8tre suppl\xe9mentaire <code>organization_id</code>",id:"le-param\xe8tre-suppl\xe9mentaire-organization_id",level:2},{value:"Configuration du client",id:"configuration-du-client",level:2},{value:"Validation du serveur API",id:"validation-du-serveur-api",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",mermaid:"mermaid",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"prot\xe9ger-la-ressource-api-avec-le-mod\xe8le-dorganisation",children:"Prot\xe9ger la ressource API avec le mod\xe8le d'organisation"})}),"\n",(0,r.jsxs)(n.p,{children:["En plus de ",(0,r.jsx)(n.a,{href:"/authorization/api-resources/protect-your-api",children:"Prot\xe9ger votre API"})," qui s\xe9curise les ressources en s'assurant qu'un JWT valide est pr\xe9sent, les r\xf4les d'Organisation peuvent \xe9galement \xeatre appliqu\xe9s pour filtrer les Port\xe9es. Dans cet article, nous nous concentrerons sur la fa\xe7on dont le R\xf4le d'Organisation affecte la d\xe9l\xe9gation et la validation des Port\xe9es dans votre flux d'Authentification."]}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant Logto\n    participant API\n\n    Note over Client,API: Requ\xeate de jeton\n    Client->>Logto: POST /oidc/token\n    Note right of Client: avec ressource, organization_id,<br/>et Port\xe9es demand\xe9es\n\n    Note over Logto: V\xe9rifier que l'utilisateur appartient \xe0<br/>l'Organisation sp\xe9cifi\xe9e\n    Logto--\x3e>Client: Retourne le jeton d\u2019acc\xe8s JWT\n    Note left of Logto: Le jeton contient :<br/>- Revendications JWT standard<br/>- organization_id<br/>- Port\xe9es filtr\xe9es par R\xf4le d'Organisation\n\n    Note over Client,API: Requ\xeate API\n    Client->>API: Requ\xeate avec jeton Bearer\n\n    Note over API: Valider le jeton JWT :<br/>1. Validation JWT standard<br/>2. V\xe9rifier organization_id<br/>3. V\xe9rifier les Port\xe9es\n\n    alt Jeton invalide\n        API--\x3e>Client: 401 Non autoris\xe9\n    else Jeton valide\n        alt organization_id et Port\xe9e valides\n            API--\x3e>Client: Ressource prot\xe9g\xe9e\n        else Sinon\n            API--\x3e>Client: 403 Interdit\n        end\n    end"}),"\n",(0,r.jsxs)(n.h2,{id:"le-param\xe8tre-suppl\xe9mentaire-organization_id",children:["Le param\xe8tre suppl\xe9mentaire ",(0,r.jsx)(n.code,{children:"organization_id"})]}),"\n",(0,r.jsxs)(n.p,{children:["En plus de la requ\xeate de jeton d\u2019acc\xe8s normale, dans le diagramme, nous ajoutons un param\xe8tre suppl\xe9mentaire ",(0,r.jsx)(n.code,{children:"organization_id"}),", cela indique \xe0 Logto de restreindre les Port\xe9es aux R\xf4les d'une Organisation sp\xe9cifique."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration-du-client",children:"Configuration du client"}),"\n",(0,r.jsxs)(n.p,{children:["Si vous utilisez le SDK de Logto, vous pouvez ajouter ",(0,r.jsx)(n.code,{children:"organization_id"})," comme deuxi\xe8me param\xe8tre de la m\xe9thode ",(0,r.jsx)(n.code,{children:"getAccessToken"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const accessToken = await logto.getAccessToken('https://my-resource.com/api', 'org_1');\n\n// Ou obtenir directement les Revendications\nconst accessTokenClaims = await logto.getAccessTokenClaims('https://my-resource.com/api', 'org_1');\nconsole.log(accessTokenClaims.organization_id); // 'org_1'\nconsole.log(accessTokenClaims.aud); // 'https://my-resource.com/api'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Ensuite, seules les Port\xe9es h\xe9rit\xe9es des R\xf4les de cette Organisation seront incluses dans le jeton d\u2019acc\xe8s, ainsi qu'une Revendication suppl\xe9mentaire ",(0,r.jsx)(n.code,{children:"organization_id"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"validation-du-serveur-api",children:"Validation du serveur API"}),"\n",(0,r.jsxs)(n.p,{children:["En plus de la validation normale du jeton d\u2019acc\xe8s JWT, vous devrez ajouter un niveau suppl\xe9mentaire pour v\xe9rifier si ",(0,r.jsx)(n.code,{children:"organization_id"})," est pr\xe9sent et valide."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},15658:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(30758);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);