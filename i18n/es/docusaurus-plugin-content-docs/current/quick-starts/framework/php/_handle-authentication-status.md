En Logto SDK, podemos usar `$client->isAuthenticated()` para verificar el estado de autenticación. Si el usuario ha iniciado sesión, el valor será verdadero; de lo contrario, el valor será falso.

También necesitamos implementar una página de inicio para la demostración:

- Si el usuario no ha iniciado sesión, mostrar un botón de inicio de sesión;
- Si el usuario ha iniciado sesión, mostrar un botón de cierre de sesión.

```php
Route::get('/', function () {
  if ($client->isAuthenticated() === false) {
    return "No autenticado <a href='/sign-in'>Iniciar sesión</a>";
  }

  return "<a href='/sign-out'>Cerrar sesión</a>";
});
```
