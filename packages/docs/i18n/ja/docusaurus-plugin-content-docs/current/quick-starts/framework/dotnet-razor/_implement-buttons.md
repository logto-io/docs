まず、`PageModel` にハンドラーメソッドを追加します。例えば：

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

次に、Razor ページにボタンを追加します：

```cshtml title="Pages/Index.cshtml"
<p>Is authenticated: @User.Identity?.IsAuthenticated</p>
<form method="post">
  @if (User.Identity?.IsAuthenticated == true) {
    <button type="submit" asp-page-handler="SignOut">Sign out</button>
  } else {
    <button type="submit" asp-page-handler="SignIn">Sign in</button>
  }
</form>
```

ユーザーが認証 (Authentication) されていない場合は「Sign in」ボタンが表示され、認証 (Authentication) されている場合は「Sign out」ボタンが表示されます。
