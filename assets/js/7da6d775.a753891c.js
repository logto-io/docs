"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[71488],{35808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"logto-oss/translate-cli","title":"I18n translation with CLI","description":"Logto translate CLI is a powerful tool designed for developers contributing to Logto\'s i18n efforts. With this CLI, you can focus on writing content in English, and then easily translate it into all supported languages.","source":"@site/docs/logto-oss/translate-cli.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/translate-cli","permalink":"/logto-oss/translate-cli","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/logto-oss/translate-cli.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_label":"Translate CLI","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Rotate signing keys (OSS)","permalink":"/logto-oss/using-cli/rotate-signing-keys"},"next":{"title":"Central cache","permalink":"/logto-oss/central-cache"}}');var a=t(86070),o=t(15658);const i={sidebar_label:"Translate CLI",sidebar_position:4},l="I18n translation with CLI",r={},c=[{value:"Migrate from <code>@logto/cli</code>",id:"migrate-from-logtocli",level:2},{value:"Sync keys",id:"sync-keys",level:2},{value:"Translate keys using ChatGPT",id:"translate-keys-using-chatgpt",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"i18n-translation-with-cli",children:"I18n translation with CLI"})}),"\n",(0,a.jsx)(n.p,{children:"Logto translate CLI is a powerful tool designed for developers contributing to Logto's i18n efforts. With this CLI, you can focus on writing content in English, and then easily translate it into all supported languages."}),"\n",(0,a.jsxs)(n.p,{children:["For regular Logto users seeking custom translations without contributing to the project, please refer to our ",(0,a.jsx)(n.a,{href:"/customization/localized-languages/",children:"localization guide"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Started from v1.20.0, the translation command is removed from the ",(0,a.jsx)(n.code,{children:"@logto/cli"}),", and maintained as a standalone ",(0,a.jsx)(n.code,{children:"@logto/translation"})," package in the logto monorepo. Accordingly, the way of execution is slightly different."]})}),"\n",(0,a.jsxs)(n.h2,{id:"migrate-from-logtocli",children:["Migrate from ",(0,a.jsx)(n.code,{children:"@logto/cli"})]}),"\n",(0,a.jsx)(n.p,{children:"Here's a comparison of the old and new CLI execution methods:"}),"\n",(0,a.jsx)(n.p,{children:"Old method (before v1.20.0):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm cli translate <command> [options]\n"})}),"\n",(0,a.jsx)(n.p,{children:"New method:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm translate <command> [options]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"sync-keys",children:"Sync keys"}),"\n",(0,a.jsxs)(n.p,{children:["Let's say we made some changes to the translation keys in the ",(0,a.jsx)(n.code,{children:"en"})," folder of the ",(0,a.jsx)(n.code,{children:"phrases"})," package. We want to sync these changes to the ",(0,a.jsx)(n.code,{children:"pt-BR"})," folder. Run the command below to sync translation keys and file structure:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm translate sync-keys --target pt-BR\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This command will read all translation keys from the source language folder (",(0,a.jsx)(n.code,{children:"en"})," by default) and sync them to the target language folder (",(0,a.jsx)(n.code,{children:"pt-BR"})," in this example)."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If the target language folder doesn't exist, it will be created automatically;"}),"\n",(0,a.jsx)(n.li,{children:"If the target language folder already exists, it will be updated with new keys and removed with obsolete keys."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"For each translation key:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If a key is missing in the target, it will be added with a comment to indicate that the phrase is untranslated (marked with ",(0,a.jsx)(n.code,{children:"/** UNTRANSLATED */"}),");"]}),"\n",(0,a.jsx)(n.li,{children:"If a key is missing in the baseline, it will be removed from the target;"}),"\n",(0,a.jsx)(n.li,{children:"If a key exists in both the baseline and the target, the value of the target will be used."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To sync keys for all languages in the ",(0,a.jsx)(n.code,{children:"phrases"})," package, run the command below:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm translate sync-keys --target all\n"})}),"\n",(0,a.jsx)(n.p,{children:"Thus we can focusing on updating the translation keys in the source language folder, and the translation keys in other languages will be updated automatically."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["This command executes for ",(0,a.jsx)(n.code,{children:"phrases"})," package by default. You can specify the package name by ",(0,a.jsx)(n.code,{children:"--package"})," option. For example, use ",(0,a.jsx)(n.code,{children:"--package phrases-experience"})," to sync keys for the ",(0,a.jsx)(n.code,{children:"phrases-experience"})," package."]})}),"\n",(0,a.jsx)(n.p,{children:"After syncing keys, we can translate the keys using ChatGPT API."}),"\n",(0,a.jsx)(n.h2,{id:"translate-keys-using-chatgpt",children:"Translate keys using ChatGPT"}),"\n",(0,a.jsx)(n.p,{children:"Run the command below to translate keys using ChatGPT:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm translate sync\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This command will translate all untranslated keys (marked with ",(0,a.jsx)(n.code,{children:"/** UNTRANSLATED */"}),") across all languages in the ",(0,a.jsx)(n.code,{children:"phrases"})," and ",(0,a.jsx)(n.code,{children:"phrases-experience"})," packages. Note an environment variable ",(0,a.jsx)(n.code,{children:"OPENAI_API_KEY"})," is required to run this command."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},15658:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(30758);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);