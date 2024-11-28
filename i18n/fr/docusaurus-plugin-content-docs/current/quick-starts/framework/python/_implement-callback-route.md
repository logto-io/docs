Après que l'utilisateur se soit connecté, Logto redirigera l'utilisateur vers l'URL de rappel que vous avez définie dans la Logto Console. Dans cet exemple, nous utilisons `/callback` comme URL de rappel :

```python
@app.route("/callback")
async def callback():
    try:
        await client.handleSignInCallback(request.url) # Gérer beaucoup de choses
        return redirect("/") # Rediriger l'utilisateur vers la page d'accueil après une connexion réussie
    except Exception as e:
        # Changez cela pour votre logique de gestion des erreurs
        return "Erreur : " + str(e)
```
