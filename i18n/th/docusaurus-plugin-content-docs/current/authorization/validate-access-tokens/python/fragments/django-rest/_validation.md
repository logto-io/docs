```py title="auth_middleware.py"
from rest_framework.authentication import TokenAuthentication
from rest_framework import exceptions
from jwt_validator import validate_jwt, create_auth_info

class AccessTokenAuthentication(TokenAuthentication):
    keyword = 'Bearer'  # ใช้ 'Bearer' แทน 'Token'

    def authenticate_credentials(self, key):
        """
        ยืนยันตัวตนของโทเค็นโดยตรวจสอบว่าเป็น JWT หรือไม่
        """
        try:
            payload = validate_jwt(key)
            auth_info = create_auth_info(payload)

            # สร้างอ็อบเจกต์ที่คล้ายผู้ใช้ซึ่งเก็บข้อมูล auth สำหรับใช้งานทั่วไป
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
