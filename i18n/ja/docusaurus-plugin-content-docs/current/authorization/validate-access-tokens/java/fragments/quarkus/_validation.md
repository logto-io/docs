`pom.xml` に以下を追加してください：

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
# JWT 設定
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
                        .entity("{\"error\": \"Invalid token\"}")
                        .build()
                );
            }
        }
    }

    private void verifyPayload(JsonWebToken jwt) {
        // 発行者 (Issuer) の検証は Quarkus JWT 拡張機能によって自動的に処理されます
        // 権限モデルに基づいた追加の検証ロジックをここに実装してください
        // 下記のヘルパーメソッドをクレーム (Claim) 抽出に利用できます
    }

    // Quarkus JWT 用ヘルパーメソッド
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
