```py title="app.py"
from flask import Flask, g, jsonify
from auth_middleware import verify_access_token

app = Flask(__name__)

@app.route('/api/protected', methods=['GET'])
@verify_access_token
def protected_endpoint():
    # g.auth에서 인증 (Authentication) 정보를 가져옵니다
    return jsonify({"auth": g.auth.to_dict()})
```
