프로젝트 루트 디렉터리에서 다음을 실행하세요:

```bash
# 미리 정의된 값과 타입에 접근하기 위한 core 패키지 설치
go get github.com/logto-io/go/v2/core

# Logto와 상호작용하기 위한 client 패키지 설치
go get github.com/logto-io/go/v2/client
```

애플리케이션 코드에 `github.com/logto-io/go/v2/core` 및 `github.com/logto-io/go/v2/client` 패키지를 추가하세요:

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// 의존성 추가
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
