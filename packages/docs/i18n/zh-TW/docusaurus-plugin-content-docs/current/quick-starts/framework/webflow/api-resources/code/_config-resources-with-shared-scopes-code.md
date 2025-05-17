```html
<script type="module">
  // 從 jsdelivr CDN 匯入 `@logto/browser` SDK
  import LogtoClient from 'https://esm.run/@logto/browser';

  window.logtoClient = new LogtoClient({
    endpoint: '<your-logto-endpoint>',
    appId: '<your-application-id>',
    scopes: ['read', 'write'],
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
  });
</script>
```
