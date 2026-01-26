```py title="app.py"
from fastapi import FastAPI, Depends
from auth_middleware import verify_access_token, AuthInfo

app = FastAPI()

@app.get("/api/protected")
async def protected_endpoint(auth: AuthInfo = Depends(verify_access_token)):
    # เข้าถึงข้อมูลการยืนยันตัวตน (auth) ได้โดยตรงจากพารามิเตอร์ auth
    return {"auth": auth.to_dict()}
```
