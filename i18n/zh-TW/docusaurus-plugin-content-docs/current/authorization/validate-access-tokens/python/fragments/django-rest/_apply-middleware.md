```py title="views.py"
from rest_framework.decorators import api_view, authentication_classes
from rest_framework.response import Response
from auth_middleware import AccessTokenAuthentication

@api_view(['GET'])
@authentication_classes([AccessTokenAuthentication])
def protected_view(request):
    # 從 request.user.auth 取得驗證 (Authentication) 資訊
    return Response({"auth": request.user.auth.to_dict()})
```

**或使用類別型視圖：**

```py title="views.py"
from rest_framework.views import APIView
from rest_framework.response import Response
from auth_middleware import AccessTokenAuthentication

class ProtectedView(APIView):
    authentication_classes = [AccessTokenAuthentication]

    def get(self, request):
        # 從 request.user.auth 取得驗證 (Authentication) 資訊
        return Response({"auth": request.user.auth.to_dict()})
```

```py title="urls.py"
from django.urls import path
from . import views

urlpatterns = [
    path('api/protected/', views.protected_view, name='protected'),
    # 或對於類別型視圖：
    # path('api/protected/', views.ProtectedView.as_view(), name='protected'),
]
```
