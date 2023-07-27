## Constructors

### constructor()

> **new default**(`logtoConfig`, `adapter`): [`default`](class.default.md)

#### Parameters

| Parameter     | Type                                                           |
| :------------ | :------------------------------------------------------------- |
| `logtoConfig` | [`LogtoConfig`](../type-aliases/type-alias.LogtoConfig.md)     |
| `adapter`     | [`ClientAdapter`](../type-aliases/type-alias.ClientAdapter.md) |

#### Returns

[`default`](class.default.md)

#### Source

[src/index.ts:60](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L60)

## Properties

### accessTokenMap

> `protected` `readonly` **accessTokenMap**: `Map`\< `string`, [`AccessToken`](../type-aliases/type-alias.AccessToken.md) \>

#### Source

[src/index.ts:58](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L58)

---

### adapter

> `protected` `readonly` **adapter**: `ClientAdapterInstance`

#### Source

[src/index.ts:57](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L57)

---

### getJwtVerifyGetKey

> `protected` `readonly` **getJwtVerifyGetKey**: `Procedure`\< `Promise`\< `JWTVerifyGetKey` \> \>

#### Source

[src/index.ts:56](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L56)

---

### getOidcConfig

> `protected` `readonly` **getOidcConfig**: (`this`, ...`args`) => `Promise`\< `KeysToCamelCase`\< `OidcConfigSnakeCaseResponse` \> \>

#### Parameters

| Parameter | Type      |
| :-------- | :-------- |
| `this`    | `unknown` |
| ...`args` | []        |

#### Returns

`Promise`\< `KeysToCamelCase`\< `OidcConfigSnakeCaseResponse` \> \>

#### Source

[src/index.ts:55](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L55)

---

### logtoConfig

> `protected` `readonly` **logtoConfig**: [`LogtoConfig`](../type-aliases/type-alias.LogtoConfig.md)

#### Source

[src/index.ts:54](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L54)

## Methods

### #getJwtVerifyGetKey()

> `private` **#getJwtVerifyGetKey**(): `Promise`\< `JWTVerifyGetKey` \>

#### Returns

`Promise`\< `JWTVerifyGetKey` \>

#### Source

[src/index.ts:364](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L364)

---

### #getOidcConfig()

> `private` **#getOidcConfig**(): `Promise`\< `KeysToCamelCase`\< `OidcConfigSnakeCaseResponse` \> \>

#### Returns

`Promise`\< `KeysToCamelCase`\< `OidcConfigSnakeCaseResponse` \> \>

#### Source

[src/index.ts:355](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L355)

---

### fetchUserInfo()

> **fetchUserInfo**(): `Promise`\< [`UserInfoResponse`](../type-aliases/type-alias.UserInfoResponse.md) \>

#### Returns

`Promise`\< [`UserInfoResponse`](../type-aliases/type-alias.UserInfoResponse.md) \>

#### Source

[src/index.ts:122](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L122)

---

### getAccessToken()

> **getAccessToken**(`resource`?): `Promise`\< `string` \>

#### Parameters

| Parameter   | Type     |
| :---------- | :------- |
| `resource`? | `string` |

#### Returns

`Promise`\< `string` \>

#### Source

[src/index.ts:83](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L83)

---

### getAccessTokenByRefreshToken()

> `private` **getAccessTokenByRefreshToken**(`resource`?): `Promise`\< `string` \>

#### Parameters

| Parameter   | Type     |
| :---------- | :------- |
| `resource`? | `string` |

#### Returns

`Promise`\< `string` \>

#### Source

[src/index.ts:271](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L271)

---

### getAccessTokenClaims()

> **getAccessTokenClaims**(`resource`?): `Promise`\< `AccessTokenClaims` \>

#### Parameters

| Parameter   | Type     |
| :---------- | :------- |
| `resource`? | `string` |

#### Returns

`Promise`\< `AccessTokenClaims` \>

#### Source

[src/index.ts:116](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L116)

---

### getIdToken()

> **getIdToken**(): `Promise`\< `Nullable`\< `string` \> \>

#### Returns

`Promise`\< `Nullable`\< `string` \> \>

#### Source

[src/index.ts:79](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L79)

---

### getIdTokenClaims()

> **getIdTokenClaims**(): `Promise`\< [`IdTokenClaims`](../type-aliases/type-alias.IdTokenClaims.md) \>

#### Returns

`Promise`\< [`IdTokenClaims`](../type-aliases/type-alias.IdTokenClaims.md) \>

#### Source

[src/index.ts:106](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L106)

---

### getRefreshToken()

> **getRefreshToken**(): `Promise`\< `Nullable`\< `string` \> \>

#### Returns

`Promise`\< `Nullable`\< `string` \> \>

#### Source

[src/index.ts:75](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L75)

---

### getSignInSession()

> `protected` **getSignInSession**(): `Promise`\< `Nullable`\< [`LogtoSignInSessionItem`](../type-aliases/type-alias.LogtoSignInSessionItem.md) \> \>

#### Returns

`Promise`\< `Nullable`\< [`LogtoSignInSessionItem`](../type-aliases/type-alias.LogtoSignInSessionItem.md) \> \>

#### Source

[src/index.ts:243](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L243)

---

### handleSignInCallback()

> **handleSignInCallback**(`callbackUri`): `Promise`\< `void` \>

#### Parameters

| Parameter     | Type     |
| :------------ | :------- |
| `callbackUri` | `string` |

#### Returns

`Promise`\< `void` \>

#### Source

[src/index.ts:171](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L171)

---

### isAuthenticated()

> **isAuthenticated**(): `Promise`\< `boolean` \>

#### Returns

`Promise`\< `boolean` \>

#### Source

[src/index.ts:71](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L71)

---

### isSignInRedirected()

> **isSignInRedirected**(`url`): `Promise`\< `boolean` \>

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `url`     | `string` |

#### Returns

`Promise`\< `boolean` \>

#### Source

[src/index.ts:159](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L159)

---

### loadAccessTokenMap()

> `private` **loadAccessTokenMap**(): `Promise`\< `void` \>

#### Returns

`Promise`\< `void` \>

#### Source

[src/index.ts:332](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L332)

---

### saveAccessTokenMap()

> `private` **saveAccessTokenMap**(): `Promise`\< `void` \>

#### Returns

`Promise`\< `void` \>

#### Source

[src/index.ts:321](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L321)

---

### setIdToken()

> `private` **setIdToken**(`value`): `Promise`\< `void` \>

#### Parameters

| Parameter | Type                     |
| :-------- | :----------------------- |
| `value`   | `Nullable`\< `string` \> |

#### Returns

`Promise`\< `void` \>

#### Source

[src/index.ts:263](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L263)

---

### setRefreshToken()

> `private` **setRefreshToken**(`value`): `Promise`\< `void` \>

#### Parameters

| Parameter | Type                     |
| :-------- | :----------------------- |
| `value`   | `Nullable`\< `string` \> |

#### Returns

`Promise`\< `void` \>

#### Source

[src/index.ts:267](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L267)

---

### setSignInSession()

> `protected` **setSignInSession**(`value`): `Promise`\< `void` \>

#### Parameters

| Parameter | Type                                                                                             |
| :-------- | :----------------------------------------------------------------------------------------------- |
| `value`   | `Nullable`\< [`LogtoSignInSessionItem`](../type-aliases/type-alias.LogtoSignInSessionItem.md) \> |

#### Returns

`Promise`\< `void` \>

#### Source

[src/index.ts:259](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L259)

---

### signIn()

> **signIn**(`redirectUri`, `interactionMode`?): `Promise`\< `void` \>

#### Parameters

| Parameter          | Type                                                               |
| :----------------- | :----------------------------------------------------------------- |
| `redirectUri`      | `string`                                                           |
| `interactionMode`? | [`InteractionMode`](../type-aliases/type-alias.InteractionMode.md) |

#### Returns

`Promise`\< `void` \>

#### Source

[src/index.ts:133](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L133)

---

### signOut()

> **signOut**(`postLogoutRedirectUri`?): `Promise`\< `void` \>

#### Parameters

| Parameter                | Type     |
| :----------------------- | :------- |
| `postLogoutRedirectUri`? | `string` |

#### Returns

`Promise`\< `void` \>

#### Source

[src/index.ts:216](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L216)

---

### verifyIdToken()

> `private` **verifyIdToken**(`idToken`): `Promise`\< `void` \>

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `idToken` | `string` |

#### Returns

`Promise`\< `void` \>

#### Source

[src/index.ts:313](https://github.com/logto-io/js/blob/54d7193/packages/client/src/index.ts#L313)
