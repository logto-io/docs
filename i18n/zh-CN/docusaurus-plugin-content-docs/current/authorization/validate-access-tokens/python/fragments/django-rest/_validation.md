```py title="auth_middleware.py"
from rest_framework.authentication import TokenAuthentication
from rest_framework import exceptions
from jwt_validator import validate_jwt, create_auth_info

class AccessTokenAuthentication(TokenAuthentication):
    keyword = 'Bearer'  # 使用 'Bearer' 而不是 'Token'

    def authenticate_credentials(self, key):
        """
        通过将令牌作为 JWT 验证来进行认证 (Authentication)。
        """
        try:
            payload = validate_jwt(key)
            auth_info = create_auth_info(payload)

            # 创建一个类似用户的对象，用于通用地保存认证 (Authentication) 信息
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
