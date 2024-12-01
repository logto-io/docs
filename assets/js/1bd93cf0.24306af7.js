"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[59243],{50928:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"concepts/opaque-token","title":"Opaque token","description":"During the authentication process, if no resource is specified, Logto will issue an opaque access token instead of a JWT. The opaque token is a random string and it\'s much shorter than a JWT:","source":"@site/docs/concepts/opaque-token.mdx","sourceDirName":"concepts","slug":"/concepts/opaque-token","permalink":"/concepts/opaque-token","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/concepts/opaque-token.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"Configuration","permalink":"/concepts/core-service/configuration"},"next":{"title":"Concepts","permalink":"/concepts/"}}');var i=t(86070),s=t(15658);const c={sidebar_position:6},r="Opaque token",a={},d=[];function l(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"opaque-token",children:"Opaque token"})}),"\n",(0,i.jsx)(n.p,{children:"During the authentication process, if no resource is specified, Logto will issue an opaque access token instead of a JWT. The opaque token is a random string and it's much shorter than a JWT:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "access_token": "some-random-string", // opaque token\n  "expires_in": 3600,\n  "id_token": "eyJhbGc...aBc", // JWT\n  "scope": "openid profile email",\n  "token_type": "Bearer"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The opaque token can be used to call the ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"userinfo endpoint"})," and to access protected resources that require authentication. Since it's not a JWT, how can the resource server validate it?"]}),"\n",(0,i.jsxs)(n.p,{children:["Logto provides an ",(0,i.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7662.html",children:"introspection endpoint"})," that can be used to validate opaque tokens. By default, the introspection endpoint is ",(0,i.jsx)(n.code,{children:"/oidc/token/introspection"})," and accepts ",(0,i.jsx)(n.code,{children:"POST"})," requests. The following parameter is required:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"token"}),": the opaque token to validate"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The endpoint also requires client authentication. You can use one of the following methods:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["HTTP Basic authentication: Use the ",(0,i.jsx)(n.code,{children:"Authorization"})," header with the value ",(0,i.jsx)(n.code,{children:"Basic <base64-encoded-credentials>"}),". The credentials must be the client ID and client secret separated by a colon (",(0,i.jsx)(n.code,{children:":"}),") and base64-encoded."]}),"\n",(0,i.jsxs)(n.li,{children:["HTTP POST authentication: Use the ",(0,i.jsx)(n.code,{children:"client_id"})," and ",(0,i.jsx)(n.code,{children:"client_secret"})," parameters:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"client_id"}),": the client ID of the application that requested the token"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"client_secret"}),": the client secret of the application that requested the token"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'The client ID (app ID) and client secret (app secret) can be the app credentials from any "traditional web" or "machine-to-machine" application in Logto. The introspection endpoint will return an error if the credentials are invalid.'}),"\n",(0,i.jsx)(n.p,{children:"The introspection endpoint returns a JSON object with the claims of the token:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "active": true, // whether the token is valid or not\n  "sub": "1234567890" // the subject of the token (the user ID)\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If the token is invalid, the ",(0,i.jsx)(n.code,{children:"active"})," field will be ",(0,i.jsx)(n.code,{children:"false"})," and the ",(0,i.jsx)(n.code,{children:"sub"})," field will be omitted."]}),"\n",(0,i.jsx)(n.p,{children:"Here's a non-normative example of the introspection request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request POST 'https://[tenant-id].logto.app/oidc/token/introspection' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'token=some-random-string' \\\n  --data-urlencode 'client_id=1234567890' \\\n  --data-urlencode 'client_secret=1234567890'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Remember to replace ",(0,i.jsx)(n.code,{children:"[tenant-id]"})," with your tenant ID."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},15658:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(30758);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);