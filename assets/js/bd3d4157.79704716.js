"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[95893],{48384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"concepts/core-service/README","title":"Core Service","description":"Introduction","source":"@site/docs/concepts/core-service/README.mdx","sourceDirName":"concepts/core-service","slug":"/concepts/core-service/","permalink":"/concepts/core-service/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/concepts/core-service/README.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_label":"Logto core service","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Authentication vs. authorization","permalink":"/concepts/authn-vs-authz"},"next":{"title":"Configuration","permalink":"/concepts/core-service/configuration"}}');var o=t(86070),r=t(15658);const c={sidebar_label:"Logto core service",sidebar_position:3},s="Core Service",d={},a=[{value:"Introduction",id:"introduction",level:2},{value:"OIDC Provider",id:"oidc-provider",level:2},{value:"Enabled OpenID features",id:"enabled-openid-features",level:3},{value:"Logto API",id:"logto-api",level:2},{value:"Management API",id:"management-api",level:3},{value:"Experience API",id:"experience-api",level:3},{value:"Account API",id:"account-api",level:3},{value:"Frontend proxies",id:"frontend-proxies",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"core-service",children:"Core Service"})}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Core Service"})," is a monolith service for critical Logto duties. The source code is in ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/core",children:(0,o.jsx)(n.code,{children:"@logto/core"})}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Core Service"})," and ",(0,o.jsx)(n.em,{children:"SDK core"})," are two separate concepts. See ",(0,o.jsx)(n.a,{href:"/developers/sdk-conventions",children:"SDK convention"})," for the differences."]})}),"\n",(0,o.jsx)(n.p,{children:"To simplify, we divide Core Service into four major modules:"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"Name"}),(0,o.jsx)("td",{children:"Description"}),(0,o.jsx)("td",{children:"Mount Path"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"OIDC Provider"}),(0,o.jsxs)("td",{children:["An ",(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Provider"}),"."]}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"/oidc"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"Logto API"}),(0,o.jsx)("td",{children:"Management API, Experience API and Account API."}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"/api"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"Frontend proxies"}),(0,o.jsx)("td",{children:"HTTP proxies or static file serving for frontend projects."}),(0,o.jsx)("td",{children:(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)("a",{href:"#frontend-proxies",children:"Frontend proxies"})," for details."]})})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["Backend APIs, including OIDC, are built within the ",(0,o.jsx)(n.code,{children:"core"})," package, while frontend proxies depend on the corresponding sibling packages in the Logto monorepo."]}),"\n",(0,o.jsx)(n.h2,{id:"oidc-provider",children:"OIDC Provider"}),"\n",(0,o.jsxs)(n.p,{children:["Logto uses the amazing certified ",(0,o.jsx)(n.a,{href:"https://openid.net/connect/",children:"OpenID Connect"})," implementation ",(0,o.jsx)(n.a,{href:"https://github.com/panva/node-oidc-provider",children:"node-oidc-provider"})," under the hood. The provider is mounted at ",(0,o.jsx)(n.code,{children:"/oidc"}),", and you can check relative configurations and files in ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/core/src/oidc",children:"packages/core/src/oidc"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The OIDC ",(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"Userinfo Endpoint"})," is available and mounted at ",(0,o.jsx)(n.code,{children:"/oidc/me"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["If you want to directly call OIDC APIs, remember to set header ",(0,o.jsx)(n.code,{children:"Content-Type: application/x-www-form-urlencoded"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"enabled-openid-features",children:"Enabled OpenID features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect Core"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-discovery-1_0.html",children:"OpenID Connect Discovery"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-rpinitiated-1_0.html",children:"OpenID Connect RP-Initiated Logout"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-backchannel-1_0-final.html",children:"OpenID Connect Back-Channel Logout"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc6749.html",children:"OAuth 2.0"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7662.html",children:"OAuth 2.0 Token Introspection"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7009.html",children:"OAuth 2.0 Token Revocation"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"OAuth 2.0 Resource Indicators"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7636.html",children:"Proof Key for Code Exchange (PKCE)"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"logto-api",children:"Logto API"}),"\n",(0,o.jsx)(n.h3,{id:"management-api",children:"Management API"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Management API"})," is a set of APIs that manage and update Logto data. Only users with the ",(0,o.jsx)(n.code,{children:"admin"})," role have access to them."]}),"\n",(0,o.jsxs)(n.p,{children:["Head to ",(0,o.jsx)(n.a,{href:"https://openapi.logto.io",children:"API references"})," to see the details."]}),"\n",(0,o.jsxs)(n.p,{children:["To access the API programmatically, see ",(0,o.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api",children:"Interact with Management API"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"experience-api",children:"Experience API"}),"\n",(0,o.jsx)(n.p,{children:"Experience API is a set of dedicated endpoints that support custom sign-in interface interactions."}),"\n",(0,o.jsx)(n.p,{children:"These APIs enable developers to implement core authentication features including sign-in, sign-up, password reset, social account binding, and multi-factor authentication (MFA). To implement these features, your custom UI needs to interact with the Experience API."}),"\n",(0,o.jsx)(n.p,{children:"To better understand the user flows and implementation details:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Check out ",(0,o.jsx)(n.a,{href:"/customization/bring-your-ui/#develop-your-custom-ui",children:"Develop your custom UI"})," guide to learn how to use Experience API to build your custom experience UI"]}),"\n",(0,o.jsxs)(n.li,{children:["Refer to ",(0,o.jsx)(n.a,{href:"https://openapi.logto.io/group/endpoint-experience",children:"Experience API references"})," for detailed API documentation"]}),"\n",(0,o.jsxs)(n.li,{children:["Read the ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/rfcs/blob/master/draft/0004-experience-api.md",children:"Experience API design RFC"})," for in-depth technical specifications and examples"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"account-api",children:"Account API"}),"\n",(0,o.jsx)(n.p,{children:"Account API is a comprehensive set of APIs that gives the end users direct API access without needing to go through the Management API, here is the highlights:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Direct access: The Account API empowers end users to directly access and manage their own account profile without requiring the relay of Management API."}),"\n",(0,o.jsx)(n.li,{children:"User profile and identities management: Users can fully manage their profiles and security settings, including the ability to update identity information like email, phone, and password, as well as manage social connections. MFA and SSO support are coming soon."}),"\n",(0,o.jsx)(n.li,{children:"Global access control: Admin has full, global control over access settings, can customize each fields."}),"\n",(0,o.jsxs)(n.li,{children:["Seamless authorization: Authorizing is easier than ever! Simply use ",(0,o.jsx)(n.code,{children:"client.getAccessToken()"})," to obtain an opaque access token for OP (Logto), and attach it to the Authorization header as ",(0,o.jsx)(n.code,{children:"Bearer <access_token>"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"With the Logto Account API, you can build a custom account management system like a profile page that is fully integrated with Logto."}),"\n",(0,o.jsxs)(n.p,{children:["Check out ",(0,o.jsx)(n.a,{href:"/end-user-flows/account-settings/by-account-api",children:"Account settings by Account API"})," to learn how to leverage Account API to build your own account settings page."]}),"\n",(0,o.jsxs)(n.p,{children:["Refer to ",(0,o.jsx)(n.a,{href:"https://openapi.logto.io/group/endpoint-my-account",children:"Account API references"})," for detailed API documentation."]}),"\n",(0,o.jsx)(n.h2,{id:"frontend-proxies",children:"Frontend proxies"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.em,{children:"frontend proxy"})," is a middleware function that serves a frontend project in an environment-related way:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If it's development, it proxies HTTP requests to the frontend dev server."}),"\n",(0,o.jsx)(n.li,{children:"If it's production, it serves static frontend files directly."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Logto has three frontend proxies:"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"Name"}),(0,o.jsx)("td",{children:"Frontend Package"}),(0,o.jsx)("td",{children:"Mount Path"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"Admin Console proxy"}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"/packages/console"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"/console"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"Demo app proxy"}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"/packages/demo-app"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"/demo-app"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"UI (sign-in experience) proxy"}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"/packages/ui"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"/"})})]})]})]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"You may notice that the UI proxy uses the root path. Unlike other proxies, the UI proxy is a fallback proxy which means it only takes effect when no other proxy is matched."})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},15658:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var i=t(30758);const o={},r=i.createContext(o);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);