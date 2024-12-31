Razor 컴포넌트에 다음 코드를 추가하세요:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject NavigationManager NavigationManager

@* ... *@

<p>인증됨: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true)
{
    <button @onclick="SignOut">로그아웃</button>
}
else
{
    <button @onclick="SignIn">로그인</button>
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

**설명**:

- 주입된 `AuthenticationStateProvider`는 현재 사용자의 인증 상태를 가져와 `User` 속성을 채우는 데 사용됩니다.
- `SignIn` 및 `SignOut` 메서드는 각각 사용자를 로그인 및 로그아웃 엔드포인트로 리디렉션하는 데 사용됩니다. Blazor Server의 특성상, 리디렉션을 트리거하기 위해 `NavigationManager`를 강제 로드와 함께 사용해야 합니다.

페이지는 사용자가 인증되지 않은 경우 "로그인" 버튼을 표시하고, 인증된 경우 "로그아웃" 버튼을 표시합니다.
