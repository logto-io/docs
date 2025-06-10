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

            // 将认证 (Authentication) 信息存储到 request 属性中以便通用使用
            $request->attributes->set('auth', JwtValidator::createAuthInfo($payload));

            return $next($request);

        } catch (AuthorizationException $e) {
            return response()->json(['error' => $e->getMessage()], $e->statusCode);
        }
    }
}
```

在 `app/Http/Kernel.php` 中注册该中间件：

```php title="app/Http/Kernel.php"
protected $middlewareAliases = [
    // ... 其他中间件
    'auth.token' => \App\Http\Middleware\VerifyAccessToken::class,
];
```
