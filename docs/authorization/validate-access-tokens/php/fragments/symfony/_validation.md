```php title="src/Security/JwtAuthenticator.php"
<?php

namespace App\Security;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;

class JwtAuthenticator extends AbstractAuthenticator
{
    use AuthHelpers;

    public function supports(Request $request): ?bool
    {
        return $request->headers->has('authorization');
    }

    public function authenticate(Request $request): Passport
    {
        try {
            $token = $this->extractBearerToken($request->headers->all());
            $payload = JwtValidator::validateJwt($token);
            $authInfo = JwtValidator::createAuthInfo($payload);

            // Store auth info in request attributes for generic use
            $request->attributes->set('auth', $authInfo);

            return new SelfValidatingPassport(new UserBadge($payload['sub']));

        } catch (AuthorizationException $e) {
            throw new AuthenticationException($e->getMessage());
        }
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        return null; // Continue to the controller
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        return new JsonResponse(['error' => $exception->getMessage()], Response::HTTP_UNAUTHORIZED);
    }
}
```

Configure security in `config/packages/security.yaml`:

```yaml title="config/packages/security.yaml"
security:
  firewalls:
    api:
      pattern: ^/api/protected
      stateless: true
      custom_authenticators:
        - App\Security\JwtAuthenticator
```
