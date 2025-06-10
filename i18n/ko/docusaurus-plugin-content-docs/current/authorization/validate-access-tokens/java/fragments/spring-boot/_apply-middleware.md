```java title="ProtectedController.java"
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
public class ProtectedController {

    @GetMapping("/api/protected")
    public Map<String, Object> protectedEndpoint(@AuthenticationPrincipal Jwt jwt) {
        // JWT에서 액세스 토큰 (Access token) 정보를 직접 가져옵니다
        String scopes = jwt.getClaimAsString("scope");
        List<String> scopeList = scopes != null ? Arrays.asList(scopes.split(" ")) : List.of();

        return Map.of(
            "sub", jwt.getSubject(),
            "client_id", jwt.getClaimAsString("client_id"),
            "organization_id", jwt.getClaimAsString("organization_id"),
            "scopes", scopeList,
            "audience", jwt.getAudience()
        );
    }
}
```
