Dans les applications web traditionnelles, les informations d'authentification de l'utilisateur sont stockées dans la session utilisateur.

Le SDK Logto fournit une interface `Storage`, vous pouvez implémenter un adaptateur `Storage` basé sur votre framework web afin que le SDK Logto puisse stocker les informations d'authentification de l'utilisateur dans la session.

:::note
Nous ne recommandons PAS d'utiliser des sessions basées sur les cookies, car les informations d'authentification de l'utilisateur stockées par Logto peuvent dépasser la limite de taille des cookies.
Dans cet exemple, nous utilisons des sessions en mémoire. Vous pouvez utiliser Redis, MongoDB et d'autres technologies en production pour stocker les sessions selon vos besoins.
:::

Le type `Storage` dans le SDK Logto est le suivant :

```go title="storage.go"
package client

type Storage interface {
	GetItem(key string) string
	SetItem(key, value string)
}
```

Nous utilisons le middleware [github.com/gin-contrib/sessions](https://github.com/gin-contrib/sessions) comme exemple pour démontrer ce processus.

Appliquez le middleware à l'application, afin que nous puissions obtenir la session utilisateur via le contexte de la requête utilisateur dans le gestionnaire de route :

```go title="main.go"
package main

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/memstore"
	"github.com/gin-gonic/gin"
	"github.com/logto-io/go/v2/client"
)

func main() {
	router := gin.Default()

	// Nous utilisons une session en mémoire dans cet exemple
	store := memstore.NewStore([]byte("your session secret"))
	router.Use(sessions.Sessions("logto-session", store))

	router.GET("/", func(ctx *gin.Context) {
		// Obtenir la session utilisateur
		session := sessions.Default(ctx)
		// ...
		ctx.String(200, "Hello Logto!")
	})
	router.Run(":3000")
}
```

Créez un fichier `session_storage.go`, définissez un `SessionStorage` et implémentez les interfaces `Storage` du SDK Logto :

```go title="session_storage.go"
package main

import (
	"github.com/gin-contrib/sessions"
)

type SessionStorage struct {
	session sessions.Session
}

func (storage *SessionStorage) GetItem(key string) string {
	value := storage.session.Get(key)
	if value == nil {
		return ""
	}
	return value.(string)
}

func (storage *SessionStorage) SetItem(key, value string) {
	storage.session.Set(key, value)
	storage.session.Save()
}
```

Désormais, dans le gestionnaire de route, vous pouvez créer un stockage de session pour Logto :

```go
session := sessions.Default(ctx)
sessionStorage := &SessionStorage{session: session}
```
