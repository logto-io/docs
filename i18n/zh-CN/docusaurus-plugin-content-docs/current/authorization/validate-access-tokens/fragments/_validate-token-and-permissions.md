在提取令牌并获取 OIDC 配置后，请验证以下内容：

- **签名：** JWT 必须有效且由 Logto（通过 JWKS）签名。
- **发行者 (Issuer)：** 必须与你的 Logto 租户的发行者 (Issuer) 匹配。
- **受众 (Audience)：** 必须与你在 Logto 中注册的 API 的资源指示器 (resource indicator) 匹配，或在适用时匹配组织 (organization) 上下文。
- **过期时间：** 令牌必须未过期。
- **权限 (Scopes)：** 令牌必须包含你的 API / 操作所需的权限 (scopes)。权限 (scopes) 是 `scope` 声明中的以空格分隔的字符串。
- **组织 (Organization) 上下文：** 如果保护的是组织级 API 资源，请验证 `organization_id` 声明。

参见 [JSON Web Token](https://auth.wiki/jwt) 以了解更多关于 JWT 结构和声明 (Claims) 的信息。

### 针对每种权限 (Permission) 模型需要检查什么 \{#what-to-check-for-each-permission-model}

不同的权限 (Permission) 模型，其声明 (Claims) 和验证规则也不同：

| 权限 (Permission) 模型                          | 受众 (Audience) 声明 (`aud`)                               | 组织 (Organization) 声明 (`organization_id`) | 需要检查的权限 (Scopes) (`scope`) |
| ----------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------- | --------------------------------- |
| 全局 API 资源 (API resources)                   | API 资源指示器 (resource indicator)                        | _不存在_                                     | API 资源权限 (permissions)        |
| 组织 (Organization)（非 API）权限 (Permissions) | `urn:logto:organization:<id>`（组织上下文在 `aud` 声明中） | _不存在_                                     | 组织权限 (permissions)            |
| 组织级 API 资源 (API resources)                 | API 资源指示器 (resource indicator)                        | 组织 ID（必须与请求匹配）                    | API 资源权限 (permissions)        |

<small>
  对于非 API 的组织 (Organization) 权限 (Permissions)，组织上下文由 `aud` 声明表示
  （例如，`urn:logto:organization:abc123`）。`organization_id` 声明仅在组织级 API 资源令牌中存在。
</small>

:::tip
对于安全的多租户 API，请始终同时验证权限 (scopes) 和上下文（受众 (audience)、组织 (organization)）。
:::
