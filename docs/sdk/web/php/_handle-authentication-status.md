In Logto SDK, we can use `$client->isAuthenticated()` to check the authentication status, if the user is signed in, the value will be true, otherwise, the value will be false.

We also need to implement a home page for demonstration:

- If the user is not signed in, show a sign-in button;
- If the user is signed in, show some basic information about the user.

```php
Route::get('/', function () {
  if ($client->isAuthenticated() === false) {
    return "Not authenticated <a href='/sign-in'>Sign in</a>";
  }

  return (
    // Get local ID token claims
    json_decode($client->getIdTokenClaims())
    . "<br>"
    // Fetch user info from Logto userinfo endpoint
    json_decode($client->fetchUserInfo())
    . "<br><a href='/sign-out'>Sign out</a>"
  );
});
```

Our data models are based on [JsonModel](https://github.com/logto-io/php/blob/master/docs/api/classes/Logto/Sdk/Models/JsonModel.md), which is safe to accept undefined keys while encoding or decoding JSON.

Note that a field (claim) with `null` value doesn't mean the field is set. The reason may be the related scope is not requested, or the user doesn't have the field.

For example, if we didn't request the `email` scope when signing in, and the `email` field will be `null`. However, if we requested the `email` scope, the `email` field will be the user's email address if available.

To learn more about scopes and claims, see [Get user information](#get-user-information).
