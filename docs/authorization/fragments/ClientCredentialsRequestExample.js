"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CodeBlock_1 = require("@theme/CodeBlock");
var ClientCredentialsRequestExample = function (_a) {
    var resource = _a.resource, organizationId = _a.organizationId, scope = _a.scope;
    return (<CodeBlock_1.default language="http">
    {"POST /oidc/token HTTP/1.1\nHost: your.logto.endpoint\nContent-Type: application/x-www-form-urlencoded\nAuthorization: Basic base64(client_id:client_secret)\n\ngrant_type=client_credentials\n"}
    {resource && "&resource=".concat(resource, "\n")}
    {organizationId && "&organization_id=".concat(organizationId, "\n")}
    {"&scope=".concat(scope, "\n")}
  </CodeBlock_1.default>);
};
exports.default = ClientCredentialsRequestExample;
