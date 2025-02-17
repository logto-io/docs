В качестве альтернативы, вы можете использовать компонент `AuthorizeView` для условного отображения контента в зависимости от состояния аутентификации пользователя. Этот компонент полезен, когда вы хотите показывать разный контент аутентифицированным и неаутентифицированным пользователям.

В вашем Razor-компоненте добавьте следующий код:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization

@* ... *@

<AuthorizeView>
    <Authorized>
        <p>Имя: @User?.Identity?.Name</p>
        @* Контент для аутентифицированных пользователей *@
    </Authorized>
    <NotAuthorized>
        @* Контент для неаутентифицированных пользователей *@
    </NotAuthorized>
</AuthorizeView>

@* ... *@
```

Компонент `AuthorizeView` требует каскадного параметра типа `Task<AuthenticationState>`. Прямой способ получить этот параметр — добавить компонент `<CascadingAuthenticationState>`. Однако, из-за особенностей Blazor Server, мы не можем просто добавить компонент в макет или корневой компонент (это может не сработать, как ожидается). Вместо этого, мы можем добавить следующий код в билдер (`Program.cs` или `Startup.cs`), чтобы предоставить каскадный параметр:

```csharp title="Program.cs"
builder.Services.AddCascadingAuthenticationState();
```

Затем вы можете использовать компонент `AuthorizeView` в каждом компоненте, которому это необходимо.
