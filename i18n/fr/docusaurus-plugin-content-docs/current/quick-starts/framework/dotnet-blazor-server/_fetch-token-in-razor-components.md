Étant donné que nous ne pouvons pas accéder directement à `HttpContext` dans les composants Razor, nous devons injecter le `HttpContextAccessor` dans le composant et l'utiliser pour récupérer les jetons. Le code suivant démontre comment récupérer le jeton d’accès pour la ressource API dans un composant Razor :

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@using Logto.AspNetCore.Authentication
@using Microsoft.AspNetCore.Authentication
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject IHttpContextAccessor HttpContextAccessor

@* ... *@

<p><b>Ressource :</b> @(Resource ?? "(null)")</p>
<p><b>Jeton d’accès :</b> @(AccessToken ?? "(null)")</p>

@* ... *@

@code {
    private ClaimsPrincipal? User { get; set; }
    private string? AccessToken { get; set; }
    private string? Resource { get; set; }

    protected override async Task OnInitializedAsync()
    {
        var authState = await AuthenticationStateProvider.GetAuthenticationStateAsync();
        User = authState.User;

        if (User?.Identity?.IsAuthenticated == true)
        {
            await FetchTokenAsync();
        }
    }

    private async Task FetchTokenAsync()
    {
        var httpContext = HttpContextAccessor.HttpContext;
        if (httpContext == null)
        {
            return;
        }

        var logtoOptions = httpContext.GetLogtoOptions();
        Resource = logtoOptions?.Resource;
        // Remplacez par d'autres types de jetons si nécessaire
        AccessToken = await httpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
    }
}
```
