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

            // Auth-Informationen in den Request-Attributen für generische Nutzung speichern
            $request->attributes->set('auth', JwtValidator::createAuthInfo($payload));

            return $next($request);

        } catch (AuthorizationException $e) {
            return response()->json(['error' => $e->getMessage()], $e->statusCode);
        }
    }
}
```

Registriere die Middleware in `app/Http/Kernel.php`:

```php title="app/Http/Kernel.php"
protected $middlewareAliases = [
    // ... andere Middleware
    'auth.token' => \App\Http\Middleware\VerifyAccessToken::class,
];
```
