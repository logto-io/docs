在專案根目錄執行：

```bash
# 安裝存取預定義值與型別的核心套件
go get github.com/logto-io/go/v2/core

# 安裝與 Logto 互動的 client 套件
go get github.com/logto-io/go/v2/client
```

將 `github.com/logto-io/go/v2/core` 與 `github.com/logto-io/go/v2/client` 套件加入你的應用程式程式碼中：

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// 加入相依套件
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
