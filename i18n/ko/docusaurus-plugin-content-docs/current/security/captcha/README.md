---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# CAPTCHA 봇 보호

CAPTCHA 봇 보호는 사용자가 실제 사람임을 확인하여 사용자 플로우를 안전하게 보호하며, 봇 공격을 크게 줄여줍니다. Logto는 Google reCAPTCHA Enterprise 및 Cloudflare Turnstile과 같은 주요 제공업체를 지원합니다.

:::note
CAPTCHA는 식별자, 비밀번호, 인증 코드, 회원가입, 비밀번호 복구 작업에 적용됩니다. [매직 링크](/end-user-flows/one-time-token) 또는 [패스키 로그인](/end-user-flows/sign-up-and-sign-in/passkey-sign-in)에는 적용되지 않으므로, 매직 링크나 패스키로 로그인을 완료한 사용자는 추가적인 CAPTCHA를 풀 필요가 없습니다.
:::

## CAPTCHA 봇 보호 활성화하기 {#enabling-captcha-bot-protection}

다음 단계에 따라 사용자 플로우(식별자 로그인, 비밀번호 로그인, 회원가입, 비밀번호 복구)에 CAPTCHA를 활성화하세요:

1. **설정으로 이동**: **Console > Security > Bot protection**으로 이동하세요.
2. **제공업체 선택**: 원하는 CAPTCHA 제공업체(예: Google reCAPTCHA Enterprise 또는 Cloudflare Turnstile)를 선택하세요.
3. **구성**: 페이지 왼쪽의 안내에 따라 선택한 CAPTCHA 제공업체를 구성하세요.
4. **저장**: **Save and done**을 클릭하여 설정을 적용하세요.
5. **(선택 사항) CAPTCHA 활성화**: 제공업체가 구성되면 보안 페이지에서 CAPTCHA가 자동으로 활성화됩니다. 필요에 따라 수동으로 설정을 확인하거나 조정할 수도 있습니다.

## CAPTCHA 통합 미리보기 {#previewing-captcha-integration}

CAPTCHA 통합을 미리보고 테스트하는 방법은 두 가지가 있습니다:

1. **애플리케이션 사용**: 애플리케이션의 로그인, 회원가입, 비밀번호 복구 페이지로 이동하여 해당 사용자 작업을 시도하세요.
2. **데모 앱**: **Get started**로 이동하여 제공된 데모 애플리케이션을 사용해 CAPTCHA 기능을 테스트하세요.

어떤 방법을 사용하든 CAPTCHA 챌린지가 정상적으로 표시되는지 확인하세요.

## 지원되는 제공업체 {#supported-providers}

현재 지원되는 제공업체는 다음과 같습니다:

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
