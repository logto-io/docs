**ClientAdapter**: `object`

## Type declaration

### generateCodeChallenge

**generateCodeChallenge**: (`codeVerifier`) => `Promise`\< `string` \>

#### Parameters

| Parameter      | Type     |
| :------------- | :------- |
| `codeVerifier` | `string` |

#### Returns

`Promise`\< `string` \>

---

### generateCodeVerifier

**generateCodeVerifier**: () => `string`

#### Returns

`string`

---

### generateState

**generateState**: () => `string`

#### Returns

`string`

---

### navigate

**navigate**: `Navigate`

---

### requester

**requester**: `Requester`

---

### storage

**storage**: [`Storage`](type-alias.Storage.md)\< [`StorageKey`](type-alias.StorageKey.md) \| [`PersistKey`](../enumerations/enumeration.PersistKey.md) \>

---

### unstable_cache

`optional` **unstable_cache**: [`Storage`](type-alias.Storage.md)\< [`CacheKey`](../enumerations/enumeration.CacheKey.md) \>

An optional storage for caching well-known data.

#### See

[CacheKey](../enumerations/enumeration.CacheKey.md)

## Source

[src/adapter/types.ts:39](https://github.com/logto-io/js/blob/54d7193/packages/client/src/adapter/types.ts#L39)
