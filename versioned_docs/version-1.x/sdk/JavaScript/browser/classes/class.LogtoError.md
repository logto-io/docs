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

../js/lib/utils/errors.d.ts:16

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

../js/lib/utils/errors.d.ts:14

---

### data

> **data**: `unknown`

#### Source

../js/lib/utils/errors.d.ts:15

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
