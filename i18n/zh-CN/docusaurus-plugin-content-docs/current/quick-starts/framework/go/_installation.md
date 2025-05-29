在项目根目录下执行：

```bash
# 安装用于访问预定义值和类型的核心包
go get github.com/logto-io/go/v2/core

# 安装用于与 Logto 交互的客户端包
go get github.com/logto-io/go/v2/client
```

将 `github.com/logto-io/go/v2/core` 和 `github.com/logto-io/go/v2/client` 包添加到你的应用代码中：

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// 添加依赖
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
