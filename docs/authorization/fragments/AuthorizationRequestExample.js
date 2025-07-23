"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CodeBlock_1 = require("@theme/CodeBlock");
var AuthorizationRequestExample = function (_a) {
    var resource = _a.resource, scope = _a.scope;
    return (<CodeBlock_1.default language="http">
    {"GET /oidc/auth?response_type=code\n&client_id=your-client-id\n&redirect_uri=https://your-app.com/callback\n&scope=openid profile offline_access ".concat(scope, "\n&resource=").concat(resource, "\n&code_challenge=abc123\n&code_challenge_method=S256\n&state=xyz\nHTTP/1.1\nHost: your.logto.endpoint\n")}
  </CodeBlock_1.default>);
};
exports.default = AuthorizationRequestExample;
