"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[27041],{90347:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"integrate-logto/integrate-logto-into-your-application/understand-authentication-flow","title":"Comprender el flujo de autenticaci\xf3n","description":"Logto est\xe1 basado en los est\xe1ndares OAuth 2.0 y OpenID Connect (OIDC). Comprender estos est\xe1ndares de autenticaci\xf3n har\xe1 que el proceso de integraci\xf3n sea m\xe1s fluido y sencillo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow.mdx","sourceDirName":"integrate-logto/integrate-logto-into-your-application","slug":"/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow","permalink":"/es/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Integra Logto en tu aplicaci\xf3n","permalink":"/es/integrate-logto/integrate-logto-into-your-application/"},"next":{"title":"Aplicaci\xf3n Protegida","permalink":"/es/integrate-logto/protected-app"}}');var t=n(86070),o=n(15658);const c={},r="Comprender el flujo de autenticaci\xf3n",s={},l=[{value:"Flujo de autenticaci\xf3n de usuario",id:"flujo-de-autenticaci\xf3n-de-usuario",level:3},{value:"Flujo de autenticaci\xf3n m\xe1quina a m\xe1quina",id:"flujo-de-autenticaci\xf3n-m\xe1quina-a-m\xe1quina",level:3}];function d(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"comprender-el-flujo-de-autenticaci\xf3n",children:"Comprender el flujo de autenticaci\xf3n"})}),"\n",(0,t.jsxs)(i.p,{children:["Logto est\xe1 basado en los est\xe1ndares ",(0,t.jsx)(i.a,{href:"https://auth.wiki/oauth-2.0",children:"OAuth 2.0"})," y ",(0,t.jsx)(i.a,{href:"https://auth.wiki/openid-connect",children:"OpenID Connect (OIDC)"}),". Comprender estos est\xe1ndares de autenticaci\xf3n har\xe1 que el proceso de integraci\xf3n sea m\xe1s fluido y sencillo."]}),"\n",(0,t.jsx)(i.h3,{id:"flujo-de-autenticaci\xf3n-de-usuario",children:"Flujo de autenticaci\xf3n de usuario"}),"\n",(0,t.jsx)(i.p,{children:"Esto es lo que sucede cuando un usuario inicia sesi\xf3n con Logto:"}),"\n",(0,t.jsx)(i.mermaid,{value:"sequenceDiagram\n    autonumber\n    participant User\n    participant Application\n    participant Logto\n\n    User->>Application: Clic en el bot\xf3n de inicio de sesi\xf3n\n    Application->>Logto: Iniciar sesi\xf3n y redirigir a la p\xe1gina de inicio de sesi\xf3n de Logto\n    User->>Logto: Ingresar credenciales para autenticaci\xf3n\n    Logto->>Application: Completar inicio de sesi\xf3n y redirigir de vuelta\n    Application->>Logto: Procesar callback y solicitar token de acceso e informaci\xf3n del usuario\n    Logto->>Application: Devolver token de acceso e informaci\xf3n del usuario\n    Application->>User: Inicio de sesi\xf3n exitoso"}),"\n",(0,t.jsx)(i.p,{children:"En este flujo, varios conceptos clave son esenciales para el proceso de integraci\xf3n:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Application"}),": Esto representa tu aplicaci\xf3n en Logto. Crear\xe1s una configuraci\xf3n de aplicaci\xf3n en la Consola de Logto para establecer una conexi\xf3n entre tu aplicaci\xf3n real y los servicios de Logto. Aprende m\xe1s sobre ",(0,t.jsx)(i.a,{href:"/integrate-logto/application-data-structure/#introduction",children:"Application"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Redirect URI"}),": Despu\xe9s de que los usuarios completen la autenticaci\xf3n en la p\xe1gina de inicio de sesi\xf3n de Logto, Logto los redirige de vuelta a tu aplicaci\xf3n a trav\xe9s de este URI. Necesitar\xe1s configurar el Redirect URI en la configuraci\xf3n de tu aplicaci\xf3n. Para m\xe1s detalles, consulta ",(0,t.jsx)(i.a,{href:"/integrate-logto/application-data-structure/#redirect-uris",children:"Redirect URIs"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Handle sign-in callback"}),": Cuando Logto redirige a los usuarios de vuelta a tu aplicaci\xf3n, tu aplicaci\xf3n necesita procesar los datos de autenticaci\xf3n y solicitar tokens de acceso e informaci\xf3n del usuario. No te preocupes: el SDK de Logto maneja esto autom\xe1ticamente."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Esta visi\xf3n general cubre lo esencial para una integraci\xf3n r\xe1pida. Para una comprensi\xf3n m\xe1s profunda, consulta nuestra gu\xeda ",(0,t.jsx)(i.a,{href:"/concepts/sign-in-experience/",children:"Sign-in experience explained"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"flujo-de-autenticaci\xf3n-m\xe1quina-a-m\xe1quina",children:"Flujo de autenticaci\xf3n m\xe1quina a m\xe1quina"}),"\n",(0,t.jsxs)(i.p,{children:["Logto proporciona el tipo de ",(0,t.jsx)(i.a,{href:"/quick-starts/m2m",children:"aplicaci\xf3n m\xe1quina a m\xe1quina (M2M)"})," para habilitar la autenticaci\xf3n directa entre servicios, basada en el ",(0,t.jsx)(i.a,{href:"https://auth.wiki/client-credentials-flow",children:"flujo de credenciales de cliente de OAuth 2.0"}),":"]}),"\n",(0,t.jsx)(i.mermaid,{value:"sequenceDiagram\n    participant Service A\n    participant Logto\n    participant Service B\n\n    Service A->>Logto: Solicitar token de acceso con credenciales de cliente\n    Logto->>Service A: Devolver token de acceso\n    Service A->>Service B: Solicitud de API con token de acceso\n    Service B->>Logto: Validar token\n    Logto->>Service B: Resultado de validaci\xf3n del token\n    Service B->>Service A: Respuesta de API"}),"\n",(0,t.jsx)(i.p,{children:"Este flujo de autenticaci\xf3n m\xe1quina a m\xe1quina (M2M) est\xe1 dise\xf1ado para aplicaciones que necesitan comunicarse directamente con recursos sin interacci\xf3n del usuario (por lo tanto, sin interfaz de usuario), como un servicio de API actualizando datos de usuario en Logto o un servicio de estad\xedsticas extrayendo pedidos diarios."}),"\n",(0,t.jsxs)(i.p,{children:["En este flujo, los servicios se autentican utilizando credenciales de cliente: una combinaci\xf3n de ",(0,t.jsx)(i.a,{href:"/integrate-logto/application-data-structure/#application-id",children:"Application ID"})," y ",(0,t.jsx)(i.a,{href:"/integrate-logto/application-data-structure/#application-secret",children:"Application Secret"})," que identifica y autentica de manera \xfanica al servicio. Estas credenciales sirven como la identidad del servicio al solicitar ",(0,t.jsx)(i.a,{href:"https://auth.wiki/access-token",children:"tokens de acceso"})," de Logto."]})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},15658:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>r});var a=n(30758);const t={},o=a.createContext(t);function c(e){const i=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(o.Provider,{value:i},e.children)}}}]);