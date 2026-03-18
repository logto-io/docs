---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# CAPTCHA ボット保護

CAPTCHA ボット保護は、ユーザーフローにおいてユーザーが人間であることを確認し、ボットによる攻撃を大幅に減少させることでセキュリティを強化します。Logto は Google reCAPTCHA Enterprise や Cloudflare Turnstile などの主要プロバイダーをサポートしています。

:::note
CAPTCHA は、識別子、パスワード、認証コード、登録、パスワードリカバリーの各アクションに適用されます。[マジックリンク](/end-user-flows/one-time-token) や [パスキーサインイン](/end-user-flows/sign-up-and-sign-in/passkey-sign-in) には適用されないため、マジックリンクやパスキーでサインインを完了したユーザーは追加の CAPTCHA チャレンジを解く必要はありません。
:::

## CAPTCHA ボット保護の有効化 {#enabling-captcha-bot-protection}

ユーザーフロー（識別子サインイン、パスワードサインイン、登録、パスワードリカバリー）で CAPTCHA を有効化するには、以下の手順に従ってください：

1. **設定画面へ移動**：**Console > Security > Bot protection** に移動します。
2. **プロバイダーを選択**：希望する CAPTCHA プロバイダー（例：Google reCAPTCHA Enterprise または Cloudflare Turnstile）を選択します。
3. **設定**：ページ左側の指示に従って選択した CAPTCHA プロバイダーを設定します。
4. **保存**：**Save and done** をクリックして設定を適用します。
5. **（オプション）CAPTCHA の有効化**：プロバイダーが設定されると、セキュリティページで CAPTCHA が自動的に有効化されます。ただし、必要に応じて手動で設定を確認または調整できます。

## CAPTCHA 統合のプレビュー {#previewing-captcha-integration}

CAPTCHA 統合をプレビューおよびテストするには、次の 2 つの方法があります：

1. **アプリケーションを使用**：アプリケーションのサインイン、登録、またはパスワードリカバリーページに移動し、該当するユーザーアクションを試します。
2. **デモアプリ**：**Get started** に進み、提供されているデモアプリケーションで CAPTCHA 機能をテストします。

どちらの方法でも、CAPTCHA チャレンジが期待通りに表示されることを確認してください。

## サポートされているプロバイダー {#supported-providers}

現在サポートしているプロバイダーは以下の通りです：

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
