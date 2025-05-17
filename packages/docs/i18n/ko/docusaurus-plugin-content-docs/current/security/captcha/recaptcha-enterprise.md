---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise는 고급 봇 감지를 사용하여 사용자 경험을 방해하지 않고 웹사이트를 사기 및 악용으로부터 보호하는 Google 서비스입니다. 이 가이드는 Logto와 함께 reCAPTCHA Enterprise를 설정하는 과정을 안내합니다.

## 사전 준비 사항 {#prerequisites}

- Google Cloud 프로젝트

## reCAPTCHA 키 설정 {#setup-a-recaptcha-key}

1. [Google Cloud Console의 reCAPTCHA 페이지](https://console.cloud.google.com/security/recaptcha)로 이동합니다.
2. "reCAPTCHA keys" 근처의 **Create key** 버튼을 클릭합니다.
3. 다음 세부 정보를 사용하여 양식을 작성합니다:
   - **Display name**: 키에 부여할 이름
   - **Application type**: Website
   - **Domain list**: Logto의 엔드포인트 도메인을 추가합니다.
4. 키를 생성한 후, 키 세부 정보 페이지로 리디렉션됩니다. **ID**를 복사합니다.

## API 키 설정 {#setup-an-api-key}

1. [Google Cloud Console의 Credentials 페이지](https://console.cloud.google.com/apis/credentials)로 이동합니다.
2. **Create credentials** 버튼을 클릭하고 **API key**를 선택합니다.
3. API 키를 복사합니다.
4. 선택적으로, API 키를 **reCAPTCHA Enterprise API**로 제한하여 보안을 강화할 수 있습니다.
5. "Application restrictions"을 이해하지 못한다면 **None**으로 남겨두세요.

## 프로젝트 ID 가져오기 {#get-project-id}

1. [Google Cloud Console의 홈 페이지](https://console.cloud.google.com/welcome)에서 **Project ID**를 복사합니다.

## CAPTCHA 활성화 {#enable-captcha}

CAPTCHA 제공자를 설정한 후 CAPTCHA 봇 보호를 활성화하는 것을 잊지 마세요.

보안 페이지로 이동하여 CAPTCHA 탭을 찾고 "Enable CAPTCHA"의 토글 버튼을 켭니다.
