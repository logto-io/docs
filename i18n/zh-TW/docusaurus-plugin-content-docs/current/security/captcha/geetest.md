---
slug: /security/captcha/geetest
sidebar_label: GeeTest
---

# GeeTest

[GeeTest](https://www.geetest.com) CAPTCHA v4 是一款自適應驗證碼服務，提供在地化挑戰，廣泛應用於中國大陸地區，特別是在 Google reCAPTCHA 等全球服務難以訪問時。本指南將帶你完成在 Logto 中設定 GeeTest CAPTCHA v4 的流程。

## 先決條件 {#prerequisites}

- 已啟用 CAPTCHA v4 的 GeeTest 帳號。

## 取得 CAPTCHA ID 與金鑰 {#get-the-captcha-id-and-key}

1. 登入 [GeeTest 控制台](https://auth.geetest.com/login)。
2. 建立一個應用程式並新增 **CAPTCHA v4** 事件。
3. 從控制台複製 **CAPTCHA ID** 與 **CAPTCHA key**。

## 設定 Logto {#configure-logto}

1. 前往 **Console > Security > CAPTCHA**。
2. 選擇 **GeeTest** 作為 CAPTCHA 供應商。
3. 輸入你從 GeeTest 控制台複製的 **CAPTCHA ID** 與 **CAPTCHA key**，並儲存變更。

你也可以透過 Management API（`PUT /api/captcha-provider`）設定 GeeTest，`type` 設為 `"Geetest"`，`siteKey` 設為你的 CAPTCHA ID，`secretKey` 設為你的 CAPTCHA key：

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
Logto 內建的登入體驗 (Sign-in experience) 會以 `bind` 模式初始化 GeeTest v4，自動對應 UI 語言，並在啟用 GeeTest 時自動更新 Content Security Policy 標頭，以允許 GeeTest SDK、API 及靜態資源來源。
:::

## 自訂你的 UI {#bring-your-ui}

如果你使用 [自訂 UI (Bring your UI)](/customization/bring-your-ui/)，Logto 無法自動在你的前端注入或執行 GeeTest。啟用 CAPTCHA 後，你的自訂 UI 必須自行載入 GeeTest v4 腳本、執行挑戰，並將序列化後的驗證結果作為 `captchaToken` 傳送給 Experience API。

在你的自訂 UI 載入 GeeTest v4 腳本：

```html
<script src="https://static.geetest.com/v4/gt4.js" async defer></script>
```

互動開始前，請以 `bind` 模式透過 `window.initGeetest4` 初始化 GeeTest v4，呼叫 `captcha.showCaptcha()`，並在 `onSuccess` 內從 `captcha.getValidate()` 讀取驗證結果。由於 `captcha.getValidate()` 會回傳四個欄位（`lot_number`、`captcha_output`、`pass_token`、`gen_time`），請用 `JSON.stringify(validate)` 將物件序列化，並作為 `captchaToken` 傳給 `PUT /api/experience`：

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
            reject(new Error('缺少 GeeTest 驗證結果'));
            return;
          }

          // `validate` 包含：lot_number, captcha_output, pass_token, gen_time
          resolve(JSON.stringify(validate));
        })
        .onError(reject)
        .onClose(() => {
          reject(new Error('GeeTest CAPTCHA 已關閉'));
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

## 啟用 CAPTCHA {#enable-captcha}

完成 CAPTCHA 供應商設定後，請記得啟用 CAPTCHA 機器人防護。

前往 Security 頁面，找到 CAPTCHA 分頁，並開啟「啟用 CAPTCHA」的切換按鈕。
