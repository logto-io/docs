Exécutez dans le répertoire racine du projet :

```bash
go get github.com/logto-io/go
```

Ajoutez le package `github.com/logto-io/go/client` à votre code d'application :

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// Add dependency
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
