```py title="auth_middleware.py"
from rest_framework.authentication import TokenAuthentication
from rest_framework import exceptions
from jwt_validator import validate_jwt, create_auth_info

class AccessTokenAuthentication(TokenAuthentication):
    keyword = 'Bearer'  # Use 'Bearer' instead of 'Token'

    def authenticate_credentials(self, key):
        """
        Authenticate the token by validating it as a JWT.
        """
        try:
            payload = validate_jwt(key)
            auth_info = create_auth_info(payload)

            # Create a user-like object that holds auth info for generic use
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
