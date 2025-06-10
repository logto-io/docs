```php title="routes/api.php"
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth.token')->group(function () {
    Route::get('/api/protected', function (Request $request) {
        // 从请求属性中获取认证 (Authentication) 信息
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    });
});
```

**或者使用控制器：**

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
        // 从请求属性中获取认证 (Authentication) 信息
        $auth = $request->attributes->get('auth');
        return ['auth' => $auth->toArray()];
    }

    public function show(Request $request)
    {
        // 你的受保护接口逻辑
        $auth = $request->attributes->get('auth');
        return [
            'auth' => $auth->toArray(),
            'message' => '受保护数据访问成功'
        ];
    }
}
```
