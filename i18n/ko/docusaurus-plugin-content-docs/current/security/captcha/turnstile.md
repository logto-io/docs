---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile은 웹사이트를 스팸 및 악용으로부터 보호하는 CAPTCHA 서비스입니다. 이 가이드는 Logto와 함께 Turnstile을 설정하는 과정을 안내합니다.

## 사전 준비 사항 {#prerequisites}

- Cloudflare 계정

## 설정 {#setup}

1. [Cloudflare 대시보드](https://dash.cloudflare.com/login)로 이동하여 계정을 선택하세요.
2. **Turnstile** > **Add widget**로 이동하세요.
3. 다음 세부 정보로 양식을 작성하세요:
   - **Widget name**: 위젯에 부여할 임의의 이름
   - **Hostname**: Logto의 엔드포인트 도메인, 예: https://[tenant-id].logto.app
   - **Widget Mode**: 기본값으로 두세요

## 사이트 키와 시크릿 키 받기 {#get-the-site-key-and-secret-key}

1. 방금 생성한 위젯으로 이동하여 **Manage widget**을 클릭하세요.
2. 아래로 스크롤하여 **Site key**와 **Secret key**를 복사하세요.

## Bring your UI {#bring-your-ui}

[Bring your UI](/customization/bring-your-ui/)를 사용하는 경우, Logto는 Turnstile을 자동으로 커스텀 프론트엔드에 삽입하거나 실행할 수 없습니다. Logto Console에서 CAPTCHA를 활성화한 후, 커스텀 UI에서 Turnstile 스크립트를 로드하고, 위젯을 렌더링하며, 반환된 토큰을 Experience API로 전송해야 합니다.

커스텀 UI에서 Turnstile 스크립트를 로드하세요:

```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```

위젯을 위한 컨테이너를 추가하세요:

```html
<div id="turnstile-container"></div>
```

상호작용을 시작하기 전에, 사이트 키로 Turnstile을 렌더링하고 콜백 토큰을 `PUT /api/experience`의 `captchaToken`으로 전달하세요:

```js
const captchaToken = await new Promise((resolve, reject) => {
  window.turnstile.render('#turnstile-container', {
    sitekey: '<siteKey>',
    callback: resolve,
    'error-callback': reject,
    size: 'flexible',
  });
});

await fetch('/api/experience', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    interactionEvent: 'SignIn',
    captchaToken,
  }),
});
```

## CAPTCHA 활성화 {#enable-captcha}

CAPTCHA 공급자를 설정한 후에는 반드시 CAPTCHA 봇 보호 기능을 활성화해야 합니다.

보안 페이지로 이동하여 CAPTCHA 탭을 찾고, "Enable CAPTCHA" 토글 버튼을 켜세요.
