Às vezes, pode ser necessário obter o token de acesso (Access token) ou o token de ID (ID token) para chamadas de API. Você pode usar o método `GetTokenAsync` para buscar os tokens:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

Não é necessário se preocupar com a expiração do token, o middleware de autenticação irá atualizar automaticamente os tokens quando necessário.

:::caution
Embora o middleware de autenticação atualize automaticamente os tokens, as reivindicações (Claims) no objeto do usuário não serão atualizadas devido à limitação do manipulador de autenticação OpenID Connect subjacente.
Isso pode ser resolvido assim que escrevermos nosso próprio manipulador de autenticação.
:::

Observe que o token de acesso acima é um token opaco (Opaque token) para o endpoint userinfo no OpenID Connect, que não é um JWT. Se você especificou o recurso de API (API resource), é necessário usar `LogtoParameters.Tokens.AccessTokenForResource` para buscar o token de acesso para o recurso de API:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

Esse token será um JWT com o recurso de API (API resource) como público (Audience).
