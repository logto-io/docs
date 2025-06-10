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
        // Access JWT directly from injection or context
        JsonWebToken token = (JsonWebToken) requestContext.getProperty("auth");
        if (token == null) {
            token = jwt; // Fallback to injected JWT
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

    @GET
    @Path("/protected/detailed")
    @Produces(MediaType.APPLICATION_JSON)
    public Map<String, Object> detailedEndpoint() {
        // Your protected endpoint logic
        String scopes = jwt.getClaim("scope");
        return Map.of(
            "sub", jwt.getSubject(),
            "client_id", jwt.<String>getClaim("client_id"),
            "organization_id", jwt.<String>getClaim("organization_id"),
            "scopes", scopes,
            "audience", jwt.getAudience(),
            "message", "Protected data accessed successfully"
        );
    }
}
```
