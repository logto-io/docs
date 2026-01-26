---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise 是 Google 提供的一项服务，利用先进的机器人检测技术，在不影响用户体验的情况下保护网站免受欺诈和滥用。本指南将带你完成在 Logto 中设置 reCAPTCHA Enterprise 的流程。

## 前置条件 {#prerequisites}

- 一个 Google Cloud 项目

## 设置 reCAPTCHA 密钥 {#setup-a-recaptcha-key}

1. 前往 [Google Cloud 控制台的 reCAPTCHA 页面](https://console.cloud.google.com/security/recaptcha)。
2. 在“reCAPTCHA 密钥”旁边点击 **创建密钥** 按钮。
3. 按照以下信息填写表单：
   - **显示名称**：你想为密钥设置的任意名称
   - **应用类型**：网站
   - **域名列表**：添加 Logto 的端点域名
   - **验证类型**：选择 **基于分数（隐形）** 或 **复选框挑战**。这决定了 reCAPTCHA 向用户展示的方式。详见 [验证模式](#verification-mode)。
4. 创建密钥后，你会被重定向到密钥详情页，复制 **ID**。

## 设置 API 密钥 {#setup-an-api-key}

1. 前往 [Google Cloud 控制台的凭据页面](https://console.cloud.google.com/apis/credentials)。
2. 点击 **创建凭据** 按钮并选择 **API 密钥**。
3. 复制 API 密钥。
4. 可选：你可以将 API 密钥限制为 **reCAPTCHA Enterprise API**，以提高安全性。
5. 如果你不了解“应用限制”，请保持“应用限制”为 **无**。

## 获取项目 ID {#get-project-id}

1. 从 [Google Cloud 控制台主页](https://console.cloud.google.com/welcome) 复制 **项目 ID**。

## 验证模式 {#verification-mode}

reCAPTCHA Enterprise 支持两种验证模式：

- **隐形**：基于分数的验证，自动在后台运行，无需用户交互。这是默认模式。
- **复选框**：显示经典的“我不是机器人”复选框小部件，需要用户交互。

:::note
你在 Logto 中选择的验证模式必须与在 Google Cloud 控制台创建的密钥类型一致。如果你创建的是基于分数的密钥，请选择 **隐形**。如果你创建的是复选框挑战密钥，请选择 **复选框**。
:::

## 自定义域名 {#custom-domain}

默认情况下，Logto 从 `www.google.com` 加载 reCAPTCHA 脚本。但在某些地区，Google 的标准域名无法访问，你可以配置备用域名。

支持的域名：

- `www.google.com`（默认）
- `recaptcha.net`

要配置自定义域名，在 Logto 控制台设置 reCAPTCHA Enterprise 时，在 **域名** 字段中输入该域名。

## 启用 CAPTCHA {#enable-captcha}

在你设置好 CAPTCHA 提供方后，记得启用 CAPTCHA 机器人防护。

进入安全页面，找到 CAPTCHA 标签页，打开“启用 CAPTCHA”的开关按钮。
