# 配置

## 环境变量 {#environment-variables}

### 用法 {#usage}

Logto 按以下顺序处理环境变量：

- 系统环境变量
- 项目根目录下符合 [dotenv](https://github.com/motdotla/dotenv#readme) 格式的 `.env` 文件

因此，系统环境变量会覆盖 `.env` 文件中的值。

### 变量 {#variables}

:::caution
如果你在项目根目录通过 `npm start` 运行 Logto，`NODE_ENV` 总是 `production`。
:::

在默认值中，`protocol` 会根据你的 HTTPS 配置为 `http` 或 `https`。

| Key                     | 默认值                               | 类型                                                     | 描述                                                                                                                                                                                                                      |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Logto 运行的环境类型。                                                                                                                                                                                                    |
| PORT                    | `3001`                               | `number`                                                 | Logto 监听的本地端口。                                                                                                                                                                                                    |
| ADMIN_PORT              | `3002`                               | `number`                                                 | Logto 管理控制台监听的本地端口。                                                                                                                                                                                          |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | 设置为 `1` 或 `true` 可禁用管理控制台端口。如果未设置 `ADMIN_ENDPOINT`，将完全禁用管理控制台。                                                                                                                            |
| DB_URL                  | N/A                                  | `string`                                                 | Logto 数据库的 [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)。                                                                                                                     |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | 详情见 [启用 HTTPS](#enabling-https)。                                                                                                                                                                                    |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | 同上。                                                                                                                                                                                                                    |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | 同上。                                                                                                                                                                                                                    |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | 你可以为线上测试或生产环境指定自定义域名的 URL。这也会影响 [OIDC 发行者 (Issuer) 标识符](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) 的值。                                                   |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | 你可以为生产环境指定自定义域名的 URL（例如 `ADMIN_ENDPOINT=https://admin.domain.com`）。这也会影响管理控制台重定向 URI 的值。                                                                                             |
| CASE_SENSITIVE_USERNAME | `true`                               | `boolean`                                                | 指定用户名是否区分大小写。修改该值时请谨慎；更改不会自动调整现有数据库数据，需要手动管理。                                                                                                                                |
| SECRET_VAULT_KEK        | `undefined`                          | `string`                                                 | 用于加密 [Secret Vault](/secret-vault) 中数据加密密钥 (DEK) 的密钥加密密钥 (KEK)。Secret Vault 正常工作必须配置。必须为 base64 编码字符串。推荐使用 AES-256（32 字节）。示例：`crypto.randomBytes(32).toString('base64')` |

### 启用 HTTPS {#enabling-https}

#### 使用 Node {#using-node}

Node 原生支持 HTTPS。通过 Node 启用 HTTPS 时，需同时提供 `HTTPS_CERT_PATH` 和 `HTTPS_KEY_PATH`。

`HTTPS_CERT_PATH` 表示你的 HTTPS 证书路径，`HTTPS_KEY_PATH` 表示你的 HTTPS 密钥路径。

#### 使用 HTTPS 代理 {#using-a-https-proxy}

另一种常见做法是在 Node 前面部署一个 HTTPS 代理（如 Nginx）。

在这种情况下，你可能需要将 `TRUST_PROXY_HEADER` 设置为 `true`，表示是否信任代理头字段。Logto 会将该值传递给 [Koa 应用设置](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings)。

关于何时配置该字段，请参阅 [信任 TLS 卸载代理](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies)。

## 数据库配置 {#database-configs}

管理过多的环境变量既低效又不灵活，因此我们的大多数通用配置都存储在数据库表 `logto_configs` 中。

该表是一个简单的键值存储，key 可枚举如下：

| Key              | 类型                  | 描述                                                                                                                |
| ---------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | [签名 Cookie 密钥](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys) 的字符串数组。 |
| oidc.privateKeys | <code>string[]</code> | 用于 [OIDC JWT 签名](https://openid.net/specs/openid-connect-core-1_0.html#Signing) 的私钥内容字符串数组。          |

### 支持的私钥类型 {#supported-private-key-types}

- EC（P-256、secp256k1、P-384 和 P-521 曲线）
- RSA
- OKP（Ed25519、Ed448、X25519、X448 子类型）
