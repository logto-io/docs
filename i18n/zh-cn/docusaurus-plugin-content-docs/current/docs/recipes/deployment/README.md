---
sidebar_position: 8
---

# 🚀 部署

## 环境变量

我们在演示中（`docker-compose.yml`）使用了一组自动生成的环境变量，你应该替换成自己的，并维护多个 Logto 实例之间的变量统一性。

你可以直接设置环境变量，或者在 Logto 项目根目录中放置一个 `.env` 文件。如果你在用 Docker 进行测试，可以去 `/etc/logto` 里看看自动生成的 `.env`。

### 基础

- `DB_URL` Logto 数据库的 [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)。
- `PORT` Logto 监听的本地端口。默认 `3001`。
- `ENDPOINT` 你可以指定一个带有自定义域名的指向 Logto 的 URL，用于在线测试或生产环境（例如 `ENDPOINT=https://logto.domain.com`）。这也会影响到 [OIDC issuer identifier](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) 和「管理控制台」Redirect URIs 的值。

有关环境变量的详情，请参见 [配置](../../references/core/configuration.md)。

### HTTPS

你可以直接使用 Node.js 来直接提供 HTTPS，或者在 Node.js 前设置一个 HTTPS 代理/负载均衡。详情参见 [启用 HTTPS](../../references/core/configuration.md#启用-https)。

### 反向代理

如果你想使用反向代理，如 Nginx，通常我们需要先将 Logto 定义为 upstream。假设你在使用 Nginx，且你的 Logto 实例运行在 3001 端口上，
在 nginx.conf 中添加如下配置：

```
upstream logto_upstream {
  server 127.0.0.1:3001;
}
```

然后，确保正确配置了如下请求头部信息：

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

重新加载 Nginx 配置文件：

```
nginx -s reload
```

大功告成！打开浏览器，访问你的域名。恭喜你，现在你应该可以看到 Logto 的欢迎页面了！

## 如何安全地升级 Logto？

除非我们在 changelog 里特意提出，你都无需变更代码和数据库即可轻松升级 Logto。我们的 API 遵循 [semver](https://semver.org/) 标准。

### 数据库变更

如果数据库变更无法避免，我们将提供变更脚本。只需在 Logto 项目根目录下运行 `npm run alteration deploy` 即可轻松升级数据库。

关于变更命令的详情参见 [Database alteration](/docs/tutorials/using-cli/database-alteration)。

## 容器化

在生产环境中，你可能希望使用 Docker 来以容器化的方式运行 Logto。你可以在项目的根目录下找到 Dockerfile。如果你想运行多个 Logto 实例，例如在 Kubernetes 集群中部署 Logto，你需要做一些额外的工作。

### 共享连接器目录

默认情况下，Logto 将在 `core` 文件夹的根目录下创建一个 `connectors` 文件夹作为连接器目录。我们建议在多个 Logto 实例之间共享此文件夹，你需要将 `packages/core/connectors` 文件夹挂载到容器中，并运行 `npm run cli connector add -- --official` 来安装官方推荐的连接器。

这里有一个 Kubernetes 的最小部署（deployment）示例：

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

在这个例子中，我们创建了一个空目录卷（empty dir volume）并将其挂载到容器中。然后我们在初始化容器中运行 `npm run cli connector add -- --official` 来下载连接器。最后，每个容器都将共享相同的 connectors 文件夹，里面已经准备好了官方推荐的连接器。

:::note
这是一个示例配置文件，如果要完整的运行 Logto，还需要配置环境变量等。
:::

在生产环境中，你可以将空目录卷替换为持久化存储卷，也可以用你自己的方式来替代 initContainer，你应该知道你在做什么！

### 数据库变更

和连接器相同，数据库变更需要在单个实例中运行。你可以使用一个 job 来运行变更脚本。、

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

关于变更命令的详情参见 [Database alteration](/docs/tutorials/using-cli/database-alteration)。
