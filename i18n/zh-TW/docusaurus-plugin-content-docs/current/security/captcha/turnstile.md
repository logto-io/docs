---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile 是一項 CAPTCHA 服務，幫助保護你的網站免受垃圾訊息和濫用攻擊。本指南將引導你完成在 Logto 中設定 Turnstile 的過程。

## 先決條件 {#prerequisites}

- 一個 Cloudflare 帳戶

## 設定 {#setup}

1. 前往 [Cloudflare Dashboard](https://dash.cloudflare.com/login) 並選擇你的帳戶。
2. 導航至 **Turnstile** > **Add widget**。
3. 填寫表單，包含以下詳細資訊：
   - **Widget name**：你想給小工具的任何名稱
   - **Hostname**：Logto 的端點域名，例如 https://[tenant-id].logto.app
   - **Widget Mode**：保持預設

## 獲取 site key 和 secret key {#get-the-site-key-and-secret-key}

1. 導航至你剛創建的小工具，點擊 **Manage widget**。
2. 滾動到頁面底部，複製 **Site key** 和 **Secret key**。

## 啟用 CAPTCHA {#enable-captcha}

在設置 CAPTCHA 提供者後，記得啟用 CAPTCHA 機器人保護。

前往安全性頁面，找到 CAPTCHA 標籤，並開啟「Enable CAPTCHA」的切換按鈕。
