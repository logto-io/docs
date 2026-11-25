---
slug: /security/captcha/cap
sidebar_label: Cap
---

# Cap

[Cap](https://capjs.js.org) 是一個開源、自託管的 CAPTCHA 替代方案，基於工作量證明（proof-of-work），無需視覺拼圖或第三方服務依賴，非常適合無法連線至外部 CAPTCHA 服務的地區。此指南將帶你完成將 Cap 與 Logto 整合的設定流程。

## 先決條件 {#prerequisites}

- 一個可公開存取、透過 HTTPS 部署的 [Cap Standalone](https://capjs.js.org/guide/capd/index.html) 實例，因為瀏覽器登入頁面與 Logto 都需要存取它。

## 建立 site key {#create-a-site-key}

1. 開啟你的 Cap Standalone 實例的管理後台，並使用管理金鑰登入。
2. 建立新的 site key。如果你限制 CORS 來源，請加入 Logto 的端點網域，例如 `https://[tenant-id].logto.app`。
3. 複製 **Site key** 與 **Secret key**。Secret key 僅顯示一次，請妥善保存。

## 設定 Logto {#configure-logto}

在 **Console > Security > CAPTCHA**，選擇 **Cap** 並填寫以下資訊：

- **Cap endpoint**：你的 Cap Standalone 實例的基礎 URL，例如 `https://cap.example.com`
- **Site key**：上方複製的 site key
- **Secret key**：上方複製的 secret key

你也可以透過 Management API 使用 `PUT /api/captcha-provider` 來設定 Cap：

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
正式環境請務必使用 HTTPS 作為 Cap endpoint。瀏覽器會阻擋從 HTTPS 登入頁發出的混合 HTTP 請求，且 HTTP 會讓 secret key 明文傳輸。
:::

## 安全性說明 {#security-note}

Cap 的偵測挑戰會在瀏覽器中執行腳本以辨識機器人。啟用 Cap 時，Logto 內建登入頁會在 Content Security Policy 中允許 Cap 來源、blob workers、WebAssembly (`'wasm-unsafe-eval'`) 及動態 JavaScript 執行 (`'unsafe-eval'`)。

## Bring your UI {#bring-your-ui}

如果你使用 [Bring your UI](/customization/bring-your-ui/)，Logto 無法自動在你的自訂前端注入或執行 Cap。啟用 CAPTCHA 後，你的自訂 UI 必須自行載入 `@cap.js/widget`、渲染元件，並將解題後的權杖傳送給 使用體驗 (Experience) API。

在你的自訂 UI 載入 `@cap.js/widget`（或安裝並打包進你的前端建置流程）：

```html
<script src="https://cdn.jsdelivr.net/npm/@cap.js/widget" async></script>
```

:::note
若你從 CDN 載入 `@cap.js/widget` 而非自行打包，請將 CDN 來源（如 `https://cdn.jsdelivr.net`）加入 [自訂 CSP 來源](/customization/bring-your-ui/#configure-custom-csp-sources) 的 `scriptSrc` 與 `connectSrc`，以便元件腳本及其 WebAssembly 解題器能順利載入。
:::

新增 `<cap-widget>` 元素，指向你的 Cap Standalone endpoint 與 site key：

```html
<cap-widget data-cap-api-endpoint="https://cap.example.com/<siteKey>/"></cap-widget>
```

監聽 `solve` 事件（`event.detail.token`），將一次性權杖作為 `captchaToken` 傳送到 `PUT /api/experience`，並在使用後以 `widget.reset()` 重設元件：

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
      reject(new Error(event.detail?.message ?? 'Cap 驗證失敗'));
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
  // Cap 權杖僅能使用一次；消耗後請重設元件。
  widget.reset();
}
```

## 啟用 CAPTCHA {#enable-captcha}

完成 CAPTCHA 提供者設定後，請記得啟用 CAPTCHA 機器人防護。

前往 Security 頁面，找到 CAPTCHA 分頁，並開啟「Enable CAPTCHA」的切換按鈕。
