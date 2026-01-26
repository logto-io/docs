Adicione ao seu `pom.xml`:

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-smallrye-jwt</artifactId>
</dependency>
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-resteasy-reactive</artifactId>
</dependency>
```

```properties title="application.properties"
# Configuração do JWT
mp.jwt.verify.publickey.location=${JWKS_URI:https://your-tenant.logto.app/oidc/jwks}
mp.jwt.verify.issuer=${JWT_ISSUER:https://your-tenant.logto.app/oidc}
```

```java title="JwtVerificationFilter.java"
import org.eclipse.microprofile.jwt.JsonWebToken;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.Provider;
import java.util.ArrayList;
import java.util.List;

@Provider
@ApplicationScoped
public class JwtVerificationFilter implements ContainerRequestFilter {

    @Inject
    JsonWebToken jwt;

    @Override
    public void filter(ContainerRequestContext requestContext) {
        if (requestContext.getUriInfo().getPath().startsWith("/api/protected")) {
            try {
                verifyPayload(jwt);
                requestContext.setProperty("auth", jwt);
            } catch (AuthorizationException e) {
                requestContext.abortWith(
                    Response.status(e.getStatusCode())
                        .entity("{\"error\": \"" + e.getMessage() + "\"}")
                        .build()
                );
            } catch (Exception e) {
                requestContext.abortWith(
                    Response.status(401)
                        .entity("{\"error\": \"Token inválido\"}")
                        .build()
                );
            }
        }
    }

    private void verifyPayload(JsonWebToken jwt) {
        // A validação do emissor (Issuer) é feita automaticamente pela extensão Quarkus JWT
        // Implemente aqui sua lógica adicional de verificação com base no modelo de permissão
        // Use os métodos auxiliares abaixo para extração de reivindicações (claims)
    }

    // Métodos auxiliares para Quarkus JWT
    private List<String> extractAudiences(JsonWebToken jwt) {
        return new ArrayList<>(jwt.getAudience());
    }

    private String extractScopes(JsonWebToken jwt) {
        return jwt.getClaim("scope");
    }

    private String extractOrganizationId(JsonWebToken jwt) {
        return jwt.getClaim("organization_id");
    }
}
```
