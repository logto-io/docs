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

            // Stocker les informations d'authentification dans les attributs de la requête pour une utilisation générique
            $request->attributes->set('auth', JwtValidator::createAuthInfo($payload));

            return $next($request);

        } catch (AuthorizationException $e) {
            return response()->json(['error' => $e->getMessage()], $e->statusCode);
        }
    }
}
```

Enregistrez le middleware dans `app/Http/Kernel.php` :

```php title="app/Http/Kernel.php"
protected $middlewareAliases = [
    // ... autres middlewares
    'auth.token' => \App\Http\Middleware\VerifyAccessToken::class,
];
```
