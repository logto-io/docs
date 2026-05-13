---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile 是一项 CAPTCHA 服务，可帮助保护你的网站免受垃圾信息和滥用。本指南将带你完成将 Turnstile 与 Logto 集成的过程。

## 前置条件 {#prerequisites}

- 一个 Cloudflare 账户

## 设置步骤 {#setup}

1. 前往 [Cloudflare 控制台](https://dash.cloudflare.com/login) 并选择你的账户。
2. 导航到 **Turnstile** > **Add widget**。
3. 按照以下信息填写表单：
   - **Widget name**：你希望为该 widget 命名的任意名称
   - **Hostname**：Logto 的端点域名，例如 https://[tenant-id].logto.app
   - **Widget Mode**：保持默认即可

## 获取 site key 和 secret key {#get-the-site-key-and-secret-key}

1. 找到你刚刚创建的 widget，并点击 **Manage widget**。
2. 向下滚动到底部，复制 **Site key** 和 **Secret key**。

## Bring your UI {#bring-your-ui}

如果你使用 [Bring your UI](/customization/bring-your-ui/)，Logto 无法自动在你的自定义前端注入或运行 Turnstile。在 Logto 控制台启用 CAPTCHA 后，你的自定义 UI 必须加载 Turnstile 脚本，渲染 widget，并将返回的 token 发送给体验 (Experience) API。

在你的自定义 UI 中加载 Turnstile 脚本：

```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```

为 widget 添加一个容器：

```html
<div id="turnstile-container"></div>
```

在开始交互前，使用你的 site key 渲染 Turnstile，并将回调 token 作为 `captchaToken` 传递到 `PUT /api/experience`：

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

## 启用 CAPTCHA {#enable-captcha}

在你设置好 CAPTCHA 提供商后，记得启用 CAPTCHA 机器人防护。

前往安全 (Security) 页面，找到 CAPTCHA 标签页，打开“启用 CAPTCHA”的开关按钮。
