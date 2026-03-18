---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# CAPTCHA 機器人防護

CAPTCHA 機器人防護能協助保護你的使用者流程，透過驗證使用者是否為真人，大幅減少機器人攻擊。Logto 支援主流供應商，例如 Google reCAPTCHA Enterprise 和 Cloudflare Turnstile。

:::note
CAPTCHA 適用於識別碼、密碼、驗證碼、註冊與密碼重設等操作。不適用於 [magic link](/end-user-flows/one-time-token) 或 [passkey 登入](/end-user-flows/sign-up-and-sign-in/passkey-sign-in)，因此使用 magic link 或 passkey 完成登入的使用者無需額外解答 CAPTCHA 驗證。
:::

## 啟用 CAPTCHA 機器人防護 {#enabling-captcha-bot-protection}

請依下列步驟為你的使用者流程（識別碼登入、密碼登入、註冊、密碼重設）啟用 CAPTCHA：

1. **前往設定**：進入 **Console > Security > Bot protection**。
2. **選擇供應商**：選擇你偏好的 CAPTCHA 供應商（如 Google reCAPTCHA Enterprise 或 Cloudflare Turnstile）。
3. **設定**：依照頁面左側指示設定所選的 CAPTCHA 供應商。
4. **儲存**：點擊 **Save and done** 以套用設定。
5. **（選用）啟用 CAPTCHA**：當供應商設定完成後，CAPTCHA 會自動於安全性頁面啟用。你也可以視需求手動確認或調整設定。

## 預覽 CAPTCHA 整合效果 {#previewing-captcha-integration}

你有兩種方式預覽並測試 CAPTCHA 整合效果：

1. **使用你的應用程式**：前往應用程式的登入、註冊或密碼重設頁面，嘗試相關使用者操作。
2. **Demo app**：進入 **Get started**，使用提供的 demo 應用程式測試 CAPTCHA 功能。

請確認在任一方式下，CAPTCHA 驗證如預期顯示。

## 支援的供應商 {#supported-providers}

目前支援：

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
