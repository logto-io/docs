---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile 是一項 CAPTCHA 服務，可協助保護你的網站免於垃圾訊息與濫用。本指南將帶你完成將 Turnstile 與 Logto 整合的流程。

## 先決條件 {#prerequisites}

- 一個 Cloudflare 帳號

## 設定步驟 {#setup}

1. 前往 [Cloudflare 控制台](https://dash.cloudflare.com/login) 並選擇你的帳號。
2. 導覽至 **Turnstile** > **Add widget**。
3. 填寫下列資訊：
   - **Widget name**：你想給這個 widget 的任何名稱
   - **Hostname**：Logto 的端點網域，例如 https://[tenant-id].logto.app
   - **Widget Mode**：保持預設值即可

## 取得 site key 與 secret key {#get-the-site-key-and-secret-key}

1. 前往你剛建立的 widget，點擊 **Manage widget**。
2. 滾動至頁面底部，複製 **Site key** 與 **Secret key**。

## Bring your UI {#bring-your-ui}

如果你使用 [Bring your UI](/customization/bring-your-ui/)，Logto 無法自動在你的自訂前端注入或執行 Turnstile。啟用 CAPTCHA 後，你的自訂 UI 必須載入 Turnstile 腳本、渲染 widget，並將回傳的權杖傳送給使用體驗 (Experience) API。

在你的自訂 UI 載入 Turnstile 腳本：

```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```

新增 widget 的容器：

```html
<div id="turnstile-container"></div>
```

在互動開始前，使用你的 site key 渲染 Turnstile，並將 callback 權杖作為 `captchaToken` 傳遞到 `PUT /api/experience`：

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

## 啟用 CAPTCHA {#enable-captcha}

完成 CAPTCHA 服務商設定後，請記得啟用 CAPTCHA 機器人防護。

前往安全性頁面，找到 CAPTCHA 分頁，並切換「啟用 CAPTCHA」的開關按鈕。
