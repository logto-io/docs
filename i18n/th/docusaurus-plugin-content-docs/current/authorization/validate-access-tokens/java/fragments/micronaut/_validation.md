เพิ่มลงใน `pom.xml` ของคุณ:

```xml
<dependency>
    <groupId>io.micronaut.security</groupId>
    <artifactId>micronaut-security-jwt</artifactId>
</dependency>
<dependency>
    <groupId>io.micronaut</groupId>
    <artifactId>micronaut-http-server-netty</artifactId>
</dependency>
```

```yaml title="application.yml"
micronaut:
  security:
    authentication: bearer
    token:
      jwt:
        signatures:
          jwks:
            logto:
              url: ${JWKS_URI:https://your-tenant.logto.app/oidc/jwks}
        claims-validators:
          issuer: ${JWT_ISSUER:https://your-tenant.logto.app/oidc}
```

```java title="JwtClaimsValidator.java"
import io.micronaut.security.token.Claims;
import io.micronaut.security.token.validator.TokenValidator;
import jakarta.inject.Singleton;
import org.reactivestreams.Publisher;
import reactor.core.publisher.Mono;
import java.util.Arrays;
import java.util.List;

@Singleton
public class JwtClaimsValidator implements TokenValidator {

    @Override
    public Publisher<Boolean> validateToken(String token, Claims claims) {
        try {
            verifyPayload(claims);
            return Mono.just(true);
        } catch (AuthorizationException e) {
            // Micronaut จะจัดการรหัสสถานะ (status code) ให้เหมาะสม
            return Mono.just(false);
        }
    }

    private void verifyPayload(Claims claims) {
        // การตรวจสอบผู้ออก (Issuer) จะถูกจัดการโดยอัตโนมัติด้วยการตั้งค่า JWT ของ Micronaut
        // เพิ่มตรรกะการตรวจสอบเพิ่มเติมของคุณที่นี่ตามโมเดลสิทธิ์ (permission model)
        // ใช้เมธอดช่วยเหลือด้านล่างสำหรับการดึงข้อมูลการอ้างสิทธิ์ (claim extraction)

        // ตัวอย่าง: throw new AuthorizationException("Insufficient permissions");
    }

    // เมธอดช่วยเหลือสำหรับ Micronaut JWT
    @SuppressWarnings("unchecked")
    private List<String> extractAudiences(Claims claims) {
        Object aud = claims.get("aud");
        if (aud instanceof List) {
            return (List<String>) aud;
        } else if (aud instanceof String) {
            return Arrays.asList((String) aud);
        }
        return List.of();
    }

    private String extractScopes(Claims claims) {
        return (String) claims.get("scope");
    }

    private String extractOrganizationId(Claims claims) {
        return (String) claims.get("organization_id");
    }
}
```
