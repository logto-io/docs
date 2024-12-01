"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[20232],{33827:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"logto-oss/using-cli/manage-database-configs","title":"Datenbankkonfigurationen verwalten","description":"Wie man Datenbankkonfigurationen \xfcber CLI verwaltet.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/logto-oss/using-cli/manage-database-configs.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/manage-database-configs","permalink":"/de/logto-oss/using-cli/manage-database-configs","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/logto-oss/using-cli/manage-database-configs.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"description":"Wie man Datenbankkonfigurationen \xfcber CLI verwaltet.","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Datenbank\xe4nderung","permalink":"/de/logto-oss/using-cli/database-alteration"},"next":{"title":"\xdcbersetzung","permalink":"/de/logto-oss/using-cli/translation"}}');var r=a(86070),s=a(15658),l=a(78551),o=a(77501);const i={description:"Wie man Datenbankkonfigurationen \xfcber CLI verwaltet.",sidebar_position:4},c="Datenbankkonfigurationen verwalten",u={},d=[{value:"Konfiguration nach Schl\xfcssel abrufen",id:"konfiguration-nach-schl\xfcssel-abrufen",level:2},{value:"Konfiguration nach Schl\xfcssel setzen",id:"konfiguration-nach-schl\xfcssel-setzen",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"datenbankkonfigurationen-verwalten",children:"Datenbankkonfigurationen verwalten"})}),"\n",(0,r.jsx)(n.p,{children:"Logto hilft dabei, einige technische Konfigurationen wie OIDC- und Cookie-Schl\xfcssel zu verwalten. Bevor wir sie \xfcber das Admin Console oder die Management API verwalten k\xf6nnen, kannst du CLI verwenden, um das Ziel zu erreichen."}),"\n",(0,r.jsx)(n.h2,{id:"konfiguration-nach-schl\xfcssel-abrufen",children:"Konfiguration nach Schl\xfcssel abrufen"}),"\n",(0,r.jsx)(n.p,{children:"Verwendung:"}),"\n",(0,r.jsxs)(o.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto db config get <key> [keys...]\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config get <key> [keys...]\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Angenommen, du m\xf6chtest die OIDC-Privatschl\xfcssel abrufen:"}),"\n",(0,r.jsxs)(o.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto db config get oidc.privateKeys\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config get oidc.privateKeys\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Die Ausgabe wird wie folgt aussehen:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'oidc.privateKeys=["\\n-----BEGIN PRIVATE KEY-----\\nMIIJRAIBA..."]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["F\xfchre ",(0,r.jsx)(n.code,{children:"logto db config get --help"})," aus, um alle verf\xfcgbaren Schl\xfcssel zu sehen, oder siehe ",(0,r.jsx)(n.a,{href:"/concepts/core-service/configuration/#database-configs",children:"Konfiguration"})," f\xfcr eine detaillierte Erkl\xe4rung."]}),"\n",(0,r.jsx)(n.h2,{id:"konfiguration-nach-schl\xfcssel-setzen",children:"Konfiguration nach Schl\xfcssel setzen"}),"\n",(0,r.jsxs)(o.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto db config set <key> [keys...]\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config set <key> [keys...]\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Angenommen, du m\xf6chtest die OIDC-Cookie-Schl\xfcssel setzen:"}),"\n",(0,r.jsxs)(o.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'logto db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n'})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'npx @logto/cli db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Normalerweise sollte der zu setzende Wert ein g\xfcltiger JSON-String sein und der vordefinierten Typdefinition folgen. F\xfchre ",(0,r.jsx)(n.code,{children:"logto db config set --help"})," aus, um alle verf\xfcgbaren Schl\xfcssel zu sehen, oder siehe ",(0,r.jsx)(n.a,{href:"/concepts/core-service/configuration/",children:"Konfiguration"})," f\xfcr eine detaillierte Erkl\xe4rung."]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},78551:(e,n,a)=>{a.d(n,{A:()=>l});a(30758);var t=a(13526);const r={tabItem:"tabItem_PGP0"};var s=a(86070);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:a,children:n})}},77501:(e,n,a)=>{a.d(n,{A:()=>y});var t=a(30758),r=a(13526),s=a(65052),l=a(25557),o=a(77469),i=a(50873),c=a(62230),u=a(60196);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function g(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:a}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function b(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=h(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=f({queryString:a,groupId:r}),[b,p]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),m=(()=>{const e=c??b;return g({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),p(e)}),[d,p,s]),tabValues:s}}var p=a(13887);const m={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var x=a(86070);function v(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,a=i.indexOf(n),r=o[a].value;r!==t&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:s}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function y(e){const n=(0,p.A)();return(0,x.jsx)(k,{...e,children:d(e.children)},String(n))}},15658:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>o});var t=a(30758);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);