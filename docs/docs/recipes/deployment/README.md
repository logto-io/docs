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
- `OIDC_COOKIE_KEYS` The comma-separated string list of the [signing cookie keys](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys). Rotate regularly to keep safety. If you'd like to set multi keys, separate them with comma.
- `OIDC_PRIVATE_KEYS` The comma-separated string list of the private key content for [OIDC JWT signing](https://openid.net/specs/openid-connect-core-1_0.html#Signing). If you'd like to set this in `.env`, you can leverage [multiline values](https://github.com/motdotla/dotenv#multiline-values) support. If you'd like to set multi keys, separate them with comma.

**How to set up `OIDC_PRIVATE_KEYS` correctly?**

The value format for `OIDC_PRIVATE_KEYS` is as follows (You can use `\n` to replace newline characters):

```bash
OIDC_PRIVATE_KEYS="-----BEGIN RSA PRIVATE KEY-----
...
Kh9NV...
...
-----END DSA PRIVATE KEY-----,
-----BEGIN RSA PRIVATE KEY-----
...
nOlQ1nS...
...
-----END DSA PRIVATE KEY-----"
```

**I prefer using `.pem` files for my OIDC private keys. What should I do?**

Just leave `OIDC_PRIVATE_KEYS` empty, and set the path of your `.pem` file in the `OIDC_PRIVATE_KEY_PATHS` list. It has a default value of `'./oidc-private-key.pem'`.

You can set multi paths by separating them with comma. E.g. `oidc-private-key1.pem, oidc-private-key-2.pem`.

For more details about environment variables, see [Configuration](../../references/core/configuration.md).

### HTTPS

You may use Node.js to serve HTTPS directly or set up an HTTPS proxy / balancer in front of Node.js. See [Enabling HTTPS](../../references/core/configuration.md#enabling-https) for details.

### Reverse proxy

If you want to use reverse proxy on your server, for example Nginx, usually we need to define Logto as an upstream.
Assuming you are using Nginx and your Logto instance is running on port 3001, put the following config in nginx.conf:

```
upstream logto_upstream {
  server 127.0.0.1:3001;
}
```

Also, make sure you have properly configured the following request headers:

```
server {
  listen 80;
  server_name your_domain_url;
  ...

  location / {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto https;

    proxy_pass http://logto_upstream
    proxy_redirect off;
  }
}
```

Reload Nginx config to pick up the latest changes:

```
nginx -s reload
```

You are all set. Open the browser and visit your domain URL, you should be able to see Logto welcome page.

## How can I upgrade Logto safely?

If we don't mention it in the changelog, you can feel free to upgrade Logto without changing your code or database schema. Our API follows [semver](https://semver.org/).

We'll build a smooth database migration process and demonstrate it in our changelog if a schema change is inevitable. You'll be able to do that with chill.
