Às vezes, você pode precisar buscar o token de acesso ou o token de ID para chamadas de API. Você pode usar o método `GetTokenAsync` para buscar os tokens:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

Não há necessidade de se preocupar com a expiração do token, o middleware de autenticação irá automaticamente atualizar os tokens quando necessário.

:::caution
Embora o middleware de autenticação atualize automaticamente os tokens, as reivindicações (Claims) no objeto do usuário não serão atualizadas devido à limitação do manipulador de autenticação OpenID Connect subjacente.
Isso pode ser resolvido assim que escrevermos nosso próprio manipulador de autenticação.
:::

Observe que o token de acesso acima é um token opaco (Opaque token) para o endpoint userinfo no OpenID Connect, que não é um token JWT. Se você especificou o recurso de API, precisa usar `LogtoParameters.Tokens.AccessTokenForResource` para buscar o token de acesso para o recurso de API:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

Este token será um token JWT com o recurso de API como o público (Audience).
