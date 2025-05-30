以下是支援的權限範圍 (Scopes) 及其對應的宣告 (Claims)：

**`openid`**

| 宣告名稱 | 類型     | 描述               | 需要使用者資訊嗎？ |
| -------- | -------- | ------------------ | ------------------ |
| sub      | `string` | 使用者的唯一識別符 | 否                 |

**`profile`**

| 宣告名稱   | 類型     | 描述                                                                                                                                                                                                   | 需要使用者資訊嗎？ |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| name       | `string` | 使用者的全名                                                                                                                                                                                           | 否                 |
| username   | `string` | 使用者的用戶名                                                                                                                                                                                         | 否                 |
| picture    | `string` | 使用者個人資料圖片的 URL。此 URL 必須指向圖像文件（例如 PNG、JPEG 或 GIF 圖像文件），而不是包含圖像的網頁。請注意，此 URL 應特別參考適合在描述使用者時顯示的個人資料照片，而不是使用者拍攝的任意照片。 | 否                 |
| created_at | `number` | 使用者創建的時間。時間以自 Unix epoch（1970-01-01T00:00:00Z）以來的毫秒數表示。                                                                                                                        | 否                 |
| updated_at | `number` | 使用者資訊最後更新的時間。時間以自 Unix epoch（1970-01-01T00:00:00Z）以來的毫秒數表示。                                                                                                                | 否                 |

其他 [標準宣告](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) 包括 `family_name`、`given_name`、`middle_name`、`nickname`、`preferred_username`、`profile`、`website`、`gender`、`birthdate`、`zoneinfo` 和 `locale` 也將包含在 `profile` 權限範圍中，無需請求使用者資訊端點。與上述宣告的不同之處在於，這些宣告僅在其值不為空時返回，而上述宣告在值為空時將返回 `null`。

:::note
與標準宣告不同，`created_at` 和 `updated_at` 宣告使用毫秒而非秒。
:::

**`email`**

| 宣告名稱       | 類型      | 描述                   | 需要使用者資訊嗎？ |
| -------------- | --------- | ---------------------- | ------------------ |
| email          | `string`  | 使用者的電子郵件地址   | 否                 |
| email_verified | `boolean` | 電子郵件地址是否已驗證 | 否                 |

**`phone`**

| 宣告名稱              | 類型      | 描述               | 需要使用者資訊嗎？ |
| --------------------- | --------- | ------------------ | ------------------ |
| phone_number          | `string`  | 使用者的電話號碼   | 否                 |
| phone_number_verified | `boolean` | 電話號碼是否已驗證 | 否                 |

**`address`**

請參閱 [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) 以獲取地址宣告的詳細資訊。

**`custom_data`**

| 宣告名稱    | 類型     | 描述             | 需要使用者資訊嗎？ |
| ----------- | -------- | ---------------- | ------------------ |
| custom_data | `object` | 使用者的自訂資料 | 是                 |

**`identities`**

| 宣告名稱       | 類型     | 描述                  | 需要使用者資訊嗎？ |
| -------------- | -------- | --------------------- | ------------------ |
| identities     | `object` | 使用者的連結身分      | 是                 |
| sso_identities | `array`  | 使用者的連結 SSO 身分 | 是                 |

**`roles`**

| 宣告名稱 | 類型       | 描述         | 需要使用者資訊嗎？ |
| -------- | ---------- | ------------ | ------------------ |
| roles    | `string[]` | 使用者的角色 | 否                 |

**`urn:logto:scope:organizations`**

| 宣告名稱          | 類型       | 描述                 | 需要使用者資訊嗎？ |
| ----------------- | ---------- | -------------------- | ------------------ |
| organizations     | `string[]` | 使用者所屬的組織 ID  | 否                 |
| organization_data | `object[]` | 使用者所屬的組織資料 | 是                 |

**`urn:logto:scope:organization_roles`**

| 宣告名稱           | 類型       | 描述                                                         | 需要使用者資訊嗎？ |
| ------------------ | ---------- | ------------------------------------------------------------ | ------------------ |
| organization_roles | `string[]` | 使用者所屬的組織角色，格式為 `<organization_id>:<role_name>` | 否                 |

---

考慮到效能和資料大小，如果「需要使用者資訊嗎？」為「是」，則表示該宣告不會顯示在 ID 權杖中，而會在 [使用者資訊端點](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) 回應中返回。
