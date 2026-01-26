---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# CAPTCHA 機器人保護

CAPTCHA 機器人保護透過驗證使用者是否為人類來保護你的使用者流程，顯著減少機器人攻擊。Logto 支援領先的提供者，如 Google reCAPTCHA Enterprise 和 Cloudflare Turnstile。

## 啟用 CAPTCHA 機器人保護 {#enabling-captcha-bot-protection}

按照以下步驟為你的使用者流程（登入、註冊和密碼恢復）啟用 CAPTCHA：

1. **前往設定**：進入 **Console > Security > Bot protection**。
2. **選擇提供者**：選擇你偏好的 CAPTCHA 提供者（例如 Google reCAPTCHA Enterprise 或 Cloudflare Turnstile）。
3. **配置**：按照頁面左側的指示配置選定的 CAPTCHA 提供者。
4. **儲存**：點擊 **Save and done** 以應用你的設定。
5. **（可選）啟用 CAPTCHA**：一旦配置了提供者，CAPTCHA 將自動在安全頁面上啟用。不過，你可以根據需要手動驗證或調整設定。

## 預覽 CAPTCHA 整合 {#previewing-captcha-integration}

你有兩個選擇來預覽和測試 CAPTCHA 整合：

1. **使用你的應用程式**：前往你的應用程式的登入、註冊或密碼恢復頁面，嘗試執行相應的使用者操作。
2. **示範應用程式**：前往 **Get started** 並使用提供的示範應用程式來測試 CAPTCHA 功能。

確保在任一選項中 CAPTCHA 挑戰如預期出現。

## 支援的提供者 {#supported-providers}

目前，我們支援：

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
