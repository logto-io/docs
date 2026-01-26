```go title="main.go"
package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    app := fiber.New()

    // Appliquer le middleware aux routes protégées
    app.Get("/api/protected", VerifyAccessToken, func(c *fiber.Ctx) error {
        // Informations du jeton d’accès directement depuis locals
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

**Ou en utilisant des groupes de routes :**

```go title="main.go"
package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    app := fiber.New()

    // Créer un groupe de routes protégées
    api := app.Group("/api", VerifyAccessToken)
    api.Get("/protected", func(c *fiber.Ctx) error {
        // Informations du jeton d’accès directement depuis locals
        token := c.Locals("auth").(jwt.Token)

        return c.JSON(fiber.Map{
            "sub":             token.Subject(),
            "client_id":       getStringClaim(token, "client_id"),
            "organization_id": getStringClaim(token, "organization_id"),
            "scopes":          getScopesFromToken(token),
            "audience":        getAudienceFromToken(token),
            "message":         "Données protégées accessibles avec succès",
        })
    })

    app.Listen(":8080")
}
```
