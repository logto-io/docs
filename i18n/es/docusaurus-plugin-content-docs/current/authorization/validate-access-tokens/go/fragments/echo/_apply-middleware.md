```go title="main.go"
package main

import (
    "net/http"

    "github.com/labstack/echo/v4"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    e := echo.New()

    // Aplica el middleware a las rutas protegidas
    e.GET("/api/protected", func(c echo.Context) error {
        // Información del token de acceso directamente desde el contexto
        tokenInterface := c.Get("auth")
        if tokenInterface == nil {
            return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Token no encontrado"})
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

**O usando grupos de rutas:**

```go title="main.go"
package main

import (
    "github.com/labstack/echo/v4"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    e := echo.New()

    // Crea un grupo de rutas protegidas
    api := e.Group("/api", VerifyAccessToken)
    api.GET("/protected", func(c echo.Context) error {
        // Información del token de acceso directamente desde el contexto
        token := c.Get("auth").(jwt.Token)

        return c.JSON(200, echo.Map{
            "sub":             token.Subject(),
            "client_id":       getStringClaim(token, "client_id"),
            "organization_id": getStringClaim(token, "organization_id"),
            "scopes":          getScopesFromToken(token),
            "audience":        getAudienceFromToken(token),
            "message":         "Datos protegidos accedidos correctamente",
        })
    })

    e.Start(":8080")
}
```
