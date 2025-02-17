```html
<script type="module">
  // Импортируйте SDK \`@logto/browser\` из jsdelivr CDN
  import LogtoClient from 'https://esm.run/@logto/browser';

  // Присвойте экземпляр \`logtoClient\` объекту window,
  // чтобы обеспечить глобальное использование на других страницах
  window.logtoClient = new LogtoClient({
    endpoint: '<your-logto-endpoint>', // Например, http://localhost:3001
    appId: '<your-application-id>',
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // Добавьте ресурсы API
  });
</script>
```
