---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile은 스팸 및 악용으로부터 웹사이트를 보호하는 CAPTCHA 서비스입니다. 이 가이드는 Logto와 함께 Turnstile을 설정하는 과정을 안내합니다.

## 사전 준비 사항 {#prerequisites}

- Cloudflare 계정

## 설정 {#setup}

1. [Cloudflare 대시보드](https://dash.cloudflare.com/login)로 이동하여 계정을 선택하세요.
2. **Turnstile** > **위젯 추가**로 이동하세요.
3. 다음 세부 정보를 입력하여 양식을 작성하세요:
   - **위젯 이름**: 위젯에 부여할 이름
   - **호스트 이름**: Logto의 엔드포인트 도메인, 예: https://[tenant-id].logto.app
   - **위젯 모드**: 기본값으로 유지

## 사이트 키 및 비밀 키 가져오기 {#get-the-site-key-and-secret-key}

1. 방금 생성한 위젯으로 이동하여 **위젯 관리**를 클릭하세요.
2. 아래로 스크롤하여 **사이트 키**와 **비밀 키**를 복사하세요.

## CAPTCHA 활성화 {#enable-captcha}

CAPTCHA 공급자를 설정한 후 CAPTCHA 봇 보호를 활성화하는 것을 잊지 마세요.

보안 페이지로 이동하여 CAPTCHA 탭을 찾고 "CAPTCHA 활성화"의 토글 버튼을 켜세요.
