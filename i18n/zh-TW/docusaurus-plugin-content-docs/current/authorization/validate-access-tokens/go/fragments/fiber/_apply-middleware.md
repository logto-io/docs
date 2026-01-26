```go title="main.go"
package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    app := fiber.New()

    // 對受保護路由套用中介軟體
    app.Get("/api/protected", VerifyAccessToken, func(c *fiber.Ctx) error {
        // 可直接從 locals 取得存取權杖 (Access token) 資訊
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

**或使用路由群組：**

```go title="main.go"
package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    app := fiber.New()

    // 建立受保護的路由群組
    api := app.Group("/api", VerifyAccessToken)
    api.Get("/protected", func(c *fiber.Ctx) error {
        // 可直接從 locals 取得存取權杖 (Access token) 資訊
        token := c.Locals("auth").(jwt.Token)

        return c.JSON(fiber.Map{
            "sub":             token.Subject(),
            "client_id":       getStringClaim(token, "client_id"),
            "organization_id": getStringClaim(token, "organization_id"),
            "scopes":          getScopesFromToken(token),
            "audience":        getAudienceFromToken(token),
            "message":         "成功存取受保護資料 (Protected data accessed successfully)",
        })
    })

    app.Listen(":8080")
}
```
