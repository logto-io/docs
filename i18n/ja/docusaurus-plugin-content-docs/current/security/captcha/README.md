---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# CAPTCHA ボット保護

CAPTCHA ボット保護は、ユーザーフローにおいてユーザーが人間であることを確認し、ボットによる攻撃を大幅に減少させることでセキュリティを強化します。Logto は Google reCAPTCHA Enterprise や Cloudflare Turnstile などの主要プロバイダーに対応しています。

:::note
CAPTCHA は、識別子、パスワード、認証コード、登録、パスワードリカバリーの各アクションに適用されます。[マジックリンク](/end-user-flows/one-time-token) や [パスキーサインイン](/end-user-flows/sign-up-and-sign-in/passkey-sign-in) には適用されません。そのため、マジックリンクやパスキーでサインインを完了したユーザーは追加の CAPTCHA チャレンジを解く必要はありません。
:::

:::note
[Bring your UI](/customization/bring-your-ui/) を利用している場合、組み込みの CAPTCHA 連携はカスタムフロントエンドでは動作しません。カスタム UI で CAPTCHA プロバイダーのスクリプトを読み込み、チャレンジを実行し、`captchaToken` として `PUT /api/experience` にトークンを送信する必要があります。
:::

## CAPTCHA ボット保護の有効化 {#enabling-captcha-bot-protection}

ユーザーフロー（識別子サインイン、パスワードサインイン、登録、パスワードリカバリー）で CAPTCHA を有効化するには、以下の手順に従ってください：

1. **設定画面へ移動**：**Console > Security > Bot protection** にアクセスします。
2. **プロバイダーを選択**：希望する CAPTCHA プロバイダー（例：Google reCAPTCHA Enterprise または Cloudflare Turnstile）を選択します。
3. **設定**：ページ左側の手順に従って選択した CAPTCHA プロバイダーを設定します。
4. **保存**：**Save and done** をクリックして設定を適用します。
5. **（オプション）CAPTCHA の有効化**：プロバイダーが設定されると、セキュリティページで CAPTCHA が自動的に有効になります。必要に応じて手動で設定を確認または調整できます。

## CAPTCHA 連携のプレビュー {#previewing-captcha-integration}

CAPTCHA 連携をプレビュー・テストする方法は 2 つあります：

1. **アプリケーションを利用**：アプリケーションのサインイン、登録、またはパスワードリカバリーページにアクセスし、該当するユーザーアクションを試します。
2. **デモアプリ**：**Get started** に進み、提供されているデモアプリケーションで CAPTCHA の動作をテストします。

どちらの方法でも、CAPTCHA チャレンジが期待通りに表示されることを確認してください。

## 対応プロバイダー {#supported-providers}

現在、対応しているプロバイダーは以下の通りです：

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
