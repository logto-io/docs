Blazor Server は SignalR を使用してサーバーとクライアント間で通信するため、HTTP コンテキストを直接操作するメソッド（チャレンジやリダイレクトの発行など）は、Blazor コンポーネントから呼び出された場合、期待通りに動作しません。

これを正しく行うためには、サインインとサインアウトのリダイレクト用に 2 つのエンドポイントを明示的に追加する必要があります：

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

これで、これらのエンドポイントにリダイレクトしてサインインとサインアウトをトリガーできます。
