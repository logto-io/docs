当用户在 Logto 登录页面成功登录后，Logto 将把用户重定向到重定向 URI。

由于重定向 URI 是 `http://localhost:3000/callback`，我们添加 `/callback` 路由来处理登录后的回调。

```go title="main.go"
func main() {
	// ...

	// 添加一个路由来处理登录回调请求
	router.GET("/callback", func(ctx *gin.Context) {
		session := sessions.Default(ctx)
		logtoClient := client.NewLogtoClient(
			logtoConfig,
			&SessionStorage{session: session},
		)

		// 登录回调请求由 Logto 处理
		err := logtoClient.HandleSignInCallback(ctx.Request)
		if err != nil {
			ctx.String(http.StatusInternalServerError, err.Error())
			return
		}

		// 跳转到开发者指定的页面。
		// 本例将用户带回主页。
		ctx.Redirect(http.StatusTemporaryRedirect, "/")
	})

	// ...
}
```
