รันคำสั่งในไดเรกทอรีรากของโปรเจกต์:

```bash
# ติดตั้งแพ็กเกจ core สำหรับเข้าถึงค่าที่กำหนดไว้ล่วงหน้าและชนิดข้อมูล
go get github.com/logto-io/go/v2/core

# ติดตั้งแพ็กเกจ client สำหรับโต้ตอบกับ Logto
go get github.com/logto-io/go/v2/client
```

เพิ่มแพ็กเกจ `github.com/logto-io/go/v2/core` และ `github.com/logto-io/go/v2/client` ลงในโค้ดแอปพลิเคชันของคุณ:

```go title="main.go"
// main.go
package main

import (
	"github.com/gin-gonic/gin"
	// เพิ่ม dependency
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
