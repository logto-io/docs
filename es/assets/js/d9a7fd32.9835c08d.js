"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[88511],{406:(e,n,i)=>{i.d(n,{Ay:()=>d,RM:()=>o});var r=i(86070),s=i(15658);const o=[];function a(e){const{Url:n}={...(0,s.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{href:"/end-user-flows",children:" Flujos de usuario final: flujos de autenticaci\xf3n, flujos de cuenta y flujos de organizaci\xf3n "}),"\n",(0,r.jsx)(n,{href:"/connectors",children:" Configurar conectores "}),"\n",(0,r.jsx)(n,{href:"/authorization/api-resources/protect-your-api",children:" Protege tu API "})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},22943:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"quick-starts/framework/wordpress/README","title":"A\xf1ade autenticaci\xf3n a tu aplicaci\xf3n WordPress","description":"Este tutorial te mostrar\xe1 c\xf3mo integrar Logto en tu sitio web de WordPress.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/quick-starts/framework/wordpress/README.mdx","sourceDirName":"quick-starts/framework/wordpress","slug":"/quick-starts/wordpress","permalink":"/es/quick-starts/wordpress","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/quick-starts/framework/wordpress/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/quick-starts/wordpress","sidebar_label":"WordPress","sidebar_custom_props":{"description":"WordPress es un sistema de gesti\xf3n de contenido libre y de c\xf3digo abierto."}},"sidebar":"quickStartSidebar","previous":{"title":"Webflow","permalink":"/es/quick-starts/webflow"},"next":{"title":"M\xe1quina a m\xe1quina","permalink":"/es/quick-starts/m2m"}}');var s=i(86070),o=i(15658),a=i(406);const d={slug:"/quick-starts/wordpress",sidebar_label:"WordPress",sidebar_custom_props:{description:"WordPress es un sistema de gesti\xf3n de contenido libre y de c\xf3digo abierto."}},l="A\xf1ade autenticaci\xf3n a tu aplicaci\xf3n WordPress",c={},t=[{value:"Prerrequisitos",id:"prerrequisitos",level:2},{value:"Integraci\xf3n",id:"integraci\xf3n",level:2},{value:"Instalar el plugin",id:"instalar-el-plugin",level:3},{value:"Configurar URI de redirecci\xf3n",id:"configurar-uri-de-redirecci\xf3n",level:3},{value:"Configurar el plugin",id:"configurar-el-plugin",level:3},{value:"Punto de control: Prueba tu aplicaci\xf3n",id:"punto-de-control-prueba-tu-aplicaci\xf3n",level:3},{value:"Mapeo de roles",id:"mapeo-de-roles",level:2},{value:"Prerrequisitos",id:"prerrequisitos-1",level:3},{value:"Implementar el mapeo de roles",id:"implementar-el-mapeo-de-roles",level:3},{value:"Paso 1: accede al archivo functions.php de tu tema",id:"paso-1-accede-al-archivo-functionsphp-de-tu-tema",level:3},{value:"Paso 2: escribe la funci\xf3n de mapeo de roles",id:"paso-2-escribe-la-funci\xf3n-de-mapeo-de-roles",level:3},{value:"Paso 3: entender el c\xf3digo y personalizarlo",id:"paso-3-entender-el-c\xf3digo-y-personalizarlo",level:3},{value:"Paso 4: prueba tu configuraci\xf3n",id:"paso-4-prueba-tu-configuraci\xf3n",level:3},{value:"Lecturas adicionales",id:"lecturas-adicionales",level:2},...a.RM];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"a\xf1ade-autenticaci\xf3n-a-tu-aplicaci\xf3n-wordpress",children:"A\xf1ade autenticaci\xf3n a tu aplicaci\xf3n WordPress"})}),"\n",(0,s.jsxs)(n.p,{children:["Este tutorial te mostrar\xe1 c\xf3mo integrar Logto en tu sitio web de ",(0,s.jsx)(n.a,{href:"https://wordpress.org",children:"WordPress"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Una cuenta de ",(0,s.jsx)(n.a,{href:"https://cloud.logto.io",children:"Logto Cloud"})," o un ",(0,s.jsx)(n.a,{href:"/introduction/set-up-logto-oss",children:"Logto autoalojado"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Una aplicaci\xf3n tradicional de Logto creada."}),"\n",(0,s.jsxs)(n.li,{children:["Un proyecto de WordPress: sigue la gu\xeda oficial de ",(0,s.jsx)(n.a,{href:"https://wordpress.org/support/article/how-to-install-wordpress/",children:"instalaci\xf3n de WordPress"})," para configurar tu sitio web de WordPress antes de continuar."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"integraci\xf3n",children:"Integraci\xf3n"}),"\n",(0,s.jsx)(n.h3,{id:"instalar-el-plugin",children:"Instalar el plugin"}),"\n",(0,s.jsxs)(n.p,{children:["Usaremos el plugin ",(0,s.jsx)(n.a,{href:"https://wordpress.org/plugins/generic-openid-connect/",children:"OpenID Connect Generic"})," para integrar Logto a trav\xe9s del protocolo OIDC en tu sitio web de WordPress."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Inicia sesi\xf3n en tu sitio de WordPress."}),"\n",(0,s.jsx)(n.li,{children:'Navega a "Plugins" y haz clic en "A\xf1adir nuevo".'}),"\n",(0,s.jsx)(n.li,{children:'Busca "OpenID Connect Generic" e instala el plugin de daggerhart.'}),"\n",(0,s.jsx)(n.li,{children:"Activa el plugin."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"configurar-uri-de-redirecci\xf3n",children:"Configurar URI de redirecci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:'Primero, configuremos el URI de redirecci\xf3n. Puedes encontrarlo en la configuraci\xf3n del plugin, despl\xe1zate hacia abajo hasta la secci\xf3n "Notas" y copia el valor del "Redirect URI".'}),"\n",(0,s.jsx)(n.p,{children:'Cambia a la p\xe1gina de detalles de la aplicaci\xf3n en Logto Console. A\xf1ade un URI de redirecci\xf3n y haz clic en "Guardar cambios".'}),"\n",(0,s.jsx)(n.h3,{id:"configurar-el-plugin",children:"Configurar el plugin"}),"\n",(0,s.jsx)(n.p,{children:"Consulta la siguiente tabla para los detalles de configuraci\xf3n necesarios:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Campo del Plugin"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Client ID"}),(0,s.jsx)(n.td,{children:"El ID de la aplicaci\xf3n de tu aplicaci\xf3n Logto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Client Secret"}),(0,s.jsx)(n.td,{children:"El secreto de la aplicaci\xf3n de tu aplicaci\xf3n Logto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OpenID Scope"}),(0,s.jsxs)(n.td,{children:["Ingresa ",(0,s.jsx)(n.code,{children:"email profile openid offline_access"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Login Endpoint URL"}),(0,s.jsx)(n.td,{children:'La URL del endpoint de autorizaci\xf3n de tu aplicaci\xf3n Logto, que es https://[tenant-id].logto.app/oidc/auth, puedes hacer clic en "mostrar detalles del endpoint" en la p\xe1gina de la aplicaci\xf3n Logto para obtener la URL.'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Userinfo Endpoint URL"}),(0,s.jsx)(n.td,{children:"La URL del endpoint de informaci\xf3n del usuario de tu aplicaci\xf3n Logto, que es https://[tenant-id].logto.app/oidc/me."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Token Validation Endpoint URL"}),(0,s.jsx)(n.td,{children:"La URL del endpoint de validaci\xf3n de token de tu aplicaci\xf3n Logto, que es https://[tenant-id].logto.app/oidc/token."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"End Session Endpoint URL"}),(0,s.jsx)(n.td,{children:"La URL del endpoint de fin de sesi\xf3n de tu aplicaci\xf3n Logto, que es https://[tenant-id].logto.app/oidc/session/end."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Identity Key"}),(0,s.jsx)(n.td,{children:"La clave \xfanica en el Token de ID que contiene la identidad del usuario, puede ser email o sub, dependiendo de tu configuraci\xf3n."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Nickname Key"}),(0,s.jsx)(n.td,{children:"La clave en el Token de ID que contiene el apodo del usuario, puedes configurarla en sub y cambiarla m\xe1s tarde."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"punto-de-control-prueba-tu-aplicaci\xf3n",children:"Punto de control: Prueba tu aplicaci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"Ahora, puedes probar tu aplicaci\xf3n:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Cierra sesi\xf3n en tu sitio de WordPress."}),"\n",(0,s.jsx)(n.li,{children:'Visita la p\xe1gina de inicio de sesi\xf3n de WordPress y haz clic en el bot\xf3n "Iniciar sesi\xf3n con Logto".'}),"\n",(0,s.jsx)(n.li,{children:"Ser\xe1s redirigido a la p\xe1gina de inicio de sesi\xf3n de Logto."}),"\n",(0,s.jsx)(n.li,{children:"Inicia sesi\xf3n con tu cuenta de Logto."}),"\n",(0,s.jsx)(n.li,{children:"Ser\xe1s redirigido de vuelta al sitio de WordPress e iniciar\xe1s sesi\xf3n autom\xe1ticamente."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"mapeo-de-roles",children:"Mapeo de roles"}),"\n",(0,s.jsx)(n.p,{children:"WordPress tiene un sistema de gesti\xf3n de roles de usuario incorporado que define qu\xe9 acciones (capacidades) puede realizar un usuario en un sitio. Los roles de usuario predeterminados incluyen Administrador, Editor, Autor, Colaborador y Suscriptor, cada uno con su propio conjunto de capacidades."}),"\n",(0,s.jsx)(n.p,{children:'Logto emplea el Control de Acceso Basado en Roles (RBAC) como su modelo de autorizaci\xf3n, utilizando "alcances" como la unidad m\xe1s peque\xf1a de permiso. Estos alcances definen las acciones espec\xedficas que un usuario autenticado puede realizar dentro de una aplicaci\xf3n. Sin embargo, WordPress opera sobre un principio diferente para gestionar los permisos de usuario, confiando en "roles" predefinidos que agrupan varias capacidades juntas.'}),"\n",(0,s.jsx)(n.p,{children:"Dada esta diferencia fundamental, sugerimos crear roles especiales dentro de Logto que correspondan a los roles definidos en WordPress. Esos roles pueden no tener alcances, solo se utilizan como referencia para mapear usuarios a roles de WordPress."}),"\n",(0,s.jsx)(n.h3,{id:"prerrequisitos-1",children:"Prerrequisitos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Configura roles en Logto que correspondan a los roles en WordPress. Por ejemplo, si tienes un rol 'editor' en WordPress, crea un rol 'group",":editors","' en Logto."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"implementar-el-mapeo-de-roles",children:"Implementar el mapeo de roles"}),"\n",(0,s.jsxs)(n.p,{children:["Para implementar el mapeo de roles, agregaremos c\xf3digo personalizado al archivo ",(0,s.jsx)(n.code,{children:"functions.php"})," del tema de WordPress. Esto implica usar el gancho de acci\xf3n ",(0,s.jsx)(n.code,{children:"wp_login"}),", que se activa cuando un usuario inicia sesi\xf3n. Aqu\xed tienes una gu\xeda paso a paso sobre c\xf3mo configurarlo:"]}),"\n",(0,s.jsx)(n.h3,{id:"paso-1-accede-al-archivo-functionsphp-de-tu-tema",children:"Paso 1: accede al archivo functions.php de tu tema"}),"\n",(0,s.jsxs)(n.p,{children:["Abre el archivo ",(0,s.jsx)(n.code,{children:"functions.php"})," de tu tema. Puedes acceder a este archivo a trav\xe9s del panel de administraci\xf3n de WordPress navegando a Apariencia > Editor de temas y seleccionando ",(0,s.jsx)(n.code,{children:"functions.php"})," de la lista de archivos en el lado derecho. O en el c\xf3digo fuente, navega al directorio de tu tema de WordPress y localiza el archivo ",(0,s.jsx)(n.code,{children:"functions.php"}),". Este archivo te permite agregar funciones PHP personalizadas que extienden la funcionalidad de tu sitio de WordPress."]}),"\n",(0,s.jsx)(n.h3,{id:"paso-2-escribe-la-funci\xf3n-de-mapeo-de-roles",children:"Paso 2: escribe la funci\xf3n de mapeo de roles"}),"\n",(0,s.jsxs)(n.p,{children:["A continuaci\xf3n se muestra un ejemplo simple de una funci\xf3n que podr\xedas agregar a functions.php. Esta funci\xf3n se activar\xe1 al iniciar sesi\xf3n un usuario, y asignar\xe1 roles basados en el reclamo ",(0,s.jsx)(n.code,{children:"roles"})," del usuario obtenido de Logto."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"function logto_handler($user_login, $user = null) {\n\tif (!$user) {\n\t\t$user = get_user_by('login', $user_login);\n\t}\n\n\t$oidc_claims = get_user_meta($user->ID, 'openid-connect-generic-last-user-claim', true);\n\n\tif (in_array('group:editors', $oidc_claims['roles'])) {\n\t\t$user->set_role('editor');\n\t} else {\n\t\t$user->set_role('subscriber');\n\t}\n}\n\nadd_action('wp_login', 'logto_handler', 10, 2);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"paso-3-entender-el-c\xf3digo-y-personalizarlo",children:"Paso 3: entender el c\xf3digo y personalizarlo"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Funci\xf3n ",(0,s.jsx)(n.code,{children:"logto_handler"}),": Esta funci\xf3n toma dos par\xe1metros: ",(0,s.jsx)(n.code,{children:"$user_login"})," (nombre de usuario) y ",(0,s.jsx)(n.code,{children:"$user"})," (objeto de usuario). Recupera roles de Logto que se almacenan en los metadatos del usuario como ",(0,s.jsx)(n.code,{children:"openid-connect-generic-last-user-claim"}),", mapea este rol a un rol correspondiente de WordPress y lo asigna al usuario."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"add_action"}),": Esta l\xednea engancha la funci\xf3n ",(0,s.jsx)(n.code,{children:"logto_handler"})," a la acci\xf3n ",(0,s.jsx)(n.code,{children:"wp_login"}),", que se activa despu\xe9s de que un usuario inicia sesi\xf3n. El ",(0,s.jsx)(n.code,{children:"10"})," es la prioridad (predeterminada), y ",(0,s.jsx)(n.code,{children:"2"})," indica el n\xfamero de argumentos que acepta la funci\xf3n."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["El ejemplo anterior asigna el rol 'editor' a los usuarios autenticados a trav\xe9s de Logto con el nombre de rol ",(0,s.jsx)(n.code,{children:"group:editors"}),". Sin embargo, en un escenario del mundo real, probablemente necesitar\xe1s implementar m\xe1s tipos de mapeos de roles."]}),"\n",(0,s.jsxs)(n.p,{children:["Puedes encontrar la lista de roles de WordPress y sus capacidades ",(0,s.jsx)(n.a,{href:"https://wordpress.org/support/article/roles-and-capabilities/",children:"aqu\xed"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"paso-4-prueba-tu-configuraci\xf3n",children:"Paso 4: prueba tu configuraci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Ahora, probemos la funci\xf3n de mapeo de roles iniciando sesi\xf3n con un usuario que tenga el rol ",(0,s.jsx)(n.code,{children:"group:editors"})," en Logto. Despu\xe9s de iniciar sesi\xf3n, verifica el rol del usuario en WordPress para asegurarte de que el mapeo est\xe9 funcionando correctamente."]}),"\n",(0,s.jsx)(n.h2,{id:"lecturas-adicionales",children:"Lecturas adicionales"}),"\n",(0,s.jsx)(a.Ay,{})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var r=i(30758);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);