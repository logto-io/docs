## Hierarchy

- `default`

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [accessTokenMap](default.md#accesstokenmap)
- [adapter](default.md#adapter)
- [getJwtVerifyGetKey](default.md#getjwtverifygetkey)
- [getOidcConfig](default.md#getoidcconfig)
- [logtoConfig](default.md#logtoconfig)

### Accessors

- [idToken](default.md#idtoken)
- [isAuthenticated](default.md#isauthenticated)
- [refreshToken](default.md#refreshtoken)
- [signInSession](default.md#signinsession)

### Methods

- [getAccessToken](default.md#getaccesstoken)
- [getIdTokenClaims](default.md#getidtokenclaims)
- [handleSignInCallback](default.md#handlesignincallback)
- [isSignInRedirected](default.md#issigninredirected)
- [signIn](default.md#signin)
- [signOut](default.md#signout)

## Constructors

### constructor

**new default**(`config`)

#### Parameters

| Name     | Type                                     |
| :------- | :--------------------------------------- |
| `config` | [`LogtoConfig`](../types/LogtoConfig.md) |

#### Overrides

BaseClient.constructor

#### Defined in

[packages/browser/src/index.ts:19](https://github.com/logto-io/js/blob/f0f78e6/packages/browser/src/index.ts#L19)

## Properties

### accessTokenMap

`Protected` `Readonly` **accessTokenMap**: `Map`<`string`, { `expiresAt`: `number` ; `scope`: `string` ; `token`: `string` }\>

#### Inherited from

BaseClient.accessTokenMap

#### Defined in

packages/client/lib/index.d.ts:75

---

### adapter

`Protected` `Readonly` **adapter**: `ClientAdapter`

#### Inherited from

BaseClient.adapter

#### Defined in

packages/client/lib/index.d.ts:74

---

### getJwtVerifyGetKey

`Protected` `Readonly` **getJwtVerifyGetKey**: () => `Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

#### Type declaration

(): `Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

##### Returns

`Promise`<`GetKeyFunction`<`JWSHeaderParameters`, `FlattenedJWSInput`\>\>

#### Inherited from

BaseClient.getJwtVerifyGetKey

#### Defined in

packages/client/lib/index.d.ts:73

---

### getOidcConfig

`Protected` `Readonly` **getOidcConfig**: () => `Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

#### Type declaration

(): `Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

##### Returns

`Promise`<`KeysToCamelCase`<`OidcConfigSnakeCaseResponse`\>\>

#### Inherited from

BaseClient.getOidcConfig

#### Defined in

packages/client/lib/index.d.ts:72

---

### logtoConfig

`Protected` `Readonly` **logtoConfig**: [`LogtoConfig`](../types/LogtoConfig.md)

#### Inherited from

BaseClient.logtoConfig

#### Defined in

packages/client/lib/index.d.ts:71

## Accessors

### idToken

`get` **idToken**(): `Nullable`<`string`\>

#### Returns

`Nullable`<`string`\>

#### Inherited from

BaseClient.idToken

#### Defined in

packages/client/lib/index.d.ts:86

`set` **idToken**(`value`): `void`

#### Parameters

| Name    | Type                  |
| :------ | :-------------------- |
| `value` | `Nullable`<`string`\> |

#### Returns

`void`

#### Inherited from

BaseClient.idToken

#### Defined in

packages/client/lib/index.d.ts:87

---

### isAuthenticated

`get` **isAuthenticated**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseClient.isAuthenticated

#### Defined in

packages/client/lib/index.d.ts:81

---

### refreshToken

`get` **refreshToken**(): `Nullable`<`string`\>

#### Returns

`Nullable`<`string`\>

#### Inherited from

BaseClient.refreshToken

#### Defined in

packages/client/lib/index.d.ts:84

`set` **refreshToken**(`value`): `void`

#### Parameters

| Name    | Type                  |
| :------ | :-------------------- |
| `value` | `Nullable`<`string`\> |

#### Returns

`void`

#### Inherited from

BaseClient.refreshToken

#### Defined in

packages/client/lib/index.d.ts:85

---

### signInSession

`Protected` `get` **signInSession**(): `Nullable`<{ `codeVerifier`: `string` ; `redirectUri`: `string` ; `state`: `string` }\>

#### Returns

`Nullable`<{ `codeVerifier`: `string` ; `redirectUri`: `string` ; `state`: `string` }\>

#### Inherited from

BaseClient.signInSession

#### Defined in

packages/client/lib/index.d.ts:82

`Protected` `set` **signInSession**(`logtoSignInSessionItem`): `void`

#### Parameters

| Name                     | Type                                                                                    |
| :----------------------- | :-------------------------------------------------------------------------------------- |
| `logtoSignInSessionItem` | `Nullable`<{ `codeVerifier`: `string` ; `redirectUri`: `string` ; `state`: `string` }\> |

#### Returns

`void`

#### Inherited from

BaseClient.signInSession

#### Defined in

packages/client/lib/index.d.ts:83

## Methods

### getAccessToken

**getAccessToken**(`resource?`): `Promise`<`string`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `resource?` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

BaseClient.getAccessToken

#### Defined in

packages/client/lib/index.d.ts:88

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

#### Inherited from

BaseClient.getIdTokenClaims

#### Defined in

packages/client/lib/index.d.ts:89

---

### handleSignInCallback

**handleSignInCallback**(`callbackUri`): `Promise`<`void`\>

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `callbackUri` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseClient.handleSignInCallback

#### Defined in

packages/client/lib/index.d.ts:92

---

### isSignInRedirected

**isSignInRedirected**(`url`): `boolean`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `url` | `string` |

#### Returns

`boolean`

#### Inherited from

BaseClient.isSignInRedirected

#### Defined in

packages/client/lib/index.d.ts:91

---

### signIn

**signIn**(`redirectUri`): `Promise`<`void`\>

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `redirectUri` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseClient.signIn

#### Defined in

packages/client/lib/index.d.ts:90

---

### signOut

**signOut**(`postLogoutRedirectUri?`): `Promise`<`void`\>

#### Parameters

| Name                     | Type     |
| :----------------------- | :------- |
| `postLogoutRedirectUri?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseClient.signOut

#### Defined in

packages/client/lib/index.d.ts:93
