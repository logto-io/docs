以下是支援的權限範圍 (Scopes) 及對應的宣告 (Claims) 清單：

**`openid`**

| Claim name | Type     | Description        | Needs userinfo? |
| ---------- | -------- | ------------------ | --------------- |
| sub        | `string` | 使用者的唯一識別符 | No              |

**`profile`**

| Claim name | Type     | Description                                                                                                                                                                         | Needs userinfo? |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| name       | `string` | 使用者的全名                                                                                                                                                                        | No              |
| username   | `string` | 使用者的使用者名稱                                                                                                                                                                  | No              |
| picture    | `string` | 終端使用者大頭貼的 URL。此 URL 必須指向圖片檔案（例如 PNG、JPEG 或 GIF），而非包含圖片的網頁。請注意，此 URL 應明確指向適合描述終端使用者的個人照片，而非終端使用者隨意拍攝的照片。 | No              |
| created_at | `number` | 終端使用者建立的時間。時間以自 Unix 紀元（1970-01-01T00:00:00Z）以來的毫秒數表示。                                                                                                  | No              |
| updated_at | `number` | 終端使用者資訊最後更新的時間。時間以自 Unix 紀元（1970-01-01T00:00:00Z）以來的毫秒數表示。                                                                                          | No              |

其他 [標準宣告 (Standard claims)](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) 包含 `family_name`、`given_name`、`middle_name`、`nickname`、`preferred_username`、`profile`、`website`、`gender`、`birthdate`、`zoneinfo` 與 `locale` 也會包含在 `profile` 權限範圍內，無需額外請求 userinfo endpoint。與上表宣告不同的是，這些宣告僅在其值不為空時才會返回，而上表宣告若值為空則會返回 `null`。

:::note
與標準宣告不同，`created_at` 與 `updated_at` 宣告使用毫秒而非秒數。
:::

**`email`**

| Claim name     | Type      | Description            | Needs userinfo? |
| -------------- | --------- | ---------------------- | --------------- |
| email          | `string`  | 使用者的電子郵件地址   | No              |
| email_verified | `boolean` | 電子郵件地址是否已驗證 | No              |

**`phone`**

| Claim name            | Type      | Description        | Needs userinfo? |
| --------------------- | --------- | ------------------ | --------------- |
| phone_number          | `string`  | 使用者的手機號碼   | No              |
| phone_number_verified | `boolean` | 手機號碼是否已驗證 | No              |

**`address`**

請參閱 [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) 以瞭解 address 宣告的詳細資訊。

**`custom_data`**

| Claim name  | Type     | Description      | Needs userinfo? |
| ----------- | -------- | ---------------- | --------------- |
| custom_data | `object` | 使用者的自訂資料 | Yes             |

**`identities`**

| Claim name     | Type     | Description           | Needs userinfo? |
| -------------- | -------- | --------------------- | --------------- |
| identities     | `object` | 使用者的連結身分      | Yes             |
| sso_identities | `array`  | 使用者的連結 SSO 身分 | Yes             |

**`roles`**

| Claim name | Type       | Description          | Needs userinfo? |
| ---------- | ---------- | -------------------- | --------------- |
| roles      | `string[]` | 使用者的角色 (Roles) | No              |

**`urn:logto:scope:organizations`**

| Claim name        | Type       | Description                           | Needs userinfo? |
| ----------------- | ---------- | ------------------------------------- | --------------- |
| organizations     | `string[]` | 使用者所屬的組織 (Organizations) ID   | No              |
| organization_data | `object[]` | 使用者所屬的組織 (Organizations) 資料 | Yes             |

:::note
這些組織 (Organizations) 宣告也可透過 userinfo endpoint 取得（當使用 [不透明權杖 (Opaque token)](/concepts/opaque-token) 時）。但不透明權杖 (Opaque tokens) 無法作為組織權杖 (Organization tokens) 存取組織專屬資源。詳情請見 [不透明權杖 (Opaque token) 與組織 (Organizations)](/concepts/opaque-token#opaque-token-and-organizations)。
:::

**`urn:logto:scope:organization_roles`**

| Claim name         | Type       | Description                                                                           | Needs userinfo? |
| ------------------ | ---------- | ------------------------------------------------------------------------------------- | --------------- |
| organization_roles | `string[]` | 使用者所屬的組織 (Organizations) 角色 (Roles)，格式為 `<organization_id>:<role_name>` | No              |

---

考量效能與資料大小，若 "Needs userinfo?" 為 "Yes"，表示該宣告 (Claim) 不會出現在 ID 權杖 (ID token) 中，而會在 [userinfo endpoint](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) 回應中返回。
