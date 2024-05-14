Here's the list of supported scopes and the corresponding claims:

**`openid`**

| Claim name | Type     | Description                       | Needs userinfo? |
| ---------- | -------- | --------------------------------- | --------------- |
| sub        | `string` | The unique identifier of the user | No              |

**`profile`**

| Claim name | Type     | Description                         | Needs userinfo? |
| ---------- | -------- | ----------------------------------- | --------------- |
| name       | `string` | The full name of the user           | No              |
| username   | `string` | The username of the user            | No              |
| picture    | `string` | The profile picture URL of the user | No              |

**`email`**

| Claim name     | Type      | Description                                 | Needs userinfo? |
| -------------- | --------- | ------------------------------------------- | --------------- |
| email          | `string`  | The email address of the user               | No              |
| email_verified | `boolean` | Whether the email address has been verified | No              |

**`phone`**

| Claim name            | Type      | Description                                | Needs userinfo? |
| --------------------- | --------- | ------------------------------------------ | --------------- |
| phone_number          | `string`  | The phone number of the user               | No              |
| phone_number_verified | `boolean` | Whether the phone number has been verified | No              |

**`custom_data`**

| Claim name  | Type     | Description                 | Needs userinfo? |
| ----------- | -------- | --------------------------- | --------------- |
| custom_data | `object` | The custom data of the user | Yes             |

**`identities`**

| Claim name | Type     | Description                       | Needs userinfo? |
| ---------- | -------- | --------------------------------- | --------------- |
| identities | `object` | The linked identities of the user | Yes             |

**`urn:logto:scope:organizations`**

| Claim name        | Type       | Description                               | Needs userinfo? |
| ----------------- | ---------- | ----------------------------------------- | --------------- |
| organizations     | `string[]` | The organization IDs the user belongs to  | No              |
| organization_data | `object[]` | The organization data the user belongs to | Yes             |

**`urn:logto:scope:organization_roles`**

| Claim name         | Type       | Description                                                                                   | Needs userinfo? |
| ------------------ | ---------- | --------------------------------------------------------------------------------------------- | --------------- |
| organization_roles | `string[]` | The organization roles the user belongs to with the format of `<organization_id>:<role_name>` | No              |

---

Considering performance and the data size, if "Needs userinfo?" is "Yes", it means the claim will not show up in the ID token, but will be returned in the [userinfo endpoint](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) response.
