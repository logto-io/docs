首先，將處理方法新增到你的 `PageModel`，例如：

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

接著，將按鈕新增到你的 Razor 頁面：

```cshtml title="Pages/Index.cshtml"
<p>是否已驗證 (Is authenticated): @User.Identity?.IsAuthenticated</p>
<form method="post">
  @if (User.Identity?.IsAuthenticated == true) {
    <button type="submit" asp-page-handler="SignOut">登出</button>
  } else {
    <button type="submit" asp-page-handler="SignIn">登入</button>
  }
</form>
```

如果使用者未經驗證，將顯示「登入」按鈕；如果使用者已驗證，將顯示「登出」按鈕。
