Fügen Sie zuerst die Handler-Methoden zu Ihrem `PageModel` hinzu, zum Beispiel:

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

Fügen Sie dann die Schaltflächen zu Ihrer Razor-Seite hinzu:

```cshtml title="Pages/Index.cshtml"
<p>Ist authentifiziert: @User.Identity?.IsAuthenticated</p>
<form method="post">
  @if (User.Identity?.IsAuthenticated == true) {
    <button type="submit" asp-page-handler="SignOut">Abmelden</button>
  } else {
    <button type="submit" asp-page-handler="SignIn">Anmelden</button>
  }
</form>
```

Es wird die Schaltfläche "Anmelden" angezeigt, wenn der Benutzer nicht authentifiziert ist, und die Schaltfläche "Abmelden", wenn der Benutzer authentifiziert ist.
