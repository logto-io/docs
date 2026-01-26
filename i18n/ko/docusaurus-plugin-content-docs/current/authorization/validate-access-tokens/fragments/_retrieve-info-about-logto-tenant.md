Logto에서 발급한 토큰을 검증하려면 다음 값들이 필요합니다:

- JSON Web Key Set (JWKS) URI: JWT 서명을 검증하는 데 사용되는 Logto의 공개 키 URL입니다.
- 발급자 (Issuer): 예상되는 발급자 값 (Logto의 OIDC URL).

먼저, Logto 테넌트의 엔드포인트를 찾아야 합니다. 다음 위치에서 확인할 수 있습니다:

- Logto 콘솔에서 **설정** → **도메인**에서 확인하세요.
- Logto에서 구성한 애플리케이션 설정의 **설정** → **엔드포인트 & 자격 증명**에서 확인하세요.

### OpenID Connect 디스커버리 엔드포인트에서 가져오기 \{#fetch-from-openid-connect-discovery-endpoint}

이 값들은 Logto의 OpenID Connect 디스커버리 엔드포인트에서 가져올 수 있습니다:

```
https://<your-logto-endpoint>/oidc/.well-known/openid-configuration
```

예시 응답입니다 (다른 필드는 생략):

```json
{
  "jwks_uri": "https://your-tenant.logto.app/oidc/jwks",
  "issuer": "https://your-tenant.logto.app/oidc"
}
```

### 코드에 하드코딩하기 (권장하지 않음) \{#hardcode-in-your-code-not-recommended}

Logto는 JWKS URI 또는 발급자 (Issuer)를 커스터마이즈할 수 없으므로, 이 값들을 코드에 하드코딩할 수 있습니다. 하지만, 향후 설정이 변경될 경우 유지보수 부담이 커질 수 있으므로 프로덕션 애플리케이션에서는 권장하지 않습니다.

- JWKS URI: `https://<your-logto-endpoint>/oidc/jwks`
- 발급자 (Issuer): `https://<your-logto-endpoint>/oidc`
