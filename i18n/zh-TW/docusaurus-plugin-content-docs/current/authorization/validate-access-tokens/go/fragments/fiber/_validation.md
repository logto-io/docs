```go title="auth_middleware.go"
import (
    "net/http"
    "github.com/gofiber/fiber/v2"
)

func VerifyAccessToken(c *fiber.Ctx) error {
    // 將 fiber 請求轉換為 http.Request 以相容
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

    // 將權杖 (token) 儲存在 locals 以便通用使用
    c.Locals("auth", token)
    return c.Next()
}
```
