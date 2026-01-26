```go title="auth_middleware.go"
import "github.com/labstack/echo/v4"

func VerifyAccessToken(next echo.HandlerFunc) echo.HandlerFunc {
    return func(c echo.Context) error {
        tokenString, err := extractBearerTokenFromHeaders(c.Request())
        if err != nil {
            authErr := err.(*AuthorizationError)
            return c.JSON(authErr.Status, echo.Map{"error": authErr.Message})
        }

        token, err := validateJWT(tokenString)
        if err != nil {
            authErr := err.(*AuthorizationError)
            return c.JSON(authErr.Status, echo.Map{"error": authErr.Message})
        }

        // Armazene o token no contexto para uso genérico
        c.Set("auth", token)
        return next(c)
    }
}
```
