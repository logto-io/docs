Иногда вам может понадобиться получить токен доступа или ID токен для вызовов API. Вы можете использовать метод `GetTokenAsync` для получения токенов:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

Не беспокойтесь об истечении срока действия токена, middleware аутентификации автоматически обновит токены при необходимости.

:::caution
Хотя middleware аутентификации автоматически обновит токены, утверждения в объекте пользователя не будут обновлены из-за ограничения базового обработчика аутентификации OpenID Connect.
Это можно будет решить, как только мы напишем собственный обработчик аутентификации.
:::

Обратите внимание, что токен доступа выше является непрозрачным токеном для конечной точки userinfo в OpenID Connect, который не является JWT токеном. Если вы указали ресурс API, вам нужно использовать `LogtoParameters.Tokens.AccessTokenForResource` для получения токена доступа для ресурса API:

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

Этот токен будет JWT токеном с ресурсом API в качестве аудитории.
