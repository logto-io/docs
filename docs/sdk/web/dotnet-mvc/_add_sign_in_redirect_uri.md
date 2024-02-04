Add the following URI to the `Redirect URIs` list in the Logto application details page:

```
http://<your-web-app-uri>/Callback
```

Note this is different from the redirect URI we'll use later in `AuthenticationProperties`:

```csharp
// Just for reference, we will demonstrate how to use it later
new AuthenticationProperties
{
  RedirectUri = "/"
};
```

The `RedirectUri` property is used to redirect the user back to your web application after authentication. Note it is different from the redirect URI you configured in the Logto application details page:

1. The redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed in.
2. The `RedirectUri` property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware.

The order of the actions is 1 -> 2. For clarity, let's call the redirect URI in the Logto application details page the **Logto redirect URI** and the `RedirectUri` property the **application redirect URI**.

The **Logto redirect URI** has a default value of `/Callback`, which you can leave it as is if there's no special requirement. If you want to change it, you can set the `CallbackPath` property for `LogtoOptions`:

```csharp
builder.Services.AddLogtoAuthentication(options =>
{
  // Other configurations...
  options.CallbackPath = "/SomeOtherCallbackPath";
});
```

Remember to update the value in the Logto application details page accordingly.

:::note
No need to set the **application redirect URI** in the Logto application details page.
:::
