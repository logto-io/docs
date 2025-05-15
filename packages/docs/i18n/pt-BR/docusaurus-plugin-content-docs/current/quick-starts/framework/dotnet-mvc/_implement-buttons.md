Primeiro, adicione métodos de ações ao seu `Controller`, por exemplo:

```csharp title="Controllers/HomeController.cs"
public class HomeController : Controller
{
  public IActionResult SignIn()
  {
    // Isso redirecionará o usuário para a página de login do Logto.
    return Challenge(new AuthenticationProperties { RedirectUri = "/" });
  }

  // Use a palavra-chave `new` para evitar conflito com o método `ControllerBase.SignOut`
  new public IActionResult SignOut()
  {
    // Isso limpará o cookie de autenticação e redirecionará o usuário para a página de logout do Logto
    // para limpar a sessão do Logto também.
    return SignOut(new AuthenticationProperties { RedirectUri = "/" });
  }
}
```

Em seguida, adicione os links à sua View:

```cshtml title="Views/Home/Index.cshtml"
<p>Está autenticado: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true) {
  <a asp-controller="Home" asp-action="SignOut">Sair</a>
} else {
  <a asp-controller="Home" asp-action="SignIn">Entrar</a>
}
```

Ele mostrará o link "Entrar" se o usuário não estiver autenticado e mostrará o link "Sair" se o usuário estiver autenticado.
