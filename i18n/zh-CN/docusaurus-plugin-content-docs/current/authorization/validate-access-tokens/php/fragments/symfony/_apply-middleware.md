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
        // 从请求属性中获取认证 (Authentication) 信息
        $auth = $request->attributes->get('auth');
        return $this->json(['auth' => $auth->toArray()]);
    }
}
```
