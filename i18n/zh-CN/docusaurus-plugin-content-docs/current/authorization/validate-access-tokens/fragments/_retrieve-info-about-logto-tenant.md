你需要以下数值来验证 Logto 签发的令牌：

- JSON Web Key Set (JWKS) URI：Logto 公钥的 URL，用于验证 JWT 签名。
- 发行者 (Issuer)：期望的发行者 (Issuer) 值（Logto 的 OIDC URL）。

首先，找到你的 Logto 租户的端点。你可以在多个地方找到它：

- 在 Logto 控制台的 **设置** → **域名** 下。
- 在你在 Logto 配置的任何应用程序设置中，**设置** → **端点与凭证**。

### 从 OpenID Connect 发现端点获取 \{#fetch-from-openid-connect-discovery-endpoint}

这些数值可以从 Logto 的 OpenID Connect 发现端点获取：

```
https://<your-logto-endpoint>/oidc/.well-known/openid-configuration
```

以下是一个示例响应（为简洁省略了其他字段）：

```json
{
  "jwks_uri": "https://your-tenant.logto.app/oidc/jwks",
  "issuer": "https://your-tenant.logto.app/oidc"
}
```

### 在代码中硬编码（不推荐） \{#hardcode-in-your-code-not-recommended}

由于 Logto 不允许自定义 JWKS URI 或发行者 (Issuer)，你可以在代码中硬编码这些数值。但对于生产环境的应用程序，这并不推荐，因为如果将来某些配置发生变化，可能会增加维护成本。

- JWKS URI: `https://<your-logto-endpoint>/oidc/jwks`
- 发行者 (Issuer): `https://<your-logto-endpoint>/oidc`
