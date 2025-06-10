你需要以下數值來驗證 Logto 發行的權杖：

- JSON Web Key Set (JWKS) URI：Logto 公鑰的網址，用於驗證 JWT 簽章。
- 簽發者 (Issuer)：預期的簽發者值（Logto 的 OIDC URL）。

首先，找到你的 Logto 租戶端點。你可以在多個地方找到：

- 在 Logto Console，**設定** → **網域**。
- 在你於 Logto 配置過的任何應用程式設定中，**設定** → **端點與憑證**。

### 從 OpenID Connect 探索端點取得 \{#fetch-from-openid-connect-discovery-endpoint}

這些數值可以從 Logto 的 OpenID Connect 探索端點取得：

```
https://<your-logto-endpoint>/oidc/.well-known/openid-configuration
```

以下為範例回應（為簡潔省略其他欄位）：

```json
{
  "jwks_uri": "https://your-tenant.logto.app/oidc/jwks",
  "issuer": "https://your-tenant.logto.app/oidc"
}
```

### 在程式碼中硬編碼（不建議） \{#hardcode-in-your-code-not-recommended}

由於 Logto 不允許自訂 JWKS URI 或簽發者 (Issuer)，你可以將這些數值硬編碼在程式碼中。但這不建議用於正式環境，因為若未來有設定變更，可能會增加維護負擔。

- JWKS URI：`https://<your-logto-endpoint>/oidc/jwks`
- 簽發者 (Issuer)：`https://<your-logto-endpoint>/oidc`
