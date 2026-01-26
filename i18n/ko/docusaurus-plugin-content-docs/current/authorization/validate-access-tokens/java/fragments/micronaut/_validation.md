`pom.xml`에 다음을 추가하세요:

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
            // Micronaut가 상태 코드를 적절하게 처리합니다
            return Mono.just(false);
        }
    }

    private void verifyPayload(Claims claims) {
        // 발급자(issuer) 검증은 Micronaut JWT 설정에 의해 자동으로 처리됩니다
        // 권한(permission) 모델에 따라 추가 검증 로직을 여기에 구현하세요
        // 아래의 헬퍼 메서드를 사용하여 클레임(claim) 추출

        // 예시: throw new AuthorizationException("Insufficient permissions");
    }

    // Micronaut JWT를 위한 헬퍼 메서드
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
