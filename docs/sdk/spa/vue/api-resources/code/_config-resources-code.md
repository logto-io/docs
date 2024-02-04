```tsx
import { createLogto } from "@logto/vue";

...

app.use(createLogto, {
  endpoint: '<your-logto-endpoint>',
  appId: '<your-application-id>',
  // Add API resources
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
});

app.mount("#app");
```
