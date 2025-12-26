---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise는 고급 봇 감지 기능을 사용하여 사용자 경험을 방해하지 않으면서 웹사이트를 사기 및 남용으로부터 보호하는 Google 서비스입니다. 이 가이드에서는 Logto와 함께 reCAPTCHA Enterprise를 설정하는 과정을 안내합니다.

## 사전 준비 사항 {#prerequisites}

- Google Cloud 프로젝트

## reCAPTCHA 키 설정하기 {#setup-a-recaptcha-key}

1. [Google Cloud Console의 reCAPTCHA 페이지](https://console.cloud.google.com/security/recaptcha)로 이동하세요.
2. "reCAPTCHA keys" 근처의 **Create key** 버튼을 클릭하세요.
3. 다음 세부 정보로 양식을 작성하세요:
   - **Display name**: 키에 부여할 임의의 이름
   - **Application type**: Website
   - **Domain list**: Logto의 엔드포인트 도메인을 추가하세요
   - **Verification type**: **Score-based (invisible)** 또는 **Checkbox challenge** 중에서 선택하세요. 이는 reCAPTCHA가 사용자에게 어떻게 표시될지 결정합니다. 자세한 내용은 [검증 모드](#verification-mode)를 참조하세요.
4. 키를 생성한 후, 키 세부 정보 페이지로 리디렉션됩니다. **ID**를 복사하세요.

## API 키 설정하기 {#setup-an-api-key}

1. [Google Cloud Console의 Credentials 페이지](https://console.cloud.google.com/apis/credentials)로 이동하세요.
2. **Create credentials** 버튼을 클릭하고 **API key**를 선택하세요.
3. API 키를 복사하세요.
4. 선택적으로, 보안을 강화하기 위해 API 키를 **reCAPTCHA Enterprise API**로 제한할 수 있습니다.
5. "Application restrictions"가 무엇인지 잘 모를 경우 **None**으로 두세요.

## 프로젝트 ID 얻기 {#get-project-id}

1. [Google Cloud Console의 홈 페이지](https://console.cloud.google.com/welcome)에서 **Project ID**를 복사하세요.

## 검증 모드 {#verification-mode}

reCAPTCHA Enterprise는 두 가지 검증 모드를 지원합니다:

- **Invisible**: 사용자 상호작용 없이 백그라운드에서 자동으로 실행되는 점수 기반 검증입니다. 기본 모드입니다.
- **Checkbox**: 사용자의 상호작용이 필요한 고전적인 "I'm not a robot" 체크박스 위젯을 표시합니다.

:::note
Logto에서 선택한 검증 모드는 Google Cloud Console에서 생성한 키 유형과 일치해야 합니다. 점수 기반 키를 생성했다면 **Invisible**을 선택하세요. 체크박스 챌린지 키를 생성했다면 **Checkbox**를 선택하세요.
:::

## 커스텀 도메인 {#custom-domain}

기본적으로 Logto는 `www.google.com`에서 reCAPTCHA 스크립트를 로드합니다. 그러나 Google의 표준 도메인에 접근할 수 없는 일부 지역에서는 대체 도메인을 구성할 수 있습니다.

지원되는 도메인:

- `www.google.com` (기본값)
- `recaptcha.net`

커스텀 도메인을 구성하려면, Logto Console에서 reCAPTCHA Enterprise를 설정할 때 **Domain** 필드에 도메인을 입력하세요.

## CAPTCHA 활성화하기 {#enable-captcha}

CAPTCHA 공급자를 설정한 후에는 반드시 CAPTCHA 봇 보호 기능을 활성화해야 합니다.

보안 페이지로 이동하여 CAPTCHA 탭을 찾고, "Enable CAPTCHA"의 토글 버튼을 켜세요.
