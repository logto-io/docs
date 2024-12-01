"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[51410],{19422:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"logto-oss/deployment-and-configuration","title":"D\xe9ploiement et configuration","description":"Dans l\'article pr\xe9c\xe9dent, nous avons couvert les bases pour d\xe9marrer rapidement avec Logto. Cet article approfondit le sujet, en se concentrant sur les meilleures pratiques et les \xe9tapes de configuration d\xe9taill\xe9es pour d\xe9ployer Logto dans un environnement de production.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/deployment-and-configuration.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/deployment-and-configuration","permalink":"/fr/logto-oss/deployment-and-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/deployment-and-configuration.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Commencer avec OSS","permalink":"/fr/logto-oss/get-started-with-oss"},"next":{"title":"Logto CLI","permalink":"/fr/logto-oss/using-cli/"}}');var s=o(86070),t=o(15658);const i={sidebar_position:2},a="D\xe9ploiement et configuration",d={},c=[{value:"Variables d&#39;environnement",id:"variables-denvironnement",level:2},{value:"Essentiels",id:"essentiels",level:3},{value:"HTTPS",id:"https",level:3},{value:"Proxy inverse",id:"proxy-inverse",level:3},{value:"Conteneurisation",id:"conteneurisation",level:2},{value:"Dossier de connecteurs partag\xe9",id:"dossier-de-connecteurs-partag\xe9",level:3},{value:"Modification de la base de donn\xe9es",id:"modification-de-la-base-de-donn\xe9es",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"d\xe9ploiement-et-configuration",children:"D\xe9ploiement et configuration"})}),"\n",(0,s.jsxs)(n.p,{children:["Dans l'article pr\xe9c\xe9dent, nous avons couvert les bases pour ",(0,s.jsx)(n.a,{href:"/logto-oss/get-started-with-oss",children:"d\xe9marrer rapidement avec Logto"}),". Cet article approfondit le sujet, en se concentrant sur les meilleures pratiques et les \xe9tapes de configuration d\xe9taill\xe9es pour d\xe9ployer Logto dans un environnement de production."]}),"\n",(0,s.jsx)(n.h2,{id:"variables-denvironnement",children:"Variables d'environnement"}),"\n",(0,s.jsxs)(n.p,{children:["Nous utilisons un ensemble g\xe9n\xe9r\xe9 de variables d'environnement dans notre d\xe9mo (",(0,s.jsx)(n.code,{children:"docker-compose.yml"}),"), que vous devriez remplacer par les v\xf4tres et maintenir la coh\xe9rence entre plusieurs instances de Logto."]}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez d\xe9finir les variables d'environnement directement ou placer un fichier ",(0,s.jsx)(n.code,{children:".env"})," \xe0 la racine du projet Logto. Si vous testez avec Docker, consultez le fichier ",(0,s.jsx)(n.code,{children:".env"})," g\xe9n\xe9r\xe9 de l'image dans ",(0,s.jsx)(n.code,{children:"/etc/logto"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"essentiels",children:"Essentiels"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DB_URL"})," Le ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6",children:"DSN Postgres"})," pour la base de donn\xe9es Logto."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PORT"})," Le port auquel Logto \xe9coute. Par d\xe9faut ",(0,s.jsx)(n.code,{children:"3001"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ENDPOINT"})," Vous pouvez sp\xe9cifier une URL avec votre domaine personnalis\xe9 pour la production (par exemple, ",(0,s.jsx)(n.code,{children:"ENDPOINT=https://logto.domain.com"}),"). Cela affectera \xe9galement la valeur de l'",(0,s.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier",children:"identifiant de l'\xe9metteur OIDC"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Activer la console d'administration"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ADMIN_PORT"})," Le port auquel la console d'administration Logto \xe9coute. Par d\xe9faut ",(0,s.jsx)(n.code,{children:"3002"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ADMIN_ENDPOINT"})," Vous pouvez sp\xe9cifier une URL avec votre domaine personnalis\xe9 pour la production (par exemple, ",(0,s.jsx)(n.code,{children:"ADMIN_ENDPOINT=https://admin.domain.com"}),"). Cela affectera \xe9galement la valeur des URIs de redirection de la console d'administration."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"D\xe9sactiver la console d'administration"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ADMIN_DISABLE_LOCALHOST"})," R\xe9glez-le sur ",(0,s.jsx)(n.code,{children:"1"})," ou ",(0,s.jsx)(n.code,{children:"true"})," pour fermer le port de la console d'administration. Si ",(0,s.jsx)(n.code,{children:"ADMIN_ENDPOINT"})," n'est pas d\xe9fini, cela d\xe9sactivera compl\xe8tement la console d'administration."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Pour plus de d\xe9tails sur les variables d'environnement, voir ",(0,s.jsx)(n.a,{href:"/concepts/core-service/configuration/",children:"Configuration"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"https",children:"HTTPS"}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez utiliser Node.js pour servir HTTPS directement ou configurer un proxy / \xe9quilibreur HTTPS devant Node.js. Voir ",(0,s.jsx)(n.a,{href:"/concepts/core-service/configuration/#enabling-https",children:"Activer HTTPS"})," pour plus de d\xe9tails."]}),"\n",(0,s.jsx)(n.h3,{id:"proxy-inverse",children:"Proxy inverse"}),"\n",(0,s.jsx)(n.p,{children:"Si vous souhaitez utiliser un proxy inverse sur votre serveur, par exemple Nginx ou Apache, vous devez mapper les ports 3001 et 3002 s\xe9par\xe9ment dans vos param\xe8tres de proxy pass. En supposant que vous utilisez Nginx, votre point de terminaison d'authentification Logto fonctionne sur le port 3001, et votre console d'administration Logto fonctionne sur le port 3002, mettez la configuration suivante dans nginx.conf :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"server {\n  listen 443 ssl;\n  server_name <your_endpoint_url>; // par exemple, auth.your-domain.com\n  ...\n\n  location / {\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto https;\n\n    proxy_pass http://127.0.0.1:3001;\n  }\n\n  ssl_certificate <path-to-your-certificate-for-auth-endpoint>;\n  ssl_certificate_key <path-to-your-certificate-key-for-auth-endpoint>\n  ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Ajoutez ensuite une configuration similaire pour votre console d'administration :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"server {\n  listen 443 ssl;\n  server_name <your_admin_endpoint_url>; // par exemple, admin.your-domain.com\n  ...\n\n  location / {\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto https;\n\n    proxy_pass http://127.0.0.1:3002;\n  }\n\n  ssl_certificate <path-to-your-certificate-for-admin-endpoint>;\n  ssl_certificate_key <path-to-your-certificate-key-for-admin-endpoint>\n  ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Rechargez la configuration Nginx pour prendre en compte les derni\xe8res modifications :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"nginx -s reload\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Tout est pr\xeat. Ouvrez le navigateur et visitez ",(0,s.jsx)(n.code,{children:"https://admin.your-domain.com"}),", vous devriez voir la page d'accueil de Logto."]}),"\n",(0,s.jsx)(n.h2,{id:"conteneurisation",children:"Conteneurisation"}),"\n",(0,s.jsx)(n.p,{children:"Pour la production, vous pouvez utiliser Docker pour conteneuriser Logto. Vous pouvez trouver le Dockerfile dans le r\xe9pertoire racine du projet. Si vous souhaitez ex\xe9cuter plusieurs instances de Logto, par exemple, d\xe9ployer Logto dans un cluster Kubernetes, il y a quelques \xe9tapes suppl\xe9mentaires \xe0 suivre."}),"\n",(0,s.jsx)(n.h3,{id:"dossier-de-connecteurs-partag\xe9",children:"Dossier de connecteurs partag\xe9"}),"\n",(0,s.jsxs)(n.p,{children:["Par d\xe9faut, Logto cr\xe9era un dossier ",(0,s.jsx)(n.code,{children:"connectors"})," dans le r\xe9pertoire racine du dossier ",(0,s.jsx)(n.code,{children:"core"}),". Nous recommandons de partager le dossier entre plusieurs instances de Logto, vous devez monter le dossier ",(0,s.jsx)(n.code,{children:"packages/core/connectors"})," dans le conteneur et ex\xe9cuter ",(0,s.jsx)(n.code,{children:"npm run cli connector add -- --official"})," pour d\xe9ployer les connecteurs."]}),"\n",(0,s.jsxs)(n.p,{children:["Voici un exemple minimal de ",(0,s.jsx)(n.code,{children:"deployment"})," pour Kubernetes :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: logto\n  namespace: default\nspec:\n  template:\n    spec:\n      volumes:\n        - name: connectors\n          emptyDir: {}\n      initContainers:\n        - image: ghcr.io/logto-io/logto\n          command:\n            - /bin/sh\n          args:\n            - '-c'\n            - 'npm run cli connector add -- --official'\n          name: init\n          volumeMounts:\n            - name: connectors\n              mountPath: /etc/logto/packages/core/connectors\n      containers:\n        - image: ghcr.io/logto-io/logto\n          name: logto\n          volumeMounts:\n            - name: connectors\n              mountPath: /etc/logto/packages/core/connectors\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Dans cet exemple, nous cr\xe9ons un r\xe9pertoire vide en tant que volume et le montons dans les conteneurs. Ensuite, nous ex\xe9cutons ",(0,s.jsx)(n.code,{children:"npm run cli connector add -- --official"})," dans le conteneur d'initialisation pour t\xe9l\xe9charger les connecteurs. Enfin, chaque conteneur partagera le m\xeame dossier de connecteurs avec nos connecteurs officiels d\xe9j\xe0 \xe0 l'int\xe9rieur."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Ceci est un exemple de yaml, pour ex\xe9cuter Logto, vous devez d\xe9finir correctement les variables d'environnement."})}),"\n",(0,s.jsx)(n.p,{children:'Pour la production, vous pouvez remplacer le volume "empty dir" par un volume persistant, et faire le travail "init" \xe0 votre mani\xe8re, vous savez ce que vous faites !'}),"\n",(0,s.jsx)(n.h3,{id:"modification-de-la-base-de-donn\xe9es",children:"Modification de la base de donn\xe9es"}),"\n",(0,s.jsx)(n.p,{children:"Similaire aux connecteurs, la modification de la base de donn\xe9es doit \xeatre ex\xe9cut\xe9e dans une seule instance. Vous pouvez utiliser un job pour ex\xe9cuter le script de modification."}),"\n",(0,s.jsxs)(n.p,{children:["La variable d'environnement ",(0,s.jsx)(n.code,{children:"CI=true"})," est n\xe9cessaire lorsque la modification est ex\xe9cut\xe9e de mani\xe8re non interactive."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: alteration\nspec:\n  template:\n    spec:\n      containers:\n        - name: alteration\n          image: ghcr.io/logto-io/logto\n          imagePullPolicy: Always\n          env:\n            - name: CI\n              value: 'true'\n            - name: DB_URL\n              value: postgresql://user:password@localhost:5432/logto\n          command:\n            - /bin/sh\n          args:\n            - '-c'\n            - 'npm run alteration deploy latest'\n      restartPolicy: Never\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Voir ",(0,s.jsx)(n.a,{href:"/logto-oss/using-cli/database-alteration/",children:"Modification de la base de donn\xe9es"})," pour plus de d\xe9tails sur la commande de modification."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},15658:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var r=o(30758);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);