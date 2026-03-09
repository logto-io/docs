こちらはサポートされているスコープと対応するクレーム (Claims) の一覧です：

### 標準 OIDC スコープ {#standard-oidc-scopes}

**`openid`**（デフォルト）

| Claim name | Type     | 説明                   |
| ---------- | -------- | ---------------------- |
| sub        | `string` | ユーザーの一意の識別子 |

**`profile`**（デフォルト）

| Claim name | Type     | 説明                                                                                                                                                                                                                                                                                                             |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | `string` | ユーザーのフルネーム                                                                                                                                                                                                                                                                                             |
| username   | `string` | ユーザー名                                                                                                                                                                                                                                                                                                       |
| picture    | `string` | エンドユーザーのプロフィール画像の URL。この URL は画像ファイル（例：PNG、JPEG、GIF 画像ファイル）を指す必要があり、画像を含む Web ページではありません。この URL は、エンドユーザーを説明する際に表示するのに適したプロフィール写真を特に参照するべきであり、エンドユーザーが撮影した任意の写真ではありません。 |
| created_at | `number` | エンドユーザーが作成された時刻。Unix エポック（1970-01-01T00:00:00Z）からのミリ秒数で表されます。                                                                                                                                                                                                                |
| updated_at | `number` | エンドユーザー情報が最後に更新された時刻。Unix エポック（1970-01-01T00:00:00Z）からのミリ秒数で表されます。                                                                                                                                                                                                      |

その他の [標準クレーム (Standard Claims)](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) には、`family_name`、`given_name`、`middle_name`、`nickname`、`preferred_username`、`profile`、`website`、`gender`、`birthdate`、`zoneinfo`、`locale` などがあり、これらも `profile` スコープに含まれます（userinfo エンドポイントをリクエストする必要はありません）。上記のクレームとの違いは、これらのクレームは値が空でない場合のみ返される点です。一方、上記のクレームは値が空の場合 `null` が返されます。

:::note
標準クレーム (Standard Claims) とは異なり、`created_at` および `updated_at` クレームは秒ではなくミリ秒を使用しています。
:::

**`email`**

| Claim name     | Type      | 説明                             |
| -------------- | --------- | -------------------------------- |
| email          | `string`  | ユーザーのメールアドレス         |
| email_verified | `boolean` | メールアドレスが認証済みかどうか |

**`phone`**

| Claim name            | Type      | 説明                       |
| --------------------- | --------- | -------------------------- |
| phone_number          | `string`  | ユーザーの電話番号         |
| phone_number_verified | `boolean` | 電話番号が認証済みかどうか |

**`address`**

アドレスクレームの詳細については [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) を参照してください。

:::info
**（デフォルト）** と記載されたスコープは常に Logto SDK によってリクエストされます。標準 OIDC スコープ下のクレーム (Claims) は、対応するスコープがリクエストされた場合、常に ID トークン (ID token) に含まれます — 無効化できません。
:::

### 拡張スコープ {#extended-scopes}

以下のスコープは Logto によって拡張されており、[userinfo エンドポイント](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) を通じてクレーム (Claims) を返します。これらのクレームは <CloudLink to="/customize-jwt">Console > Custom JWT</CloudLink>
を通じて ID トークン (ID token) に直接含めるよう設定することもできます。詳細は [カスタム ID トークン](/developers/custom-id-token) を参照してください。

**`custom_data`**

| Claim name  | Type     | 説明                     | デフォルトで ID トークンに含まれるか |
| ----------- | -------- | ------------------------ | ------------------------------------ |
| custom_data | `object` | ユーザーのカスタムデータ |                                      |

**`identities`**

| Claim name     | Type     | 説明                                      | デフォルトで ID トークンに含まれるか |
| -------------- | -------- | ----------------------------------------- | ------------------------------------ |
| identities     | `object` | ユーザーのリンク済みアイデンティティ      |                                      |
| sso_identities | `array`  | ユーザーのリンク済み SSO アイデンティティ |                                      |

**`roles`**

| Claim name | Type       | 説明             | デフォルトで ID トークンに含まれるか |
| ---------- | ---------- | ---------------- | ------------------------------------ |
| roles      | `string[]` | ユーザーのロール | ✅                                   |

**`urn:logto:scope:organizations`**

| Claim name        | Type       | 説明                         | デフォルトで ID トークンに含まれるか |
| ----------------- | ---------- | ---------------------------- | ------------------------------------ |
| organizations     | `string[]` | ユーザーが所属する組織 ID    | ✅                                   |
| organization_data | `object[]` | ユーザーが所属する組織データ |                                      |

:::note
これらの組織クレーム (Organization Claims) は、[不透明トークン (Opaque token)](/concepts/opaque-token) を使用している場合でも userinfo エンドポイント経由で取得できます。ただし、不透明トークン (Opaque token) は組織トークン (Organization token) として組織固有リソースへのアクセスには使用できません。詳細は [不透明トークン (Opaque token) と組織 (Organizations)](/concepts/opaque-token#opaque-token-and-organizations) を参照してください。
:::

**`urn:logto:scope:organization_roles`**

| Claim name         | Type       | 説明                                                                 | デフォルトで ID トークンに含まれるか |
| ------------------ | ---------- | -------------------------------------------------------------------- | ------------------------------------ |
| organization_roles | `string[]` | ユーザーが所属する組織ロール（`<organization_id>:<role_name>` 形式） | ✅                                   |
