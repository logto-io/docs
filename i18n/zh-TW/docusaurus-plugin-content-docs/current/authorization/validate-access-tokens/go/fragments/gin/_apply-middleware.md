```go title="main.go"
package main

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    r := gin.Default()

    // 將中介軟體套用到受保護路由
    r.GET("/api/protected", VerifyAccessToken(), func(c *gin.Context) {
        // 可直接從 context 取得存取權杖 (Access token) 資訊
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
