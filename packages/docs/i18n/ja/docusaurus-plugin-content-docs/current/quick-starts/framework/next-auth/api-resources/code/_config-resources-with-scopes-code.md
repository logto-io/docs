```ts title="./auth.ts"
import NextAuth from 'next-auth';
import Logto from 'next-auth/providers/logto';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Logto({
      // ...
      authorization: {
        params: {
          // highlight-next-line
          scope: 'openid offline_access profile email shopping:read shopping:write',
          resource: 'https://shopping.your-app.com/api',
        },
      },
      // ...
    }),
  ],
});
```
