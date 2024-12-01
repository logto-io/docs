"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[8209],{83485:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>y,Ki:()=>_,kJ:()=>f,x:()=>l,e7:()=>m,J_:()=>b,Gx:()=>k});var s=a(30758),n=a(7416),i=a(66259),r=a(86070);function l(){const e=(0,i.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const o=s.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,r.jsx)(o.Provider,{value:i,children:t})}function m(){const e=(0,s.useContext)(o);if(null===e)throw new n.dV("BlogPostProvider");return e}var d=a(81081),u=a(73658);const g=e=>new Date(e).toISOString();function h(e){const t=e.map(x);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:j({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function f(e){const{siteConfig:t}=(0,u.A)(),{withBaseUrl:a}=(0,d.hH)(),{metadata:{blogDescription:s,blogTitle:n,permalink:i}}=e,r=`${t.url}${i}`;return{"@context":"https://schema.org","@type":"Blog","@id":r,mainEntityOfPage:r,headline:n,description:s,blogPost:e.items.map((e=>function(e,t,a){const{assets:s,frontMatter:n,metadata:i}=e,{date:r,title:l,description:o,lastUpdatedAt:c}=i,m=s.image??n.image,d=n.keywords??[],u=`${t.url}${i.permalink}`,f=c?g(c):void 0;return{"@type":"BlogPosting","@id":u,mainEntityOfPage:u,url:u,headline:l,name:l,description:o,datePublished:r,...f?{dateModified:f}:{},...h(i.authors),...p(m,a,l),...d?{keywords:d}:{}}}(e.content,t,a)))}}function b(){const e=l(),{assets:t,metadata:a}=m(),{siteConfig:s}=(0,u.A)(),{withBaseUrl:n}=(0,d.hH)(),{date:i,title:r,description:o,frontMatter:c,lastUpdatedAt:f}=a,b=t.image??c.image,x=c.keywords??[],j=f?g(f):void 0,v=`${s.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:r,name:r,description:o,datePublished:i,...j?{dateModified:j}:{},...h(a.authors),...p(b,n,r),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${s.url}${e.blogBasePath}`,name:e.blogTitle}}}function x(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function j(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var v=a(25557),N=a(39798),A=a(62230),C=a(55189);function k(e){const{pathname:t}=(0,v.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,C.ys)(e.permalink,t))}(e,t)))),[e,t])}function _(e){const t=(0,A.$z)(e,(e=>`${new Date(e.date).getFullYear()}`)),a=Object.entries(t);return a.reverse(),a}function y(e){let{items:t,ulClassName:a,liClassName:s,linkClassName:n,linkActiveClassName:i}=e;return(0,r.jsx)("ul",{className:a,children:t.map((e=>(0,r.jsx)("li",{className:s,children:(0,r.jsx)(N.A,{isNavLink:!0,to:e.permalink,className:n,activeClassName:i,children:e.title})},e.permalink)))})}},65790:(e,t,a)=>{a.d(t,{A:()=>G});var s=a(30758),n=a(21657),i=a(13526),r=a(51074),l=a(83485),o=a(1610),c=a(63133),m=a(86070);function d(e){let{year:t,yearGroupHeadingClassName:a,children:s}=e;return(0,m.jsxs)("div",{role:"group",children:[(0,m.jsx)(c.A,{as:"h3",className:a,children:t}),s]})}function u(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:s}=e;if((0,o.p)().blog.sidebar.groupByYear){const e=(0,l.Ki)(t);return(0,m.jsx)(m.Fragment,{children:e.map((e=>{let[t,n]=e;return(0,m.jsx)(d,{year:t,yearGroupHeadingClassName:a,children:(0,m.jsx)(s,{items:n})},t)}))})}return(0,m.jsx)(s,{items:t})}const g=(0,s.memo)(u),h="sidebar_avLE",p="sidebarItemTitle_ruOA",f="sidebarItemList_I9TY",b="sidebarItem_am_1",x="sidebarItemLink_mqJa",j="sidebarItemLinkActive_M9FA",v="yearGroupHeading_uTzJ",N=e=>{let{items:t}=e;return(0,m.jsx)(l.OU,{items:t,ulClassName:(0,i.A)(f,"clean-list"),liClassName:b,linkClassName:x,linkActiveClassName:j})};function A(e){let{sidebar:t}=e;const a=(0,l.Gx)(t.items);return(0,m.jsx)("aside",{className:"col col--3",children:(0,m.jsxs)("nav",{className:(0,i.A)(h,"thin-scrollbar"),"aria-label":(0,r.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,m.jsx)("div",{className:(0,i.A)(p,"margin-bottom--md"),children:t.title}),(0,m.jsx)(g,{items:a,ListComponent:N,yearGroupHeadingClassName:v})]})})}const C=(0,s.memo)(A);var k=a(46684);const _="yearGroupHeading_auu4",y=e=>{let{items:t}=e;return(0,m.jsx)(l.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function P(e){let{sidebar:t}=e;const a=(0,l.Gx)(t.items);return(0,m.jsx)(g,{items:a,ListComponent:y,yearGroupHeadingClassName:_})}function w(e){return(0,m.jsx)(k.GX,{component:P,props:e})}const B=(0,s.memo)(w);function G(e){let{sidebar:t}=e;const a=(0,n.l)();return t?.items.length?"mobile"===a?(0,m.jsx)(B,{sidebar:t}):(0,m.jsx)(C,{sidebar:t}):null}},15760:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(30758);var s=a(13526),n=a(51074);const i=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var r=a(16696),l=a(59491),o=a(86623),c=a(17847),m=a(63133);const d={tag:"tag_ShRk"};var u=a(86070);function g(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(m.A,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:d.tag,children:(0,u.jsx)(c.A,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function h(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,u.jsx)(g,{letterEntry:e},e.letter)))})}var p=a(28594);function f(e){let{tags:t,sidebar:a}=e;const n=i();return(0,u.jsxs)(r.e3,{className:(0,s.A)(l.G.wrapper.blogPages,l.G.page.blogTagsListPage),children:[(0,u.jsx)(r.be,{title:n}),(0,u.jsx)(p.A,{tag:"blog_tags_list"}),(0,u.jsxs)(o.A,{sidebar:a,children:[(0,u.jsx)(m.A,{as:"h1",children:n}),(0,u.jsx)(h,{tags:t})]})]})}},17847:(e,t,a)=>{a.d(t,{A:()=>l});a(30758);var s=a(13526),n=a(39798);const i={tag:"tag_hfWe",tagRegular:"tagRegular_wJgs",tagWithCount:"tagWithCount_oaMe"};var r=a(86070);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,r.jsxs)(n.A,{href:t,title:o,className:(0,s.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,r.jsx)("span",{children:l})]})}},86623:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(65790),n=a(9452),i=a(13526),r=a(86070);function l(e){const{sidebar:t,toc:a,children:l,...o}=e,c=t&&t.items.length>0;return(0,r.jsx)(n.A,{...o,children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)(s.A,{sidebar:t}),(0,r.jsx)("main",{className:(0,i.A)("col",{"col--7":c,"col--9 col--offset-1":!c}),children:l}),a&&(0,r.jsx)("div",{className:"col col--2",children:a})]})})})}}}]);