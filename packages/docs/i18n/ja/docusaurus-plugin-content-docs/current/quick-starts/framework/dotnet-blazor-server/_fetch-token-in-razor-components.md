`HttpContext` に直接アクセスできないため、Razor コンポーネントで `HttpContextAccessor` をコンポーネントに注入し、それを使用してトークンを取得する必要があります。以下のコードは、Razor コンポーネントで API リソースのアクセス トークンを取得する方法を示しています：

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@using Logto.AspNetCore.Authentication
@using Microsoft.AspNetCore.Authentication
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject IHttpContextAccessor HttpContextAccessor

@* ... *@

<p><b>Resource:</b> @(Resource ?? "(null)")</p>
<p><b>Access Token:</b> @(AccessToken ?? "(null)")</p>

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
        // 必要に応じて他のトークンタイプに置き換えてください
        AccessToken = await httpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
    }
}
```
