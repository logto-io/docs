```go title="auth_middleware.go"
import (
    "net/http"
    "github.com/gofiber/fiber/v2"
)

func VerifyAccessToken(c *fiber.Ctx) error {
    // fiber 요청을 http.Request로 변환하여 호환성 확보
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

    // 토큰을 locals에 저장하여 범용적으로 사용
    c.Locals("auth", token)
    return c.Next()
}
```
