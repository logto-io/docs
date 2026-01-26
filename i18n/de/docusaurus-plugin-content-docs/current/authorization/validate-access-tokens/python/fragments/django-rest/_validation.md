```py title="auth_middleware.py"
from rest_framework.authentication import TokenAuthentication
from rest_framework import exceptions
from jwt_validator import validate_jwt, create_auth_info

class AccessTokenAuthentication(TokenAuthentication):
    keyword = 'Bearer'  # Verwende 'Bearer' statt 'Token'

    def authenticate_credentials(self, key):
        """
        Authentifiziere das Token, indem es als JWT validiert wird.
        """
        try:
            payload = validate_jwt(key)
            auth_info = create_auth_info(payload)

            # Erstelle ein benutzerähnliches Objekt, das Auth-Informationen für generische Nutzung hält
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
