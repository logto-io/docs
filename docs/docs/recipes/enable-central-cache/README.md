# 🗄️ Enable central cache

_Added in v1.2.0_

Logto supports using Redis®[^1] as a central cache for well-known data. By using a central cache, Logto can significantly speed up the end-user experience by reducing the number of database queries needed to generate a response.

[^1]: Redis is a registered trademark of Redis Ltd. Any rights therein are reserved to Redis Ltd. Any use by Silverhand is for referential purposes only and does not indicate any sponsorship, endorsement or affiliation between Redis and Silverhand.

Typically, the cache can be made public since it is designed for well-known data only. At present, Logto does not store any data requiring authentication or authorization.

:::note
To ensure the best security practices, we still advise limiting access to the cache.
:::

## Configure the connection

To enable the cache, you will need a Redis 6.0 instance that is up and running. In order for Logto to connect and use the cache, simply set the `REDIS_URL` environment variable to the Redis connection string, which should begin with the ["redis" protocol](https://www.iana.org/assignments/uri-schemes/prov/redis) (`redis://`) for unsecured connections, or the ["rediss" protocol](https://www.iana.org/assignments/uri-schemes/prov/rediss) (`rediss://`) for connection over TLS.

For example:

```bash
REDIS_URL=rediss://your-redis-username:your-password@your.redis.url.com:6380
```

Please note that most parts of the connection string can be omitted, as shown in the example below, which composes a connection string without the username and port, using the "redis" protocol:

```bash
REDIS_URL=redis://:your-password@your.redis.url.com
```

If the password contains special characters, it needs to be URI-encoded:

```bash
# If the password is "foo="
REDIS_URL=redis://:foo%3D@your.redis.url.com
```

In cases where all default values are in use, you can set the variable to a truthy value for convenience:

```bash
REDIS_URL=1 # or "true", "yes"
```

:::note
The [StackExchange.Redis](https://stackexchange.github.io/StackExchange.Redis/Configuration.html) string is not supported.
:::

## Check if the cache is working

To check if the cache is properly connected, you should see the following message displayed when Logto starts up:

```
[CACHE] Connected to Redis
```

Additionally, when the request hits the cache (for example, by accessing `GET /api/.well-known/phrases` multiple times), the following message will appear in the console:

```
[CACHE] Well-known cache hit for ...
```
