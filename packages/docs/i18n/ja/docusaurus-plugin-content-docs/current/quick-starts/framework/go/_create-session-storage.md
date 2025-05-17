従来の Web アプリケーションでは、ユーザーの認証 (Authentication) 情報はユーザーセッションに保存されます。

Logto SDK は `Storage` インターフェースを提供しており、Web フレームワークに基づいて `Storage` アダプターを実装することで、Logto SDK がユーザーの認証 (Authentication) 情報をセッションに保存できるようにします。

:::note
Logto によって保存されるユーザーの認証 (Authentication) 情報がクッキーのサイズ制限を超える可能性があるため、クッキーに基づくセッションの使用は推奨しません。この例では、メモリベースのセッションを使用しています。必要に応じて、Redis や MongoDB などの技術を使用して本番環境でセッションを保存できます。
:::

Logto SDK の `Storage` タイプは次のとおりです：

```go title="github.com/logto-io/client/storage.go"
package client

type Storage interface {
	GetItem(key string) string
	SetItem(key, value string)
}
```

このプロセスを示すために、[github.com/gin-contrib/sessions](https://github.com/gin-contrib/sessions) ミドルウェアを例として使用します。

ミドルウェアをアプリケーションに適用し、ルートハンドラーでユーザーリクエストコンテキストからユーザーセッションを取得できるようにします：

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

	// この例ではメモリベースのセッションを使用しています
	store := memstore.NewStore([]byte("your session secret"))
	router.Use(sessions.Sessions("logto-session", store))

	router.GET("/", func(ctx *gin.Context) {
		// ユーザーセッションを取得
		session := sessions.Default(ctx)
		// ...
		ctx.String(200, "Hello Logto!")
	})
	router.Run(":3000")
}
```

`session_storage.go` ファイルを作成し、`SessionStorage` を定義し、Logto SDK の `Storage` インターフェースを実装します：

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

これで、ルートハンドラー内で Logto 用のセッションストレージを作成できます：

```go
session := sessions.Default(ctx)
sessionStorage := &SessionStorage{session: session}
```
