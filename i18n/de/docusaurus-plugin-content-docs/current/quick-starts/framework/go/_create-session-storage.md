In traditionellen Webanwendungen werden die Benutzer-Authentifizierungsinformationen in der Benutzersitzung gespeichert.

Das Logto SDK bietet eine `Storage`-Schnittstelle, mit der du einen `Storage`-Adapter basierend auf deinem Web-Framework implementieren kannst, sodass das Logto SDK die Benutzer-Authentifizierungsinformationen in der Sitzung speichern kann.

:::note
Wir empfehlen NICHT die Verwendung von cookie-basierten Sitzungen, da die von Logto gespeicherten Benutzer-Authentifizierungsinformationen die Cookie-Größenbeschränkung überschreiten können. In diesem Beispiel verwenden wir speicherbasierte Sitzungen. Du kannst Redis, MongoDB und andere Technologien in der Produktion verwenden, um Sitzungen nach Bedarf zu speichern.
:::

Der `Storage`-Typ im Logto SDK sieht wie folgt aus:

```go title="github.com/logto-io/client/storage.go"
package client

type Storage interface {
	GetItem(key string) string
	SetItem(key, value string)
}
```

Wir verwenden die [github.com/gin-contrib/sessions](https://github.com/gin-contrib/sessions) Middleware als Beispiel, um diesen Prozess zu demonstrieren.

Wende die Middleware auf die Anwendung an, damit wir die Benutzersitzung durch den Benutzeranforderungskontext im Routen-Handler erhalten können:

```go title="main.go"
package main

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/memstore"
	"github.com/gin-gonic/gin"
	"github.com/logto-io/go/client"
)

func main() {
	router := gin.Default()

	// Wir verwenden speicherbasierte Sitzungen in diesem Beispiel
	store := memstore.NewStore([]byte("dein Sitzungsschlüssel"))
	router.Use(sessions.Sessions("logto-session", store))

	router.GET("/", func(ctx *gin.Context) {
		// Benutzersitzung abrufen
		session := sessions.Default(ctx)
		// ...
		ctx.String(200, "Hallo Logto!")
	})
	router.Run(":3000")
}
```

Erstelle eine `session_storage.go`-Datei, definiere eine `SessionStorage` und implementiere die `Storage`-Schnittstellen des Logto SDK:

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

Jetzt kannst du im Routen-Handler einen Sitzungs-Speicher für Logto erstellen:

```go
session := sessions.Default(ctx)
sessionStorage := &SessionStorage{session: session}
```
