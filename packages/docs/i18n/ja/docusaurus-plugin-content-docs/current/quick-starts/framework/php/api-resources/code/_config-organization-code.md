```php
// highlight-next-line
use Logto\Sdk\Constants\UserScope;

$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    // highlight-next-line
    scopes: [UserScope::organizations], // スコープを追加
  ),
);
```
