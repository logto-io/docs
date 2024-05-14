### Add script references

Include `Blorc.Core/injector.js` the `index.html` file:

```html
<head>
  <!-- ... -->
  <script src="_content/Blorc.Core/injector.js"></script>
  <!-- ... -->
</head>
```

### Register services

Add the following code to the `Program.cs` file:

```csharp
using Blorc.OpenIdConnect;
using Blorc.Services;

builder.Services.AddBlorcCore();
builder.Services.AddAuthorizationCore();
builder.Services.AddBlorcOpenIdConnect(
    options =>
    {
        builder.Configuration.Bind("IdentityServer", options);
    });

var webAssemblyHost = builder.Build();

await webAssemblyHost
    .ConfigureDocumentAsync(async documentService =>
    {
        await documentService.InjectBlorcCoreJsAsync();
        await documentService.InjectOpenIdConnectAsync();
    });

await webAssemblyHost.RunAsync();
```

:::info
There's no need to use the `Microsoft.AspNetCore.Components.WebAssembly.Authentication` package. The `Blorc.OpenIdConnect` package will take care of the authentication process.
:::

### Configure application

Add the following code to the `appsettings.json` file:

```json5
{
  // ...
  IdentityServer: {
    Authority: 'https://<your-logto-endpoint>/oidc',
    ClientId: '<your-logto-app-id>',
    PostLogoutRedirectUri: '<your-app-url>',
    RedirectUri: '<your-app-url>',
    ResponseType: 'code',
    Scope: 'openid profile', // Add more scopes if needed
  },
}
```

Remember to add the `RedirectUri` and `PostLogoutRedirectUri` to the list of allowed redirect URIs in the Logto application settings. They are both the URL of your WASM application.
