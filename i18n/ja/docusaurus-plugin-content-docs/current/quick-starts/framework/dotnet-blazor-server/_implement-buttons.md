Razor コンポーネントに次のコードを追加します：

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject NavigationManager NavigationManager

@* ... *@

<p>認証 (Authentication) 済み: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true)
{
    <button @onclick="SignOut">サインアウト</button>
}
else
{
    <button @onclick="SignIn">サインイン</button>
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

**説明**：

- インジェクトされた `AuthenticationStateProvider` は、現在のユーザーの認証 (Authentication) 状態を取得し、`User` プロパティを設定するために使用されます。
- `SignIn` と `SignOut` メソッドは、それぞれサインインおよびサインアウトのエンドポイントにユーザーをリダイレクトするために使用されます。Blazor Server の性質上、リダイレクションをトリガーするために `NavigationManager` を強制ロードで使用する必要があります。

ページは、ユーザーが認証 (Authentication) されていない場合は「サインイン」ボタンを表示し、認証 (Authentication) されている場合は「サインアウト」ボタンを表示します。
