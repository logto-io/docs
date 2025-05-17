Primero, añade métodos de acciones a tu `Controller`, por ejemplo:

```csharp title="Controllers/HomeController.cs"
public class HomeController : Controller
{
  public IActionResult SignIn()
  {
    // Esto redirigirá al usuario a la página de inicio de sesión de Logto.
    return Challenge(new AuthenticationProperties { RedirectUri = "/" });
  }

  // Usa la palabra clave `new` para evitar conflictos con el método `ControllerBase.SignOut`
  new public IActionResult SignOut()
  {
    // Esto limpiará la cookie de autenticación y redirigirá al usuario a la página de cierre de sesión de Logto
    // para limpiar también la sesión de Logto.
    return SignOut(new AuthenticationProperties { RedirectUri = "/" });
  }
}
```

Luego, añade los enlaces a tu Vista:

```cshtml title="Views/Home/Index.cshtml"
<p>Está autenticado: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true) {
  <a asp-controller="Home" asp-action="SignOut">Cerrar sesión</a>
} else {
  <a asp-controller="Home" asp-action="SignIn">Iniciar sesión</a>
}
```

Mostrará el enlace "Iniciar sesión" si el usuario no está autenticado, y mostrará el enlace "Cerrar sesión" si el usuario está autenticado.
