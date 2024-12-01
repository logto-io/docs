"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[54418],{31904:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"integrations/email/http-mail/README","title":"Configurer la v\xe9rification par e-mail via un appel HTTP","description":"Le connecteur officiel Logto pour les e-mails HTTP.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrations/email/http-mail/README.mdx","sourceDirName":"integrations/email/http-mail","slug":"/integrations/http-email","permalink":"/fr/integrations/http-email","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrations/email/http-mail/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/http-email","sidebar_label":"HTTP Email","sidebar_custom_props":{"description":"Envoyer un e-mail via un appel HTTP."}},"sidebar":"integrationsSidebar","previous":{"title":"AWS Direct Mail","permalink":"/fr/integrations/aws-ses"},"next":{"title":"Mailgun","permalink":"/fr/integrations/mailgun"}}');var o=i(86070),r=i(15658),a=i(86676);const s={slug:"/integrations/http-email",sidebar_label:"HTTP Email",sidebar_custom_props:{description:"Envoyer un e-mail via un appel HTTP."}},l="Configurer la v\xe9rification par e-mail via un appel HTTP",c={},u=[...a.RM,{value:"Commencer",id:"commencer",level:2},{value:"Configurer le connecteur d&#39;e-mail HTTP",id:"configurer-le-connecteur-de-mail-http",level:2},{value:"Charge utile",id:"charge-utile",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"configurer-la-v\xe9rification-par-e-mail-via-un-appel-http",children:"Configurer la v\xe9rification par e-mail via un appel HTTP"})}),"\n",(0,o.jsx)(n.p,{children:"Le connecteur officiel Logto pour les e-mails HTTP."}),"\n",(0,o.jsx)(a.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"commencer",children:"Commencer"}),"\n",(0,o.jsx)(n.p,{children:"Le connecteur d'e-mail HTTP vous permet d'envoyer des e-mails via un appel HTTP. Pour utiliser le connecteur d'e-mail HTTP, vous devez disposer de votre propre service de messagerie qui expose une API HTTP pour l'envoi d'e-mails. Logto appellera cette API lorsqu'il devra envoyer un e-mail. Par exemple, lorsqu'un utilisateur s'inscrit, Logto appellera l'API HTTP pour envoyer un e-mail de v\xe9rification."}),"\n",(0,o.jsx)(n.h2,{id:"configurer-le-connecteur-de-mail-http",children:"Configurer le connecteur d'e-mail HTTP"}),"\n",(0,o.jsx)(n.p,{children:"Pour utiliser le connecteur d'e-mail HTTP, vous devez configurer un point de terminaison HTTP que Logto peut appeler. Et un jeton d\u2019Autorisation (Authorization) optionnel pour le point de terminaison."}),"\n",(0,o.jsx)(n.h2,{id:"charge-utile",children:"Charge utile"}),"\n",(0,o.jsx)(n.p,{children:"Le connecteur d'e-mail HTTP enverra la charge utile suivante au point de terminaison lorsqu'il devra envoyer un e-mail :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "to": "foo@logto.io",\n  "type": "SignIn",\n  "payload": {\n    "code": "123456"\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Vous pouvez trouver tous les types dans ",(0,o.jsx)(n.a,{href:"/connectors/email-connectors/built-in-email-service/#unified-email-templates",children:"Mod\xe8le d'e-mail"}),", et la d\xe9finition compl\xe8te du type ",(0,o.jsx)(n.code,{children:"SendMessageData"})," dans ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/toolkit/connector-kit/src/types/passwordless.ts",children:"connector-kit"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},86676:(e,n,i)=>{i.d(n,{Ay:()=>s,RM:()=>r});var t=i(86070),o=i(15658);const r=[];function a(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Dans ce guide, nous supposons que vous avez des connaissances de base sur les Connecteurs Logto. Si ce n'est pas le cas, consultez le guide ",(0,t.jsx)(n.a,{href:"/connectors",children:"Configurer les connecteurs"})," pour commencer."]})})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(30758);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);