---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# CAPTCHA 机器人防护

CAPTCHA 机器人防护通过验证用户是否为人类，有效提升你的用户流程安全性，大幅减少机器人攻击。Logto 支持主流提供商，如 Google reCAPTCHA Enterprise 和 Cloudflare Turnstile。

:::note
CAPTCHA 适用于标识符、密码、验证码、注册和找回密码等操作。不适用于 [magic link](/end-user-flows/one-time-token) 或 [passkey 登录](/end-user-flows/sign-up-and-sign-in/passkey-sign-in)，因此使用 magic link 或 passkey 完成登录的用户无需额外解决 CAPTCHA 挑战。
:::

:::note
如果你使用 [Bring your UI](/customization/bring-your-ui/)，内置的 CAPTCHA 集成不会在你的自定义前端运行。你的自定义 UI 需要加载 CAPTCHA 提供商脚本，执行挑战，并在 `PUT /api/experience` 请求中以 `captchaToken` 发送令牌。
:::

## 启用 CAPTCHA 机器人防护 {#enabling-captcha-bot-protection}

按照以下步骤为你的用户流程（标识符登录、密码登录、注册和找回密码）激活 CAPTCHA：

1. **进入设置**：前往 **控制台 > 安全 > 机器人防护**。
2. **选择提供商**：选择你偏好的 CAPTCHA 提供商（如 Google reCAPTCHA Enterprise 或 Cloudflare Turnstile）。
3. **配置**：按照页面左侧的指引配置所选的 CAPTCHA 提供商。
4. **保存**：点击 **保存并完成** 应用你的设置。
5. **（可选）启用 CAPTCHA**：配置好提供商后，CAPTCHA 会自动在安全页面启用。不过，你也可以根据需要手动核查或调整设置。

## 预览 CAPTCHA 集成效果 {#previewing-captcha-integration}

你有两种方式预览和测试 CAPTCHA 集成效果：

1. **使用你的应用程序**：进入你的应用的登录、注册或找回密码页面，尝试相关用户操作。
2. **演示应用**：前往 **快速开始**，使用提供的演示应用测试 CAPTCHA 功能。

请确保在任一方式下，CAPTCHA 挑战如预期显示。

## 支持的提供商 {#supported-providers}

目前支持：

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
- **[极验 GeeTest](/security/captcha/geetest)**
- **[Friendly Captcha](/security/captcha/friendly-captcha)**
- **[Cap](/security/captcha/cap)**
