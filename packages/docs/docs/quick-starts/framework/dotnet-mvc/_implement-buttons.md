First, add actions methods to your `Controller`, for example:

```csharp title="Controllers/HomeController.cs"
public class HomeController : Controller
{
  public IActionResult SignIn()
  {
    // This will redirect the user to the Logto sign-in page.
    return Challenge(new AuthenticationProperties { RedirectUri = "/" });
  }

  // Use the `new` keyword to avoid conflict with the `ControllerBase.SignOut` method
  new public IActionResult SignOut()
  {
    // This will clear the authentication cookie and redirect the user to the Logto sign-out page
    // to clear the Logto session as well.
    return SignOut(new AuthenticationProperties { RedirectUri = "/" });
  }
}
```

Then, add the links to your View:

```cshtml title="Views/Home/Index.cshtml"
<p>Is authenticated: @User.Identity?.IsAuthenticated</p>
@if (User.Identity?.IsAuthenticated == true) {
  <a asp-controller="Home" asp-action="SignOut">Sign out</a>
} else {
  <a asp-controller="Home" asp-action="SignIn">Sign in</a>
}
```

It will show the "Sign in" link if the user is not authenticated, and show the "Sign out" link if the user is authenticated.
