Dans le SDK Logto, nous pouvons utiliser `client.isAuthenticated()` pour vérifier le statut d'authentification (Authentication). Si l'utilisateur est connecté, la valeur sera true, sinon, la valeur sera false.

Ici, nous implémentons également une page d'accueil simple pour la démonstration :

- Si l'utilisateur n'est pas connecté, afficher un bouton de connexion ;
- Si l'utilisateur est connecté, afficher un bouton de déconnexion.

```python
@app.route("/")
async def home():
    if client.isAuthenticated() is False:
        return "Non authentifié <a href='/sign-in'>Se connecter</a>"
    return "Authentifié <a href='/sign-out'>Se déconnecter</a>"
```
