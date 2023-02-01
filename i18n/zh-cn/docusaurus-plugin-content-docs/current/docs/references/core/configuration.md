# 配置

## 环境变量

### 用法

Logto 按如下顺序处理环境变量 (environment variables)：

- 系统环境变量
- 项目根目录下符合 [dotenv](https://github.com/motdotla/dotenv#readme) 格式的 `.env` 文件

也就是说，系统环境变量会覆盖 `.env` 已存在的值。

### 变量

:::caution
如果你通过 `npm start` 在根目录下运行 Logto，`NODE_ENV` 将永远是 `production`。
:::

在默认值中，`protocol` 将会根据你的 HTTPS 配置取值 `http` 或 `https`。

| Key                | 默认值                         | 类型                                                     | 描述                                                                                                                                                                                                                        |
| ------------------ | ------------------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV           | `undefined`                    | <code>'production' &#124; 'test' &#124; undefined</code> | Logto 运行在什么样的环境里。                                                                                                                                                                                                |
| PORT               | `3001`                         | `number`                                                 | Logto 监听的本地端口。                                                                                                                                                                                                      |
| DB_URL             | N/A                            | `string`                                                 | Logto 数据库的 [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)。                                                                                                                       |
| HTTPS_CERT_PATH    | `undefined`                    | <code>string &#124; undefined</code>                     | 详见 [启用 HTTPS](#启用-https)。                                                                                                                                                                                            |
| HTTPS_KEY_PATH     | `undefined`                    | <code>string &#124; undefined</code>                     | 同上。                                                                                                                                                                                                                      |
| TRUST_PROXY_HEADER | `false`                        | `boolean`                                                | 同上。                                                                                                                                                                                                                      |
| ENDPOINT           | `'protocol://localhost:$PORT'` | `string`                                                 | 你可以指定一个带有自定义域名的指向 Logto 的 URL，用于在线测试或生产环境。这也会影响到 [OIDC issuer identifier](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) 和「管理控制台」Redirect URIs 的值。 |

### 启用 HTTPS

#### 使用 Node

Node 原生支持 HTTPS。当 `HTTPS_CERT_PATH` 和 `HTTPS_KEY_PATH` **同时** 被提供时才会通过 Node 启用 HTTPS。

`HTTPS_CERT_PATH` 是你的 HTTPS certificate 的路径；`HTTPS_KEY_PATH` 是你的 HTTPS key 的路径。

#### 使用 HTTPS 代理

另一个惯常的做法是在 Node 前放置一个 HTTPS 代理（例如 Nginx）。

在这样的情况下，你很可能需要将 `TRUST_PROXY_HEADER` 设置为 `true` 以表明代理 header 的字段是否应该被信任。Logto 将把此值传递给 [Koa 应用设置](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings)。

见 [Trusting TLS offloading proxies](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) 以了解何时需要配置此字段。

## Database configs

Managing too many environment variables are not efficient and flexible, so most of our general configs are stored in the database table `_logto_configs`.

The table is a simple key-value storage, and the key is enumerable as following:

| Key                            | Type                  | Description                                                                                                                        |
| ------------------------------ | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| oidc.privateKeys               | <code>string[]</code> | The string array of the [signing cookie keys](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys).   |
| oidc.cookieKeys                | <code>string[]</code> | The string array of the private key content for [OIDC JWT signing](https://openid.net/specs/openid-connect-core-1_0.html#Signing). |
| oidc.refreshTokenReuseInterval | <code>number</code>   | See the section below.                                                                                                             |

### About refresh token reuse interval

This interval helps to avoid concurrency issues when exchanging the rotating refresh token multiple times within a given timeframe.

During the leeway window (in seconds), the consumed refresh token will be considered as valid.

This is useful for distributed apps and serverless apps like Next.js, in which there is no shared memory.

It has a default value `3` if you went through our seeding process.

### Supported private key types

- EC (P-256, secp256k1, P-384, and P-521 curves)
- RSA
- OKP (Ed25519, Ed448, X25519, X448 sub types)
