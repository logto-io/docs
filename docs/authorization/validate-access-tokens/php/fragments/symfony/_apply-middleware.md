```php title="src/Controller/Api/ProtectedController.php"
<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/protected')]
#[IsGranted('IS_AUTHENTICATED_FULLY')]
class ProtectedController extends AbstractController
{
    #[Route('', methods: ['GET'])]
    public function index(Request $request): JsonResponse
    {
        // Access auth information from request attributes
        $auth = $request->attributes->get('auth');
        return $this->json(['auth' => $auth->toArray()]);
    }

    #[Route('/detailed', methods: ['GET'])]
    public function detailed(Request $request): JsonResponse
    {
        // Your protected endpoint logic
        $auth = $request->attributes->get('auth');
        return $this->json([
            'auth' => $auth->toArray(),
            'message' => 'Protected data accessed successfully'
        ]);
    }
}
```
