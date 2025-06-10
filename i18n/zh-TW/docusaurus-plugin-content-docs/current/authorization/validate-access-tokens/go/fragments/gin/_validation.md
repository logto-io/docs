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

        // 將權杖 (token) 儲存在 context 以便通用使用
        c.Set("auth", token)
        c.Next()
    }
}
```
