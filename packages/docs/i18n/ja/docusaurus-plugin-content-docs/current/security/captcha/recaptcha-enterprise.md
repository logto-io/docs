---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise は、ユーザー体験を妨げることなく、高度なボット検出を使用してウェブサイトを不正行為や悪用から保護する Google のサービスです。このガイドでは、Logto で reCAPTCHA Enterprise を設定する手順を説明します。

## 前提条件 {#prerequisites}

- Google Cloud プロジェクト

## reCAPTCHA キーの設定 {#setup-a-recaptcha-key}

1. [Google Cloud Console の reCAPTCHA ページ](https://console.cloud.google.com/security/recaptcha)にアクセスします。
2. 「reCAPTCHA キー」の近くにある **Create key** ボタンをクリックします。
3. 次の詳細を入力してフォームを記入します：
   - **表示名**: キーに付けたい任意の名前
   - **アプリケーションタイプ**: ウェブサイト
   - **ドメインリスト**: Logto のエンドポイントドメインを追加
4. キーを作成した後、キーの詳細ページにリダイレクトされますので、**ID** をコピーします。

## API キーの設定 {#setup-an-api-key}

1. [Google Cloud Console の認証情報ページ](https://console.cloud.google.com/apis/credentials)にアクセスします。
2. **Create credentials** ボタンをクリックし、**API key** を選択します。
3. API キーをコピーします。
4. オプションとして、API キーを **reCAPTCHA Enterprise API** に制限して、より安全にすることができます。
5. 「アプリケーション制限」を理解していない場合は、**None** にしておくことを忘れないでください。

## プロジェクト ID の取得 {#get-project-id}

1. [Google Cloud Console のホームページ](https://console.cloud.google.com/welcome)から **Project ID** をコピーします。

## CAPTCHA の有効化 {#enable-captcha}

CAPTCHA プロバイダーを設定した後、CAPTCHA ボット保護を有効にすることを忘れないでください。

セキュリティページに移動し、CAPTCHA タブを見つけ、「CAPTCHA を有効にする」のトグルボタンをオンにします。
