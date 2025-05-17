Primero, añade los métodos de manejador a tu `PageModel`, por ejemplo:

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

Luego, añade los botones a tu página Razor:

```cshtml title="Pages/Index.cshtml"
<p>Está autenticado: @User.Identity?.IsAuthenticated</p>
<form method="post">
  @if (User.Identity?.IsAuthenticated == true) {
    <button type="submit" asp-page-handler="SignOut">Cerrar sesión</button>
  } else {
    <button type="submit" asp-page-handler="SignIn">Iniciar sesión</button>
  }
</form>
```

Mostrará el botón "Iniciar sesión" si el usuario no está autenticado, y mostrará el botón "Cerrar sesión" si el usuario está autenticado.
