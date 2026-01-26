En las aplicaciones web tradicionales, la información de autenticación del usuario se almacena en la sesión del usuario.

El SDK de Logto proporciona una interfaz `Storage`, puedes implementar un adaptador `Storage` basado en tu framework web para que el SDK de Logto pueda almacenar la información de autenticación del usuario en la sesión.

:::note
NO recomendamos usar sesiones basadas en cookies, ya que la información de autenticación del usuario almacenada por Logto puede exceder el límite de tamaño de las cookies.
En este ejemplo, usamos sesiones basadas en memoria. Puedes usar Redis, MongoDB y otras tecnologías en producción para almacenar sesiones según sea necesario.
:::

El tipo `Storage` en el SDK de Logto es el siguiente:

```go title="storage.go"
package client

type Storage interface {
	GetItem(key string) string
	SetItem(key, value string)
}
```

Usamos el middleware [github.com/gin-contrib/sessions](https://github.com/gin-contrib/sessions) como ejemplo para demostrar este proceso.

Aplica el middleware a la aplicación, para que podamos obtener la sesión del usuario mediante el contexto de la solicitud del usuario en el manejador de rutas:

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

	// Usamos sesión basada en memoria en este ejemplo
	store := memstore.NewStore([]byte("your session secret"))
	router.Use(sessions.Sessions("logto-session", store))

	router.GET("/", func(ctx *gin.Context) {
		// Obtener la sesión del usuario
		session := sessions.Default(ctx)
		// ...
		ctx.String(200, "¡Hola Logto!")
	})
	router.Run(":3000")
}
```

Crea un archivo `session_storage.go`, define un `SessionStorage` e implementa las interfaces `Storage` del SDK de Logto:

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

Ahora, en el manejador de rutas, puedes crear un almacenamiento de sesión para Logto:

```go
session := sessions.Default(ctx)
sessionStorage := &SessionStorage{session: session}
```
