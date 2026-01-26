```php
// ไฮไลต์บรรทัดถัดไป
use Logto\Sdk\Constants\UserScope;

$client = new LogtoClient(
  new LogtoConfig(
    // ...การตั้งค่าอื่น ๆ
    // ไฮไลต์บรรทัดถัดไป
    scopes: [UserScope::organizations], // เพิ่มขอบเขต (scopes)
  ),
);
```
