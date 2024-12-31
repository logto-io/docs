대안으로, `AuthorizeView` 컴포넌트를 사용하여 사용자의 인증 상태에 따라 조건부로 콘텐츠를 렌더링할 수 있습니다. 이 컴포넌트는 인증된 사용자와 인증되지 않은 사용자에게 다른 콘텐츠를 보여주고자 할 때 유용합니다.

Razor 컴포넌트에 다음 코드를 추가하세요:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization

@* ... *@

<AuthorizeView>
    <Authorized>
        <p>이름: @User?.Identity?.Name</p>
        @* 인증된 사용자를 위한 콘텐츠 *@
    </Authorized>
    <NotAuthorized>
        @* 인증되지 않은 사용자를 위한 콘텐츠 *@
    </NotAuthorized>
</AuthorizeView>

@* ... *@
```

`AuthorizeView` 컴포넌트는 `Task<AuthenticationState>` 유형의 캐스케이딩 매개변수가 필요합니다. 이 매개변수를 얻는 직접적인 방법은 `<CascadingAuthenticationState>` 컴포넌트를 추가하는 것입니다. 그러나 Blazor Server의 특성상, 레이아웃이나 루트 컴포넌트에 단순히 컴포넌트를 추가할 수 없습니다 (예상대로 작동하지 않을 수 있습니다). 대신, 빌더 (`Program.cs` 또는 `Startup.cs`)에 다음 코드를 추가하여 캐스케이딩 매개변수를 제공할 수 있습니다:

```csharp title="Program.cs"
builder.Services.AddCascadingAuthenticationState();
```

그런 다음, 필요한 모든 컴포넌트에서 `AuthorizeView` 컴포넌트를 사용할 수 있습니다.
