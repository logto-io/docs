根据用户的权限及登录状态，Logto 会授权并颁发一个 [JWT](https://datatracker.ietf.org/doc/html/rfc7519) 格式的 `access_token` 加密令牌。该令牌携带了所有 API 授权相关的信息，包括用户信息，令牌的颁发者，令牌的指定受众，以及过期时间等。

将该颁发的令牌作为 Bearer 令牌附加到你的请求头中：

:::note
Bearer 令牌的集成流程可能因使用的框架或请求方式而异。请按需选择你自己适用的方式来应用授权到请求头中。
:::

例如最终形成的请求：

```bash
GET https://logto.dev/api/users

--header Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXVkIjoiaHR0cHM6Ly9sb2d0by5kZXYvYXBpL3VzZXJzIiwiaXNzIjoiaHR0cHM6Ly9sb2d0by5kZXYvb2lkYyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MzI1NDIyfQ.PjIJl00YNC84EPNYLEdpEEAdAxqhekCYhFEckvRokek

```
