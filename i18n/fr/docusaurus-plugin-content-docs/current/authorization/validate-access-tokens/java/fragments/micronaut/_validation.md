Ajoutez à votre `pom.xml` :

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
            // Micronaut gérera le code de statut de manière appropriée
            return Mono.just(false);
        }
    }

    private void verifyPayload(Claims claims) {
        // La validation de l’émetteur (Issuer) est gérée automatiquement par la configuration JWT de Micronaut
        // Implémentez ici votre logique de vérification supplémentaire basée sur le modèle de permission (Permission)
        // Utilisez les méthodes utilitaires ci-dessous pour l’extraction des revendications (Claims)

        // Exemple : throw new AuthorizationException("Permissions insuffisantes");
    }

    // Méthodes utilitaires pour Micronaut JWT
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
