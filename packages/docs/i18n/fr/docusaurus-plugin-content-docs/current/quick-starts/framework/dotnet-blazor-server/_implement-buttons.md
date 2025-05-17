Dans le composant Razor, ajoutez le code suivant :

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject NavigationManager NavigationManager

@* ... *@

<p>Est authentifié : @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true)
{
    <button @onclick="SignOut">Se déconnecter</button>
}
else
{
    <button @onclick="SignIn">Se connecter</button>
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

**Explication** :

- Le `AuthenticationStateProvider` injecté est utilisé pour obtenir l'état d'authentification de l'utilisateur actuel et remplir la propriété `User`.
- Les méthodes `SignIn` et `SignOut` sont utilisées pour rediriger l'utilisateur vers les points de terminaison de connexion et de déconnexion respectivement. En raison de la nature de Blazor Server, nous devons utiliser `NavigationManager` avec un chargement forcé pour déclencher la redirection.

La page affichera le bouton "Se connecter" si l'utilisateur n'est pas authentifié, et affichera le bouton "Se déconnecter" si l'utilisateur est authentifié.
