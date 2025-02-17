Выполните в корневом каталоге проекта:

```bash
go get github.com/logto-io/go
```

Добавьте пакет `github.com/logto-io/go/client` в код вашего приложения:

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// Добавьте зависимость
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
