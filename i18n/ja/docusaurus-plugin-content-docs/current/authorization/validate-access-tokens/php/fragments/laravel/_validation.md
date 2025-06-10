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

            // 認証情報をリクエスト属性に保存し、汎用的に利用できるようにする
            $request->attributes->set('auth', JwtValidator::createAuthInfo($payload));

            return $next($request);

        } catch (AuthorizationException $e) {
            return response()->json(['error' => $e->getMessage()], $e->statusCode);
        }
    }
}
```

ミドルウェアを `app/Http/Kernel.php` に登録します：

```php title="app/Http/Kernel.php"
protected $middlewareAliases = [
    // ... 他のミドルウェア
    'auth.token' => \App\Http\Middleware\VerifyAccessToken::class,
];
```
