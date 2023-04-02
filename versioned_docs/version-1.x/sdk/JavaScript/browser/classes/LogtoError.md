## Hierarchy

- `Error`

  ↳ **`LogtoError`**

## Table of contents

### Constructors

- [constructor](LogtoError.md#constructor)

### Properties

- [code](LogtoError.md#code)
- [data](LogtoError.md#data)
- [message](LogtoError.md#message)
- [name](LogtoError.md#name)
- [stack](LogtoError.md#stack)
- [prepareStackTrace](LogtoError.md#preparestacktrace)
- [stackTraceLimit](LogtoError.md#stacktracelimit)

### Methods

- [captureStackTrace](LogtoError.md#capturestacktrace)

## Constructors

### constructor

**new LogtoError**(`code`, `data?`)

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `code`  | [`LogtoErrorCode`](../types/LogtoErrorCode.md) |
| `data?` | `unknown`                                      |

#### Overrides

Error.constructor

#### Defined in

packages/js/lib/index.d.ts:109

## Properties

### code

**code**: [`LogtoErrorCode`](../types/LogtoErrorCode.md)

#### Defined in

packages/js/lib/index.d.ts:107

---

### data

**data**: `unknown`

#### Defined in

packages/js/lib/index.d.ts:108

---

### message

**message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1029

---

### name

**name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1028

---

### stack

`Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/.pnpm/typescript@4.7.2/node_modules/typescript/lib/lib.es5.d.ts:1030

---

### prepareStackTrace

`Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

(`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name          | Type         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

`Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

`Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
