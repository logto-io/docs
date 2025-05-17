在项目根目录执行：

```bash
go get github.com/logto-io/go
```

将 `github.com/logto-io/go/client` 包添加到你的应用代码中：

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// 添加依赖
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
