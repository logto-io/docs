Nachdem sich der Benutzer angemeldet hat, leitet Logto den Benutzer zur Callback-URL weiter, die du in der Logto-Konsole festgelegt hast. In diesem Beispiel verwenden wir `/callback` als Callback-URL:

```php
Route::get('/callback', function () {
  try {
    $client->handleSignInCallback(); // Bearbeitet viele Dinge
  } catch (\Throwable $exception) {
    return $exception; // Ändere dies zu deiner Fehlerbehandlungslogik
  }
  return redirect('/'); // Leitet den Benutzer nach einer erfolgreichen Anmeldung zur Startseite weiter
});
```
