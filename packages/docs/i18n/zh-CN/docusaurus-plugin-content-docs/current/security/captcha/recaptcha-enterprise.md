---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise 是一项 Google 服务，通过使用先进的机器人检测技术来保护网站免受欺诈和滥用，同时不影响用户体验。本指南将引导你完成在 Logto 中设置 reCAPTCHA Enterprise 的过程。

## 前提条件 {#prerequisites}

- 一个 Google Cloud 项目

## 设置 reCAPTCHA 密钥 {#setup-a-recaptcha-key}

1. 前往 [Google Cloud Console 的 reCAPTCHA 页面](https://console.cloud.google.com/security/recaptcha)。
2. 点击“reCAPTCHA 密钥”旁边的 **Create key** 按钮。
3. 使用以下详细信息填写表单：
   - **Display name**：你想给密钥的任何名称
   - **Application type**：网站
   - **Domain list**：添加 Logto 的端点域名
4. 创建密钥后，你将被重定向到密钥详细信息页面，复制 **ID**。

## 设置 API 密钥 {#setup-an-api-key}

1. 前往 [Google Cloud Console 的凭据页面](https://console.cloud.google.com/apis/credentials)。
2. 点击 **Create credentials** 按钮并选择 **API key**。
3. 复制 API 密钥。
4. 可选地，你可以将 API 密钥限制为 **reCAPTCHA Enterprise API** 以提高安全性。
5. 如果你不理解“应用程序限制”是什么，请记得将其留为 **None**。

## 获取项目 ID {#get-project-id}

1. 从 [Google Cloud Console 的主页](https://console.cloud.google.com/welcome) 复制 **Project ID**。

## 启用 CAPTCHA {#enable-captcha}

在设置 CAPTCHA 提供商后，记得启用 CAPTCHA 机器人保护。

前往安全页面，找到 CAPTCHA 选项卡，并打开“Enable CAPTCHA”的切换按钮。
