Сначала добавьте методы действий в ваш `Controller`, например:

```csharp title="Controllers/HomeController.cs"
public class HomeController : Controller
{
  public IActionResult SignIn()
  {
    // Это перенаправит пользователя на страницу входа Logto.
    return Challenge(new AuthenticationProperties { RedirectUri = "/" });
  }

  // Используйте ключевое слово `new`, чтобы избежать конфликта с методом `ControllerBase.SignOut`
  new public IActionResult SignOut()
  {
    // Это очистит cookie аутентификации и перенаправит пользователя на страницу выхода Logto,
    // чтобы также очистить сессию Logto.
    return SignOut(new AuthenticationProperties { RedirectUri = "/" });
  }
}
```

Затем добавьте ссылки в ваше представление:

```cshtml title="Views/Home/Index.cshtml"
<p>Аутентифицирован: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true) {
  <a asp-controller="Home" asp-action="SignOut">Выйти</a>
} else {
  <a asp-controller="Home" asp-action="SignIn">Войти</a>
}
```

Он покажет ссылку "Войти", если пользователь не аутентифицирован, и ссылку "Выйти", если пользователь аутентифицирован.
