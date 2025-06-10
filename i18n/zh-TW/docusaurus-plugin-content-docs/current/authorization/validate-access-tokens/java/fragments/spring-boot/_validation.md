將以下內容加入你的 `pom.xml`：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-oauth2-resource-server</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-oauth2-jose</artifactId>
</dependency>
```

```java title="JwtSecurityConfig.java"
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class JwtSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/protected/**").authenticated()
                .anyRequest().permitAll()
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt.decoder(jwtDecoder()))
            );
        return http.build();
    }

    @Bean
    public JwtDecoder jwtDecoder() {
        // 請記得在部署時設定這些環境變數
        String jwksUri = System.getenv("JWKS_URI");
        String issuer = System.getenv("JWT_ISSUER");

        return NimbusJwtDecoder.withJwkSetUri(jwksUri)
            .issuer(issuer)
            .build();
    }
}
```

```java title="JwtValidator.java"
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class JwtValidator {

    public void verifyPayload(Jwt jwt) {
        // 簽發者 (Issuer) 驗證已由 Spring Security JWT decoder 自動處理
        // 在此根據權限模型實作你的額外驗證邏輯
        // 可使用下方輔助方法來提取宣告 (Claims)

        // 範例：throw new AuthorizationException("Insufficient permissions");
        // 狀態碼將由 Spring Security 的例外處理機制處理
    }

    // Spring Boot JWT 輔助方法
    private List<String> extractAudiences(Jwt jwt) {
        return jwt.getAudience();
    }

    private String extractScopes(Jwt jwt) {
        return jwt.getClaimAsString("scope");
    }

    private String extractOrganizationId(Jwt jwt) {
        return jwt.getClaimAsString("organization_id");
    }
}
```
