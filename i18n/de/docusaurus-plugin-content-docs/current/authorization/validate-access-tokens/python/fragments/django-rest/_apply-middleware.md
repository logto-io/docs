```py title="views.py"
from rest_framework.decorators import api_view, authentication_classes
from rest_framework.response import Response
from auth_middleware import AccessTokenAuthentication

@api_view(['GET'])
@authentication_classes([AccessTokenAuthentication])
def protected_view(request):
    # Zugriff auf Authentifizierungsinformationen über request.user.auth
    return Response({"auth": request.user.auth.to_dict()})
```

**Oder mit klassenbasierten Views:**

```py title="views.py"
from rest_framework.views import APIView
from rest_framework.response import Response
from auth_middleware import AccessTokenAuthentication

class ProtectedView(APIView):
    authentication_classes = [AccessTokenAuthentication]

    def get(self, request):
        # Zugriff auf Authentifizierungsinformationen über request.user.auth
        return Response({"auth": request.user.auth.to_dict()})
```

```py title="urls.py"
from django.urls import path
from . import views

urlpatterns = [
    path('api/protected/', views.protected_view, name='protected'),
    # Oder für klassenbasierte Views:
    # path('api/protected/', views.ProtectedView.as_view(), name='protected'),
]
```
