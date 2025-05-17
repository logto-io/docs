---
slug: /security/captcha
sidebar_label: CAPTCHA
---

# CAPTCHA 봇 보호

CAPTCHA 봇 보호는 사용자가 인간임을 확인하여 사용자 흐름을 보호하고 봇 공격을 크게 줄입니다. Logto는 Google reCAPTCHA Enterprise 및 Cloudflare Turnstile과 같은 주요 제공업체를 지원합니다.

## CAPTCHA 봇 보호 활성화 {#enabling-captcha-bot-protection}

사용자 흐름 (로그인, 등록, 비밀번호 복구)에 대해 CAPTCHA를 활성화하려면 다음 단계를 따르세요:

1. **설정으로 이동**: **Console > Security > Bot protection**으로 이동합니다.
2. **제공업체 선택**: 선호하는 CAPTCHA 제공업체를 선택하세요 (예: Google reCAPTCHA Enterprise 또는 Cloudflare Turnstile).
3. **구성**: 페이지 왼쪽의 지침을 따라 선택한 CAPTCHA 제공업체를 구성하세요.
4. **저장**: **Save and done**을 클릭하여 설정을 적용하세요.
5. **(선택 사항) CAPTCHA 활성화**: 제공업체가 구성되면 보안 페이지에서 CAPTCHA가 자동으로 활성화됩니다. 그러나 필요에 따라 수동으로 설정을 확인하거나 조정할 수 있습니다.

## CAPTCHA 통합 미리보기 {#previewing-captcha-integration}

CAPTCHA 통합을 미리보고 테스트하는 두 가지 옵션이 있습니다:

1. **애플리케이션 사용**: 애플리케이션의 로그인, 등록 또는 비밀번호 복구 페이지로 이동하여 해당 사용자 작업을 시도하세요.
2. **데모 앱**: **Get started**로 이동하여 제공된 데모 애플리케이션을 사용하여 CAPTCHA 기능을 테스트하세요.

어느 옵션에서든 CAPTCHA 챌린지가 예상대로 나타나는지 확인하세요.

## 지원되는 제공업체 {#supported-providers}

현재 지원되는 제공업체는 다음과 같습니다:

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
