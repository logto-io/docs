A veces puede que necesites obtener el token de acceso (Access token) o el token de ID (ID token) para llamadas a la API. Puedes usar el método `GetTokenAsync` para obtener los tokens:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

No necesitas preocuparte por la expiración del token, el middleware de autenticación actualizará automáticamente los tokens cuando sea necesario.

:::caution
Aunque el middleware de autenticación actualizará automáticamente los tokens, los reclamos (claims) en el objeto de usuario no se actualizarán debido a la limitación del controlador de autenticación OpenID Connect subyacente.
Esto se podrá resolver una vez que escribamos nuestro propio controlador de autenticación.
:::

Ten en cuenta que el token de acceso anterior es un token opaco (Opaque token) para el endpoint userinfo en OpenID Connect, que no es un JWT. Si has especificado el recurso de API (API resource), necesitas usar `LogtoParameters.Tokens.AccessTokenForResource` para obtener el token de acceso para el recurso de API:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

Este token será un JWT con el recurso de API (API resource) como audiencia (Audience).
