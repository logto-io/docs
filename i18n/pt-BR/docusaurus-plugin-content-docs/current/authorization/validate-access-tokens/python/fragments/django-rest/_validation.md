```py title="auth_middleware.py"
from rest_framework.authentication import TokenAuthentication
from rest_framework import exceptions
from jwt_validator import validate_jwt, create_auth_info

class AccessTokenAuthentication(TokenAuthentication):
    keyword = 'Bearer'  # Use 'Bearer' em vez de 'Token'

    def authenticate_credentials(self, key):
        """
        Autentica o token validando-o como um JWT.
        """
        try:
            payload = validate_jwt(key)
            auth_info = create_auth_info(payload)

            # Cria um objeto semelhante a usuário que armazena as informações de autenticação para uso genérico
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
