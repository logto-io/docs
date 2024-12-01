"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[75778],{2289:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"authorization/api-resources/protect-your-api","title":"Protege tu API","description":"Si no necesitas pol\xedticas de control de acceso flexibles y granulares, puedes simplemente proteger tu API directamente. Te guiaremos a trav\xe9s de un diagrama de secuencia y los pasos necesarios para mostrar c\xf3mo integrar el control de acceso en tu aplicaci\xf3n.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/authorization/api-resources/protect-your-api.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/protect-your-api","permalink":"/es/authorization/api-resources/protect-your-api","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/authorization/api-resources/protect-your-api.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Recursos de API","permalink":"/es/authorization/api-resources/"},"next":{"title":"Gu\xeda: Python","permalink":"/es/authorization/api-resources/python"}}');var n=r(86070),t=r(15658);const a={sidebar_position:1},s="Protege tu API",c={},d=[{value:"Solicitud de autenticaci\xf3n",id:"solicitud-de-autenticaci\xf3n",level:2},{value:"Solicitud de token",id:"solicitud-de-token",level:2},{value:"Solicitud al recurso de API",id:"solicitud-al-recurso-de-api",level:2},{value:"Validar tokens de autorizaci\xf3n para solicitudes de API",id:"validar-tokens-de-autorizaci\xf3n-para-solicitudes-de-api",level:2},{value:"Entendiendo el token JWS",id:"entendiendo-el-token-jws",level:4},{value:"Validar el token de autorizaci\xf3n",id:"validar-el-token-de-autorizaci\xf3n",level:4},{value:"Referencia",id:"referencia",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"protege-tu-api",children:"Protege tu API"})}),"\n",(0,n.jsx)(i.p,{children:"Si no necesitas pol\xedticas de control de acceso flexibles y granulares, puedes simplemente proteger tu API directamente. Te guiaremos a trav\xe9s de un diagrama de secuencia y los pasos necesarios para mostrar c\xf3mo integrar el control de acceso en tu aplicaci\xf3n."}),"\n",(0,n.jsx)(i.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant Logto\n    participant API\n\n    Note over Client,API: 1. Solicitud de autenticaci\xf3n\n    Client->>Logto: GET /oidc/auth\n    Note right of Client: con resource=https://resource-server.com/api<br/>y alcance opcional=read write\n    Logto--\x3e>Client: Devuelve authorization_code\n\n    Note over Client,API: 2. Solicitud de token\n    Client->>Logto: POST /oidc/token\n    Note right of Client: con authorization_code<br/>resource=https://resource-server.com/api<br/>y alcance opcional=read write\n    Logto--\x3e>Client: Devuelve token de acceso JWT\n    Note left of Logto: El token contiene:<br/>- Audiencia restringida al recurso<br/>- Alcances otorgados (si los hay)\n\n    Note over Client,API: 3. Solicitud de API\n    Client->>API: Solicitud con token Bearer\n    Note over API: Validar token JWT:\n    Note over API: - Verificar firma<br/>- Verificar emisor<br/>- Verificar audiencia<br/>- Verificar expiraci\xf3n<br/>- Verificar alcances (si RBAC est\xe1 habilitado)\n    alt Token v\xe1lido\n        API--\x3e>Client: Recurso protegido\n    else Token inv\xe1lido\n        API--\x3e>Client: 401 No autorizado\n    end"}),"\n",(0,n.jsx)(i.p,{children:"En este tutorial"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Endpoint de Logto: ",(0,n.jsx)(i.code,{children:"https://tenant-id.logto.app"})]}),"\n",(0,n.jsxs)(i.li,{children:["Aplicaci\xf3n cliente: ",(0,n.jsx)(i.code,{children:"https://client.example.org"})]}),"\n",(0,n.jsxs)(i.li,{children:["Servidor de recursos de API: ",(0,n.jsx)(i.code,{children:"https://resource-server.com/api"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Debes reemplazar estos con tus endpoints reales al implementar."}),"\n",(0,n.jsx)(i.h2,{id:"solicitud-de-autenticaci\xf3n",children:"Solicitud de autenticaci\xf3n"}),"\n",(0,n.jsxs)(i.p,{children:["Proporciona una lista de par\xe1metros de indicador de recurso en una ",(0,n.jsx)(i.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"Solicitud de Autenticaci\xf3n"}),". Indicar\xe1 todos los recursos protegidos que el usuario puede solicitar."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"GET https://tenant-id.logto.app/oidc/auth?response_type=code\n    &client_id=s6BhdRkqt3\n    &state=tNwzQ87pC6llebpmac_IDeeq-mCR2wLDYljHUZUAWuI\n    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb\n    &resource=https%3A%2F%2Fresource-server.com%2Fapi\n    &scope=read%20write\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Logto validar\xe1 y almacenar\xe1 estos indicadores de recurso. Se otorgar\xe1 y devolver\xe1 un ",(0,n.jsx)(i.code,{children:"authorization_code"})," con alcances restringidos a estos recursos especificados."]}),"\n",(0,n.jsx)(i.p,{children:"Configuraci\xf3n de ejemplo del SDK de Logto:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:"const config: LogtoConfig = {\n  // ...otros configs\n  resources: ['https://resource-server.com/api'],\n  scopes: ['read', 'write'],\n};\n"})}),"\n",(0,n.jsx)(i.h2,{id:"solicitud-de-token",children:"Solicitud de token"}),"\n",(0,n.jsxs)(i.p,{children:["Cuando el par\xe1metro de recurso est\xe1 presente en una ",(0,n.jsx)(i.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"Solicitud de Token"})," junto con el ",(0,n.jsx)(i.code,{children:"authorization_code"})," otorgado anteriormente, especificar\xe1 la audiencia del recurso de API objetivo del token de acceso solicitado."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"POST https://tenant-id.logto.app/oidc/token HTTP/1.1\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=authorization_code&redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb&code=10esc29BWC2qZB0acc9v8zAv9ltc2pko105tQauZ&resource=https%3A%2F%2Fresource-server.com%2Fapi\n"})}),"\n",(0,n.jsx)(i.p,{children:"Logto otorgar\xe1 un token de acceso cifrado con la audiencia restringida a este recurso solicitado. El token lleva todos los datos que necesitar\xe1s para representar el estado de autorizaci\xf3n de la solicitud. Por ejemplo, la identidad y el rol del usuario solicitante, la audiencia del token y el tiempo de expiraci\xf3n."}),"\n",(0,n.jsx)(i.p,{children:"C\xf3digo de ejemplo del SDK de Logto:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:"const accessToken = await logtoClient.getAccessToken('https://resource-server.com/api');\n"})}),"\n",(0,n.jsx)(i.p,{children:"La carga \xfatil del accessToken contendr\xe1:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:"{\n  iss: '<your-logto-endpoint>/oidc',\n  aud: 'https://resource-server.com/api',\n  scope: 'read write'\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"solicitud-al-recurso-de-api",children:"Solicitud al recurso de API"}),"\n",(0,n.jsxs)(i.p,{children:["El usuario cliente envi\xf3 una solicitud al recurso de API presentando el ",(0,n.jsx)(i.code,{children:"access_token"})," dado en el encabezado de Autorizaci\xf3n."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"GET https://resource-server.com/api/users\nAuthorization: Bearer eyJhbGciOiJIUz...\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Logto sigue el protocolo est\xe1ndar de autorizaci\xf3n basado en tokens para proteger tus recursos de API. Para aprender m\xe1s sobre OAuth 2.0, consulta el ",(0,n.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1",children:"documento oficial"})," de OAuth 2.0."]}),"\n",(0,n.jsx)(i.h2,{id:"validar-tokens-de-autorizaci\xf3n-para-solicitudes-de-api",children:"Validar tokens de autorizaci\xf3n para solicitudes de API"}),"\n",(0,n.jsxs)(i.p,{children:["Logto emite un token de autorizaci\xf3n en formato est\xe1ndar ",(0,n.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519",children:"JWT"})," para cada solicitud de API autorizada. El token est\xe1 cifrado y firmado como un token ",(0,n.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515",children:"JWS"}),"."]}),"\n",(0,n.jsx)(i.h4,{id:"entendiendo-el-token-jws",children:"Entendiendo el token JWS"}),"\n",(0,n.jsxs)(i.p,{children:["Un token ",(0,n.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515",children:"JWS"})," codificado se construye con tres partes:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Encabezado JOSE: Declara el tipo de c\xf3digo y el algoritmo de codificaci\xf3n"}),"\n",(0,n.jsx)(i.li,{children:"Carga \xfatil JWS: Incluye todos los reclamos del token"}),"\n",(0,n.jsxs)(i.li,{children:["Firma JWS: Firma firmada con ",(0,n.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/rfc7517",children:"JWK"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Un esquema est\xe1ndar de la carga \xfatil JWS emitida por Logto: (los reclamos pueden variar, seg\xfan tu configuraci\xf3n personalizada de OIDC)"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"clave"}),(0,n.jsx)(i.th,{children:"descripci\xf3n"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"jti"}),(0,n.jsx)(i.td,{children:"ID \xfanico del JWT"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"sub"}),(0,n.jsx)(i.td,{children:"sujeto, generalmente user-id"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"iat"}),(0,n.jsx)(i.td,{children:"marca de tiempo del token emitido en"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"exp"}),(0,n.jsx)(i.td,{children:"marca de tiempo del token expira en"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"client_id"}),(0,n.jsx)(i.td,{children:"id de la aplicaci\xf3n"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"iss"}),(0,n.jsx)(i.td,{children:"identidad del emisor del token"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"aud"}),(0,n.jsx)(i.td,{children:"audiencia del token"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"scope"}),(0,n.jsx)(i.td,{children:"alcances (permisos) del token"})]})]})]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["Para desarrollo, para inspeccionar visualmente un token JWT, puedes visitar una ",(0,n.jsx)(i.a,{href:"https://www.jstoolset.com/jwt",children:"herramienta de decodificaci\xf3n de JWT"})," para decodificar y verificar los tokens que recibiste. Ten cuidado o nunca uses los tokens de un entorno de producci\xf3n. Como este es un servicio p\xfablico en l\xednea proporcionado por terceros, tu token puede estar expuesto."]})}),"\n",(0,n.jsx)(i.h4,{id:"validar-el-token-de-autorizaci\xf3n",children:"Validar el token de autorizaci\xf3n"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-7.2",children:"Validar un JWT"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515#section-5.2",children:"Validar la firma JWS"})}),"\n",(0,n.jsxs)(i.li,{children:["El emisor del token es ",(0,n.jsx)(i.code,{children:"https://<your-logto-domain>/oidc"})," (emitido por tu servidor de autenticaci\xf3n Logto)"]}),"\n",(0,n.jsx)(i.li,{children:"La audiencia del token es igual al indicador de recurso del receptor actual registrado en la Consola de Administraci\xf3n de Logto"}),"\n",(0,n.jsx)(i.li,{children:"El token est\xe1 dentro de su tiempo de expiraci\xf3n"}),"\n",(0,n.jsxs)(i.li,{children:["(Solo ",(0,n.jsx)(i.a,{href:"/authorization/role-based-access-control/protect-api-resources-with-rbac",children:"RBAC"}),") El token tiene el ",(0,n.jsx)(i.code,{children:"scope"})," deseado"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Existen varias bibliotecas y paquetes de c\xf3digo abierto que pueden ayudarte a validar y decodificar un token JWT f\xe1cilmente. Puedes elegir uno e integrarlo con tu aplicaci\xf3n backend seg\xfan el lenguaje y el framework que est\xe9s utilizando. Por favor, revisa algunos de los ejemplos que tenemos:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/authorization/api-resources/node-express",children:"Node (Express)"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/authorization/api-resources/spring-boot",children:"Spring Boot"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/authorization/api-resources/python",children:"Python"})}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"referencia",children:"Referencia"}),"\n",(0,n.jsxs)(i.p,{children:["Logto utiliza el Protocolo de Autorizaci\xf3n basado en c\xf3digo de OAuth 2.0 para hacer que tu solicitud de API sea segura. Si est\xe1s interesado en la estrategia detr\xe1s de esto, consulta la ",(0,n.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1",children:"especificaci\xf3n"})," de OAuth 2.0 para m\xe1s detalles."]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},15658:(e,i,r)=>{r.d(i,{R:()=>a,x:()=>s});var o=r(30758);const n={},t=o.createContext(n);function a(e){const i=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(t.Provider,{value:i},e.children)}}}]);