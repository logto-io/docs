Logto が発行したトークンを検証するには、次の値が必要です：

- JSON Web Key Set (JWKS) URI：JWT 署名を検証するために使用される Logto の公開鍵の URL。
- 発行者 (Issuer)：期待される発行者値（Logto の OIDC URL）。

まず、Logto テナントのエンドポイントを見つけます。これはさまざまな場所で確認できます：

- Logto コンソールの **設定** → **ドメイン** で確認できます。
- Logto で設定した任意のアプリケーション設定内の **設定** → **エンドポイント & 資格情報** で確認できます。

### OpenID Connect ディスカバリーエンドポイントから取得する \{#fetch-from-openid-connect-discovery-endpoint}

これらの値は、Logto の OpenID Connect ディスカバリーエンドポイントから取得できます：

```
https://<your-logto-endpoint>/oidc/.well-known/openid-configuration
```

以下はレスポンス例です（他のフィールドは省略しています）：

```json
{
  "jwks_uri": "https://your-tenant.logto.app/oidc/jwks",
  "issuer": "https://your-tenant.logto.app/oidc"
}
```

### コード内にハードコーディングする（推奨されません） \{#hardcode-in-your-code-not-recommended}

Logto では JWKS URI や発行者 (Issuer) のカスタマイズができないため、これらの値をコード内にハードコーディングすることも可能です。ただし、将来的に設定が変更された場合のメンテナンス負荷が増加する可能性があるため、本番アプリケーションでは推奨されません。

- JWKS URI：`https://<your-logto-endpoint>/oidc/jwks`
- 発行者 (Issuer)：`https://<your-logto-endpoint>/oidc`
