Dado que no podemos acceder directamente a `HttpContext` en los componentes Razor, necesitamos inyectar el `HttpContextAccessor` en el componente y usarlo para obtener los tokens. El siguiente código demuestra cómo obtener el token de acceso para el recurso de API en un componente Razor:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@using Logto.AspNetCore.Authentication
@using Microsoft.AspNetCore.Authentication
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject IHttpContextAccessor HttpContextAccessor

@* ... *@

<p><b>Recurso:</b> @(Resource ?? "(null)")</p>
<p><b>Token de acceso:</b> @(AccessToken ?? "(null)")</p>

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
        // Reemplazar con otros tipos de token si es necesario
        AccessToken = await httpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
    }
}
```
