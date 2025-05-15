Execute no diretório raiz do projeto:

```bash
go get github.com/logto-io/go
```

Adicione o pacote `github.com/logto-io/go/client` ao código do seu aplicativo:

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// Adicionar dependência
	"github.com/logto-io/go/client"
)

func main() {
	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.String(200, "Hello Logto!")
	})
	router.Run(":3000")
}
```
