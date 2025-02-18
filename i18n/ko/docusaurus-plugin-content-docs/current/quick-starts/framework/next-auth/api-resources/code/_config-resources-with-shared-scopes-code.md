```ts title="./auth.ts"
import NextAuth from 'next-auth';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    {
      id: 'logto',,
      // ...
      authorization: {
        params: {
          // highlight-next-line
          scope: 'openid offline_access profile read write',
          resource: 'https://shopping.your-app.com/api',
        },
      },
      // ...
    },
  ],
});
```
