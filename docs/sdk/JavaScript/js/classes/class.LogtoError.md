## Extends

- `Error`

## Constructors

### constructor()

> **new LogtoError**(`code`, `data`?): [`LogtoError`](class.LogtoError.md)

#### Parameters

| Parameter | Type                                                                                                                                                                                                                                                                                                                                                                          |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`    | `"id_token.invalid_iat"` \| `"id_token.invalid_token"` \| `"callback_uri_verification.redirect_uri_mismatched"` \| `"callback_uri_verification.error_found"` \| `"callback_uri_verification.missing_state"` \| `"callback_uri_verification.state_mismatched"` \| `"callback_uri_verification.missing_code"` \| `"crypto_subtle_unavailable"` \| `"unexpected_response_error"` |
| `data`?   | `unknown`                                                                                                                                                                                                                                                                                                                                                                     |

#### Returns

[`LogtoError`](class.LogtoError.md)

#### Overrides

Error.constructor

#### Source

[src/utils/errors.ts:22](https://github.com/logto-io/js/blob/d2c2dce/packages/js/src/utils/errors.ts#L22)

## Properties

### cause

> `optional` **cause**: `unknown`

#### Source

node_modules/typescript/lib/lib.es2022.error.d.ts:24

#### Inherited from

Error.cause

---

### code

> **code**: `"id_token.invalid_iat"` \| `"id_token.invalid_token"` \| `"callback_uri_verification.redirect_uri_mismatched"` \| `"callback_uri_verification.error_found"` \| `"callback_uri_verification.missing_state"` \| `"callback_uri_verification.state_mismatched"` \| `"callback_uri_verification.missing_code"` \| `"crypto_subtle_unavailable"` \| `"unexpected_response_error"`

#### Source

[src/utils/errors.ts:19](https://github.com/logto-io/js/blob/d2c2dce/packages/js/src/utils/errors.ts#L19)

---

### data

> **data**: `unknown`

#### Source

[src/utils/errors.ts:20](https://github.com/logto-io/js/blob/d2c2dce/packages/js/src/utils/errors.ts#L20)

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
