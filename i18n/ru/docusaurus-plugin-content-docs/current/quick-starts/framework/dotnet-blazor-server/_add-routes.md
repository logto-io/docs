Поскольку Blazor Server использует SignalR для связи между сервером и клиентом, это означает, что методы, которые напрямую манипулируют HTTP-контекстом (например, вызов вызовов или перенаправлений), не работают должным образом, когда вызываются из компонента Blazor.

Чтобы исправить это, нам нужно явно добавить две конечные точки для перенаправлений при входе и выходе:

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

Теперь мы можем перенаправлять на эти конечные точки, чтобы инициировать вход и выход.
