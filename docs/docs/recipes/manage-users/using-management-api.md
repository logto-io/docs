---
sidebar_label: Using Management API
sidebar_position: 2
---

# Manage users using Management API

[Management API](../../../docs/references/core/#management-api) is a set of APIs to access Logto data, including users.
:::info
[**Authentication**](../../../docs/references/core/#authentication) is REQUIRED when you're calling Management API.
:::

The user-related RESTful APIs are mounted at `/api/users` except the user activities, a.k.a. user logs `/api/logs?userId=:userId`.

What Admin Console can do, so do Management API.

| Admin Console - User Management                                                                                 | Management API                                                                                                            |
| :-------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| [List users](../../../docs/recipes/manage-users/using-admin-console#list-and-search-users)                      | [`GET /api/users`](/api/#tag/Users/paths/~1api~1users/get)                                                                |
| [View user profile](../../../docs/recipes/manage-users/using-admin-console#view-user-profile)                   | [`GET /api/users/:userId`](/api/#tag/Users/paths/~1api~1users~1:userId/get)                                               |
| [View user activities](../../../docs/recipes/manage-users/using-admin-console#view-user-activities)             | [`GET /api/logs?userId=:userId`](/api/#tag/Logs/paths/~1api~1logs/get)                                                    |
| [Add a user](../../../docs/recipes/manage-users/using-admin-console#add-user)                                   | [`POST /api/users`](/api/#tag/Users/paths/~1api~1users/post)                                                              |
| [Update user profile](../../../docs/recipes/manage-users/using-admin-console#view-and-update-user-profile)      | [`PATCH /api/users/:userId`](/api/#tag/Users/paths/~1api~1users~1:userId/patch)                                           |
| [Reset user password](../../../docs/recipes/manage-users/using-admin-console#reset-user-password)               | [`PATCH /api/users/:userId/password`](/api/#tag/Users/paths/~1api~1users~1:userId~1password/patch)                        |
| [Delete a user](../../../docs/recipes/manage-users/using-admin-console#delete-user)                             | [`DELETE /api/users/:userId`](/api/#tag/Users/paths/~1api~1users~1:userId/delete)                                         |
| [Remove social connection](../../../docs/recipes/manage-users/using-admin-console#view-and-update-user-profile) | [`DELETE /api/users/:userId/identities/:target`](/api/#tag/Users/paths/~1api~1users~1:userId~1identities~1:target/delete) |

See [API Reference](/api/#tag/Users) for details.
