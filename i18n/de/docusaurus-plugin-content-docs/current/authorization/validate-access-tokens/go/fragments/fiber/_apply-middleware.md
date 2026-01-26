```go title="main.go"
package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    app := fiber.New()

    // Middleware auf geschützte Routen anwenden
    app.Get("/api/protected", VerifyAccessToken, func(c *fiber.Ctx) error {
        // Zugangstoken-Informationen direkt aus locals abrufen
        tokenInterface := c.Locals("auth")
        if tokenInterface == nil {
            return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Token nicht gefunden"})
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

**Oder mit Routengruppen:**

```go title="main.go"
package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    app := fiber.New()

    // Geschützte Routengruppe erstellen
    api := app.Group("/api", VerifyAccessToken)
    api.Get("/protected", func(c *fiber.Ctx) error {
        // Zugangstoken-Informationen direkt aus locals abrufen
        token := c.Locals("auth").(jwt.Token)

        return c.JSON(fiber.Map{
            "sub":             token.Subject(),
            "client_id":       getStringClaim(token, "client_id"),
            "organization_id": getStringClaim(token, "organization_id"),
            "scopes":          getScopesFromToken(token),
            "audience":        getAudienceFromToken(token),
            "message":         "Geschützte Daten erfolgreich abgerufen",
        })
    })

    app.Listen(":8080")
}
```
