```ts title="/app/app.config.ts"
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideAuth({
      config: buildAngularAuthConfig({
        // ...other config
        // highlight-start
        resource: 'https://your-api-resource.com',
        // highlight-end
      }),
    }),
    // ...other providers
  ],
};
```
