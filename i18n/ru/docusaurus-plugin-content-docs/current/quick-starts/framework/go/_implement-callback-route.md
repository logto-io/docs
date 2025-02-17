Когда пользователь успешно входит на странице входа Logto, Logto перенаправляет пользователя на Redirect URI.

Поскольку redirect URI — это `http://localhost:3000/callback`, мы добавляем маршрут `/callback` для обработки обратного вызова после входа.

```go title="main.go"
func main() {
	// ...

	// Добавляем маршрут для обработки запросов обратного вызова входа
	router.GET("/callback", func(ctx *gin.Context) {
		session := sessions.Default(ctx)
		logtoClient := client.NewLogtoClient(
			logtoConfig,
			&SessionStorage{session: session},
		)

		// Запрос обратного вызова входа обрабатывается Logto
		err := logtoClient.HandleSignInCallback(ctx.Request)
		if err != nil {
			ctx.String(http.StatusInternalServerError, err.Error())
			return
		}

		// Переход на страницу, указанную разработчиком.
		// В этом примере пользователь возвращается на главную страницу.
		ctx.Redirect(http.StatusTemporaryRedirect, "/")
	})

	// ...
}
```
