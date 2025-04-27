---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile 是一种 CAPTCHA 服务，帮助保护你的网站免受垃圾信息和滥用的侵害。本指南将引导你完成在 Logto 中设置 Turnstile 的过程。

## 前提条件 {#prerequisites}

- 一个 Cloudflare 账户

## 设置 {#setup}

1. 前往 [Cloudflare Dashboard](https://dash.cloudflare.com/login) 并选择你的账户。
2. 导航到 **Turnstile** > **Add widget**。
3. 使用以下详细信息填写表单：
   - **Widget name**：你想给小部件起的任何名称
   - **Hostname**：Logto 的端点域名，例如 https://[tenant-id].logto.app
   - **Widget Mode**：保持默认

## 获取站点密钥和密钥 {#get-the-site-key-and-secret-key}

1. 导航到你刚创建的小部件，并点击 **Manage widget**。
2. 向下滚动到底部并复制 **Site key** 和 **Secret key**。

## 启用 CAPTCHA {#enable-captcha}

在设置 CAPTCHA 提供商后，记得启用 CAPTCHA 机器人保护。

前往安全页面，找到 CAPTCHA 选项卡，并打开“Enable CAPTCHA”的切换按钮。
