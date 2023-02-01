---
sidebar_position: 9
---

# 🚀 Deployment

## Environment Variables

We use a generated preset of environment variables in our demo (`docker-compose.yml`), which you should replace with your own and maintain consistency across multiple Logto instances.

You can set env directly or put a `.env` file inside the Logto project root. If you are testing with Docker, check out the image's generated `.env` in `/etc/logto`.

### Essentials

- `DB_URL` The [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6) for Logto database.
- `PORT` The port that Logto listens to. Default `3001`.
- `ENDPOINT` You may specify a URL with your custom domain for production (E.g. `ENDPOINT=https://logto.domain.com`). This will affect the value of the [OIDC issuer identifier](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) and Admin Console Redirect URIs.

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

    proxy_pass http://logto_upstream;
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

### Database alteration

If a schema change is inevitable, we will provide an alteration script. Simply run `npm run alteration deploy` in the Logto project root with ease to upgrade your database schema.

See [Database alteration](../../tutorials/using-cli/database-alteration.mdx) for details about the alteration command.

## Containerization

For production, you may use Docker to containerize Logto. You can find the Dockerfile in the root directory of the project. If you want to run multiple instances of Logto, for instance, deploy Logto in a Kubernetes cluster, There are some additional steps you need to take.

### Shared connectors folder

By default, Logto will create a `connectors` folder in the root directory of the `core` folder. We recommend sharing the folder between multiple instances of Logto, you need to mount the `packages/core/connectors` folder to the container and run `npm run cli connector add -- --official` to deploy the connectors.

There is a minimum example `deployment` for Kubernetes:

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: logto
  namespace: default
spec:
  template:
    spec:
      volumes:
        - name: connectors
          emptyDir: {}
      initContainers:
        - image: ghcr.io/logto-io/logto
          command:
            - /bin/sh
          args:
            - '-c'
            - 'npm run cli connector add -- --official'
          name: init
          volumeMounts:
            - name: connectors
              mountPath: /etc/logto/packages/core/connectors
      containers:
        - image: ghcr.io/logto-io/logto
          name: logto
          volumeMounts:
            - name: connectors
              mountPath: /etc/logto/packages/core/connectors
```

In this example, we create an empty directory as a volume and mount it to containers. Then we run `npm run cli connector add -- --official` in the init container to download the connectors. Finally, every container will share the same connectors folder with our official connectors already inside.

:::note
This is an example yaml, in order to run Logto, you need to set envs properly.
:::

For production, you can replace the "empty dir" volume with a persistent volume, and do the "init" job by your own way, you know what you are doing!

### Database alteration

Similar to connectors, the database alteration need to run in a single instance. You can use a job to run the alteration script.

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: alteration
spec:
  template:
    spec:
      containers:
        - name: alteration
          image: ghcr.io/logto-io/logto
          imagePullPolicy: always
          env:
            - name: DB_URL
              value: postgresql://user:password@localhost:5432/logto
            command:
              - /bin/sh
            args:
              - '-c'
              - 'npm run alteration deploy latest'
      restartPolicy: Never
```

See [Database alteration](../../tutorials/using-cli/database-alteration.mdx) for details about the alteration command.
