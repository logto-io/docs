或者，你可以使用 `AuthorizeView` 组件根据用户的认证状态有条件地渲染内容。当你想向已认证和未认证用户显示不同内容时，这个组件非常有用。

在你的 Razor 组件中，添加以下代码：

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization

@* ... *@

<AuthorizeView>
    <Authorized>
        <p>名称：@User?.Identity?.Name</p>
        @* 已认证用户的内容 *@
    </Authorized>
    <NotAuthorized>
        @* 未认证用户的内容 *@
    </NotAuthorized>
</AuthorizeView>

@* ... *@
```

`AuthorizeView` 组件需要一个类型为 `Task<AuthenticationState>` 的级联参数。获取此参数的直接方法是添加 `<CascadingAuthenticationState>` 组件。然而，由于 Blazor Server 的特性，我们不能简单地将组件添加到布局或根组件（可能无法按预期工作）。相反，我们可以在构建器中添加以下代码（`Program.cs` 或 `Startup.cs`）来提供级联参数：

```csharp title="Program.cs"
builder.Services.AddCascadingAuthenticationState();
```

然后你可以在每个需要的组件中使用 `AuthorizeView` 组件。
