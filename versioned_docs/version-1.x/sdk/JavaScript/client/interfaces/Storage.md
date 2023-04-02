## Table of contents

### Methods

- [getItem](Storage.md#getitem)
- [removeItem](Storage.md#removeitem)
- [setItem](Storage.md#setitem)

## Methods

### getItem

**getItem**(`key`): `Nullable`<`string`\>

#### Parameters

| Name  | Type                                   |
| :---- | :------------------------------------- |
| `key` | [`StorageKey`](../types/StorageKey.md) |

#### Returns

`Nullable`<`string`\>

#### Defined in

[packages/client/src/adapter.ts:7](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/adapter.ts#L7)

---

### removeItem

**removeItem**(`key`): `void`

#### Parameters

| Name  | Type                                   |
| :---- | :------------------------------------- |
| `key` | [`StorageKey`](../types/StorageKey.md) |

#### Returns

`void`

#### Defined in

[packages/client/src/adapter.ts:9](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/adapter.ts#L9)

---

### setItem

**setItem**(`key`, `value`): `void`

#### Parameters

| Name    | Type                                   |
| :------ | :------------------------------------- |
| `key`   | [`StorageKey`](../types/StorageKey.md) |
| `value` | `string`                               |

#### Returns

`void`

#### Defined in

[packages/client/src/adapter.ts:8](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/adapter.ts#L8)
