代わりに、`AuthorizeView` コンポーネントを使用して、ユーザーの認証 (Authentication) 状態に基づいてコンテンツを条件付きでレンダリングすることができます。このコンポーネントは、認証 (Authentication) 済みユーザーと未認証ユーザーに異なるコンテンツを表示したい場合に便利です。

Razor コンポーネントに次のコードを追加します：

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization

@* ... *@

<AuthorizeView>
    <Authorized>
        <p>Name: @User?.Identity?.Name</p>
        @* 認証 (Authentication) 済みユーザー向けのコンテンツ *@
    </Authorized>
    <NotAuthorized>
        @* 未認証ユーザー向けのコンテンツ *@
    </NotAuthorized>
</AuthorizeView>

@* ... *@
```

`AuthorizeView` コンポーネントは、`Task<AuthenticationState>` 型のカスケードパラメーターを必要とします。このパラメーターを取得する直接的な方法は、`<CascadingAuthenticationState>` コンポーネントを追加することです。ただし、Blazor Server の性質上、レイアウトやルートコンポーネントに単純にコンポーネントを追加することはできません（期待通りに動作しない可能性があります）。代わりに、ビルダー (`Program.cs` または `Startup.cs`) に次のコードを追加してカスケードパラメーターを提供します：

```csharp title="Program.cs"
builder.Services.AddCascadingAuthenticationState();
```

その後、`AuthorizeView` コンポーネントを必要とするすべてのコンポーネントで使用できます。
