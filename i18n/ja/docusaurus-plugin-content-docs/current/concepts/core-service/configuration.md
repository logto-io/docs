# 設定

## 環境変数 {#environment-variables}

### 使い方 {#usage}

Logto は環境変数を次の順序で処理します：

- システム環境変数
- プロジェクトルートの `.env` ファイル（ [dotenv](https://github.com/motdotla/dotenv#readme) 形式に準拠）

したがって、システム環境変数は `.env` の値を上書きします。

### 変数 {#variables}

:::caution
プロジェクトルートで `npm start` を使用して Logto を実行する場合、`NODE_ENV` は常に `production` になります。
:::

デフォルト値では、`protocol` は HTTPS 設定に応じて `http` または `https` となります。

| Key                     | デフォルト値                         | 型                                                       | 説明                                                                                                                                                                                                                                                                       |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Logto が実行される環境の種類。                                                                                                                                                                                                                                             |
| PORT                    | `3001`                               | `number`                                                 | Logto がリッスンするローカルポート。                                                                                                                                                                                                                                       |
| ADMIN_PORT              | `3002`                               | `number`                                                 | Logto 管理コンソールがリッスンするローカルポート。                                                                                                                                                                                                                         |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | 管理コンソール用のポートを無効にするには `1` または `true` を設定します。`ADMIN_ENDPOINT` が未設定の場合、管理コンソールが完全に無効になります。                                                                                                                           |
| DB_URL                  | N/A                                  | `string`                                                 | Logto データベース用の [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)。                                                                                                                                                              |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | 詳細は [HTTPS の有効化](#enabling-https) を参照してください。                                                                                                                                                                                                              |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | 同上。                                                                                                                                                                                                                                                                     |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | 同上。                                                                                                                                                                                                                                                                     |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | オンラインテストや本番環境用にカスタムドメインの URL を指定できます。これにより [OIDC 発行者 (Issuer) 識別子](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) の値も影響を受けます。                                                               |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | 本番環境用にカスタムドメインの URL を指定できます（例：`ADMIN_ENDPOINT=https://admin.domain.com`）。これにより管理コンソールのリダイレクト URI の値も影響を受けます。                                                                                                      |
| CASE_SENSITIVE_USERNAME | `true`                               | `boolean`                                                | ユーザー名が大文字小文字を区別するかどうかを指定します。この値を変更する際は注意してください。既存のデータベースデータは自動的に調整されないため、手動で管理する必要があります。                                                                                           |
| SECRET_VAULT_KEK        | `undefined`                          | `string`                                                 | [Secret Vault](/secret-vault) でデータ暗号化キー (DEK) を暗号化するためのキー暗号化キー (KEK)。Secret Vault を正しく機能させるために必須です。base64 エンコードされた文字列である必要があります。AES-256（32 バイト）推奨。例：`crypto.randomBytes(32).toString('base64')` |

### HTTPS の有効化 {#enabling-https}

#### Node を使用する場合 {#using-node}

Node はネイティブで HTTPS をサポートしています。Node で HTTPS を有効にするには、`HTTPS_CERT_PATH` と `HTTPS_KEY_PATH` の **両方** を指定してください。

`HTTPS_CERT_PATH` は HTTPS 証明書のパス、`HTTPS_KEY_PATH` は HTTPS キーのパスを意味します。

#### HTTPS プロキシを使用する場合 {#using-a-https-proxy}

もう一つの一般的な方法は、Node の前段に HTTPS プロキシ（例：Nginx）を配置することです。

この場合、`TRUST_PROXY_HEADER` を `true` に設定することを推奨します。これはプロキシヘッダーフィールドを信頼するかどうかを示します。Logto はこの値を [Koa アプリ設定](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings) に渡します。

このフィールドを設定するタイミングについては [TLS オフロードプロキシの信頼](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) を参照してください。

## データベース設定 {#database-configs}

環境変数が多すぎると管理が非効率かつ柔軟性に欠けるため、一般的な設定の多くはデータベーステーブル `logto_configs` に保存されています。

このテーブルはシンプルなキー・バリュー型ストレージであり、キーは次のように列挙可能です：

| Key              | 型                    | 説明                                                                                                                |
| ---------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | [署名クッキーキー](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys) の文字列配列。 |
| oidc.privateKeys | <code>string[]</code> | [OIDC JWT 署名](https://openid.net/specs/openid-connect-core-1_0.html#Signing) 用の秘密鍵内容の文字列配列。         |

### サポートされている秘密鍵タイプ {#supported-private-key-types}

- EC（P-256、secp256k1、P-384、P-521 曲線）
- RSA
- OKP（Ed25519、Ed448、X25519、X448 サブタイプ）
