사용자가 Logto 로그인 페이지에서 성공적으로 로그인하면, Logto는 사용자를 리디렉션 URI로 리디렉션합니다.

리디렉션 URI가 `http://localhost:3000/callback`이므로, 로그인 후 콜백을 처리하기 위해 `/callback` 경로를 추가합니다.

```go title="main.go"
func main() {
	// ...

	// 로그인 콜백 요청을 처리하기 위한 경로 추가
	router.GET("/callback", func(ctx *gin.Context) {
		session := sessions.Default(ctx)
		logtoClient := client.NewLogtoClient(
			logtoConfig,
			&SessionStorage{session: session},
		)

		// 로그인 콜백 요청은 Logto에 의해 처리됩니다
		err := logtoClient.HandleSignInCallback(ctx.Request)
		if err != nil {
			ctx.String(http.StatusInternalServerError, err.Error())
			return
		}

		// 개발자가 지정한 페이지로 이동합니다.
		// 이 예제에서는 사용자를 홈 페이지로 되돌립니다.
		ctx.Redirect(http.StatusTemporaryRedirect, "/")
	})

	// ...
}
```
