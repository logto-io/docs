"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[20655],{57295:(e,i,n)=>{n.d(i,{Ay:()=>s,RM:()=>a});var t=n(86070),o=n(15658);const a=[];function l(e){const i={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["In this guide, we assume you have basic knowledge of Logto Connectors. If you don't, check out the ",(0,t.jsx)(i.a,{href:"/connectors",children:"Configure connectors"})," guide to get started."]})})}function s(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},80828:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"integrations/social/alipay-native/README","title":"Set up social login with Alipay (Native)","description":"The official Logto connector for Alipay social sign-in in mobile-device native apps.","source":"@site/docs/integrations/social/alipay-native/README.mdx","sourceDirName":"integrations/social/alipay-native","slug":"/integrations/alipay-native","permalink":"/integrations/alipay-native","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrations/social/alipay-native/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/alipay-native","sidebar_label":"Alipay (Native)","sidebar_custom_props":{"description":"Alipay is a third-party mobile and online payment platform.","logoFilename":"alipay.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Introduction","permalink":"/integrations/"},"next":{"title":"Alipay (Web)","permalink":"/integrations/alipay-web"}}');var o=n(86070),a=n(15658),l=n(57295);const s={slug:"/integrations/alipay-native",sidebar_label:"Alipay (Native)",sidebar_custom_props:{description:"Alipay is a third-party mobile and online payment platform.",logoFilename:"alipay.svg"}},r="Set up social login with Alipay (Native)",c={},d=[...l.RM,{value:"Get started",id:"get-started",level:2},{value:"Register Alipay developer account",id:"register-alipay-developer-account",level:2},{value:"Create and configure Alipay app",id:"create-and-configure-alipay-app",level:2},{value:"Set up the Logto Alipay Native connector settings",id:"set-up-the-logto-alipay-native-connector-settings",level:2},{value:"Config types",id:"config-types",level:3},{value:"Enable Alipay native sign-in in your app",id:"enable-alipay-native-sign-in-in-your-app",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Test Alipay native connector",id:"test-alipay-native-connector",level:3},{value:"References",id:"references",level:2}];function p(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"set-up-social-login-with-alipay-native",children:"Set up social login with Alipay (Native)"})}),"\n",(0,o.jsx)(i.p,{children:"The official Logto connector for Alipay social sign-in in mobile-device native apps."}),"\n",(0,o.jsx)(l.Ay,{}),"\n",(0,o.jsx)(i.h2,{id:"get-started",children:"Get started"}),"\n",(0,o.jsx)(i.p,{children:"Alipay Native connector works closely with Logto SDK on mobile platforms. It takes advantage of Alipay's OAuth 2.0 authentication workflow and enables Alipay users to sign in to other Apps using public Alipay user profiles without going through a troublesome register process."}),"\n",(0,o.jsx)(i.h2,{id:"register-alipay-developer-account",children:"Register Alipay developer account"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"https://certifyweb.alipay.com/certify/reg/guide#/",children:"Register an Alipay developer account"})," if you don't have one."]}),"\n",(0,o.jsx)(i.h2,{id:"create-and-configure-alipay-app",children:"Create and configure Alipay app"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["Sign in to the ",(0,o.jsx)(i.a,{href:"https://open.alipay.com/",children:"Alipay console"})," with the account you have just registered."]}),"\n",(0,o.jsx)(i.li,{children:'Go to "Web & Mobile Apps" (\u7f51\u9875&\u79fb\u52a8\u5e94\u7528) tab in "My Application" (\u6211\u7684\u5e94\u7528) panel.'}),"\n",(0,o.jsx)(i.li,{children:'Click "Create an App" (\u7acb\u5373\u521b\u5efa) button to start configuring your application.'}),"\n",(0,o.jsx)(i.li,{children:'Name your application in "Application Name" (\u5e94\u7528\u540d\u79f0) following the naming conventions and upload your "Application Icon" (\u5e94\u7528\u56fe\u6807), make sure you choose "mobile application" (\u79fb\u52a8\u5e94\u7528) as "App type" (\u5e94\u7528\u7c7b\u578b). For building iOS App, a unique "Bundle ID" is required. Also, "application signature" (\u5e94\u7528\u7b7e\u540d) and "application package name" (\u5e94\u7528\u5305\u540d) are required for Android apps.'}),"\n",(0,o.jsx)(i.li,{children:'After finishing creating the application, we come to the Overview page, where we should click "add ability" (\u6dfb\u52a0\u80fd\u529b) to add "Third-party application authorization" (\u7b2c\u4e09\u65b9\u5e94\u7528\u6388\u6743), "Get member information" (\u83b7\u53d6\u4f1a\u5458\u4fe1\u606f) and "App Alipay login" (App \u652f\u4ed8\u5b9d\u767b\u5f55) before enabling Alipay sign-in.'}),"\n",(0,o.jsxs)(i.li,{children:["Go to ",(0,o.jsx)(i.a,{href:"https://b.alipay.com/index2.htm",children:"Alipay Customer Center"}),', and sign in with the Alipay developer account. Click "Account Center" (\u8d26\u53f7\u4e2d\u5fc3) on the topbar and go to "APPID binding" (APPID \u7ed1\u5b9a), whose entrance can be found at the bottom of the sidebar. "Add binding" (\u6dfb\u52a0\u7ed1\u5b9a) by type in the APPID of the mobile application you just created in step 4.']}),"\n",(0,o.jsx)(i.li,{children:'Click on "Sign" button of "App Alipay login", and finish signing process following the guide. After finishing this step, you are expected to find abilities you have just added in step 5 kicks in.'}),"\n",(0,o.jsx)(i.li,{children:'Come back to Alipay open platform console page, and you can find "Interface signing method" (\u63a5\u53e3\u52a0\u7b7e\u65b9\u5f0f\uff08\u5bc6\u94a5/\u8bc1\u4e66\uff09) in "development information" (\u5f00\u53d1\u4fe1\u606f) section. Click "set up" (\u8bbe\u7f6e) button, and you can find yourself on a page setting signing method. "Public Key" (\u516c\u94a5) is the preferred signing mode, and fill in contents from the public key file you have generated in the text input box.'}),"\n",(0,o.jsxs)(i.li,{children:['Set up "Authorization Redirect URI" (\u6388\u6743\u56de\u8c03\u5730\u5740) by clicking "set up" (\u8bbe\u7f6e) button on the bottom of the Alipay console page. ',(0,o.jsx)(i.code,{children:"${your_logto_origin}/callback/${connector_id}"})," is the default redirect URI used in Logto core. The ",(0,o.jsx)(i.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,o.jsx)(i.li,{children:'After finishing all these steps, go back to the top right corner of Alipay console page, and click "Submit for review" (\u63d0\u4ea4\u5ba1\u6838). Once the review is approved, you are good to go with a smooth Alipay sign-in flow.'}),"\n"]}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsxs)(i.p,{children:["\u2139\ufe0f ",(0,o.jsx)(i.strong,{children:"Note"})]}),"\n",(0,o.jsxs)(i.p,{children:["You can use ",(0,o.jsx)(i.em,{children:"openssl"})," to generate key pairs on your local machine by executing following code snippet in terminal."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"openssl genrsa -out private.pem 2048\nopenssl rsa -in private.pem -outform PEM -pubout -out public.pem\n"})}),"\n",(0,o.jsxs)(i.p,{children:["When filling in the public key on the Alipay app setup website, you need to remove the header and footer of ",(0,o.jsx)(i.code,{children:"public.pem"}),', delete all newline characters, and paste the rest of the contents into the text input box for "public key".']}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"set-up-the-logto-alipay-native-connector-settings",children:"Set up the Logto Alipay Native connector settings"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["In ",(0,o.jsx)(i.a,{href:"https://open.alipay.com/dev/workspace",children:"the Alipay console workspace"}),' go to "My application" (\u6211\u7684\u5e94\u7528) panel and click "Web & Mobile Apps" (\u7f51\u9875&\u79fb\u52a8\u5e94\u7528) tab, you can find APPID of all applications.']}),"\n",(0,o.jsx)(i.li,{children:"In step 7 of the previous part, you have already generated a key pair including a private key and a public key."}),"\n",(0,o.jsxs)(i.li,{children:["Fill out the Logto connector settings:","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Fill out the ",(0,o.jsx)(i.code,{children:"appId"})," field with APPID you've got from step 1."]}),"\n",(0,o.jsxs)(i.li,{children:["Fill out the ",(0,o.jsx)(i.code,{children:"privateKey"})," field with contents from the private key file mentioned in step 2. Please MAKE SURE to use '\\n' to replace all newline characters. You don't need to remove header and footer in private key file."]}),"\n",(0,o.jsxs)(i.li,{children:["Fill out the ",(0,o.jsx)(i.code,{children:"signType"})," filed with 'RSA2' due to the ",(0,o.jsx)(i.code,{children:"Public key"}),' signing mode we chose in step 7 of "Create And Configure Alipay Apps".']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(i.table,{children:[(0,o.jsx)(i.thead,{children:(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.th,{children:"Name"}),(0,o.jsx)(i.th,{children:"Type"}),(0,o.jsx)(i.th,{children:"Enum values"})]})}),(0,o.jsxs)(i.tbody,{children:[(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"appId"}),(0,o.jsx)(i.td,{children:"string"}),(0,o.jsx)(i.td,{children:"N/A"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"privateKey"}),(0,o.jsx)(i.td,{children:"string"}),(0,o.jsx)(i.td,{children:"N/A"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"signType"}),(0,o.jsx)(i.td,{children:"enum string"}),(0,o.jsx)(i.td,{children:"'RSA' | 'RSA2'"})]})]})]}),"\n",(0,o.jsx)(i.h2,{id:"enable-alipay-native-sign-in-in-your-app",children:"Enable Alipay native sign-in in your app"}),"\n",(0,o.jsx)(i.h3,{id:"ios",children:"iOS"}),"\n",(0,o.jsxs)(i.p,{children:["We assume you have integrated ",(0,o.jsx)(i.a,{href:"/quick-starts/swift",children:"Logto iOS SDK"})," in your app. In this case, things are pretty simple, and you don't even need to read the Alipay SDK doc:"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsxs)(i.strong,{children:["1. Add ",(0,o.jsx)(i.code,{children:"LogtoSocialPluginAlipay"})," to your Xcode project"]})}),"\n",(0,o.jsx)(i.p,{children:"Add the framework:"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Add framework",src:n(50921).A+"",width:"1086",height:"306"})}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsxs)(i.p,{children:["\u2139\ufe0f ",(0,o.jsx)(i.strong,{children:"Note"})]}),"\n",(0,o.jsxs)(i.p,{children:['The plugin includes Alipay "minimalist SDK" (\u6781\u7b80\u7248 SDK). You can directly use ',(0,o.jsx)(i.code,{children:"import AFServiceSDK"})," once imported the plugin."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsxs)(i.strong,{children:["2. Add the plugin to your ",(0,o.jsx)(i.code,{children:"LogtoClient"})," init options"]})}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-swift",children:'let logtoClient = LogtoClient(\n  useConfig: config,\n  socialPlugins: [LogtoSocialPluginAlipay(callbackScheme: "your-scheme")]\n)\n'})}),"\n",(0,o.jsxs)(i.p,{children:["Where ",(0,o.jsx)(i.code,{children:"callbackScheme"})," is one of the ",(0,o.jsx)(i.a,{href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app",children:"custom URL Schemes"})," that can navigate to your app."]}),"\n",(0,o.jsx)(i.h3,{id:"android",children:"Android"}),"\n",(0,o.jsxs)(i.p,{children:["We assume you have integrated ",(0,o.jsx)(i.a,{href:"/quick-starts/android",children:"Logto Android SDK"})," in your app. In this case, things are pretty simple, and you don't even need to read the Alipay SDK doc:"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:'1. Download the Alipay "minimalist SDK" and add it to your project'})}),"\n",(0,o.jsxs)(i.p,{children:['Download the Alipay "minimalist SDK" (\u6781\u7b80\u7248 SDK) from ',(0,o.jsx)(i.a,{href:"https://github.com/logto-io/social-sdks/blob/master/alipay/android/alipaySdk-15.7.9-20200727142846.aar",children:"Logto 3rd-party Social SDKs"})," to your project's ",(0,o.jsx)(i.code,{children:"app/libs"})," folder:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"project-path/app/libs/alipaySdk-15.7.9-20200727142846.aar\n"})}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:'2. Add the Alipay "minimalist SDK" as a dependency'})}),"\n",(0,o.jsxs)(i.p,{children:["Open your ",(0,o.jsx)(i.code,{children:"build.gradle"})," file:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"project-path/app/build.gradle\n"})}),"\n",(0,o.jsx)(i.p,{children:"Add the dependency:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-kotlin",children:"dependencies {\n  // ...\n  implementation(files(\"./libs/alipaySdk-15.7.9-20200727142846.aar\"))  // kotlin-script\n  // or\n  implementation files('./libs/alipaySdk-15.7.9-20200727142846.aar')  // groovy-script\n}\n"})}),"\n",(0,o.jsx)(i.h3,{id:"test-alipay-native-connector",children:"Test Alipay native connector"}),"\n",(0,o.jsxs)(i.p,{children:["That's it. Don't forget to ",(0,o.jsx)(i.a,{href:"/connectors/social-connectors/#enable-social-sign-in",children:"Enable social connector in sign-in experience"}),"."]}),"\n",(0,o.jsx)(i.p,{children:"Once Alipay native connector is enabled, you can build and run your app to see if it works."}),"\n",(0,o.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"https://opendocs.alipay.com/support/01rau6",children:"Alipay Docs - Access Preparation - How to create an app"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"https://opendocs.alipay.com/open/200/105310",children:"Alipay Docs - Web & Mobile Apps - Create an app"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},50921:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/add-framework-46af6de4ae4a8b92382c7e57e3454036.png"},15658:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>s});var t=n(30758);const o={},a=t.createContext(o);function l(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);