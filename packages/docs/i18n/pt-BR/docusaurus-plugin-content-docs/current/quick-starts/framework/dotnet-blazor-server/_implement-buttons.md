No componente Razor, adicione o seguinte código:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject NavigationManager NavigationManager

@* ... *@

<p>Está autenticado: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true)
{
    <button @onclick="SignOut">Sair</button>
}
else
{
    <button @onclick="SignIn">Entrar</button>
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

**Explicação**:

- O `AuthenticationStateProvider` injetado é usado para obter o estado de autenticação do usuário atual e preencher a propriedade `User`.
- Os métodos `SignIn` e `SignOut` são usados para redirecionar o usuário para os endpoints de login e logout, respectivamente. Devido à natureza do Blazor Server, precisamos usar o `NavigationManager` com carregamento forçado para acionar o redirecionamento.

A página mostrará o botão "Entrar" se o usuário não estiver autenticado e mostrará o botão "Sair" se o usuário estiver autenticado.
