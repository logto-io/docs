```ts title="app.ts"
app.get(
  '/fetch-access-token',
  withLogto({
    ...config,
    // highlight-start
    getAccessToken: true,
    resource: 'https://shopping.your-app.com/api',
    // highlight-end
  }),
  (request, response) => {
    // highlight-next-line
    console.log(request.user.accessToken);
    response.json(request.user);
  }
);
```
