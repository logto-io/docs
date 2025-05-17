A veces puede que necesites obtener el token de acceso o el token de ID para llamadas de API. Puedes usar el método `GetTokenAsync` para obtener los tokens:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

No necesitas preocuparte por la expiración del token, el middleware de autenticación actualizará automáticamente los tokens cuando sea necesario.

:::caution
Aunque el middleware de autenticación actualizará automáticamente los tokens, los reclamos en el objeto de usuario no se actualizarán debido a la limitación del controlador de autenticación subyacente de OpenID Connect.
Esto se puede resolver una vez que escribamos nuestro propio controlador de autenticación.
:::

Ten en cuenta que el token de acceso mencionado es un token opaco para el endpoint de userinfo en OpenID Connect, que no es un token JWT. Si has especificado el recurso de API, necesitas usar `LogtoParameters.Tokens.AccessTokenForResource` para obtener el token de acceso para el recurso de API:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

Este token será un token JWT con el recurso de API como la audiencia.
