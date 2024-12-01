"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[27098],{49907:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"logto-oss/get-started-with-oss","title":"Get started with OSS","description":"Quick start guides for Logto open-source service (OSS) initialization.","source":"@site/docs/logto-oss/get-started-with-oss.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/get-started-with-oss","permalink":"/logto-oss/get-started-with-oss","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/logto-oss/get-started-with-oss.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"Quick start guides for Logto open-source service (OSS) initialization.","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Logto OSS","permalink":"/logto-oss/"},"next":{"title":"Deployment and configuration","permalink":"/logto-oss/deployment-and-configuration"}}');var r=o(86070),s=o(15658),a=o(78551),i=o(77501);const l=o.p+"assets/images/gitpod-running-9ccf680a2482a3146703b6097d62f0a5.png",c={description:"Quick start guides for Logto open-source service (OSS) initialization.",sidebar_position:1},d="Get started with OSS",u={},h=[{value:"GitPod",id:"gitpod",level:2},{value:"Local",id:"local",level:2},{value:"Create an account",id:"create-an-account",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"get-started-with-oss",children:"Get started with OSS"})}),"\n",(0,r.jsx)(t.h2,{id:"gitpod",children:"GitPod"}),"\n",(0,r.jsxs)(t.p,{children:["To start an online GitPod workspace for Logto, ",(0,r.jsx)("a",{href:"https://gitpod.io/#https://github.com/logto-io/demo",target:"_blank",rel:"noopener",children:"click here"}),". Wait a few moment, you'll see the message like:"]}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("img",{src:l,alt:"Gitpod is running",width:"720px",style:{borderRadius:"4px"}})}),"\n",(0,r.jsxs)(t.p,{children:["Logto uses port ",(0,r.jsx)(t.code,{children:"3001"})," for its core service and port ",(0,r.jsx)(t.code,{children:"3002"})," for the interactive Admin Console by default."]}),"\n",(0,r.jsxs)(t.p,{children:["To continue your Logto journey, press Ctrl (or Cmd) and click the link that starts with ",(0,r.jsx)(t.code,{children:"https://3002-..."}),". Enjoy!"]}),"\n",(0,r.jsx)(t.h2,{id:"local",children:"Local"}),"\n",(0,r.jsx)(t.p,{children:"The minimum recommended hardware requirements for hosting Logto are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"vCPU"}),": 2"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Memory"}),": 8 GiB"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Disk"}),": 256 GiB"]}),"\n"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsxs)(a.A,{value:"docker-compose",label:"Docker Compose",children:[(0,r.jsxs)(t.p,{children:["Docker Compose CLI usually comes with ",(0,r.jsx)(t.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"}),"."]}),(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["Do not use our docker compose command for production! Since we currently have a built-in Postgres database bundled together with the Logto app in ",(0,r.jsx)(t.code,{children:"docker-compose.yml"}),",\nevery time you re-execute the command a new database instance will be created, and any data persisted previously will be lost."]})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -fsSL https://raw.githubusercontent.com/logto-io/logto/HEAD/docker-compose.yml | docker compose -p logto -f - up\n"})}),(0,r.jsx)(t.p,{children:"After a successful composition, you will see the message like:"})]}),(0,r.jsxs)(a.A,{value:"docker",label:"Docker",children:[(0,r.jsx)("h3",{children:"Step 1"}),(0,r.jsxs)(t.p,{children:["Prepare a ",(0,r.jsx)(t.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"}),"@^14.0 instance, and using ",(0,r.jsx)(t.a,{href:"/logto-oss/using-cli",children:"Logto CLI"})," to seed a database for Logto:"]}),(0,r.jsxs)(i.A,{groupId:"cmd",children:[(0,r.jsx)(a.A,{value:"cli",label:"CLI",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"logto db seed\n"})})}),(0,r.jsx)(a.A,{value:"npx",label:"npx",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx @logto/cli db seed\n"})})})]}),(0,r.jsx)("h3",{children:"Step 2"}),(0,r.jsx)(t.p,{children:"Pull the image:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# ghcr\ndocker pull ghcr.io/logto-io/logto:latest\n# DockerHub\ndocker pull svhd/logto:latest\n"})}),(0,r.jsx)("h3",{children:"Step 3"}),(0,r.jsxs)(t.p,{children:["Map the container ports to Logto core and admin app, e.g., ",(0,r.jsx)(t.code,{children:"3001:3001"})," and ",(0,r.jsx)(t.code,{children:"3002:3002"}),"; and set the following environment variables to the container:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:"TRUST_PROXY_HEADER: 1 # Set to 1 if you have an HTTPS proxy (e.g. Nginx) in front of Logto\nENDPOINT: https://<your-logto-domain> # (Optional) Replace with your Logto endpoint URL if you are using a custom domain\nADMIN_ENDPOINT: https://<your-logto-admin-domain> # (Optional) Replace with your Logto admin URL if you are using a custom domain\nDB_URL: postgres://username:password@your_postgres_url:port/db_name # Replace with your Postgres DSN\n"})}),(0,r.jsx)(t.p,{children:"Run the container with all the environment variables above:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"docker run \\\n  --name logto \\\n  -p 3001:3001 \\\n  -p 3002:3002 \\\n  -e TRUST_PROXY_HEADER=1 \\\n  -e ENDPOINT=https://<your-logto-domain> \\\n  -e ADMIN_ENDPOINT=https://<your-logto-admin-domain> \\\n  -e DB_URL=postgres://username:password@your_postgres_url:port/db_name \\\n  ghcr.io/logto-io/logto:latest\n"})}),(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If you are using Docker Hub, use ",(0,r.jsx)(t.code,{children:"svhd/logto:latest"})," instead of ",(0,r.jsx)(t.code,{children:"ghcr.io/logto-io/logto:latest"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Use ",(0,r.jsx)(t.code,{children:"host.docker.internal"})," or ",(0,r.jsx)(t.code,{children:"172.17.0.1"})," in ",(0,r.jsx)(t.code,{children:"DB_URL"})," to refer to the host IP."]}),"\n"]})}),(0,r.jsx)(t.p,{children:"Finally, you will see the message like:"})]}),(0,r.jsxs)(a.A,{value:"npm",label:"npm-init",children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Prerequisites"})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://nodejs.org/",children:"Node.js"})," ",(0,r.jsx)(t.code,{children:"^18.12.0"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://postgresql.org/",children:"PostgreSQL"})," ",(0,r.jsx)(t.code,{children:"^14.0"})]}),"\n"]}),(0,r.jsx)(t.p,{children:"Higher versions usually work but are not guaranteed."}),(0,r.jsx)(t.p,{children:"We recommend using a new empty database which is dedicated for Logto, while it's not a hard requirement."}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Download and start"})}),(0,r.jsx)(t.p,{children:"In your terminal:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm init @logto@latest\n"})}),(0,r.jsx)(t.p,{children:"Once you complete the init process and start Logto, you will see the message like:"})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"Core app is running at http://localhost:3001\nCore app is running at https://your-domain-url\nAdmin app is running at http://localhost:3002\nAdmin app is running at https://your-admin-domain-url\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Heading to ",(0,r.jsx)(t.code,{children:"http://localhost:3002/"})," to continue your Logto journey. Enjoy!"]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:"Using an alternative URL for downloading"}),(0,r.jsxs)(t.p,{children:["If you want to specify a URL for the Logto zip file, use the ",(0,r.jsx)(t.code,{children:"--download-url"})," option. For example:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm init @logto@latest -- --download-url=https://github.com/logto-io/logto/releases/download/v1.2.2/logto.tar.gz\n"})}),(0,r.jsxs)(t.p,{children:["Note the extra ",(0,r.jsx)(t.code,{children:"--"})," is needed for NPM to pass the arguments."]})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:"Configuration (optional)"}),(0,r.jsxs)(t.p,{children:["Logto uses environment variables for configuration, along with ",(0,r.jsx)(t.code,{children:".env"})," file support. See ",(0,r.jsx)(t.a,{href:"/concepts/core-service/configuration",children:"Configuration"})," for detailed usage and full variable list."]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["Check out ",(0,r.jsx)(t.a,{href:"/concepts/core-service",children:"Core service"})," if you want more advanced controls or programmatic access to Logto."]})}),"\n",(0,r.jsx)(t.h2,{id:"create-an-account",children:"Create an account"}),"\n",(0,r.jsx)(t.p,{children:'Once you have successfully hosted Logto on your server, click on "Create account" on the welcome page. Keep in mind that the open-source version of Logto only allows for one account creation during the initial launch and does not support multiple accounts. The account creation process is limited to username and password combinations.'})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},78551:(e,t,o)=>{o.d(t,{A:()=>a});o(30758);var n=o(13526);const r={tabItem:"tabItem_PGP0"};var s=o(86070);function a(e){let{children:t,hidden:o,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,a),hidden:o,children:t})}},77501:(e,t,o)=>{o.d(t,{A:()=>w});var n=o(30758),r=o(13526),s=o(65052),a=o(25557),i=o(77469),l=o(50873),c=o(62230),d=o(60196);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:o}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:r}}=e;return{value:t,label:o,attributes:n,default:r}}))}(o);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function p(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:o}=e;const r=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:o=!1,groupId:r}=e,s=h(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,u]=g({queryString:o,groupId:r}),[m,x]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(o);return[r,(0,n.useCallback)((e=>{o&&s.set(e)}),[o,s])]}({groupId:r}),f=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=o(13887);const f={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var j=o(86070);function b(e){let{className:t,block:o,selectedValue:n,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,o=l.indexOf(t),r=i[o].value;r!==n&&(c(t),a(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;t=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;t=l[o]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":o},t),children:i.map((e=>{let{value:t,label:o,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":n===t}),children:o??t},t)}))})}function v(e){let{lazy:t,children:o,selectedValue:s}=e;const a=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...t,...e}),(0,j.jsx)(v,{...t,...e})]})}function w(e){const t=(0,x.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(t))}},15658:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var n=o(30758);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);