<details>
  <summary>LogtoConfig</summary>

| Name                | Type       | Required | Default Value                       | Notes                                                                         |
| ------------------- | ---------- | -------- | ----------------------------------- | ----------------------------------------------------------------------------- |
| endpoint            | `string`   | ✅       |                                     | The OIDC service endpoint.                                                    |
| appId               | `string`   | ✅       |                                     | The application id comes from the application we registered in Logto Service. |
| scopes              | `string[]` |          | `[openid, offline_access, profile]` | This field always contains `openid`, `offline_access` and `profile`.          |
| resources           | `string[]` |          |                                     | The protected resource indicators we want to use.                             |
| prompt              | `string`   |          | `consent`                           | The prompt value used in `generateSignInUri`.                                 |
| usingPersistStorage | `boolean`  |          | `true`                              | Decide to store credentials on the local machine or not.                      |

**\*Notes**

- You can extend this `LogtoConfig` if you need to.
- `usingPersistStorage` is only provided in client SDKs. E.g., iOS, Android, and SPA.

</details>

<details>
  <summary>AccessToken</summary>

| Name      | Type     | Notes                |
| --------- | -------- | -------------------- |
| token     | `string` |                      |
| scope     | `string` |                      |
| expiresAt | `number` | Timestamp in seconds |

</details>
