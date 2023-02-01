# Configuration

## Environment variables

### Usage

Logto handles environment variables in the following order:

- System environment variables
- The `.env` file in the project root, which conforms with [dotenv](https://github.com/motdotla/dotenv#readme) format

Thus the system environment variables will override the values in `.env`.

### Variables

:::caution
If you run Logto via `npm start` in the project root, `NODE_ENV` will always be `production`.
:::

In default values, `protocol` will be either `http` or `https` according to your HTTPS config.

| Key                | Default Value                  | Type                                                     | Description                                                                                                                                                                                                                                         |
| ------------------ | ------------------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV           | `undefined`                    | <code>'production' &#124; 'test' &#124; undefined</code> | What kind of environment that Logto runs in.                                                                                                                                                                                                        |
| PORT               | `3001`                         | `number`                                                 | The local port that Logto listens.                                                                                                                                                                                                                  |
| DB_URL             | N/A                            | `string`                                                 | The [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6) for Logto database.                                                                                                                                        |
| HTTPS_CERT_PATH    | `undefined`                    | <code>string &#124; undefined</code>                     | See [Enabling HTTPS](#enabling-https) for details.                                                                                                                                                                                                  |
| HTTPS_KEY_PATH     | `undefined`                    | <code>string &#124; undefined</code>                     | Ditto.                                                                                                                                                                                                                                              |
| TRUST_PROXY_HEADER | `false`                        | `boolean`                                                | Ditto.                                                                                                                                                                                                                                              |
| ENDPOINT           | `'protocol://localhost:$PORT'` | `string`                                                 | You may specify a URL with your custom domain for online testing or production. This will affect the value of the [OIDC issuer identifier](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) and Admin Console Redirect URIs. |

### Enabling HTTPS

#### Using Node

Node natively supports HTTPS. Provide **BOTH** `HTTPS_CERT_PATH` and `HTTPS_KEY_PATH` to enable HTTPS via Node.

`HTTPS_CERT_PATH` implies the path to your HTTPS certificate, while `HTTPS_KEY_PATH` implies the path to your HTTPS key.

#### Using a HTTPS proxy

Another common practice is to have an HTTPS proxy in front of Node (E.g. Nginx).

In this case, you're likely want to set `TRUST_PROXY_HEADER` to `true` which indicates if proxy header fields should be trusted. Logto will pass the value to [Koa app settings](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings).

See [Trusting TLS offloading proxies](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) for when to configure this field.

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
