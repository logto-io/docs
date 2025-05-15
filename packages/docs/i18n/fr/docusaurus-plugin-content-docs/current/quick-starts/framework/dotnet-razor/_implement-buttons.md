Tout d'abord, ajoutez les méthodes de gestionnaire à votre `PageModel`, par exemple :

```csharp title="Pages/Index.cshtml.cs"
public class IndexModel : PageModel
{
  public async Task OnPostSignInAsync()
  {
    await HttpContext.ChallengeAsync(new AuthenticationProperties
    {
      RedirectUri = "/"
    });
  }

  public async Task OnPostSignOutAsync()
  {
    await HttpContext.SignOutAsync(new AuthenticationProperties
    {
      RedirectUri = "/"
    });
  }
}
```

Ensuite, ajoutez les boutons à votre page Razor :

```cshtml title="Pages/Index.cshtml"
<p>Est authentifié : @User.Identity?.IsAuthenticated</p>
<form method="post">
  @if (User.Identity?.IsAuthenticated == true) {
    <button type="submit" asp-page-handler="SignOut">Se déconnecter</button>
  } else {
    <button type="submit" asp-page-handler="SignIn">Se connecter</button>
  }
</form>
```

Il affichera le bouton "Se connecter" si l'utilisateur n'est pas authentifié, et affichera le bouton "Se déconnecter" si l'utilisateur est authentifié.
