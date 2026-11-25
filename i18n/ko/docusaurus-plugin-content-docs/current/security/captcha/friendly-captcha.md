---
slug: /security/captcha/friendly-captcha
sidebar_label: Friendly Captcha
---

# Friendly Captcha

[Friendly Captcha](https://friendlycaptcha.com) v2는 시각적 퍼즐 없이 작업 증명 기반의 프라이버시 우선, GDPR 준수 CAPTCHA 서비스입니다. 이 가이드는 Logto에서 Friendly Captcha를 설정하는 방법을 안내합니다.

## 사전 준비 사항 {#prerequisites}

- Friendly Captcha 계정

## Sitekey 및 API key 얻기 {#get-the-sitekey-and-api-key}

1. [Friendly Captcha 대시보드](https://app.friendlycaptcha.com)에 로그인하여 **Applications**로 이동하세요.
2. **+ New Application**을 클릭하고 **v2**를 선택하세요.
3. 애플리케이션에서 허용된 origin을 제한하는 경우, Logto 엔드포인트 도메인(예: `https://[tenant-id].logto.app`)을 추가하세요.
4. 글로벌 엔드포인트(`global.frcapi.com`)는 기본적으로 활성화되어 있습니다. sitekey를 [EU 엔드포인트](https://developer.friendlycaptcha.com/docs/v2/guides/eu-endpoint) (`eu.frcapi.com`, Advanced 및 Enterprise 요금제에서 사용 가능)로 제한하지 않는 한 그대로 두세요. **Sitekey**(FC로 시작)를 복사하세요.
5. 대시보드에서 **API Keys**를 열고, 새 **API key**를 생성한 후 복사하세요.

## Logto 설정하기 {#configure-logto}

1. **Console > Security > CAPTCHA**로 이동하여 **Friendly Captcha**를 선택한 뒤, **Site key**와 **API key**를 입력하세요. **API endpoint**는 **Global**로 두거나, sitekey가 EU 엔드포인트로 제한된 경우 **EU**를 선택하세요.
2. 또는 Management API (`PUT /api/captcha-provider`)를 통해 설정할 수 있습니다. `apiEndpoint`는 선택 사항이며 `"global"`(기본값) 또는 `"eu"`를 입력할 수 있습니다:

```json
{
  "config": {
    "type": "FriendlyCaptcha",
    "siteKey": "<siteKey>",
    "secretKey": "<apiKey>",
    "apiEndpoint": "global"
  }
}
```

## Bring your UI 사용 시 {#bring-your-ui}

[Bring your UI](/customization/bring-your-ui/)를 사용하는 경우, Logto는 Friendly Captcha를 커스텀 프론트엔드에 자동으로 삽입하거나 실행할 수 없습니다. Logto Console에서 CAPTCHA를 활성화한 후, 커스텀 UI에서 `@friendlycaptcha/sdk`를 로드하고, 위젯을 마운트한 뒤, 완료 토큰을 기다려 Experience API로 전송해야 합니다.

커스텀 UI 프로젝트에 Friendly Captcha v2 SDK를 설치하세요:

```bash
npm install @friendlycaptcha/sdk
```

위젯을 위한 컨테이너를 추가하세요:

```html
<div id="friendly-captcha-container"></div>
```

`FriendlyCaptchaSDK`로 위젯을 마운트하고, `frc:widget.complete` 이벤트에서 `event.detail.response`를 읽어, 해당 1회용 토큰을 `PUT /api/experience`의 `captchaToken`으로 전달하세요. 토큰 사용 후에는 `widget.reset()`으로 위젯을 초기화하여 재시도 시 새로운 토큰을 받도록 합니다:

```js
import { FriendlyCaptchaSDK } from '@friendlycaptcha/sdk';

const sdk = new FriendlyCaptchaSDK();
const element = document.querySelector('#friendly-captcha-container');

const widget = sdk.createWidget({
  element,
  sitekey: '<siteKey>',
  // Logto에서 EU API endpoint를 선택했다면 'eu'로 설정하세요.
  apiEndpoint: 'global',
});

const getCaptchaToken = () => {
  if (widget.getState() === 'completed') {
    return Promise.resolve(widget.getResponse());
  }

  return new Promise((resolve, reject) => {
    const cleanup = () => {
      widget.removeEventListener('frc:widget.complete', onComplete);
      widget.removeEventListener('frc:widget.error', onError);
    };

    const onComplete = (event) => {
      cleanup();
      resolve(event.detail.response);
    };

    const onError = (event) => {
      cleanup();
      reject(new Error(event.detail.error.detail || event.detail.error.code));
    };

    widget.addEventListener('frc:widget.complete', onComplete);
    widget.addEventListener('frc:widget.error', onError);

    if (['init', 'reset', 'unactivated'].includes(widget.getState())) {
      widget.start();
    }
  });
};

// 상호작용을 시작하기 전에 1회용 토큰을 획득하세요:
const captchaToken = await getCaptchaToken();

try {
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
} finally {
  // 토큰은 1회용이므로, 재시도 시 새로운 토큰을 받기 위해 위젯을 초기화하세요.
  widget.reset();
}
```

## CAPTCHA 활성화하기 {#enable-captcha}

CAPTCHA 공급자를 설정한 후, 반드시 CAPTCHA 봇 보호 기능을 활성화해야 합니다.

Security 페이지로 이동하여 CAPTCHA 탭을 찾고, "Enable CAPTCHA" 토글 버튼을 켜세요.
