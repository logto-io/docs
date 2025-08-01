# Configuration

## Environment variables {#environment-variables}

### Usage {#usage}

Logto handles environment variables in the following order:

- System environment variables
- The `.env` file in the project root, which conforms with [dotenv](https://github.com/motdotla/dotenv#readme) format

Thus the system environment variables will override the values in `.env`.

### Variables {#variables}

:::caution
If you run Logto via `npm start` in the project root, `NODE_ENV` will always be `production`.
:::

In default values, `protocol` will be either `http` or `https` according to your HTTPS config.

| Key                     | Default Value                        | Type                                                     | Description                                                                                                                                                                                                                                                                                |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | What kind of environment that Logto runs in.                                                                                                                                                                                                                                               |
| PORT                    | `3001`                               | `number`                                                 | The local port that Logto listens to.                                                                                                                                                                                                                                                      |
| ADMIN_PORT              | `3002`                               | `number`                                                 | The local port that Logto Admin Console listens to.                                                                                                                                                                                                                                        |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | Set it to `1` or `true` to disable the port for Admin Console. With `ADMIN_ENDPOINT` unset, it'll completely disable the Admin Console.                                                                                                                                                    |
| DB_URL                  | N/A                                  | `string`                                                 | The [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6) for Logto database.                                                                                                                                                                               |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | See [Enabling HTTPS](#enabling-https) for details.                                                                                                                                                                                                                                         |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | Ditto.                                                                                                                                                                                                                                                                                     |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | Ditto.                                                                                                                                                                                                                                                                                     |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | You may specify a URL with your custom domain for online testing or production. This will also affect the value of the [OIDC issuer identifier](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier).                                                                   |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | You may specify a URL with your custom domain for production (E.g. `ADMIN_ENDPOINT=https://admin.domain.com`). This will also affect the value of Admin Console Redirect URIs.                                                                                                             |
| CASE_SENSITIVE_USERNAME | `true`                               | `boolean`                                                | Specifies whether the username is case-sensitive. Exercise caution when modifying this value; changes will not automatically adjust existing database data, requiring manual management.                                                                                                   |
| SECRET_VAULT_KEK        | `undefined`                          | `string`                                                 | The Key Encryption Key (KEK) used to encrypt Data Encryption Keys (DEK) in the [Secret Vault](/secret-vault). Required for the Secret Vault to function properly. Must be a base64-encoded string. AES-256 (32 bytes) is recommended. Example: `crypto.randomBytes(32).toString('base64')` |

### Enabling HTTPS {#enabling-https}

#### Using Node {#using-node}

Node natively supports HTTPS. Provide **BOTH** `HTTPS_CERT_PATH` and `HTTPS_KEY_PATH` to enable HTTPS via Node.

`HTTPS_CERT_PATH` implies the path to your HTTPS certificate, while `HTTPS_KEY_PATH` implies the path to your HTTPS key.

#### Using a HTTPS proxy {#using-a-https-proxy}

Another common practice is to have an HTTPS proxy in front of Node (E.g. Nginx).

In this case, you're likely want to set `TRUST_PROXY_HEADER` to `true` which indicates if proxy header fields should be trusted. Logto will pass the value to [Koa app settings](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings).

See [Trusting TLS offloading proxies](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies) for when to configure this field.

## Database configs {#database-configs}

Managing too many environment variables are not efficient and flexible, so most of our general configs are stored in the database table `logto_configs`.

The table is a simple key-value storage, and the key is enumerable as following:

| Key              | Type                  | Description                                                                                                                        |
| ---------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | The string array of the [signing cookie keys](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys).   |
| oidc.privateKeys | <code>string[]</code> | The string array of the private key content for [OIDC JWT signing](https://openid.net/specs/openid-connect-core-1_0.html#Signing). |

### Supported private key types {#supported-private-key-types}

- EC (P-256, secp256k1, P-384, and P-521 curves)
- RSA
- OKP (Ed25519, Ed448, X25519, X448 sub types)
