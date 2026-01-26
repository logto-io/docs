```go title="main.go"
package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    app := fiber.New()

    // 보호된 라우트에 미들웨어 적용
    app.Get("/api/protected", VerifyAccessToken, func(c *fiber.Ctx) error {
        // locals에서 액세스 토큰(Access token) 정보를 직접 가져옵니다
        tokenInterface := c.Locals("auth")
        if tokenInterface == nil {
            return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Token not found"})
        }

        token := tokenInterface.(jwt.Token)

        return c.JSON(fiber.Map{
            "sub":             token.Subject(),
            "client_id":       getStringClaim(token, "client_id"),
            "organization_id": getStringClaim(token, "organization_id"),
            "scopes":          getScopesFromToken(token),
            "audience":        getAudienceFromToken(token),
        })
    })

    app.Listen(":8080")
}
```

**또는 라우트 그룹을 사용하는 방법:**

```go title="main.go"
package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    app := fiber.New()

    // 보호된 라우트 그룹 생성
    api := app.Group("/api", VerifyAccessToken)
    api.Get("/protected", func(c *fiber.Ctx) error {
        // locals에서 액세스 토큰(Access token) 정보를 직접 가져옵니다
        token := c.Locals("auth").(jwt.Token)

        return c.JSON(fiber.Map{
            "sub":             token.Subject(),
            "client_id":       getStringClaim(token, "client_id"),
            "organization_id": getStringClaim(token, "organization_id"),
            "scopes":          getScopesFromToken(token),
            "audience":        getAudienceFromToken(token),
            "message":         "보호된 데이터에 성공적으로 접근했습니다",
        })
    })

    app.Listen(":8080")
}
```
