```py title="auth_middleware.py"
from functools import wraps
from flask import request, jsonify, g
from jwt_validator import validate_jwt, create_auth_info

def verify_access_token(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        try:
            token = extract_bearer_token_from_headers(dict(request.headers))
            payload = validate_jwt(token)

            # Stocker les informations d'authentification dans l'objet g de Flask pour une utilisation générique
            g.auth = create_auth_info(payload)

            return f(*args, **kwargs)

        except AuthorizationError as e:
            return jsonify({'error': str(e)}), e.status

    return decorated_function
```
