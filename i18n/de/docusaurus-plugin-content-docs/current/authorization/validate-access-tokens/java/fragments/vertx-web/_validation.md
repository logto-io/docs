Füge dies zu deiner `pom.xml` hinzu:

```xml
<dependency>
    <groupId>io.vertx</groupId>
    <artifactId>vertx-web</artifactId>
</dependency>
<dependency>
    <groupId>io.vertx</groupId>
    <artifactId>vertx-auth-jwt</artifactId>
</dependency>
<dependency>
    <groupId>io.vertx</groupId>
    <artifactId>vertx-web-client</artifactId>
</dependency>
```

```java title="JwtAuthHandler.java"
import io.vertx.core.Future;
import io.vertx.core.Handler;
import io.vertx.core.Vertx;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.auth.jwt.JWTAuth;
import io.vertx.ext.auth.jwt.JWTAuthOptions;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.client.WebClient;
import java.util.List;
import java.util.ArrayList;

public class JwtAuthHandler implements Handler<RoutingContext> {

    private final JWTAuth jwtAuth;
    private final WebClient webClient;
    private final String expectedIssuer;
    private final String jwksUri;

    public JwtAuthHandler(Vertx vertx) {
        this.webClient = WebClient.create(vertx);
        this.jwtAuth = JWTAuth.create(vertx, new JWTAuthOptions());

        // Denke daran, diese Umgebungsvariablen in deiner Bereitstellung zu setzen
        this.expectedIssuer = System.getenv("JWT_ISSUER");
        this.jwksUri = System.getenv("JWKS_URI");

        // JWKS abrufen und JWT-Authentifizierung konfigurieren
        fetchJWKS().onSuccess(jwks -> {
            // JWKS konfigurieren (vereinfacht – du benötigst möglicherweise einen richtigen JWKS-Parser)
        });
    }

    @Override
    public void handle(RoutingContext context) {
        String authHeader = context.request().getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            context.response()
                .setStatusCode(401)
                .putHeader("Content-Type", "application/json")
                .end("{\"error\": \"Authorization header missing or invalid\"}");
            return;
        }

        String token = authHeader.substring(7);
        jwtAuth.authenticate(new JsonObject().put("jwt", token))
            .onSuccess(user -> {
                try {
                    JsonObject principal = user.principal();
                    verifyPayload(principal);
                    context.put("auth", principal);
                    context.next();
                } catch (AuthorizationException e) {
                    context.response()
                        .setStatusCode(e.getStatusCode())  // Verwende den Statuscode der Exception
                        .putHeader("Content-Type", "application/json")
                        .end("{\"error\": \"" + e.getMessage() + "\"}");
                } catch (Exception e) {
                    context.response()
                        .setStatusCode(401)
                        .putHeader("Content-Type", "application/json")
                        .end("{\"error\": \"Invalid token\"}");
                }
            })
            .onFailure(err -> {
                context.response()
                    .setStatusCode(401)
                    .putHeader("Content-Type", "application/json")
                    .end("{\"error\": \"Invalid token: " + err.getMessage() + "\"}");
            });
    }

    private Future<JsonObject> fetchJWKS() {
        return webClient.getAbs(this.jwksUri)
            .send()
            .map(response -> response.bodyAsJsonObject());
    }

    private void verifyPayload(JsonObject principal) {
        // Aussteller (Issuer) manuell für Vert.x überprüfen
        String issuer = principal.getString("iss");
        if (issuer == null || !expectedIssuer.equals(issuer)) {
            throw new AuthorizationException("Invalid issuer: " + issuer);
        }

        // Implementiere hier deine zusätzliche Überprüfungslogik basierend auf dem Berechtigungsmodell
        // Verwende die untenstehenden Hilfsmethoden für das Extrahieren von Ansprüchen (Claims)
    }

    // Hilfsmethoden für Vert.x JWT
    private List<String> extractAudiences(JsonObject principal) {
        JsonArray audiences = principal.getJsonArray("aud");
        if (audiences != null) {
            List<String> result = new ArrayList<>();
            for (Object aud : audiences) {
                result.add(aud.toString());
            }
            return result;
        }
        return List.of();
    }

    private String extractScopes(JsonObject principal) {
        return principal.getString("scope");
    }

    private String extractOrganizationId(JsonObject principal) {
        return principal.getString("organization_id");
    }
}
```
