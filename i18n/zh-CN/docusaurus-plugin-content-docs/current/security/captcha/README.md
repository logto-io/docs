---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# CAPTCHA 机器人防护

CAPTCHA 机器人防护通过验证用户是否为真人，帮助保护你的用户流程，大幅减少机器人攻击。Logto 支持主流提供商，如 Google reCAPTCHA Enterprise 和 Cloudflare Turnstile。

:::note
CAPTCHA 适用于标识符、密码、验证码、注册和密码找回操作。不适用于 [魔法链接](/end-user-flows/one-time-token) 或 [密钥登录](/end-user-flows/sign-up-and-sign-in/passkey-sign-in)，因此使用魔法链接或密钥完成登录的用户无需额外解决 CAPTCHA 挑战。
:::

## 启用 CAPTCHA 机器人防护 {#enabling-captcha-bot-protection}

按照以下步骤为你的用户流程（标识符登录、密码登录、注册和密码找回）启用 CAPTCHA：

1. **进入设置**：前往 **控制台 > 安全 > 机器人防护**。
2. **选择提供商**：选择你偏好的 CAPTCHA 提供商（如 Google reCAPTCHA Enterprise 或 Cloudflare Turnstile）。
3. **配置**：按照页面左侧的说明配置所选的 CAPTCHA 提供商。
4. **保存**：点击 **保存并完成** 以应用你的设置。
5. **（可选）启用 CAPTCHA**：一旦配置了提供商，CAPTCHA 会自动在安全页面启用。不过，你也可以根据需要手动检查或调整设置。

## 预览 CAPTCHA 集成效果 {#previewing-captcha-integration}

你有两种方式预览和测试 CAPTCHA 集成效果：

1. **使用你的应用程序**：前往你的应用的登录、注册或密码找回页面，尝试相应的用户操作。
2. **演示应用**：进入 **快速开始**，使用提供的演示应用测试 CAPTCHA 功能。

请确保在任一方式下，CAPTCHA 挑战如预期显示。

## 支持的提供商 {#supported-providers}

目前，我们支持：

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
