## Extends

- `default`

## Constructors

### constructor()

> **new default**(`config`, `unstable_enableCache`? = `false`): [`default`](class.default.md)

#### Parameters

| Parameter               | Type                                                       | Default value | Description                                                                      |
| :---------------------- | :--------------------------------------------------------- | :------------ | :------------------------------------------------------------------------------- |
| `config`                | [`LogtoConfig`](../type-aliases/type-alias.LogtoConfig.md) | `undefined`   | The configuration object for the client.                                         |
| `unstable_enableCache`? | `boolean`                                                  | `false`       | Whether to enable cache for well-known data.<br />Use sessionStorage by default. |

#### Returns

[`default`](class.default.md)

#### Overrides

BaseClient.constructor

#### Source

[src/index.ts:38](https://github.com/logto-io/js/blob/54d7193/packages/browser/src/index.ts#L38)

## Properties

### #private

> `private` **#private**: `any`

#### Source

../client/lib/index.d.ts:14

#### Inherited from

BaseClient.#private

---

### accessTokenMap

> `protected` `readonly` **accessTokenMap**: `Map`\< `string`, `AccessToken` \>

#### Source

../client/lib/index.d.ts:27

#### Inherited from

BaseClient.accessTokenMap

---

### adapter

> `protected` `readonly` **adapter**: `ClientAdapterInstance`

#### Source

../client/lib/index.d.ts:26

#### Inherited from

BaseClient.adapter

---

### getJwtVerifyGetKey

> `protected` `readonly` **getJwtVerifyGetKey**: (...`args`) => `Promise`\< `JWTVerifyGetKey` \>

#### Parameters

| Parameter | Type        |
| :-------- | :---------- |
| ...`args` | `unknown`[] |

#### Returns

`Promise`\< `JWTVerifyGetKey` \>

#### Source

../client/lib/index.d.ts:25

#### Inherited from

BaseClient.getJwtVerifyGetKey

---

### getOidcConfig

> `protected` `readonly` **getOidcConfig**: (`this`) => `Promise`\< `KeysToCamelCase`\< \{`authorization_endpoint`: `string`; `end_session_endpoint`: `string`; `issuer`: `string`; `jwks_uri`: `string`; `revocation_endpoint`: `string`; `token_endpoint`: `string`; `userinfo_endpoint`: `string`;} \> \>

#### Parameters

| Parameter | Type      |
| :-------- | :-------- |
| `this`    | `unknown` |

#### Returns

`Promise`\< `KeysToCamelCase`\< \{`authorization_endpoint`: `string`; `end_session_endpoint`: `string`; `issuer`: `string`; `jwks_uri`: `string`; `revocation_endpoint`: `string`; `token_endpoint`: `string`; `userinfo_endpoint`: `string`;} \> \>

#### Source

../client/lib/index.d.ts:16

#### Inherited from

BaseClient.getOidcConfig

---

### logtoConfig

> `protected` `readonly` **logtoConfig**: [`LogtoConfig`](../type-aliases/type-alias.LogtoConfig.md)

#### Source

../client/lib/index.d.ts:15

#### Inherited from

BaseClient.logtoConfig

## Methods

### fetchUserInfo()

> **fetchUserInfo**(): `Promise`\< [`UserInfoResponse`](../type-aliases/type-alias.UserInfoResponse.md) \>

#### Returns

`Promise`\< [`UserInfoResponse`](../type-aliases/type-alias.UserInfoResponse.md) \>

#### Inherited from

BaseClient.fetchUserInfo

#### Source

../client/lib/index.d.ts:35

---

### getAccessToken()

> **getAccessToken**(`resource`?): `Promise`\< `string` \>

#### Parameters

| Parameter   | Type     |
| :---------- | :------- |
| `resource`? | `string` |

#### Returns

`Promise`\< `string` \>

#### Inherited from

BaseClient.getAccessToken

#### Source

../client/lib/index.d.ts:32

---

### getAccessTokenClaims()

> **getAccessTokenClaims**(`resource`?): `Promise`\< `AccessTokenClaims` \>

#### Parameters

| Parameter   | Type     |
| :---------- | :------- |
| `resource`? | `string` |

#### Returns

`Promise`\< `AccessTokenClaims` \>

#### Inherited from

BaseClient.getAccessTokenClaims

#### Source

../client/lib/index.d.ts:34

---

### getIdToken()

> **getIdToken**(): `Promise`\< `Nullable`\< `string` \> \>

#### Returns

`Promise`\< `Nullable`\< `string` \> \>

#### Inherited from

BaseClient.getIdToken

#### Source

../client/lib/index.d.ts:31

---

### getIdTokenClaims()

> **getIdTokenClaims**(): `Promise`\< [`IdTokenClaims`](../type-aliases/type-alias.IdTokenClaims.md) \>

#### Returns

`Promise`\< [`IdTokenClaims`](../type-aliases/type-alias.IdTokenClaims.md) \>

#### Inherited from

BaseClient.getIdTokenClaims

#### Source

../client/lib/index.d.ts:33

---

### getRefreshToken()

> **getRefreshToken**(): `Promise`\< `Nullable`\< `string` \> \>

#### Returns

`Promise`\< `Nullable`\< `string` \> \>

#### Inherited from

BaseClient.getRefreshToken

#### Source

../client/lib/index.d.ts:30

---

### getSignInSession()

> `protected` **getSignInSession**(): `Promise`\< `Nullable`\< `LogtoSignInSessionItem` \> \>

#### Returns

`Promise`\< `Nullable`\< `LogtoSignInSessionItem` \> \>

#### Inherited from

BaseClient.getSignInSession

#### Source

../client/lib/index.d.ts:40

---

### handleSignInCallback()

> **handleSignInCallback**(`callbackUri`): `Promise`\< `void` \>

#### Parameters

| Parameter     | Type     |
| :------------ | :------- |
| `callbackUri` | `string` |

#### Returns

`Promise`\< `void` \>

#### Inherited from

BaseClient.handleSignInCallback

#### Source

../client/lib/index.d.ts:38

---

### isAuthenticated()

> **isAuthenticated**(): `Promise`\< `boolean` \>

#### Returns

`Promise`\< `boolean` \>

#### Inherited from

BaseClient.isAuthenticated

#### Source

../client/lib/index.d.ts:29

---

### isSignInRedirected()

> **isSignInRedirected**(`url`): `Promise`\< `boolean` \>

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `url`     | `string` |

#### Returns

`Promise`\< `boolean` \>

#### Inherited from

BaseClient.isSignInRedirected

#### Source

../client/lib/index.d.ts:37

---

### setSignInSession()

> `protected` **setSignInSession**(`value`): `Promise`\< `void` \>

#### Parameters

| Parameter | Type                                     |
| :-------- | :--------------------------------------- |
| `value`   | `Nullable`\< `LogtoSignInSessionItem` \> |

#### Returns

`Promise`\< `void` \>

#### Inherited from

BaseClient.setSignInSession

#### Source

../client/lib/index.d.ts:41

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

#### Inherited from

BaseClient.signIn

#### Source

../client/lib/index.d.ts:36

---

### signOut()

> **signOut**(`postLogoutRedirectUri`?): `Promise`\< `void` \>

#### Parameters

| Parameter                | Type     |
| :----------------------- | :------- |
| `postLogoutRedirectUri`? | `string` |

#### Returns

`Promise`\< `void` \>

#### Inherited from

BaseClient.signOut

#### Source

../client/lib/index.d.ts:39
