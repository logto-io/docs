```py title="views.py"
from django.http import JsonResponse
from auth_middleware import require_access_token

@require_access_token
def protected_view(request):
    # request.auth에서 인증 (Authentication) 정보를 가져옵니다
    return JsonResponse({"auth": request.auth.to_dict()})
```

```py title="urls.py"
from django.urls import path
from . import views

urlpatterns = [
    path('api/protected/', views.protected_view, name='protected'),
]
```
