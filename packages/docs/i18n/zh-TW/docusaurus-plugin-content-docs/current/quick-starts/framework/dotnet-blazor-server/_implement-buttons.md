在 Razor 元件中，新增以下程式碼：

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authentication
@using System.Security.Claims
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject NavigationManager NavigationManager

@* ... *@

<p>是否已驗證 (Is authenticated): @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true)
{
    <button @onclick="SignOut">登出</button>
}
else
{
    <button @onclick="SignIn">登入</button>
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

**說明**：

- 注入的 `AuthenticationStateProvider` 用於獲取當前使用者的驗證狀態，並填充 `User` 屬性。
- `SignIn` 和 `SignOut` 方法用於分別將使用者重定向到登入和登出端點。由於 Blazor Server 的特性，我們需要使用 `NavigationManager` 並啟用強制載入來觸發重定向。

如果使用者未驗證，頁面將顯示「登入」按鈕；如果使用者已驗證，則顯示「登出」按鈕。
