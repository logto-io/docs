```ts title="app.ts"
app.get(
  '/fetch-access-token',
  withLogto({
    ...config,
    getAccessToken: true,
    resource: 'https://shopping.your-app.com/api',
  }),
  (request, response) => {
    // Get access token here
    console.log(request.user.accessToken);
    response.json(request.user);
  }
);
```
