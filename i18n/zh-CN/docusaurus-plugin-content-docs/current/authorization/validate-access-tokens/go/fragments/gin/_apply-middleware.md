```go title="main.go"
package main

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    r := gin.Default()

    // 将中间件应用到受保护路由
    r.GET("/api/protected", VerifyAccessToken(), func(c *gin.Context) {
        // 直接从上下文获取访问令牌 (Access token) 信息
        tokenInterface, exists := c.Get("auth")
        if !exists {
            c.JSON(http.StatusInternalServerError, gin.H{"error": "Token not found"})
            return
        }

        token := tokenInterface.(jwt.Token)

        c.JSON(http.StatusOK, gin.H{
            "sub":             token.Subject(),
            "client_id":       getStringClaim(token, "client_id"),
            "organization_id": getStringClaim(token, "organization_id"),
            "scopes":          getScopesFromToken(token),
            "audience":        getAudienceFromToken(token),
        })
    })

    r.Run(":8080")
}
```
