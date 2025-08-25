```ts title="app.ts"
app.get(
  '/fetch-organization-token',
  withLogto({
    ...config,
    // ไฮไลต์บรรทัดถัดไป
    getOrganizationToken: true,
  }),
  (request, response) => {
    // ไฮไลต์บรรทัดถัดไป
    response.json(request.user.organizationTokens);
  }
);
```
