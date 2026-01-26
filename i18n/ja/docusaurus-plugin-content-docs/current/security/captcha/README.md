---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# CAPTCHA ボット保護

CAPTCHA ボット保護は、ユーザーフローを保護し、ユーザーが人間であることを確認することで、ボット攻撃を大幅に減少させます。Logto は、Google reCAPTCHA Enterprise や Cloudflare Turnstile などの主要なプロバイダーをサポートしています。

## CAPTCHA ボット保護の有効化 {#enabling-captcha-bot-protection}

ユーザーフロー（サインイン、登録、パスワード回復）に CAPTCHA を有効化する手順は以下の通りです：

1. **設定に移動**: **Console > Security > Bot protection** に移動します。
2. **プロバイダーを選択**: お好みの CAPTCHA プロバイダー（例：Google reCAPTCHA Enterprise または Cloudflare Turnstile）を選択します。
3. **設定**: ページの左側の指示に従って、選択した CAPTCHA プロバイダーを設定します。
4. **保存**: **Save and done** をクリックして設定を適用します。
5. **(オプション) CAPTCHA の有効化**: プロバイダーが設定されると、CAPTCHA はセキュリティページで自動的に有効になります。ただし、必要に応じて手動で設定を確認または調整できます。

## CAPTCHA 統合のプレビュー {#previewing-captcha-integration}

CAPTCHA 統合をプレビューおよびテストするには、次の 2 つのオプションがあります：

1. **アプリケーションを使用**: アプリケーションのサインイン、登録、またはパスワード回復ページに移動し、該当するユーザーアクションを試みます。
2. **デモアプリ**: **Get started** に移動し、提供されたデモアプリケーションを使用して CAPTCHA 機能をテストします。

どちらのオプションでも、CAPTCHA チャレンジが期待通りに表示されることを確認してください。

## サポートされているプロバイダー {#supported-providers}

現在、以下をサポートしています：

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
