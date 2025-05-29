在傳統的網頁應用程式中，使用者驗證 (Authentication) 資訊通常會儲存在使用者的 Session 中。

Logto SDK 提供了一個 `Storage` 介面，你可以根據自己的網頁框架實作一個 `Storage` 適配器，讓 Logto SDK 能將使用者驗證 (Authentication) 資訊存放於 Session。

:::note
我們**不建議**使用基於 Cookie 的 Session，因為 Logto 儲存的使用者驗證 (Authentication) 資訊可能超過 Cookie 的大小限制。
本範例採用記憶體型 Session。實際生產環境中，你可以根據需求選擇 Redis、MongoDB 等技術來儲存 Session。
:::

Logto SDK 中的 `Storage` 型別如下：

```go title="storage.go"
package client

type Storage interface {
	GetItem(key string) string
	SetItem(key, value string)
}
```

我們以 [github.com/gin-contrib/sessions](https://github.com/gin-contrib/sessions) 中介軟體為例，說明這個流程。

將中介軟體套用到應用程式中，這樣就能在路由處理器中透過請求上下文取得使用者 Session：

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

	// 本範例使用記憶體型 Session
	store := memstore.NewStore([]byte("your session secret"))
	router.Use(sessions.Sessions("logto-session", store))

	router.GET("/", func(ctx *gin.Context) {
		// 取得使用者 Session
		session := sessions.Default(ctx)
		// ...
		ctx.String(200, "Hello Logto!")
	})
	router.Run(":3000")
}
```

建立 `session_storage.go` 檔案，定義 `SessionStorage` 並實作 Logto SDK 的 `Storage` 介面：

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

現在，在路由處理器中，你可以為 Logto 建立一個 Session Storage：

```go
session := sessions.Default(ctx)
sessionStorage := &SessionStorage{session: session}
```
