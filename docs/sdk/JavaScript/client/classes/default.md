## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [\_idToken](default.md#_idtoken)
- [accessTokenMap](default.md#accesstokenmap)
- [adapter](default.md#adapter)
- [getAccessTokenPromiseMap](default.md#getaccesstokenpromisemap)
- [getJwtVerifyGetKey](default.md#getjwtverifygetkey)
- [getOidcConfig](default.md#getoidcconfig)
- [logtoConfig](default.md#logtoconfig)

### Accessors

- [idToken](default.md#idtoken)
- [isAuthenticated](default.md#isauthenticated)
- [refreshToken](default.md#refreshtoken)
- [signInSession](default.md#signinsession)

### Methods

- [\_getJwtVerifyGetKey](default.md#_getjwtverifygetkey)
- [\_getOidcConfig](default.md#_getoidcconfig)
- [getAccessToken](default.md#getaccesstoken)
- [getAccessTokenByRefreshToken](default.md#getaccesstokenbyrefreshtoken)
- [getIdTokenClaims](default.md#getidtokenclaims)
- [handleSignInCallback](default.md#handlesignincallback)
- [isSignInRedirected](default.md#issigninredirected)
- [loadAccessTokenMap](default.md#loadaccesstokenmap)
- [saveAccessTokenMap](default.md#saveaccesstokenmap)
- [saveCodeToken](default.md#savecodetoken)
- [signIn](default.md#signin)
- [signOut](default.md#signout)
- [verifyIdToken](default.md#verifyidtoken)

## Constructors

### constructor

**new default**(`logtoConfig`, `adapter`)

#### Parameters

| Name          | Type                                         |
| :------------ | :------------------------------------------- |
| `logtoConfig` | [`LogtoConfig`](../types/LogtoConfig.md)     |
| `adapter`     | [`ClientAdapter`](../types/ClientAdapter.md) |

#### Defined in

[packages/client/src/index.ts:51](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L51)

## Properties

### \_idToken

`Private` **\_idToken**: `Nullable`<`string`\>

#### Defined in

[packages/client/src/index.ts:49](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L49)

---

### accessTokenMap

`Protected` `Readonly` **accessTokenMap**: `Map`<`string`, { `expiresAt`: `number` ; `scope`: `string` ; `token`: `string` }\>

#### Defined in

[packages/client/src/index.ts:46](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L46)

---

### adapter

`Protected` `Readonly` **adapter**: [`ClientAdapter`](../types/ClientAdapter.md)

#### Defined in

[packages/client/src/index.ts:44](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L44)

---

### getAccessTokenPromiseMap

`Private` `Readonly` **getAccessTokenPromiseMap**: `Map`<`string`, `Promise`<`string`\>\>

#### Defined in

[packages/client/src/index.ts:48](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L48)

---

### getJwtVerifyGetKey

`Protected` `Readonly` **getJwtVerifyGetKey**: () => `Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

#### Type declaration

(): `Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

##### Returns

`Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

#### Defined in

[packages/client/src/index.ts:42](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L42)

---

### getOidcConfig

`Protected` `Readonly` **getOidcConfig**: () => `Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

#### Type declaration

(): `Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

##### Returns

`Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

#### Defined in

[packages/client/src/index.ts:41](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L41)

---

### logtoConfig

`Protected` `Readonly` **logtoConfig**: [`LogtoConfig`](../types/LogtoConfig.md)

#### Defined in

[packages/client/src/index.ts:40](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L40)

## Accessors

### idToken

`get` **idToken**(): `Nullable`<`string`\>

#### Returns

`Nullable`<`string`\>

#### Defined in

[packages/client/src/index.ts:111](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L111)

`set` **idToken**(`idToken`): `void`

#### Parameters

| Name      | Type                  |
| :-------- | :-------------------- |
| `idToken` | `Nullable`<`string`\> |

#### Returns

`void`

#### Defined in

[packages/client/src/index.ts:115](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L115)

---

### isAuthenticated

`get` **isAuthenticated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/client/src/index.ts:65](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L65)

---

### refreshToken

`get` **refreshToken**(): `Nullable`<`string`\>

#### Returns

`Nullable`<`string`\>

#### Defined in

[packages/client/src/index.ts:97](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L97)

`set` **refreshToken**(`refreshToken`): `void`

#### Parameters

| Name           | Type                  |
| :------------- | :-------------------- |
| `refreshToken` | `Nullable`<`string`\> |

#### Returns

`void`

#### Defined in

[packages/client/src/index.ts:101](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L101)

---

### signInSession

`Protected` `get` **signInSession**(): `Nullable`<{ `codeVerifier`: `string` ; `redirectUri`: `string` ; `state`: `string` }\>

#### Returns

`Nullable`<{ `codeVerifier`: `string` ; `redirectUri`: `string` ; `state`: `string` }\>

#### Defined in

[packages/client/src/index.ts:69](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L69)

`Protected` `set` **signInSession**(`logtoSignInSessionItem`): `void`

#### Parameters

| Name                     | Type                                                                                    |
| :----------------------- | :-------------------------------------------------------------------------------------- |
| `logtoSignInSessionItem` | `Nullable`<{ `codeVerifier`: `string` ; `redirectUri`: `string` ; `state`: `string` }\> |

#### Returns

`void`

#### Defined in

[packages/client/src/index.ts:86](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L86)

## Methods

### \_getJwtVerifyGetKey

`Private` **\_getJwtVerifyGetKey**(): `Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

#### Returns

`Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

#### Defined in

[packages/client/src/index.ts:321](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L321)

---

### \_getOidcConfig

`Private` **\_getOidcConfig**(): `Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

#### Returns

`Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

#### Defined in

[packages/client/src/index.ts:314](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L314)

---

### getAccessToken

**getAccessToken**(`resource?`): `Promise`<`string`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `resource?` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/client/src/index.ts:128](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L128)

---

### getAccessTokenByRefreshToken

`Private` **getAccessTokenByRefreshToken**(`resource?`): `Promise`<`string`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `resource?` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/client/src/index.ts:273](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L273)

---

### getIdTokenClaims

**getIdTokenClaims**(): `Object`

#### Returns

`Object`

| Name        | Type               |
| :---------- | :----------------- |
| `at_hash?`  | `null` \| `string` |
| `aud`       | `string`           |
| `avatar?`   | `null` \| `string` |
| `exp`       | `number`           |
| `iat`       | `number`           |
| `iss`       | `string`           |
| `name?`     | `null` \| `string` |
| `sub`       | `string`           |
| `username?` | `null` \| `string` |

#### Defined in

[packages/client/src/index.ts:169](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L169)

---

### handleSignInCallback

**handleSignInCallback**(`callbackUri`): `Promise`<`void`\>

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `callbackUri` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client/src/index.ts:214](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L214)

---

### isSignInRedirected

**isSignInRedirected**(`url`): `boolean`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `url` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/client/src/index.ts:202](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L202)

---

### loadAccessTokenMap

`Private` **loadAccessTokenMap**(): `void`

#### Returns

`void`

#### Defined in

[packages/client/src/index.ts:371](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L371)

---

### saveAccessTokenMap

`Private` **saveAccessTokenMap**(): `void`

#### Returns

`void`

#### Defined in

[packages/client/src/index.ts:356](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L356)

---

### saveCodeToken

`Private` **saveCodeToken**(`__namedParameters`): `void`

#### Parameters

| Name                | Type                                             |
| :------------------ | :----------------------------------------------- |
| `__namedParameters` | `KeysToCamelCase`<`SnakeCaseCodeTokenResponse`\> |

#### Returns

`void`

#### Defined in

[packages/client/src/index.ts:339](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L339)

---

### signIn

**signIn**(`redirectUri`): `Promise`<`void`\>

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `redirectUri` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client/src/index.ts:177](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L177)

---

### signOut

**signOut**(`postLogoutRedirectUri?`): `Promise`<`void`\>

#### Parameters

| Name                     | Type     |
| :----------------------- | :------- |
| `postLogoutRedirectUri?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client/src/index.ts:244](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L244)

---

### verifyIdToken

`Private` **verifyIdToken**(`idToken`): `Promise`<`void`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `idToken` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/client/src/index.ts:327](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/index.ts#L327)
