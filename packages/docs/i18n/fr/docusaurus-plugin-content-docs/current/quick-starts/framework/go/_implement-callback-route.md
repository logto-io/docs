Lorsque l'utilisateur se connecte avec succès sur la page de connexion Logto, Logto redirigera l'utilisateur vers l'URI de redirection.

Étant donné que l'URI de redirection est `http://localhost:3000/callback`, nous ajoutons la route `/callback` pour gérer le rappel après la connexion.

```go title="main.go"
func main() {
	// ...

	// Ajouter une route pour gérer les requêtes de rappel de connexion
	router.GET("/callback", func(ctx *gin.Context) {
		session := sessions.Default(ctx)
		logtoClient := client.NewLogtoClient(
			logtoConfig,
			&SessionStorage{session: session},
		)

		// La requête de rappel de connexion est gérée par Logto
		err := logtoClient.HandleSignInCallback(ctx.Request)
		if err != nil {
			ctx.String(http.StatusInternalServerError, err.Error())
			return
		}

		// Aller à la page spécifiée par le développeur.
		// Cet exemple ramène l'utilisateur à la page d'accueil.
		ctx.Redirect(http.StatusTemporaryRedirect, "/")
	})

	// ...
}
```
