首先，將動作方法新增到你的 `Controller`，例如：

```csharp title="Controllers/HomeController.cs"
public class HomeController : Controller
{
  public IActionResult SignIn()
  {
    // 這將會將使用者重定向到 Logto 登入頁面。
    return Challenge(new AuthenticationProperties { RedirectUri = "/" });
  }

  // 使用 `new` 關鍵字以避免與 `ControllerBase.SignOut` 方法衝突
  new public IActionResult SignOut()
  {
    // 這將會清除驗證 cookie 並將使用者重定向到 Logto 登出頁面
    // 以清除 Logto 會話。
    return SignOut(new AuthenticationProperties { RedirectUri = "/" });
  }
}
```

然後，將連結新增到你的 View：

```cshtml title="Views/Home/Index.cshtml"
<p>是否已驗證 (Is authenticated): @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true) {
  <a asp-controller="Home" asp-action="SignOut">登出</a>
} else {
  <a asp-controller="Home" asp-action="SignIn">登入</a>
}
```

如果使用者未經驗證，將顯示「登入」連結；如果使用者已驗證，將顯示「登出」連結。
