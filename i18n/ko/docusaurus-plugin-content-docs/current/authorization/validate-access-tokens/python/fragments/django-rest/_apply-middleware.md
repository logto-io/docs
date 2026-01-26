```py title="views.py"
from rest_framework.decorators import api_view, authentication_classes
from rest_framework.response import Response
from auth_middleware import AccessTokenAuthentication

@api_view(['GET'])
@authentication_classes([AccessTokenAuthentication])
def protected_view(request):
    # request.user.auth에서 인증 (Authentication) 정보를 가져옵니다
    return Response({"auth": request.user.auth.to_dict()})
```

**또는 클래스 기반 뷰를 사용하는 방법:**

```py title="views.py"
from rest_framework.views import APIView
from rest_framework.response import Response
from auth_middleware import AccessTokenAuthentication

class ProtectedView(APIView):
    authentication_classes = [AccessTokenAuthentication]

    def get(self, request):
        # request.user.auth에서 인증 (Authentication) 정보를 가져옵니다
        return Response({"auth": request.user.auth.to_dict()})
```

```py title="urls.py"
from django.urls import path
from . import views

urlpatterns = [
    path('api/protected/', views.protected_view, name='protected'),
    # 또는 클래스 기반 뷰의 경우:
    # path('api/protected/', views.ProtectedView.as_view(), name='protected'),
]
```
