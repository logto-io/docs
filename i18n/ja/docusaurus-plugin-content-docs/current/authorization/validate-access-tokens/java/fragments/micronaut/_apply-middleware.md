```java title="ProtectedController.java"
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.authentication.Authentication;
import io.micronaut.security.rules.SecurityRule;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Controller("/api")
@Secured(SecurityRule.IS_AUTHENTICATED)
public class ProtectedController {

    @Get("/protected")
    public Map<String, Object> protectedEndpoint(Authentication authentication) {
        // 認証 (Authentication) から直接アクセス トークン情報へアクセス
        String scopes = (String) authentication.getAttributes().get("scope");
        List<String> scopeList = scopes != null ? Arrays.asList(scopes.split(" ")) : List.of();

        return Map.of(
            "sub", authentication.getName(),
            "client_id", authentication.getAttributes().get("client_id"),
            "organization_id", authentication.getAttributes().get("organization_id"),
            "scopes", scopeList,
            "audience", authentication.getAttributes().get("aud")
        );
    }
}
```
