```html
<script type="module">
  // Importar el SDK \`@logto/browser\` desde el CDN de jsdelivr
  import LogtoClient from 'https://esm.run/@logto/browser';

  // Asignar la instancia \`logtoClient\` al objeto window,
  // permitiendo su uso global en otras páginas
  window.logtoClient = new LogtoClient({
    endpoint: '<your-logto-endpoint>', // Ejemplo: http://localhost:3001
    appId: '<your-application-id>',
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // Añadir recursos de API
  });
</script>
```
