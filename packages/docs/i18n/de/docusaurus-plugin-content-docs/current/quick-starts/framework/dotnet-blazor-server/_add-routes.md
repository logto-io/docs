Da Blazor Server SignalR verwendet, um zwischen dem Server und dem Client zu kommunizieren, bedeutet dies, dass Methoden, die den HTTP-Kontext direkt manipulieren (wie das Auslösen von Herausforderungen oder Weiterleitungen), nicht wie erwartet funktionieren, wenn sie von einer Blazor-Komponente aufgerufen werden.

Um dies richtig zu machen, müssen wir explizit zwei Endpunkte für Anmelde- und Abmelde-Weiterleitungen hinzufügen:

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

Jetzt können wir zu diesen Endpunkten weiterleiten, um Anmelde- und Abmeldevorgänge auszulösen.
