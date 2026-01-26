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

    // Appliquer le middleware aux routes protégées
    r.With(VerifyAccessToken).Get("/api/protected", func(w http.ResponseWriter, r *http.Request) {
        // Informations du jeton d’accès (Access token) directement depuis le contexte
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

**Ou en utilisant des groupes de routes :**

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

    // Créer un groupe de routes protégées
    r.Route("/api", func(r chi.Router) {
        r.Use(VerifyAccessToken)
        r.Get("/protected", func(w http.ResponseWriter, r *http.Request) {
            // Informations du jeton d’accès (Access token) directement depuis le contexte
            token := r.Context().Value(AuthContextKey).(jwt.Token)

            w.Header().Set("Content-Type", "application/json")
            json.NewEncoder(w).Encode(map[string]interface{}{
                "sub":             token.Subject(),
                "client_id":       getStringClaim(token, "client_id"),
                "organization_id": getStringClaim(token, "organization_id"),
                "scopes":          getScopesFromToken(token),
                "audience":        getAudienceFromToken(token),
                "message":         "Données protégées accessibles avec succès",
            })
        })
    })

    http.ListenAndServe(":8080", r)
}
```
