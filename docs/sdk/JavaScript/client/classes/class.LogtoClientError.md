## Extends

- `Error`

## Constructors

### constructor()

> **new LogtoClientError**(`code`, `data`?): [`LogtoClientError`](class.LogtoClientError.md)

#### Parameters

| Parameter | Type                                                                                                                |
| :-------- | :------------------------------------------------------------------------------------------------------------------ |
| `code`    | `"sign_in_session.invalid"` \| `"sign_in_session.not_found"` \| `"not_authenticated"` \| `"fetch_user_info_failed"` |
| `data`?   | `unknown`                                                                                                           |

#### Returns

[`LogtoClientError`](class.LogtoClientError.md)

#### Overrides

Error.constructor

#### Source

[src/errors.ts:14](https://github.com/logto-io/js/blob/54d7193/packages/client/src/errors.ts#L14)

## Properties

### cause

> `optional` **cause**: `unknown`

#### Source

node_modules/typescript/lib/lib.es2022.error.d.ts:24

#### Inherited from

Error.cause

---

### code

> **code**: `"sign_in_session.invalid"` \| `"sign_in_session.not_found"` \| `"not_authenticated"` \| `"fetch_user_info_failed"`

#### Source

[src/errors.ts:11](https://github.com/logto-io/js/blob/54d7193/packages/client/src/errors.ts#L11)

---

### data

> **data**: `unknown`

#### Source

[src/errors.ts:12](https://github.com/logto-io/js/blob/54d7193/packages/client/src/errors.ts#L12)

---

### message

> **message**: `string`

#### Source

node_modules/typescript/lib/lib.es5.d.ts:1068

#### Inherited from

Error.message

---

### name

> **name**: `string`

#### Source

node_modules/typescript/lib/lib.es5.d.ts:1067

#### Inherited from

Error.name

---

### stack

> `optional` **stack**: `string`

#### Source

node_modules/typescript/lib/lib.es5.d.ts:1069

#### Inherited from

Error.stack

---

### prepareStackTrace

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Parameters

| Parameter     | Type         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

#### Returns

`any`

#### Source

node_modules/@types/node/globals.d.ts:11

#### Inherited from

Error.prepareStackTrace

---

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Source

node_modules/@types/node/globals.d.ts:13

#### Inherited from

Error.stackTraceLimit

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

| Parameter         | Type       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt`? | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Source

node_modules/@types/node/globals.d.ts:4
