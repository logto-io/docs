"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[11496],{68707:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"developers/sdk-conventions/core-sdk-convention","title":"Convenci\xf3n del Core SDK","description":"Convenciones b\xe1sicas","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/developers/sdk-conventions/core-sdk-conventions.mdx","sourceDirName":"developers/sdk-conventions","slug":"/developers/sdk-conventions/core-sdk-convention","permalink":"/es/developers/sdk-conventions/core-sdk-convention","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/developers/sdk-conventions/core-sdk-conventions.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"core-sdk-convention","title":"Convenci\xf3n del Core SDK","sidebar_label":"Convenci\xf3n del Core SDK","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Estrategia de dise\xf1o","permalink":"/es/developers/sdk-conventions/design-strategy"},"next":{"title":"Convenci\xf3n del SDK de Plataforma","permalink":"/es/developers/sdk-conventions/platform-sdk-convention"}}');var r=d(86070),i=d(15658);const c={id:"core-sdk-convention",title:"Convenci\xf3n del Core SDK",sidebar_label:"Convenci\xf3n del Core SDK",sidebar_position:3},l="Convenci\xf3n del Core SDK",t={},o=[{value:"Convenciones b\xe1sicas",id:"convenciones-b\xe1sicas",level:2},{value:"Requisitos b\xe1sicos",id:"requisitos-b\xe1sicos",level:2},{value:"Tipos",id:"tipos",level:3},{value:"Funciones utilitarias",id:"funciones-utilitarias",level:3},{value:"Funciones principales",id:"funciones-principales",level:3}];function h(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:d}=n;return d||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"convenci\xf3n-del-core-sdk",children:"Convenci\xf3n del Core SDK"})}),"\n",(0,r.jsx)(n.h2,{id:"convenciones-b\xe1sicas",children:"Convenciones b\xe1sicas"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"El n\xfacleo debe contener solo funciones independientes de la plataforma."}),"\n",(0,r.jsxs)(n.li,{children:["El n\xfacleo debe nombrarse como ",(0,r.jsx)(n.code,{children:"{$language}"})," y estar bajo el directorio ra\xedz del repositorio. Por ejemplo, ",(0,r.jsx)(n.code,{children:"logto/js/js"}),", ",(0,r.jsx)(n.code,{children:"logto/kotlin/kotlin"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["El paquete del n\xfacleo debe nombrarse como ",(0,r.jsx)(n.code,{children:"{$language}"})," bajo el \xe1mbito de Logto. Por ejemplo, ",(0,r.jsx)(n.code,{children:"@logto/js"}),", ",(0,r.jsx)(n.code,{children:"io.logto.sdk:kotlin"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"requisitos-b\xe1sicos",children:"Requisitos b\xe1sicos"}),"\n",(0,r.jsx)(n.p,{children:"Cualquier Core SDK debe contener:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Tipos"}),"\n",(0,r.jsx)(n.li,{children:"Funciones utilitarias"}),"\n",(0,r.jsx)(n.li,{children:"Funciones principales"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"tipos",children:"Tipos"}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"OidcConfigResponse"}),(0,r.jsxs)(n.p,{children:["La configuraci\xf3n del proveedor de identidad, que se puede obtener a trav\xe9s de la API ",(0,r.jsx)(n.code,{children:"/oidc/.well-known/openid-configuration"}),"."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Propiedades"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"authorizationEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tokenEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"endSessionEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"revocationEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"jwksUri"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"issuer"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]})]})]})]}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"CodeTokenResponse"}),(0,r.jsxs)(n.p,{children:["Los datos de respuesta de ",(0,r.jsx)(n.code,{children:"/oidc/token"})," (por c\xf3digo de autorizaci\xf3n)."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Propiedades"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Requerido"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refreshToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scope"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expiresIn"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:"\u2705"})]})]})]})]}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"RefreshTokenResponse"}),(0,r.jsxs)(n.p,{children:["Los datos de respuesta de ",(0,r.jsx)(n.code,{children:"/oidc/token"})," (por token de actualizaci\xf3n) al refrescar tokens mediante un token de actualizaci\xf3n."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Propiedades"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Requerido"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refreshToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scope"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expiresIn"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:"\u2705"})]})]})]})]}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"IdTokenClaims"}),(0,r.jsx)(n.p,{children:"Reclamos llevados por el token de ID."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Propiedades"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Requerido"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sub"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aud"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"iat"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"iss"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"atHash"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"username"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"avatar"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"funciones-utilitarias",children:"Funciones utilitarias"}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"generateCodeVerifier"}),(0,r.jsxs)(n.p,{children:["Generar un verificador de c\xf3digo.",(0,r.jsx)(n.br,{}),"\n","La longitud del verificador de c\xf3digo est\xe1 codificada como 64.",(0,r.jsx)(n.br,{}),"\n","El valor de retorno DEBE estar encriptado a una cadena en formato base64 segura para URL."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Referencia"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://oauth.net/2/pkce/",children:"PKCE"})}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metros"})}),(0,r.jsx)(n.p,{children:"Ninguno."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tipo de retorno"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})})]}),"\n",(0,r.jsxs)(d,{id:"generatecodeverifier",children:[(0,r.jsx)("summary",{children:"generateCodeChallenge"}),(0,r.jsxs)(n.p,{children:["Generar un desaf\xedo de c\xf3digo basado en un verificador de c\xf3digo.",(0,r.jsx)(n.br,{}),"\n","Este m\xe9todo encripta el verificador de c\xf3digo y devuelve el resultado en un formato Base64 seguro para URL.",(0,r.jsx)(n.br,{}),"\n","Codificamos el algoritmo de encriptaci\xf3n como ",(0,r.jsx)(n.code,{children:"SHA-256"})," en Logto V1."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Referencia"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://oauth.net/2/pkce/",children:"PKCE"})}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metros"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Notas"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"codeVerifier"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Generado por generateCodeVerifier"})]})})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tipo de retorno"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})})]}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"generateState"}),(0,r.jsxs)(n.p,{children:['"State" se utiliza para prevenir el ataque CSRF.',(0,r.jsx)(n.br,{}),"\n",'La longitud del "state" est\xe1 codificada como 64.',(0,r.jsx)(n.br,{}),"\n","La cadena de resultado que se devolver\xe1 DEBE estar encriptada a una cadena en formato base64 segura para URL."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Referencia"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-10.12",children:"CSRF"})}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metros"})}),(0,r.jsx)(n.p,{children:"Ninguno."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tipo de retorno"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})})]}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"decodeIdToken"}),(0,r.jsxs)(n.p,{children:["Decodificar un Token de ID sin verificaci\xf3n secreta.",(0,r.jsx)(n.br,{}),"\n","Devuelve un ",(0,r.jsx)(n.code,{children:"IdTokenClaims"})," que lleva todos los reclamos del token en la secci\xf3n de carga \xfatil."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metros"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"token"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]})})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tipo de retorno"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"IdTokenClaims"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Lanza"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["El ",(0,r.jsx)(n.code,{children:"token"})," no es un JWT v\xe1lido."]}),"\n"]})]}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"verifyIdToken"}),(0,r.jsx)(n.p,{children:"Verificar si un Token de ID es legal."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Verificar clave de firma"})}),(0,r.jsxs)(n.p,{children:["OIDC admite el JSON Web Key Set.\nEsta funci\xf3n acepta un objeto ",(0,r.jsx)(n.code,{children:"JsonWebKeySet"})," de una biblioteca de terceros (jose) para la verificaci\xf3n."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'// Ejemplo de JsonWebKeySet\n{\n  "keys": [\n    {\n      "kty": "RSA",\n      "use": "sig",\n      "kid": "xxxx",\n      "e": "xxxx",\n      "n": "xxxx"\n    }\n  ]\n}\n'})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Verificar reclamos"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Verificar que el ",(0,r.jsx)(n.code,{children:"iss"})," en el Token de ID coincida con el emisor de este token."]}),"\n",(0,r.jsxs)(n.li,{children:["Verificar que el reclamo ",(0,r.jsx)(n.code,{children:"aud"})," (audiencia) sea igual al ID del cliente."]}),"\n",(0,r.jsx)(n.li,{children:"Verificar que el tiempo actual sea antes del tiempo de expiraci\xf3n."}),"\n",(0,r.jsxs)(n.li,{children:["Verificar que el tiempo de emisi\xf3n (",(0,r.jsx)(n.code,{children:"iat"}),") no sea m\xe1s de +/- 1 minuto respecto al tiempo actual."]}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Referencia"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation",children:"OpenID connect core - Validaci\xf3n del Token de ID"})}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metros"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"issuer"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"jwks"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"JsonWebKeySet"})})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tipo de retorno"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Lanza"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fallo en la verificaci\xf3n de la clave de firma"}),"\n",(0,r.jsx)(n.li,{children:"Fallo en la verificaci\xf3n de reclamos"}),"\n"]})]}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"verifyAndParseCodeFromCallbackUri"}),(0,r.jsxs)(n.p,{children:["Verificar que el callbackUri de inicio de sesi\xf3n sea legal y devolver el ",(0,r.jsx)(n.code,{children:"code"})," extra\xeddo de callbackUri."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Verificar URI de Callback"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Verificar que el ",(0,r.jsx)(n.code,{children:"callbackUri"})," comience con ",(0,r.jsx)(n.code,{children:"redirectUri"})]}),"\n",(0,r.jsxs)(n.li,{children:["Verificar que no haya ",(0,r.jsx)(n.code,{children:"error"})," en el ",(0,r.jsx)(n.code,{children:"callbackUri"})," (Consultar ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1",children:"Respuesta de Error"})," en el URI de redirecci\xf3n)."]}),"\n",(0,r.jsxs)(n.li,{children:["Verificar que el ",(0,r.jsx)(n.code,{children:"callbackUri"})," contenga ",(0,r.jsx)(n.code,{children:"state"}),", que debe ser igual al valor ",(0,r.jsx)(n.code,{children:"state"})," que especificaste en ",(0,r.jsx)(n.code,{children:"generateSignInUri"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Verificar que el ",(0,r.jsx)(n.code,{children:"callbackUri"})," contenga el valor del par\xe1metro ",(0,r.jsx)(n.code,{children:"code"}),", que usar\xe1s al solicitar a ",(0,r.jsx)(n.code,{children:"/oidc/token"})," (por token de actualizaci\xf3n)."]}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metros"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"callbackUri"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"redirectUri"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tipo de retorno"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Lanza"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fallos en las verificaciones"}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"funciones-principales",children:"Funciones principales"}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"fetchOidcConfig"}),(0,r.jsxs)(n.p,{children:["Devuelve ",(0,r.jsx)(n.code,{children:"OidcConfigResponse"})," solicitando a ",(0,r.jsx)(n.code,{children:"/oidc/.well-known/openid-configuration"}),"."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metros"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Notas"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"endpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"El endpoint del servicio OIDC"})]})})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tipo de retorno"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"OidcConfigResponse"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Lanza"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fallo en la obtenci\xf3n"}),"\n"]})]}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"generateSignInUri"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metros"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Requerido"}),(0,r.jsx)(n.th,{children:"Notas"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"authorizationEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"redirectUri"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"codeChallenge"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scopes"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"La implementaci\xf3n puede variar seg\xfan las especificaciones del lenguaje."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resources"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"La implementaci\xf3n puede variar seg\xfan las especificaciones del lenguaje."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prompt"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Predeterminado: ",(0,r.jsx)(n.code,{children:"consent"}),"."]})]})]})]}),(0,r.jsxs)(n.p,{children:["La URL se generar\xe1 basada en ",(0,r.jsx)(n.code,{children:"authorizationEndpoint"})," y contendr\xe1 los siguientes par\xe1metros de consulta:"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metros de consulta de la URL de inicio de sesi\xf3n"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Clave de consulta"}),(0,r.jsx)(n.th,{children:"Requerido"}),(0,r.jsx)(n.th,{children:"Notas"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"client_id"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"redirect_uri"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code_challenge"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code_challenge_method"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Codificado como S256."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scope"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"scope siempre contiene openid y offline_access, incluso si el scope de entrada proporciona un valor nulo o vac\xedo."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resource"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Podemos agregar resource a uri m\xe1s de una vez, el backend los convertir\xe1 en una lista. e.g. ",(0,r.jsx)(n.code,{children:"resource=a&resource=b"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"response_type"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Codificado como code."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prompt"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tipo de retorno"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})})]}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"generateSignOutUri"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metros"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Requerido"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"endSessionEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"postLogoutRedirectUri"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]})]})]}),(0,r.jsxs)(n.p,{children:["La URL a generar se basar\xe1 en ",(0,r.jsx)(n.code,{children:"endSessionEndpoint"})," y contendr\xe1 los siguientes par\xe1metros de consulta:"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metros de consulta de la URL de cierre de sesi\xf3n"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Clave de consulta"}),(0,r.jsx)(n.th,{children:"Requerido"}),(0,r.jsx)(n.th,{children:"Notas"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id_token_hint"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsxs)(n.td,{children:["el par\xe1metro ",(0,r.jsx)(n.code,{children:"idToken"})," ingresado"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"post_logout_redirect_uri"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["el par\xe1metro ",(0,r.jsx)(n.code,{children:"postLogoutRedirectUri"})," ingresado"]})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tipo de retorno"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})})]}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"fetchTokenByAuthorizationCode"}),(0,r.jsxs)(n.p,{children:["Obtener un token (",(0,r.jsx)(n.code,{children:"CodeTokenResponse"}),") solicitando a ",(0,r.jsx)(n.code,{children:"/oidc/token"})," (por c\xf3digo de autorizaci\xf3n)."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metros"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Requerido"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tokenEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"codeVerifier"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"redirectUri"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resource"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Solicitud HTTP"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Endpoint: ",(0,r.jsx)(n.code,{children:"/oidc/token"})]}),"\n",(0,r.jsxs)(n.li,{children:["M\xe9todo: ",(0,r.jsx)(n.code,{children:"POST"})]}),"\n",(0,r.jsxs)(n.li,{children:["Content-Type: ",(0,r.jsx)(n.code,{children:"application/x-www-form-urlencoded"})]}),"\n",(0,r.jsx)(n.li,{children:"Carga \xfatil:"}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Clave de consulta"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Requerido"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"grant_type"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string: 'authorization_code'"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code_verifier"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"client_id"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"redirect_uri"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resource"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tipo de retorno"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"CodeTokenResponse"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Lanza"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fallo en la obtenci\xf3n"}),"\n"]})]}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"fetchTokenByRefreshToken"}),(0,r.jsxs)(n.p,{children:["Obtener un token (",(0,r.jsx)(n.code,{children:"RefreshTokenTokenResponse"}),") a trav\xe9s de ",(0,r.jsx)(n.code,{children:"/oidc/token"})," (por token de actualizaci\xf3n)."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metros"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Requerido"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tokenEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refreshToken"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resource"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scopes"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Solicitud HTTP"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Endpoint: ",(0,r.jsx)(n.code,{children:"/oidc/token"})]}),"\n",(0,r.jsxs)(n.li,{children:["M\xe9todo: ",(0,r.jsx)(n.code,{children:"POST"})]}),"\n",(0,r.jsxs)(n.li,{children:["Content-Type: ",(0,r.jsx)(n.code,{children:"application/x-www-form-urlencoded"})]}),"\n",(0,r.jsx)(n.li,{children:"Carga \xfatil:"}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Clave de consulta"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Requerido"}),(0,r.jsx)(n.th,{children:"Notas"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"grant_type"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string: 'refresh_token'"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refresh_token"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"client_id"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resource"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scope"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["unimos los valores de ",(0,r.jsx)(n.code,{children:"scopes"})," con espacio para construir esta cadena ",(0,r.jsx)(n.code,{children:"scope"})]})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tipo de retorno"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"RefreshTokenTokenResponse"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Lanza"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fallo en la obtenci\xf3n"}),"\n"]})]}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"revoke"}),(0,r.jsxs)(n.p,{children:["Solicitar a la API ",(0,r.jsx)(n.code,{children:"/oidc/token/revocation"})," para notificar al servidor de autorizaci\xf3n que un token de actualizaci\xf3n o acceso previamente obtenido ya no es necesario."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metros"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Notas"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"revocationEndpoint"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"token"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"token a revocar"})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Solicitud HTTP"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Endpoint: ",(0,r.jsx)(n.code,{children:"/oidc/token/revocation"})]}),"\n",(0,r.jsxs)(n.li,{children:["M\xe9todo: ",(0,r.jsx)(n.code,{children:"POST"})]}),"\n",(0,r.jsxs)(n.li,{children:["Content-Type: ",(0,r.jsx)(n.code,{children:"application/x-www-form-urlencoded"})]}),"\n",(0,r.jsx)(n.li,{children:"Carga \xfatil:"}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Clave de consulta"}),(0,r.jsx)(n.th,{children:"Tipo"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"client_id"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"token"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})})]})]})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tipo de retorno"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Lanza"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fallo en la revocaci\xf3n"}),"\n"]})]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},15658:(e,n,d)=>{d.d(n,{R:()=>c,x:()=>l});var s=d(30758);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);