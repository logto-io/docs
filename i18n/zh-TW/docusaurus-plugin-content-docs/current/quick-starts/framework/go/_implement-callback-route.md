當使用者在 Logto 登入頁面成功登入後，Logto 會將使用者重定向到 Redirect URI。

由於重定向 URI 是 `http://localhost:3000/callback`，我們需要新增 `/callback` 路由來處理登入後的回調。

```go title="main.go"
func main() {
	// ...

	// 新增路由以處理登入回調請求
	router.GET("/callback", func(ctx *gin.Context) {
		session := sessions.Default(ctx)
		logtoClient := client.NewLogtoClient(
			logtoConfig,
			&SessionStorage{session: session},
		)

		// 登入回調請求由 Logto 處理
		err := logtoClient.HandleSignInCallback(ctx.Request)
		if err != nil {
			ctx.String(http.StatusInternalServerError, err.Error())
			return
		}

		// 跳轉到開發者指定的頁面。
		// 此範例將使用者帶回首頁。
		ctx.Redirect(http.StatusTemporaryRedirect, "/")
	})

	// ...
}
```
