```py title="views.py"
from django.http import JsonResponse
from auth_middleware import require_access_token

@require_access_token
def protected_view(request):
    # リクエストの request.auth から認証 (Authentication) 情報にアクセス
    return JsonResponse({"auth": request.auth.to_dict()})
```

```py title="urls.py"
from django.urls import path
from . import views

urlpatterns = [
    path('api/protected/', views.protected_view, name='protected'),
]
```
