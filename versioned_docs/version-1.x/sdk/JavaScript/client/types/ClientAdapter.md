**ClientAdapter**: `Object`

#### Type declaration

| Name                    | Type                                               |
| :---------------------- | :------------------------------------------------- |
| `generateCodeChallenge` | (`codeVerifier`: `string`) => `Promise`<`string`\> |
| `generateCodeVerifier`  | () => `string`                                     |
| `generateState`         | () => `string`                                     |
| `navigate`              | `Navigate`                                         |
| `requester`             | `Requester`                                        |
| `storage`               | [`Storage`](../interfaces/Storage.md)              |

#### Defined in

[packages/client/src/adapter.ts:14](https://github.com/logto-io/js/blob/f0f78e6/packages/client/src/adapter.ts#L14)
