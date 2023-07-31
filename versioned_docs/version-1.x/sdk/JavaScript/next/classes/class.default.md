## Extends

- `default`

## Constructors

### constructor()

> **new default**(`config`): [`default`](class.default.md)

#### Parameters

| Parameter | Type              |
| :-------- | :---------------- |
| `config`  | `LogtoNextConfig` |

#### Returns

[`default`](class.default.md)

#### Overrides

LogtoNextBaseClient.constructor

#### Source

[packages/next/src/index.ts:17](https://github.com/logto-io/js/blob/54d7193/packages/next/src/index.ts#L17)

## Properties

### adapters

> `protected` `readonly` **adapters**: `Adapters`

#### Source

[packages/next/src/client.ts:12](https://github.com/logto-io/js/blob/54d7193/packages/next/src/client.ts#L12)

#### Inherited from

LogtoNextBaseClient.adapters

---

### config

> `protected` `readonly` **config**: `LogtoNextConfig`

#### Source

[packages/next/src/client.ts:11](https://github.com/logto-io/js/blob/54d7193/packages/next/src/client.ts#L11)

#### Inherited from

LogtoNextBaseClient.config

---

### navigateUrl

> `protected` `optional` **navigateUrl**: `string`

#### Source

[packages/next/src/client.ts:8](https://github.com/logto-io/js/blob/54d7193/packages/next/src/client.ts#L8)

#### Inherited from

LogtoNextBaseClient.navigateUrl

---

### storage

> `protected` `optional` **storage**: `default`

#### Source

[packages/next/src/client.ts:9](https://github.com/logto-io/js/blob/54d7193/packages/next/src/client.ts#L9)

#### Inherited from

LogtoNextBaseClient.storage

## Accessors

### ironSessionConfigs

> `protected` `get` ironSessionConfigs(): `object`

#### Source

[packages/next/src/client.ts:26](https://github.com/logto-io/js/blob/54d7193/packages/next/src/client.ts#L26)

#### Inherited from

LogtoNextBaseClient.ironSessionConfigs

## Methods

### createNodeClient()

> `protected` **createNodeClient**(`session`): `default`

#### Parameters

| Parameter | Type          |
| :-------- | :------------ |
| `session` | `IronSession` |

#### Returns

`default`

#### Inherited from

LogtoNextBaseClient.createNodeClient

#### Source

[packages/next/src/client.ts:15](https://github.com/logto-io/js/blob/54d7193/packages/next/src/client.ts#L15)

---

### getLogtoUserFromRequest()

> `protected` **getLogtoUserFromRequest**(`session`, `configs`): `Promise`\< [`LogtoContext`](../type-aliases/type-alias.LogtoContext.md) \>

#### Parameters

| Parameter | Type                   |
| :-------- | :--------------------- |
| `session` | `IronSession`          |
| `configs` | `GetContextParameters` |

#### Returns

`Promise`\< [`LogtoContext`](../type-aliases/type-alias.LogtoContext.md) \>

#### Inherited from

LogtoNextBaseClient.getLogtoUserFromRequest

#### Source

[packages/next/src/client.ts:37](https://github.com/logto-io/js/blob/54d7193/packages/next/src/client.ts#L37)

---

### handleAuthRoutes()

> **handleAuthRoutes**(`configs`?): `NextApiHandler`

#### Parameters

| Parameter  | Type                   |
| :--------- | :--------------------- |
| `configs`? | `GetContextParameters` |

#### Returns

`NextApiHandler`

#### Source

[packages/next/src/index.ts:67](https://github.com/logto-io/js/blob/54d7193/packages/next/src/index.ts#L67)

---

### handleSignIn()

> **handleSignIn**(`redirectUri` = `...`, `interactionMode`?): `NextApiHandler`

#### Parameters

| Parameter          | Type                                                               |
| :----------------- | :----------------------------------------------------------------- |
| `redirectUri`      | `string`                                                           |
| `interactionMode`? | [`InteractionMode`](../type-aliases/type-alias.InteractionMode.md) |

#### Returns

`NextApiHandler`

#### Source

[packages/next/src/index.ts:23](https://github.com/logto-io/js/blob/54d7193/packages/next/src/index.ts#L23)

---

### handleSignInCallback()

> **handleSignInCallback**(`redirectTo` = `...`): `NextApiHandler`

#### Parameters

| Parameter    | Type     |
| :----------- | :------- |
| `redirectTo` | `string` |

#### Returns

`NextApiHandler`

#### Source

[packages/next/src/index.ts:37](https://github.com/logto-io/js/blob/54d7193/packages/next/src/index.ts#L37)

---

### handleSignOut()

> **handleSignOut**(`redirectUri` = `...`): `NextApiHandler`

#### Parameters

| Parameter     | Type     |
| :------------ | :------- |
| `redirectUri` | `string` |

#### Returns

`NextApiHandler`

#### Source

[packages/next/src/index.ts:48](https://github.com/logto-io/js/blob/54d7193/packages/next/src/index.ts#L48)

---

### handleUser()

> **handleUser**(`configs`?): `NextApiHandler`

#### Parameters

| Parameter  | Type                   |
| :--------- | :--------------------- |
| `configs`? | `GetContextParameters` |

#### Returns

`NextApiHandler`

#### Source

[packages/next/src/index.ts:61](https://github.com/logto-io/js/blob/54d7193/packages/next/src/index.ts#L61)

---

### withLogtoApiRoute()

> **withLogtoApiRoute**(`handler`, `config` = `{}`): `NextApiHandler`

#### Parameters

| Parameter | Type                   |
| :-------- | :--------------------- |
| `handler` | `NextApiHandler`       |
| `config`  | `GetContextParameters` |

#### Returns

`NextApiHandler`

#### Source

[packages/next/src/index.ts:94](https://github.com/logto-io/js/blob/54d7193/packages/next/src/index.ts#L94)

---

### withLogtoSsr()

> **withLogtoSsr**\<`P`\>(`handler`, `configs` = `{}`): (`context`) => `Promise`\< `GetServerSidePropsResult`\< `P` \> \>

#### Type parameters

| Parameter                                       | Default                           |
| :---------------------------------------------- | :-------------------------------- |
| `P` _extends_ `Record`\< `string`, `unknown` \> | `Record`\< `string`, `unknown` \> |

#### Parameters

| Parameter | Type                                                                                                     |
| :-------- | :------------------------------------------------------------------------------------------------------- |
| `handler` | (`context`) => `GetServerSidePropsResult`\< `P` \> \| `Promise`\< `GetServerSidePropsResult`\< `P` \> \> |
| `configs` | `GetContextParameters`                                                                                   |

#### Returns

> > (`context`): `Promise`\< `GetServerSidePropsResult`\< `P` \> \>
>
> ##### Parameters
>
> | Parameter | Type                        |
> | :-------- | :-------------------------- |
> | `context` | `GetServerSidePropsContext` |
>
> ##### Returns
>
> `Promise`\< `GetServerSidePropsResult`\< `P` \> \>
>
> ##### Source
>
> node_modules/.pnpm/iron-session@6.3.1_next@13.3.1/node_modules/iron-session/next/dist/index.d.ts:12

#### Source

[packages/next/src/index.ts:107](https://github.com/logto-io/js/blob/54d7193/packages/next/src/index.ts#L107)
