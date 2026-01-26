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

            // 인증 (Authentication) 정보를 요청 속성에 저장하여 범용적으로 사용
            $request->attributes->set('auth', JwtValidator::createAuthInfo($payload));

            return $next($request);

        } catch (AuthorizationException $e) {
            return response()->json(['error' => $e->getMessage()], $e->statusCode);
        }
    }
}
```

미들웨어를 `app/Http/Kernel.php`에 등록하세요:

```php title="app/Http/Kernel.php"
protected $middlewareAliases = [
    // ... 다른 미들웨어
    'auth.token' => \App\Http\Middleware\VerifyAccessToken::class,
];
```
