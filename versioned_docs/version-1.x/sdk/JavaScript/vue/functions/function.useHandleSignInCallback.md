**useHandleSignInCallback**(`callback`?): `object`

A Vue composable method that watches browser navigation and automatically handles the sign-in callback

```ts
import { useLogto } from '@logto/vue';
import { useHandleSignInCallback } from '@logto/vue';

export default {
  setup() {
    useHandleSignInCallback();
  },
};
```

Use this in the setup script of your Callback page to make sure the injection works

## Parameters

| Parameter   | Type         |
| :---------- | :----------- |
| `callback`? | () => `void` |

## Returns

### error

**error**: `Readonly`\< `Ref`\< `undefined` \| `Error` \> \>

### isAuthenticated

**isAuthenticated**: `Readonly`\< `Ref`\< `boolean` \> \>

### isLoading

**isLoading**: `Readonly`\< `Ref`\< `boolean` \> \>

## Source

[src/index.ts:127](https://github.com/logto-io/js/blob/54d7193/packages/vue/src/index.ts#L127)
