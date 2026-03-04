以下是支持的权限 (Scopes) 及其对应的声明 (Claims) 列表：

### 标准 OIDC 权限 (Scopes) {#standard-oidc-scopes}

**`openid`**（默认）

| Claim name | Type     | Description      |
| ---------- | -------- | ---------------- |
| sub        | `string` | 用户的唯一标识符 |

**`profile`**（默认）

| Claim name | Type     | Description                                                                                                                                                                                      |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name       | `string` | 用户的全名                                                                                                                                                                                       |
| username   | `string` | 用户名                                                                                                                                                                                           |
| picture    | `string` | 终端用户头像的 URL。该 URL 必须指向一个图片文件（例如 PNG、JPEG 或 GIF 图片文件），而不是包含图片的网页。请注意，该 URL 应专门指向适合在描述终端用户时显示的头像，而不是终端用户拍摄的任意照片。 |
| created_at | `number` | 终端用户创建的时间。该时间以自 Unix 纪元（1970-01-01T00:00:00Z）以来的毫秒数表示。                                                                                                               |
| updated_at | `number` | 终端用户信息最后更新时间。该时间以自 Unix 纪元（1970-01-01T00:00:00Z）以来的毫秒数表示。                                                                                                         |

其他 [标准声明 (Claims)](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) 包括 `family_name`、`given_name`、`middle_name`、`nickname`、`preferred_username`、`profile`、`website`、`gender`、`birthdate`、`zoneinfo` 和 `locale` 也会包含在 `profile` 权限 (Scope) 中，无需请求 userinfo 端点。与上表声明 (Claims) 不同的是，这些声明 (Claims) 仅在其值不为空时返回，而上表声明 (Claims) 的值为空时会返回 `null`。

:::note
与标准声明 (Claims) 不同，`created_at` 和 `updated_at` 声明 (Claims) 使用的是毫秒而不是秒。
:::

**`email`**

| Claim name     | Type      | Description              |
| -------------- | --------- | ------------------------ |
| email          | `string`  | 用户的电子邮件地址       |
| email_verified | `boolean` | 电子邮件地址是否已被验证 |

**`phone`**

| Claim name            | Type      | Description          |
| --------------------- | --------- | -------------------- |
| phone_number          | `string`  | 用户的电话号码       |
| phone_number_verified | `boolean` | 电话号码是否已被验证 |

**`address`**

关于 address 声明 (Claim) 的详细信息，请参阅 [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim)。

:::info
带有 **（默认）** 标记的权限 (Scopes) 总是由 Logto SDK 请求。当请求相应权限 (Scope) 时，标准 OIDC 权限 (Scopes) 下的声明 (Claims) 总是包含在 ID 令牌 (ID token) 中——无法关闭。
:::

### 扩展权限 (Scopes) {#extended-scopes}

以下权限 (Scopes) 由 Logto 扩展，并将通过 [userinfo 端点](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) 返回声明 (Claims)。这些声明 (Claims) 也可以通过 <CloudLink to="/customize-jwt">控制台 > 自定义 JWT</CloudLink> 配置为直接包含在 ID 令牌 (ID token) 中。详见 [自定义 ID 令牌 (ID token)](/developers/custom-id-token)。

**`custom_data`**

| Claim name  | Type     | Description      | Included in ID token by default |
| ----------- | -------- | ---------------- | ------------------------------- |
| custom_data | `object` | 用户的自定义数据 |                                 |

**`identities`**

| Claim name     | Type     | Description         | Included in ID token by default |
| -------------- | -------- | ------------------- | ------------------------------- |
| identities     | `object` | 用户关联的身份      |                                 |
| sso_identities | `array`  | 用户关联的 SSO 身份 |                                 |

**`roles`**

| Claim name | Type       | Description        | Included in ID token by default |
| ---------- | ---------- | ------------------ | ------------------------------- |
| roles      | `string[]` | 用户的角色 (Roles) | ✅                              |

**`urn:logto:scope:organizations`**

| Claim name        | Type       | Description                         | Included in ID token by default |
| ----------------- | ---------- | ----------------------------------- | ------------------------------- |
| organizations     | `string[]` | 用户所属的组织 (Organizations) ID   | ✅                              |
| organization_data | `object[]` | 用户所属的组织 (Organizations) 数据 |                                 |

:::note
这些组织 (Organizations) 声明 (Claims) 也可以在使用 [不透明令牌 (Opaque token)](/concepts/opaque-token) 时通过 userinfo 端点获取。但不透明令牌 (Opaque tokens) 不能作为组织令牌 (Organization tokens) 用于访问组织专属资源。详见 [不透明令牌 (Opaque token) 与组织 (Organizations)](/concepts/opaque-token#opaque-token-and-organizations)。
:::

**`urn:logto:scope:organization_roles`**

| Claim name         | Type       | Description                                                                         | Included in ID token by default |
| ------------------ | ---------- | ----------------------------------------------------------------------------------- | ------------------------------- |
| organization_roles | `string[]` | 用户所属组织 (Organizations) 的角色 (Roles)，格式为 `<organization_id>:<role_name>` | ✅                              |
