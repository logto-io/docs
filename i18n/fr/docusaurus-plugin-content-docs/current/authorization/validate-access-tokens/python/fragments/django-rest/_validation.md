```py title="auth_middleware.py"
from rest_framework.authentication import TokenAuthentication
from rest_framework import exceptions
from jwt_validator import validate_jwt, create_auth_info

class AccessTokenAuthentication(TokenAuthentication):
    keyword = 'Bearer'  # Utiliser 'Bearer' au lieu de 'Token'

    def authenticate_credentials(self, key):
        """
        Authentifier le jeton en le validant comme un JWT.
        """
        try:
            payload = validate_jwt(key)
            auth_info = create_auth_info(payload)

            # Créer un objet de type utilisateur qui contient les informations d'authentification pour un usage générique
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
