API 呼び出しのためにアクセス トークンまたは ID トークンを取得する必要がある場合があります。`GetTokenAsync` メソッドを使用してトークンを取得できます：

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);
var idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);
```

トークンの有効期限について心配する必要はありません。認証 (Authentication) ミドルウェアが必要に応じてトークンを自動的に更新します。

:::caution
認証 (Authentication) ミドルウェアはトークンを自動的に更新しますが、ユーザーオブジェクト内のクレームは、基盤となる OpenID Connect 認証 (Authentication) ハンドラーの制限により更新されません。
これは、独自の認証 (Authentication) ハンドラーを作成することで解決できます。
:::

上記のアクセス トークンは、OpenID Connect の userinfo エンドポイント用の不透明トークンであり、JWT トークンではありません。API リソースを指定した場合、API リソース用のアクセス トークンを取得するには `LogtoParameters.Tokens.AccessTokenForResource` を使用する必要があります：

```csharp
var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);
```

このトークンは、API リソースをオーディエンスとする JWT トークンになります。
