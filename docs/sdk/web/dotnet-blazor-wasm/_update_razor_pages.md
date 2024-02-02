
### Add `AuthorizeView` component

In the Razor pages that require authentication, add the `AuthorizeView` component. Let's assume it's the `Home.razor` page:

```cshtml
@using Microsoft.AspNetCore.Components.Authorization
@page "/"

<AuthorizeView>
    <Authorized>
        @* Signed in view *@
        <button @onclick="OnLogoutButtonClickAsync">
            Sign out
        </button>
    </Authorized>
    <NotAuthorized>
        @* Unauthenticated view *@
        <button @onclick="OnLoginButtonClickAsync">
            Sign in
        </button>
    </NotAuthorized>
</AuthorizeView>
```

### Set up authentication

In the `Home.razor.cs` file (create it if it doesn't exist), add the following code:

```csharp
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Blorc.OpenIdConnect;
using Microsoft.AspNetCore.Components.Authorization;

[Authorize]
public partial class Home : ComponentBase
{
    [Inject]
    public required IUserManager UserManager { get; set; }

    public User<Profile>? User { get; set; }

    [CascadingParameter]
    protected Task<AuthenticationState>? AuthenticationStateTask { get; set; }

    protected override async Task OnInitializedAsync()
    {
        User = await UserManager.GetUserAsync<User<Profile>>(AuthenticationStateTask!);
    }

    private async Task OnLoginButtonClickAsync(MouseEventArgs obj)
    {
        await UserManager.SignInRedirectAsync();
    }

    private async Task OnLogoutButtonClickAsync(MouseEventArgs obj)
    {
        await UserManager.SignOutRedirectAsync();
    }
}
```

Once the user is authenticated, the `User` property will be populated with the user information.

### Display user information

Here are some examples of how to display user information in the `Home.razor` page:

```cshtml
<AuthorizeView>
    <Authorized>
        @* Signed in view *@
        @* ... *@
        <p>You are signed in as @(@User?.Profile?.Name ?? "(unknown name)").</p>
    </Authorized>
    @* ... *@
</AuthorizeView>
```

For more properties and claims, check the `User` and `Profile` classes in the `Blorc.OpenIdConnect` package.
