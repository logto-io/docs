```html
<script type="module">
  // 从 jsdelivr CDN 导入 `@logto/browser` SDK
  import LogtoClient from 'https://esm.run/@logto/browser';

  // 将 `logtoClient` 实例分配给 window 对象，
  // 以便在其他页面中全局使用
  window.logtoClient = new LogtoClient({
    endpoint: '<your-logto-endpoint>', // 例如 http://localhost:3001
    appId: '<your-application-id>',
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // 添加 API 资源 (API resources)
  });
</script>
```
