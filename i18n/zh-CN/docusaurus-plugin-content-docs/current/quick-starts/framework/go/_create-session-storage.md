在传统的 Web 应用程序中，用户认证 (Authentication) 信息通常会存储在用户会话中。

Logto SDK 提供了一个 `Storage` 接口，你可以根据自己的 Web 框架实现一个 `Storage` 适配器，从而让 Logto SDK 能够将用户认证 (Authentication) 信息存储在会话中。

:::note
我们**不推荐**使用基于 Cookie 的会话，因为 Logto 存储的用户认证 (Authentication) 信息可能会超过 Cookie 的大小限制。
在本示例中，我们使用基于内存的会话。你可以在生产环境中根据需要使用 Redis、MongoDB 等技术来存储会话。
:::

Logto SDK 中的 `Storage` 类型如下所示：

```go title="storage.go"
package client

type Storage interface {
	GetItem(key string) string
	SetItem(key, value string)
}
```

我们以 [github.com/gin-contrib/sessions](https://github.com/gin-contrib/sessions) 中间件为例来演示这个过程。

将中间件应用到应用程序中，这样我们就可以在路由处理器中通过用户请求上下文获取用户会话：

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

	// 本示例中我们使用基于内存的会话
	store := memstore.NewStore([]byte("your session secret"))
	router.Use(sessions.Sessions("logto-session", store))

	router.GET("/", func(ctx *gin.Context) {
		// 获取用户会话
		session := sessions.Default(ctx)
		// ...
		ctx.String(200, "Hello Logto!")
	})
	router.Run(":3000")
}
```

创建一个 `session_storage.go` 文件，定义一个 `SessionStorage` 并实现 Logto SDK 的 `Storage` 接口：

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

现在，在路由处理器中，你可以为 Logto 创建一个会话存储：

```go
session := sessions.Default(ctx)
sessionStorage := &SessionStorage{session: session}
```
