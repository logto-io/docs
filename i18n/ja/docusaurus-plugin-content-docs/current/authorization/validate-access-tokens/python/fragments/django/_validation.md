```py title="auth_middleware.py"
from django.http import JsonResponse
from jwt_validator import validate_jwt, create_auth_info

def require_access_token(view_func):
    def wrapper(request, *args, **kwargs):
        try:
            headers = {key.replace('HTTP_', '').replace('_', '-').lower(): value
                      for key, value in request.META.items() if key.startswith('HTTP_')}

            token = extract_bearer_token_from_headers(headers)
            payload = validate_jwt(token)

            # 認証情報 (auth info) をリクエストへ添付し、汎用的に利用できるようにする
            request.auth = create_auth_info(payload)

            return view_func(request, *args, **kwargs)

        except AuthorizationError as e:
            return JsonResponse({'error': str(e)}, status=e.status)

    return wrapper
```
