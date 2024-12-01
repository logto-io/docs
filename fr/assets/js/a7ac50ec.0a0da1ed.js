"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[74728],{57666:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"logto-oss/using-cli/database-alteration","title":"Modification de base de donn\xe9es","description":"Comment d\xe9ployer une modification de base de donn\xe9es.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/using-cli/database-alteration.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/database-alteration","permalink":"/fr/logto-oss/using-cli/database-alteration","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/using-cli/database-alteration.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"description":"Comment d\xe9ployer une modification de base de donn\xe9es.","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"G\xe9rer les connecteurs","permalink":"/fr/logto-oss/using-cli/manage-connectors"},"next":{"title":"G\xe9rer les configurations de base de donn\xe9es","permalink":"/fr/logto-oss/using-cli/manage-database-configs"}}');var o=s(86070),t=s(15658),a=s(78551),l=s(77501);const i={description:"Comment d\xe9ployer une modification de base de donn\xe9es.",sidebar_position:3},c="Modification de base de donn\xe9es",d={},u=[{value:"D\xe9terminer la version \xe0 d\xe9ployer",id:"d\xe9terminer-la-version-\xe0-d\xe9ployer",level:2},{value:"Annuler les modifications",id:"annuler-les-modifications",level:2},{value:"Pour les contributeurs",id:"pour-les-contributeurs",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"modification-de-base-de-donn\xe9es",children:"Modification de base de donn\xe9es"})}),"\n",(0,o.jsx)(n.p,{children:"Lors du d\xe9veloppement de nouvelles fonctionnalit\xe9s, ou de la refactorisation de celles existantes, il est parfois in\xe9vitable de modifier les sch\xe9mas de base de donn\xe9es."}),"\n",(0,o.jsx)(n.p,{children:"Les choses peuvent sembler effrayantes, en tant qu'utilisateur, vous devez g\xe9n\xe9ralement :"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"V\xe9rifier la diff\xe9rence entre deux versions ou plus"}),"\n",(0,o.jsx)(n.li,{children:"Modifier la base de donn\xe9es de mani\xe8re s\xfbre et r\xe9trocompatible"}),"\n",(0,o.jsx)(n.li,{children:"Se pr\xe9parer \xe0 une \xe9ventuelle d\xe9faillance, par exemple avoir un script de retour en arri\xe8re"}),"\n",(0,o.jsx)(n.li,{children:"Remplacer progressivement les instances Logto en cours d'ex\xe9cution par la nouvelle version"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"H\xe9, nous sommes aussi des d\xe9veloppeurs, et nous savons qu'il est d\xe9sagr\xe9able de faire toutes ces choses risqu\xe9es mais obligatoires."})," Alors pourquoi ne pas les confier \xe0 quelqu'un qui ne fera pas d'erreur, comme un CLI ?"]}),"\n",(0,o.jsx)(n.p,{children:"D\xe9sormais, votre processus de mise \xe0 niveau sera :"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ex\xe9cutez ",(0,o.jsx)(n.code,{children:"logto db alt deploy"})," depuis n'importe o\xf9 pouvant acc\xe9der \xe0 la base de donn\xe9es"]}),"\n",(0,o.jsx)(n.li,{children:"Remplacez progressivement les instances Logto en cours d'ex\xe9cution par la nouvelle version"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Commen\xe7ons !"}),"\n",(0,o.jsx)(n.h2,{id:"d\xe9terminer-la-version-\xe0-d\xe9ployer",children:"D\xe9terminer la version \xe0 d\xe9ployer"}),"\n",(0,o.jsxs)(n.p,{children:["Si vous avez install\xe9 Logto CLI globalement, il est ",(0,o.jsx)(n.strong,{children:"fortement recommand\xe9"})," de mettre \xe0 jour le CLI vers la derni\xe8re version avant de d\xe9ployer pour obtenir toutes les modifications de base de donn\xe9es disponibles. Ensuite, ex\xe9cutez la commande :"]}),"\n",(0,o.jsxs)(l.A,{groupId:"cmd",children:[(0,o.jsx)(a.A,{value:"cli",label:"CLI",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"logto db alteration deploy\n"})})}),(0,o.jsx)(a.A,{value:"npx",label:"npx",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db alteration deploy\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"Si votre base de donn\xe9es est \xe0 jour, vous verrez le message ci-dessous :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[info] Found 0 alteration to deploy\n"})}),"\n",(0,o.jsx)(n.p,{children:"Si vous avez des modifications non d\xe9ploy\xe9es, le CLI vous demandera de choisir la version souhait\xe9e :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"? Choose the alteration target version (Use arrow keys)\n> 1.2.0\n  1.0.0\n"})}),"\n",(0,o.jsx)(n.p,{children:"Th\xe9oriquement, la version \xe0 d\xe9ployer devrait correspondre \xe0 la version de votre instance Logto. En attendant, vous pouvez utiliser la commande avec une version cible :"}),"\n",(0,o.jsxs)(l.A,{groupId:"cmd",children:[(0,o.jsx)(a.A,{value:"cli",label:"CLI",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"logto db alteration deploy 1.2.0\n"})})}),(0,o.jsx)(a.A,{value:"npx",label:"npx",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db alteration deploy 1.2.0\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["C'est utile lorsque vous souhaitez effectuer la modification dans un pipeline non-TTY, n'oubliez pas de passer l'URL de la base de donn\xe9es en utilisant ",(0,o.jsx)(n.code,{children:"--db-url"}),". Voir ",(0,o.jsx)(n.a,{href:"/logto-oss/deployment-and-configuration/",children:"D\xe9ploiement et configuration"})," pour configurer un travail de modification dans votre cluster."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Pour chaque script de modification, le Logto CLI ex\xe9cutera l'ensemble du script dans une transaction. Donc, si un d\xe9ploiement \xe9choue, vous pouvez facilement continuer avec la m\xeame commande apr\xe8s avoir corrig\xe9 le probl\xe8me."})}),"\n",(0,o.jsx)(n.h2,{id:"annuler-les-modifications",children:"Annuler les modifications"}),"\n",(0,o.jsxs)(n.p,{children:["Nos scripts de modification sont \xe9galement accompagn\xe9s d'un script ",(0,o.jsx)(n.code,{children:"down"})," qui peut annuler les modifications. Pour revenir \xe0 l'\xe9tat de la base de donn\xe9es \xe0 une version sp\xe9cifique, remplacez ",(0,o.jsx)(n.code,{children:"1.0.0"})," par votre version cible et ex\xe9cutez la commande ci-dessous :"]}),"\n",(0,o.jsxs)(l.A,{groupId:"cmd",children:[(0,o.jsx)(a.A,{value:"cli",label:"CLI",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"logto db alteration rollback 1.0.0\n"})})}),(0,o.jsx)(a.A,{value:"npx",label:"npx",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db alteration rollback 1.0.0\n"})})})]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Vous pouvez trouver tous les scripts de modification ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/schemas/alterations",children:"dans ce r\xe9pertoire"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"pour-les-contributeurs",children:"Pour les contributeurs"}),"\n",(0,o.jsx)(n.p,{children:'La branche master du d\xe9p\xf4t Logto peut contenir des scripts de modification non publi\xe9s. Vous devrez peut-\xeatre d\xe9ployer manuellement les modifications "next" en ex\xe9cutant :'}),"\n",(0,o.jsxs)(l.A,{groupId:"cmd",children:[(0,o.jsx)(a.A,{value:"cli",label:"CLI",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"logto db alteration deploy next\n"})})}),(0,o.jsx)(a.A,{value:"npx",label:"npx",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db alteration deploy next\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"Si vous d\xe9veloppez une fonctionnalit\xe9 n\xe9cessitant des modifications de base de donn\xe9es, plut\xf4t que de mettre \xe0 jour le sch\xe9ma de la base de donn\xe9es, vous devez \xe9galement fournir un script au format suivant :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"next-[timestamp]-what-to-do.ts\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Consultez ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/schemas/alterations",children:"ce r\xe9pertoire"})," pour r\xe9f\xe9rence."]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},78551:(e,n,s)=>{s.d(n,{A:()=>a});s(30758);var r=s(13526);const o={tabItem:"tabItem_PGP0"};var t=s(86070);function a(e){let{children:n,hidden:s,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:s,children:n})}},77501:(e,n,s)=>{s.d(n,{A:()=>I});var r=s(30758),o=s(13526),t=s(65052),a=s(25557),l=s(77469),i=s(50873),c=s(62230),d=s(60196);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:o}}=e;return{value:n,label:s,attributes:r,default:o}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:s}=e;const o=(0,a.W6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,i.aZ)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(o.location.search);n.set(t,e),o.replace({...o.location,search:n.toString()})}),[t,o])]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:o}=e,t=p(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[c,u]=h({queryString:s,groupId:o}),[b,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,t]=(0,d.Dv)(s);return[o,(0,r.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:o}),g=(()=>{const e=c??b;return m({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,t]),tabValues:t}}var f=s(13887);const g={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var v=s(86070);function x(e){let{className:n,block:s,selectedValue:r,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),d=e=>{const n=e.currentTarget,s=i.indexOf(n),o=l[s].value;o!==r&&(c(n),a(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;n=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;n=i[s]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...t,className:(0,o.A)("tabs__item",g.tabItem,t?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function j(e){let{lazy:n,children:s,selectedValue:t}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function I(e){const n=(0,f.A)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(n))}},15658:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(30758);const o={},t=r.createContext(o);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);