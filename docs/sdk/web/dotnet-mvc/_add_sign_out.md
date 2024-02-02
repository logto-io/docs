Add the following URI to the `Post sign-out redirect URIs` list in the Logto application details page:

```
http://<your-web-app-uri>/SignedOutCallback
```

To sign-out with Logto, you can use the `SignOutAsync` method:

```csharp
await HttpContext.SignOutAsync(new AuthenticationProperties
{
  RedirectUri = "/"
});
```

The `SignOutAsync` method will clear the authentication cookie and redirect the user to the Logto sign-out page.

The `RedirectUri` property is used to redirect the user back to your web application after sign-out. Note it is different from the post sign-out redirect URI you configured in the Logto application details page:

1. The post sign-out redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed out.
2. The `RedirectUri` property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware.

The order of the actions is 1 -> 2. For clarity, let's call the post sign-out redirect URI in the Logto application details page the **Logto post sign-out redirect URI** and the `RedirectUri` property the **application post sign-out redirect URI**.

The **Logto post sign-out redirect URI** has a default value of `/SignedOutCallback`, which you can leave it as is if there's no special requirement. If you want to change it, you can set the `SignedOutCallbackPath` property for `LogtoOptions`:

```csharp
builder.Services.AddLogtoAuthentication(options =>
{
  options.SignedOutCallbackPath = "/SomeOtherSignedOutCallbackPath";
});
```

Remember to update the value in the Logto application details page accordingly.

:::note
No need to set the **application post sign-out redirect URI** in the Logto application details page.
:::
