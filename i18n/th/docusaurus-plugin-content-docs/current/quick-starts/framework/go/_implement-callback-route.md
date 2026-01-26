เมื่อผู้ใช้ลงชื่อเข้าใช้สำเร็จบนหน้าลงชื่อเข้าใช้ของ Logto แล้ว Logto จะเปลี่ยนเส้นทาง (redirect) ผู้ใช้ไปยัง Redirect URI

เนื่องจาก Redirect URI คือ `http://localhost:3000/callback` เราจึงเพิ่ม route `/callback` เพื่อจัดการ callback หลังจากลงชื่อเข้าใช้

```go title="main.go"
func main() {
	// ...

	// เพิ่ม route สำหรับจัดการคำขอ callback หลังลงชื่อเข้าใช้
	router.GET("/callback", func(ctx *gin.Context) {
		session := sessions.Default(ctx)
		logtoClient := client.NewLogtoClient(
			logtoConfig,
			&SessionStorage{session: session},
		)

		// คำขอ callback หลังลงชื่อเข้าใช้จะถูกจัดการโดย Logto
		err := logtoClient.HandleSignInCallback(ctx.Request)
		if err != nil {
			ctx.String(http.StatusInternalServerError, err.Error())
			return
		}

		// เปลี่ยนหน้าไปยังหน้าที่นักพัฒนาระบุไว้
		// ตัวอย่างนี้จะพาผู้ใช้กลับไปยังหน้าแรก
		ctx.Redirect(http.StatusTemporaryRedirect, "/")
	})

	// ...
}
```
