# 設定

## 環境變數 {#environment-variables}

### 用法 {#usage}

Logto 依照以下順序處理環境變數：

- 系統環境變數
- 專案根目錄下的 `.env` 檔案，格式遵循 [dotenv](https://github.com/motdotla/dotenv#readme)

因此，系統環境變數會覆蓋 `.env` 中的值。

### 變數 {#variables}

:::caution
如果你在專案根目錄下透過 `npm start` 執行 Logto，`NODE_ENV` 會永遠是 `production`。
:::

在預設值中，`protocol` 會根據你的 HTTPS 設定為 `http` 或 `https`。

| Key                                    | Default Value                        | Type                                                     | Description                                                                                                                                                                                                                                                            |
| -------------------------------------- | ------------------------------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                               | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Logto 執行時所處的環境類型。                                                                                                                                                                                                                                           |
| PORT                                   | `3001`                               | `number`                                                 | Logto 監聽的本地埠號。                                                                                                                                                                                                                                                 |
| ADMIN_PORT                             | `3002`                               | `number`                                                 | Logto 管理主控台監聽的本地埠號。                                                                                                                                                                                                                                       |
| ADMIN_DISABLE_LOCALHOST                | N/A                                  | <code>string &#124; boolean &#124; number</code>         | 設為 `1` 或 `true` 可停用管理主控台的埠號。若未設定 `ADMIN_ENDPOINT`，將完全停用管理主控台。                                                                                                                                                                           |
| DB_URL                                 | N/A                                  | `string`                                                 | Logto 資料庫的 [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)。                                                                                                                                                                  |
| DATABASE_STATEMENT_TIMEOUT             | N/A                                  | `string`                                                 | （v1.36.0+）PostgreSQL `statement_timeout`，單位為毫秒。請使用數字字串（如 `5000`）設定，或設為 `DISABLE_TIMEOUT` 以略過啟動參數（建議用於 PgBouncer / RDS Proxy）。若未設定或無效，預設為 60000 ms。                                                                  |
| HTTPS_CERT_PATH                        | `undefined`                          | <code>string &#124; undefined</code>                     | 詳情請參閱 [啟用 HTTPS](#enabling-https)。                                                                                                                                                                                                                             |
| HTTPS_KEY_PATH                         | `undefined`                          | <code>string &#124; undefined</code>                     | 同上。                                                                                                                                                                                                                                                                 |
| TRUST_PROXY_HEADER                     | `false`                              | `boolean`                                                | 同上。                                                                                                                                                                                                                                                                 |
| ENDPOINT                               | `'protocol://localhost:$PORT'`       | `string`                                                 | 你可以指定自訂網域的 URL 以供線上測試或正式環境使用。這也會影響 [OIDC 簽發者識別碼 (Issuer Identifier)](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) 的值。                                                                                 |
| ADMIN_ENDPOINT                         | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | 你可以為正式環境指定自訂網域的 URL（例如：`ADMIN_ENDPOINT=https://admin.domain.com`）。這也會影響管理主控台重新導向 URI 的值。                                                                                                                                         |
| CASE_SENSITIVE_USERNAME                | `true`                               | `boolean`                                                | 指定使用者名稱是否區分大小寫。修改此值時請謹慎，變更不會自動調整現有資料庫資料，需手動管理。                                                                                                                                                                           |
| SECRET_VAULT_KEK                       | `undefined`                          | `string`                                                 | 用於加密 [Secret Vault](/secret-vault) 中資料加密金鑰（DEK, Data Encryption Key）的金鑰加密金鑰（KEK, Key Encryption Key）。Secret Vault 正常運作必須設定此值。必須為 base64 編碼字串。建議使用 AES-256（32 bytes）。範例：`crypto.randomBytes(32).toString('base64')` |
| PRIVATE_KEY_ROTATION_GRACE_PERIOD      | `0`                                  | `number`                                                 | OIDC 私鑰輪替的緩衝期（秒）。設為正值時，新私鑰會先以 `Next` 狀態建立，並於緩衝期後才生效。                                                                                                                                                                            |
| OIDC_PROVIDER_SSRF_PROTECTION_DISABLED | `false`                              | `boolean`                                                | 僅限自架設。僅當需要讓受信任的 OIDC 依賴方端點解析到私有網路位址時設為 `true`。詳見 [OIDC 提供者 SSRF 保護](#oidc-provider-ssrf-protection)。                                                                                                                          |

### OIDC 提供者 SSRF 保護 {#oidc-provider-ssrf-protection}

Logto 預設保護 OIDC 提供者的對外請求，防止伺服器端請求偽造（SSRF, Server-Side Request Forgery）。對特殊用途位址（如 loopback 與私有網路位址）的請求將被阻擋。此保護涵蓋依賴方端點，例如 back-channel logout URI、`jwks_uri`、`sector_identifier_uri`，以及為 [動態應用程式](/integrate-logto/third-party-applications/dynamic-apps) 取得的 client ID metadata 文件。

若你的自架設部署確實需要存取私有網路上的受信任依賴方端點，請將 `OIDC_PROVIDER_SSRF_PROTECTION_DISABLED=true`，並重啟所有 Logto 執行個體。

:::caution

此設定會停用所有 OIDC 提供者對外請求的 SSRF 保護，而非僅針對單一端點。僅在所有設定的依賴方端點皆可信，且你的網路控管能防止存取敏感內部服務時才應停用。

[動態應用程式](/integrate-logto/third-party-applications/dynamic-apps) 在此保護關閉時無法啟用，因其會從客戶端自行提供的 URL 取得 metadata 文件。

:::

### 啟用 HTTPS {#enabling-https}

#### 使用 Node {#using-node}

Node 原生支援 HTTPS。提供 **BOTH（兩者）** `HTTPS_CERT_PATH` 與 `HTTPS_KEY_PATH` 即可透過 Node 啟用 HTTPS。

`HTTPS_CERT_PATH` 指向你的 HTTPS 憑證路徑，`HTTPS_KEY_PATH` 指向你的 HTTPS 金鑰路徑。

#### 使用 HTTPS 代理 {#using-a-https-proxy}

另一常見做法是在 Node 前方設置 HTTPS 代理（如 Nginx）。

此情境下，建議將 `TRUST_PROXY_HEADER` 設為 `true`，表示信任代理標頭欄位。Logto 會將此值傳遞給 [Koa app 設定](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings)。

何時需要設定此欄位，請參閱 [信任 TLS 卸載代理](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies)。

## 資料庫設定 {#database-configs}

管理過多環境變數既沒效率又不靈活，因此我們將大多數一般設定存放於資料庫表格 `logto_configs`。

該表格為簡單的鍵值儲存，key 可列舉如下：

| Key              | Type                  | Description                                                                                                       |
| ---------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | [簽署 cookie 金鑰](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys) 的字串陣列。 |
| oidc.privateKeys | <code>string[]</code> | 用於 [OIDC JWT 簽署](https://openid.net/specs/openid-connect-core-1_0.html#Signing) 的私鑰內容字串陣列。          |

### 支援的私鑰類型 {#supported-private-key-types}

- EC（P-256、secp256k1、P-384、P-521 曲線）
- RSA
- OKP（Ed25519、Ed448、X25519、X448 子類型）
