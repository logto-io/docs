지원되는 스코프와 해당 클레임(Claim)의 목록은 다음과 같습니다:

### 표준 OIDC 스코프 {#standard-oidc-scopes}

**`openid`** (기본값)

| 클레임(Claim) 이름 | 타입     | 설명                 |
| ------------------ | -------- | -------------------- |
| sub                | `string` | 사용자의 고유 식별자 |

**`profile`** (기본값)

| 클레임(Claim) 이름 | 타입     | 설명                                                                                                                                                                                                                                                                                         |
| ------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name               | `string` | 사용자의 전체 이름                                                                                                                                                                                                                                                                           |
| username           | `string` | 사용자의 사용자명                                                                                                                                                                                                                                                                            |
| picture            | `string` | 최종 사용자의 프로필 사진 URL. 이 URL은 이미지 파일(예: PNG, JPEG, GIF 이미지 파일)을 가리켜야 하며, 이미지를 포함한 웹 페이지가 아니어야 합니다. 이 URL은 최종 사용자를 설명할 때 표시하기에 적합한 프로필 사진을 명확히 참조해야 하며, 최종 사용자가 임의로 촬영한 사진이 아니어야 합니다. |
| created_at         | `number` | 최종 사용자가 생성된 시간. 시간은 Unix epoch (1970-01-01T00:00:00Z) 이후 밀리초로 표시됩니다.                                                                                                                                                                                                |
| updated_at         | `number` | 최종 사용자의 정보가 마지막으로 업데이트된 시간. 시간은 Unix epoch (1970-01-01T00:00:00Z) 이후 밀리초로 표시됩니다.                                                                                                                                                                          |

기타 [표준 클레임(Claim)](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)에는 `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `website`, `gender`, `birthdate`, `zoneinfo`, `locale` 등이 있으며, 이들은 userinfo 엔드포인트를 요청하지 않아도 `profile` 스코프에 포함됩니다. 위의 클레임과의 차이점은, 이 클레임들은 값이 비어 있지 않을 때만 반환되며, 위의 클레임들은 값이 비어 있으면 `null`을 반환합니다.

:::note
표준 클레임(Claim)과 달리, `created_at` 및 `updated_at` 클레임은 초 단위가 아닌 밀리초 단위를 사용합니다.
:::

**`email`**

| 클레임(Claim) 이름 | 타입      | 설명                            |
| ------------------ | --------- | ------------------------------- |
| email              | `string`  | 사용자의 이메일 주소            |
| email_verified     | `boolean` | 이메일 주소가 인증되었는지 여부 |

**`phone`**

| 클레임(Claim) 이름    | 타입      | 설명                         |
| --------------------- | --------- | ---------------------------- |
| phone_number          | `string`  | 사용자의 전화번호            |
| phone_number_verified | `boolean` | 전화번호가 인증되었는지 여부 |

**`address`**

주소 클레임(Claim)의 세부 사항은 [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) 을 참조하세요.

:::info
**(기본값)**으로 표시된 스코프는 항상 Logto SDK에서 요청합니다. 표준 OIDC 스코프의 클레임(Claim)은 해당 스코프가 요청될 때 항상 ID 토큰 (ID token)에 포함되며, 비활성화할 수 없습니다.
:::

### 확장 스코프 {#extended-scopes}

다음 스코프는 Logto에서 확장한 것으로, [userinfo 엔드포인트](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo)를 통해 클레임(Claim)을 반환합니다. 이 클레임들은 <CloudLink to="/customize-jwt">Console > Custom JWT</CloudLink>를 통해 ID 토큰 (ID token)에 직접 포함되도록 설정할 수도 있습니다. 자세한 내용은 [커스텀 ID 토큰](/developers/custom-id-token)을 참고하세요.

**`custom_data`**

| 클레임(Claim) 이름 | 타입     | 설명                   | 기본적으로 ID 토큰에 포함됨 |
| ------------------ | -------- | ---------------------- | --------------------------- |
| custom_data        | `object` | 사용자의 커스텀 데이터 |                             |

**`identities`**

| 클레임(Claim) 이름 | 타입     | 설명                           | 기본적으로 ID 토큰에 포함됨 |
| ------------------ | -------- | ------------------------------ | --------------------------- |
| identities         | `object` | 사용자의 연결된 아이덴티티     |                             |
| sso_identities     | `array`  | 사용자의 연결된 SSO 아이덴티티 |                             |

**`roles`**

| 클레임(Claim) 이름 | 타입       | 설명                 | 기본적으로 ID 토큰에 포함됨 |
| ------------------ | ---------- | -------------------- | --------------------------- |
| roles              | `string[]` | 사용자의 역할 (Role) | ✅                          |

**`urn:logto:scope:organizations`**

| 클레임(Claim) 이름 | 타입       | 설명                                     | 기본적으로 ID 토큰에 포함됨 |
| ------------------ | ---------- | ---------------------------------------- | --------------------------- |
| organizations      | `string[]` | 사용자가 속한 조직 (Organization) ID     | ✅                          |
| organization_data  | `object[]` | 사용자가 속한 조직 (Organization) 데이터 |                             |

:::note
이러한 조직 (Organization) 클레임(Claim)은 [불투명 토큰 (Opaque token)](/concepts/opaque-token)을 사용할 때도 userinfo 엔드포인트를 통해 조회할 수 있습니다. 그러나 불투명 토큰 (Opaque token)은 조직 토큰 (Organization token)으로 사용되어 조직별 리소스에 접근할 수 없습니다. 자세한 내용은 [불투명 토큰 (Opaque token)과 조직 (Organization)](/concepts/opaque-token#opaque-token-and-organizations)을 참고하세요.
:::

**`urn:logto:scope:organization_roles`**

| 클레임(Claim) 이름 | 타입       | 설명                                                                                   | 기본적으로 ID 토큰에 포함됨 |
| ------------------ | ---------- | -------------------------------------------------------------------------------------- | --------------------------- |
| organization_roles | `string[]` | 사용자가 속한 조직 (Organization)의 역할 (Role), 형식: `<organization_id>:<role_name>` | ✅                          |
