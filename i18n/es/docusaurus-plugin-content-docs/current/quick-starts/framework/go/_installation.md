Ejecuta en el directorio raíz del proyecto:

```bash
# Instala el paquete core para acceder a valores y tipos predefinidos
go get github.com/logto-io/go/v2/core

# Instala el paquete client para interactuar con Logto
go get github.com/logto-io/go/v2/client
```

Agrega los paquetes `github.com/logto-io/go/v2/core` y `github.com/logto-io/go/v2/client` a tu código de aplicación:

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// Añade la dependencia
	"github.com/logto-io/go/v2/core"
	"github.com/logto-io/go/v2/client"
)

func main() {
	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.String(200, "¡Hola Logto!")
	})
	router.Run(":3000")
}
```
