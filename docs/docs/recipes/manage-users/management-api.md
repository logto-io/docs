---
sidebar_label: Management API
sidebar_position: 2
---

# Manage users using Management API

[Management API](../../../docs/references/core/README.mdx#management-api) is a collection of APIs that provide access to the Logto backend service. As previously mentioned, the user API is a critical component of this service and can support a wide range of scenarios.
:::info
[**Authentication**](../../../docs/references/core/README.mdx#authentication) is REQUIRED when you're calling Management API.
:::

The user-related [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer)
APIs are mounted at `/api/users` except the user activities, i.e., user logs `/api/logs?userId=:userId`.

What Admin Console can do, so do Management API.

| Admin Console - User Management                                                                              | Management API                                                                                                                                       |
| :----------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| [List users](../../../docs/recipes/manage-users/admin-console.md#list-and-search-users)                      | <a href="/api/#tag/Users/paths/~1api~1users/get" target="_blank"> `GET /api/users`</a>                                                               |
| [View user profile](../../../docs/recipes/manage-users/admin-console.md#view-and-update-user-profile)        | <a href="/api/#tag/Users/paths/~1api~1users~1:userId/get" target="_blank">`GET /api/users/:userId`</a>                                               |
| [View user activities](../../../docs/recipes/manage-users/admin-console.md#view-user-activities)             | <a href="/api/#tag/Logs/paths/~1api~1logs/get" target="_blank">`GET /api/logs?userId=:userId`</a>                                                    |
| [Add a user](../../../docs/recipes/manage-users/admin-console.md#add-user)                                   | <a href="/api/#tag/Users/paths/~1api~1users/post" target="_blank">`POST /api/users`</a>                                                              |
| [Update user profile](../../../docs/recipes/manage-users/admin-console.md#view-and-update-user-profile)      | <a href="/api/#tag/Users/paths/~1api~1users~1:userId/patch" target="_blank">`PATCH /api/users/:userId`</a>                                           |
| [Reset user password](../../../docs/recipes/manage-users/admin-console.md#reset-user-password)               | <a href="/api/#tag/Users/paths/~1api~1users~1:userId~1password/patch" target="_blank">`PATCH /api/users/:userId/password`</a>                        |
| [Delete a user](../../../docs/recipes/manage-users/admin-console.md#delete-user)                             | <a href="/api/#tag/Users/paths/~1api~1users~1:userId/delete" target="_blank">`DELETE /api/users/:userId`</a>                                         |
| [Remove social connection](../../../docs/recipes/manage-users/admin-console.md#view-and-update-user-profile) | <a href="/api/#tag/Users/paths/~1api~1users~1:userId~1identities~1:target/delete" target="_blank">`DELETE /api/users/:userId/identities/:target`</a> |
| [Suspend User](../../../docs/recipes/manage-users/admin-console.md#suspend-user)                             | <a href="/api/#tag/Users/paths/~1api~1users~1:userId~1password/patch" target="_blank">`PATCH /api/users/:userId/is-suspended`</a>                    |

See <a href="/api/#tag/Users" target="_blank">API Reference</a> for more.
