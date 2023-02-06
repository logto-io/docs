**decodeIdToken**(`token`): `Object`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `token` | `string` |

#### Returns

`Object`

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `at_hash`  | `undefined` \| `null` \| `string` |
| `aud`      | `string`                          |
| `avatar`   | `undefined` \| `null` \| `string` |
| `exp`      | `number`                          |
| `iat`      | `number`                          |
| `iss`      | `string`                          |
| `name`     | `undefined` \| `null` \| `string` |
| `sub`      | `string`                          |
| `username` | `undefined` \| `null` \| `string` |

#### Defined in

[packages/js/src/utils/id-token.ts:40](https://github.com/logto-io/js/blob/f0f78e6/packages/js/src/utils/id-token.ts#L40)
