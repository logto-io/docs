---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise 是 Google 提供的服務，利用先進的機器人偵測技術，在不影響使用者體驗的情況下，保護網站免於詐騙與濫用。本指南將帶你完成在 Logto 中設定 reCAPTCHA Enterprise 的流程。

## 先決條件 {#prerequisites}

- 一個 Google Cloud 專案

## 建立 reCAPTCHA 金鑰 {#setup-a-recaptcha-key}

1. 前往 [Google Cloud Console 的 reCAPTCHA 頁面](https://console.cloud.google.com/security/recaptcha)。
2. 在「reCAPTCHA keys」附近點擊 **Create key** 按鈕。
3. 填寫下列資訊：
   - **Display name**：你想給這個金鑰的任何名稱
   - **Application type**：Website
   - **Domain list**：新增 Logto 的端點網域
   - **Verification type**：選擇 **Score-based (invisible)** 或 **Checkbox challenge**。這會決定 reCAPTCHA 呈現給使用者的方式。詳情請參閱 [驗證模式 (Verification mode)](#verification-mode)。
4. 建立金鑰後，系統會導向金鑰詳細頁面，請複製 **ID**。

## 建立 API 金鑰 {#setup-an-api-key}

1. 前往 [Google Cloud Console 的 Credentials 頁面](https://console.cloud.google.com/apis/credentials)。
2. 點擊 **Create credentials** 按鈕並選擇 **API key**。
3. 複製 API 金鑰。
4. （選用）你可以將 API 金鑰限制於 **reCAPTCHA Enterprise API**，以提升安全性。
5. 若不清楚「Application restrictions」的用途，請保持為 **None**。

## 取得專案 ID {#get-project-id}

1. 從 [Google Cloud Console 首頁](https://console.cloud.google.com/welcome) 複製 **Project ID**。

## 驗證模式 (Verification mode) {#verification-mode}

reCAPTCHA Enterprise 支援兩種驗證模式：

- **Invisible**：分數型驗證，會在背景自動執行，無需使用者互動。這是預設模式。
- **Checkbox**：顯示經典的「我不是機器人」勾選框小工具，需要使用者互動。

:::note
你在 Logto 選擇的驗證模式必須與你在 Google Cloud Console 建立的金鑰類型一致。如果你建立的是分數型金鑰，請選擇 **Invisible**。如果建立的是勾選挑戰金鑰，請選擇 **Checkbox**。
:::

## 自訂網域 (Custom domain) {#custom-domain}

預設情況下，Logto 會從 `www.google.com` 載入 reCAPTCHA 腳本。但在某些地區，Google 標準網域可能無法存取，你可以設定替代網域。

支援的網域：

- `www.google.com`（預設）
- `recaptcha.net`

若要設定自訂網域，請在 Logto Console 設定 reCAPTCHA Enterprise 時，於 **Domain** 欄位輸入網域。

## 啟用 CAPTCHA {#enable-captcha}

在你完成 CAPTCHA 服務供應商設定後，請記得啟用 CAPTCHA 機器人防護。

前往安全性頁面，找到 CAPTCHA 分頁，並開啟「啟用 CAPTCHA」的切換按鈕。
