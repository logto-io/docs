在 Razor 组件中，添加以下代码：

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject NavigationManager NavigationManager

@* ... *@

<p>是否认证 (Is authenticated): @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true)
{
    <button @onclick="SignOut">登出</button>
}
else
{
    <button @onclick="SignIn">登录</button>
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

**说明**：

- 注入的 `AuthenticationStateProvider` 用于获取当前用户的认证状态，并填充 `User` 属性。
- `SignIn` 和 `SignOut` 方法用于分别将用户重定向到登录和登出端点。由于 Blazor Server 的特性，我们需要使用 `NavigationManager` 并强制加载以触发重定向。

如果用户未认证，页面将显示“登录”按钮；如果用户已认证，则显示“登出”按钮。
