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

            # 인증 (Authentication) 정보를 request에 첨부하여 범용적으로 사용
            request.auth = create_auth_info(payload)

            return view_func(request, *args, **kwargs)

        except AuthorizationError as e:
            return JsonResponse({'error': str(e)}, status=e.status)

    return wrapper
```
