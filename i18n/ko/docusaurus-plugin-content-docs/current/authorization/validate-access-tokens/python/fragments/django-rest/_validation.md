```py title="auth_middleware.py"
from rest_framework.authentication import TokenAuthentication
from rest_framework import exceptions
from jwt_validator import validate_jwt, create_auth_info

class 액세스 토큰 (Access token) 인증 (Authentication)(TokenAuthentication):
    keyword = 'Bearer'  # 'Token' 대신 'Bearer'를 사용하세요

    def authenticate_credentials(self, key):
        """
        토큰을 JWT로 검증하여 인증 (Authentication)합니다.
        """
        try:
            payload = validate_jwt(key)
            auth_info = create_auth_info(payload)

            # 일반적으로 사용할 수 있도록 인증 정보 (auth info)를 담는 사용자 유사 객체를 생성합니다
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
