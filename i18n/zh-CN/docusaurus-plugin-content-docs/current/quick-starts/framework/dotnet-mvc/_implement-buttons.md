首先，向你的 `Controller` 添加操作方法，例如：

```csharp title="Controllers/HomeController.cs"
public class HomeController : Controller
{
  public IActionResult SignIn()
  {
    // 这将重定向用户到 Logto 登录页面。
    return Challenge(new AuthenticationProperties { RedirectUri = "/" });
  }

  // 使用 `new` 关键字以避免与 `ControllerBase.SignOut` 方法冲突
  new public IActionResult SignOut()
  {
    // 这将清除认证 cookie 并重定向用户到 Logto 登出页面
    // 以清除 Logto 会话。
    return SignOut(new AuthenticationProperties { RedirectUri = "/" });
  }
}
```

然后，将链接添加到你的视图中：

```cshtml title="Views/Home/Index.cshtml"
<p>是否已认证：@User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true) {
  <a asp-controller="Home" asp-action="SignOut">登出</a>
} else {
  <a asp-controller="Home" asp-action="SignIn">登录</a>
}
```

如果用户未认证，它将显示“登录”链接；如果用户已认证，则显示“登出”链接。
