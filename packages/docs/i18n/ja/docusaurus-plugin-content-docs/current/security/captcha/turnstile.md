---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile は、ウェブサイトをスパムや悪用から保護するための CAPTCHA サービスです。このガイドでは、Logto で Turnstile を設定する手順を説明します。

## 前提条件 {#prerequisites}

- Cloudflare アカウント

## 設定 {#setup}

1. [Cloudflare ダッシュボード](https://dash.cloudflare.com/login) にアクセスし、アカウントを選択します。
2. **Turnstile** > **ウィジェットを追加** に移動します。
3. 次の詳細を入力してフォームを記入します：
   - **ウィジェット名**：ウィジェットに付けたい任意の名前
   - **ホスト名**：Logto のエンドポイントドメイン、例： https://[tenant-id].logto.app
   - **ウィジェットモード**：デフォルトのままにします

## サイトキーとシークレットキーを取得する {#get-the-site-key-and-secret-key}

1. 作成したウィジェットに移動し、**ウィジェットを管理** をクリックします。
2. 下までスクロールして、**サイトキー** と **シークレットキー** をコピーします。

## CAPTCHA を有効にする {#enable-captcha}

CAPTCHA プロバイダーを設定した後、CAPTCHA ボット保護を有効にすることを忘れないでください。

セキュリティページに移動し、CAPTCHA タブを見つけ、「CAPTCHA を有効にする」のトグルボタンをオンにします。
