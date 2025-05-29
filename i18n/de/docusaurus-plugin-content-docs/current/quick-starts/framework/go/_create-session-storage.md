In traditionellen Webanwendungen werden die Informationen zur Benutzer-Authentifizierung in der Benutzersitzung gespeichert.

Das Logto SDK stellt ein `Storage`-Interface bereit. Du kannst einen `Storage`-Adapter basierend auf deinem Web-Framework implementieren, sodass das Logto SDK die Informationen zur Benutzer-Authentifizierung in der Sitzung speichern kann.

:::note
Wir empfehlen NICHT die Verwendung von cookie-basierten Sitzungen, da die von Logto gespeicherten Authentifizierungsinformationen die Cookie-Größenbeschränkung überschreiten können.
In diesem Beispiel verwenden wir speicherbasierte Sitzungen. In der Produktion kannst du Redis, MongoDB und andere Technologien verwenden, um Sitzungen nach Bedarf zu speichern.
:::

Der `Storage`-Typ im Logto SDK sieht wie folgt aus:

```go title="storage.go"
package client

type Storage interface {
	GetItem(key string) string
	SetItem(key, value string)
}
```

Wir verwenden das [github.com/gin-contrib/sessions](https://github.com/gin-contrib/sessions) Middleware als Beispiel, um diesen Prozess zu demonstrieren.

Wende die Middleware auf die Anwendung an, sodass wir die Benutzersitzung über den Benutzeranfrage-Kontext im Routen-Handler erhalten können:

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

	// In diesem Beispiel verwenden wir eine speicherbasierte Sitzung
	store := memstore.NewStore([]byte("your session secret"))
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

Erstelle eine Datei `session_storage.go`, definiere ein `SessionStorage` und implementiere die `Storage`-Interfaces des Logto SDK:

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

Jetzt kannst du im Routen-Handler einen Session Storage für Logto erstellen:

```go
session := sessions.Default(ctx)
sessionStorage := &SessionStorage{session: session}
```
