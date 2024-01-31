```php
use Logto\Sdk\Constants\UserScope;

$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    scopes: [UserScope::organizations], // Add scopes
  ),
);
```
