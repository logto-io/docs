Here's the list of supported scopes and the corresponding claims:

### Standard OIDC scopes

**`openid`** (default)

| Claim name | Type     | Description                       |
| ---------- | -------- | --------------------------------- |
| sub        | `string` | The unique identifier of the user |

**`profile`** (default)

| Claim name | Type     | Description                                                                                                                                                                                                                                                                                                                                                            |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | `string` | The full name of the user                                                                                                                                                                                                                                                                                                                                              |
| username   | `string` | The username of the user                                                                                                                                                                                                                                                                                                                                               |
| picture    | `string` | URL of the End-User's profile picture. This URL MUST refer to an image file (for example, a PNG, JPEG, or GIF image file), rather than to a Web page containing an image. Note that this URL SHOULD specifically reference a profile photo of the End-User suitable for displaying when describing the End-User, rather than an arbitrary photo taken by the End-User. |
| created_at | `number` | Time the End-User was created. The time is represented as the number of milliseconds since the Unix epoch (1970-01-01T00:00:00Z).                                                                                                                                                                                                                                      |
| updated_at | `number` | Time the End-User's information was last updated. The time is represented as the number of milliseconds since the Unix epoch (1970-01-01T00:00:00Z).                                                                                                                                                                                                                   |

Other [standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) include `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `website`, `gender`, `birthdate`, `zoneinfo`, and `locale` will be also included in the `profile` scope without the need for requesting the userinfo endpoint. A difference compared to the claims above is that these claims will only be returned when their values are not empty, while the claims above will return `null` if the values are empty.

:::note
Unlike the standard claims, the `created_at` and `updated_at` claims are using milliseconds instead of seconds.
:::

**`email`**

| Claim name     | Type      | Description                                 |
| -------------- | --------- | ------------------------------------------- |
| email          | `string`  | The email address of the user               |
| email_verified | `boolean` | Whether the email address has been verified |

**`phone`**

| Claim name            | Type      | Description                                |
| --------------------- | --------- | ------------------------------------------ |
| phone_number          | `string`  | The phone number of the user               |
| phone_number_verified | `boolean` | Whether the phone number has been verified |

**`address`**

Please refer to the [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) for the details of the address claim.

:::info
Scopes marked with **(default)** are always requested by the Logto SDK. Claims under standard OIDC scopes are always included in the ID token when the corresponding scope is requested — they cannot be turned off.
:::

### Extended scopes

The following scopes are extended by Logto and will return claims through the [userinfo endpoint](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo). These claims can also be configured to be included directly in the ID token through <CloudLink to="/customize-jwt">Console > Custom JWT</CloudLink>. See [Custom ID token](/developers/custom-id-token) for more details.

**`custom_data`**

| Claim name  | Type     | Description                 | Included in ID token by default |
| ----------- | -------- | --------------------------- | ------------------------------- |
| custom_data | `object` | The custom data of the user |                                 |

**`identities`**

| Claim name     | Type     | Description                           | Included in ID token by default |
| -------------- | -------- | ------------------------------------- | ------------------------------- |
| identities     | `object` | The linked identities of the user     |                                 |
| sso_identities | `array`  | The linked SSO identities of the user |                                 |

**`roles`**

| Claim name | Type       | Description           | Included in ID token by default |
| ---------- | ---------- | --------------------- | ------------------------------- |
| roles      | `string[]` | The roles of the user | ✅                              |

**`urn:logto:scope:organizations`**

| Claim name        | Type       | Description                               | Included in ID token by default |
| ----------------- | ---------- | ----------------------------------------- | ------------------------------- |
| organizations     | `string[]` | The organization IDs the user belongs to  | ✅                              |
| organization_data | `object[]` | The organization data the user belongs to |                                 |

:::note
These organization claims can also be retrieved via the userinfo endpoint when using an [opaque token](/concepts/opaque-token). However, opaque tokens cannot be used as organization tokens for accessing organization-specific resources. See [Opaque token and organizations](/concepts/opaque-token#opaque-token-and-organizations) for more details.
:::

**`urn:logto:scope:organization_roles`**

| Claim name         | Type       | Description                                                                                   | Included in ID token by default |
| ------------------ | ---------- | --------------------------------------------------------------------------------------------- | ------------------------------- |
| organization_roles | `string[]` | The organization roles the user belongs to with the format of `<organization_id>:<role_name>` | ✅                              |
