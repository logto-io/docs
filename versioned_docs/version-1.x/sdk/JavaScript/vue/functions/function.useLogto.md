**useLogto**(): `Logto`

A Vue composable method that provides the Logto reactive refs and auth methods.

```ts
import { useLogto } from '@logto/vue';

export default {
  setup() {
    const { isAuthenticated, signIn } = useLogto();

    return {
      isAuthenticated,
      onClickSignIn: () => {
        signIn('<your-redirect-uri>');
      },
    };
  },
};
```

Use this composable in the setup script of your Vue component to make sure the injection works

## Returns

`Logto`

## Source

[src/index.ts:101](https://github.com/logto-io/js/blob/54d7193/packages/vue/src/index.ts#L101)
