Alternativamente, puedes usar el componente `AuthorizeView` para renderizar contenido condicionalmente basado en el estado de autenticación del usuario. Este componente es útil cuando deseas mostrar contenido diferente a usuarios autenticados y no autenticados.

En tu componente Razor, añade el siguiente código:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization

@* ... *@

<AuthorizeView>
    <Authorized>
        <p>Nombre: @User?.Identity?.Name</p>
        @* Contenido para usuarios autenticados *@
    </Authorized>
    <NotAuthorized>
        @* Contenido para usuarios no autenticados *@
    </NotAuthorized>
</AuthorizeView>

@* ... *@
```

El componente `AuthorizeView` requiere un parámetro en cascada de tipo `Task<AuthenticationState>`. Una forma directa de obtener este parámetro es añadir el componente `<CascadingAuthenticationState>`. Sin embargo, debido a la naturaleza de Blazor Server, no podemos simplemente añadir el componente al diseño o al componente raíz (puede que no funcione como se espera). En su lugar, podemos añadir el siguiente código al constructor (`Program.cs` o `Startup.cs`) para proporcionar el parámetro en cascada:

```csharp title="Program.cs"
builder.Services.AddCascadingAuthenticationState();
```

Luego puedes usar el componente `AuthorizeView` en cada componente que lo necesite.
