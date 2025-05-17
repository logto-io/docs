在專案根目錄執行：

```bash
go get github.com/logto-io/go
```

將 `github.com/logto-io/go/client` 套件新增到你的應用程式代碼中：

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// 新增依賴
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
