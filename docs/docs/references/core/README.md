# 🧱 Core

*Core* implies the Logto core service, a monolith service with multiple critical duties. The source code is in [`/packages/core`](https://github.com/logto-io/logto/tree/master/packages/core).

:::note
*Core* and *SDK core* are two separate concepts. See [SDK core](#) for the differences.
:::

To simplify, we divide Core into four major modules:

<table>
<thead>
  <tr><td>Name</td><td>Description</td><td>Mount Path</td></tr>
</thead>
<tbody>
  <tr>
    <td>OIDC Provider</td>
    <td>An <a href="https://openid.net/specs/openid-connect-core-1_0.html" target="_blank">OpenID Provider</a>.</td>
    <td><code>/oidc</code></td>
  </tr>
  <tr>
    <td>Management API</td>
    <td>APIs for managing Logto. The admin role is required.</td>
    <td><code>/api</code></td>
  </tr>
  <tr>
    <td>User API</td>
    <td>APIs for the currently signed-in user.</td>
    <td><code>/api/me</code></td>
  </tr>
  <tr>
    <td>Frontend Proxies</td>
    <td>HTTP proxies or static file serving for frontend projects.</td>
    <td>See <a href="#">Frontend proxies</a> for details.</td>
  </tr>
</tbody>
</table>

Backend APIs, including OIDC, are built in the `core` package, while frontend proxies depend on the corresponding sibling packages.
