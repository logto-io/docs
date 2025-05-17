Razor 구성 요소에서 `HttpContext`에 직접 접근할 수 없기 때문에, 구성 요소에 `HttpContextAccessor`를 주입하고 이를 사용하여 토큰을 가져와야 합니다. 다음 코드는 Razor 구성 요소에서 API 리소스에 대한 액세스 토큰을 가져오는 방법을 보여줍니다:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@using Logto.AspNetCore.Authentication
@using Microsoft.AspNetCore.Authentication
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject IHttpContextAccessor HttpContextAccessor

@* ... *@

<p><b>리소스:</b> @(Resource ?? "(null)")</p>
<p><b>액세스 토큰:</b> @(AccessToken ?? "(null)")</p>

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
        // 필요에 따라 다른 토큰 유형으로 교체하세요
        AccessToken = await httpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
    }
}
```
