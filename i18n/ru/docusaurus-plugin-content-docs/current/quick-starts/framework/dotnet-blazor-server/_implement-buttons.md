В компоненте Razor добавьте следующий код:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject NavigationManager NavigationManager

@* ... *@

<p>Аутентифицирован: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true)
{
    <button @onclick="SignOut">Выйти</button>
}
else
{
    <button @onclick="SignIn">Войти</button>
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

**Объяснение**:

- Внедренный `AuthenticationStateProvider` используется для получения текущего состояния аутентификации пользователя и заполнения свойства `User`.
- Методы `SignIn` и `SignOut` используются для перенаправления пользователя на конечные точки входа и выхода соответственно. Из-за природы Blazor Server, нам нужно использовать `NavigationManager` с принудительной загрузкой для инициирования перенаправления.

Страница будет показывать кнопку "Войти", если пользователь не аутентифицирован, и кнопку "Выйти", если пользователь аутентифицирован.
