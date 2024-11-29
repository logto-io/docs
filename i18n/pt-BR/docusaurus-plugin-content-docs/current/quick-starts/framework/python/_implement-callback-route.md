Após o usuário fazer login, o Logto redirecionará o usuário para a URL de callback que você definiu no Logto Console. Neste exemplo, usamos `/callback` como a URL de callback:

```python
@app.route("/callback")
async def callback():
    try:
        await client.handleSignInCallback(request.url) # Lida com muitas coisas
        return redirect("/") # Redireciona o usuário para a página inicial após um login bem-sucedido
    except Exception as e:
        # Altere isso para a sua lógica de tratamento de erros
        return "Erro: " + str(e)
```
