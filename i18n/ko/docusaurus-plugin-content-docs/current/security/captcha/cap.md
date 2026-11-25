---
slug: /security/captcha/cap
sidebar_label: Cap
---

# Cap

[Cap](https://capjs.js.org)은 시각적 퍼즐이나 타사 서비스 의존성 없이 작업 증명(proof-of-work)에 기반한 오픈 소스, 자체 호스팅 CAPTCHA 대안입니다. 외부 CAPTCHA 서비스를 사용할 수 없는 지역에 적합합니다. 이 가이드는 Logto와 함께 Cap을 설정하는 방법을 안내합니다.

## 사전 준비 사항 {#prerequisites}

- 브라우저 로그인 페이지와 Logto 모두 접근할 수 있도록, HTTPS를 통해 공개적으로 접근 가능한 [Cap Standalone](https://capjs.js.org/guide/capd/index.html) 인스턴스가 필요합니다.

## 사이트 키 생성하기 {#create-a-site-key}

1. Cap Standalone 인스턴스의 대시보드를 열고, 관리자 키로 로그인하세요.
2. 새 사이트 키를 생성하세요. CORS 오리진을 제한하는 경우, Logto의 엔드포인트 도메인(예: `https://[tenant-id].logto.app`)을 추가하세요.
3. **Site key**와 **Secret key**를 복사하세요. 시크릿 키는 한 번만 표시됩니다.

## Logto 설정하기 {#configure-logto}

**Console > Security > CAPTCHA**에서 **Cap**을 선택하고 다음 정보를 입력하세요:

- **Cap endpoint**: Cap Standalone 인스턴스의 기본 URL, 예: `https://cap.example.com`
- **Site key**: 위에서 복사한 사이트 키
- **Secret key**: 위에서 복사한 시크릿 키

또는, Management API의 `PUT /api/captcha-provider`를 통해 Cap을 설정할 수 있습니다:

```json
{
  "config": {
    "type": "Cap",
    "endpoint": "https://cap.example.com",
    "siteKey": "<siteKey>",
    "secretKey": "<secretKey>"
  }
}
```

:::note
운영 환경에서는 Cap 엔드포인트에 HTTPS를 사용하세요. 브라우저는 HTTPS 로그인 페이지에서 혼합 HTTP 요청을 차단하며, HTTP는 시크릿 키를 암호화 없이 전송합니다.
:::

## 보안 참고 사항 {#security-note}

Cap의 계측 챌린지는 브라우저에서 스크립트를 평가하여 봇을 감지합니다. Cap이 활성화된 동안, Logto의 내장 로그인 페이지는 Cap 오리진, blob 워커, WebAssembly (`'wasm-unsafe-eval'`), 동적 JavaScript 평가 (`'unsafe-eval'`)를 Content Security Policy에 허용합니다.

## Bring your UI {#bring-your-ui}

[Bring your UI](/customization/bring-your-ui/)를 사용하는 경우, Logto는 Cap을 자동으로 커스텀 프론트엔드에 주입하거나 실행할 수 없습니다. Logto Console에서 CAPTCHA를 활성화한 후, 커스텀 UI에서 `@cap.js/widget`을 로드하고, 위젯을 렌더링하며, 해결된 토큰을 Experience API로 전송해야 합니다.

커스텀 UI에서 `@cap.js/widget`을 로드하세요(또는 프론트엔드 빌드에 설치 및 번들링):

```html
<script src="https://cdn.jsdelivr.net/npm/@cap.js/widget" async></script>
```

:::note
CDN에서 `@cap.js/widget`을 로드하고 번들링하지 않는 경우, 위젯 스크립트와 WebAssembly 솔버가 로드될 수 있도록 CDN 오리진(예: `https://cdn.jsdelivr.net`)을 [커스텀 CSP 소스](/customization/bring-your-ui/#configure-custom-csp-sources)의 `scriptSrc` 및 `connectSrc`에 추가하세요.
:::

Cap Standalone 엔드포인트와 사이트 키를 가리키는 `<cap-widget>` 요소를 추가하세요:

```html
<cap-widget data-cap-api-endpoint="https://cap.example.com/<siteKey>/"></cap-widget>
```

`solve` 이벤트(`event.detail.token`)를 수신하고, 단일 사용 토큰을 `PUT /api/experience`의 `captchaToken`으로 전송한 뒤, 사용 후 `widget.reset()`으로 위젯을 초기화하세요:

```js
await customElements.whenDefined('cap-widget');
const widget = document.querySelector('cap-widget');

const captchaToken =
  widget.token ??
  (await new Promise((resolve, reject) => {
    const cleanup = () => {
      widget.removeEventListener('solve', onSolve);
      widget.removeEventListener('error', onError);
    };

    const onSolve = (event) => {
      cleanup();
      resolve(event.detail.token);
    };

    const onError = (event) => {
      cleanup();
      reject(new Error(event.detail?.message ?? 'Cap 인증에 실패했습니다'));
    };

    widget.addEventListener('solve', onSolve);
    widget.addEventListener('error', onError);
    widget.solve().catch((error) => {
      cleanup();
      reject(error);
    });
  }));

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
  // Cap 토큰은 단일 사용이므로, 토큰 사용 후 위젯을 초기화하세요.
  widget.reset();
}
```

## CAPTCHA 활성화하기 {#enable-captcha}

CAPTCHA 공급자를 설정한 후, 반드시 CAPTCHA 봇 보호 기능을 활성화하세요.

Security 페이지로 이동하여 CAPTCHA 탭을 찾고, "Enable CAPTCHA" 토글 버튼을 켜세요.
