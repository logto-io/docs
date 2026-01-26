Tout d'abord, ajoutez des méthodes d'actions à votre `Controller`, par exemple :

```csharp title="Controllers/HomeController.cs"
public class HomeController : Controller
{
  public IActionResult SignIn()
  {
    // Cela redirigera l'utilisateur vers la page de connexion Logto.
    return Challenge(new AuthenticationProperties { RedirectUri = "/" });
  }

  // Utilisez le mot-clé `new` pour éviter les conflits avec la méthode `ControllerBase.SignOut`
  new public IActionResult SignOut()
  {
    // Cela effacera le cookie d'authentification et redirigera l'utilisateur vers la page de déconnexion Logto
    // pour effacer également la session Logto.
    return SignOut(new AuthenticationProperties { RedirectUri = "/" });
  }
}
```

Ensuite, ajoutez les liens à votre Vue :

```cshtml title="Views/Home/Index.cshtml"
<p>Est authentifié : @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true) {
  <a asp-controller="Home" asp-action="SignOut">Se déconnecter</a>
} else {
  <a asp-controller="Home" asp-action="SignIn">Se connecter</a>
}
```

Cela affichera le lien "Se connecter" si l'utilisateur n'est pas authentifié, et affichera le lien "Se déconnecter" si l'utilisateur est authentifié.
