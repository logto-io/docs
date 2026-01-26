こちらはサポートされているスコープと対応するクレーム (Claims) の一覧です：

**`openid`**

| Claim name | Type     | 説明                   | Needs userinfo? |
| ---------- | -------- | ---------------------- | --------------- |
| sub        | `string` | ユーザーの一意の識別子 | No              |

**`profile`**

| Claim name | Type     | 説明                                                                                                                                                                                                                                                                                                             | Needs userinfo? |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| name       | `string` | ユーザーのフルネーム                                                                                                                                                                                                                                                                                             | No              |
| username   | `string` | ユーザーのユーザー名                                                                                                                                                                                                                                                                                             | No              |
| picture    | `string` | エンドユーザーのプロフィール画像の URL。この URL は画像ファイル（例：PNG、JPEG、GIF 画像ファイル）を指す必要があります。画像を含む Web ページではありません。この URL は、エンドユーザーを説明する際に表示するのに適したプロフィール写真を参照するべきであり、エンドユーザーが撮影した任意の写真ではありません。 | No              |
| created_at | `number` | エンドユーザーが作成された時刻。時刻は Unix エポック（1970-01-01T00:00:00Z）からのミリ秒数で表されます。                                                                                                                                                                                                         | No              |
| updated_at | `number` | エンドユーザーの情報が最後に更新された時刻。時刻は Unix エポック（1970-01-01T00:00:00Z）からのミリ秒数で表されます。                                                                                                                                                                                             | No              |

その他の [標準クレーム (Standard Claims)](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) には、`family_name`、`given_name`、`middle_name`、`nickname`、`preferred_username`、`profile`、`website`、`gender`、`birthdate`、`zoneinfo`、`locale` などがあり、これらも `profile` スコープに含まれ、userinfo エンドポイントをリクエストする必要はありません。上記のクレームとの違いは、これらのクレームは値が空でない場合のみ返される点です。一方、上記のクレームは値が空の場合 `null` が返されます。

:::note
標準クレームと異なり、`created_at` および `updated_at` クレームは秒ではなくミリ秒を使用しています。
:::

**`email`**

| Claim name     | Type      | 説明                             | Needs userinfo? |
| -------------- | --------- | -------------------------------- | --------------- |
| email          | `string`  | ユーザーのメールアドレス         | No              |
| email_verified | `boolean` | メールアドレスが認証済みかどうか | No              |

**`phone`**

| Claim name            | Type      | 説明                       | Needs userinfo? |
| --------------------- | --------- | -------------------------- | --------------- |
| phone_number          | `string`  | ユーザーの電話番号         | No              |
| phone_number_verified | `boolean` | 電話番号が認証済みかどうか | No              |

**`address`**

アドレスクレームの詳細については [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) を参照してください。

**`custom_data`**

| Claim name  | Type     | 説明                     | Needs userinfo? |
| ----------- | -------- | ------------------------ | --------------- |
| custom_data | `object` | ユーザーのカスタムデータ | Yes             |

**`identities`**

| Claim name     | Type     | 説明                                      | Needs userinfo? |
| -------------- | -------- | ----------------------------------------- | --------------- |
| identities     | `object` | ユーザーのリンク済みアイデンティティ      | Yes             |
| sso_identities | `array`  | ユーザーのリンク済み SSO アイデンティティ | Yes             |

**`roles`**

| Claim name | Type       | 説明                     | Needs userinfo? |
| ---------- | ---------- | ------------------------ | --------------- |
| roles      | `string[]` | ユーザーのロール (Roles) | No              |

**`urn:logto:scope:organizations`**

| Claim name        | Type       | 説明                                            | Needs userinfo? |
| ----------------- | ---------- | ----------------------------------------------- | --------------- |
| organizations     | `string[]` | ユーザーが所属する組織 (Organizations) の ID    | No              |
| organization_data | `object[]` | ユーザーが所属する組織 (Organizations) のデータ | Yes             |

:::note
これらの組織 (Organizations) クレームは、[不透明トークン (Opaque token)](/concepts/opaque-token) を使用する場合にも userinfo エンドポイント経由で取得できます。ただし、不透明トークン (Opaque token) は組織トークン (Organization token) として組織固有リソースへのアクセスには使用できません。詳細は [不透明トークン (Opaque token) と組織 (Organizations)](/concepts/opaque-token#opaque-token-and-organizations) を参照してください。
:::

**`urn:logto:scope:organization_roles`**

| Claim name         | Type       | 説明                                                                                            | Needs userinfo? |
| ------------------ | ---------- | ----------------------------------------------------------------------------------------------- | --------------- |
| organization_roles | `string[]` | ユーザーが所属する組織 (Organizations) のロール (Roles)。形式は `<organization_id>:<role_name>` | No              |

---

パフォーマンスとデータサイズを考慮し、「Needs userinfo?」が「Yes」の場合、そのクレーム (Claim) は ID トークン (ID token) には表示されず、[userinfo エンドポイント](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) のレスポンスで返されます。
