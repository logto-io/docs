En el componente Razor, añade el siguiente código:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject NavigationManager NavigationManager

@* ... *@

<p>Está autenticado: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true)
{
    <button @onclick="SignOut">Cerrar sesión</button>
}
else
{
    <button @onclick="SignIn">Iniciar sesión</button>
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

**Explicación**:

- El `AuthenticationStateProvider` inyectado se utiliza para obtener el estado de autenticación del usuario actual y poblar la propiedad `User`.
- Los métodos `SignIn` y `SignOut` se utilizan para redirigir al usuario a los puntos de acceso de inicio y cierre de sesión respectivamente. Debido a la naturaleza de Blazor Server, necesitamos usar `NavigationManager` con carga forzada para activar la redirección.

La página mostrará el botón "Iniciar sesión" si el usuario no está autenticado, y mostrará el botón "Cerrar sesión" si el usuario está autenticado.
