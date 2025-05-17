Wenn sich der Benutzer erfolgreich auf der Logto-Anmeldeseite anmeldet, wird Logto den Benutzer zur Redirect-URI weiterleiten.

Da die Redirect-URI `http://localhost:3000/callback` ist, fügen wir die Route `/callback` hinzu, um den Callback nach der Anmeldung zu bearbeiten.

```go title="main.go"
func main() {
	// ...

	// Füge eine Route hinzu, um Anmelde-Callback-Anfragen zu bearbeiten
	router.GET("/callback", func(ctx *gin.Context) {
		session := sessions.Default(ctx)
		logtoClient := client.NewLogtoClient(
			logtoConfig,
			&SessionStorage{session: session},
		)

		// Die Anmelde-Callback-Anfrage wird von Logto bearbeitet
		err := logtoClient.HandleSignInCallback(ctx.Request)
		if err != nil {
			ctx.String(http.StatusInternalServerError, err.Error())
			return
		}

		// Springe zur Seite, die vom Entwickler angegeben wurde.
		// In diesem Beispiel wird der Benutzer zur Startseite zurückgeführt.
		ctx.Redirect(http.StatusTemporaryRedirect, "/")
	})

	// ...
}
```
