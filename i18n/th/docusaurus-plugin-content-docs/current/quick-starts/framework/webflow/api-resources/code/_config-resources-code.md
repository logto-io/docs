```html
<script type="module">
  // นำเข้า SDK `@logto/browser` จาก jsdelivr CDN
  import LogtoClient from 'https://esm.run/@logto/browser';

  // กำหนดอินสแตนซ์ `logtoClient` ไว้ที่วัตถุ window,
  // เพื่อให้สามารถใช้งานแบบ global ในหน้าอื่น ๆ ได้
  window.logtoClient = new LogtoClient({
    endpoint: '<your-logto-endpoint>', // เช่น http://localhost:3001
    appId: '<your-application-id>',
    resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'], // เพิ่มทรัพยากร API
  });
</script>
```
