```go title="main.go"
package main

import (
    "net/http"

    "github.com/labstack/echo/v4"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    e := echo.New()

    // 보호된 라우트에 미들웨어 적용
    e.GET("/api/protected", func(c echo.Context) error {
        // 컨텍스트에서 액세스 토큰(Access token) 정보에 직접 접근
        tokenInterface := c.Get("auth")
        if tokenInterface == nil {
            return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Token not found"})
        }

        token := tokenInterface.(jwt.Token)

        return c.JSON(http.StatusOK, echo.Map{
            "sub":             token.Subject(),
            "client_id":       getStringClaim(token, "client_id"),
            "organization_id": getStringClaim(token, "organization_id"),
            "scopes":          getScopesFromToken(token),
            "audience":        getAudienceFromToken(token),
        })
    }, VerifyAccessToken)

    e.Start(":8080")
}
```

**또는 라우트 그룹을 사용하는 방법:**

```go title="main.go"
package main

import (
    "github.com/labstack/echo/v4"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    e := echo.New()

    // 보호된 라우트 그룹 생성
    api := e.Group("/api", VerifyAccessToken)
    api.GET("/protected", func(c echo.Context) error {
        // 컨텍스트에서 액세스 토큰(Access token) 정보에 직접 접근
        token := c.Get("auth").(jwt.Token)

        return c.JSON(200, echo.Map{
            "sub":             token.Subject(),
            "client_id":       getStringClaim(token, "client_id"),
            "organization_id": getStringClaim(token, "organization_id"),
            "scopes":          getScopesFromToken(token),
            "audience":        getAudienceFromToken(token),
            "message":         "보호된 데이터에 성공적으로 접근했습니다",
        })
    })

    e.Start(":8080")
}
```
