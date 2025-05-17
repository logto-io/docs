Après que l'utilisateur se soit connecté, Logto redirigera l'utilisateur vers l'URL de rappel que vous avez définie dans la Logto Console. Dans cet exemple, nous utilisons `/callback` comme URL de rappel :

```php
Route::get('/callback', function () {
  try {
    $client->handleSignInCallback(); // Gérer beaucoup de choses
  } catch (\Throwable $exception) {
    return $exception; // Changez ceci pour votre logique de gestion des erreurs
  }
  return redirect('/'); // Rediriger l'utilisateur vers la page d'accueil après une connexion réussie
});
```
