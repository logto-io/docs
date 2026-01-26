```java title="MainVerticle.java"
import io.vertx.core.AbstractVerticle;
import io.vertx.core.Promise;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;

public class MainVerticle extends AbstractVerticle {

    @Override
    public void start(Promise<Void> startPromise) throws Exception {
        Router router = Router.router(vertx);

        // 보호된 라우트에 미들웨어 적용
        router.route("/api/protected*").handler(new JwtAuthHandler(vertx));
        router.get("/api/protected").handler(this::protectedEndpoint);

        vertx.createHttpServer()
            .requestHandler(router)
            .listen(8080, result -> {
                if (result.succeeded()) {
                    startPromise.complete();
                } else {
                    startPromise.fail(result.cause());
                }
            });
    }

    private void protectedEndpoint(RoutingContext context) {
        // 컨텍스트에서 JWT principal에 직접 접근
        JsonObject principal = context.get("auth");
        if (principal == null) {
            context.response()
                .setStatusCode(500)
                .putHeader("Content-Type", "application/json")
                .end("{\"error\": \"JWT principal not found\"}");
            return;
        }

        String scopes = principal.getString("scope");
        JsonObject response = new JsonObject()
            .put("sub", principal.getString("sub"))
            .put("client_id", principal.getString("client_id"))
            .put("organization_id", principal.getString("organization_id"))
            .put("scopes", scopes != null ? scopes.split(" ") : new String[0])
            .put("audience", principal.getJsonArray("aud"));

        context.response()
            .putHeader("Content-Type", "application/json")
            .end(response.encode());
    }
}
```
