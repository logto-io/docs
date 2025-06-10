場合によっては、API コールのためにアクセス トークン (Access token) や ID トークン (ID token) を取得する必要があります。`GetTokenAsync` メソッドを使用してトークンを取得できます：

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

トークンの有効期限について心配する必要はありません。認証 (Authentication) ミドルウェアが必要に応じて自動的にトークンをリフレッシュします。

:::caution
認証 (Authentication) ミドルウェアはトークンを自動的にリフレッシュしますが、ユーザーオブジェクト内のクレーム (Claims) は、基盤となる OpenID Connect 認証 (Authentication) ハンドラーの制限により更新されません。
独自の認証 (Authentication) ハンドラーを実装すれば、この問題は解決できます。
:::

上記のアクセス トークン (Access token) は、OpenID Connect の userinfo エンドポイント用の不透明トークン (Opaque token) であり、JWT ではありません。API リソースを指定している場合は、`LogtoParameters.Tokens.AccessTokenForResource` を使用して API リソース用のアクセス トークン (Access token) を取得する必要があります：

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

このトークンは、API リソースがオーディエンス (Audience) となる JWT になります。
