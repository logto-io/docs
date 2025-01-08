```ts title="./auth.ts"
import NextAuth from 'next-auth';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    {
      id: 'logto',
      // ...
      authorization: {
        params: {
          scope: 'openid offline_access profile email',
          // highlight-next-line
          resource: 'https://shopping.your-app.com/api',
        },
      },
      // ...
    },
  ],
});
```
