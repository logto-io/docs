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

| Key                        | 預設值                               | Type                                                     | 說明                                                                                                                                                                                                                      |
| -------------------------- | ------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                   | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Logto 執行時所處的環境類型。                                                                                                                                                                                              |
| PORT                       | `3001`                               | `number`                                                 | Logto 監聽的本地埠號。                                                                                                                                                                                                    |
| ADMIN_PORT                 | `3002`                               | `number`                                                 | Logto 管理主控台監聽的本地埠號。                                                                                                                                                                                          |
| ADMIN_DISABLE_LOCALHOST    | N/A                                  | <code>string &#124; boolean &#124; number</code>         | 設為 `1` 或 `true` 可停用管理主控台的埠。若未設定 `ADMIN_ENDPOINT`，將完全停用管理主控台。                                                                                                                                |
| DB_URL                     | N/A                                  | `string`                                                 | Logto 資料庫的 [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)。                                                                                                                     |
| DATABASE_STATEMENT_TIMEOUT | N/A                                  | `string`                                                 | （v1.36.0+）PostgreSQL `statement_timeout`，單位為毫秒。請使用數字字串（如 `5000`）設定，或設為 `DISABLE_TIMEOUT` 以略過啟動參數（建議用於 PgBouncer / RDS Proxy）。若未設定或無效，預設為 60000 ms。                     |
| HTTPS_CERT_PATH            | `undefined`                          | <code>string &#124; undefined</code>                     | 詳情請參閱 [啟用 HTTPS](#enabling-https)。                                                                                                                                                                                |
| HTTPS_KEY_PATH             | `undefined`                          | <code>string &#124; undefined</code>                     | 同上。                                                                                                                                                                                                                    |
| TRUST_PROXY_HEADER         | `false`                              | `boolean`                                                | 同上。                                                                                                                                                                                                                    |
| ENDPOINT                   | `'protocol://localhost:$PORT'`       | `string`                                                 | 可指定自訂網域的 URL 以供線上測試或正式環境使用。這也會影響 [OIDC 簽發者識別碼 (Issuer Identifier)](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) 的值。                                        |
| ADMIN_ENDPOINT             | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | 可指定正式環境下自訂網域的 URL（如 `ADMIN_ENDPOINT=https://admin.domain.com`）。這也會影響管理主控台重新導向 URI 的值。                                                                                                   |
| CASE_SENSITIVE_USERNAME    | `true`                               | `boolean`                                                | 指定使用者名稱是否區分大小寫。修改此值時請小心；變更不會自動調整現有資料庫資料，需手動管理。                                                                                                                              |
| SECRET_VAULT_KEK           | `undefined`                          | `string`                                                 | 用於加密 [Secret Vault](/secret-vault) 中資料加密金鑰（DEK）的金鑰加密金鑰（KEK）。Secret Vault 正常運作必須設定。必須為 base64 編碼字串。建議使用 AES-256（32 bytes）。範例：`crypto.randomBytes(32).toString('base64')` |

### 啟用 HTTPS {#enabling-https}

#### 使用 Node {#using-node}

Node 原生支援 HTTPS。提供 **BOTH（兩者）** `HTTPS_CERT_PATH` 與 `HTTPS_KEY_PATH` 即可透過 Node 啟用 HTTPS。

`HTTPS_CERT_PATH` 表示你的 HTTPS 憑證路徑，`HTTPS_KEY_PATH` 表示你的 HTTPS 金鑰路徑。

#### 使用 HTTPS 代理 {#using-a-https-proxy}

另一常見做法是在 Node 前方設置 HTTPS 代理（如 Nginx）。

此時，你可能需要將 `TRUST_PROXY_HEADER` 設為 `true`，表示是否信任代理標頭欄位。Logto 會將此值傳遞給 [Koa 應用程式設定](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings)。

何時需要設定此欄位，請參閱 [信任 TLS 卸載代理](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies)。

## 資料庫設定 {#database-configs}

管理過多環境變數既沒效率又不靈活，因此我們大多數一般設定都存放於資料庫表格 `logto_configs`。

該表格為簡單的鍵值儲存，key 可列舉如下：

| Key              | Type                  | 說明                                                                                                              |
| ---------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | [簽署 Cookie 金鑰](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys) 的字串陣列。 |
| oidc.privateKeys | <code>string[]</code> | 用於 [OIDC JWT 簽署](https://openid.net/specs/openid-connect-core-1_0.html#Signing) 的私鑰內容字串陣列。          |

### 支援的私鑰類型 {#supported-private-key-types}

- EC（P-256、secp256k1、P-384、P-521 曲線）
- RSA
- OKP（Ed25519、Ed448、X25519、X448 子類型）
