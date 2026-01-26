---
slug: /security/blocklist
sidebar_label: 차단 목록
sidebar_position: 3
---

# 차단 목록

## 이메일 차단 목록 {#email-blocklist}

이메일 차단 목록 정책을 통해 계정 가입 남용을 방지하기 위한 이메일 차단 목록 설정을 사용자 지정할 수 있습니다. 이 정책은 가입 및 계정 설정에 사용되는 이메일 주소를 모니터링합니다. 사용자가 차단 목록 규칙을 위반하는 이메일 주소로 가입하거나 이메일을 연결하려고 시도하면, 시스템은 해당 요청을 거부하여 스팸 계정을 줄이고 전체 계정 보안을 강화합니다.

이메일 차단 목록 설정을 구성하려면 <CloudLink to="/security/blocklist">콘솔 > 보안 > 차단 목록</CloudLink>을 방문하세요.

### 일회용 이메일 주소 차단 {#block-disposable-email-addresses}

이 기능은 **클라우드 전용** 기능입니다. 활성화하면, 시스템은 제공된 이메일 주소의 도메인을 알려진 일회용 이메일 도메인 목록과 자동으로 대조합니다. 도메인이 목록에 있으면 요청이 거부됩니다. 일회용 이메일 도메인 목록은 효과를 유지하기 위해 정기적으로 업데이트됩니다.

### 이메일 서브어드레싱 차단 {#block-email-subaddressing}

이메일 서브어드레싱은 사용자가 플러스 기호(+)와 추가 문자를 사용하여 이메일 주소의 변형을 만들 수 있게 해줍니다 (예: user+tag@example.com). 이 기능은 악의적인 사용자가 차단 목록 제한을 우회하는 데 악용될 수 있습니다. 이메일 서브어드레싱 차단 기능을 활성화하면, 시스템은 서브어드레싱 이메일 형식을 사용하는 가입 또는 계정 연결 시도를 모두 거부합니다.

### 사용자 지정 이메일 차단 목록 {#custom-email-blocklist}

차단할 이메일 주소 또는 도메인 목록을 지정하여 사용자 지정 이메일 차단 목록을 만들 수 있습니다. 시스템은 이 항목과 일치하는 가입 또는 계정 연결 시도를 모두 거부합니다. 차단 목록은 전체 이메일 주소와 도메인 모두에 대한 일치를 지원합니다.

예를 들어, 차단 목록에 `@example.com`을 추가하면 해당 도메인을 가진 모든 이메일 주소가 차단됩니다. 마찬가지로, `foo@example.com`을 추가하면 해당 이메일 주소만 차단됩니다.

:::note

일회용 이메일, 서브어드레싱, 사용자 지정 이메일은 [신규 사용자 등록](/end-user-flows/sign-up-and-sign-in/sign-up), [소셜 로그인 시 이메일 연결](/end-user-flows/sign-up-and-sign-in/social-sign-in#collect-sign-up-identifiers), [Account API](/end-user-flows/account-settings/by-account-api#update-or-link-new-email)를 통한 이메일 업데이트 시 제한됩니다. 해당 이메일 주소를 가진 기존 사용자는 계속 로그인할 수 있습니다.

- 관리자는 <CloudLink to="/users">콘솔 > 사용자 관리</CloudLink>에서 사용자를 수동으로 추가하거나, [Management API](https://openapi.logto.io/operation/operation-createuser)를 통해 "제한 우회"가 가능합니다. 예: 서브어드레싱이 차단된 상태에서 서브어드레싱 이메일로 사용자를 생성.
- 기존 계정을 차단하려면 <CloudLink to="/users">콘솔 > 사용자 관리</CloudLink>에서 계정을 삭제하거나 일시 중지하세요.

:::

## 관련 리소스 {#related-resources}

<Url href="https://blog.logto.io/disposable-email">일회용 이메일이란? 앱에서 어떻게 처리해야 할까요?</Url>
