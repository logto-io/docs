Em aplicações web tradicionais, as informações de autenticação do usuário são armazenadas na sessão do usuário.

O SDK do Logto fornece uma interface `Storage`, que você pode implementar como um adaptador de `Storage` baseado no seu framework web, para que o SDK do Logto possa armazenar as informações de autenticação do usuário na sessão.

:::note
NÃO recomendamos o uso de sessões baseadas em cookies, pois as informações de autenticação do usuário armazenadas pelo Logto podem exceder o limite de tamanho do cookie.
Neste exemplo, usamos sessões baseadas em memória. Você pode usar Redis, MongoDB e outras tecnologias em produção para armazenar sessões conforme necessário.
:::

O tipo `Storage` no SDK do Logto é o seguinte:

```go title="storage.go"
package client

type Storage interface {
	GetItem(key string) string
	SetItem(key, value string)
}
```

Usamos o middleware [github.com/gin-contrib/sessions](https://github.com/gin-contrib/sessions) como exemplo para demonstrar esse processo.

Aplique o middleware ao aplicativo, para que possamos obter a sessão do usuário pelo contexto da requisição do usuário no manipulador de rotas:

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

	// Usamos sessão baseada em memória neste exemplo
	store := memstore.NewStore([]byte("your session secret"))
	router.Use(sessions.Sessions("logto-session", store))

	router.GET("/", func(ctx *gin.Context) {
		// Obter sessão do usuário
		session := sessions.Default(ctx)
		// ...
		ctx.String(200, "Hello Logto!")
	})
	router.Run(":3000")
}
```

Crie um arquivo `session_storage.go`, defina um `SessionStorage` e implemente as interfaces `Storage` do SDK do Logto:

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

Agora, no manipulador de rotas, você pode criar um armazenamento de sessão para o Logto:

```go
session := sessions.Default(ctx)
sessionStorage := &SessionStorage{session: session}
```
