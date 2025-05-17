在傳統的網頁應用程式中，使用者驗證資訊會儲存在使用者的 session 中。

Logto SDK 提供了一個 `Storage` 介面，你可以根據你的網頁框架實作一個 `Storage` 配接器，讓 Logto SDK 可以將使用者驗證資訊儲存在 session 中。

:::note
我們不建議使用基於 cookie 的 session，因為 Logto 儲存的使用者驗證資訊可能超過 cookie 的大小限制。在此範例中，我們使用基於記憶體的 session。你可以在生產環境中根據需要使用 Redis、MongoDB 和其他技術來儲存 session。
:::

Logto SDK 中的 `Storage` 類型如下：

```go title="github.com/logto-io/client/storage.go"
package client

type Storage interface {
	GetItem(key string) string
	SetItem(key, value string)
}
```

我們使用 [github.com/gin-contrib/sessions](https://github.com/gin-contrib/sessions) 中介軟體作為範例來演示此過程。

將中介軟體應用於應用程式，以便我們可以在路由處理器中透過使用者請求上下文獲取使用者 session：

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

	// 在此範例中，我們使用基於記憶體的 session
	store := memstore.NewStore([]byte("your session secret"))
	router.Use(sessions.Sessions("logto-session", store))

	router.GET("/", func(ctx *gin.Context) {
		// 獲取使用者 session
		session := sessions.Default(ctx)
		// ...
		ctx.String(200, "Hello Logto!")
	})
	router.Run(":3000")
}
```

建立一個 `session_storage.go` 檔案，定義一個 `SessionStorage` 並實作 Logto SDK 的 `Storage` 介面：

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

現在，在路由處理器中，你可以為 Logto 建立一個 session storage：

```go
session := sessions.Default(ctx)
sessionStorage := &SessionStorage{session: session}
```
