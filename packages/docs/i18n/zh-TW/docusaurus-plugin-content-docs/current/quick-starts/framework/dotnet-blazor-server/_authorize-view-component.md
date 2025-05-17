或者，你可以使用 `AuthorizeView` 元件根據使用者的驗證 (Authentication) 狀態有條件地渲染內容。當你想要對已驗證和未驗證的使用者顯示不同內容時，這個元件非常有用。

在你的 Razor 元件中，新增以下程式碼：

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization

@* ... *@

<AuthorizeView>
    <Authorized>
        <p>名稱：@User?.Identity?.Name</p>
        @* 已驗證使用者的內容 *@
    </Authorized>
    <NotAuthorized>
        @* 未驗證使用者的內容 *@
    </NotAuthorized>
</AuthorizeView>

@* ... *@
```

`AuthorizeView` 元件需要一個類型為 `Task<AuthenticationState>` 的級聯參數。獲取此參數的直接方法是新增 `<CascadingAuthenticationState>` 元件。然而，由於 Blazor Server 的特性，我們不能簡單地將元件新增到佈局或根元件（可能無法如預期運作）。相反地，我們可以在建構器（`Program.cs` 或 `Startup.cs`）中新增以下程式碼來提供級聯參數：

```csharp title="Program.cs"
builder.Services.AddCascadingAuthenticationState();
```

然後，你可以在每個需要的元件中使用 `AuthorizeView` 元件。
