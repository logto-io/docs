In Logto SDK, we can use `$client->isAuthenticated()` to check the authentication status, if the user is signed in, the value will be true, otherwise, the value will be false.

We also need to implement a home page for demonstration:

- If the user is not signed in, show a sign-in button;
- If the user is signed in, show a sign-out button.

```php
Route::get('/', function () {
  if ($client->isAuthenticated() === false) {
    return "Not authenticated <a href='/sign-in'>Sign in</a>";
  }

  return "<a href='/sign-out'>Sign out</a>";
});
```
