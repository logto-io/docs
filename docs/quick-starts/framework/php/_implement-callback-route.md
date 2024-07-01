After the user signs in, Logto will redirect the user to the callback URL you set in the Logto Console. In this example, we use `/callback` as the callback URL:

```php
Route::get('/callback', function () {
  try {
    $client->handleSignInCallback(); // Handle a lot of stuff
  } catch (\Throwable $exception) {
    return $exception; // Change this to your error handling logic
  }
  return redirect('/'); // Redirect the user to the home page after a successful sign-in
});
```
