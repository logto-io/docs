在擷取權杖並取得 OIDC 設定後，請驗證以下項目：

- **簽章 (Signature)：** JWT 必須有效且由 Logto（透過 JWKS）簽署。
- **簽發者 (Issuer)：** 必須符合你的 Logto 租戶簽發者。
- **受眾 (Audience)：** 必須符合在 Logto 註冊的 API 資源標示符 (resource indicator)，或在適用時符合組織 (Organization) 上下文。
- **過期時間 (Expiration)：** 權杖不得過期。
- **權限範圍 (Permissions, scopes)：** 權杖必須包含 API／操作所需的權限範圍 (scopes)。scopes 會以空格分隔字串出現在 `scope` 宣告 (claim) 中。
- **組織 (Organization) 上下文：** 若保護的是組織層級 API 資源，需驗證 `organization_id` 宣告 (claim)。

詳情請參閱 [JSON Web Token](https://auth.wiki/jwt) 以瞭解 JWT 結構與宣告 (claims)。

### 各權限模型需檢查的項目 \{#what-to-check-for-each-permission-model}

不同權限模型下，宣告 (claims) 與驗證規則有所不同：

| 權限模型 (Permission model)                             | 受眾宣告 (`aud`)                                           | 組織宣告 (`organization_id`) | 權限範圍需檢查 (`scope`)                |
| ------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------- | --------------------------------------- |
| 全域 API 資源 (Global API resources)                    | API 資源標示符 (API resource indicator)                    | _不存在_                     | API 資源權限 (API resource permissions) |
| 組織（非 API）權限 (Organization (non-API) permissions) | `urn:logto:organization:<id>`（組織上下文於 `aud` 宣告中） | _不存在_                     | 組織權限 (Organization permissions)     |
| 組織層級 API 資源 (Organization-level API resources)    | API 資源標示符 (API resource indicator)                    | 組織 ID（必須與請求相符）    | API 資源權限 (API resource permissions) |

<small>
  對於非 API 組織權限，組織上下文由 `aud` 宣告表示
  （例如 `urn:logto:organization:abc123`）。`organization_id` 宣告僅存在於組織層級 API 資源權杖中。
</small>

:::tip
對於多租戶 API，務必同時驗證權限範圍 (scopes) 及上下文（受眾 (audience)、組織 (organization)），以確保安全。
:::
