```php title="src/Middleware/JwtMiddleware.php"
<?php

namespace App\Middleware;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Slim\Psr7\Response;

class JwtMiddleware implements MiddlewareInterface
{
    use AuthHelpers;

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        try {
            $headers = $request->getHeaders();
            $token = $this->extractBearerToken($headers);
            $payload = JwtValidator::validateJwt($token);

            // Store auth info in request attributes for generic use
            $request = $request->withAttribute('auth', JwtValidator::createAuthInfo($payload));

            return $handler->handle($request);

        } catch (AuthorizationException $e) {
            $response = new Response();
            $response->getBody()->write(json_encode(['error' => $e->getMessage()]));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus($e->statusCode);
        }
    }
}
```
