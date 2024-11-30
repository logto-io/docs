Dado que Blazor Server utiliza SignalR para comunicarse entre el servidor y el cliente, esto significa que los métodos que manipulan directamente el contexto HTTP (como emitir desafíos o redirecciones) no funcionan como se espera cuando se llaman desde un componente de Blazor.

Para hacerlo correctamente, necesitamos agregar explícitamente dos endpoints para las redirecciones de inicio y cierre de sesión:

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

Ahora podemos redirigir a estos endpoints para activar el inicio y cierre de sesión.
