"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[60385],{61205:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"quick-starts/database/hasura/README","title":"Add authentication to your Hasura application","description":"Hasura is a tool that can quickly provide corresponding GraphQL and REST APIs fit your data. Considering data security, Hasura also provides the ability to fine-tune access control for each different API.","source":"@site/docs/quick-starts/database/hasura/README.mdx","sourceDirName":"quick-starts/database/hasura","slug":"/quick-starts/hasura","permalink":"/quick-starts/hasura","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/quick-starts/database/hasura/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/quick-starts/hasura","sidebar_label":"Hasura","sidebar_custom_props":{"description":"Integrate Logto with Hasura."}},"sidebar":"quickStartSidebar","previous":{"title":"Traditional web","permalink":"/quick-starts/traditional-web"},"next":{"title":"Supabase","permalink":"/quick-starts/supabase"}}');var o=a(86070),r=a(15658);const n={slug:"/quick-starts/hasura",sidebar_label:"Hasura",sidebar_custom_props:{description:"Integrate Logto with Hasura."}},i="Add authentication to your Hasura application",c={},d=[{value:"Background",id:"background",level:2},{value:"Get started",id:"get-started",level:2},{value:"1. Create Hasura API resource in Logto",id:"1-create-hasura-api-resource-in-logto",level:3},{value:"2. Create roles according to Hasura setup in Logto",id:"2-create-roles-according-to-hasura-setup-in-logto",level:3},{value:"3. Configure Hasura environment variable <code>HASURA_GRAPHQL_JWT_SECRET</code> to enable JWT mode",id:"3-configure-hasura-environment-variable-hasura_graphql_jwt_secret-to-enable-jwt-mode",level:3},{value:"4. Customize user access token extra claims",id:"4-customize-user-access-token-extra-claims",level:3},{value:"5. Integrate Logto SDK",id:"5-integrate-logto-sdk",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"add-authentication-to-your-hasura-application",children:"Add authentication to your Hasura application"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://hasura.io/",children:"Hasura"})," is a tool that can quickly provide corresponding GraphQL and REST APIs fit your data. Considering data security, Hasura also provides the ability to fine-tune access control for each different API."]}),"\n",(0,o.jsx)(s.p,{children:"Usually, Hasura users utilize other identity management and authentication services, Logto being a very popular one among them."}),"\n",(0,o.jsx)(s.p,{children:"In this blog post, we will assume that you are already using Hasura services. We will introduce how to integrate Hasura and Logto to maximize the security of your data. If you do not have a Logto account, sign up and start using it now!"}),"\n",(0,o.jsx)(s.h2,{id:"background",children:"Background"}),"\n",(0,o.jsxs)(s.p,{children:["Hasura employs ",(0,o.jsx)(s.a,{href:"https://hasura.io/docs/latest/auth/overview/",children:"role-based access management"}),", while Logto uses the standard ",(0,o.jsx)(s.a,{href:"/authorization/role-based-access-control",children:"Role-based access control (RBAC)"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["In Logto's model and best practices for RBAC, we advise users to use ",(0,o.jsx)(s.code,{children:"scope"})," to correspond to the finest granularity of permissions, use ",(0,o.jsx)(s.code,{children:"role"})," as a bunch of ",(0,o.jsx)(s.code,{children:"scope"}),"s for convenient batch operations, and ultimately check ",(0,o.jsx)(s.code,{children:"scope"})," (usually on resource providers' side) to verify whether a user can perform a specific operation."]}),"\n",(0,o.jsxs)(s.p,{children:["In Hasura, a ",(0,o.jsx)(s.code,{children:"role"})," corresponds to the finest granularity of permissions, and permission checks are carried out against ",(0,o.jsx)(s.code,{children:"role"}),"s. Therefore, during the configuration of Logto, we recommend mapping one ",(0,o.jsx)(s.code,{children:"role"})," to exactly one ",(0,o.jsx)(s.code,{children:"scope"}),". This approach can link Logto's and Hasura's permissions together to avoid confusion and misuse."]}),"\n",(0,o.jsxs)(s.p,{children:["Hasura can support access control using Webhooks or JWT. Our previous ",(0,o.jsx)(s.a,{href:"https://blog.logto.io/logto-x-hasura",children:"blog post"})," introduced how to use Webhooks, and in the following sections, we will explain how to utilize Hasura's JWT mode access control."]}),"\n",(0,o.jsx)(s.h2,{id:"get-started",children:"Get started"}),"\n",(0,o.jsxs)(s.p,{children:["Let's start with a simple example. Suppose a user already has two APIs in Hasura, ",(0,o.jsx)(s.code,{children:"GET /user"})," and ",(0,o.jsx)(s.code,{children:"PATCH /user"}),", corresponding to two roles: ",(0,o.jsx)(s.code,{children:"user:reader"})," and ",(0,o.jsx)(s.code,{children:"user:maintainer"}),", respectively."]}),"\n",(0,o.jsx)(s.h3,{id:"1-create-hasura-api-resource-in-logto",children:"1. Create Hasura API resource in Logto"}),"\n",(0,o.jsx)(s.p,{children:"Create a Hasura API resource in Logto."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Hasura API",src:a(27097).A+"",width:"1286",height:"776"})}),"\n",(0,o.jsx)(s.h3,{id:"2-create-roles-according-to-hasura-setup-in-logto",children:"2. Create roles according to Hasura setup in Logto"}),"\n",(0,o.jsxs)(s.p,{children:["We need to create two ",(0,o.jsx)(s.code,{children:"scope"}),"s for the Hasura API resource mentioned in step 1, namely ",(0,o.jsx)(s.code,{children:"read:user"})," and ",(0,o.jsx)(s.code,{children:"maintain:user"}),", and then create two roles: ",(0,o.jsx)(s.code,{children:"user:reader"})," (containing the ",(0,o.jsx)(s.code,{children:"read:user"})," scope) and ",(0,o.jsx)(s.code,{children:"user:maintainer"})," (including the ",(0,o.jsx)(s.code,{children:"maintain:user"})," scope) to correspond one-to-one with Hasura's roles. And assign these roles to Logto users as needed."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Hasura API with scopes",src:a(79646).A+"",width:"2642",height:"836"})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"User reader role",src:a(98754).A+"",width:"2648",height:"740"})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"User maintainer role",src:a(70657).A+"",width:"2652",height:"736"})}),"\n",(0,o.jsxs)(s.h3,{id:"3-configure-hasura-environment-variable-hasura_graphql_jwt_secret-to-enable-jwt-mode",children:["3. Configure Hasura environment variable ",(0,o.jsx)(s.code,{children:"HASURA_GRAPHQL_JWT_SECRET"})," to enable JWT mode"]}),"\n",(0,o.jsxs)(s.p,{children:["By looking into ",(0,o.jsx)(s.a,{href:"https://hasura.io/docs/latest/auth/authentication/jwt/#hasura-jwt-configuration-options",children:"Hasura JWT configuration options"}),", we need to add and configure the environment variable ",(0,o.jsx)(s.code,{children:"HASURA_GRAPHQL_JWT_SECRET"})," before we can use JWT for access control."]}),"\n",(0,o.jsxs)(s.p,{children:["There are many different options that can be configured, but here we introduce the simplest case: only the ",(0,o.jsx)(s.code,{children:"jwk_url"})," needs to be configured. This value can be obtained from your Logto's OpenID configuration endpoint (",(0,o.jsx)(s.a,{href:"https://your.logto.domain/oidc/.well-known/openid-configuration",children:"https://your.logto.domain/oidc/.well-known/openid-configuration"}),")."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Hasura JWT config",src:a(27781).A+"",width:"1064",height:"788"})}),"\n",(0,o.jsx)(s.h3,{id:"4-customize-user-access-token-extra-claims",children:"4. Customize user access token extra claims"}),"\n",(0,o.jsx)(s.p,{children:"Using Logto's custom token claims feature, customize the logic to add extra claims to the user access token."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"User access token script",src:a(92962).A+"",width:"2656",height:"1526"})}),"\n",(0,o.jsxs)(s.p,{children:["Customize the ",(0,o.jsx)(s.code,{children:"getCustomJwtClaims"})," method to add data in the JWT that Hasura relies on for implementing access control. This can include data related to the user being authorized during that instance, including ",(0,o.jsx)(s.code,{children:"role"}),"s they possess, which can be accessed through ",(0,o.jsx)(s.code,{children:"context"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["We have also defined an environment variable ",(0,o.jsx)(s.code,{children:"USER_DEFAULT_ROLE_NAMES"})," to avoid hardcoding."]}),"\n",(0,o.jsx)(s.h3,{id:"5-integrate-logto-sdk",children:"5. Integrate Logto SDK"}),"\n",(0,o.jsx)(s.p,{children:"After configuring Logto and Hasura, integrate your app with the Logto SDK. Here we use a React example to preview the user access token issued by Logto after user sign-in."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"User with roles",src:a(26476).A+"",width:"2656",height:"912"})}),"\n",(0,o.jsxs)(s.p,{children:["First, we assign the previously created ",(0,o.jsx)(s.code,{children:"user:reader"})," and ",(0,o.jsx)(s.code,{children:"user:maintainer"})," roles to the user, and then log in as that user."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-tsx",children:"const config: LogtoConfig = {\n  endpoint: 'http://localhost:3001',\n  appId: '<your-application-id>',\n  appSecret: '<your-application-secret>',\n  scopes: [\n    ...// existing scopes\n    'read:user',\n    'maintain:user',\n  ],\n  resources: [\n    ...// existing resources\n    'https://*.hasura.app/api',\n  ],\n};\n"})}),"\n",(0,o.jsx)(s.p,{children:"Obtain the user access token and request Hasura APIs:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-tsx",children:"const accessToken = await logto.getAccessToken('https://*.hasura.app/api');\n\n// Before sending the request to Hasura\nrequest.headers.set('Authorization', `Bearer ${accessToken}`);\nrequest.headers.set('x-Hasura-Role', '<required-role-for-the-endpoint>');\n"})}),"\n",(0,o.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(s.p,{children:"In this article, we provide another method of JWT-based access control supported by Hasura, other than Webhook."}),"\n",(0,o.jsxs)(s.p,{children:["By comparing the processes of Hasura's ",(0,o.jsx)(s.a,{href:"https://hasura.io/docs/latest/auth/authentication/webhook/",children:"Webhook"})," and ",(0,o.jsx)(s.a,{href:"https://hasura.io/docs/latest/auth/authentication/jwt/",children:"JWT"})," access control, we can see that the Webhook approach sends a Webhook to Logto and waits for a response with every Hasura request; whereas the JWT-based approach can continuously be used until the JWT expires."]}),"\n",(0,o.jsx)(s.p,{children:"The JWT approach can reduce network load and eliminate the network latency brought by Webhooks; meanwhile, the Webhook approach can synchronize changes in user permissions in real-time."}),"\n",(0,o.jsx)(s.p,{children:"Users can choose the appropriate approach based on these conclusions, combined with their actual business needs."})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},79646:(e,s,a)=>{a.d(s,{A:()=>t});const t=a.p+"assets/images/hasura-api-with-scopes-ab26b108b1aa93f0225ca8cc55a70c8c.webp"},27097:(e,s,a)=>{a.d(s,{A:()=>t});const t=a.p+"assets/images/hasura-api-f0466211049ca00f0b07f1b913ba58e4.webp"},27781:(e,s,a)=>{a.d(s,{A:()=>t});const t=a.p+"assets/images/hasura-jwt-config-1935efe8a692058171ed131f90921dde.webp"},92962:(e,s,a)=>{a.d(s,{A:()=>t});const t=a.p+"assets/images/user-access-token-script-924dba883452e140764247739744b91d.webp"},70657:(e,s,a)=>{a.d(s,{A:()=>t});const t=a.p+"assets/images/user-maintainer-role-bc2937b4169034c8979712dd1484d864.webp"},98754:(e,s,a)=>{a.d(s,{A:()=>t});const t=a.p+"assets/images/user-reader-role-cc358419b86d766f002b9dda90515555.webp"},26476:(e,s,a)=>{a.d(s,{A:()=>t});const t=a.p+"assets/images/user-with-roles-ceb339a231a4e03f51e23691f45dd790.webp"},15658:(e,s,a)=>{a.d(s,{R:()=>n,x:()=>i});var t=a(30758);const o={},r=t.createContext(o);function n(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);