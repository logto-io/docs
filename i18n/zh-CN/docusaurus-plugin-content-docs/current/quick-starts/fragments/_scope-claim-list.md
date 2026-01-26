以下是支持的权限 (Scopes) 列表及其对应的声明 (Claims)：

**`openid`**

| Claim name | Type     | 描述             | 需要 userinfo 吗？ |
| ---------- | -------- | ---------------- | ------------------ |
| sub        | `string` | 用户的唯一标识符 | 否                 |

**`profile`**

| Claim name | Type     | 描述                                                                                                                                                                            | 需要 userinfo 吗？ |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| name       | `string` | 用户的全名                                                                                                                                                                      | 否                 |
| username   | `string` | 用户名                                                                                                                                                                          | 否                 |
| picture    | `string` | 终端用户头像的 URL。该 URL 必须指向图片文件（如 PNG、JPEG 或 GIF），而不是包含图片的网页。注意，该 URL 应专门指向适合在描述终端用户时展示的头像，而不是终端用户拍摄的任意照片。 | 否                 |
| created_at | `number` | 终端用户的创建时间。该时间以自 Unix 纪元（1970-01-01T00:00:00Z）以来的毫秒数表示。                                                                                              | 否                 |
| updated_at | `number` | 终端用户信息最后更新时间。该时间以自 Unix 纪元（1970-01-01T00:00:00Z）以来的毫秒数表示。                                                                                        | 否                 |

其他 [标准声明 (Claims)](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) 包括 `family_name`、`given_name`、`middle_name`、`nickname`、`preferred_username`、`profile`、`website`、`gender`、`birthdate`、`zoneinfo` 和 `locale` 也会包含在 `profile` 权限 (Scope) 中，无需请求 userinfo 端点。与上表声明 (Claims) 不同的是，这些声明 (Claims) 只有在值不为空时才会返回，而上表中的声明 (Claims) 如果值为空则会返回 `null`。

:::note
与标准声明 (Claims) 不同，`created_at` 和 `updated_at` 声明 (Claims) 使用的是毫秒而不是秒。
:::

**`email`**

| Claim name     | Type      | 描述                   | 需要 userinfo 吗？ |
| -------------- | --------- | ---------------------- | ------------------ |
| email          | `string`  | 用户的电子邮件地址     | 否                 |
| email_verified | `boolean` | 电子邮件地址是否已验证 | 否                 |

**`phone`**

| Claim name            | Type      | 描述               | 需要 userinfo 吗？ |
| --------------------- | --------- | ------------------ | ------------------ |
| phone_number          | `string`  | 用户的电话号码     | 否                 |
| phone_number_verified | `boolean` | 电话号码是否已验证 | 否                 |

**`address`**

关于 address 声明 (Claim) 的详细信息，请参阅 [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim)。

**`custom_data`**

| Claim name  | Type     | 描述             | 需要 userinfo 吗？ |
| ----------- | -------- | ---------------- | ------------------ |
| custom_data | `object` | 用户的自定义数据 | 是                 |

**`identities`**

| Claim name     | Type     | 描述                    | 需要 userinfo 吗？ |
| -------------- | -------- | ----------------------- | ------------------ |
| identities     | `object` | 用户关联的身份信息      | 是                 |
| sso_identities | `array`  | 用户关联的 SSO 身份信息 | 是                 |

**`roles`**

| Claim name | Type       | 描述               | 需要 userinfo 吗？ |
| ---------- | ---------- | ------------------ | ------------------ |
| roles      | `string[]` | 用户的角色 (Roles) | 否                 |

**`urn:logto:scope:organizations`**

| Claim name        | Type       | 描述                                   | 需要 userinfo 吗？ |
| ----------------- | ---------- | -------------------------------------- | ------------------ |
| organizations     | `string[]` | 用户所属的组织 (Organizations) ID 列表 | 否                 |
| organization_data | `object[]` | 用户所属的组织 (Organizations) 数据    | 是                 |

:::note
这些组织 (Organizations) 声明 (Claims) 也可以通过 userinfo 端点获取，当使用 [不透明令牌 (Opaque token)](/concepts/opaque-token) 时也是如此。然而，不透明令牌 (Opaque tokens) 不能作为组织令牌 (Organization tokens) 用于访问组织专属资源。详情请参见 [不透明令牌 (Opaque token) 与组织 (Organizations)](/concepts/opaque-token#opaque-token-and-organizations)。
:::

**`urn:logto:scope:organization_roles`**

| Claim name         | Type       | 描述                                                                                | 需要 userinfo 吗？ |
| ------------------ | ---------- | ----------------------------------------------------------------------------------- | ------------------ |
| organization_roles | `string[]` | 用户所属组织 (Organizations) 的角色 (Roles)，格式为 `<organization_id>:<role_name>` | 否                 |

---

考虑到性能和数据大小，如果“需要 userinfo 吗？”为“是”，则该声明 (Claim) 不会出现在 ID 令牌 (ID token) 中，而会在 [userinfo 端点](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) 响应中返回。
