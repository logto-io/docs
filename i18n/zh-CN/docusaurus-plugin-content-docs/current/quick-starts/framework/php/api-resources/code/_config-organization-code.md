```php
// highlight-next-line
use Logto\Sdk\Constants\UserScope;

$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    // highlight-next-line
    scopes: [UserScope::organizations], // 添加权限 (Scopes)
  ),
);
```
