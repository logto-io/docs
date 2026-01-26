`pom.xml` に以下を追加してください：

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

        // デプロイ時にこれらの環境変数を必ず設定してください
        this.expectedIssuer = System.getenv("JWT_ISSUER");
        this.jwksUri = System.getenv("JWKS_URI");

        // JWKS を取得して JWT 認証を構成
        fetchJWKS().onSuccess(jwks -> {
            // JWKS の構成（簡略化 - 適切な JWKS パーサーが必要な場合があります）
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
                        .setStatusCode(e.getStatusCode())  // 例外のステータスコードを使用
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
        // Vert.x 用に発行者 (Issuer) を手動で検証
        String issuer = principal.getString("iss");
        if (issuer == null || !expectedIssuer.equals(issuer)) {
            throw new AuthorizationException("Invalid issuer: " + issuer);
        }

        // 権限モデルに基づく追加の検証ロジックをここに実装してください
        // 下記のヘルパーメソッドを使用してクレーム (Claim) を抽出できます
    }

    // Vert.x JWT 用ヘルパーメソッド
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
