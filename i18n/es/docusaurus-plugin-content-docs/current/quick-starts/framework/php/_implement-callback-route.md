Después de que el usuario inicie sesión, Logto redirigirá al usuario a la URL de callback que configuraste en la Logto Console. En este ejemplo, usamos `/callback` como la URL de callback:

```php
Route::get('/callback', function () {
  try {
    $client->handleSignInCallback(); // Maneja muchas cosas
  } catch (\Throwable $exception) {
    return $exception; // Cambia esto a tu lógica de manejo de errores
  }
  return redirect('/'); // Redirige al usuario a la página de inicio después de un inicio de sesión exitoso
});
```
