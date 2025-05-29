従来の Web アプリケーションでは、ユーザーの認証 (Authentication) 情報はユーザーセッションに保存されます。

Logto SDK では `Storage` インターフェースが提供されており、Web フレームワークに合わせて `Storage` アダプターを実装することで、Logto SDK がユーザーの認証 (Authentication) 情報をセッションに保存できるようになります。

:::note
Logto によって保存されるユーザー認証 (Authentication) 情報はクッキーのサイズ制限を超える可能性があるため、クッキー ベースのセッションの使用は推奨しません。
この例ではメモリ ベースのセッションを使用しています。実運用では必要に応じて Redis や MongoDB などの技術を使ってセッションを保存できます。
:::

Logto SDK の `Storage` 型は次のとおりです：

```go title="storage.go"
package client

type Storage interface {
	GetItem(key string) string
	SetItem(key, value string)
}
```

[github.com/gin-contrib/sessions](https://github.com/gin-contrib/sessions) ミドルウェアを例として、このプロセスを説明します。

ミドルウェアをアプリケーションに適用することで、ルートハンドラー内でユーザーリクエストコンテキストからユーザーセッションを取得できます：

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

	// この例ではメモリ ベースのセッションを使用します
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

`session_storage.go` ファイルを作成し、`SessionStorage` を定義して Logto SDK の `Storage` インターフェースを実装します：

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
