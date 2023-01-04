---
sidebar_label: 使用管理 API
sidebar_position: 2
---

# 使用管理 API 管理用户

「[管理 API](../../../docs/references/core/README.mdx#管理-api)」是一个 API 集合，用于管理 Logto 数据，包括用户。

:::info
调用管理 API 时必须进行 [认证（Authentication）](../../../docs/references/core/README.mdx#认证authentication)。
:::

与用户相关的 [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer)
API 都挂载在 `/api/users`，除了用户活动，即用户日志 `/api/logs?userId=:userId`。

「管理控制台」可以做什么，「管理 API」也可以。

| 管理控制台 - 用户管理                                                                  | 管理 API                                                                                                                                             |
| :------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| [列出和搜索用户](../../../docs/recipes/manage-users/admin-console.md#列出和搜索用户)   | <a href="/api/#tag/Users/paths/~1api~1users/get" target="_blank"> `GET /api/users`</a>                                                               |
| [查看用户资料](../../../docs/recipes/manage-users/admin-console.md#查看和更新用户资料) | <a href="/api/#tag/Users/paths/~1api~1users~1:userId/get" target="_blank">`GET /api/users/:userId`</a>                                               |
| [查看用户活动](../../../docs/recipes/manage-users/admin-console.md#查看用户活动)       | <a href="/api/#tag/Logs/paths/~1api~1logs/get" target="_blank">`GET /api/logs?userId=:userId`</a>                                                    |
| [添加用户](../../../docs/recipes/manage-users/admin-console.md#添加用户)               | <a href="/api/#tag/Users/paths/~1api~1users/post" target="_blank">`POST /api/users`</a>                                                              |
| [更新用户资料](../../../docs/recipes/manage-users/admin-console.md#查看和更新用户资料) | <a href="/api/#tag/Users/paths/~1api~1users~1:userId/patch" target="_blank">`PATCH /api/users/:userId`</a>                                           |
| [重置用户密码](../../../docs/recipes/manage-users/admin-console.md#重置用户密码)       | <a href="/api/#tag/Users/paths/~1api~1users~1:userId~1password/patch" target="_blank">`PATCH /api/users/:userId/password`</a>                        |
| [删除用户](../../../docs/recipes/manage-users/admin-console.md#删除用户)               | <a href="/api/#tag/Users/paths/~1api~1users~1:userId/delete" target="_blank">`DELETE /api/users/:userId`</a>                                         |
| [删除社交连接](../../../docs/recipes/manage-users/admin-console.md#查看和更新用户资料) | <a href="/api/#tag/Users/paths/~1api~1users~1:userId~1identities~1:target/delete" target="_blank">`DELETE /api/users/:userId/identities/:target`</a> |
| 禁止和恢复用户 (无法直接通过管理控制台管理)                                            | <a href="/api/#tag/Users/paths/~1api~1users~1:userId~1password/patch" target="_blank">`PATCH /api/users/:userId/is-suspended`</a>                    |

查看 <a href="/api/#tag/Users" target="_blank">API 参考</a> 以了解更多.
