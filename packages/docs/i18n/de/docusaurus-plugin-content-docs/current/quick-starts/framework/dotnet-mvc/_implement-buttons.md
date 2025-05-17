Zuerst füge Aktionsmethoden zu deinem `Controller` hinzu, zum Beispiel:

```csharp title="Controllers/HomeController.cs"
public class HomeController : Controller
{
  public IActionResult SignIn()
  {
    // Dies wird den Benutzer zur Logto-Anmeldeseite umleiten.
    return Challenge(new AuthenticationProperties { RedirectUri = "/" });
  }

  // Verwende das `new` Schlüsselwort, um Konflikte mit der `ControllerBase.SignOut` Methode zu vermeiden
  new public IActionResult SignOut()
  {
    // Dies wird das Authentifizierungs-Cookie löschen und den Benutzer zur Logto-Abmeldeseite umleiten,
    // um auch die Logto-Sitzung zu löschen.
    return SignOut(new AuthenticationProperties { RedirectUri = "/" });
  }
}
```

Füge dann die Links zu deiner View hinzu:

```cshtml title="Views/Home/Index.cshtml"
<p>Ist authentifiziert: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true) {
  <a asp-controller="Home" asp-action="SignOut">Abmelden</a>
} else {
  <a asp-controller="Home" asp-action="SignIn">Anmelden</a>
}
```

Es wird den "Anmelden"-Link anzeigen, wenn der Benutzer nicht authentifiziert ist, und den "Abmelden"-Link anzeigen, wenn der Benutzer authentifiziert ist.
