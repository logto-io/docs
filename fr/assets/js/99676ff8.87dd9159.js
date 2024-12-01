"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[13794],{18541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"concepts/opaque-token","title":"Jeton opaque","description":"Au cours du processus d\'authentification, si aucune ressource n\'est sp\xe9cifi\xe9e, Logto \xe9mettra un jeton d\u2019acc\xe8s (opaque token) au lieu d\'un JWT. Le jeton opaque est une cha\xeene al\xe9atoire et il est beaucoup plus court qu\'un JWT :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/concepts/opaque-token.mdx","sourceDirName":"concepts","slug":"/concepts/opaque-token","permalink":"/fr/concepts/opaque-token","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/concepts/opaque-token.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"Configuration","permalink":"/fr/concepts/core-service/configuration"},"next":{"title":"Concepts","permalink":"/fr/concepts/"}}');var o=t(86070),s=t(15658);const c={sidebar_position:6},r="Jeton opaque",a={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"jeton-opaque",children:"Jeton opaque"})}),"\n",(0,o.jsx)(n.p,{children:"Au cours du processus d'authentification, si aucune ressource n'est sp\xe9cifi\xe9e, Logto \xe9mettra un jeton d\u2019acc\xe8s (opaque token) au lieu d'un JWT. Le jeton opaque est une cha\xeene al\xe9atoire et il est beaucoup plus court qu'un JWT :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "access_token": "some-random-string", // jeton opaque\n  "expires_in": 3600,\n  "id_token": "eyJhbGc...aBc", // JWT\n  "scope": "openid profile email",\n  "token_type": "Bearer"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Le jeton opaque peut \xeatre utilis\xe9 pour appeler le ",(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"point de terminaison userinfo"})," et acc\xe9der aux ressources prot\xe9g\xe9es qui n\xe9cessitent une Authentification. Puisqu'il ne s'agit pas d'un JWT, comment le serveur de ressources peut-il le valider ?"]}),"\n",(0,o.jsxs)(n.p,{children:["Logto fournit un ",(0,o.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7662.html",children:"point de terminaison d'introspection"})," qui peut \xeatre utilis\xe9 pour valider les jetons opaques. Par d\xe9faut, le point de terminaison d'introspection est ",(0,o.jsx)(n.code,{children:"/oidc/token/introspection"})," et accepte les requ\xeates ",(0,o.jsx)(n.code,{children:"POST"}),". Le param\xe8tre suivant est requis :"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"token"})," : le jeton opaque \xe0 valider"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Le point de terminaison n\xe9cessite \xe9galement une Authentification client. Vous pouvez utiliser l'une des m\xe9thodes suivantes :"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Authentification HTTP Basic : Utilisez l'en-t\xeate ",(0,o.jsx)(n.code,{children:"Authorization"})," avec la valeur ",(0,o.jsx)(n.code,{children:"Basic <base64-encoded-credentials>"}),". Les informations d'identification doivent \xeatre l'ID client et le secret client s\xe9par\xe9s par un deux-points (",(0,o.jsx)(n.code,{children:":"}),") et encod\xe9s en base64."]}),"\n",(0,o.jsxs)(n.li,{children:["Authentification HTTP POST : Utilisez les param\xe8tres ",(0,o.jsx)(n.code,{children:"client_id"})," et ",(0,o.jsx)(n.code,{children:"client_secret"})," :","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"client_id"})," : l'ID client de l'application qui a demand\xe9 le jeton"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"client_secret"})," : le secret client de l'application qui a demand\xe9 le jeton"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"L'ID client (ID de l'application) et le secret client (secret de l'application) peuvent \xeatre les informations d'identification de l'application de toute application \"web traditionnelle\" ou \"machine \xe0 machine\" dans Logto. Le point de terminaison d'introspection renverra une erreur si les informations d'identification sont invalides."}),"\n",(0,o.jsx)(n.p,{children:"Le point de terminaison d'introspection renvoie un objet JSON avec les Revendications du jeton :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "active": true, // si le jeton est valide ou non\n  "sub": "1234567890" // le sujet du jeton (l\'ID utilisateur)\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Si le jeton est invalide, le champ ",(0,o.jsx)(n.code,{children:"active"})," sera ",(0,o.jsx)(n.code,{children:"false"})," et le champ ",(0,o.jsx)(n.code,{children:"sub"})," sera omis."]}),"\n",(0,o.jsx)(n.p,{children:"Voici un exemple non normatif de la requ\xeate d'introspection :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request POST 'https://[tenant-id].logto.app/oidc/token/introspection' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'token=some-random-string' \\\n  --data-urlencode 'client_id=1234567890' \\\n  --data-urlencode 'client_secret=1234567890'\n"})}),"\n",(0,o.jsxs)(n.p,{children:["N'oubliez pas de remplacer ",(0,o.jsx)(n.code,{children:"[tenant-id]"})," par votre ID de locataire."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},15658:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var i=t(30758);const o={},s=i.createContext(o);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);