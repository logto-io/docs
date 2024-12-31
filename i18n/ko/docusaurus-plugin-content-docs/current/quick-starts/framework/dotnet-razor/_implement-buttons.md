먼저, `PageModel`에 핸들러 메서드를 추가하세요. 예를 들어:

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

그런 다음, Razor 페이지에 버튼을 추가하세요:

```cshtml title="Pages/Index.cshtml"
<p>인증됨: @User.Identity?.IsAuthenticated</p>
<form method="post">
  @if (User.Identity?.IsAuthenticated == true) {
    <button type="submit" asp-page-handler="SignOut">로그아웃</button>
  } else {
    <button type="submit" asp-page-handler="SignIn">로그인</button>
  }
</form>
```

사용자가 인증되지 않은 경우 "로그인" 버튼이 표시되고, 사용자가 인증된 경우 "로그아웃" 버튼이 표시됩니다.
