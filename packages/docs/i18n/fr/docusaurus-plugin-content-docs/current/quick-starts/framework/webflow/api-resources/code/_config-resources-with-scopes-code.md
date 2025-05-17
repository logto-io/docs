```html
<script type="module">
  // Importer le SDK \`@logto/browser\` depuis le CDN jsdelivr
  import LogtoClient from 'https://esm.run/@logto/browser';

  window.logtoClient = new LogtoClient({
    endpoint: '<your-logto-endpoint>',
    appId: '<your-application-id>',
    scopes: ['shopping:read', 'shopping:write', 'store:read', 'store:write'],
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
  });
</script>
```
