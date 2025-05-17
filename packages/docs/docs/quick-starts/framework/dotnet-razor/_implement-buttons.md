First, add the handler methods to your `PageModel`, for example:

```csharp title="Pages/Index.cshtml.cs"
public class IndexModel : PageModel
{
  public async Task OnPostSignInAsync()
  {
    await HttpContext.ChallengeAsync(new AuthenticationProperties
    {
      RedirectUri = "/"
    });
  }

  public async Task OnPostSignOutAsync()
  {
    await HttpContext.SignOutAsync(new AuthenticationProperties
    {
      RedirectUri = "/"
    });
  }
}
```

Then, add the buttons to your Razor page:

```cshtml title="Pages/Index.cshtml"
<p>Is authenticated: @User.Identity?.IsAuthenticated</p>
<form method="post">
  @if (User.Identity?.IsAuthenticated == true) {
    <button type="submit" asp-page-handler="SignOut">Sign out</button>
  } else {
    <button type="submit" asp-page-handler="SignIn">Sign in</button>
  }
</form>
```

It will show the "Sign in" button if the user is not authenticated, and show the "Sign out" button if the user is authenticated.
