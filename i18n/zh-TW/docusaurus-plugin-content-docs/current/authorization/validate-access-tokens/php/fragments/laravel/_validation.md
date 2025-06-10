```php title="app/Http/Middleware/VerifyAccessToken.php"
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class VerifyAccessToken
{
    use AuthHelpers;

    public function handle(Request $request, Closure $next): Response
    {
        try {
            $token = $this->extractBearerToken($request->headers->all());
            $payload = JwtValidator::validateJwt($token);

            // 將驗證資訊存入 request 屬性以便通用使用
            $request->attributes->set('auth', JwtValidator::createAuthInfo($payload));

            return $next($request);

        } catch (AuthorizationException $e) {
            return response()->json(['error' => $e->getMessage()], $e->statusCode);
        }
    }
}
```

在 `app/Http/Kernel.php` 中註冊此 middleware：

```php title="app/Http/Kernel.php"
protected $middlewareAliases = [
    // ... 其他 middleware
    'auth.token' => \App\Http\Middleware\VerifyAccessToken::class,
];
```
