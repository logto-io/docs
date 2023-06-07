---
sidebar_label: Webhook Request
sidebar_position: 3
---

# Webhook Request

_Added in v1.5.0_

Once a valid hook event is emitted, Logto will find corresponding webhooks and send a POST request per hook config.

## Request headers

| Key                     | Customizable | Notes                                                                                             |
| :---------------------- | :----------- | :------------------------------------------------------------------------------------------------ |
| user-agent              | ✅           | `Logto (https://logto.io/)` by default                                                            |
| content-type            | ✅           | `application/json` by default                                                                     |
| logto-signature-sha-256 |              | the signature of the request body, refer to [Securing your webhooks](./securing-your-webhooks.md) |

You can overwrite customizable headers by [customizing request](./configure-webhooks-in-console.md#secure-webhook) headers with the same key.

## Request body

| Field       | Type                | Optional | Notes                                                             |
| :---------- | :------------------ | :------- | :---------------------------------------------------------------- |
| hookId      | `string`            |          | the identifier in Logto                                           |
| event       | `string`            |          | which event that triggers this hook                               |
| createdAt   | `string`            |          | the create time of payload in ISO format                          |
| sessionId   | `string`            | ✅       | the Session ID (not Interaction ID) for this event, if applicable |
| userAgent   | `string`            | ✅       | the user-agent for the request that triggers this hook            |
| userId      | `string`            | ✅       | the related User ID for this event, if applicable                 |
| user        | `UserEntity`        | ✅       | the related user entity for this event, if applicable             |
| application | `ApplicationEntity` | ✅       | the related application info for this event, if applicable        |

`UserEntity` includes the following fields from user data:

| Field         | Type      | Optional |
| :------------ | :-------- | :------- |
| id            | `string`  |          |
| username      | `string`  | ✅       |
| primaryEmail  | `string`  | ✅       |
| primaryPhone  | `string`  | ✅       |
| name          | `string`  | ✅       |
| avatar        | `string`  | ✅       |
| customData    | `object`  |          |
| identities    | `object`  |          |
| lastSignInAt  | `string`  |          |
| createdAt     | `string`  |          |
| applicationId | `string`  | ✅       |
| isSuspended   | `boolean` | ✅       |

`ApplicationEntity` includes the following fields from application data:

| Field       | Type     | Optional |
| :---------- | :------- | :------- |
| id          | `string` |          |
| name        | `string` |          |
| description | `string` | ✅       |

See [Users](/docs/references/users/) and [Applications](/docs/references/applications/) reference for detailed field explanations.
