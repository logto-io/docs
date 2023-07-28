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

../client/lib/errors.d.ts:11

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

../client/lib/errors.d.ts:9

---

### data

> **data**: `unknown`

#### Source

../client/lib/errors.d.ts:10

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
