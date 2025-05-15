Dans le SDK Logto, nous pouvons utiliser `$client->isAuthenticated()` pour vérifier le statut d'authentification. Si l'utilisateur est connecté, la valeur sera vraie, sinon, la valeur sera fausse.

Nous devons également implémenter une page d'accueil pour la démonstration :

- Si l'utilisateur n'est pas connecté, afficher un bouton de connexion ;
- Si l'utilisateur est connecté, afficher un bouton de déconnexion.

```php
Route::get('/', function () {
  if ($client->isAuthenticated() === false) {
    return "Non authentifié <a href='/sign-in'>Se connecter</a>";
  }

  return "<a href='/sign-out'>Se déconnecter</a>";
});
```
