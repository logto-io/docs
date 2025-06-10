```go title="auth_middleware.go"
import (
    "context"
    "encoding/json"
    "net/http"
)

type contextKey string

const AuthContextKey contextKey = "auth"

func VerifyAccessToken(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        tokenString, err := extractBearerTokenFromHeaders(r)
        if err != nil {
            authErr := err.(*AuthorizationError)
            w.Header().Set("Content-Type", "application/json")
            w.WriteHeader(authErr.Status)
            json.NewEncoder(w).Encode(map[string]string{"error": authErr.Message})
            return
        }

        token, err := validateJWT(tokenString)
        if err != nil {
            authErr := err.(*AuthorizationError)
            w.Header().Set("Content-Type", "application/json")
            w.WriteHeader(authErr.Status)
            json.NewEncoder(w).Encode(map[string]string{"error": authErr.Message})
            return
        }

        // 토큰을 컨텍스트에 저장하여 범용적으로 사용
        ctx := context.WithValue(r.Context(), AuthContextKey, token)
        next.ServeHTTP(w, r.WithContext(ctx))
    })
}
```
