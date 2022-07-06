# 配置

## 用法

Logto 按如下顺序处理环境变量 (environment variables)：

- 项目根目录下符合 [dotenv](https://github.com/motdotla/dotenv#readme) 格式的 `.env` 文件
- 系统环境变量

也就是说，系统环境变量会覆盖 `.env` 已存在的值。

## 初次设置的问题 {#questions}

当你第一次在没有环境变量的情况下启动 Logto 时，除非在 arguments 里指定了 `--no-inquiry`，否则 Logto 将会问你几个简单的问题满足最小的运行需求：

- 你是否想为 OIDC provider 自动生成一个 cookie key 数组
- 你是否想为 OIDC provider 自动生成一个 private key
- 你是否想设置一个全新的 Logto 数据库
- 输入 [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)

大多数都是简单的 yes/no 问题，除了 [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)，你都可以直接使用默认选项。

为 OIDC provider 生成的 private key 将会位于 `./oidc-private-key.pem`，其他的值将会追加在 `./.env` 里。

:::note
在 Docker 镜像中 `--no-inquiry` argument 是默认指定的。
:::

## 变量列表

### 通用

:::caution
如果你通过 `npm start` 在根目录下运行 Logto，`NODE_ENV` 将永远是 `production`。
:::

在默认值中，`protocol` 将会根据你的 HTTPS 配置取值 `http` 或 `https`。

| Key                | 默认值                         | 类型                                                     | 描述                                                                                                                                                                                                                        |
| ------------------ | ------------------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV           | `undefined`                    | <code>'production' &#124; 'test' &#124; undefined</code> | Logto 运行在什么样的环境里。                                                                                                                                                                                                |
| PORT               | `3001`                         | `number`                                                 | Logto 监听的本地端口。                                                                                                                                                                                                      |
| DB_URL             | N/A                            | `string`                                                 | Logto 数据库的 [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)。                                                                                                                       |
| HTTPS_CERT_PATH    | `undefined`                    | <code>string &#124; undefined</code>                     | 详见 [启用 HTTPS](#enabling-https)。                                                                                                                                                                                        |
| HTTPS_KEY_PATH     | `undefined`                    | <code>string &#124; undefined</code>                     | 同上。                                                                                                                                                                                                                      |
| TRUST_PROXY_HEADER | `false`                        | `boolean`                                                | 同上。                                                                                                                                                                                                                      |
| ENDPOINT           | `'protocol://localhost:$PORT'` | `string`                                                 | 你可以指定一个带有自定义域名的指向 Logto 的 URL，用于在线测试或生产环境。这也会影响到 [OIDC issuer identifier](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) 和「管理控制台」Redirect URIs 的值。 |

### OIDC

| Key                   | 默认值                     | 类型                                 | 描述                                                                                                                                                                                                                  |
| --------------------- | -------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OIDC_COOKIE_KEYS      | N/A                        | <code>string[]</code>                | [Signing cookie keys](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys) 的字符串数组。                                                                                                |
| OIDC_PRIVATE_KEY      | N/A                        | <code>string &#124; undefined</code> | [OIDC JWT 签名](https://openid.net/specs/openid-connect-core-1_0.html#Signing) 的 private key 内容。<br/> 如果你想在 `.env` 中设置，你可以通过 [多行值](https://github.com/motdotla/dotenv#multiline-values) 来实现。 |
| OIDC_PRIVATE_KEY_PATH | `'./oidc-private-key.pem'` | <code>string &#124; undefined</code> | [OIDC JWT 签名](https://openid.net/specs/openid-connect-core-1_0.html#Signing) 的 private key 文件路径。 <br/> 注意：如果 `OIDC_PRIVATE_KEY` 非空，Logto 将 _忽略_ 该值。                                             |

#### 支持的 private key 类型

- RSA
- OKP (Ed25519, Ed448, X25519, X448 sub types)
- EC (P-256, secp256k1, P-384, and P-521 curves)

## 启用 HTTPS

### 使用 Node

Node 原生支持 HTTPS。当 `HTTPS_CERT_PATH` 和 `HTTPS_KEY_PATH` **同时** 被提供时才会通过 Node 启用 HTTPS。

`HTTPS_CERT_PATH` 是你的 HTTPS certificate 的路径；`HTTPS_KEY_PATH` 是你的 HTTPS key 的路径。

### 使用 HTTPS 代理

另一个惯常的做法是在 Node 前放置一个 HTTPS 代理（例如 Nginx）。

在这样的情况下，你很可能需要将 `TRUST_PROXY_HEADER` 设置为 `true` 以表明代理 header 的字段是否应该被信任。Logto 将把此值传递给 [Koa 应用设置](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings)。

见 [Trusting TLS offloading proxies](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) 以了解何时需要配置此字段。
