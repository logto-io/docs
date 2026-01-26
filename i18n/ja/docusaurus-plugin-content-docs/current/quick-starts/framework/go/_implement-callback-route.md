ユーザーが Logto のサインインページで正常にサインインすると、Logto はユーザーをリダイレクト URI にリダイレクトします。

リダイレクト URI が `http://localhost:3000/callback` であるため、サインイン後のコールバックを処理するために `/callback` ルートを追加します。

```go title="main.go"
func main() {
	// ...

	// サインインコールバックリクエストを処理するためのルートを追加
	router.GET("/callback", func(ctx *gin.Context) {
		session := sessions.Default(ctx)
		logtoClient := client.NewLogtoClient(
			logtoConfig,
			&SessionStorage{session: session},
		)

		// サインインコールバックリクエストは Logto によって処理されます
		err := logtoClient.HandleSignInCallback(ctx.Request)
		if err != nil {
			ctx.String(http.StatusInternalServerError, err.Error())
			return
		}

		// 開発者が指定したページにジャンプします。
		// この例では、ユーザーをホームページに戻します。
		ctx.Redirect(http.StatusTemporaryRedirect, "/")
	})

	// ...
}
```
