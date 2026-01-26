เพิ่มลงใน `pom.xml` ของคุณ:

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
        // อย่าลืมตั้งค่าตัวแปรสภาพแวดล้อมเหล่านี้ในระบบ deployment ของคุณ
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
        // การตรวจสอบผู้ออก (Issuer) จะถูกจัดการโดยอัตโนมัติด้วย Spring Security JWT decoder
        // เพิ่มตรรกะการตรวจสอบเพิ่มเติมของคุณที่นี่ตามโมเดลสิทธิ์ (permission model)
        // ใช้เมธอดช่วยเหลือด้านล่างสำหรับการดึงข้อมูล claim

        // ตัวอย่าง: throw new AuthorizationException("Insufficient permissions");
        // รหัสสถานะ (status code) จะถูกจัดการโดยกลไกจัดการข้อยกเว้นของ Spring Security
    }

    // เมธอดช่วยเหลือสำหรับ Spring Boot JWT
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
