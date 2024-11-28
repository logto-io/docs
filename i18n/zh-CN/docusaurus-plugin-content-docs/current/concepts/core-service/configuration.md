# 配置

## 环境变量

### 用法

Logto 按以下顺序处理环境变量：

- 系统环境变量
- 项目根目录中的 `.env` 文件，符合 [dotenv](https://github.com/motdotla/dotenv#readme) 格式

因此，系统环境变量将覆盖 `.env` 中的值。

### 变量

:::caution
如果你在项目根目录通过 `npm start` 运行日志 (Logto)，`NODE_ENV` 将始终为 `production`。
:::

在默认值中，`protocol` 将根据你的 HTTPS 配置为 `http` 或 `https`。

| Key                     | Default Value                        | Type                                                     | Description                                                                                                                                                       |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Logto 运行的环境类型。                                                                                                                                            |
| PORT                    | `3001`                               | `number`                                                 | Logto 监听的本地端口。                                                                                                                                            |
| ADMIN_PORT              | `3002`                               | `number`                                                 | Logto 管理控制台监听的本地端口。                                                                                                                                  |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | 将其设置为 `1` 或 `true` 以禁用管理控制台的端口。如果未设置 `ADMIN_ENDPOINT`，它将完全禁用管理控制台。                                                            |
| DB_URL                  | N/A                                  | `string`                                                 | Logto 数据库的 [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)。                                                             |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | 详情请参见 [启用 HTTPS](#enabling-https)。                                                                                                                        |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | 同上。                                                                                                                                                            |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | 同上。                                                                                                                                                            |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | 你可以为在线测试或生产指定一个带有自定义域名的 URL。这也会影响 [OIDC 发行者标识符](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) 的值。 |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | 你可以为生产指定一个带有自定义域名的 URL（例如 `ADMIN_ENDPOINT=https://admin.domain.com`）。这也会影响管理控制台重定向 URI 的值。                                 |
| CASE_SENSITIVE_USERNAME | `true`                               | `boolean`                                                | 指定用户名是否区分大小写。修改此值时请谨慎；更改不会自动调整现有数据库数据，需要手动管理。                                                                        |

### 启用 HTTPS

#### 使用 Node

Node 原生支持 HTTPS。提供 **BOTH** `HTTPS_CERT_PATH` 和 `HTTPS_KEY_PATH` 以通过 Node 启用 HTTPS。

`HTTPS_CERT_PATH` 表示你的 HTTPS 证书的路径，而 `HTTPS_KEY_PATH` 表示你的 HTTPS 密钥的路径。

#### 使用 HTTPS 代理

另一种常见做法是在 Node 前面设置一个 HTTPS 代理（例如 Nginx）。

在这种情况下，你可能希望将 `TRUST_PROXY_HEADER` 设置为 `true`，这表示是否应信任代理头字段。 Logto 将把该值传递给 [Koa 应用程序设置](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings)。

有关何时配置此字段的信息，请参见 [信任 TLS 卸载代理](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies)。

## 数据库配置

管理过多的环境变量既不高效也不灵活，因此我们的大多数通用配置都存储在数据库表 `logto_configs` 中。

该表是一个简单的键值存储，键可枚举如下：

| Key              | Type                  | Description                                                                                                         |
| ---------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | [签名 cookie 密钥](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys) 的字符串数组。 |
| oidc.privateKeys | <code>string[]</code> | 用于 [OIDC JWT 签名](https://openid.net/specs/openid-connect-core-1_0.html#Signing) 的私钥内容字符串数组。          |

### 支持的私钥类型

- EC (P-256, secp256k1, P-384 和 P-521 曲线)
- RSA
- OKP (Ed25519, Ed448, X25519, X448 子类型)
