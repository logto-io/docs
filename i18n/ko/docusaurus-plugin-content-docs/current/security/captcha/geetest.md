---
slug: /security/captcha/geetest
sidebar_label: GeeTest
---

# GeeTest

[GeeTest](https://www.geetest.com) CAPTCHA v4는 현지화된 챌린지를 제공하는 적응형 CAPTCHA 서비스로, Google reCAPTCHA와 같은 글로벌 제공업체에 접근이 어려운 중국 본토에서 널리 사용됩니다. 이 가이드는 Logto와 함께 GeeTest CAPTCHA v4를 설정하는 과정을 안내합니다.

## 사전 준비 사항 {#prerequisites}

- CAPTCHA v4가 활성화된 GeeTest 계정

## CAPTCHA ID 및 키 얻기 {#get-the-captcha-id-and-key}

1. [GeeTest 대시보드](https://auth.geetest.com/login)에 로그인하세요.
2. 애플리케이션을 생성하고 **CAPTCHA v4** 이벤트를 만드세요.
3. 대시보드에서 **CAPTCHA ID**와 **CAPTCHA key**를 복사하세요.

## Logto 구성하기 {#configure-logto}

1. **Console > Security > CAPTCHA**로 이동하세요.
2. CAPTCHA 공급자로 **GeeTest**를 선택하세요.
3. GeeTest 대시보드에서 복사한 **CAPTCHA ID**와 **CAPTCHA key**를 입력하고 변경 사항을 저장하세요.

또는, Management API (`PUT /api/captcha-provider`)를 사용하여 `type`을 `"Geetest"`로, `siteKey`를 CAPTCHA ID로, `secretKey`를 CAPTCHA key로 설정하여 GeeTest를 구성할 수 있습니다:

```json
{
  "config": {
    "type": "Geetest",
    "siteKey": "<captchaId>",
    "secretKey": "<captchaKey>"
  }
}
```

:::note
Logto의 내장 로그인 경험 (Sign-in experience)은 GeeTest v4를 `bind` 모드로 초기화하고, UI 언어를 자동으로 매핑하며, GeeTest가 활성화된 동안 GeeTest SDK, API, 정적 오리진을 허용하도록 Content Security Policy 헤더를 업데이트합니다.
:::

## Bring your UI 사용 시 {#bring-your-ui}

[Bring your UI](/customization/bring-your-ui/)를 사용하는 경우, Logto는 GeeTest를 커스텀 프론트엔드에 자동으로 주입하거나 실행할 수 없습니다. Logto Console에서 CAPTCHA를 활성화한 후, 커스텀 UI에서 GeeTest v4 스크립트를 로드하고, 챌린지를 실행하며, 직렬화된 검증 결과를 `captchaToken`으로 Experience API에 전달해야 합니다.

커스텀 UI에서 GeeTest v4 스크립트를 로드하세요:

```html
<script src="https://static.geetest.com/v4/gt4.js" async defer></script>
```

상호작용을 시작하기 전에, `window.initGeetest4`로 GeeTest v4를 `bind` 모드로 초기화하고, `captcha.showCaptcha()`를 호출하며, `onSuccess` 내부에서 `captcha.getValidate()`로 검증 결과를 읽으세요. `captcha.getValidate()`는 네 개의 필드(`lot_number`, `captcha_output`, `pass_token`, `gen_time`)를 반환하므로, 객체를 `JSON.stringify(validate)`로 직렬화하여 `PUT /api/experience`의 `captchaToken`으로 전달해야 합니다:

```js
const captchaToken = await new Promise((resolve, reject) => {
  window.initGeetest4(
    {
      captchaId: '<captchaId>',
      product: 'bind',
      onError: reject,
    },
    (captcha) => {
      captcha
        .onReady(() => {
          captcha.showCaptcha();
        })
        .onSuccess(() => {
          const validate = captcha.getValidate();

          if (!validate) {
            reject(new Error('Missing GeeTest validation result'));
            return;
          }

          // `validate`에는 lot_number, captcha_output, pass_token, gen_time이 포함됩니다.
          resolve(JSON.stringify(validate));
        })
        .onError(reject)
        .onClose(() => {
          reject(new Error('GeeTest CAPTCHA was closed'));
        });
    }
  );
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

## CAPTCHA 활성화하기 {#enable-captcha}

CAPTCHA 공급자를 설정한 후에는 반드시 CAPTCHA 봇 보호 기능을 활성화해야 합니다.

Security 페이지로 이동하여 CAPTCHA 탭을 찾고, "Enable CAPTCHA" 토글 버튼을 켜세요.
