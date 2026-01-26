Alternativamente, você pode usar o componente `AuthorizeView` para renderizar condicionalmente o conteúdo com base no estado de autenticação do usuário. Este componente é útil quando você deseja mostrar conteúdo diferente para usuários autenticados e não autenticados.

No seu componente Razor, adicione o seguinte código:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization

@* ... *@

<AuthorizeView>
    <Authorized>
        <p>Nome: @User?.Identity?.Name</p>
        @* Conteúdo para usuários autenticados *@
    </Authorized>
    <NotAuthorized>
        @* Conteúdo para usuários não autenticados *@
    </NotAuthorized>
</AuthorizeView>

@* ... *@
```

O componente `AuthorizeView` requer um parâmetro em cascata do tipo `Task<AuthenticationState>`. Uma maneira direta de obter este parâmetro é adicionar o componente `<CascadingAuthenticationState>`. No entanto, devido à natureza do Blazor Server, não podemos simplesmente adicionar o componente ao layout ou ao componente raiz (pode não funcionar como esperado). Em vez disso, podemos adicionar o seguinte código ao builder (`Program.cs` ou `Startup.cs`) para fornecer o parâmetro em cascata:

```csharp title="Program.cs"
builder.Services.AddCascadingAuthenticationState();
```

Então, você pode usar o componente `AuthorizeView` em todos os componentes que precisarem dele.
