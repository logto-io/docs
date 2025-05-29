Execute no diretório raiz do projeto:

```bash
# Instale o pacote core para acessar valores e tipos predefinidos
go get github.com/logto-io/go/v2/core

# Instale o pacote client para interagir com o Logto
go get github.com/logto-io/go/v2/client
```

Adicione os pacotes `github.com/logto-io/go/v2/core` e `github.com/logto-io/go/v2/client` ao código do seu aplicativo:

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// Adicione a dependência
	"github.com/logto-io/go/v2/core"
	"github.com/logto-io/go/v2/client"
)

func main() {
	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.String(200, "Hello Logto!")
	})
	router.Run(":3000")
}
```
