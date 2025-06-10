```go title="auth_middleware.go"
import "github.com/gin-gonic/gin"

func VerifyAccessToken() gin.HandlerFunc {
    return func(c *gin.Context) {
        tokenString, err := extractBearerTokenFromHeaders(c.Request)
        if err != nil {
            authErr := err.(*AuthorizationError)
            c.JSON(authErr.Status, gin.H{"error": authErr.Message})
            c.Abort()
            return
        }

        token, err := validateJWT(tokenString)
        if err != nil {
            authErr := err.(*AuthorizationError)
            c.JSON(authErr.Status, gin.H{"error": authErr.Message})
            c.Abort()
            return
        }

        // Armazene o token no contexto para uso genérico (Store token in context for generic use)
        c.Set("auth", token)
        c.Next()
    }
}
```
