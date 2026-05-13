---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise 是 Google 提供的一项服务，利用先进的机器人检测技术，在不影响用户体验的情况下保护网站免受欺诈和滥用。本指南将带你完成在 Logto 中设置 reCAPTCHA Enterprise 的流程。

## 前置条件 {#prerequisites}

- 一个 Google Cloud 项目

## 设置 reCAPTCHA 密钥 {#setup-a-recaptcha-key}

1. 前往 [Google Cloud Console 的 reCAPTCHA 页面](https://console.cloud.google.com/security/recaptcha)。
2. 在“reCAPTCHA keys”附近点击 **Create key** 按钮。
3. 按照以下信息填写表单：
   - **Display name**：你想为密钥设置的任意名称
   - **Application type**：Website
   - **Domain list**：添加 Logto 的端点域名
   - **Verification type**：选择 **Score-based (invisible)** 或 **Checkbox challenge**。这决定了 reCAPTCHA 向用户展示的方式。详见 [验证模式](#verification-mode)。
4. 创建密钥后，你会被重定向到密钥详情页，复制 **ID**。

## 设置 API 密钥 {#setup-an-api-key}

1. 前往 [Google Cloud Console 的 Credentials 页面](https://console.cloud.google.com/apis/credentials)。
2. 点击 **Create credentials** 按钮并选择 **API key**。
3. 复制 API 密钥。
4. 可选：你可以将 API 密钥限制为 **reCAPTCHA Enterprise API**，以提高安全性。
5. 如果你不了解“Application restrictions”，请保持为 **None**。

## 获取项目 ID {#get-project-id}

1. 在 [Google Cloud Console 首页](https://console.cloud.google.com/welcome) 复制 **Project ID**。

## 验证模式 {#verification-mode}

reCAPTCHA Enterprise 支持两种验证模式：

- **Invisible**：基于分数的验证，自动在后台运行，无需用户交互。这是默认模式。
- **Checkbox**：显示经典的“我不是机器人”复选框小部件，需要用户交互。

:::note
你在 Logto 中选择的验证模式必须与在 Google Cloud Console 创建的密钥类型一致。如果你创建的是基于分数的密钥，请选择 **Invisible**。如果你创建的是复选框挑战密钥，请选择 **Checkbox**。
:::

## 自定义界面接入 {#bring-your-ui}

如果你使用 [自定义界面 (Bring your UI)](/customization/bring-your-ui/)，Logto 无法自动在你的自定义前端注入或运行 reCAPTCHA。启用 Logto Console 的 CAPTCHA 后，你的自定义界面需要加载 reCAPTCHA Enterprise 脚本，获取 CAPTCHA token，并将其发送到 Experience API。

对于 **Invisible** 模式，使用你的网站密钥加载脚本：

```html
<script src="https://www.google.com/recaptcha/enterprise.js?render=<siteKey>" async defer></script>
```

如果你在 Logto 中配置了自定义域名，请将 `www.google.com` 替换为该域名，例如 `recaptcha.net`。

在开始交互前，使用固定 action `interaction` 执行 reCAPTCHA，并将返回的 token 作为 `captchaToken` 传递给 `PUT /api/experience`：

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

对于 **Checkbox** 模式，使用 `render=explicit` 加载脚本，在页面中渲染小部件，并在调用 `PUT /api/experience` 时将回调 token 作为 `captchaToken` 使用。

## 自定义域名 {#custom-domain}

默认情况下，Logto 从 `www.google.com` 加载 reCAPTCHA 脚本。但在某些无法访问 Google 标准域名的地区，你可以配置备用域名。

支持的域名：

- `www.google.com`（默认）
- `recaptcha.net`

要配置自定义域名，在 Logto Console 设置 reCAPTCHA Enterprise 时，在 **Domain** 字段中输入该域名。

## 启用 CAPTCHA {#enable-captcha}

在你设置好 CAPTCHA 提供商后，记得启用 CAPTCHA 机器人防护。

前往安全页面，找到 CAPTCHA 标签页，打开“Enable CAPTCHA”开关按钮。
