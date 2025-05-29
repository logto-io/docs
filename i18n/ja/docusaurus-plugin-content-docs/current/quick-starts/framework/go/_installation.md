プロジェクトのルートディレクトリで次のコマンドを実行します：

```bash
# 事前定義された値や型へアクセスするためのコアパッケージをインストール
go get github.com/logto-io/go/v2/core

# Logto と連携するためのクライアントパッケージをインストール
go get github.com/logto-io/go/v2/client
```

アプリケーションコードに `github.com/logto-io/go/v2/core` および `github.com/logto-io/go/v2/client` パッケージを追加します：

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// 依存関係を追加
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
