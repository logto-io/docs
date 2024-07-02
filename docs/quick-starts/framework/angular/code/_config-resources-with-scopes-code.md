```ts title="app/app.config.ts"
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideAuth({
      config: buildAngularAuthConfig({
        // ...other config
        // highlight-start
        resource: 'https://your-api-resource.com',
        scopes: ['openid', 'profile', 'offline_access', 'read', 'write'],
        // highlight-end
      }),
    }),
    // ...other providers
  ],
};
```
