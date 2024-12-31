```html
<script type="module">
  // jsdelivr CDN에서 \`@logto/browser\` SDK를 가져옵니다
  import LogtoClient from 'https://esm.run/@logto/browser';

  // \`logtoClient\` 인스턴스를 window 객체에 할당하여
  // 다른 페이지에서 전역적으로 사용할 수 있도록 합니다
  window.logtoClient = new LogtoClient({
    endpoint: '<your-logto-endpoint>', // 예: http://localhost:3001
    appId: '<your-application-id>',
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // API 리소스를 추가합니다
  });
</script>
```
