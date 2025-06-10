```php title="routes/api.php"
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth.token')->group(function () {
    Route::get('/api/protected', function (Request $request) {
        // 요청 속성에서 인증 (Authentication) 정보에 접근
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    });
});
```

**또는 컨트롤러를 사용하는 방법:**

```php title="app/Http/Controllers/Api/ProtectedController.php"
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProtectedController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth.token');
    }

    public function index(Request $request)
    {
        // 요청 속성에서 인증 (Authentication) 정보에 접근
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    }

    public function show(Request $request)
    {
        // 보호된 엔드포인트 로직
        $auth = $request->attributes->get('auth');
        return [
            'auth' => $auth->toArray(),
            'message' => '보호된 데이터에 성공적으로 접근했습니다'
        ];
    }
}
```
