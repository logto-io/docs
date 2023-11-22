---
sidebar_label: Manage via Management API
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

See <a href="https://openapi.logto.io/group/endpoint-users" target="_blank">API references</a> for more.
