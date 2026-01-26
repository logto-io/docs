```py title="app.py"
from fastapi import FastAPI, Depends
from auth_middleware import verify_access_token, AuthInfo

app = FastAPI()

@app.get("/api/protected")
async def protected_endpoint(auth: AuthInfo = Depends(verify_access_token)):
    # 直接从 auth 参数获取认证 (Authentication) 信息
    return {"auth": auth.to_dict()}
```
