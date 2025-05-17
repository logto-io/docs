Da wir in Razor-Komponenten nicht direkt auf `HttpContext` zugreifen können, müssen wir den `HttpContextAccessor` in die Komponente injizieren und ihn verwenden, um die Tokens abzurufen. Der folgende Code zeigt, wie man das Zugangstoken für die API-Ressource in einer Razor-Komponente abruft:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@using Logto.AspNetCore.Authentication
@using Microsoft.AspNetCore.Authentication
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject IHttpContextAccessor HttpContextAccessor

@* ... *@

<p><b>Ressource:</b> @(Resource ?? "(null)")</p>
<p><b>Zugangstoken:</b> @(AccessToken ?? "(null)")</p>

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
        // Ersetze durch andere Token-Typen, falls erforderlich
        AccessToken = await httpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
    }
}
```
