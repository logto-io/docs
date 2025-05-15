```ts
const handler = NextAuth({
  providers: [
    {
      id: 'logto',
      name: 'Logto',
      // ... other options
      authorization: { params: { scope: 'openid offline_access profile email' } },
      // ... other options
    },
  ],
});
```
