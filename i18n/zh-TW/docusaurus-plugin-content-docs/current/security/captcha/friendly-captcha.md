---
slug: /security/captcha/friendly-captcha
sidebar_label: Friendly Captcha
---

# Friendly Captcha

[Friendly Captcha](https://friendlycaptcha.com) v2 是一款以隱私為核心、符合 GDPR 的 CAPTCHA 服務，基於工作量證明（proof-of-work），無需視覺拼圖。本指南將帶你在 Logto 中設定 Friendly Captcha。

## 先決條件 {#prerequisites}

- 一個 Friendly Captcha 帳號

## 取得 sitekey 與 API key {#get-the-sitekey-and-api-key}

1. 登入 [Friendly Captcha 控制台](https://app.friendlycaptcha.com)，前往 **Applications**。
2. 點擊 **+ New Application** 並選擇 **v2**。
3. 若你限制應用程式允許的來源，請新增你的 Logto 端點網域（例如：`https://[tenant-id].logto.app`）。
4. 除非你將 sitekey 限制於 [EU 端點](https://developer.friendlycaptcha.com/docs/v2/guides/eu-endpoint)（`eu.frcapi.com`，僅限進階與企業方案），否則請保持全域端點（`global.frcapi.com`）啟用，並複製 **Sitekey**（以 `FC` 開頭）。
5. 在控制台開啟 **API Keys**，建立新的 **API key** 並複製。

## 設定 Logto {#configure-logto}

1. 前往 **Console > Security > CAPTCHA**，選擇 **Friendly Captcha**，輸入 **Site key** 與 **API key**。**API endpoint** 保持 **Global**，若你的 sitekey 僅限 EU 端點則選擇 **EU**。
2. 或者，也可透過 Management API（`PUT /api/captcha-provider`）設定。`apiEndpoint` 為選填，接受 `"global"`（預設）或 `"eu"`：

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

## Bring your UI {#bring-your-ui}

如果你使用 [Bring your UI](/customization/bring-your-ui/)，Logto 無法自動在你的自訂前端注入或執行 Friendly Captcha。啟用 CAPTCHA 後，你的自訂 UI 必須載入 `@friendlycaptcha/sdk`，掛載元件、等待完成權杖，並將其傳送給 使用體驗 (Experience) API。

在你的自訂 UI 專案安裝 Friendly Captcha v2 SDK：

```bash
npm install @friendlycaptcha/sdk
```

新增元件容器：

```html
<div id="friendly-captcha-container"></div>
```

使用 `FriendlyCaptchaSDK` 掛載元件，監聽 `frc:widget.complete` 事件以讀取 `event.detail.response`，將該一次性權杖作為 `captchaToken` 傳給 `PUT /api/experience`，消耗後請用 `widget.reset()` 重設元件，以便重試時獲得新權杖：

```js
import { FriendlyCaptchaSDK } from '@friendlycaptcha/sdk';

const sdk = new FriendlyCaptchaSDK();
const element = document.querySelector('#friendly-captcha-container');

const widget = sdk.createWidget({
  element,
  sitekey: '<siteKey>',
  // 若你在 Logto 選擇 EU API endpoint，請設為 'eu'。
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

// 在互動開始前，取得一次性權杖：
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
  // 權杖僅能使用一次；重設元件以便重試時獲得新權杖。
  widget.reset();
}
```

## 啟用 CAPTCHA {#enable-captcha}

完成 CAPTCHA 服務商設定後，請記得啟用 CAPTCHA 機器人防護。

前往 Security 頁面，找到 CAPTCHA 分頁，開啟「Enable CAPTCHA」的切換按鈕。
