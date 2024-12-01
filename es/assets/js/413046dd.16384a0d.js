"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[16021],{40428:(e,a,n)=>{n.d(a,{Ay:()=>c,RM:()=>r});var i=n(86070),o=n(15658);const r=[];function s(e){const a={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(a.admonition,{type:"tip",children:(0,i.jsxs)(a.p,{children:["En esta gu\xeda, asumimos que tienes conocimientos b\xe1sicos de los conectores de Logto. Si no los tienes, consulta la gu\xeda ",(0,i.jsx)(a.a,{href:"/connectors",children:"Configurar conectores"})," para comenzar."]})})}function c(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},51218:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"integrations/social/feishu-web/README","title":"Configura el inicio de sesi\xf3n social con Feishu","description":"\u98de\u4e66\u7f51\u9875: Plataforma avanzada de colaboraci\xf3n y gesti\xf3n empresarial, colaboraci\xf3n de oficina sin fisuras en una sola parada, alineaci\xf3n de objetivos de equipo de arriba a abajo, activaci\xf3n completa de la organizaci\xf3n y el individuo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrations/social/feishu-web/README.mdx","sourceDirName":"integrations/social/feishu-web","slug":"/integrations/feishu-web","permalink":"/es/integrations/feishu-web","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrations/social/feishu-web/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/feishu-web","sidebar_label":"Feishu","sidebar_custom_props":{"description":"Feishu es una plataforma de colaboraci\xf3n empresarial desarrollada por ByteDance.","logoFilename":"feishu.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Facebook","permalink":"/es/integrations/facebook"},"next":{"title":"GitHub","permalink":"/es/integrations/github"}}');var o=n(86070),r=n(15658),s=n(40428);const c={slug:"/integrations/feishu-web",sidebar_label:"Feishu",sidebar_custom_props:{description:"Feishu es una plataforma de colaboraci\xf3n empresarial desarrollada por ByteDance.",logoFilename:"feishu.svg"}},t="Configura el inicio de sesi\xf3n social con Feishu",l={},d=[...s.RM,{value:"Comenzar",id:"comenzar",level:2},{value:"Registra una cuenta de desarrollador de Feishu",id:"registra-una-cuenta-de-desarrollador-de-feishu",level:2},{value:"Crear una aplicaci\xf3n",id:"crear-una-aplicaci\xf3n",level:2}];function u(e){const a={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.header,{children:(0,o.jsx)(a.h1,{id:"configura-el-inicio-de-sesi\xf3n-social-con-feishu",children:"Configura el inicio de sesi\xf3n social con Feishu"})}),"\n",(0,o.jsx)(a.p,{children:"\u98de\u4e66\u7f51\u9875: Plataforma avanzada de colaboraci\xf3n y gesti\xf3n empresarial, colaboraci\xf3n de oficina sin fisuras en una sola parada, alineaci\xf3n de objetivos de equipo de arriba a abajo, activaci\xf3n completa de la organizaci\xf3n y el individuo."}),"\n",(0,o.jsx)(s.Ay,{}),"\n",(0,o.jsx)(a.h2,{id:"comenzar",children:"Comenzar"}),"\n",(0,o.jsx)(a.p,{children:"El conector de Feishu Web est\xe1 dise\xf1ado para aplicaciones web de escritorio. Adopta el flujo de autenticaci\xf3n OAuth 2.0."}),"\n",(0,o.jsx)(a.h2,{id:"registra-una-cuenta-de-desarrollador-de-feishu",children:"Registra una cuenta de desarrollador de Feishu"}),"\n",(0,o.jsxs)(a.p,{children:["Si a\xfan no tienes una cuenta de desarrollador de Feishu, reg\xedstrate en la ",(0,o.jsx)(a.a,{href:"https://open.feishu.cn/?lang=zh-CN",children:"plataforma abierta"}),"."]}),"\n",(0,o.jsx)(a.h2,{id:"crear-una-aplicaci\xf3n",children:"Crear una aplicaci\xf3n"}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsxs)(a.li,{children:["En la ",(0,o.jsx)(a.a,{href:"https://open.feishu.cn/app?lang=zh-CN",children:"p\xe1gina de inicio del desarrollador"}),', haz clic en "Crear aplicaci\xf3n empresarial autoconstruida".']}),"\n",(0,o.jsx)(a.li,{children:'Completa el nombre de la aplicaci\xf3n, selecciona "Aplicaci\xf3n empresarial autoconstruida" y haz clic en "Crear aplicaci\xf3n".'}),"\n",(0,o.jsxs)(a.li,{children:['En "Configuraci\xf3n de seguridad" a la izquierda, a\xf1ade la "URL de redirecci\xf3n" correspondiente ',(0,o.jsx)(a.code,{children:"${your_logto_origin}/callback/${connector_id}"}),". El ",(0,o.jsx)(a.code,{children:"connector_id"})," se puede encontrar en la p\xe1gina de detalles del conector despu\xe9s de haber a\xf1adido el conector correspondiente en el panel de administraci\xf3n."]}),"\n",(0,o.jsx)(a.li,{children:'En "Credenciales e informaci\xf3n b\xe1sica" a la izquierda, puedes obtener el "AppID" y "AppSecret".'}),"\n",(0,o.jsx)(a.li,{children:'En "Publicaci\xf3n de la aplicaci\xf3n" a la izquierda, necesitas publicar la primera versi\xf3n para que el "AppID" y "AppSecret" sean efectivos.'}),"\n"]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsxs)(a.p,{children:["\u2139\ufe0f ",(0,o.jsx)(a.strong,{children:"Nota"}),'\nSi la aplicaci\xf3n no publica una versi\xf3n, el "AppID" y "AppSecret" obtenidos no se podr\xe1n usar o se producir\xe1 un error en la solicitud.']}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},15658:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>c});var i=n(30758);const o={},r=i.createContext(o);function s(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);