ในเว็บแอปพลิเคชันแบบดั้งเดิม ข้อมูลการยืนยันตัวตนของผู้ใช้จะถูกเก็บไว้ในเซสชันของผู้ใช้

Logto SDK มี `Storage` interface ให้คุณสามารถสร้างอะแดปเตอร์ `Storage` ตามเฟรมเวิร์กเว็บของคุณ เพื่อให้ Logto SDK สามารถเก็บข้อมูลการยืนยันตัวตนของผู้ใช้ในเซสชันได้

:::note
เรา **ไม่แนะนำ** ให้ใช้เซสชันที่อิงกับคุกกี้ เนื่องจากข้อมูลการยืนยันตัวตนของผู้ใช้ที่ Logto เก็บไว้อาจมีขนาดเกินขีดจำกัดของคุกกี้
ในตัวอย่างนี้ เราใช้เซสชันที่อยู่ในหน่วยความจำ (memory-based session) คุณสามารถใช้ Redis, MongoDB หรือเทคโนโลยีอื่น ๆ ในการใช้งานจริงเพื่อเก็บเซสชันตามความเหมาะสม
:::

`Storage` type ใน Logto SDK มีดังนี้:

```go title="storage.go"
package client

type Storage interface {
	GetItem(key string) string
	SetItem(key, value string)
}
```

เราจะใช้ middleware [github.com/gin-contrib/sessions](https://github.com/gin-contrib/sessions) เป็นตัวอย่างเพื่อแสดงขั้นตอนนี้

นำ middleware ไปใช้กับแอปพลิเคชัน เพื่อให้เราสามารถดึงเซสชันของผู้ใช้จาก context ของ request ใน route handler ได้:

```go title="main.go"
package main

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/memstore"
	"github.com/gin-gonic/gin"
	"github.com/logto-io/go/v2/client"
)

func main() {
	router := gin.Default()

	// ในตัวอย่างนี้เราใช้ session ที่อยู่ในหน่วยความจำ
	store := memstore.NewStore([]byte("your session secret"))
	router.Use(sessions.Sessions("logto-session", store))

	router.GET("/", func(ctx *gin.Context) {
		// ดึง session ของผู้ใช้
		session := sessions.Default(ctx)
		// ...
		ctx.String(200, "Hello Logto!")
	})
	router.Run(":3000")
}
```

สร้างไฟล์ `session_storage.go` กำหนด `SessionStorage` และ implement interface `Storage` ของ Logto SDK:

```go title="session_storage.go"
package main

import (
	"github.com/gin-contrib/sessions"
)

type SessionStorage struct {
	session sessions.Session
}

func (storage *SessionStorage) GetItem(key string) string {
	value := storage.session.Get(key)
	if value == nil {
		return ""
	}
	return value.(string)
}

func (storage *SessionStorage) SetItem(key, value string) {
	storage.session.Set(key, value)
	storage.session.Save()
}
```

ตอนนี้ ใน route handler คุณสามารถสร้าง session storage สำหรับ Logto ได้ดังนี้:

```go
session := sessions.Default(ctx)
sessionStorage := &SessionStorage{session: session}
```
