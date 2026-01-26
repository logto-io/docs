```go title="auth_middleware.go"
import (
    "net/http"
    "github.com/gofiber/fiber/v2"
)

func VerifyAccessToken(c *fiber.Ctx) error {
    // Fiber リクエストを http.Request に変換して互換性を確保
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

    // トークンを locals に保存し、汎用的に利用できるようにする
    c.Locals("auth", token)
    return c.Next()
}
```
