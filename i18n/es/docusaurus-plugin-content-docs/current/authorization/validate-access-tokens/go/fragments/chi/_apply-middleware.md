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

    // Aplica el middleware a las rutas protegidas
    r.With(VerifyAccessToken).Get("/api/protected", func(w http.ResponseWriter, r *http.Request) {
        // Información del token de acceso directamente desde el contexto
        tokenInterface := r.Context().Value(AuthContextKey)
        if tokenInterface == nil {
            w.Header().Set("Content-Type", "application/json")
            w.WriteHeader(http.StatusInternalServerError)
            json.NewEncoder(w).Encode(map[string]string{"error": "Token no encontrado"})
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

**O usando grupos de rutas:**

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

    // Crea un grupo de rutas protegidas
    r.Route("/api", func(r chi.Router) {
        r.Use(VerifyAccessToken)
        r.Get("/protected", func(w http.ResponseWriter, r *http.Request) {
            // Información del token de acceso directamente desde el contexto
            token := r.Context().Value(AuthContextKey).(jwt.Token)

            w.Header().Set("Content-Type", "application/json")
            json.NewEncoder(w).Encode(map[string]interface{}{
                "sub":             token.Subject(),
                "client_id":       getStringClaim(token, "client_id"),
                "organization_id": getStringClaim(token, "organization_id"),
                "scopes":          getScopesFromToken(token),
                "audience":        getAudienceFromToken(token),
                "message":         "Datos protegidos accedidos correctamente",
            })
        })
    })

    http.ListenAndServe(":8080", r)
}
```
