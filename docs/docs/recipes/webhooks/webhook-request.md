---
sidebar_position: 4
---

import Availability from '@components/Availability';

# Webhook request

Once a valid hook event is emitted, Logto will find corresponding webhooks and send a POST request per hook config.

## Request headers

| Key                     | Customizable | Notes                                                                                              |
| :---------------------- | :----------- | :------------------------------------------------------------------------------------------------- |
| user-agent              | ✅           | `Logto (https://logto.io/)` by default.                                                            |
| content-type            | ✅           | `application/json` by default.                                                                     |
| logto-signature-sha-256 |              | the signature of the request body, refer to [Securing your webhooks](./securing-your-webhooks.md). |

You can overwrite customizable headers by [customizing request](./configure-webhooks-in-console.md#secure-webhook) headers with the same key.

## Interaction hook events request body

<Availability cloud oss={{ major: 1, minor: 5 }} />

available events: `PostRegister`, `PostSignIn`, `PostResetPassword`;

The request body is a JSON object that contains three types of data field:

```ts
type UserEntity = {
  id: string;
  username?: string;
  primaryEmail?: string;
  primaryPhone?: string;
  name?: string;
  avatar?: string;
  customData?: object;
  identities?: object;
  lastSignInAt?: string;
  createdAt?: string;
  applicationId?: string;
  isSuspended?: boolean;
};
```

```ts
type ApplicationEntity = {
  id: string;
  name: string;
  description?: string;
};
```

| Field            | Type                | Optional | Notes                                                              |
| ---------------- | ------------------- | -------- | ------------------------------------------------------------------ |
| hookId           | `string`            |          | The identifier in Logto.                                           |
| event            | `string`            |          | Which event that triggers this hook.                               |
| createdAt        | `string`            |          | The create time of payload in ISO format.                          |
| interactionEvent | `string`            |          | The interaction event that triggers this hook.                     |
| sessionId        | `string`            | ✅       | The Session ID (not Interaction ID) for this event, if applicable. |
| userAgent        | `string`            | ✅       | The user-agent for the request that triggers this hook.            |
| userIp           | `string`            | ✅       | The IP address for the request that triggers this hook.            |
| userId           | `string`            | ✅       | The related User ID for this event, if applicable.                 |
| user             | `UserEntity`        | ✅       | The related user entity for this event, if applicable.             |
| applicationId    | `string`            | ✅       | The related Application ID for this event, if applicable.          |
| application      | `ApplicationEntity` | ✅       | The related application info for this event, if applicable.        |

See [Users](/docs/references/users/) and [Applications](/docs/references/applications/) reference for detailed field explanations.

## Data mutation hook events request body

<Availability cloud oss={{ major: 1, minor: 17 }} />

### Standard request body fields

| Field     | Type     | Optional | Notes                                     |
| --------- | -------- | -------- | ----------------------------------------- |
| hookId    | `string` |          | The identifier in Logto.                  |
| event     | `string` |          | Which event that triggers this hook.      |
| createdAt | `string` |          | The create time of payload in ISO format. |
| userAgent | `string` | ✅       | The user-agent for the request.           |
| ip        | `string` | ✅       | The IP address for the request.           |

### Interaction API context body fields

Data mutation hook events that are triggered by user interaction API calls.

Available events: `User.Created`, `User.Data.Updated`,

| Field            | Type                | Optional | Notes                                                              |
| ---------------- | ------------------- | -------- | ------------------------------------------------------------------ |
| interactionEvent | `string`            | ✅       | The interaction event that triggers this hook.                     |
| sessionId        | `string`            | ✅       | The Session ID (not Interaction ID) for this event, if applicable. |
| applicationId    | `string`            | ✅       | The related Application ID for this event, if applicable.          |
| application      | `ApplicationEntity` | ✅       | The related application info for this event, if applicable.        |

### Management API context body fields

Data mutation hook events that are triggered by management API calls.

| Field        | Type     | Optional | Notes                                                                                                                  |
| ------------ | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| path         | `string` | ✅       | The path of the API call that triggers this hook.                                                                      |
| method       | `string` | ✅       | The method of the API call that triggers this hook.                                                                    |
| status       | `number` | ✅       | The response status code of the API call that triggers this hook.                                                      |
| params       | `object` | ✅       | The request koa path params of the API call that triggers this hook.                                                   |
| matchedRoute | `string` | ✅       | The koa matched route of the API call that triggers this hook. Logto uses this field to match the enabled hook events. |

### Data payload body fields

#### User events

| Event             | Field | Type       | Optional | Notes                                   |
| ----------------- | ----- | ---------- | -------- | --------------------------------------- |
| User.Created      | data  | UserEntity |          | The created user entity for this event. |
| User.Data.Updated | data  | UserEntity |          | The updated user entity for this event. |
| User.Deleted      | data  | null       | /        |                                         |

#### Role events

```ts
type Role = {
  id: string;
  name: string;
  description: string;
  type: 'User' | 'MachineToMachine';
  isDefault: boolean;
};
```

```ts
type Scope = {
  id: string;
  name: string;
  description: string;
  resourceId: string;
  createdAt: number;
};
```

| Event              | Field  | Type    | Optional | Notes                                                                                                                              |
| ------------------ | ------ | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Role.Created       | data   | Role    |          | The created role entity for this event.                                                                                            |
| Role.Data.Updated  | data   | Role    |          | The updated role entity for this event.                                                                                            |
| Role.Deleted       | data   | null    |          |                                                                                                                                    |
| Role.Scope.Updated | data   | Scope[] |          | The updated scopes assigned to the role.                                                                                           |
| Role.Scope.Updated | roleId | string  | ✅       | The role ID that scopes are assigned to. (Only available when the event was triggered by create new role with pre-assigned scopes) |

#### Permission(Scope) events

| Event              | Field | Type  | Optional | Notes                                    |
| ------------------ | ----- | ----- | -------- | ---------------------------------------- |
| Scope.Created      | data  | Scope |          | The created scope entity for this event. |
| Scope.Data.Updated | data  | Scope |          | The updated scope entity for this event. |
| Scope.Deleted      | data  | null  | /        |                                          |

#### Organization events

```ts
type Organization = {
  id: string;
  name: string;
  description?: string;
  customData: object;
  createdAt: number;
};
```

| Event                           | Field | Type         | Optional | Notes                                           |
| ------------------------------- | ----- | ------------ | -------- | ----------------------------------------------- |
| Organization.Created            | data  | Organization |          | The created organization entity for this event. |
| Organization.Data.Updated       | data  | Organization |          | The updated organization entity for this event. |
| Organization.Deleted            | data  | null         | /        |                                                 |
| Organization.Membership.Updated | data  | null         | /        |                                                 |

#### OrganizationRole events

```ts
type OrganizationRole = {
  id: string;
  name: string;
  description?: string;
};
```

```ts
type OrganizationScope = {
  id: string;
  name: string;
  description?: string;
};
```

| Event                          | Field              | Type             | Optional | Notes                                                                                                                              |
| ------------------------------ | ------------------ | ---------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| OrganizationRole.Created       | data               | OrganizationRole |          | The created organization role entity for this event.                                                                               |
| OrganizationRole.Data.Updated  | data               | OrganizationRole |          | The updated organization role entity for this event.                                                                               |
| OrganizationRole.Deleted       | data               | null             | /        |                                                                                                                                    |
| OrganizationRole.Scope.Updated | data               | null             | /        |                                                                                                                                    |
| OrganizationRole.Scope.Updated | organizationRoleId | string           | ✅       | The role ID that scopes are assigned to. (Only available when the event was triggered by create new role with pre-assigned scopes) |

#### Organization permission(OrganizationScope) events

| Event                          | Field | Type              | Optional | Notes                                  |
| ------------------------------ | ----- | ----------------- | -------- | -------------------------------------- |
| OrganizationScope.Created      | data  | OrganizationScope |          | The created organization scope entity. |
| OrganizationScope.Data.Updated | data  | OrganizationScope |          | The updated organization scope entity. |
| OrganizationScope.Deleted      | data  | null              | /        |                                        |
