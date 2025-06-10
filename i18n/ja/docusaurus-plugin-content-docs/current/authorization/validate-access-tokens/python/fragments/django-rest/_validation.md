```py title="auth_middleware.py"
from rest_framework.authentication import TokenAuthentication
from rest_framework import exceptions
from jwt_validator import validate_jwt, create_auth_info

class AccessTokenAuthentication(TokenAuthentication):
    keyword = 'Bearer'  # 'Token' の代わりに 'Bearer' を使用

    def authenticate_credentials(self, key):
        """
        トークンを JWT として検証し、認証 (Authentication) します。
        """
        try:
            payload = validate_jwt(key)
            auth_info = create_auth_info(payload)

            # 汎用的に認証情報を保持するユーザーライクなオブジェクトを作成
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
