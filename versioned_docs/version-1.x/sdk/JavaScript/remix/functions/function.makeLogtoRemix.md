**makeLogtoRemix**(`config`, `deps`): `Readonly`\< \{`getContext`: (`dto`) => (`request`) => `Promise`\< [`LogtoContext`](../type-aliases/type-alias.LogtoContext.md) \>; `handleAuthRoutes`: (`dto`) => `LoaderFunction`;} \>

## Parameters

| Parameter             | Type             |
| :-------------------- | :--------------- |
| `config`              | `Config`         |
| `deps`                | `object`         |
| `deps.sessionStorage` | `SessionStorage` |

## Returns

`Readonly`\< \{`getContext`: (`dto`) => (`request`) => `Promise`\< [`LogtoContext`](../type-aliases/type-alias.LogtoContext.md) \>; `handleAuthRoutes`: (`dto`) => `LoaderFunction`;} \>

## Source

[remix/src/index.ts:12](https://github.com/logto-io/js/blob/54d7193/packages/remix/src/index.ts#L12)
