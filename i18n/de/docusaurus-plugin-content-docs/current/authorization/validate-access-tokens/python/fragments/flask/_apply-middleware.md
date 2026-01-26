```py title="app.py"
from flask import Flask, g, jsonify
from auth_middleware import verify_access_token

app = Flask(__name__)

@app.route('/api/protected', methods=['GET'])
@verify_access_token
def protected_endpoint():
    # Zugriff auf Authentifizierungsinformationen aus g.auth
    return jsonify({"auth": g.auth.to_dict()})
```
