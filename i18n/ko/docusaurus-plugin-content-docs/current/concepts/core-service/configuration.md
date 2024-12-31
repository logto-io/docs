# 구성

## 환경 변수 {#environment-variables}

### 사용법 {#usage}

Logto는 환경 변수를 다음 순서로 처리합니다:

- 시스템 환경 변수
- 프로젝트 루트의 `.env` 파일, [dotenv](https://github.com/motdotla/dotenv#readme) 형식을 따릅니다

따라서 시스템 환경 변수는 `.env`의 값을 덮어씁니다.

### 변수 {#variables}

:::caution
프로젝트 루트에서 `npm start`로 Logto를 실행하면, `NODE_ENV`는 항상 `production`입니다.
:::

기본값에서 `protocol`은 HTTPS 설정에 따라 `http` 또는 `https`가 됩니다.

| Key                     | Default Value                        | Type                                                     | Description                                                                                                                                                                                                     |
| ----------------------- | ------------------------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV                | `undefined`                          | <code>'production' &#124; 'test' &#124; undefined</code> | Logto가 실행되는 환경의 종류입니다.                                                                                                                                                                             |
| PORT                    | `3001`                               | `number`                                                 | Logto가 수신하는 로컬 포트입니다.                                                                                                                                                                               |
| ADMIN_PORT              | `3002`                               | `number`                                                 | Logto Admin Console이 수신하는 로컬 포트입니다.                                                                                                                                                                 |
| ADMIN_DISABLE_LOCALHOST | N/A                                  | <code>string &#124; boolean &#124; number</code>         | Admin Console의 포트를 비활성화하려면 `1` 또는 `true`로 설정하세요. `ADMIN_ENDPOINT`가 설정되지 않은 경우, Admin Console을 완전히 비활성화합니다.                                                               |
| DB_URL                  | N/A                                  | `string`                                                 | Logto 데이터베이스를 위한 [Postgres DSN](https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6)입니다.                                                                                           |
| HTTPS_CERT_PATH         | `undefined`                          | <code>string &#124; undefined</code>                     | 자세한 내용은 [HTTPS 활성화](#enabling-https)를 참조하세요.                                                                                                                                                     |
| HTTPS_KEY_PATH          | `undefined`                          | <code>string &#124; undefined</code>                     | 동일합니다.                                                                                                                                                                                                     |
| TRUST_PROXY_HEADER      | `false`                              | `boolean`                                                | 동일합니다.                                                                                                                                                                                                     |
| ENDPOINT                | `'protocol://localhost:$PORT'`       | `string`                                                 | 온라인 테스트 또는 프로덕션을 위해 사용자 정의 도메인으로 URL을 지정할 수 있습니다. 이는 [OIDC 발급자 식별자](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier)의 값에도 영향을 미칩니다. |
| ADMIN_ENDPOINT          | `'protocol://localhost:$ADMIN_PORT'` | `string`                                                 | 프로덕션을 위해 사용자 정의 도메인으로 URL을 지정할 수 있습니다 (예: `ADMIN_ENDPOINT=https://admin.domain.com`). 이는 Admin Console 리디렉션 URI의 값에도 영향을 미칩니다.                                      |
| CASE_SENSITIVE_USERNAME | `true`                               | `boolean`                                                | 사용자 이름이 대소문자를 구분하는지 여부를 지정합니다. 이 값을 수정할 때 주의하세요; 변경 사항은 기존 데이터베이스 데이터를 자동으로 조정하지 않으며, 수동 관리가 필요합니다.                                   |

### HTTPS 활성화 {#enabling-https}

#### Node 사용 {#using-node}

Node는 HTTPS를 기본적으로 지원합니다. Node를 통해 HTTPS를 활성화하려면 `HTTPS_CERT_PATH`와 `HTTPS_KEY_PATH`를 **모두** 제공하세요.

`HTTPS_CERT_PATH`는 HTTPS 인증서의 경로를 의미하며, `HTTPS_KEY_PATH`는 HTTPS 키의 경로를 의미합니다.

#### HTTPS 프록시 사용 {#using-a-https-proxy}

또 다른 일반적인 방법은 Node 앞에 HTTPS 프록시를 두는 것입니다 (예: Nginx).

이 경우, 프록시 헤더 필드를 신뢰해야 하는지를 나타내는 `TRUST_PROXY_HEADER`를 `true`로 설정하고 싶을 것입니다. Logto는 이 값을 [Koa 앱 설정](https://github.com/koajs/koa/blob/master/docs/api/index.md#settings)에 전달합니다.

이 필드를 구성해야 할 때는 [TLS 오프로드 프록시 신뢰하기](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies)를 참조하세요.

## 데이터베이스 구성 {#database-configs}

너무 많은 환경 변수를 관리하는 것은 비효율적이고 유연하지 않으므로, 대부분의 일반 구성은 데이터베이스 테이블 `logto_configs`에 저장됩니다.

이 테이블은 간단한 키-값 저장소이며, 키는 다음과 같이 열거됩니다:

| Key              | Type                  | Description                                                                                                             |
| ---------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| oidc.cookieKeys  | <code>string[]</code> | [서명 쿠키 키](https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys)의 문자열 배열입니다.   |
| oidc.privateKeys | <code>string[]</code> | [OIDC JWT 서명](https://openid.net/specs/openid-connect-core-1_0.html#Signing)을 위한 개인 키 내용의 문자열 배열입니다. |

### 지원되는 개인 키 유형 {#supported-private-key-types}

- EC (P-256, secp256k1, P-384, 및 P-521 곡선)
- RSA
- OKP (Ed25519, Ed448, X25519, X448 하위 유형)
