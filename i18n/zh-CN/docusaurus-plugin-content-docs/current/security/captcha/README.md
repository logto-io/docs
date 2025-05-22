---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# CAPTCHA 机器人保护

CAPTCHA 机器人保护通过验证用户是否为人类来帮助保护你的用户流程，从而显著减少机器人攻击。Logto 支持领先的提供商，如 Google reCAPTCHA Enterprise 和 Cloudflare Turnstile。

## 启用 CAPTCHA 机器人保护 {#enabling-captcha-bot-protection}

按照以下步骤为你的用户流程（登录、注册和密码恢复）激活 CAPTCHA：

1. **导航到设置**：前往 **Console > Security > Bot protection**。
2. **选择提供商**：选择你偏好的 CAPTCHA 提供商（例如，Google reCAPTCHA Enterprise 或 Cloudflare Turnstile）。
3. **配置**：按照页面左侧的说明配置所选的 CAPTCHA 提供商。
4. **保存**：点击 **Save and done** 以应用你的设置。
5. **（可选）启用 CAPTCHA**：一旦配置了提供商，CAPTCHA 将自动在安全页面上启用。不过，你可以根据需要手动验证或调整设置。

## 预览 CAPTCHA 集成 {#previewing-captcha-integration}

你有两种选择来预览和测试 CAPTCHA 集成：

1. **使用你的应用程序**：导航到你的应用程序的登录、注册或密码恢复页面，并尝试相应的用户操作。
2. **演示应用**：前往 **Get started** 并使用提供的演示应用程序测试 CAPTCHA 功能。

确保在任一选项中 CAPTCHA 挑战如预期出现。

## 支持的提供商 {#supported-providers}

目前，我们支持：

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
