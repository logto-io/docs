---
sidebar_position: 4
---

import logtoManagementApiResourceSrc from './assets/logto-management-api-resource.webp';
import logtoManagementApiDetailsSrc from './assets/logto-management-api-details.webp';

import BasicsAboutAccessTokenRequest from '../../quick-starts/generic/machine-to-machine/fragments/\_basics-about-access-token-request.mdx';
import FetchAccessTokenForLogtoManagementApi from '../../quick-starts/generic/machine-to-machine/fragments/\_fetch-access-token-for-logto-management-api.mdx';
import AccessTokenUsage from '../../quick-starts/generic/machine-to-machine/fragments/\_access-token-usage.mdx';
import AccessLogtoManagementApiUsingAccessToken from '../../quick-starts/generic/machine-to-machine/fragments/\_access-logto-management-api-using-access-token.mdx';
import M2mAccessTokenNote from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-access-token-sub-note.mdx';
import M2mRoleAssignment from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-role-assignment.mdx';

# Management API와 상호작용하기

## Logto Management API란 무엇인가요? {#what-is-logto-management-api}

Logto Management API는 개발자가 제품 요구 사항과 기술 스택에 맞게 구현을 완전히 제어할 수 있도록 하는 포괄적인 API 세트입니다. 이는 사전 구축되어 있으며, <CloudLink to="/api-resources">콘솔 > API 리소스 > Logto Management API</CloudLink>에 나열되어 있으며 삭제하거나 수정할 수 없습니다.

그 식별자는 `https://[tenant-id].logto.app/api` 패턴을 따릅니다.

<img alt="Logto Management API 리소스" src={logtoManagementApiResourceSrc} />

<img alt="Logto Management API 세부사항" src={logtoManagementApiDetailsSrc} />

Logto Management API를 사용하면 Logto의 강력한 백엔드 서비스를 액세스할 수 있으며, 이는 매우 확장 가능하며 다양한 시나리오에서 활용될 수 있습니다. 이는 Admin Console의 로우 코드 기능으로 가능한 것 이상의 기능을 제공합니다.

자주 사용되는 API는 다음과 같습니다:

- [User](https://openapi.logto.io/operation/operation-getuser)
- [Application](https://openapi.logto.io/operation/operation-listapplications)
- [Audit logs](https://openapi.logto.io/operation/operation-listlogs)
- [Roles](https://openapi.logto.io/operation/operation-listroles)
- [Resources](https://openapi.logto.io/operation/operation-listresources)
- [Connectors](https://openapi.logto.io/operation/operation-listconnectors)
- [Organizations](https://openapi.logto.io/operation/operation-listorganizations)

사용 가능한 API에 대해 더 알고 싶다면 https://openapi.logto.io/ 를 방문하세요.

## Logto Management API에 접근하는 방법 {#how-to-access-logto-management-api}

### M2M 앱 생성하기 {#create-an-m2m-app}

:::note
기계 간 (M2M) 인증 흐름에 익숙하지 않다면, 기본 개념을 이해하기 위해 [인증 흐름 이해하기](/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow)를 먼저 읽어보는 것을 추천합니다.
:::

<CloudLink to="/applications">콘솔 > 애플리케이션</CloudLink>으로 이동하여 "기계 간" 애플리케이션 유형을 선택하고 생성 과정을 시작하세요.

<M2mRoleAssignment />

역할 할당 모듈에서 모든 M2M 역할이 포함되어 있으며, Logto 아이콘으로 표시된 역할은 Logto Management API 권한을 포함하고 있음을 알 수 있습니다.

이제 M2M 앱에 Logto Management API 권한을 포함한 M2M 역할을 할당하세요.

### 액세스 토큰 가져오기 {#fetch-an-access-token}

#### 액세스 토큰 요청의 기본 사항 {#basics-about-access-token-request}

<BasicsAboutAccessTokenRequest />

#### Logto Management API를 위한 액세스 토큰 가져오기 {#fetch-access-token-for-logto-management-api}

<FetchAccessTokenForLogtoManagementApi />

#### 액세스 토큰 응답 {#access-token-response}

성공적인 액세스 응답 본문은 다음과 같습니다:

```json
{
  "access_token": "eyJhbG...2g", // Logto Management API에 접근하기 위해 이 토큰을 사용하세요
  "expires_in": 3600, // 토큰 만료 시간 (초 단위)
  "token_type": "Bearer", // 액세스 토큰을 사용할 때 요청의 인증 유형
  "scope": "all" // Logto Management API를 위한 스코프 `all`
}
```

<M2mAccessTokenNote />

### 액세스 토큰을 사용하여 Logto Management API에 접근하기 {#access-logto-management-api-using-access-token}

<AccessTokenUsage />

<AccessLogtoManagementApiUsingAccessToken />

## Logto Management API 사용의 일반적인 시나리오 {#typical-scenarios-for-using-logto-management-api}

우리 개발자들은 Logto Management API를 사용하여 많은 추가 기능을 구현했습니다. 우리는 우리의 API가 매우 확장 가능하며 다양한 요구를 지원할 수 있다고 믿습니다. Logto Admin Console로는 불가능하지만 Logto Management API를 통해 달성할 수 있는 시나리오의 몇 가지 예를 소개합니다.

### 사용자 프로필을 직접 구현하기 {#implement-user-profile-on-your-own}

Logto는 현재 사용자 프로필에 대한 사전 구축된 UI 솔루션을 제공하지 않습니다. 사용자 프로필은 비즈니스 및 제품 속성과 밀접하게 연결되어 있음을 인식하고 있습니다. 최선의 접근 방식을 결정하는 동안, 우리의 API를 사용하여 자체 솔루션을 만드는 것을 제안합니다. 예를 들어, 상호작용 API, 프로필 API, 인증 코드 API를 활용하여 요구에 맞는 맞춤형 솔루션을 개발할 수 있습니다.

### 고급 사용자 검색 {#advanced-user-search}

Logto Admin Console은 기본적인 검색 및 필터링 기능을 지원합니다. 퍼지 검색, 정확한 일치, 대소문자 구분과 같은 고급 검색 옵션에 대해서는 [고급 사용자 검색](/user-management/advanced-user-search) 튜토리얼과 가이드를 확인하세요.

### 조직 관리를 직접 구현하기 {#implement-organization-management-on-your-own}

다중 테넌트 앱을 구축하기 위해 [조직](/organizations) 기능을 사용하고 있다면, 조직 초대 및 멤버 관리와 같은 작업을 위해 Logto Management API가 필요할 수 있습니다. 테넌트에 관리자와 멤버가 모두 있는 SaaS 제품의 경우, Logto Management API는 비즈니스 요구에 맞춘 맞춤형 관리자 포털을 만드는 데 도움을 줄 수 있습니다. 자세한 내용은 [여기](/end-user-flows/organization-experience/)를 확인하세요.

## Logto Management API 사용 팁 {#tips-for-using-logto-management-api}

### 페이지네이션된 API 응답 관리하기 {#managing-paginated-api-responses}

일부 API 응답에는 많은 결과가 포함될 수 있으며, 결과는 페이지네이션됩니다. Logto는 2가지 종류의 페이지네이션 정보를 제공합니다.

#### 링크 헤더 사용하기 {#using-link-headers}

페이지네이션된 응답 헤더는 다음과 같습니다:

```
Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"
```

링크 헤더는 결과의 이전, 다음, 첫 번째, 마지막 페이지의 URL을 제공합니다:

- 이전 페이지의 URL은 rel="prev"로 표시됩니다.
- 다음 페이지의 URL은 rel="next"로 표시됩니다.
- 마지막 페이지의 URL은 rel="last"로 표시됩니다.
- 첫 번째 페이지의 URL은 rel="first"로 표시됩니다.

#### 총 숫자 헤더 사용하기 {#using-total-number-header}

표준 링크 헤더 외에도, Logto는 `Total-Number` 헤더를 추가합니다:

```
Total-Number: 216
```

이는 페이지 번호를 표시하는 데 매우 편리하고 유용합니다.

#### 페이지 번호 및 페이지 크기 변경하기 {#changing-page-number-and-page-size}

2개의 선택적 쿼리 매개변수가 있습니다:

- `page`: 페이지 번호를 나타내며, 1부터 시작하며 기본값은 1입니다.
- `page_size`: 페이지당 항목 수를 나타내며, 기본값은 20입니다.

### 속도 제한 {#rate-limit}

:::note
이는 Logto Cloud에만 해당됩니다.
:::

모든 사용자를 위한 서비스의 신뢰성과 보안을 보장하기 위해, 우리는 웹사이트로의 트래픽을 모니터링하고 관리하는 일반적인 방화벽을 사용합니다. 엄격한 속도 제한을 시행하지는 않지만, 사용자가 보호 조치를 유발하지 않도록 10초마다 약 200개의 요청으로 활동을 제한할 것을 권장합니다.

## 관련 리소스 {#related-resources}

<Url href="https://blog.logto.io/management-api">
  Logto Management API 사용하기: 단계별 가이드
</Url>

<Url href="https://blog.logto.io/use-postman-to-obtain-m2m-access-token">Postman을 사용하여 M2M 액세스 토큰을 몇 분 안에 얻기</Url>
