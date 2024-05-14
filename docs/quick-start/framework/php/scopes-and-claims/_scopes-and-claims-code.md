```php
$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    scopes: ["email", "phone"], // Update per your needs
  ),
);

// Alternatively, you can use the `UserScope` enum to add scopes:

use Logto\Sdk\Constants\UserScope;

$client = new LogtoClient(
  new LogtoConfig(
    // ...other configs
    scopes: [UserScope::email, UserScope::phone], // Update per your needs
  ),
);
```
