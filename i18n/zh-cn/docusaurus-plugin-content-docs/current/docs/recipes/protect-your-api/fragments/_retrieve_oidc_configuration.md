### 获取 Logto 的 OIDC 配置

你将需要一个 JWK 公钥集和令牌颁发者标识来验证所收到的 JWS 令牌的签名及来源的有效性。所有最新的 Logto 公共权限配置信息都可以在 `https://<your-logto-domain>/oidc/.well-known/openid-configuration` 中找到。

例如调用`https://logto.dev/oidc/.well-known/openid-configuration`。不可以在返回正文中找到以下两个字段：

```json
{
  "jwks_uri": "https://logto.dev/oidc/jwks",
  "issuer": "https://logto.dev/oidc"
}
```
