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

            // Almacenar la información de autenticación en los atributos de la solicitud para uso genérico
            $request->attributes->set('auth', JwtValidator::createAuthInfo($payload));

            return $next($request);

        } catch (AuthorizationException $e) {
            return response()->json(['error' => $e->getMessage()], $e->statusCode);
        }
    }
}
```

Registra el middleware en `app/Http/Kernel.php`:

```php title="app/Http/Kernel.php"
protected $middlewareAliases = [
    // ... otro middleware
    'auth.token' => \App\Http\Middleware\VerifyAccessToken::class,
];
```
