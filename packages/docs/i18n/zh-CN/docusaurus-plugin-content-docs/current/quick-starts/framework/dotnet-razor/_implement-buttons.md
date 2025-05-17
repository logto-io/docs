首先，将处理程序方法添加到你的 `PageModel` 中，例如：

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

然后，将按钮添加到你的 Razor 页面：

```cshtml title="Pages/Index.cshtml"
<p>是否已认证：@User.Identity?.IsAuthenticated</p>
<form method="post">
  @if (User.Identity?.IsAuthenticated == true) {
    <button type="submit" asp-page-handler="SignOut">登出</button>
  } else {
    <button type="submit" asp-page-handler="SignIn">登录</button>
  }
</form>
```

如果用户未认证，它将显示“登录”按钮；如果用户已认证，则显示“登出”按钮。
