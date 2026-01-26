Após o usuário fazer login, o Logto redirecionará o usuário para a URL de callback que você definiu no Logto Console. Neste exemplo, usamos `/callback` como a URL de callback:

```php
Route::get('/callback', function () {
  try {
    $client->handleSignInCallback(); // Lida com várias coisas
  } catch (\Throwable $exception) {
    return $exception; // Altere isso para a sua lógica de tratamento de erros
  }
  return redirect('/'); // Redireciona o usuário para a página inicial após um login bem-sucedido
});
```
