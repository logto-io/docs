Étant donné que Blazor Server utilise SignalR pour communiquer entre le serveur et le client, cela signifie que les méthodes qui manipulent directement le contexte HTTP (comme l'émission de défis ou de redirections) ne fonctionnent pas comme prévu lorsqu'elles sont appelées depuis un composant Blazor.

Pour corriger cela, nous devons explicitement ajouter deux points de terminaison pour les redirections de connexion et de déconnexion :

```csharp title="Program.cs"
app.MapGet("/SignIn", async context =>
{
    if (!(context.User?.Identity?.IsAuthenticated ?? false))
    {
        await context.ChallengeAsync(new AuthenticationProperties { RedirectUri = "/" });
    } else {
        context.Response.Redirect("/");
    }
});

app.MapGet("/SignOut", async context =>
{
    if (context.User?.Identity?.IsAuthenticated ?? false)
    {
        await context.SignOutAsync(new AuthenticationProperties { RedirectUri = "/" });
    } else {
        context.Response.Redirect("/");
    }
});
```

Nous pouvons maintenant rediriger vers ces points de terminaison pour déclencher la connexion et la déconnexion.
