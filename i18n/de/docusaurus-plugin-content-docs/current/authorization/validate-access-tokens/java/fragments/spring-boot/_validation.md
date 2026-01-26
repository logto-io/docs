Füge dies zu deiner `pom.xml` hinzu:

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
        // Denke daran, diese Umgebungsvariablen in deiner Bereitstellung zu setzen
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
        // Die Aussteller-Validierung (Issuer validation) wird automatisch vom Spring Security JWT Decoder übernommen
        // Implementiere hier deine zusätzliche Verifizierungslogik basierend auf dem Berechtigungsmodell
        // Verwende die untenstehenden Hilfsmethoden zur Anspruchsextraktion (Claim extraction)

        // Beispiel: throw new AuthorizationException("Unzureichende Berechtigungen");
        // Der Statuscode wird durch das Exception-Handling von Spring Security behandelt
    }

    // Hilfsmethoden für Spring Boot JWT
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
