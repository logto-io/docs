Quando o usuário faz login com sucesso na página de login do Logto, o Logto redirecionará o usuário para o URI de redirecionamento.

Como o URI de redirecionamento é `http://localhost:3000/callback`, adicionamos a rota `/callback` para lidar com o callback após o login.

```go title="main.go"
func main() {
	// ...

	// Adiciona uma rota para lidar com solicitações de callback de login
	router.GET("/callback", func(ctx *gin.Context) {
		session := sessions.Default(ctx)
		logtoClient := client.NewLogtoClient(
			logtoConfig,
			&SessionStorage{session: session},
		)

		// A solicitação de callback de login é tratada pelo Logto
		err := logtoClient.HandleSignInCallback(ctx.Request)
		if err != nil {
			ctx.String(http.StatusInternalServerError, err.Error())
			return
		}

		// Redireciona para a página especificada pelo desenvolvedor.
		// Este exemplo leva o usuário de volta à página inicial.
		ctx.Redirect(http.StatusTemporaryRedirect, "/")
	})

	// ...
}
```
