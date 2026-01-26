```go title="auth_middleware.go"
import (
    "net/http"
    "github.com/gofiber/fiber/v2"
)

func VerifyAccessToken(c *fiber.Ctx) error {
    // Converter requisição fiber para http.Request para compatibilidade
    req := &http.Request{
        Header: make(http.Header),
    }
    req.Header.Set("Authorization", c.Get("Authorization"))

    tokenString, err := extractBearerTokenFromHeaders(req)
    if err != nil {
        authErr := err.(*AuthorizationError)
        return c.Status(authErr.Status).JSON(fiber.Map{"error": authErr.Message})
    }

    token, err := validateJWT(tokenString)
    if err != nil {
        authErr := err.(*AuthorizationError)
        return c.Status(authErr.Status).JSON(fiber.Map{"error": authErr.Message})
    }

    // Armazenar token em locals para uso genérico
    c.Locals("auth", token)
    return c.Next()
}
```
