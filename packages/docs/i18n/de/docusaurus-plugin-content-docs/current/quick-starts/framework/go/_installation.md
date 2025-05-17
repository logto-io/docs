Führe im Stammverzeichnis des Projekts aus:

```bash
go get github.com/logto-io/go
```

Füge das `github.com/logto-io/go/client`-Paket zu deinem Anwendungscode hinzu:

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// Abhängigkeit hinzufügen
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
