Сначала добавьте методы обработчиков в ваш `PageModel`, например:

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

Затем добавьте кнопки на вашу страницу Razor:

```cshtml title="Pages/Index.cshtml"
<p>Аутентифицирован: @User.Identity?.IsAuthenticated</p>
<form method="post">
  @if (User.Identity?.IsAuthenticated == true) {
    <button type="submit" asp-page-handler="SignOut">Выйти</button>
  } else {
    <button type="submit" asp-page-handler="SignIn">Войти</button>
  }
</form>
```

Будет отображаться кнопка "Войти", если пользователь не аутентифицирован, и кнопка "Выйти", если пользователь аутентифицирован.
