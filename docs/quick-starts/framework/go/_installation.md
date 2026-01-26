Execute in the project root directory:

```bash
# Install the core package for accessing predefined values and types
go get github.com/logto-io/go/v2/core

# Install the client package for interacting with the Logto
go get github.com/logto-io/go/v2/client
```

Add `github.com/logto-io/go/v2/core` and `github.com/logto-io/go/v2/client` packages to your application code:

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// Add dependency
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
