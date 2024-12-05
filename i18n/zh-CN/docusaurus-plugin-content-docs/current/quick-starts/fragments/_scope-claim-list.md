以下是支持的权限（Scopes）及其对应的声明（Claims）列表：

**`openid`**

| 声明名称 | 类型     | 描述             | 需要用户信息吗？ |
| -------- | -------- | ---------------- | ---------------- |
| sub      | `string` | 用户的唯一标识符 | 否               |

**`profile`**

| 声明名称   | 类型     | 描述                                                                                                                                                                                                                          | 需要用户信息吗？ |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| name       | `string` | 用户的全名                                                                                                                                                                                                                    | 否               |
| username   | `string` | 用户名                                                                                                                                                                                                                        | 否               |
| picture    | `string` | 终端用户的个人资料图片的 URL。此 URL 必须指向一个图像文件（例如，PNG、JPEG 或 GIF 图像文件），而不是包含图像的网页。请注意，此 URL 应特别引用适合在描述终端用户时显示的终端用户的个人资料照片，而不是终端用户拍摄的任意照片。 | 否               |
| created_at | `number` | 终端用户创建的时间。时间表示为自 Unix 纪元（1970-01-01T00:00:00Z）以来的毫秒数。                                                                                                                                              | 否               |
| updated_at | `number` | 终端用户信息最后更新的时间。时间表示为自 Unix 纪元（1970-01-01T00:00:00Z）以来的毫秒数。                                                                                                                                      | 否               |

其他 [标准声明](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) 包括 `family_name`、`given_name`、`middle_name`、`nickname`、`preferred_username`、`profile`、`website`、`gender`、`birthdate`、`zoneinfo` 和 `locale` 也将包含在 `profile` 权限中，而无需请求用户信息端点。与上述声明的区别在于，这些声明只有在其值不为空时才会返回，而上述声明在值为空时将返回 `null`。

:::note
与标准声明不同，`created_at` 和 `updated_at` 声明使用毫秒而不是秒。
:::

**`email`**

| 声明名称       | 类型      | 描述                   | 需要用户信息吗？ |
| -------------- | --------- | ---------------------- | ---------------- |
| email          | `string`  | 用户的电子邮件地址     | 否               |
| email_verified | `boolean` | 电子邮件地址是否已验证 | 否               |

**`phone`**

| 声明名称              | 类型      | 描述               | 需要用户信息吗？ |
| --------------------- | --------- | ------------------ | ---------------- |
| phone_number          | `string`  | 用户的电话号码     | 否               |
| phone_number_verified | `boolean` | 电话号码是否已验证 | 否               |

**`address`**

请参阅 [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) 以获取地址声明的详细信息。

**`custom_data`**

| 声明名称    | 类型     | 描述             | 需要用户信息吗？ |
| ----------- | -------- | ---------------- | ---------------- |
| custom_data | `object` | 用户的自定义数据 | 是               |

**`identities`**

| 声明名称       | 类型     | 描述                | 需要用户信息吗？ |
| -------------- | -------- | ------------------- | ---------------- |
| identities     | `object` | 用户的关联身份      | 是               |
| sso_identities | `array`  | 用户的关联 SSO 身份 | 是               |

**`urn:logto:scope:organizations`**

| 声明名称          | 类型       | 描述               | 需要用户信息吗？ |
| ----------------- | ---------- | ------------------ | ---------------- |
| organizations     | `string[]` | 用户所属的组织 ID  | 否               |
| organization_data | `object[]` | 用户所属的组织数据 | 是               |

**`urn:logto:scope:organization_roles`**

| 声明名称           | 类型       | 描述                                                       | 需要用户信息吗？ |
| ------------------ | ---------- | ---------------------------------------------------------- | ---------------- |
| organization_roles | `string[]` | 用户所属的组织角色，格式为 `<organization_id>:<role_name>` | 否               |

---

考虑到性能和数据大小，如果“需要用户信息吗？”为“是”，则表示声明不会显示在 ID 令牌中，而会在 [用户信息端点](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) 响应中返回。