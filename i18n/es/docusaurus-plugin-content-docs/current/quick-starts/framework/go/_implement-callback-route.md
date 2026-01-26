Cuando el usuario inicia sesión con éxito en la página de inicio de sesión de Logto, Logto redirigirá al usuario al URI de redirección.

Dado que el URI de redirección es `http://localhost:3000/callback`, añadimos la ruta `/callback` para manejar el callback después de iniciar sesión.

```go title="main.go"
func main() {
	// ...

	// Añadir una ruta para manejar las solicitudes de callback de inicio de sesión
	router.GET("/callback", func(ctx *gin.Context) {
		session := sessions.Default(ctx)
		logtoClient := client.NewLogtoClient(
			logtoConfig,
			&SessionStorage{session: session},
		)

		// La solicitud de callback de inicio de sesión es manejada por Logto
		err := logtoClient.HandleSignInCallback(ctx.Request)
		if err != nil {
			ctx.String(http.StatusInternalServerError, err.Error())
			return
		}

		// Saltar a la página especificada por el desarrollador.
		// Este ejemplo lleva al usuario de vuelta a la página de inicio.
		ctx.Redirect(http.StatusTemporaryRedirect, "/")
	})

	// ...
}
```
