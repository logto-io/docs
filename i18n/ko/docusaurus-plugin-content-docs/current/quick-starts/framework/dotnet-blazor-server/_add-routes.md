Blazor Server는 서버와 클라이언트 간의 통신에 SignalR을 사용하기 때문에, HTTP 컨텍스트를 직접 조작하는 메서드 (예: 챌린지 발행 또는 리디렉션)가 Blazor 컴포넌트에서 호출될 때 예상대로 작동하지 않습니다.

이를 올바르게 처리하려면, 로그인 및 로그아웃 리디렉션을 위한 두 개의 엔드포인트를 명시적으로 추가해야 합니다:

```csharp title="Program.cs"
app.MapGet("/SignIn", async context =>
{
    if (!(context.User?.Identity?.IsAuthenticated ?? false))
    {
        await context.ChallengeAsync(new AuthenticationProperties { RedirectUri = "/" });
    } else {
        context.Response.Redirect("/");
    }
});

app.MapGet("/SignOut", async context =>
{
    if (context.User?.Identity?.IsAuthenticated ?? false)
    {
        await context.SignOutAsync(new AuthenticationProperties { RedirectUri = "/" });
    } else {
        context.Response.Redirect("/");
    }
});
```

이제 이러한 엔드포인트로 리디렉션하여 로그인 및 로그아웃을 트리거할 수 있습니다.
