"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[80004],{3035:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"developers/webhooks/README","title":"Webhooks","description":"Logto Webhook proporciona notificaciones en tiempo real para varios eventos, incluidos cambios en cuenta de usuario, rol, permiso, organizaci\xf3n, rol de organizaci\xf3n, permiso de organizaci\xf3n, e interacci\xf3n del usuario.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/developers/webhooks/README.mdx","sourceDirName":"developers/webhooks","slug":"/developers/webhooks/","permalink":"/es/developers/webhooks/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/developers/webhooks/README.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Claves de firma","permalink":"/es/developers/signing-keys"},"next":{"title":"Configurar Webhooks","permalink":"/es/developers/webhooks/configure-webhooks"}}');var s=n(86070),i=n(15658);const r={sidebar_position:5},t="Webhooks",c={},d=[{value:"\xbfPor qu\xe9 usar Webhook?",id:"por-qu\xe9-usar-webhook",level:2},{value:"T\xe9rminos",id:"t\xe9rminos",level:2},{value:"Preguntas frecuentes",id:"preguntas-frecuentes",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"webhooks",children:"Webhooks"})}),"\n",(0,s.jsxs)(o.p,{children:["Logto ",(0,s.jsx)(o.a,{href:"https://auth.wiki/webhook",children:"Webhook"})," proporciona notificaciones en tiempo real para varios eventos, incluidos cambios en ",(0,s.jsx)(o.a,{href:"/user-management/user-data",children:"cuenta de usuario"}),", ",(0,s.jsx)(o.a,{href:"/authorization/role-based-access-control#roles",children:"rol"}),", ",(0,s.jsx)(o.a,{href:"/authorization/role-based-access-control#permissionsscopes",children:"permiso"}),", ",(0,s.jsx)(o.a,{href:"/organizations/organization-data",children:"organizaci\xf3n"}),", ",(0,s.jsx)(o.a,{href:"/authorization/organization-template#organization-role",children:"rol de organizaci\xf3n"}),", ",(0,s.jsx)(o.a,{href:"/authorization/organization-template#organization-permission",children:"permiso de organizaci\xf3n"}),", e ",(0,s.jsx)(o.a,{href:"/end-user-flows",children:"interacci\xf3n del usuario"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Cuando se activa un evento, Logto env\xeda una solicitud HTTP a la URL del Endpoint que proporcionas, conteniendo informaci\xf3n detallada sobre el evento, como ID de usuario, nombre de usuario, correo electr\xf3nico y otros detalles relevantes (para m\xe1s informaci\xf3n sobre los datos incluidos en la carga \xfatil y el encabezado, consulta ",(0,s.jsx)(o.a,{href:"/developers/webhooks/webhooks-request",children:"Solicitud de Webhook"}),"). Tu aplicaci\xf3n puede procesar esta solicitud y tomar acciones personalizadas, como enviar un correo electr\xf3nico o actualizar datos en la base de datos."]}),"\n",(0,s.jsx)(o.p,{children:"Continuamente a\xf1adimos m\xe1s eventos basados en las necesidades de los usuarios. Si tienes requisitos espec\xedficos para tu negocio, por favor h\xe1znoslo saber."}),"\n",(0,s.jsx)(o.h2,{id:"por-qu\xe9-usar-webhook",children:"\xbfPor qu\xe9 usar Webhook?"}),"\n",(0,s.jsx)(o.p,{children:"Los Webhooks ofrecen comunicaci\xf3n en tiempo real entre aplicaciones, eliminando la necesidad de sondeo y permitiendo actualizaciones de datos inmediatas. Simplifican la integraci\xf3n de aplicaciones y la automatizaci\xf3n de flujos de trabajo sin c\xf3digo complejo o APIs propietarias."}),"\n",(0,s.jsx)(o.p,{children:"Aqu\xed hay algunos ejemplos de casos de uso comunes de Webhook para CIAM:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Enviar correos electr\xf3nicos:"})," Configura un Webhook para enviar un correo de bienvenida a nuevos usuarios al registrarse o notificar a los administradores cuando un usuario inicia sesi\xf3n desde un nuevo dispositivo o ubicaci\xf3n."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Enviar notificaciones:"})," Configura un Webhook para activar un asistente virtual con tu sistema CRM para proporcionar soporte al cliente en tiempo real cuando los usuarios se registran."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Realizar llamadas adicionales a API"}),": Configura un Webhook para verificar el acceso del usuario comprobando su dominio de correo electr\xf3nico o direcci\xf3n IP y luego usa la Management API de Logto para asignar roles apropiados con permisos de recursos."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Sincronizaci\xf3n de datos:"})," Configura Webhook para mantener la aplicaci\xf3n actualizada sobre cambios como suspensiones o eliminaciones de cuentas de usuario."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Generar informes"}),": Configura un Webhook para recibir datos de actividad de inicio de sesi\xf3n de usuarios y utilizarlos para crear informes sobre el compromiso o patrones de uso de los usuarios."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"t\xe9rminos",children:"T\xe9rminos"}),"\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Elemento"}),(0,s.jsx)(o.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Evento"}),(0,s.jsx)(o.td,{children:"Cuando se realiza una acci\xf3n espec\xedfica, activar\xe1 un evento de hook con un tipo espec\xedfico. Por ejemplo, Logto emitir\xe1 un evento de hook PostRegister cuando el usuario termine el proceso de registro y cree una nueva cuenta."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Hook"}),(0,s.jsx)(o.td,{children:"Una acci\xf3n \xfanica o una serie de acciones que se enganchan a un evento espec\xedfico. La acci\xf3n puede ser llamar a una API, ejecutar fragmentos de c\xf3digo, etc."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Webhook"}),(0,s.jsx)(o.td,{children:"Un subtipo de hook que indica llamar a una API con la carga \xfatil del evento."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Supongamos que un desarrollador quiere enviar una notificaci\xf3n cuando un usuario inicia sesi\xf3n a trav\xe9s de un nuevo dispositivo, el desarrollador puede agregar un webhook que llame a su API de servicio de seguridad al evento PostSignIn."}),(0,s.jsx)(o.td,{})]})]})]}),"\n",(0,s.jsxs)(o.p,{children:["Aqu\xed tienes un ejemplo de c\xf3mo habilitar dos webhooks para el evento ",(0,s.jsx)(o.code,{children:"PostSignIn"})," en Logto:"]}),"\n",(0,s.jsx)(o.mermaid,{value:"graph LR\n  subgraph Logto\n    SF(Finalizaci\xf3n de inicio de sesi\xf3n)\n    PS(Post inicio de sesi\xf3n)\n    WH2(Webhook 2)\n    WH1(Webhook 1)\n  end\n\n  subgraph Servicio 2\n    E2(Endpoint)\n  end\n\n  subgraph Servicio 1\n    E1(Endpoint)\n  end\n\n  SF --\x3e|Activar| PS\n  PS --\x3e WH1\n  PS --\x3e WH2\n  WH1 ---\x3e|Llamada API POST| E1\n  WH2 ---\x3e|Llamada API POST| E2\n"}),"\n",(0,s.jsx)(o.h2,{id:"preguntas-frecuentes",children:"Preguntas frecuentes"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"\xbfLogto admite webhooks sincronizados?"}),(0,s.jsx)(o.p,{children:"Aunque los webhooks sincronizados har\xedan que el flujo de inicio de sesi\xf3n del usuario fuera m\xe1s fluido, a\xfan no los admitimos (lo haremos en el futuro). Por lo tanto, los escenarios que dependen de webhooks sincronizados actualmente requieren diferentes soluciones alternativas. Si tienes alguna pregunta, no dudes en contactarnos."})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"\xbfC\xf3mo manejar el cambio de permisos de usuario?"}),(0,s.jsxs)(o.p,{children:["Consulta la gu\xeda ",(0,s.jsx)(o.a,{href:"/authorization/role-based-access-control/protect-api-resources-with-rbac/#optional-handle-user-permission-change",children:"Gestionar el cambio de permisos de usuario"}),"."]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"\xbfC\xf3mo depurar el tiempo de espera del webhook?"}),(0,s.jsx)(o.p,{children:"Para el endpoint que recibe Webhooks, debe devolver una respuesta 2xx lo m\xe1s r\xe1pido posible para informar a Logto que el Webhook se ha recibido con \xe9xito. Dado que diferentes usuarios tienen l\xf3gicas de procesamiento muy diferentes para Webhooks, las tareas excesivamente complejas podr\xedan tardar varios segundos, causando que el Webhook de Logto se agote. La mejor pr\xe1ctica es mantener tu propia cola de eventos; al recibir el Webhook de Logto, inserta el evento en la cola y devuelve una respuesta 2xx a Logto. Luego, deja que tu propio trabajador procese las tareas en la cola paso a paso. Si el trabajador encuentra un error, man\xe9jalo en tu propio servidor."})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsxs)("summary",{children:["\xbfPuedo obtener la direcci\xf3n IP del cliente desde los webhooks ",(0,s.jsx)(o.code,{children:"PostSignIn"}),"?"]}),(0,s.jsx)(o.p,{children:"S\xed, puedes obtener la direcci\xf3n IP, agentes de usuario, etc., en la carga \xfatil del Webhook. Si necesitas informaci\xf3n que actualmente no est\xe1 soportada, puedes crear solicitudes de caracter\xedsticas en los problemas de GitHub, o contactarnos."})]})]})}function u(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},15658:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>t});var a=n(30758);const s={},i=a.createContext(s);function r(e){const o=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:o},e.children)}}}]);