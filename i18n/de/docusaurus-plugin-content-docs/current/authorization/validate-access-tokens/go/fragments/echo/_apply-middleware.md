```go title="main.go"
package main

import (
    "net/http"

    "github.com/labstack/echo/v4"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    e := echo.New()

    // Middleware auf geschützte Routen anwenden
    e.GET("/api/protected", func(c echo.Context) error {
        // Zugangstoken-Informationen direkt aus dem Kontext abrufen
        tokenInterface := c.Get("auth")
        if tokenInterface == nil {
            return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Token nicht gefunden"})
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

**Oder mit Routengruppen:**

```go title="main.go"
package main

import (
    "github.com/labstack/echo/v4"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    e := echo.New()

    // Geschützte Routengruppe erstellen
    api := e.Group("/api", VerifyAccessToken)
    api.GET("/protected", func(c echo.Context) error {
        // Zugangstoken-Informationen direkt aus dem Kontext abrufen
        token := c.Get("auth").(jwt.Token)

        return c.JSON(200, echo.Map{
            "sub":             token.Subject(),
            "client_id":       getStringClaim(token, "client_id"),
            "organization_id": getStringClaim(token, "organization_id"),
            "scopes":          getScopesFromToken(token),
            "audience":        getAudienceFromToken(token),
            "message":         "Geschützte Daten erfolgreich abgerufen",
        })
    })

    e.Start(":8080")
}
```
