由于 Blazor Server 使用 SignalR 在服务器和客户端之间进行通信，这意味着直接操作 HTTP 上下文的方法（如发起挑战或重定向）在从 Blazor 组件调用时无法按预期工作。

为了正确实现，我们需要显式添加两个用于登录和注销重定向的端点：

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

现在我们可以重定向到这些端点以触发登录和注销。
