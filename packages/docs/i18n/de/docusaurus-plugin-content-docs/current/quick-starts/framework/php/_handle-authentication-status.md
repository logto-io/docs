Im Logto SDK können wir `$client->isAuthenticated()` verwenden, um den Authentifizierungsstatus zu überprüfen. Wenn der Benutzer angemeldet ist, wird der Wert true sein, andernfalls wird der Wert false sein.

Wir müssen auch eine Startseite zur Demonstration implementieren:

- Wenn der Benutzer nicht angemeldet ist, zeige einen Anmeldebutton;
- Wenn der Benutzer angemeldet ist, zeige einen Abmeldebutton.

```php
Route::get('/', function () {
  if ($client->isAuthenticated() === false) {
    return "Nicht authentifiziert <a href='/sign-in'>Anmelden</a>";
  }

  return "<a href='/sign-out'>Abmelden</a>";
});
```
