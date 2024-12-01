"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[40757],{48877:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"authorization/role-based-access-control/protect-api-resources-with-rbac","title":"Protect API resources with RBAC","description":"In addition to Protect your API which secures resources by ensuring a valid JWT is present, Role-Based Access Control (RBAC) can also be applied.","source":"@site/docs/authorization/role-based-access-control/protect-api-resources-with-rbac.mdx","sourceDirName":"authorization/role-based-access-control","slug":"/authorization/role-based-access-control/protect-api-resources-with-rbac","permalink":"/authorization/role-based-access-control/protect-api-resources-with-rbac","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/authorization/role-based-access-control/protect-api-resources-with-rbac.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Configure roles","permalink":"/authorization/role-based-access-control/configure-roles"},"next":{"title":"Organization template","permalink":"/authorization/organization-template/"}}');var o=s(86070),i=s(15658);const r={sidebar_position:3},a="Protect API resources with RBAC",c={},d=[{value:"Authorization flow diagram",id:"authorization-flow-diagram",level:2},{value:"Optional: Handle user permission change",id:"optional-handle-user-permission-change",level:2},{value:"No new permissions introduced into the system",id:"no-new-permissions-introduced-into-the-system",level:3},{value:"New permission is introduced into the system and assigned to a user",id:"new-permission-is-introduced-into-the-system-and-assigned-to-a-user",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"protect-api-resources-with-rbac",children:"Protect API resources with RBAC"})}),"\n",(0,o.jsxs)(n.p,{children:["In addition to ",(0,o.jsx)(n.a,{href:"/authorization/api-resources/protect-your-api",children:"Protect your API"})," which secures resources by ensuring a valid JWT is present, Role-Based Access Control (RBAC) can also be applied."]}),"\n",(0,o.jsx)(n.p,{children:"In this article, We'll focus on how RBAC affects scope delegation and validation in your authentication flow."}),"\n",(0,o.jsx)(n.h2,{id:"authorization-flow-diagram",children:"Authorization flow diagram"}),"\n",(0,o.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant Logto\n    participant API\n\n    Note over Client,API: Authentication & Token Request\n    Client->>Logto: GET /oidc/auth & POST /oidc/token\n    Note right of Client: with resource and requested scopes\n\n    Note over Logto: Filter requested scopes based on<br/>user's RBAC policy\n    Logto--\x3e>Client: Returns JWT access token\n    Note left of Logto: Token contains:<br/>- Standard JWT claims<br/>- Granted scopes (filtered by RBAC)\n\n    Note over Client,API: API Request\n    Client->>API: Request with Bearer token\n\n    Note over API: Validate JWT token:<br/>- Standard JWT validation<br/>- Check granted scopes\n\n    alt Token Invalid\n        API--\x3e>Client: 401 Unauthorized\n    else Token Valid\n        alt Required scopes not in granted scopes\n            API--\x3e>Client: 403 Forbidden\n        else Has required scopes\n            API--\x3e>Client: Protected Resource\n        end\n    end"}),"\n",(0,o.jsx)(n.p,{children:"As you can see from the diagram, the main difference from basic API protection is the handling of scopes. Instead of directly granting all requested scopes, Logto now filters them based on the user's RBAC policy. The JWT token will only contain scopes that the user has been granted through their roles. On the API side, after validating the token's authenticity, there's an additional check to ensure the token contains the required scopes for the requested resource."}),"\n",(0,o.jsx)(n.h2,{id:"optional-handle-user-permission-change",children:"Optional: Handle user permission change"}),"\n",(0,o.jsx)(n.p,{children:"User permissions may be altered during a session -- for instance, they may be assigned new roles or have existing role permissions modified. In these scenarios, detecting these changes and updating the application UI may be necessary."}),"\n",(0,o.jsx)(n.p,{children:"What happens when a user's permissions change? There are two cases."}),"\n",(0,o.jsx)(n.h3,{id:"no-new-permissions-introduced-into-the-system",children:"No new permissions introduced into the system"}),"\n",(0,o.jsx)(n.p,{children:"Current access tokens will remain valid until they expire, even after a user\u2019s permissions are changed. However, new permissions will be reflected in subsequent access tokens, and any revoked permissions will be omitted."}),"\n",(0,o.jsxs)(n.p,{children:["Here are some ",(0,o.jsx)(n.strong,{children:"recommended actions"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Option 1: Use short access token expiration times"})}),"\n",(0,o.jsxs)(n.p,{children:["Short-lived access tokens ensure more frequent updates to user permissions. Configure token expiration settings in the ",(0,o.jsx)(n.a,{href:"/authorization/api-resources/#logto-api-resource-schema",children:"API Resource"})," settings of the Console. The downside is that it will increase your token usage."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Option 2: Dynamically check permissions"})}),"\n",(0,o.jsxs)(n.p,{children:["Call ",(0,o.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api",children:"Logto Management API"})," endpoints periodically (e.g., SWR) or use techniques such as WebSocket to implement long-lived connections to dynamically fetch user permissions. Upon detecting changes, clear the existing access token and newly issued tokens will automatically have permission scope changes reflected. - API: User-role - API: Role-permission"]}),"\n",(0,o.jsxs)(n.p,{children:["When permission changes detected, clear the access token from storage first, and then call the SDK method ",(0,o.jsx)(n.code,{children:"getAccessToken()"})," to acquire a new one. Newly issued access token should have permission changes reflected."]}),"\n",(0,o.jsx)(n.h3,{id:"new-permission-is-introduced-into-the-system-and-assigned-to-a-user",children:"New permission is introduced into the system and assigned to a user"}),"\n",(0,o.jsx)(n.p,{children:"This happens when new permissions are introduced into your system. In this case, you\u2019ll have to first include the newly introduced permission scopes when initializing Logto client. E.g."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"new LogtoClient({\n  appId: 'your-app-id',\n  redirectUrl: 'your-redirect-url',\n  resources: ['your-api-resource'],\n  scopes: [\n    // ... your existing permission scopes,\n    'new-scope',\n  ],\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"Secondly, each of your client application need to re-consent or re-login the users in order to receive the new permission change. Then the new permission scope will be reflected in new access tokens."}),"\n",(0,o.jsx)(n.p,{children:"Code example for re-consent:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"signIn({ redirectUrl: 'your-redirect-url', prompt: 'consent' });\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},15658:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(30758);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);