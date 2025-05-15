No Logto SDK, podemos usar `client.isAuthenticated()` para verificar o status de autenticação. Se o usuário estiver autenticado, o valor será verdadeiro; caso contrário, o valor será falso.

Aqui também implementamos uma página inicial simples para demonstração:

- Se o usuário não estiver autenticado, mostrar um botão de login;
- Se o usuário estiver autenticado, mostrar um botão de logout.

```python
@app.route("/")
async def home():
    if client.isAuthenticated() is False:
        return "Não autenticado <a href='/sign-in'>Entrar</a>"
    return "Autenticado <a href='/sign-out'>Sair</a>"
```
