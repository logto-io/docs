"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[82838],{30346:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"developers/webhooks/webhooks-request","title":"Requ\xeate de Webhooks","description":"Une fois qu\'un \xe9v\xe9nement de hook valide est \xe9mis, Logto trouvera les webhooks correspondants et enverra une requ\xeate POST par configuration de hook.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/webhooks/request.mdx","sourceDirName":"developers/webhooks","slug":"/developers/webhooks/webhooks-request","permalink":"/fr/developers/webhooks/webhooks-request","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/developers/webhooks/request.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"webhooks-request","title":"Requ\xeate de Webhooks","sidebar_label":"Requ\xeate de Webhooks","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"\xc9v\xe9nements Webhooks","permalink":"/fr/developers/webhooks/webhooks-events"},"next":{"title":"S\xe9curiser les webhooks","permalink":"/fr/developers/webhooks/secure-webhooks"}}');var t=n(86070),r=n(15658);const i={id:"webhooks-request",title:"Requ\xeate de Webhooks",sidebar_label:"Requ\xeate de Webhooks",sidebar_position:4},c="Requ\xeate de Webhooks",l={},h=[{value:"En-t\xeates de requ\xeate",id:"en-t\xeates-de-requ\xeate",level:2},{value:"Corps de requ\xeate des \xe9v\xe9nements de hook d&#39;interaction",id:"corps-de-requ\xeate-des-\xe9v\xe9nements-de-hook-dinteraction",level:2},{value:"Corps de requ\xeate des \xe9v\xe9nements de hook de mutation de donn\xe9es",id:"corps-de-requ\xeate-des-\xe9v\xe9nements-de-hook-de-mutation-de-donn\xe9es",level:2},{value:"Champs standard du corps de la requ\xeate",id:"champs-standard-du-corps-de-la-requ\xeate",level:3},{value:"Champs du corps de contexte de l&#39;API d&#39;interaction",id:"champs-du-corps-de-contexte-de-lapi-dinteraction",level:3},{value:"Champs du corps de contexte de l&#39;API de gestion",id:"champs-du-corps-de-contexte-de-lapi-de-gestion",level:3},{value:"Champs du corps de la charge utile de donn\xe9es",id:"champs-du-corps-de-la-charge-utile-de-donn\xe9es",level:3}];function o(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.header,{children:(0,t.jsx)(d.h1,{id:"requ\xeate-de-webhooks",children:"Requ\xeate de Webhooks"})}),"\n",(0,t.jsx)(d.p,{children:"Une fois qu'un \xe9v\xe9nement de hook valide est \xe9mis, Logto trouvera les webhooks correspondants et enverra une requ\xeate POST par configuration de hook."}),"\n",(0,t.jsx)(d.h2,{id:"en-t\xeates-de-requ\xeate",children:"En-t\xeates de requ\xeate"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Cl\xe9"}),(0,t.jsx)(d.th,{children:"Personnalisable"}),(0,t.jsx)(d.th,{children:"Remarques"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"user-agent"}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsxs)(d.td,{children:[(0,t.jsx)(d.code,{children:"Logto (https://logto.io/)"})," par d\xe9faut."]})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"content-type"}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsxs)(d.td,{children:[(0,t.jsx)(d.code,{children:"application/json"})," par d\xe9faut."]})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"logto-signature-sha-256"}),(0,t.jsx)(d.td,{}),(0,t.jsxs)(d.td,{children:["la signature du corps de la requ\xeate, se r\xe9f\xe9rer \xe0 ",(0,t.jsx)(d.a,{href:"/developers/webhooks/secure-webhooks",children:"s\xe9curiser vos webhooks"}),"."]})]})]})]}),"\n",(0,t.jsxs)(d.p,{children:["Vous pouvez remplacer les en-t\xeates personnalisables en ",(0,t.jsx)(d.a,{href:"/developers/webhooks/configure-webhooks/#secure-webhook",children:"personnalisant les requ\xeates"})," avec la m\xeame cl\xe9."]}),"\n",(0,t.jsx)(d.h2,{id:"corps-de-requ\xeate-des-\xe9v\xe9nements-de-hook-dinteraction",children:"Corps de requ\xeate des \xe9v\xe9nements de hook d'interaction"}),"\n",(0,t.jsxs)(d.p,{children:["\xc9v\xe9nements disponibles : ",(0,t.jsx)(d.code,{children:"PostRegister"}),", ",(0,t.jsx)(d.code,{children:"PostSignIn"}),", ",(0,t.jsx)(d.code,{children:"PostResetPassword"})]}),"\n",(0,t.jsx)(d.p,{children:"Le corps de la requ\xeate est un objet JSON qui contient trois types de champ de donn\xe9es :"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type UserEntity = {\n  id: string;\n  username?: string;\n  primaryEmail?: string;\n  primaryPhone?: string;\n  name?: string;\n  avatar?: string;\n  customData?: object;\n  identities?: object;\n  lastSignInAt?: string;\n  createdAt?: string;\n  applicationId?: string;\n  isSuspended?: boolean;\n};\n"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type ApplicationEntity = {\n  id: string;\n  name: string;\n  description?: string;\n};\n"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Champ"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optionnel"}),(0,t.jsx)(d.th,{children:"Remarques"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"hookId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'identifiant dans Logto."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"event"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"Quel \xe9v\xe9nement d\xe9clenche ce hook."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"createdAt"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'heure de cr\xe9ation de la charge utile au format ISO."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"interactionEvent"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'\xe9v\xe9nement d'interaction qui d\xe9clenche ce hook."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sessionId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"L'ID de session (pas l'ID d'interaction) pour cet \xe9v\xe9nement, si applicable."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"userAgent"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"L'agent utilisateur pour la requ\xeate qui d\xe9clenche ce hook."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"userIp"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"L'adresse IP pour la requ\xeate qui d\xe9clenche ce hook."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"userId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"L'ID utilisateur associ\xe9 \xe0 cet \xe9v\xe9nement, si applicable."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"user"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"UserEntity"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"L'entit\xe9 utilisateur associ\xe9e \xe0 cet \xe9v\xe9nement, si applicable."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"applicationId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"L'ID d'application associ\xe9 \xe0 cet \xe9v\xe9nement, si applicable."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"application"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"ApplicationEntity"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"Les informations de l'application associ\xe9e \xe0 cet \xe9v\xe9nement, si applicable."})]})]})]}),"\n",(0,t.jsxs)(d.p,{children:["Voir les r\xe9f\xe9rences ",(0,t.jsx)(d.a,{href:"/user-management/user-data",children:"Utilisateurs"})," et ",(0,t.jsx)(d.a,{href:"/integrate-logto/application-data-structure",children:"Applications"})," pour des explications d\xe9taill\xe9es des champs."]}),"\n",(0,t.jsx)(d.h2,{id:"corps-de-requ\xeate-des-\xe9v\xe9nements-de-hook-de-mutation-de-donn\xe9es",children:"Corps de requ\xeate des \xe9v\xe9nements de hook de mutation de donn\xe9es"}),"\n",(0,t.jsx)(d.h3,{id:"champs-standard-du-corps-de-la-requ\xeate",children:"Champs standard du corps de la requ\xeate"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Champ"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optionnel"}),(0,t.jsx)(d.th,{children:"Remarques"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"hookId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'identifiant dans Logto."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"event"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"Quel \xe9v\xe9nement d\xe9clenche ce hook."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"createdAt"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'heure de cr\xe9ation de la charge utile au format ISO."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"userAgent"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"L'agent utilisateur pour la requ\xeate."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ip"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"L'adresse IP pour la requ\xeate."})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"champs-du-corps-de-contexte-de-lapi-dinteraction",children:"Champs du corps de contexte de l'API d'interaction"}),"\n",(0,t.jsx)(d.p,{children:"\xc9v\xe9nements de hook de mutation de donn\xe9es d\xe9clench\xe9s par des appels d'API d'interaction utilisateur."}),"\n",(0,t.jsxs)(d.p,{children:["\xc9v\xe9nements disponibles : ",(0,t.jsx)(d.code,{children:"User.Created"}),", ",(0,t.jsx)(d.code,{children:"User.Data.Updated"})]}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Champ"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optionnel"}),(0,t.jsx)(d.th,{children:"Remarques"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"interactionEvent"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"L'\xe9v\xe9nement d'interaction qui d\xe9clenche ce hook."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sessionId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"L'ID de session (pas l'ID d'interaction) pour cet \xe9v\xe9nement, si applicable."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"applicationId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"L'ID d'application associ\xe9 \xe0 cet \xe9v\xe9nement, si applicable."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"application"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"ApplicationEntity"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"Les informations de l'application associ\xe9e \xe0 cet \xe9v\xe9nement, si applicable."})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"champs-du-corps-de-contexte-de-lapi-de-gestion",children:"Champs du corps de contexte de l'API de gestion"}),"\n",(0,t.jsx)(d.p,{children:"\xc9v\xe9nements de hook de mutation de donn\xe9es d\xe9clench\xe9s par des appels d'API de gestion."}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Champ"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optionnel"}),(0,t.jsx)(d.th,{children:"Remarques"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"path"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"Le chemin de l'appel API qui d\xe9clenche ce hook."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"method"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"La m\xe9thode de l'appel API qui d\xe9clenche ce hook."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"status"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"number"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"Le code de statut de la r\xe9ponse de l'appel API qui d\xe9clenche ce hook."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"params"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"object"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"Les param\xe8tres de chemin koa de la requ\xeate de l'appel API qui d\xe9clenche ce hook."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"matchedRoute"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"La route koa correspondante de l'appel API qui d\xe9clenche ce hook. Logto utilise ce champ pour faire correspondre les \xe9v\xe9nements de hook activ\xe9s."})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"champs-du-corps-de-la-charge-utile-de-donn\xe9es",children:"Champs du corps de la charge utile de donn\xe9es"}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\xc9v\xe9nements utilisateur"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\xc9v\xe9nement"}),(0,t.jsx)(d.th,{children:"Champ"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optionnel"}),(0,t.jsx)(d.th,{children:"Remarques"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"User.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"UserEntity"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'entit\xe9 utilisateur cr\xe9\xe9e pour cet \xe9v\xe9nement."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"User.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"UserEntity"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'entit\xe9 utilisateur mise \xe0 jour pour cet \xe9v\xe9nement."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"User.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\xc9v\xe9nements de r\xf4le"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type Role = {\n  id: string;\n  name: string;\n  description: string;\n  type: 'User' | 'MachineToMachine';\n  isDefault: boolean;\n};\n"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type Scope = {\n  id: string;\n  name: string;\n  description: string;\n  resourceId: string;\n  createdAt: number;\n};\n"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\xc9v\xe9nement"}),(0,t.jsx)(d.th,{children:"Champ"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optionnel"}),(0,t.jsx)(d.th,{children:"Remarques"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Role.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Role"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'entit\xe9 de r\xf4le cr\xe9\xe9e pour cet \xe9v\xe9nement."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Role.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Role"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'entit\xe9 de r\xf4le mise \xe0 jour pour cet \xe9v\xe9nement."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Role.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Role.Scope.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Scope[]"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"Les port\xe9es mises \xe0 jour assign\xe9es au r\xf4le."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Role.Scope.Updated"}),(0,t.jsx)(d.td,{children:"roleId"}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"L'ID du r\xf4le auquel les port\xe9es sont assign\xe9es. (Disponible uniquement lorsque l'\xe9v\xe9nement a \xe9t\xe9 d\xe9clench\xe9 par la cr\xe9ation d'un nouveau r\xf4le avec des port\xe9es pr\xe9-assign\xe9es)"})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\xc9v\xe9nements de permission (Port\xe9e)"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\xc9v\xe9nement"}),(0,t.jsx)(d.th,{children:"Champ"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optionnel"}),(0,t.jsx)(d.th,{children:"Remarques"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Scope.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Scope"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'entit\xe9 de port\xe9e cr\xe9\xe9e pour cet \xe9v\xe9nement."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Scope.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Scope"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'entit\xe9 de port\xe9e mise \xe0 jour pour cet \xe9v\xe9nement."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Scope.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\xc9v\xe9nements d'organisation"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type Organization = {\n  id: string;\n  name: string;\n  description?: string;\n  customData: object;\n  createdAt: number;\n};\n"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\xc9v\xe9nement"}),(0,t.jsx)(d.th,{children:"Champ"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optionnel"}),(0,t.jsx)(d.th,{children:"Remarques"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Organization.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Organization"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'entit\xe9 d'organisation cr\xe9\xe9e pour cet \xe9v\xe9nement."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Organization.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Organization"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'entit\xe9 d'organisation mise \xe0 jour pour cet \xe9v\xe9nement."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Organization.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Organization.Membership.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\xc9v\xe9nements de r\xf4le d'organisation"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type OrganizationRole = {\n  id: string;\n  name: string;\n  description?: string;\n};\n"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type OrganizationScope = {\n  id: string;\n  name: string;\n  description?: string;\n};\n"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\xc9v\xe9nement"}),(0,t.jsx)(d.th,{children:"Champ"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optionnel"}),(0,t.jsx)(d.th,{children:"Remarques"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationRole.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"OrganizationRole"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'entit\xe9 de r\xf4le d'organisation cr\xe9\xe9e pour cet \xe9v\xe9nement."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationRole.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"OrganizationRole"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'entit\xe9 de r\xf4le d'organisation mise \xe0 jour pour cet \xe9v\xe9nement."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationRole.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationRole.Scope.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationRole.Scope.Updated"}),(0,t.jsx)(d.td,{children:"organizationRoleId"}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"L'ID du r\xf4le auquel les port\xe9es sont assign\xe9es. (Disponible uniquement lorsque l'\xe9v\xe9nement a \xe9t\xe9 d\xe9clench\xe9 par la cr\xe9ation d'un nouveau r\xf4le avec des port\xe9es pr\xe9-assign\xe9es)"})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\xc9v\xe9nements de permission d'organisation (Port\xe9e d'organisation)"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\xc9v\xe9nement"}),(0,t.jsx)(d.th,{children:"Champ"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optionnel"}),(0,t.jsx)(d.th,{children:"Remarques"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationScope.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"OrganizationScope"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'entit\xe9 de port\xe9e d'organisation cr\xe9\xe9e."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationScope.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"OrganizationScope"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"L'entit\xe9 de port\xe9e d'organisation mise \xe0 jour."})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationScope.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]})]})]})]})}function a(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},15658:(e,d,n)=>{n.d(d,{R:()=>i,x:()=>c});var s=n(30758);const t={},r=s.createContext(t);function i(e){const d=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:d},e.children)}}}]);