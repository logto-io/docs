```go title="main.go"
package main

import (
    "net/http"

    "github.com/labstack/echo/v4"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    e := echo.New()

    // ใช้งาน middleware กับเส้นทางที่ต้องการป้องกัน
    e.GET("/api/protected", func(c echo.Context) error {
        // ข้อมูลโทเค็นการเข้าถึง (Access token) สามารถเข้าถึงได้โดยตรงจาก context
        tokenInterface := c.Get("auth")
        if tokenInterface == nil {
            return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Token not found"})
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

**หรือใช้กลุ่มเส้นทาง (route groups):**

```go title="main.go"
package main

import (
    "github.com/labstack/echo/v4"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    e := echo.New()

    // สร้างกลุ่มเส้นทางที่ต้องการป้องกัน
    api := e.Group("/api", VerifyAccessToken)
    api.GET("/protected", func(c echo.Context) error {
        // ข้อมูลโทเค็นการเข้าถึง (Access token) สามารถเข้าถึงได้โดยตรงจาก context
        token := c.Get("auth").(jwt.Token)

        return c.JSON(200, echo.Map{
            "sub":             token.Subject(),
            "client_id":       getStringClaim(token, "client_id"),
            "organization_id": getStringClaim(token, "organization_id"),
            "scopes":          getScopesFromToken(token),
            "audience":        getAudienceFromToken(token),
            "message":         "เข้าถึงข้อมูลที่ป้องกันสำเร็จ (Protected data accessed successfully)",
        })
    })

    e.Start(":8080")
}
```
