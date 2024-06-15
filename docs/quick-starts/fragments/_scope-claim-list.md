Here's the list of supported scopes and the corresponding claims:

**`openid`**

| Claim name | Type     | Description                       | Needs userinfo? |
| ---------- | -------- | --------------------------------- | --------------- |
| sub        | `string` | The unique identifier of the user | No              |

**`profile`**

| Claim name | Type     | Description                                                                                                                                                                                                                                                                                                                                                            | Needs userinfo? |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| name       | `string` | The full name of the user                                                                                                                                                                                                                                                                                                                                              | No              |
| username   | `string` | The username of the user                                                                                                                                                                                                                                                                                                                                               | No              |
| picture    | `string` | URL of the End-User's profile picture. This URL MUST refer to an image file (for example, a PNG, JPEG, or GIF image file), rather than to a Web page containing an image. Note that this URL SHOULD specifically reference a profile photo of the End-User suitable for displaying when describing the End-User, rather than an arbitrary photo taken by the End-User. | No              |
| created_at | `number` | Time the End-User was created. The time is represented as the number of milliseconds since the Unix epoch (1970-01-01T00:00:00Z).                                                                                                                                                                                                                                      | No              |
| updated_at | `number` | Time the End-User's information was last updated. The time is represented as the number of milliseconds since the Unix epoch (1970-01-01T00:00:00Z).                                                                                                                                                                                                                   | No              |

Other [standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) include `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `website`, `gender`, `birthdate`, `zoneinfo`, and `locale` will be also included in the `profile` scope without the need for requesting the userinfo endpoint. A difference compared to the claims above is that these claims will only be returned when their values are not empty, while the claims above will return `null` if the values are empty.

:::note
Unlike the standard claims, the `created_at` and `updated_at` claims are using milliseconds instead of seconds.
:::

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

**`address`**

Please refer to the [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) for the details of the address claim.

**`custom_data`**

| Claim name  | Type     | Description                 | Needs userinfo? |
| ----------- | -------- | --------------------------- | --------------- |
| custom_data | `object` | The custom data of the user | Yes             |

**`identities`**

| Claim name     | Type     | Description                           | Needs userinfo? |
| -------------- | -------- | ------------------------------------- | --------------- |
| identities     | `object` | The linked identities of the user     | Yes             |
| sso_identities | `array`  | The linked SSO identities of the user | Yes             |

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
