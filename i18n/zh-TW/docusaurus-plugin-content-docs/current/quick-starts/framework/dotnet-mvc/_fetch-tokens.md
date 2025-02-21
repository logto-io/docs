有時你可能需要獲取存取權杖 (Access token) 或 ID 權杖 (ID token) 以進行 API 呼叫。你可以使用 `GetTokenAsync` 方法來獲取這些權杖：

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

不需要擔心權杖過期，驗證中介軟體會在必要時自動重新整理權杖。

:::caution
雖然驗證中介軟體會自動重新整理權杖，但由於底層 OpenID Connect 驗證處理程序的限制，使用者物件中的宣告 (Claims) 不會被更新。
這個問題可以在我們編寫自己的驗證處理程序後解決。
:::

注意，上述的存取權杖 (Access token) 是用於 OpenID Connect 中 userinfo 端點的不透明權杖 (Opaque token)，並不是 JWT 權杖。如果你已指定 API 資源 (API resource)，需要使用 `LogtoParameters.Tokens.AccessTokenForResource` 來獲取該 API 資源的存取權杖：

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

此權杖將是一個以 API 資源為受眾 (Audience) 的 JWT 權杖。
