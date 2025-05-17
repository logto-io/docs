```html
<script type="module">
  // 從 jsdelivr CDN 匯入 `@logto/browser` SDK
  import LogtoClient from 'https://esm.run/@logto/browser';

  // 將 `logtoClient` 實例分配給 window 物件，
  // 以便在其他頁面中全域使用
  window.logtoClient = new LogtoClient({
    endpoint: '<your-logto-endpoint>', // 例如：http://localhost:3001
    appId: '<your-application-id>',
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // 新增 API 資源
  });
</script>
```
