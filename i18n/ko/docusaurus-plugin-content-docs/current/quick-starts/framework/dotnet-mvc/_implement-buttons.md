먼저, `Controller`에 액션 메서드를 추가하세요. 예를 들어:

```csharp title="Controllers/HomeController.cs"
public class HomeController : Controller
{
  public IActionResult SignIn()
  {
    // 사용자를 Logto 로그인 페이지로 리디렉션합니다.
    return Challenge(new AuthenticationProperties { RedirectUri = "/" });
  }

  // `ControllerBase.SignOut` 메서드와의 충돌을 피하기 위해 `new` 키워드를 사용합니다.
  new public IActionResult SignOut()
  {
    // 인증 쿠키를 지우고 사용자를 Logto 로그아웃 페이지로 리디렉션하여 Logto 세션도 지웁니다.
    return SignOut(new AuthenticationProperties { RedirectUri = "/" });
  }
}
```

그런 다음, View에 링크를 추가하세요:

```cshtml title="Views/Home/Index.cshtml"
<p>인증됨: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true) {
  <a asp-controller="Home" asp-action="SignOut">로그아웃</a>
} else {
  <a asp-controller="Home" asp-action="SignIn">로그인</a>
}
```

사용자가 인증되지 않은 경우 "로그인" 링크를 표시하고, 인증된 경우 "로그아웃" 링크를 표시합니다.
