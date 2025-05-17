由於 Blazor Server 使用 SignalR 在伺服器和客戶端之間進行通訊，這意味著直接操作 HTTP context 的方法（如發起挑戰或重定向）在從 Blazor 元件調用時無法如預期運作。

為了正確處理，我們需要明確地為登入和登出重定向新增兩個端點：

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

現在，我們可以重定向到這些端點以觸發登入和登出。
