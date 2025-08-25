```py title="auth_middleware.py"
from fastapi import HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jwt_validator import validate_jwt, create_auth_info

security = HTTPBearer()

async def verify_access_token(credentials: HTTPAuthorizationCredentials = Depends(security)) -> AuthInfo:
    try:
        token = credentials.credentials
        payload = validate_jwt(token)
        return create_auth_info(payload)

    except AuthorizationError as e:
        # เกิดข้อผิดพลาดในการอนุญาต (Authorization)
        raise HTTPException(status_code=e.status, detail=str(e))
```
