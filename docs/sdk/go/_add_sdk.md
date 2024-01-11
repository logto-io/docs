Execute in the project root directory:

```bash
go get github.com/logto-io/go
```

Add the `github.com/logto-io/go/client` package to your application code:

```go
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
	router.Run(":8080")
}
```
