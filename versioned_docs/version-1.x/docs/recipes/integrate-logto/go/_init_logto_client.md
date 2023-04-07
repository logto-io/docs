```go
// main.go
func main() {
	// ...

	router.GET("/", func(ctx *gin.Context) {
		// Init LogtoClient
		session := sessions.Default(ctx)
		logtoClient := client.NewLogtoClient(
			logtoConfig,
			&SessionStorage{session: session},
		)

		// Use Logto to control the content of the home page
		authState := "You are not logged in to this website. :("

		if logtoClient.IsAuthenticated() {
			authState = "You are logged in to this website! :)"
		}

		homePage := `<h1>Hello Logto</h1>` +
			"<div>" + authState + "</div>"

		ctx.Data(http.StatusOK, "text/html; charset=utf-8", []byte(homePage))
	})

	// ...
}
```
