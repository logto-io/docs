# 設定

## 環境変数 {#environment-variables}

### 使用法 {#usage}

Logto は環境変数を次の順序で処理します：

- システム環境変数
- プロジェクトルートの `.env` ファイル（[dotenv](https://github.com/motdotla/dotenv#readme) 形式に準拠）

したがって、システム環境変数は `.env` の値を上書きします。

### 変数 {#variables}

:::caution
プロジェクトルートで `npm start` を使用して Logto を実行する場合、`NODE_ENV` は常に `production` になります。
:::

デフォルト値では、`protocol` は HTTPS 設定に応じて `http` または `https` になります。

| Key                     | Default Value                        | Type                                                     | Description                                                                                                                                                                                   |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Logto が実行される環境の種類。                                                                                                                                                                |
| PORT                    | `3001`                               | `number`                                                 | Logto がリッスンするローカルポート。                                                                                                                                                          |
| ADMIN_PORT              | `3002`                               | `number`                                                 | Logto 管理コンソールがリッスンするローカルポート。                                                                                                                                            |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | 管理コンソールのポートを無効にするには `1` または `true` に設定します。`ADMIN_ENDPOINT` が設定されていない場合、管理コンソールは完全に無効になります。                                        |
| DB_URL                  | N/A                                  | `string`                                                 | Logto データベースのための [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)。                                                                             |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | 詳細は [HTTPS の有効化](#enabling-https) を参照してください。                                                                                                                                 |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | 同上。                                                                                                                                                                                        |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | 同上。                                                                                                                                                                                        |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | オンラインテストや本番用にカスタムドメインの URL を指定できます。これにより、[OIDC 発行者識別子](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) の値にも影響します。 |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | 本番用にカスタムドメインの URL を指定できます（例：`ADMIN_ENDPOINT=https://admin.domain.com`）。これにより、管理コンソールのリダイレクト URI の値にも影響します。                             |
| CASE_SENSITIVE_USERNAME | `true`                               | `boolean`                                                | ユーザー名が大文字小文字を区別するかどうかを指定します。この値を変更する際は注意が必要です。変更は既存のデータベースデータを自動的に調整しないため、手動での管理が必要です。                  |

### HTTPS の有効化 {#enabling-https}

#### Node を使用する {#using-node}

Node はネイティブに HTTPS をサポートしています。Node 経由で HTTPS を有効にするには、`HTTPS_CERT_PATH` と `HTTPS_KEY_PATH` の **両方** を提供します。

`HTTPS_CERT_PATH` は HTTPS 証明書のパスを示し、`HTTPS_KEY_PATH` は HTTPS キーのパスを示します。

#### HTTPS プロキシを使用する {#using-a-https-proxy}

もう一つの一般的な方法は、Node の前に HTTPS プロキシを配置することです（例：Nginx）。

この場合、プロキシヘッダーフィールドを信頼するかどうかを示す `TRUST_PROXY_HEADER` を `true` に設定することをお勧めします。Logto はこの値を [Koa アプリ設定](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings) に渡します。

このフィールドを設定するタイミングについては、[TLS オフロードプロキシの信頼](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) を参照してください。

## データベース設定 {#database-configs}

多くの環境変数を管理することは効率的で柔軟ではないため、一般的な設定のほとんどはデータベーステーブル `logto_configs` に保存されています。

このテーブルはシンプルなキー・バリューのストレージであり、キーは次のように列挙されます：

| Key              | Type                  | Description                                                                                                           |
| ---------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | [署名クッキーキー](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys) の文字列配列。   |
| oidc.privateKeys | <code>string[]</code> | [OIDC JWT 署名](https://openid.net/specs/openid-connect-core-1_0.html#Signing) のための秘密鍵コンテンツの文字列配列。 |

### サポートされている秘密鍵の種類 {#supported-private-key-types}

- EC (P-256, secp256k1, P-384, および P-521 曲線)
- RSA
- OKP (Ed25519, Ed448, X25519, X448 サブタイプ)
