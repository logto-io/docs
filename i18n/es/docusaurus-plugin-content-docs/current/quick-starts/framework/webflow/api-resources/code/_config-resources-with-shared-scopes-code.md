```html
<script type="module">
  // Importar el SDK de \`@logto/browser\` desde el CDN de jsdelivr
  import LogtoClient from 'https://esm.run/@logto/browser';

  window.logtoClient = new LogtoClient({
    endpoint: '<your-logto-endpoint>',
    appId: '<your-application-id>',
    scopes: ['read', 'write'],
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
  });
</script>
```
