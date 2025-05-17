Ejecuta en el directorio raíz del proyecto:

```bash
go get github.com/logto-io/go
```

Añade el paquete `github.com/logto-io/go/client` a tu código de aplicación:

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// Añadir dependencia
	"github.com/logto-io/go/client"
)

func main() {
	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.String(200, "¡Hola Logto!")
	})
	router.Run(":3000")
}
```
