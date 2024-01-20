In traditional web applications, the user authentication information will be stored in the user session.

Logto SDK provides a `Storage` interface, you can implement a `Storage` adapter based on your web framework so that the Logto SDK can store user authentication information in the session.

:::note
We do NOT recommend using cookie-based sessions, as user authentication information stored by Logto may exceed the cookie size limit.
In this example, we use memory-based sessions. You can use Redis, MongoDB, and other technologies in production to store sessions as needed.
:::

The `Storage` type in the Logto SDK is as follows:

```go
// github.com/logto-io/client/storage.go
package client

type Storage interface {
	GetItem(key string) string
	SetItem(key, value string)
}
```

We use [github.com/gin-contrib/sessions](https://github.com/gin-contrib/sessions) middleware as an example to demonstrate this process.

Apply the middleware to the application, so that we can get the user session by the user request context in the route handler:

```go
package main

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/memstore"
	"github.com/gin-gonic/gin"
	"github.com/logto-io/go/client"
)

func main() {
	router := gin.Default()

	// We use memory-based session in this example
	store := memstore.NewStore([]byte("your session secret"))
	router.Use(sessions.Sessions("logto-session", store))

	router.GET("/", func(ctx *gin.Context) {
		// Get user session
		session := sessions.Default(ctx)
		// ...
		ctx.String(200, "Hello Logto!")
	})
	router.Run(":8080")
}
```

Create a `session_storage.go` file, define a `SessionStorage` and implement the Logto SDK's `Storage` interfaces:

```go
// session_storage.go
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

Now, in the route handler, you can create a session storage for Logto:

```go
session := sessions.Default(ctx)
sessionStorage := &SessionStorage{session: session}
```
