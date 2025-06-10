```py title="auth_middleware.py"
from rest_framework.authentication import TokenAuthentication
from rest_framework import exceptions
from jwt_validator import validate_jwt, create_auth_info

class AccessTokenAuthentication(TokenAuthentication):
    keyword = 'Bearer'  # 使用 'Bearer' 取代 'Token'

    def authenticate_credentials(self, key):
        """
        透過將權杖驗證為 JWT 來進行驗證 (Authentication)。
        """
        try:
            payload = validate_jwt(key)
            auth_info = create_auth_info(payload)

            # 建立一個類似使用者的物件，儲存驗證資訊以供通用使用
            user = type('User', (), {
                'auth': auth_info,
                'is_authenticated': True,
                'is_anonymous': False,
                'is_active': True,
            })()

            return (user, key)

        except AuthorizationError as e:
            if e.status == 401:
                raise exceptions.AuthenticationFailed(str(e))
            else:  # 403
                raise exceptions.PermissionDenied(str(e))
```
