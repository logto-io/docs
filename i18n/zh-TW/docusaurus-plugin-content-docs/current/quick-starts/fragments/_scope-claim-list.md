以下是支援的權限範圍 (Scopes) 及對應的宣告 (Claims) 清單：

### 標準 OIDC 權限範圍 (Scopes) {#standard-oidc-scopes}

**`openid`**（預設）

| Claim name | Type     | Description                                            |
| ---------- | -------- | ------------------------------------------------------ |
| sub        | `string` | 使用者的唯一識別符 (The unique identifier of the user) |

**`profile`**（預設）

| Claim name | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | `string` | 使用者全名 (The full name of the user)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| username   | `string` | 使用者名稱 (The username of the user)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| picture    | `string` | 終端使用者大頭貼的 URL。此 URL 必須指向圖片檔案（如 PNG、JPEG 或 GIF），而非包含圖片的網頁。請注意，此 URL 應明確指向適合描述終端使用者的個人照片，而非任意由終端使用者拍攝的照片。(URL of the End-User's profile picture. This URL MUST refer to an image file (for example, a PNG, JPEG, or GIF image file), rather than to a Web page containing an image. Note that this URL SHOULD specifically reference a profile photo of the End-User suitable for displaying when describing the End-User, rather than an arbitrary photo taken by the End-User.) |
| created_at | `number` | 終端使用者建立時間。以自 Unix epoch（1970-01-01T00:00:00Z）以來的毫秒數表示。(Time the End-User was created. The time is represented as the number of milliseconds since the Unix epoch (1970-01-01T00:00:00Z).)                                                                                                                                                                                                                                                                                                                                            |
| updated_at | `number` | 終端使用者資訊最後更新時間。以自 Unix epoch（1970-01-01T00:00:00Z）以來的毫秒數表示。(Time the End-User's information was last updated. The time is represented as the number of milliseconds since the Unix epoch (1970-01-01T00:00:00Z).)                                                                                                                                                                                                                                                                                                                 |

其他 [標準宣告 (Standard claims)](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) 包含 `family_name`、`given_name`、`middle_name`、`nickname`、`preferred_username`、`profile`、`website`、`gender`、`birthdate`、`zoneinfo` 及 `locale` 也會包含在 `profile` 權限範圍內，無需額外請求 userinfo endpoint。與上表宣告不同的是，這些宣告僅在其值不為空時才會回傳，而上表宣告若值為空則會回傳 `null`。

:::note
與標準宣告不同，`created_at` 與 `updated_at` 宣告使用毫秒而非秒為單位。
:::

**`email`**

| Claim name     | Type      | Description                                                          |
| -------------- | --------- | -------------------------------------------------------------------- |
| email          | `string`  | 使用者的電子郵件地址 (The email address of the user)                 |
| email_verified | `boolean` | 電子郵件地址是否已驗證 (Whether the email address has been verified) |

**`phone`**

| Claim name            | Type      | Description                                                     |
| --------------------- | --------- | --------------------------------------------------------------- |
| phone_number          | `string`  | 使用者的電話號碼 (The phone number of the user)                 |
| phone_number_verified | `boolean` | 電話號碼是否已驗證 (Whether the phone number has been verified) |

**`address`**

請參閱 [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) 以瞭解 address 宣告的詳細資訊。

:::info
標註為 **（預設）** 的權限範圍 (Scopes) 會由 Logto SDK 自動請求。當請求對應權限範圍時，標準 OIDC 權限範圍下的宣告 (Claims) 會始終包含於 ID 權杖 (ID token) 中，且無法關閉。
:::

### 擴充權限範圍 (Extended scopes) {#extended-scopes}

以下權限範圍由 Logto 擴充，會透過 [userinfo endpoint](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) 回傳宣告 (Claims)。這些宣告也可透過 <CloudLink to="/customize-jwt">Console > Custom JWT</CloudLink> 設定直接包含於 ID 權杖 (ID token) 中。詳情請參閱 [自訂 ID 權杖 (Custom ID token)](/developers/custom-id-token)。

**`custom_data`**

| Claim name  | Type     | Description                                    | Included in ID token by default |
| ----------- | -------- | ---------------------------------------------- | ------------------------------- |
| custom_data | `object` | 使用者的自訂資料 (The custom data of the user) |                                 |

**`identities`**

| Claim name     | Type     | Description                                                   | Included in ID token by default |
| -------------- | -------- | ------------------------------------------------------------- | ------------------------------- |
| identities     | `object` | 使用者的連結身分 (The linked identities of the user)          |                                 |
| sso_identities | `array`  | 使用者的連結 SSO 身分 (The linked SSO identities of the user) |                                 |

**`roles`**

| Claim name | Type       | Description                          | Included in ID token by default |
| ---------- | ---------- | ------------------------------------ | ------------------------------- |
| roles      | `string[]` | 使用者的角色 (The roles of the user) | ✅                              |

**`urn:logto:scope:organizations`**

| Claim name        | Type       | Description                                                      | Included in ID token by default |
| ----------------- | ---------- | ---------------------------------------------------------------- | ------------------------------- |
| organizations     | `string[]` | 使用者所屬的組織 ID (The organization IDs the user belongs to)   | ✅                              |
| organization_data | `object[]` | 使用者所屬的組織資料 (The organization data the user belongs to) |                                 |

:::note
這些組織宣告 (Organization claims) 也可在使用 [不透明權杖 (Opaque token)](/concepts/opaque-token) 時，透過 userinfo endpoint 取得。然而，不透明權杖無法作為組織權杖 (Organization tokens) 來存取組織專屬資源。詳見 [不透明權杖與組織 (Opaque token and organizations)](/concepts/opaque-token#opaque-token-and-organizations)。
:::

**`urn:logto:scope:organization_roles`**

| Claim name         | Type       | Description                                                                                                                                                | Included in ID token by default |
| ------------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| organization_roles | `string[]` | 使用者所屬組織角色，格式為 `<organization_id>:<role_name>` (The organization roles the user belongs to with the format of `<organization_id>:<role_name>`) | ✅                              |
