```html
<script type="module">
  // Import \`@logto/browser\` SDK von der jsdelivr CDN
  import LogtoClient from 'https://esm.run/@logto/browser';

  // Weisen Sie die \`logtoClient\`-Instanz dem Fensterobjekt zu,
  // um die globale Nutzung auf anderen Seiten zu ermöglichen
  window.logtoClient = new LogtoClient({
    endpoint: '<your-logto-endpoint>', // Z.B. http://localhost:3001
    appId: '<your-application-id>',
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // API-Ressourcen hinzufügen
  });
</script>
```
