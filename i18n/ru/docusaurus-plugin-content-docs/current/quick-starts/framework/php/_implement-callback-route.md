После входа пользователя, Logto перенаправит его на URL обратного вызова, который вы установили в Logto Console. В этом примере мы используем `/callback` в качестве URL обратного вызова:

```php
Route::get('/callback', function () {
  try {
    $client->handleSignInCallback(); // Обработка множества вещей
  } catch (\Throwable $exception) {
    return $exception; // Измените это на вашу логику обработки ошибок
  }
  return redirect('/'); // Перенаправление пользователя на главную страницу после успешного входа
});
```
