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

            // จัดเก็บข้อมูลการยืนยันตัวตนใน attributes ของ request เพื่อใช้งานทั่วไป
            $request->attributes->set('auth', JwtValidator::createAuthInfo($payload));

            return $next($request);

        } catch (AuthorizationException $e) {
            return response()->json(['error' => $e->getMessage()], $e->statusCode);
        }
    }
}
```

ลงทะเบียน middleware ใน `app/Http/Kernel.php`:

```php title="app/Http/Kernel.php"
protected $middlewareAliases = [
    // ... มิดเดิลแวร์อื่น ๆ
    'auth.token' => \App\Http\Middleware\VerifyAccessToken::class,
];
```
