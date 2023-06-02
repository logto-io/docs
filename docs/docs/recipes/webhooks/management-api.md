---
sidebar_label: Management API
sidebar_position: 2
---

# Manage webhooks using Management API

_Added in v1.5.0_

Logto supports managing web hooks via Management API. See [🚝 Interact with Management API](/docs/recipes/interact-with-management-api/) for detailed instructions.

:::info
[**Authentication**](../../../docs/references/core/README.mdx#authentication) is REQUIRED when you're calling Management API.
:::

| Admin Console - Webhook Management | Management API                                                                                                                  | Notes                                                                                                                                      |
| :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------- |
| List webhooks                      | <a href="/api/#tag/Hooks/paths/~1api~1hooks/get" target="_blank"> `GET /api/hooks`</a>                                          |                                                                                                                                            |
| View webhook details               | <a href="/api/#tag/Hooks/paths/~1api~1hooks~1:id/get" target="_blank">`GET /api/hooks/:hookId`</a>                              |                                                                                                                                            |
| View webhook recent requests (24h) | <a href="/api/#tag/Hooks/paths/~1api~1hooks~1:id~1recent-logs/get" target="_blank">`GET /api/hooks/:hookId/recent-logs`</a>     |                                                                                                                                            |
| Create a webhook                   | <a href="/api/#tag/Hooks/paths/~1api~1hooks/post" target="_blank">`POST /api/hooks`</a>                                         | `event` is deprecated, use `events` instead.<br />`config.retires` now defaults to `3` if not specified and will be removed in the future. |
| Update webhook data                | <a href="/api/#tag/Hooks/paths/~1api~1hooks~1:id/patch" target="_blank">`PATCH /api/hooks/:hookId`</a>                          | `event` is deprecated, use `events` instead.<br />`config.retires` now defaults to `3` if not specified and will be removed in the future. |
| Regenerate webhook signing key     | <a href="/api/#tag/Hooks/paths/~1api~1hooks~1:id~1signing-key/patch" target="_blank">`PATCH /api/hooks/:hookId/signing-key`</a> |                                                                                                                                            |
| Delete a webhook                   | <a href="/api/#tag/Hooks/paths/~1api~1hooks~1:id/delete" target="_blank">`DELETE /api/hooks/:hookId`</a>                        |                                                                                                                                            |
| Test webhook                       | <a href="/api/#tag/Hooks/paths/~1api~1hooks~1:id~1test/post" target="_blank">`POST /api/hooks/:hookId/test`</a>                 |                                                                                                                                            |
