"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[91538],{65050:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>u,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"authorization/api-resources/spring-boot","title":"Anleitung: Spring Boot","description":"In diesem Tutorial gehen wir davon aus, dass der Client ein g\xfcltiges access_token erhalten hat und es als Authorization: Bearer  im Anforderungsheader angeh\xe4ngt ist.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/authorization/api-resources/spring-boot.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/spring-boot","permalink":"/de/authorization/api-resources/spring-boot","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/authorization/api-resources/spring-boot.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Anleitung: Node (Express)","permalink":"/de/authorization/api-resources/node-express"},"next":{"title":"Rollenbasierte Zugangskontrolle","permalink":"/de/authorization/role-based-access-control/"}}');var i=r(86070),o=r(15658),s=r(78551),a=r(77501);const u={sidebar_position:4},l="Anleitung: Spring Boot",c={},d=[{value:"Ein Spring Boot-Projekt starten",id:"ein-spring-boot-projekt-starten",level:2},{value:"Abh\xe4ngigkeiten hinzuf\xfcgen",id:"abh\xe4ngigkeiten-hinzuf\xfcgen",level:2},{value:"Aussteller und JWKS-URI abrufen",id:"aussteller-und-jwks-uri-abrufen",level:2},{value:"Anwendung konfigurieren",id:"anwendung-konfigurieren",level:2},{value:"Zielgruppen-Validator bereitstellen",id:"zielgruppen-validator-bereitstellen",level:2},{value:"Spring Security konfigurieren",id:"spring-security-konfigurieren",level:2},{value:"APIs hinzuf\xfcgen",id:"apis-hinzuf\xfcgen",level:2},{value:"Gesch\xfctzte API aufrufen",id:"gesch\xfctzte-api-aufrufen",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"anleitung-spring-boot",children:"Anleitung: Spring Boot"})}),"\n",(0,i.jsxs)(n.p,{children:["In diesem Tutorial gehen wir davon aus, dass der Client ein g\xfcltiges ",(0,i.jsx)(n.code,{children:"access_token"})," erhalten hat und es als ",(0,i.jsx)(n.code,{children:"Authorization: Bearer <access_token>"})," im Anforderungsheader angeh\xe4ngt ist."]}),"\n",(0,i.jsx)(n.p,{children:"Deine Webanwendung kann serverseitig mit dem Spring Boot Framework ausgef\xfchrt werden. Derzeit musst du Logto manuell in Spring Boot integrieren. Dieser Artikel f\xfchrt dich Schritt f\xfcr Schritt durch den Prozess. Wir verwenden Gradle, Java und Spring Security als Beispiel."}),"\n",(0,i.jsx)(n.h2,{id:"ein-spring-boot-projekt-starten",children:"Ein Spring Boot-Projekt starten"}),"\n",(0,i.jsxs)(n.p,{children:["Mit ",(0,i.jsx)(n.a,{href:"https://start.spring.io/",children:"Spring Initializr"})," kannst du schnell ein Spring Boot-Projekt starten. Verwende die folgenden Optionen:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gradle-Projekt"}),"\n",(0,i.jsx)(n.li,{children:"Sprache: Java"}),"\n",(0,i.jsx)(n.li,{children:"Spring Boot: 2.7.2"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Generiere und \xf6ffne das Projekt."}),"\n",(0,i.jsx)(n.h2,{id:"abh\xe4ngigkeiten-hinzuf\xfcgen",children:"Abh\xe4ngigkeiten hinzuf\xfcgen"}),"\n",(0,i.jsxs)(n.p,{children:["F\xfcge die Abh\xe4ngigkeiten zu deiner Gradle-Projekt-Build-Datei ",(0,i.jsx)(n.code,{children:"build.gradle"})," hinzu:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:"dependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-web'\n    implementation 'org.springframework.boot:spring-boot-starter-oauth2-resource-server'\n}\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"Da Spring Boot und Spring Security integrierte Unterst\xfctzung f\xfcr sowohl OAuth2-Ressourcenserver als auch JWT-Validierung bieten, musst du keine zus\xe4tzlichen Bibliotheken von Logto hinzuf\xfcgen, um zu integrieren."}),(0,i.jsxs)(n.p,{children:["Siehe ",(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/index.html",children:"Spring Security OAuth 2.0 Resource Server"})," und ",(0,i.jsx)(n.a,{href:"https://spring.io/guides/topicals/spring-security-architecture",children:"Spring Security Architektur"})," f\xfcr weitere Details."]})]}),"\n",(0,i.jsx)(n.h2,{id:"aussteller-und-jwks-uri-abrufen",children:"Aussteller und JWKS-URI abrufen"}),"\n",(0,i.jsxs)(n.p,{children:["Alle Tokens werden vom ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier",children:"Aussteller (Issuer)"})," ausgestellt und mit ",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7517",children:"JWK"})," signiert (siehe ",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515",children:"JWS"})," f\xfcr weitere Details)."]}),"\n",(0,i.jsxs)(n.p,{children:["Bevor du fortf\xe4hrst, musst du einen Aussteller und eine JWKS-URI erhalten, um den Aussteller und die Signatur des Bearer Tokens (",(0,i.jsx)(n.code,{children:"access_token"}),") zu \xfcberpr\xfcfen."]}),"\n",(0,i.jsxs)(n.p,{children:["Standardm\xe4\xdfig sind der Aussteller und die JWKS-URI deines Logto ",(0,i.jsx)(n.code,{children:"https://<your-logto-domain>/oidc"})," und ",(0,i.jsx)(n.code,{children:"https://<your-logto-domain>/oidc/jwks"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Alle neuesten Logto Authorization Server Konfigurationen findest du unter ",(0,i.jsx)(n.code,{children:"https://<your-logto-domain>/oidc/.well-known/openid-configuration"}),", einschlie\xdflich des ",(0,i.jsx)(n.strong,{children:"issuer"}),", ",(0,i.jsx)(n.strong,{children:"jwks_uri"})," und anderer Autorisierungskonfigurationen. Zum Beispiel:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  // ...\n  "issuer": "https://<your-logto-domain>/oidc",\n  "jwks_uri": "https://<your-logto-domain>/oidc/jwks"\n  // ...\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"anwendung-konfigurieren",children:"Anwendung konfigurieren"}),"\n",(0,i.jsxs)(n.p,{children:["Verwende eine ",(0,i.jsx)(n.code,{children:"application.yml"}),"-Datei (anstelle der Standard-",(0,i.jsx)(n.code,{children:"application.properties"}),"), um den Serverport, die Zielgruppe und den OAuth2-Ressourcenserver zu konfigurieren."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# path/to/project/src/main/resources/application.yaml\nserver:\n  port: 3000\n\nlogto:\n  audience: http://localhost:3000/\n\nspring:\n  security:\n    oauth2:\n      resourceserver:\n        jwt:\n          issuer-uri: <your-logto-issuer-uri>\n          jwk-set-uri: <your-logto-jwks-uri>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"audience"}),": Der eindeutige API-Indikator (d. h. API-Indikator) deiner gesch\xfctzten API-Ressource."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"spring.security.oauth2.resourceserver.jwt.issuer-uri"}),": Der ",(0,i.jsx)(n.code,{children:"iss"})," Anspruchswert und die Aussteller-URI im von Logto ausgestellten JWT. F\xfclle den ",(0,i.jsx)(n.code,{children:"issuer"}),"-Wert aus dem vorherigen Abschnitt aus."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"spring.security.oauth2.resourceserver.jwt.jwk-set-uri"}),": Spring Security verwendet diese URI, um die \xf6ffentlichen Schl\xfcssel des Autorisierungsservers zu erhalten, um JWT-Signaturen zu validieren. F\xfclle den ",(0,i.jsx)(n.code,{children:"jwks_uri"}),"-Wert aus dem vorherigen Abschnitt aus."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"zielgruppen-validator-bereitstellen",children:"Zielgruppen-Validator bereitstellen"}),"\n",(0,i.jsxs)(n.p,{children:["Stelle deine eigene ",(0,i.jsx)(n.code,{children:"AudienceValidator"}),"-Klasse bereit, die das ",(0,i.jsx)(n.code,{children:"OAuth2TokenValidator"}),"-Interface implementiert, um zu validieren, ob die erforderliche Zielgruppe im JWT vorhanden ist."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// path/to/project/src/main/java/io/logto/springboot/sample/validator/AudienceValidator.java\npackage io.logto.springboot.sample.validator;\n\nimport org.springframework.security.oauth2.core.OAuth2Error;\nimport org.springframework.security.oauth2.core.OAuth2TokenValidator;\nimport org.springframework.security.oauth2.core.OAuth2TokenValidatorResult;\nimport org.springframework.security.oauth2.jwt.Jwt;\n\npublic class AudienceValidator implements OAuth2TokenValidator<Jwt> {\n\n    private final String audience;\n\n    public AudienceValidator(String audience) {\n        this.audience = audience;\n    }\n\n    @Override\n    public OAuth2TokenValidatorResult validate(Jwt jwt) {\n        if (!jwt.getAudience().contains(audience)) {\n            return OAuth2TokenValidatorResult.failure(new OAuth2Error("invalid_token", "Required audience not found", null));\n        }\n\n\t      // Optional: F\xfcr RBAC die Berechtigungen des JWT validieren.\n\t      String scopes = jwt.getClaimAsString("scope");\n\t      if (scopes == null || !scopes.contains("read:profile")) {\n\t          return OAuth2TokenValidatorResult.failure(new OAuth2Error("invalid_token", "Insufficient permission", null));\n\t      }\n\n        return OAuth2TokenValidatorResult.success();\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"spring-security-konfigurieren",children:"Spring Security konfigurieren"}),"\n",(0,i.jsx)(n.p,{children:"Spring Security macht es einfach, deine Anwendung als Ressourcenserver zu konfigurieren und das JWT aus dem Bearer Token im Anforderungsheader zu validieren."}),"\n",(0,i.jsxs)(n.p,{children:["Du musst Instanzen von ",(0,i.jsx)(n.code,{children:"JwtDecoder"})," und ",(0,i.jsx)(n.code,{children:"SecurityFilterChain"})," (als Spring Beans) bereitstellen und die ",(0,i.jsx)(n.code,{children:"@EnableWebSecurity"}),"-Annotation hinzuf\xfcgen."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Logto verwendet standardm\xe4\xdfig den ",(0,i.jsx)(n.code,{children:"ES384"}),"-Algorithmus, um die JWTs zu signieren. Um die JWTs zu dekodieren, musst du den ",(0,i.jsx)(n.code,{children:"jwsAlgorithm"})," explizit auf ",(0,i.jsx)(n.code,{children:"ES384"})," setzen. Wenn du lieber ",(0,i.jsx)(n.code,{children:"RSA"})," verwenden m\xf6chtest, kannst du den Signaturalgorithmus in der Logto Admin-Konsole rotieren. Bitte siehe ",(0,i.jsx)(n.a,{href:"/developers/signing-keys",children:"Signaturschl\xfcssel"})," f\xfcr weitere Details."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// path/to/project/src/main/java/io/logto/springboot/sample/configuration/SecurityConfiguration.java\npackage io.logto.springboot.sample.configuration;\n\nimport com.nimbusds.jose.JOSEObjectType;\nimport com.nimbusds.jose.proc.DefaultJOSEObjectTypeVerifier;\nimport com.nimbusds.jose.proc.SecurityContext;\nimport io.logto.springboot.sample.validator.AudienceValidator;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.security.config.Customizer;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;\nimport org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator;\nimport org.springframework.security.oauth2.core.OAuth2TokenValidator;\nimport org.springframework.security.oauth2.jwt.JwtDecoder;\nimport org.springframework.security.oauth2.jwt.JwtValidators;\nimport org.springframework.security.oauth2.jwt.NimbusJwtDecoder;\nimport org.springframework.security.oauth2.jose.jws.SignatureAlgorithm;\nimport org.springframework.security.web.DefaultSecurityFilterChain;\n\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfiguration {\n\n    @Value("${logto.audience}")\n    private String audience;\n\n    @Value("${spring.security.oauth2.resourceserver.jwt.issuer-uri}")\n    private String issuer;\n\n    @Value("${spring.security.oauth2.resourceserver.jwt.jwk-set-uri}")\n    private String jwksUri;\n\n    @Bean\n    public JwtDecoder jwtDecoder() {\n        NimbusJwtDecoder jwtDecoder = NimbusJwtDecoder.withJwkSetUri(jwksUri)\n                // Logto verwendet standardm\xe4\xdfig den ES384-Algorithmus, um die JWTs zu signieren.\n                .jwsAlgorithm(ES384)\n                // Der Decoder sollte den Token-Typ unterst\xfctzen: Zugangstoken + JWT.\n                .jwtProcessorCustomizer(customizer -> customizer.setJWSTypeVerifier(\n                        new DefaultJOSEObjectTypeVerifier<SecurityContext>(new JOSEObjectType("at+jwt"))))\n                .build();\n\n        jwtDecoder.setJwtValidator(new DelegatingOAuth2TokenValidator<>(\n                new AudienceValidator(audience),\n                new JwtIssuerValidator(issuer),\n                new JwtTimestampValidator()));\n\n        return jwtDecoder;\n    }\n\n    @Bean\n    public DefaultSecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n         http\n          .securityMatcher("/api/**")\n          .oauth2ResourceServer(oauth2 -> oauth2\n              .jwt(Customizer.withDefaults()))\n          .authorizeHttpRequests(requests -> requests\n              // Erlaube alle Anfragen an die \xf6ffentlichen APIs.\n              .requestMatchers("/api/.wellknown/**").permitAll()\n              // Erfordert JWT-Token-Validierung f\xfcr die gesch\xfctzten APIs.\n              .anyRequest().authenticated());\n\n        return http.build();\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"apis-hinzuf\xfcgen",children:"APIs hinzuf\xfcgen"}),"\n",(0,i.jsx)(n.p,{children:"F\xfcge einen Controller hinzu, um die gesch\xfctzten und \xf6ffentlichen APIs bereitzustellen:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// path/to/project/src/main/java/io/logto/springboot/sample/controller/ProtectedController.java\npackage io.logto.springboot.sample.controller;\n\nimport org.springframework.web.bind.annotation.CrossOrigin;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n// Erlaube alle Urspr\xfcnge nur f\xfcr das Beispiel.\n// (Produktionsanwendungen sollten CORS sorgf\xe4ltig konfigurieren.)\n@CrossOrigin(origins = "*")\n@RestController\npublic class ProtectedController {\n    @GetMapping("/api/profile")\n    public String protectedProfile() {\n        return "Gesch\xfctztes Profil.";\n    }\n\n    @GetMapping("/api/.wellknown/config.json")\n    public String publicConfig() {\n        return "\xd6ffentliche Konfiguration.";\n    }\n}\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"gesch\xfctzte-api-aufrufen",children:"Gesch\xfctzte API aufrufen"}),"\n",(0,i.jsxs)(n.p,{children:["Baue und f\xfchre deine Spring Boot-Webanwendung aus, z. B. f\xfchre die ",(0,i.jsx)(n.code,{children:"bootRun"})," Gradle-Aufgabe aus."]}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(s.A,{value:"linux-or-macos",label:"Linux oder macOS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./gradlew bootRun\n"})})}),(0,i.jsx)(s.A,{value:"windows",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gradlew.bat bootRun\n"})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Dieses Tutorial geht davon aus, dass du das Zugangstoken f\xfcr eine API-Ressource ",(0,i.jsx)(n.code,{children:"http://localhost:3000/"})," hast, bevor du eine Anfrage stellst. Wenn du noch nicht bereit bist, ",(0,i.jsx)(n.a,{href:"/authorization/api-resources/protect-your-api",children:"lies dies"})," bevor du fortf\xe4hrst."]})}),"\n",(0,i.jsxs)(n.p,{children:["Fordere deine gesch\xfctzte API mit dem Zugangstoken als Bearer-Token im Authorization-Header an, z. B. f\xfchre den ",(0,i.jsx)(n.code,{children:"curl"}),"-Befehl aus."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl --include 'http://localhost:3000/api/profile' --header 'Authorization: Bearer <your-access-token>'\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wenn erfolgreich, erh\xe4ltst du eine Antwort mit dem Status 200:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"HTTP/1.1 200\n...\n"})}),"\n",(0,i.jsx)(n.p,{children:"Andernfalls erh\xe4ltst du eine Antwort mit dem Status 401 wie folgt:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'HTTP/1.1 401\n...\nWWW-Authenticate: Bearer error="invalid_token", error_description="An error occurred while attempting to decode the Jwt: Signed JWT rejected: Invalid signature", error_uri="https://tools.ietf.org/html/rfc6750#section-3.1"\n...\n'})})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},78551:(e,n,r)=>{r.d(n,{A:()=>s});r(30758);var t=r(13526);const i={tabItem:"tabItem_PGP0"};var o=r(86070);function s(e){let{children:n,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,s),hidden:r,children:n})}},77501:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(30758),i=r(13526),o=r(65052),s=r(25557),a=r(77469),u=r(50873),l=r(62230),c=r(60196);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const i=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,o=h(e),[s,u]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[l,d]=p({queryString:r,groupId:i}),[f,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,c.Dv)(r);return[i,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:i}),j=(()=>{const e=l??f;return g({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{j&&u(j)}),[j]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=r(13887);const j={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var b=r(86070);function w(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:a}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),c=e=>{const n=e.currentTarget,r=u.indexOf(n),i=a[r].value;i!==t&&(l(n),s(i))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...o,className:(0,i.A)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function v(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,b.jsx)(w,{...n,...e}),(0,b.jsx)(x,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(n))}},15658:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(30758);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);