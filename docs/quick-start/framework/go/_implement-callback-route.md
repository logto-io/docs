When the user signs in successfully on the Logto sign-in page, Logto will redirect the user to the Redirect URI.

Since the Redirect URI is `http://localhost:8080/sign-in-callback`, we add the `/sign-in-callback` route to handle the callback after signing in.

```go
// main.go
func main() {
	// ...

	// Add a route for handling sign-in callback requests
	router.GET("/sign-in-callback", func(ctx *gin.Context) {
		session := sessions.Default(ctx)
		logtoClient := client.NewLogtoClient(
			logtoConfig,
			&SessionStorage{session: session},
		)

		// The sign-in callback request is handled by Logto
		err := logtoClient.HandleSignInCallback(ctx.Request)
		if err != nil {
			ctx.String(http.StatusInternalServerError, err.Error())
			return
		}

		// Jump to the page specified by the developer.
		// This example takes the user back to the home page.
		ctx.Redirect(http.StatusTemporaryRedirect, "/")
	})

	// ...
}
```
