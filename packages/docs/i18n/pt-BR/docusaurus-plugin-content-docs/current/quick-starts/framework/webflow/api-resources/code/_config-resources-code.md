```html
<script type="module">
  // Importar SDK \`@logto/browser\` do CDN jsdelivr
  import LogtoClient from 'https://esm.run/@logto/browser';

  // Atribuir a instância \`logtoClient\` ao objeto window,
  // permitindo uso global em outras páginas
  window.logtoClient = new LogtoClient({
    endpoint: '<your-logto-endpoint>', // Ex.: http://localhost:3001
    appId: '<your-application-id>',
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // Adicionar recursos de API
  });
</script>
```
