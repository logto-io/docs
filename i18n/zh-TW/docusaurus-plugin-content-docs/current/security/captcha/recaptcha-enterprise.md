---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise 是 Google 提供的服務，透過先進的機器人偵測技術，在不影響使用者體驗的情況下保護網站免於詐騙與濫用。本指南將帶你完成將 reCAPTCHA Enterprise 與 Logto 整合的流程。

## 先決條件 {#prerequisites}

- 一個 Google Cloud 專案

## 建立 reCAPTCHA 金鑰 {#setup-a-recaptcha-key}

1. 前往 [Google Cloud Console 的 reCAPTCHA 頁面](https://console.cloud.google.com/security/recaptcha)。
2. 點擊「reCAPTCHA keys」旁的 **Create key** 按鈕。
3. 填寫下列資訊：
   - **Display name**：你想給這個金鑰的任何名稱
   - **Application type**：Website
   - **Domain list**：新增 Logto 的端點網域
   - **Verification type**：選擇 **Score-based (invisible)** 或 **Checkbox challenge**。這會決定 reCAPTCHA 呈現給使用者的方式。詳情請參閱 [驗證模式 (Verification mode)](#verification-mode)。
4. 建立金鑰後，會自動導向金鑰詳細頁面，複製 **ID**。

## 建立 API 金鑰 {#setup-an-api-key}

1. 前往 [Google Cloud Console 的 Credentials 頁面](https://console.cloud.google.com/apis/credentials)。
2. 點擊 **Create credentials** 按鈕並選擇 **API key**。
3. 複製 API 金鑰。
4. 你可以選擇將 API 金鑰限制於 **reCAPTCHA Enterprise API**，以提升安全性。
5. 若不清楚「Application restrictions」用途，請保持為 **None**。

## 取得專案 ID {#get-project-id}

1. 從 [Google Cloud Console 首頁](https://console.cloud.google.com/welcome) 複製 **Project ID**。

## 驗證模式 (Verification mode) {#verification-mode}

reCAPTCHA Enterprise 支援兩種驗證模式：

- **Invisible**：分數制驗證，於背景自動執行，無需使用者互動。此為預設模式。
- **Checkbox**：顯示經典的「我不是機器人」勾選框，需要使用者互動。

:::note
你在 Logto 選擇的驗證模式必須與 Google Cloud Console 建立金鑰時的類型一致。若建立的是分數制金鑰，請選擇 **Invisible**；若建立的是勾選挑戰金鑰，請選擇 **Checkbox**。
:::

## Bring your UI {#bring-your-ui}

如果你使用 [Bring your UI](/customization/bring-your-ui/)，Logto 無法自動在你的自訂前端注入或執行 reCAPTCHA。啟用 CAPTCHA 後，你的自訂 UI 必須自行載入 reCAPTCHA Enterprise 腳本、取得 CAPTCHA 權杖，並將其傳送給 Experience API。

對於 **Invisible** 模式，請以你的 site key 載入腳本：

```html
<script src="https://www.google.com/recaptcha/enterprise.js?render=<siteKey>" async defer></script>
```

若你在 Logto 設定了自訂網域，請將 `www.google.com` 替換為該網域，例如 `recaptcha.net`。

在互動開始前，以固定 action `interaction` 執行 reCAPTCHA，並將回傳的權杖作為 `captchaToken` 傳給 `PUT /api/experience`：

```js
const captchaToken = await grecaptcha.enterprise.execute('<siteKey>', {
  action: 'interaction',
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

對於 **Checkbox** 模式，請以 `render=explicit` 載入腳本，在頁面上渲染元件，並於呼叫 `PUT /api/experience` 時將 callback 權杖作為 `captchaToken`。

## 自訂網域 {#custom-domain}

預設情況下，Logto 會從 `www.google.com` 載入 reCAPTCHA 腳本。但在某些地區，Google 標準網域可能無法存取，你可以設定替代網域。

支援的網域：

- `www.google.com`（預設）
- `recaptcha.net`

如需設定自訂網域，請於 Logto Console 設定 reCAPTCHA Enterprise 時，在 **Domain** 欄位輸入網域。

## 啟用 CAPTCHA {#enable-captcha}

完成 CAPTCHA 服務商設定後，請記得啟用 CAPTCHA 機器人防護。

前往安全性頁面，找到 CAPTCHA 分頁，並開啟「Enable CAPTCHA」的切換按鈕。
