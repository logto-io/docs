전통적인 웹 애플리케이션에서는 사용자 인증 정보가 사용자 세션에 저장됩니다.

Logto SDK는 `Storage` 인터페이스를 제공하며, 웹 프레임워크에 기반한 `Storage` 어댑터를 구현하여 Logto SDK가 사용자 인증 정보를 세션에 저장할 수 있도록 할 수 있습니다.

:::note
Logto가 저장하는 사용자 인증 정보는 쿠키 크기 제한을 초과할 수 있으므로 쿠키 기반 세션 사용을 권장하지 않습니다. 이 예제에서는 메모리 기반 세션을 사용합니다. 필요에 따라 프로덕션 환경에서는 Redis, MongoDB 및 기타 기술을 사용하여 세션을 저장할 수 있습니다.
:::

Logto SDK의 `Storage` 타입은 다음과 같습니다:

```go title="github.com/logto-io/client/storage.go"
package client

type Storage interface {
	GetItem(key string) string
	SetItem(key, value string)
}
```

이 과정을 설명하기 위해 [github.com/gin-contrib/sessions](https://github.com/gin-contrib/sessions) 미들웨어를 예제로 사용합니다.

애플리케이션에 미들웨어를 적용하여 라우트 핸들러에서 사용자 요청 컨텍스트를 통해 사용자 세션을 가져올 수 있습니다:

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

	// 이 예제에서는 메모리 기반 세션을 사용합니다
	store := memstore.NewStore([]byte("your session secret"))
	router.Use(sessions.Sessions("logto-session", store))

	router.GET("/", func(ctx *gin.Context) {
		// 사용자 세션 가져오기
		session := sessions.Default(ctx)
		// ...
		ctx.String(200, "Hello Logto!")
	})
	router.Run(":3000")
}
```

`session_storage.go` 파일을 생성하고, `SessionStorage`를 정의하여 Logto SDK의 `Storage` 인터페이스를 구현합니다:

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

이제 라우트 핸들러에서 Logto를 위한 세션 스토리지를 생성할 수 있습니다:

```go
session := sessions.Default(ctx)
sessionStorage := &SessionStorage{session: session}
```
