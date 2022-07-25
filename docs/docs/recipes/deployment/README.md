---
sidebar_position: 8
---

# 🚀 Deployment

## Environment Variables

We use a generated preset of environment variables in our demo (`docker-compose.yml`), which you should replace with your own and maintain consistency across multiple Logto instances.

You can set env directly or put a `.env` file inside the Logto project root. If you are testing with Docker, check out the image's generated `.env` in `/etc/logto`.

### Essentials

- `DB_URL` The [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6) for Logto database.
- `PORT` The port that Logto listens to. Default `3001`.
- `ENDPOINT` You may specify a URL with your custom domain for production (E.g. `ENDPOINT=https://logto.domain.com`). This will affect the value of the [OIDC issuer identifier](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) and Admin Console Redirect URIs.
- `OIDC_COOKIE_KEYS` The string array of the [signing cookie keys](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys). Rotate regularly to keep safety.
- `OIDC_PRIVATE_KEY` The content of the private key for [OIDC JWT signing](https://openid.net/specs/openid-connect-core-1_0.html#Signing). If you'd like to set this in `.env`, you can leverage [multiline values](https://github.com/motdotla/dotenv#multiline-values) support.

**I prefer using a `.pem` file for my OIDC private key. What should I do?**

Just leave `OIDC_PRIVATE_KEY` empty, and set `OIDC_PRIVATE_KEY_PATH` to the path of your `.pem` file. It has a default value of `'./oidc-private-key.pem'`.

For more details about environment variables, see [Configuration](../../references/core/configuration.md).

### HTTPS

You may use Node.js to serve HTTPS directly or set up an HTTPS proxy/balancer in front of Node.js. See [Enabling HTTPS](../../references/core/configuration.md#enabling-https) for details.

## How can I upgrade Logto safely?

If we don't mention it in the changelog, you can feel free to upgrade Logto without changing your code or database schema. Our API follows [semver](https://semver.org/).

We'll build a smooth database migration process and demonstrate it in our changelog if a schema change is inevitable. You'll be able to do that with chill.
