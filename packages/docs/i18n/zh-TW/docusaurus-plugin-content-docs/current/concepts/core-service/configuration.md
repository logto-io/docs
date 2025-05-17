# 配置

## 環境變數 {#environment-variables}

### 使用方法 {#usage}

Logto 依照以下順序處理環境變數：

- 系統環境變數
- 專案根目錄中的 `.env` 文件，符合 [dotenv](https://github.com/motdotla/dotenv#readme) 格式

因此，系統環境變數將覆蓋 `.env` 中的值。

### 變數 {#variables}

:::caution
如果你在專案根目錄中透過 `npm start` 運行 Logto，`NODE_ENV` 將始終為 `production`。
:::

在預設值中，`protocol` 將根據你的 HTTPS 配置為 `http` 或 `https`。

| Key                     | Default Value                        | Type                                                     | Description                                                                                                                                                   |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Logto 運行的環境類型。                                                                                                                                        |
| PORT                    | `3001`                               | `number`                                                 | Logto 監聽的本地端口。                                                                                                                                        |
| ADMIN_PORT              | `3002`                               | `number`                                                 | Logto 管理控制台監聽的本地端口。                                                                                                                              |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | 設置為 `1` 或 `true` 以禁用管理控制台的端口。若未設置 `ADMIN_ENDPOINT`，將完全禁用管理控制台。                                                                |
| DB_URL                  | N/A                                  | `string`                                                 | Logto 資料庫的 [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)。                                                         |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | 詳情請參閱 [啟用 HTTPS](#enabling-https)。                                                                                                                    |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | 同上。                                                                                                                                                        |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | 同上。                                                                                                                                                        |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | 你可以為線上測試或生產環境指定自定義域名的 URL。這也會影響 [OIDC 簽發者識別符](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) 的值。 |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | 你可以為生產環境指定自定義域名的 URL（例如 `ADMIN_ENDPOINT=https://admin.domain.com`）。這也會影響管理控制台重定向 URI 的值。                                 |
| CASE_SENSITIVE_USERNAME | `true`                               | `boolean`                                                | 指定使用者名稱是否區分大小寫。修改此值時請謹慎；更改不會自動調整現有資料庫數據，需要手動管理。                                                                |

### 啟用 HTTPS {#enabling-https}

#### 使用 Node {#using-node}

Node 原生支持 HTTPS。提供 **BOTH** `HTTPS_CERT_PATH` 和 `HTTPS_KEY_PATH` 以通過 Node 啟用 HTTPS。

`HTTPS_CERT_PATH` 表示你的 HTTPS 證書路徑，而 `HTTPS_KEY_PATH` 表示你的 HTTPS 金鑰路徑。

#### 使用 HTTPS 代理 {#using-a-https-proxy}

另一種常見做法是在 Node 前面設置一個 HTTPS 代理（例如 Nginx）。

在這種情況下，你可能需要將 `TRUST_PROXY_HEADER` 設置為 `true`，以指示是否應信任代理標頭字段。Logto 將把該值傳遞給 [Koa 應用程式設置](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings)。

請參閱 [信任 TLS 卸載代理](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) 以了解何時配置此字段。

## 資料庫配置 {#database-configs}

管理過多的環境變數既不高效也不靈活，因此我們的大多數一般配置都存儲在資料庫表 `logto_configs` 中。

該表是一個簡單的鍵值存儲，鍵可枚舉如下：

| Key              | Type                  | Description                                                                                                     |
| ---------------- | --------------------- | --------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | [簽名 Cookie 鍵](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys) 的字串數組。 |
| oidc.privateKeys | <code>string[]</code> | 用於 [OIDC JWT 簽名](https://openid.net/specs/openid-connect-core-1_0.html#Signing) 的私鑰內容字串數組。        |

### 支援的私鑰類型 {#supported-private-key-types}

- EC (P-256, secp256k1, P-384, 和 P-521 曲線)
- RSA
- OKP (Ed25519, Ed448, X25519, X448 子類型)
