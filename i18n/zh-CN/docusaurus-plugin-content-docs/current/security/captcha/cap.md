---
slug: /security/captcha/cap
sidebar_label: Cap
---

# Cap

[Cap](https://capjs.js.org) 是一个开源、自托管的 CAPTCHA 替代方案，基于工作量证明，无需视觉谜题或依赖第三方服务，非常适合无法访问外部 CAPTCHA 服务的地区。本文将指导你如何将 Cap 与 Logto 集成。

## 前置条件 {#prerequisites}

- 一个可公开访问的 [Cap Standalone](https://capjs.js.org/guide/capd/index.html) 实例，并通过 HTTPS 提供服务，因为浏览器登录页面和 Logto 都需要访问它。

## 创建站点密钥 {#create-a-site-key}

1. 打开你的 Cap Standalone 实例的管理面板，并使用管理员密钥登录。
2. 创建一个新的站点密钥。如果你限制了 CORS 来源，请添加 Logto 的端点域名，例如 `https://[tenant-id].logto.app`。
3. 复制 **Site key** 和 **Secret key**。Secret key 只会显示一次。

## 配置 Logto {#configure-logto}

在 **控制台 > 安全 > CAPTCHA** 中，选择 **Cap** 并填写以下信息：

- **Cap endpoint**：你的 Cap Standalone 实例的基础 URL，例如 `https://cap.example.com`
- **Site key**：你上面复制的 site key
- **Secret key**：你上面复制的 secret key

或者，你也可以通过 Management API 使用 `PUT /api/captcha-provider` 配置 Cap：

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
生产环境下请为你的 Cap endpoint 使用 HTTPS。浏览器会阻止来自 HTTPS 登录页面的混合 HTTP 请求，并且 HTTP 会明文传输 secret key。
:::

## 安全提示 {#security-note}

Cap 的检测挑战会在浏览器中执行脚本以检测机器人。当 Cap 启用时，Logto 内置的登录页面会在其内容安全策略 (Content Security Policy) 中允许 Cap 源、blob workers、WebAssembly (`'wasm-unsafe-eval'`) 以及动态 JavaScript 执行 (`'unsafe-eval'`)。

## 自定义你的 UI {#bring-your-ui}

如果你使用 [自定义你的 UI](/customization/bring-your-ui/)，Logto 无法自动在你的自定义前端注入或运行 Cap。启用 Logto 控制台中的 CAPTCHA 后，你的自定义 UI 需要加载 `@cap.js/widget`，渲染小部件，并将已解决的 token 发送给 Experience API。

在你的自定义 UI 中加载 `@cap.js/widget`（或在前端构建中安装并打包它）：

```html
<script src="https://cdn.jsdelivr.net/npm/@cap.js/widget" async></script>
```

:::note
如果你通过 CDN 加载 `@cap.js/widget` 而不是打包它，请将 CDN 源（如 `https://cdn.jsdelivr.net`）添加到 [自定义 CSP 源](/customization/bring-your-ui/#configure-custom-csp-sources) 的 `scriptSrc` 和 `connectSrc`，以便小部件脚本及其 WebAssembly 求解器能够加载。
:::

添加 `<cap-widget>` 元素，指向你的 Cap Standalone endpoint 和 site key：

```html
<cap-widget data-cap-api-endpoint="https://cap.example.com/<siteKey>/"></cap-widget>
```

监听 `solve` 事件（`event.detail.token`），将一次性 token 作为 `captchaToken` 发送到 `PUT /api/experience`，并在使用后通过 `widget.reset()` 重置小部件：

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
      reject(new Error(event.detail?.message ?? 'Cap 验证失败'));
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
  // Cap token 只能使用一次；使用后请重置小部件。
  widget.reset();
}
```

## 启用 CAPTCHA {#enable-captcha}

在你设置好 CAPTCHA 提供方后，记得启用 CAPTCHA 机器人防护。

进入安全页面，找到 CAPTCHA 标签页，打开“启用 CAPTCHA”开关按钮。
