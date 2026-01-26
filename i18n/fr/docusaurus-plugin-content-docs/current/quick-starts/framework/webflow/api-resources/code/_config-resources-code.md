```html
<script type="module">
  // Importer le SDK \`@logto/browser\` depuis le CDN jsdelivr
  import LogtoClient from 'https://esm.run/@logto/browser';

  // Assigner l'instance \`logtoClient\` à l'objet window,
  // permettant une utilisation globale dans d'autres pages
  window.logtoClient = new LogtoClient({
    endpoint: '<your-logto-endpoint>', // Par exemple http://localhost:3001
    appId: '<your-application-id>',
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // Ajouter des ressources API
  });
</script>
```
