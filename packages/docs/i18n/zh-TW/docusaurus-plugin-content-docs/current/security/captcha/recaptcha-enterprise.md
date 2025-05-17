---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise 是一項 Google 服務，透過先進的機器人檢測技術保護網站免受詐騙和濫用，同時不影響使用者體驗。本指南將引導你完成在 Logto 中設定 reCAPTCHA Enterprise 的過程。

## 先決條件 {#prerequisites}

- 一個 Google Cloud 專案

## 設定 reCAPTCHA 金鑰 {#setup-a-recaptcha-key}

1. 前往 [Google Cloud Console 的 reCAPTCHA 頁面](https://console.cloud.google.com/security/recaptcha)。
2. 點擊「reCAPTCHA keys」旁的 **Create key** 按鈕。
3. 填寫表單，包含以下詳細資訊：
   - **Display name**：為金鑰設定的任何名稱
   - **Application type**：Website
   - **Domain list**：新增 Logto 的端點網域
4. 創建金鑰後，你將被重定向至金鑰詳細資訊頁面，複製 **ID**。

## 設定 API 金鑰 {#setup-an-api-key}

1. 前往 [Google Cloud Console 的 Credentials 頁面](https://console.cloud.google.com/apis/credentials)。
2. 點擊 **Create credentials** 按鈕並選擇 **API key**。
3. 複製 API 金鑰。
4. 可選擇性地，你可以將 API 金鑰限制為 **reCAPTCHA Enterprise API** 以提高安全性。
5. 如果你不瞭解「Application restrictions」是什麼，請記得將其設為 **None**。

## 獲取專案 ID {#get-project-id}

1. 從 [Google Cloud Console 的首頁](https://console.cloud.google.com/welcome) 複製 **Project ID**。

## 啟用 CAPTCHA {#enable-captcha}

在設定 CAPTCHA 提供者後，記得啟用 CAPTCHA 機器人保護。

前往安全性頁面，找到 CAPTCHA 標籤，並開啟「Enable CAPTCHA」的切換按鈕。
