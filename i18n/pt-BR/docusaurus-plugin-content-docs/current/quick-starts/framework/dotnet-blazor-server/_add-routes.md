Como o Blazor Server usa SignalR para se comunicar entre o servidor e o cliente, isso significa que métodos que manipulam diretamente o contexto HTTP (como emitir desafios ou redirecionamentos) não funcionam como esperado quando chamados de um componente Blazor.

Para corrigir isso, precisamos adicionar explicitamente dois endpoints para redirecionamentos de login e logout:

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

Agora podemos redirecionar para esses endpoints para acionar login e logout.
