```py title="app.py"
from fastapi import FastAPI, Depends
from auth_middleware import verify_access_token, AuthInfo

app = FastAPI()

@app.get("/api/protected")
async def protected_endpoint(auth: AuthInfo = Depends(verify_access_token)):
    # auth 매개변수에서 인증 (Authentication) 정보를 직접 접근합니다
    return {"auth": auth.to_dict()}
```
