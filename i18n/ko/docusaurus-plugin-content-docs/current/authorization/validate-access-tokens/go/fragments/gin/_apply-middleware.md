```go title="main.go"
package main

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    r := gin.Default()

    // 보호된 라우트에 미들웨어 적용
    r.GET("/api/protected", VerifyAccessToken(), func(c *gin.Context) {
        // 컨텍스트에서 액세스 토큰 (Access token) 정보를 직접 가져오기
        tokenInterface, exists := c.Get("auth")
        if !exists {
            c.JSON(http.StatusInternalServerError, gin.H{"error": "토큰을 찾을 수 없습니다 (Token not found)"})
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
