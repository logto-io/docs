```go title="main.go"
package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    app := fiber.New()

    // ใช้งาน middleware กับเส้นทางที่ต้องการป้องกัน
    app.Get("/api/protected", VerifyAccessToken, func(c *fiber.Ctx) error {
        // ข้อมูลโทเค็นการเข้าถึง (Access token) สามารถเข้าถึงได้โดยตรงจาก locals
        tokenInterface := c.Locals("auth")
        if tokenInterface == nil {
            return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "ไม่พบโทเค็น (Token not found)"})
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

**หรือใช้กลุ่มเส้นทาง (route groups):**

```go title="main.go"
package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    app := fiber.New()

    // สร้างกลุ่มเส้นทางที่ต้องการป้องกัน
    api := app.Group("/api", VerifyAccessToken)
    api.Get("/protected", func(c *fiber.Ctx) error {
        // ข้อมูลโทเค็นการเข้าถึง (Access token) สามารถเข้าถึงได้โดยตรงจาก locals
        token := c.Locals("auth").(jwt.Token)

        return c.JSON(fiber.Map{
            "sub":             token.Subject(),
            "client_id":       getStringClaim(token, "client_id"),
            "organization_id": getStringClaim(token, "organization_id"),
            "scopes":          getScopesFromToken(token),
            "audience":        getAudienceFromToken(token),
            "message":         "เข้าถึงข้อมูลที่ป้องกันสำเร็จ (Protected data accessed successfully)",
        })
    })

    app.Listen(":8080")
}
```
