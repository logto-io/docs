"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[11378],{99354:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"integrations/email/mailgun/README","title":"Configura la verificaci\xf3n por correo electr\xf3nico con el servicio de correo electr\xf3nico Mailgun","description":"El conector oficial de Logto para el servicio de correo electr\xf3nico Mailgun.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrations/email/mailgun/README.mdx","sourceDirName":"integrations/email/mailgun","slug":"/integrations/mailgun","permalink":"/es/integrations/mailgun","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrations/email/mailgun/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/mailgun","sidebar_label":"Mailgun","sidebar_custom_props":{"description":"Mailgun es un servicio de entrega de correos electr\xf3nicos para enviar, recibir y rastrear correos electr\xf3nicos."}},"sidebar":"integrationsSidebar","previous":{"title":"HTTP Email","permalink":"/es/integrations/http-email"},"next":{"title":"Postmark","permalink":"/es/integrations/postmark"}}');var r=i(86070),c=i(15658),a=i(40428);const l={slug:"/integrations/mailgun",sidebar_label:"Mailgun",sidebar_custom_props:{description:"Mailgun es un servicio de entrega de correos electr\xf3nicos para enviar, recibir y rastrear correos electr\xf3nicos."}},s="Configura la verificaci\xf3n por correo electr\xf3nico con el servicio de correo electr\xf3nico Mailgun",t={},d=[...a.RM,{value:"Prerrequisitos",id:"prerrequisitos",level:2},{value:"Configuraci\xf3n b\xe1sica",id:"configuraci\xf3n-b\xe1sica",level:2},{value:"Entregas",id:"entregas",level:2},{value:"Objeto de configuraci\xf3n",id:"objeto-de-configuraci\xf3n",level:3},{value:"Tipos de uso",id:"tipos-de-uso",level:3},{value:"Configuraci\xf3n de contenido",id:"configuraci\xf3n-de-contenido",level:3},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Probar el conector de correo electr\xf3nico de Mailgun",id:"probar-el-conector-de-correo-electr\xf3nico-de-mailgun",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"configura-la-verificaci\xf3n-por-correo-electr\xf3nico-con-el-servicio-de-correo-electr\xf3nico-mailgun",children:"Configura la verificaci\xf3n por correo electr\xf3nico con el servicio de correo electr\xf3nico Mailgun"})}),"\n",(0,r.jsx)(n.p,{children:"El conector oficial de Logto para el servicio de correo electr\xf3nico Mailgun."}),"\n",(0,r.jsx)(a.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Una cuenta de ",(0,r.jsx)(n.a,{href:"https://www.mailgun.com/",children:"Mailgun"})]}),"\n",(0,r.jsxs)(n.li,{children:["Una clave API de tu cuenta de Mailgun, que requiere el permiso para enviar mensajes (correos electr\xf3nicos). Consulta ",(0,r.jsx)(n.a,{href:"https://help.mailgun.com/hc/en-us/articles/203380100-Where-Can-I-Find-My-API-Key-and-SMTP-Credentials-",children:"Where Can I Find My API Key and SMTP Credentials?"})," para m\xe1s informaci\xf3n."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuraci\xf3n-b\xe1sica",children:"Configuraci\xf3n b\xe1sica"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Completa el campo ",(0,r.jsx)(n.code,{children:"endpoint"})," cuando est\xe9s utilizando un endpoint diferente de la API de Mailgun, por ejemplo, la regi\xf3n de la UE deber\xeda ser ",(0,r.jsx)(n.code,{children:"https://api.eu.mailgun.net"}),". El valor predeterminado es ",(0,r.jsx)(n.code,{children:"https://api.mailgun.net"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Completa el campo ",(0,r.jsx)(n.code,{children:"domain"})," con el dominio que has registrado en tu cuenta de Mailgun. Este valor se puede encontrar en la secci\xf3n ",(0,r.jsx)(n.strong,{children:"Domains"})," del panel de Mailgun. El dominio debe estar en el formato ",(0,r.jsx)(n.code,{children:"example.com"}),", sin el prefijo ",(0,r.jsx)(n.code,{children:"https://"})," o ",(0,r.jsx)(n.code,{children:"http://"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Completa el campo ",(0,r.jsx)(n.code,{children:"apiKey"})," con la clave API que has generado en tu cuenta de Mailgun."]}),"\n",(0,r.jsxs)(n.li,{children:["Completa el campo ",(0,r.jsx)(n.code,{children:"from"})," con la direcci\xf3n de correo electr\xf3nico desde la cual deseas enviar correos electr\xf3nicos. Esta direcci\xf3n de correo electr\xf3nico debe estar registrada en tu cuenta de Mailgun. La direcci\xf3n de correo electr\xf3nico debe estar en el formato ",(0,r.jsx)(n.code,{children:"Nombre del Remitente \\<sender@example.com>"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"entregas",children:"Entregas"}),"\n",(0,r.jsx)(n.h3,{id:"objeto-de-configuraci\xf3n",children:"Objeto de configuraci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:'La secci\xf3n "Entregas" te permite configurar el contenido de los correos electr\xf3nicos que se enviar\xe1n en diferentes escenarios. Es un mapa JSON de clave-valor donde la clave es el tipo de uso y el valor es un objeto que contiene la configuraci\xf3n del contenido para el correo electr\xf3nico a enviar.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "<usage-type>": {\n    // ...\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"tipos-de-uso",children:"Tipos de uso"}),"\n",(0,r.jsx)(n.p,{children:"Se admiten los siguientes tipos de uso:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Register"}),": El correo electr\xf3nico que se enviar\xe1 cuando un usuario se registre."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SignIn"}),": El correo electr\xf3nico que se enviar\xe1 cuando un usuario inicie sesi\xf3n."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ForgotPassword"}),": El correo electr\xf3nico que se enviar\xe1 cuando un usuario restablezca su contrase\xf1a."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Generic"}),": El correo electr\xf3nico que se enviar\xe1 cuando un usuario realice una acci\xf3n gen\xe9rica, por ejemplo, probar el conector de correo electr\xf3nico."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),"\nSi el tipo de uso no est\xe1 especificado en la configuraci\xf3n de entregas, se enviar\xe1 el correo electr\xf3nico gen\xe9rico. Si el correo electr\xf3nico gen\xe9rico no est\xe1 especificado, el conector devolver\xe1 un error."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"configuraci\xf3n-de-contenido",children:"Configuraci\xf3n de contenido"}),"\n",(0,r.jsx)(n.p,{children:"El conector admite tanto contenido HTML directo como plantillas de Mailgun. Puedes usar uno de ellos para cada tipo de uso."}),"\n",(0,r.jsxs)(n.p,{children:["Tanto en el asunto como en el contenido, puedes usar el marcador ",(0,r.jsx)(n.code,{children:"{{code}}"})," para insertar el c\xf3digo de verificaci\xf3n."]}),"\n",(0,r.jsx)(n.p,{children:"Para usar contenido HTML directo, completa los siguientes campos:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"subject"}),": El asunto del correo electr\xf3nico a enviar."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"replyTo"}),": La direcci\xf3n de correo electr\xf3nico que se utilizar\xe1 como direcci\xf3n de respuesta."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"html"}),": (Requerido) El contenido HTML del correo electr\xf3nico a enviar."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"text"}),": La versi\xf3n en texto plano del correo electr\xf3nico a enviar."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Para usar una plantilla de Mailgun, completa los siguientes campos:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"subject"}),": El asunto del correo electr\xf3nico a enviar."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"replyTo"}),": La direcci\xf3n de correo electr\xf3nico que se utilizar\xe1 como direcci\xf3n de respuesta."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"template"}),": (Requerido) El nombre de la plantilla de Mailgun a utilizar."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"variables"}),": Las variables que se pasar\xe1n a la plantilla de Mailgun. Debe ser un mapa JSON de clave-valor ya que se convertir\xe1 en cadena antes de enviarlo a Mailgun. Ten en cuenta que no es necesario incluir la variable ",(0,r.jsx)(n.code,{children:"code"})," ya que se agregar\xe1 autom\xe1ticamente por el conector."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente es un ejemplo de la configuraci\xf3n de entregas:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "Register": {\n    "subject": "{{code}} es tu c\xf3digo de verificaci\xf3n",\n    "replyTo": "Foo <foo@bar.com>",\n    "html": "<h1>Bienvenido a Logto</h1><p>Tu c\xf3digo de verificaci\xf3n es {{code}}.</p>",\n    "text": "Bienvenido a Logto. Tu c\xf3digo de verificaci\xf3n es {{code}}."\n  },\n  "SignIn": {\n    "subject": "Bienvenido de nuevo a Logto",\n    "replyTo": "Foo <foo@bar.com>",\n    "template": "logto-sign-in",\n    "variables": {\n      "bar": "baz"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"probar-el-conector-de-correo-electr\xf3nico-de-mailgun",children:"Probar el conector de correo electr\xf3nico de Mailgun"}),"\n",(0,r.jsx)(n.p,{children:'Puedes escribir una direcci\xf3n de correo electr\xf3nico y hacer clic en "Enviar" para ver si la configuraci\xf3n funciona antes de "Guardar y Listo".'}),"\n",(0,r.jsxs)(n.p,{children:["Eso es todo. No olvides ",(0,r.jsx)(n.a,{href:"/connectors/email-connectors/#enable-email-sign-up-or-sign-in",children:"Habilitar el conector en la experiencia de inicio de sesi\xf3n"})]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},40428:(e,n,i)=>{i.d(n,{Ay:()=>l,RM:()=>c});var o=i(86070),r=i(15658);const c=[];function a(e){const n={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["En esta gu\xeda, asumimos que tienes conocimientos b\xe1sicos de los conectores de Logto. Si no los tienes, consulta la gu\xeda ",(0,o.jsx)(n.a,{href:"/connectors",children:"Configurar conectores"})," para comenzar."]})})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var o=i(30758);const r={},c=o.createContext(r);function a(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);