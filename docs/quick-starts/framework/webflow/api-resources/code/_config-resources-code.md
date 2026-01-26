```html
<script type="module">
  // Import \`@logto/browser\` SDK from the jsdelivr CDN
  import LogtoClient from 'https://esm.run/@logto/browser';

  // Assign the \`logtoClient\` instance to window object,
  // enabling global usage in other pages
  window.logtoClient = new LogtoClient({
    endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001
    appId: '<your-application-id>',
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // Add API resources
  });
</script>
```
