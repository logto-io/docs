In the Razor component, add the following code:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization
@using System.Security.Claims
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject NavigationManager NavigationManager

@* ... *@

<p>Is authenticated: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true)
{
    <button @onclick="SignOut">Sign out</button>
}
else
{
    <button @onclick="SignIn">Sign in</button>
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

**Explanation**:

- The injected `AuthenticationStateProvider` is used to get the current user's authentication state, and populate the `User` property.
- The `SignIn` and `SignOut` methods are used to redirect the user to the sign-in and sign-out endpoints respectively. Since the nature of Blazor Server, we need to use `NavigationManager` with force load to trigger the redirection.

The page will show the "Sign in" button if the user is not authenticated, and show the "Sign out" button if the user is authenticated.
