"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[28412],{85309:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"logto-oss/get-started-with-oss","title":"Commencer avec OSS","description":"Guides de d\xe9marrage rapide pour l\'initialisation du service open-source (OSS) de Logto.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/get-started-with-oss.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/get-started-with-oss","permalink":"/fr/logto-oss/get-started-with-oss","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/get-started-with-oss.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"Guides de d\xe9marrage rapide pour l\'initialisation du service open-source (OSS) de Logto.","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Logto OSS","permalink":"/fr/logto-oss/"},"next":{"title":"D\xe9ploiement et configuration","permalink":"/fr/logto-oss/deployment-and-configuration"}}');var s=r(86070),t=r(15658),i=r(78551),l=r(77501);const a=r.p+"assets/images/gitpod-running-9ccf680a2482a3146703b6097d62f0a5.png",c={description:"Guides de d\xe9marrage rapide pour l'initialisation du service open-source (OSS) de Logto.",sidebar_position:1},u="Commencer avec OSS",d={},p=[{value:"GitPod",id:"gitpod",level:2},{value:"Local",id:"local",level:2},{value:"Cr\xe9er un compte",id:"cr\xe9er-un-compte",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"commencer-avec-oss",children:"Commencer avec OSS"})}),"\n",(0,s.jsx)(n.h2,{id:"gitpod",children:"GitPod"}),"\n",(0,s.jsxs)(n.p,{children:["Pour d\xe9marrer un espace de travail GitPod en ligne pour Logto, ",(0,s.jsx)("a",{href:"https://gitpod.io/#https://github.com/logto-io/demo",target:"_blank",rel:"noopener",children:"cliquez ici"}),". Attendez quelques instants, vous verrez un message comme :"]}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("img",{src:a,alt:"Gitpod est en cours d'ex\xe9cution",width:"720px",style:{borderRadius:"4px"}})}),"\n",(0,s.jsxs)(n.p,{children:["Logto utilise le port ",(0,s.jsx)(n.code,{children:"3001"})," pour son service principal et le port ",(0,s.jsx)(n.code,{children:"3002"})," pour la console d'administration interactive par d\xe9faut."]}),"\n",(0,s.jsxs)(n.p,{children:["Pour continuer votre parcours avec Logto, appuyez sur Ctrl (ou Cmd) et cliquez sur le lien qui commence par ",(0,s.jsx)(n.code,{children:"https://3002-..."}),". Profitez-en !"]}),"\n",(0,s.jsx)(n.h2,{id:"local",children:"Local"}),"\n",(0,s.jsx)(n.p,{children:"Les exigences mat\xe9rielles minimales recommand\xe9es pour h\xe9berger Logto sont :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"vCPU"})," : 2"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"M\xe9moire"})," : 8 GiB"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Disque"})," : 256 GiB"]}),"\n"]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsxs)(i.A,{value:"docker-compose",label:"Docker Compose",children:[(0,s.jsxs)(n.p,{children:["Docker Compose CLI est g\xe9n\xe9ralement fourni avec ",(0,s.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"}),"."]}),(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["N'utilisez pas notre commande docker compose pour la production ! \xc9tant donn\xe9 que nous avons actuellement une base de donn\xe9es Postgres int\xe9gr\xe9e avec l'application Logto dans ",(0,s.jsx)(n.code,{children:"docker-compose.yml"}),", chaque fois que vous r\xe9ex\xe9cutez la commande, une nouvelle instance de base de donn\xe9es sera cr\xe9\xe9e, et toutes les donn\xe9es pr\xe9c\xe9demment enregistr\xe9es seront perdues."]})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -fsSL https://raw.githubusercontent.com/logto-io/logto/HEAD/docker-compose.yml | docker compose -p logto -f - up\n"})}),(0,s.jsx)(n.p,{children:"Apr\xe8s une composition r\xe9ussie, vous verrez un message comme :"})]}),(0,s.jsxs)(i.A,{value:"docker",label:"Docker",children:[(0,s.jsx)("h3",{children:"\xc9tape 1"}),(0,s.jsxs)(n.p,{children:["Pr\xe9parez une instance ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"}),"@^14.0, et utilisez ",(0,s.jsx)(n.a,{href:"/logto-oss/using-cli",children:"Logto CLI"})," pour initialiser une base de donn\xe9es pour Logto :"]}),(0,s.jsxs)(l.A,{groupId:"cmd",children:[(0,s.jsx)(i.A,{value:"cli",label:"CLI",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"logto db seed\n"})})}),(0,s.jsx)(i.A,{value:"npx",label:"npx",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db seed\n"})})})]}),(0,s.jsx)("h3",{children:"\xc9tape 2"}),(0,s.jsx)(n.p,{children:"R\xe9cup\xe9rez l'image :"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# ghcr\ndocker pull ghcr.io/logto-io/logto:latest\n# DockerHub\ndocker pull svhd/logto:latest\n"})}),(0,s.jsx)("h3",{children:"\xc9tape 3"}),(0,s.jsxs)(n.p,{children:["Mappez les ports du conteneur vers le noyau et l'application d'administration de Logto, par exemple, ",(0,s.jsx)(n.code,{children:"3001:3001"})," et ",(0,s.jsx)(n.code,{children:"3002:3002"})," ; et d\xe9finissez les variables d'environnement suivantes pour le conteneur :"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"TRUST_PROXY_HEADER: 1 # R\xe9glez sur 1 si vous avez un proxy HTTPS (par exemple, Nginx) devant Logto\nENDPOINT: https://<your-logto-domain> # (Optionnel) Remplacez par l'URL de votre point de terminaison Logto si vous utilisez un domaine personnalis\xe9\nADMIN_ENDPOINT: https://<your-logto-admin-domain> # (Optionnel) Remplacez par l'URL de votre administration Logto si vous utilisez un domaine personnalis\xe9\nDB_URL: postgres://username:password@your_postgres_url:port/db_name # Remplacez par votre DSN Postgres\n"})}),(0,s.jsx)(n.p,{children:"Ex\xe9cutez le conteneur avec toutes les variables d'environnement ci-dessus :"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run \\\n  --name logto \\\n  -p 3001:3001 \\\n  -p 3002:3002 \\\n  -e TRUST_PROXY_HEADER=1 \\\n  -e ENDPOINT=https://<your-logto-domain> \\\n  -e ADMIN_ENDPOINT=https://<your-logto-admin-domain> \\\n  -e DB_URL=postgres://username:password@your_postgres_url:port/db_name \\\n  ghcr.io/logto-io/logto:latest\n"})}),(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si vous utilisez Docker Hub, utilisez ",(0,s.jsx)(n.code,{children:"svhd/logto:latest"})," au lieu de ",(0,s.jsx)(n.code,{children:"ghcr.io/logto-io/logto:latest"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Utilisez ",(0,s.jsx)(n.code,{children:"host.docker.internal"})," ou ",(0,s.jsx)(n.code,{children:"172.17.0.1"})," dans ",(0,s.jsx)(n.code,{children:"DB_URL"})," pour faire r\xe9f\xe9rence \xe0 l'IP de l'h\xf4te."]}),"\n"]})}),(0,s.jsx)(n.p,{children:"Enfin, vous verrez un message comme :"})]}),(0,s.jsxs)(i.A,{value:"npm",label:"npm-init",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Pr\xe9requis"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," ",(0,s.jsx)(n.code,{children:"^18.12.0"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://postgresql.org/",children:"PostgreSQL"})," ",(0,s.jsx)(n.code,{children:"^14.0"})]}),"\n"]}),(0,s.jsx)(n.p,{children:"Les versions sup\xe9rieures fonctionnent g\xe9n\xe9ralement mais ne sont pas garanties."}),(0,s.jsx)(n.p,{children:"Nous recommandons d'utiliser une nouvelle base de donn\xe9es vide d\xe9di\xe9e \xe0 Logto, bien que ce ne soit pas une exigence stricte."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"T\xe9l\xe9charger et d\xe9marrer"})}),(0,s.jsx)(n.p,{children:"Dans votre terminal :"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm init @logto@latest\n"})}),(0,s.jsx)(n.p,{children:"Une fois que vous avez termin\xe9 le processus d'initialisation et d\xe9marr\xe9 Logto, vous verrez un message comme :"})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"L'application principale fonctionne sur http://localhost:3001\nL'application principale fonctionne sur https://your-domain-url\nL'application d'administration fonctionne sur http://localhost:3002\nL'application d'administration fonctionne sur https://your-admin-domain-url\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Rendez-vous sur ",(0,s.jsx)(n.code,{children:"http://localhost:3002/"})," pour continuer votre parcours avec Logto. Profitez-en !"]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Utiliser une URL alternative pour le t\xe9l\xe9chargement"}),(0,s.jsxs)(n.p,{children:["Si vous souhaitez sp\xe9cifier une URL pour le fichier zip de Logto, utilisez l'option ",(0,s.jsx)(n.code,{children:"--download-url"}),". Par exemple :"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm init @logto@latest -- --download-url=https://github.com/logto-io/logto/releases/download/v1.2.2/logto.tar.gz\n"})}),(0,s.jsxs)(n.p,{children:["Notez que le ",(0,s.jsx)(n.code,{children:"--"})," suppl\xe9mentaire est n\xe9cessaire pour que NPM passe les arguments."]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Configuration (optionnelle)"}),(0,s.jsxs)(n.p,{children:["Logto utilise des variables d'environnement pour la configuration, avec la prise en charge du fichier ",(0,s.jsx)(n.code,{children:".env"}),". Voir ",(0,s.jsx)(n.a,{href:"/concepts/core-service/configuration",children:"Configuration"})," pour une utilisation d\xe9taill\xe9e et la liste compl\xe8te des variables."]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Consultez ",(0,s.jsx)(n.a,{href:"/concepts/core-service",children:"Core service"})," si vous souhaitez des contr\xf4les plus avanc\xe9s ou un acc\xe8s programmatique \xe0 Logto."]})}),"\n",(0,s.jsx)(n.h2,{id:"cr\xe9er-un-compte",children:"Cr\xe9er un compte"}),"\n",(0,s.jsx)(n.p,{children:"Une fois que vous avez h\xe9berg\xe9 avec succ\xe8s Logto sur votre serveur, cliquez sur \"Cr\xe9er un compte\" sur la page d'accueil. Gardez \xe0 l'esprit que la version open-source de Logto ne permet la cr\xe9ation d'un seul compte lors du lancement initial et ne prend pas en charge plusieurs comptes. Le processus de cr\xe9ation de compte est limit\xe9 aux combinaisons de nom d'utilisateur et de mot de passe."})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},78551:(e,n,r)=>{r.d(n,{A:()=>i});r(30758);var o=r(13526);const s={tabItem:"tabItem_PGP0"};var t=r(86070);function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,o.A)(s.tabItem,i),hidden:r,children:n})}},77501:(e,n,r)=>{r.d(n,{A:()=>y});var o=r(30758),s=r(13526),t=r(65052),i=r(25557),l=r(77469),a=r(50873),c=r(62230),u=r(60196);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:o,default:s}}=e;return{value:n,label:r,attributes:o,default:s}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,a.aZ)(t),(0,o.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace({...s.location,search:n.toString()})}),[t,s])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,t=p(e),[i,a]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:t}))),[c,d]=m({queryString:r,groupId:s}),[g,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,t]=(0,u.Dv)(r);return[s,(0,o.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:s}),v=(()=>{const e=c??g;return h({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{v&&a(v)}),[v]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),x(e)}),[d,x,t]),tabValues:t}}var x=r(13887);const v={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var j=r(86070);function f(e){let{className:n,block:r,selectedValue:o,selectValue:i,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),u=e=>{const n=e.currentTarget,r=a.indexOf(n),s=l[r].value;s!==o&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;n=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;n=a[r]??a[a.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>a.push(e),onKeyDown:d,onClick:u,...t,className:(0,s.A)("tabs__item",v.tabItem,t?.className,{"tabs__item--active":o===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function L(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,j.jsx)(f,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,j.jsx)(L,{...e,children:d(e.children)},String(n))}},15658:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var o=r(30758);const s={},t=o.createContext(s);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);