まず、`Controller` にアクションメソッドを追加します。例えば：

```csharp title="Controllers/HomeController.cs"
public class HomeController : Controller
{
  public IActionResult SignIn()
  {
    // これにより、ユーザーは Logto のサインインページにリダイレクトされます。
    return Challenge(new AuthenticationProperties { RedirectUri = "/" });
  }

  // `ControllerBase.SignOut` メソッドとの競合を避けるために `new` キーワードを使用します
  new public IActionResult SignOut()
  {
    // これにより、認証 (Authentication) クッキーがクリアされ、ユーザーは Logto のサインアウトページにリダイレクトされ、
    // Logto セッションもクリアされます。
    return SignOut(new AuthenticationProperties { RedirectUri = "/" });
  }
}
```

次に、リンクを View に追加します：

```cshtml title="Views/Home/Index.cshtml"
<p>Is authenticated: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true) {
  <a asp-controller="Home" asp-action="SignOut">Sign out</a>
} else {
  <a asp-controller="Home" asp-action="SignIn">Sign in</a>
}
```

ユーザーが認証 (Authentication) されていない場合は「Sign in」リンクが表示され、認証 (Authentication) されている場合は「Sign out」リンクが表示されます。
