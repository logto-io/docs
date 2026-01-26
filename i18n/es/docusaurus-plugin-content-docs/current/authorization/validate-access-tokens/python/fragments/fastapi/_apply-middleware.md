```py title="app.py"
from fastapi import FastAPI, Depends
from auth_middleware import verify_access_token, AuthInfo

app = FastAPI()

@app.get("/api/protegido")
async def protected_endpoint(auth: AuthInfo = Depends(verify_access_token)):
    # Accede a la información de autenticación directamente desde el parámetro auth
    return {"auth": auth.to_dict()}
```
