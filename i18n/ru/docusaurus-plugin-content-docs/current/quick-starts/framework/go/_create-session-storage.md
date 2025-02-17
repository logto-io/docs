В традиционных веб-приложениях информация об аутентификации пользователя будет храниться в сессии пользователя.

Logto SDK предоставляет интерфейс `Storage`, вы можете реализовать адаптер `Storage` на основе вашего веб-фреймворка, чтобы Logto SDK мог хранить информацию об аутентификации пользователя в сессии.

:::note
Мы НЕ рекомендуем использовать сессии на основе cookies, так как информация об аутентификации пользователя, хранимая Logto, может превышать ограничение размера cookies.
В этом примере мы используем сессии на основе памяти. Вы можете использовать Redis, MongoDB и другие технологии в производственной среде для хранения сессий по мере необходимости.
:::

Тип `Storage` в Logto SDK выглядит следующим образом:

```go title="github.com/logto-io/client/storage.go"
package client

type Storage interface {
	GetItem(key string) string
	SetItem(key, value string)
}
```

Мы используем middleware [github.com/gin-contrib/sessions](https://github.com/gin-contrib/sessions) в качестве примера, чтобы продемонстрировать этот процесс.

Примените middleware к приложению, чтобы мы могли получить сессию пользователя по контексту запроса пользователя в обработчике маршрута:

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

	// В этом примере мы используем сессии на основе памяти
	store := memstore.NewStore([]byte("your session secret"))
	router.Use(sessions.Sessions("logto-session", store))

	router.GET("/", func(ctx *gin.Context) {
		// Получить сессию пользователя
		session := sessions.Default(ctx)
		// ...
		ctx.String(200, "Hello Logto!")
	})
	router.Run(":3000")
}
```

Создайте файл `session_storage.go`, определите `SessionStorage` и реализуйте интерфейсы `Storage` из Logto SDK:

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

Теперь в обработчике маршрута вы можете создать хранилище сессий для Logto:

```go
session := sessions.Default(ctx)
sessionStorage := &SessionStorage{session: session}
```
