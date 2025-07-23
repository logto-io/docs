"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CodeBlock_1 = require("@theme/CodeBlock");
var TokenRequestExample = function (_a) {
    var grantType = _a.grantType, resource = _a.resource, organizationId = _a.organizationId;
    var params = [
        "grant_type=".concat(grantType),
        grantType === 'authorization_code' && 'code=authorization-code-received',
        grantType === 'authorization_code' && 'redirect_uri=https://your-app.com/callback',
        grantType === 'refresh_token' && 'refresh_token=your-refresh-token',
        resource && "resource=".concat(resource),
        organizationId && "organization_id=".concat(organizationId),
    ].filter(Boolean);
    return (<CodeBlock_1.default language="http">
      {"POST /oidc/token HTTP/1.1\nHost: your.logto.endpoint\nContent-Type: application/x-www-form-urlencoded\nAuthorization: Basic base64(client_id:client_secret)\n\n".concat(params.join('\n&'))}
    </CodeBlock_1.default>);
};
exports.default = TokenRequestExample;
