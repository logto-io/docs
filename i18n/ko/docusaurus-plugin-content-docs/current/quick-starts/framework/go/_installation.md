프로젝트 루트 디렉토리에서 실행하세요:

```bash
go get github.com/logto-io/go
```

애플리케이션 코드에 `github.com/logto-io/go/client` 패키지를 추가하세요:

```go title="main.go"
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
	router.Run(":3000")
}
```
