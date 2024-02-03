Alternatively, you can use the `AuthorizeView` component to conditionally render content based on the user's authentication state. This component is useful when you want to show different content to authenticated and unauthenticated users.

In your Razor component, add the following code:

```cshtml
@using Microsoft.AspNetCore.Components.Authorization

@* ... *@

<AuthorizeView>
    <Authorized>
        <p>Name: @User?.Identity?.Name</p>
        @* Content for authenticated users *@
    </Authorized>
    <NotAuthorized>
        @* Content for unauthenticated users *@
    </NotAuthorized>
</AuthorizeView>

@* ... *@
```

The `AuthorizeView` component requires a cascading parameter of type `Task<AuthenticationState>`. A direct way to get this parameter is to add the `<CascadingAuthenticationState>` component. However, due to the nature of Blazor Server, we cannot simply add the component to the layout or the root component (it may not work as expected). Instead, we can add the following code to the builder (`Program.cs` or `Startup.cs`) to provide the cascading parameter:

```csharp
builder.Services.AddCascadingAuthenticationState();
```

Then you can use the `AuthorizeView` component in every component that needs it.
