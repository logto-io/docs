Im Razor-Komponent fügen Sie den folgenden Code hinzu:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject NavigationManager NavigationManager

@* ... *@

<p>Ist authentifiziert: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true)
{
    <button @onclick="SignOut">Abmelden</button>
}
else
{
    <button @onclick="SignIn">Anmelden</button>
}

@* ... *@

@code {
    private ClaimsPrincipal? User { get; set; }

    protected override async Task OnInitializedAsync()
    {
        var authState = await AuthenticationStateProvider.GetAuthenticationStateAsync();
        User = authState.User;
    }

    private void SignIn()
    {
        NavigationManager.NavigateTo("/SignIn", forceLoad: true);
    }

    private void SignOut()
    {
        NavigationManager.NavigateTo("/SignOut", forceLoad: true);
    }
}
```

**Erklärung**:

- Der injizierte `AuthenticationStateProvider` wird verwendet, um den Authentifizierungsstatus des aktuellen Benutzers abzurufen und die `User`-Eigenschaft zu füllen.
- Die Methoden `SignIn` und `SignOut` werden verwendet, um den Benutzer zu den Anmelde- bzw. Abmeldeendpunkten weiterzuleiten. Aufgrund der Natur von Blazor Server müssen wir `NavigationManager` mit force load verwenden, um die Weiterleitung auszulösen.

Die Seite zeigt die Schaltfläche "Anmelden" an, wenn der Benutzer nicht authentifiziert ist, und die Schaltfläche "Abmelden", wenn der Benutzer authentifiziert ist.
