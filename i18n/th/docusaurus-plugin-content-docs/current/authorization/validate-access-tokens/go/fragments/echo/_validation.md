```go title="auth_middleware.go"
import "github.com/labstack/echo/v4"

func VerifyAccessToken(next echo.HandlerFunc) echo.HandlerFunc {
    return func(c echo.Context) error {
        tokenString, err := extractBearerTokenFromHeaders(c.Request())
        if err != nil {
            // เกิดข้อผิดพลาดในการตรวจสอบโทเค็นการเข้าถึง
            authErr := err.(*AuthorizationError)
            return c.JSON(authErr.Status, echo.Map{"error": authErr.Message})
        }

        token, err := validateJWT(tokenString)
        if err != nil {
            // โทเค็นไม่ถูกต้องหรือหมดอายุ
            authErr := err.(*AuthorizationError)
            return c.JSON(authErr.Status, echo.Map{"error": authErr.Message})
        }

        // เก็บโทเค็นไว้ใน context เพื่อใช้งานทั่วไป
        c.Set("auth", token)
        return next(c)
    }
}
```
