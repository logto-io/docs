```java title="ProtectedResource.java"
import org.eclipse.microprofile.jwt.JsonWebToken;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.container.ContainerRequestContext;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Path("/api")
public class ProtectedResource {

    @Inject
    JsonWebToken jwt;

    @GET
    @Path("/protected")
    @Produces(MediaType.APPLICATION_JSON)
    public Map<String, Object> protectedEndpoint(@Context ContainerRequestContext requestContext) {
        // JWT를 인젝션 또는 컨텍스트에서 직접 접근
        JsonWebToken token = (JsonWebToken) requestContext.getProperty("auth");
        if (token == null) {
            token = jwt; // 인젝션된 JWT로 대체
        }

        String scopes = token.getClaim("scope");
        List<String> scopeList = scopes != null ? Arrays.asList(scopes.split(" ")) : List.of();

        return Map.of(
            "sub", token.getSubject(),
            "client_id", token.<String>getClaim("client_id"),
            "organization_id", token.<String>getClaim("organization_id"),
            "scopes", scopeList,
            "audience", token.getAudience()
        );
    }
}
```
