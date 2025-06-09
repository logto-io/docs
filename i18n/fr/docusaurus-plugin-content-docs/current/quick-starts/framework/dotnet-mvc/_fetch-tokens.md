Parfois, vous pouvez avoir besoin de récupérer le jeton d’accès (Access token) ou le jeton d’identifiant (ID token) pour des appels API. Vous pouvez utiliser la méthode `GetTokenAsync` pour récupérer les jetons :

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

Pas besoin de vous soucier de l’expiration du jeton, le middleware d’authentification actualisera automatiquement les jetons lorsque cela sera nécessaire.

:::caution
Bien que le middleware d’authentification actualise automatiquement les jetons, les revendications (Claims) dans l’objet utilisateur ne seront pas mises à jour en raison de la limitation du gestionnaire d’authentification OpenID Connect sous-jacent.
Cela pourra être résolu une fois que nous aurons écrit notre propre gestionnaire d’authentification.
:::

Notez que le jeton d’accès ci-dessus est un jeton opaque (Opaque token) pour l’endpoint userinfo dans OpenID Connect, qui n’est pas un JWT. Si vous avez spécifié la ressource API, vous devez utiliser `LogtoParameters.Tokens.AccessTokenForResource` pour récupérer le jeton d’accès pour la ressource API :

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

Ce jeton sera un JWT avec la ressource API comme audience (Audience).
