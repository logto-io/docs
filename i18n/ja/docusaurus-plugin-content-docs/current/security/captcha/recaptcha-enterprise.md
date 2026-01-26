---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise は、Google のサービスであり、高度なボット検出を用いてユーザー体験を損なうことなくウェブサイトを不正や悪用から保護します。このガイドでは、Logto で reCAPTCHA Enterprise を設定する手順を説明します。

## 前提条件 {#prerequisites}

- Google Cloud プロジェクト

## reCAPTCHA キーのセットアップ {#setup-a-recaptcha-key}

1. [Google Cloud Console の reCAPTCHA ページ](https://console.cloud.google.com/security/recaptcha) にアクセスします。
2. 「reCAPTCHA keys」付近の **Create key** ボタンをクリックします。
3. 次の詳細でフォームに入力します：
   - **Display name**：キーに付けたい任意の名前
   - **Application type**：Website
   - **Domain list**：Logto のエンドポイントドメインを追加
   - **Verification type**：**Score-based (invisible)** または **Checkbox challenge** から選択します。これにより、reCAPTCHA がユーザーにどのように表示されるかが決まります。詳細は [Verification mode](#verification-mode) を参照してください。
4. キー作成後、キー詳細ページにリダイレクトされるので、**ID** をコピーします。

## API キーのセットアップ {#setup-an-api-key}

1. [Google Cloud Console の Credentials ページ](https://console.cloud.google.com/apis/credentials) にアクセスします。
2. **Create credentials** ボタンをクリックし、**API key** を選択します。
3. API キーをコピーします。
4. 必要に応じて、API キーを **reCAPTCHA Enterprise API** のみに制限してセキュリティを高めることができます。
5. 「Application restrictions」について理解していない場合は、**None** のままにしてください。

## プロジェクト ID の取得 {#get-project-id}

1. [Google Cloud Console のホームページ](https://console.cloud.google.com/welcome) から **Project ID** をコピーします。

## 検証モード {#verification-mode}

reCAPTCHA Enterprise では、2 つの検証モードがサポートされています：

- **Invisible**：ユーザーの操作なしにバックグラウンドで自動的に実行されるスコアベースの検証です。これがデフォルトモードです。
- **Checkbox**：ユーザーの操作が必要な「私はロボットではありません」チェックボックスウィジェットを表示します。

:::note
Logto で選択する検証モードは、Google Cloud Console で作成したキーの種類と一致している必要があります。スコアベースのキーを作成した場合は **Invisible** を、チェックボックスチャレンジキーを作成した場合は **Checkbox** を選択してください。
:::

## カスタムドメイン {#custom-domain}

デフォルトでは、Logto は `www.google.com` から reCAPTCHA スクリプトを読み込みます。ただし、一部の地域では Google の標準ドメインにアクセスできない場合があるため、代替ドメインを設定できます。

サポートされているドメイン：

- `www.google.com`（デフォルト）
- `recaptcha.net`

カスタムドメインを設定するには、Logto コンソールで reCAPTCHA Enterprise をセットアップする際に **Domain** フィールドにドメインを入力してください。

## CAPTCHA の有効化 {#enable-captcha}

CAPTCHA プロバイダーのセットアップ後、CAPTCHA ボット保護を有効にすることを忘れないでください。

セキュリティページに移動し、CAPTCHA タブを見つけ、「Enable CAPTCHA」のトグルボタンをオンにしてください。
