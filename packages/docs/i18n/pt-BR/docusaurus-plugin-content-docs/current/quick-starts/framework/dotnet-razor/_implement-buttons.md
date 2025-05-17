Primeiro, adicione os métodos de manipulador ao seu `PageModel`, por exemplo:

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

Em seguida, adicione os botões à sua página Razor:

```cshtml title="Pages/Index.cshtml"
<p>Está autenticado: @User.Identity?.IsAuthenticated</p>
<form method="post">
  @if (User.Identity?.IsAuthenticated == true) {
    <button type="submit" asp-page-handler="SignOut">Sair</button>
  } else {
    <button type="submit" asp-page-handler="SignIn">Entrar</button>
  }
</form>
```

Ele mostrará o botão "Entrar" se o usuário não estiver autenticado e mostrará o botão "Sair" se o usuário estiver autenticado.
