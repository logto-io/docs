```html
<script type="module">
  // jsdelivr CDN から \`@logto/browser\` SDK をインポート
  import LogtoClient from 'https://esm.run/@logto/browser';

  // \`logtoClient\` インスタンスを window オブジェクトに割り当て、
  // 他のページでのグローバル使用を可能にする
  window.logtoClient = new LogtoClient({
    endpoint: '<your-logto-endpoint>', // 例: http://localhost:3001
    appId: '<your-application-id>',
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // API リソースを追加
  });
</script>
```
