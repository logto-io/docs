No Logto SDK, podemos usar `$client->isAuthenticated()` para verificar o status de autenticação. Se o usuário estiver autenticado, o valor será verdadeiro; caso contrário, o valor será falso.

Também precisamos implementar uma página inicial para demonstração:

- Se o usuário não estiver autenticado, mostrar um botão de login;
- Se o usuário estiver autenticado, mostrar um botão de logout.

```php
Route::get('/', function () {
  if ($client->isAuthenticated() === false) {
    return "Não autenticado <a href='/sign-in'>Entrar</a>";
  }

  return "<a href='/sign-out'>Sair</a>";
});
```
