"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[37547],{85860:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"authorization/api-resources/spring-boot","title":"Guia: Spring Boot","description":"Neste tutorial, assumimos que o cliente obteve um access_token v\xe1lido e o anexou ao cabe\xe7alho da solicita\xe7\xe3o como Authorization: Bearer","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/authorization/api-resources/spring-boot.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/spring-boot","permalink":"/pt-BR/authorization/api-resources/spring-boot","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/authorization/api-resources/spring-boot.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Guia: Node (Express)","permalink":"/pt-BR/authorization/api-resources/node-express"},"next":{"title":"Controle de acesso baseado em papel","permalink":"/pt-BR/authorization/role-based-access-control/"}}');var i=o(86070),a=o(15658),t=o(78551),s=o(77501);const c={sidebar_position:4},l="Guia: Spring Boot",u={},d=[{value:"Iniciar um projeto Spring Boot",id:"iniciar-um-projeto-spring-boot",level:2},{value:"Adicionar depend\xeancias",id:"adicionar-depend\xeancias",level:2},{value:"Obter emissor e URI JWKS",id:"obter-emissor-e-uri-jwks",level:2},{value:"Configurar aplica\xe7\xe3o",id:"configurar-aplica\xe7\xe3o",level:2},{value:"Fornecer validador de p\xfablico",id:"fornecer-validador-de-p\xfablico",level:2},{value:"Configurar seguran\xe7a do Spring",id:"configurar-seguran\xe7a-do-spring",level:2},{value:"Adicionar APIs",id:"adicionar-apis",level:2},{value:"Acessar API protegida",id:"acessar-api-protegida",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"guia-spring-boot",children:"Guia: Spring Boot"})}),"\n",(0,i.jsxs)(r.p,{children:["Neste tutorial, assumimos que o cliente obteve um ",(0,i.jsx)(r.code,{children:"access_token"})," v\xe1lido e o anexou ao cabe\xe7alho da solicita\xe7\xe3o como ",(0,i.jsx)(r.code,{children:"Authorization: Bearer <access_token>"})]}),"\n",(0,i.jsx)(r.p,{children:"Seu aplicativo web pode ser executado no lado do servidor usando o framework Spring Boot. Por enquanto, voc\xea precisa integrar o Logto no Spring Boot manualmente. Este artigo orienta voc\xea sobre como concluir isso passo a passo. E usamos Gradle, Java e Spring Security como exemplo."}),"\n",(0,i.jsx)(r.h2,{id:"iniciar-um-projeto-spring-boot",children:"Iniciar um projeto Spring Boot"}),"\n",(0,i.jsxs)(r.p,{children:["Com o ",(0,i.jsx)(r.a,{href:"https://start.spring.io/",children:"Spring Initializr"}),", voc\xea pode iniciar rapidamente um projeto Spring Boot. Use as seguintes op\xe7\xf5es:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Projeto Gradle"}),"\n",(0,i.jsx)(r.li,{children:"Linguagem: Java"}),"\n",(0,i.jsx)(r.li,{children:"Spring Boot: 2.7.2"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Gere e abra o projeto."}),"\n",(0,i.jsx)(r.h2,{id:"adicionar-depend\xeancias",children:"Adicionar depend\xeancias"}),"\n",(0,i.jsxs)(r.p,{children:["Adicione as depend\xeancias ao arquivo de constru\xe7\xe3o do projeto Gradle ",(0,i.jsx)(r.code,{children:"build.gradle"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-groovy",children:"dependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-web'\n    implementation 'org.springframework.boot:spring-boot-starter-oauth2-resource-server'\n}\n"})}),"\n",(0,i.jsxs)(r.admonition,{type:"note",children:[(0,i.jsx)(r.p,{children:"Como o Spring Boot e o Spring Security t\xeam suporte embutido tanto para servidor de recursos OAuth2 quanto para valida\xe7\xe3o de JWT, voc\xea N\xc3O precisa adicionar bibliotecas adicionais do Logto para integrar."}),(0,i.jsxs)(r.p,{children:["Veja ",(0,i.jsx)(r.a,{href:"https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/index.html",children:"Spring Security OAuth 2.0 Resource Server"})," e ",(0,i.jsx)(r.a,{href:"https://spring.io/guides/topicals/spring-security-architecture",children:"Spring Security Architecture"})," para mais detalhes."]})]}),"\n",(0,i.jsx)(r.h2,{id:"obter-emissor-e-uri-jwks",children:"Obter emissor e URI JWKS"}),"\n",(0,i.jsxs)(r.p,{children:["Todos os tokens s\xe3o emitidos pelo ",(0,i.jsx)(r.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier",children:"emissor (Issuer)"})," e assinados com ",(0,i.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc7517",children:"JWK"})," (Veja ",(0,i.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515",children:"JWS"})," para mais detalhes)."]}),"\n",(0,i.jsxs)(r.p,{children:["Antes de prosseguir, voc\xea precisar\xe1 obter um emissor e um URI JWKS para verificar o emissor e a assinatura do Bearer Token (",(0,i.jsx)(r.code,{children:"access_token"}),")."]}),"\n",(0,i.jsxs)(r.p,{children:["Por padr\xe3o, o emissor e o URI JWKS do seu Logto s\xe3o ",(0,i.jsx)(r.code,{children:"https://<your-logto-domain>/oidc"})," e ",(0,i.jsx)(r.code,{children:"https://<your-logto-domain>/oidc/jwks"})]}),"\n",(0,i.jsxs)(r.p,{children:["Todas as \xfaltimas Configura\xe7\xf5es do Servidor de Autoriza\xe7\xe3o Logto podem ser encontradas em ",(0,i.jsx)(r.code,{children:"https://<your-logto-domain>/oidc/.well-known/openid-configuration"}),", incluindo o ",(0,i.jsx)(r.strong,{children:"issuer"}),", ",(0,i.jsx)(r.strong,{children:"jwks_uri"})," e outras configura\xe7\xf5es de autoriza\xe7\xe3o. Por exemplo:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-json",children:'{\n  // ...\n  "issuer": "https://<your-logto-domain>/oidc",\n  "jwks_uri": "https://<your-logto-domain>/oidc/jwks"\n  // ...\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"configurar-aplica\xe7\xe3o",children:"Configurar aplica\xe7\xe3o"}),"\n",(0,i.jsxs)(r.p,{children:["Use um arquivo ",(0,i.jsx)(r.code,{children:"application.yml"})," (em vez do padr\xe3o ",(0,i.jsx)(r.code,{children:"application.properties"}),") para configurar a porta do servidor, p\xfablico e servidor de recursos OAuth2."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"# path/to/project/src/main/resources/application.yaml\nserver:\n  port: 3000\n\nlogto:\n  audience: http://localhost:3000/\n\nspring:\n  security:\n    oauth2:\n      resourceserver:\n        jwt:\n          issuer-uri: <your-logto-issuer-uri>\n          jwk-set-uri: <your-logto-jwks-uri>\n"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"audience"}),": O identificador \xfanico da API (ou seja, indicador de API) do seu recurso de API protegido."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"spring.security.oauth2.resourceserver.jwt.issuer-uri"}),": O valor da reivindica\xe7\xe3o ",(0,i.jsx)(r.code,{children:"iss"})," e o URI do emissor no JWT emitido pelo Logto. Preencha o valor ",(0,i.jsx)(r.code,{children:"issuer"})," da se\xe7\xe3o anterior."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"spring.security.oauth2.resourceserver.jwt.jwk-set-uri"}),": O Spring Security usa este URI para obter as chaves p\xfablicas do servidor de autoriza\xe7\xe3o para validar assinaturas JWT. Preencha o valor ",(0,i.jsx)(r.code,{children:"jwks_uri"})," da se\xe7\xe3o anterior."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"fornecer-validador-de-p\xfablico",children:"Fornecer validador de p\xfablico"}),"\n",(0,i.jsxs)(r.p,{children:["Forne\xe7a sua pr\xf3pria classe ",(0,i.jsx)(r.code,{children:"AudienceValidator"})," que implementa a interface ",(0,i.jsx)(r.code,{children:"OAuth2TokenValidator"})," para validar se o p\xfablico necess\xe1rio est\xe1 presente no JWT."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'// path/to/project/src/main/java/io/logto/springboot/sample/validator/AudienceValidator.java\npackage io.logto.springboot.sample.validator;\n\nimport org.springframework.security.oauth2.core.OAuth2Error;\nimport org.springframework.security.oauth2.core.OAuth2TokenValidator;\nimport org.springframework.security.oauth2.core.OAuth2TokenValidatorResult;\nimport org.springframework.security.oauth2.jwt.Jwt;\n\npublic class AudienceValidator implements OAuth2TokenValidator<Jwt> {\n\n    private final String audience;\n\n    public AudienceValidator(String audience) {\n        this.audience = audience;\n    }\n\n    @Override\n    public OAuth2TokenValidatorResult validate(Jwt jwt) {\n        if (!jwt.getAudience().contains(audience)) {\n            return OAuth2TokenValidatorResult.failure(new OAuth2Error("invalid_token", "Required audience not found", null));\n        }\n\n\t      // Opcional: Para RBAC, valide os escopos do JWT.\n\t      String scopes = jwt.getClaimAsString("scope");\n\t      if (scopes == null || !scopes.contains("read:profile")) {\n\t          return OAuth2TokenValidatorResult.failure(new OAuth2Error("invalid_token", "Insufficient permission", null));\n\t      }\n\n        return OAuth2TokenValidatorResult.success();\n    }\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"configurar-seguran\xe7a-do-spring",children:"Configurar seguran\xe7a do Spring"}),"\n",(0,i.jsx)(r.p,{children:"O Spring Security facilita a configura\xe7\xe3o do seu aplicativo como um Servidor de Recursos e a valida\xe7\xe3o do JWT do Bearer Token no cabe\xe7alho da solicita\xe7\xe3o."}),"\n",(0,i.jsxs)(r.p,{children:["Voc\xea precisa fornecer inst\xe2ncias de ",(0,i.jsx)(r.code,{children:"JwtDecoder"})," e ",(0,i.jsx)(r.code,{children:"SecurityFilterChain"})," (como beans do Spring) e adicionar a anota\xe7\xe3o ",(0,i.jsx)(r.code,{children:"@EnableWebSecurity"}),"."]}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsxs)(r.p,{children:["O Logto usa o algoritmo ",(0,i.jsx)(r.code,{children:"ES384"})," para assinar os JWTs por padr\xe3o. Para decodificar os JWTs, voc\xea precisa definir o ",(0,i.jsx)(r.code,{children:"jwsAlgorithm"})," para ",(0,i.jsx)(r.code,{children:"ES384"})," explicitamente. Se preferir usar ",(0,i.jsx)(r.code,{children:"RSA"}),", sinta-se \xe0 vontade para rotacionar o algoritmo de assinatura no Logto Admin Console. Consulte ",(0,i.jsx)(r.a,{href:"/developers/signing-keys",children:"Chaves de assinatura"})," para mais detalhes."]})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'// path/to/project/src/main/java/io/logto/springboot/sample/configuration/SecurityConfiguration.java\npackage io.logto.springboot.sample.configuration;\n\nimport com.nimbusds.jose.JOSEObjectType;\nimport com.nimbusds.jose.proc.DefaultJOSEObjectTypeVerifier;\nimport com.nimbusds.jose.proc.SecurityContext;\nimport io.logto.springboot.sample.validator.AudienceValidator;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.security.config.Customizer;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;\nimport org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator;\nimport org.springframework.security.oauth2.core.OAuth2TokenValidator;\nimport org.springframework.security.oauth2.jwt.JwtDecoder;\nimport org.springframework.security.oauth2.jwt.JwtValidators;\nimport org.springframework.security.oauth2.jwt.NimbusJwtDecoder;\nimport org.springframework.security.oauth2.jose.jws.SignatureAlgorithm;\nimport org.springframework.security.web.DefaultSecurityFilterChain;\n\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfiguration {\n\n    @Value("${logto.audience}")\n    private String audience;\n\n    @Value("${spring.security.oauth2.resourceserver.jwt.issuer-uri}")\n    private String issuer;\n\n    @Value("${spring.security.oauth2.resourceserver.jwt.jwk-set-uri}")\n    private String jwksUri;\n\n    @Bean\n    public JwtDecoder jwtDecoder() {\n        NimbusJwtDecoder jwtDecoder = NimbusJwtDecoder.withJwkSetUri(jwksUri)\n                // Logto usa o algoritmo ES384 para assinar os JWTs por padr\xe3o.\n                .jwsAlgorithm(ES384)\n                // O decodificador deve suportar o tipo de token: Token de Acesso + JWT.\n                .jwtProcessorCustomizer(customizer -> customizer.setJWSTypeVerifier(\n                        new DefaultJOSEObjectTypeVerifier<SecurityContext>(new JOSEObjectType("at+jwt"))))\n                .build();\n\n        jwtDecoder.setJwtValidator(new DelegatingOAuth2TokenValidator<>(\n                new AudienceValidator(audience),\n                new JwtIssuerValidator(issuer),\n                new JwtTimestampValidator()));\n\n        return jwtDecoder;\n    }\n\n    @Bean\n    public DefaultSecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n         http\n          .securityMatcher("/api/**")\n          .oauth2ResourceServer(oauth2 -> oauth2\n              .jwt(Customizer.withDefaults()))\n          .authorizeHttpRequests(requests -> requests\n              // Permitir todas as solicita\xe7\xf5es para as APIs p\xfablicas.\n              .requestMatchers("/api/.wellknown/**").permitAll()\n              // Requer valida\xe7\xe3o de token jwt para as APIs protegidas.\n              .anyRequest().authenticated());\n\n        return http.build();\n    }\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"adicionar-apis",children:"Adicionar APIs"}),"\n",(0,i.jsx)(r.p,{children:"Adicione um controlador para fornecer as APIs protegidas e p\xfablicas:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'// path/to/project/src/main/java/io/logto/springboot/sample/controller/ProtectedController.java\npackage io.logto.springboot.sample.controller;\n\nimport org.springframework.web.bind.annotation.CrossOrigin;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n// Permitir todas as origens apenas para o exemplo.\n// (Aplica\xe7\xf5es de produ\xe7\xe3o devem configurar o CORS cuidadosamente.)\n@CrossOrigin(origins = "*")\n@RestController\npublic class ProtectedController {\n    @GetMapping("/api/profile")\n    public String protectedProfile() {\n        return "Perfil protegido.";\n    }\n\n    @GetMapping("/api/.wellknown/config.json")\n    public String publicConfig() {\n        return "Configura\xe7\xe3o p\xfablica.";\n    }\n}\n\n'})}),"\n",(0,i.jsx)(r.h2,{id:"acessar-api-protegida",children:"Acessar API protegida"}),"\n",(0,i.jsxs)(r.p,{children:["Compile e execute seu aplicativo web Spring Boot, por exemplo, execute a tarefa Gradle ",(0,i.jsx)(r.code,{children:"bootRun"}),"."]}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(t.A,{value:"linux-or-macos",label:"Linux ou macOS",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"./gradlew bootRun\n"})})}),(0,i.jsx)(t.A,{value:"windows",label:"Windows",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"gradlew.bat bootRun\n"})})})]}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsxs)(r.p,{children:["Este tutorial assume que voc\xea possui o Token de Acesso para um recurso de API ",(0,i.jsx)(r.code,{children:"http://localhost:3000/"})," antes de fazer uma solicita\xe7\xe3o. Se voc\xea n\xe3o estiver pronto, ",(0,i.jsx)(r.a,{href:"/authorization/api-resources/protect-your-api",children:"leia isto"})," antes de continuar."]})}),"\n",(0,i.jsxs)(r.p,{children:["Solicite sua API protegida com o Token de Acesso como o token Bearer no cabe\xe7alho de autoriza\xe7\xe3o, por exemplo, execute o comando ",(0,i.jsx)(r.code,{children:"curl"}),"."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"curl --include 'http://localhost:3000/api/profile' --header 'Authorization: Bearer <your-access-token>'\n"})}),"\n",(0,i.jsx)(r.p,{children:"Se for bem-sucedido, voc\xea receber\xe1 uma resposta com status 200:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"HTTP/1.1 200\n...\n"})}),"\n",(0,i.jsx)(r.p,{children:"Caso contr\xe1rio, voc\xea receber\xe1 uma resposta com status 401 assim:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:'HTTP/1.1 401\n...\nWWW-Authenticate: Bearer error="invalid_token", error_description="An error occurred while attempting to decode the Jwt: Signed JWT rejected: Invalid signature", error_uri="https://tools.ietf.org/html/rfc6750#section-3.1"\n...\n'})})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},78551:(e,r,o)=>{o.d(r,{A:()=>t});o(30758);var n=o(13526);const i={tabItem:"tabItem_PGP0"};var a=o(86070);function t(e){let{children:r,hidden:o,className:t}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,t),hidden:o,children:r})}},77501:(e,r,o)=>{o.d(r,{A:()=>k});var n=o(30758),i=o(13526),a=o(65052),t=o(25557),s=o(77469),c=o(50873),l=o(62230),u=o(60196);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:o}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:o,attributes:n,default:i}}=e;return{value:r,label:o,attributes:n,default:i}}))}(o);return function(e){const r=(0,l.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,o])}function h(e){let{value:r,tabValues:o}=e;return o.some((e=>e.value===r))}function g(e){let{queryString:r=!1,groupId:o}=e;const i=(0,t.W6)(),a=function(e){let{queryString:r=!1,groupId:o}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:r,groupId:o});return[(0,c.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(i.location.search);r.set(a,e),i.replace({...i.location,search:r.toString()})}),[a,i])]}function m(e){const{defaultValue:r,queryString:o=!1,groupId:i}=e,a=p(e),[t,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[l,d]=g({queryString:o,groupId:i}),[m,j]=function(e){let{groupId:r}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(r),[i,a]=(0,u.Dv)(o);return[i,(0,n.useCallback)((e=>{o&&a.set(e)}),[o,a])]}({groupId:i}),f=(()=>{const e=l??m;return h({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{f&&c(f)}),[f]);return{selectedValue:t,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),j(e)}),[d,j,a]),tabValues:a}}var j=o(13887);const f={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var b=o(86070);function v(e){let{className:r,block:o,selectedValue:n,selectValue:t,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const r=e.currentTarget,o=c.indexOf(r),i=s[o].value;i!==n&&(l(r),t(i))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const o=c.indexOf(e.currentTarget)+1;r=c[o]??c[0];break}case"ArrowLeft":{const o=c.indexOf(e.currentTarget)-1;r=c[o]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":o},r),children:s.map((e=>{let{value:r,label:o,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":n===r}),children:o??r},r)}))})}function x(e){let{lazy:r,children:o,selectedValue:a}=e;const t=(Array.isArray(o)?o:[o]).filter(Boolean);if(r){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function w(e){const r=m(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...r,...e}),(0,b.jsx)(x,{...r,...e})]})}function k(e){const r=(0,j.A)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(r))}},15658:(e,r,o)=>{o.d(r,{R:()=>t,x:()=>s});var n=o(30758);const i={},a=n.createContext(i);function t(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);