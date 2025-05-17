プロジェクトのルートディレクトリで実行します：

```bash
go get github.com/logto-io/go
```

アプリケーションコードに `github.com/logto-io/go/client` パッケージを追加します：

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// 依存関係を追加
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
