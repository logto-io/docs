```go title="main.go"
package main

import (
    "encoding/json"
    "net/http"

    "github.com/go-chi/chi/v5"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    r := chi.NewRouter()

    // 对受保护路由应用中间件
    r.With(VerifyAccessToken).Get("/api/protected", func(w http.ResponseWriter, r *http.Request) {
        // 直接从上下文获取访问令牌 (Access token) 信息
        tokenInterface := r.Context().Value(AuthContextKey)
        if tokenInterface == nil {
            w.Header().Set("Content-Type", "application/json")
            w.WriteHeader(http.StatusInternalServerError)
            json.NewEncoder(w).Encode(map[string]string{"error": "Token not found"})
            return
        }

        token := tokenInterface.(jwt.Token)

        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(map[string]interface{}{
            "sub":             token.Subject(),
            "client_id":       getStringClaim(token, "client_id"),
            "organization_id": getStringClaim(token, "organization_id"),
            "scopes":          getScopesFromToken(token),
            "audience":        getAudienceFromToken(token),
        })
    })

    http.ListenAndServe(":8080", r)
}
```

**或者使用路由分组：**

```go title="main.go"
package main

import (
    "encoding/json"
    "net/http"

    "github.com/go-chi/chi/v5"
    "github.com/lestrrat-go/jwx/v3/jwt"
)

func main() {
    r := chi.NewRouter()

    // 创建受保护的路由分组
    r.Route("/api", func(r chi.Router) {
        r.Use(VerifyAccessToken)
        r.Get("/protected", func(w http.ResponseWriter, r *http.Request) {
            // 直接从上下文获取访问令牌 (Access token) 信息
            token := r.Context().Value(AuthContextKey).(jwt.Token)

            w.Header().Set("Content-Type", "application/json")
            json.NewEncoder(w).Encode(map[string]interface{}{
                "sub":             token.Subject(),
                "client_id":       getStringClaim(token, "client_id"),
                "organization_id": getStringClaim(token, "organization_id"),
                "scopes":          getScopesFromToken(token),
                "audience":        getAudienceFromToken(token),
                "message":         "受保护数据访问成功",
            })
        })
    })

    http.ListenAndServe(":8080", r)
}
```
