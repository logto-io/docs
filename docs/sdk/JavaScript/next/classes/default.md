## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [navigateUrl](default.md#navigateurl)
- [storage](default.md#storage)

### Accessors

- [ironSessionConfigs](default.md#ironsessionconfigs)

### Methods

- [createNodeClient](default.md#createnodeclient)
- [getLogtoUserFromRequest](default.md#getlogtouserfromrequest)
- [handleSignIn](default.md#handlesignin)
- [handleSignInCallback](default.md#handlesignincallback)
- [handleSignOut](default.md#handlesignout)
- [handleUser](default.md#handleuser)
- [withLogtoApiRoute](default.md#withlogtoapiroute)
- [withLogtoSsr](default.md#withlogtossr)

## Constructors

### constructor

**new default**(`config`)

#### Parameters

| Name     | Type              |
| :------- | :---------------- |
| `config` | `LogtoNextConfig` |

#### Defined in

[packages/next/src/index.ts:15](https://github.com/logto-io/js/blob/f0f78e6/packages/next/src/index.ts#L15)

## Properties

### navigateUrl

`Private` `Optional` **navigateUrl**: `string`

#### Defined in

[packages/next/src/index.ts:13](https://github.com/logto-io/js/blob/f0f78e6/packages/next/src/index.ts#L13)

---

### storage

`Private` `Optional` **storage**: `default`

#### Defined in

[packages/next/src/index.ts:14](https://github.com/logto-io/js/blob/f0f78e6/packages/next/src/index.ts#L14)

## Accessors

### ironSessionConfigs

`Private` `get` **ironSessionConfigs**(): `Object`

#### Returns

`Object`

| Name                   | Type                                         |
| :--------------------- | :------------------------------------------- |
| `cookieName`           | `string`                                     |
| `cookieOptions`        | { `maxAge`: `number` ; `secure`: `boolean` } |
| `cookieOptions.maxAge` | `number`                                     |
| `cookieOptions.secure` | `boolean`                                    |
| `password`             | `string`                                     |

#### Defined in

[packages/next/src/index.ts:98](https://github.com/logto-io/js/blob/f0f78e6/packages/next/src/index.ts#L98)

## Methods

### createNodeClient

`Private` **createNodeClient**(`request`): `default`

#### Parameters

| Name      | Type              |
| :-------- | :---------------- |
| `request` | `IncomingMessage` |

#### Returns

`default`

#### Defined in

[packages/next/src/index.ts:81](https://github.com/logto-io/js/blob/f0f78e6/packages/next/src/index.ts#L81)

---

### getLogtoUserFromRequest

`Private` **getLogtoUserFromRequest**(`request`, `getAccessToken?`): `Promise`<[`LogtoUser`](../types/LogtoUser.md)\>

#### Parameters

| Name              | Type              |
| :---------------- | :---------------- |
| `request`         | `IncomingMessage` |
| `getAccessToken?` | `boolean`         |

#### Returns

`Promise`<[`LogtoUser`](../types/LogtoUser.md)\>

#### Defined in

[packages/next/src/index.ts:109](https://github.com/logto-io/js/blob/f0f78e6/packages/next/src/index.ts#L109)

---

### handleSignIn

**handleSignIn**(`redirectUri?`): `NextApiHandler`<`any`\>

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `redirectUri` | `string` |

#### Returns

`NextApiHandler`<`any`\>

#### Defined in

[packages/next/src/index.ts:17](https://github.com/logto-io/js/blob/f0f78e6/packages/next/src/index.ts#L17)

---

### handleSignInCallback

**handleSignInCallback**(`redirectTo?`): `NextApiHandler`<`any`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `redirectTo` | `string` |

#### Returns

`NextApiHandler`<`any`\>

#### Defined in

[packages/next/src/index.ts:28](https://github.com/logto-io/js/blob/f0f78e6/packages/next/src/index.ts#L28)

---

### handleSignOut

**handleSignOut**(`redirectUri?`): `NextApiHandler`<`any`\>

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `redirectUri` | `string` |

#### Returns

`NextApiHandler`<`any`\>

#### Defined in

[packages/next/src/index.ts:39](https://github.com/logto-io/js/blob/f0f78e6/packages/next/src/index.ts#L39)

---

### handleUser

**handleUser**(`config?`): `NextApiHandler`<`any`\>

#### Parameters

| Name      | Type              |
| :-------- | :---------------- |
| `config?` | `WithLogtoConfig` |

#### Returns

`NextApiHandler`<`any`\>

#### Defined in

[packages/next/src/index.ts:52](https://github.com/logto-io/js/blob/f0f78e6/packages/next/src/index.ts#L52)

---

### withLogtoApiRoute

**withLogtoApiRoute**(`handler`, `config?`): `NextApiHandler`<`any`\>

#### Parameters

| Name      | Type                     |
| :-------- | :----------------------- |
| `handler` | `NextApiHandler`<`any`\> |
| `config`  | `WithLogtoConfig`        |

#### Returns

`NextApiHandler`<`any`\>

#### Defined in

[packages/next/src/index.ts:57](https://github.com/logto-io/js/blob/f0f78e6/packages/next/src/index.ts#L57)

---

### withLogtoSsr

**withLogtoSsr**<`P`\>(`handler`, `config?`): (`context`: `GetServerSidePropsContext`<`ParsedUrlQuery`, `PreviewData`\>) => `Promise`<`GetServerSidePropsResult`<`P`\>\>

#### Type parameters

| Name | Type                                                                    |
| :--- | :---------------------------------------------------------------------- |
| `P`  | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Parameters

| Name      | Type                                                                                                                                                           |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `handler` | (`context`: `GetServerSidePropsContext`<`ParsedUrlQuery`, `PreviewData`\>) => `GetServerSidePropsResult`<`P`\> \| `Promise`<`GetServerSidePropsResult`<`P`\>\> |
| `config`  | `WithLogtoConfig`                                                                                                                                              |

#### Returns

`fn`

(`context`): `Promise`<`GetServerSidePropsResult`<`P`\>\>

##### Parameters

| Name      | Type                                                          |
| :-------- | :------------------------------------------------------------ |
| `context` | `GetServerSidePropsContext`<`ParsedUrlQuery`, `PreviewData`\> |

##### Returns

`Promise`<`GetServerSidePropsResult`<`P`\>\>

#### Defined in

[packages/next/src/index.ts:67](https://github.com/logto-io/js/blob/f0f78e6/packages/next/src/index.ts#L67)
