---
sidebar_position: 4
---

# 백업 코드

## 개념 {#concepts}

백업 코드, 복구 코드라고도 불리며, 사용자의 주요 인증 (Authentication) 요소 (예: 인증 앱 또는 하드웨어 토큰)가 사용 불가능할 때 백업 역할을 하는 MFA를 위한 일회용 코드입니다.

이를 잃어버리면 계정 복구에 어려움이 생길 수 있습니다. 따라서 백업 코드를 활성화하기 전에 추가적인 주요 요소를 설정하여 우선순위를 부여하는 것이 권장됩니다.

Logto는 사용자가 추가 요소를 설정하면 자동으로 10개의 백업 코드를 생성합니다. 각 코드는 한 번만 사용할 수 있습니다. 사용자는 기존 코드를 모두 사용하기 전에 사용자 계정 설정 ( [Management API](https://logto.io/integrate-logto/interact-with-management-api/) 을 통해 접근 가능) 에서 새로운 코드 세트를 재생성하는 것이 권장됩니다.

## 인증 (Authentication) 흐름 {#authentication-flows}

- **백업 코드 설정 흐름**

![백업 코드 설정 흐름](./assets/backup-codes-set-up-flow.png)

- **백업 코드 검증 흐름**

![백업 코드 검증 흐름](./assets/backup-codes-verification-flow.png)
