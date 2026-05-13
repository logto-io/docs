---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise は、Google のサービスで、高度なボット検出を用いてウェブサイトを不正利用や悪用から保護しつつ、ユーザー体験を損なわないようにします。このガイドでは、Logto で reCAPTCHA Enterprise を設定する手順を説明します。

## 前提条件 {#prerequisites}

- Google Cloud プロジェクト

## reCAPTCHA キーのセットアップ {#setup-a-recaptcha-key}

1. [Google Cloud Console の reCAPTCHA ページ](https://console.cloud.google.com/security/recaptcha) にアクセスします。
2. 「reCAPTCHA keys」付近の **Create key** ボタンをクリックします。
3. 次の詳細を入力します：
   - **Display name**：任意のキー名
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

reCAPTCHA Enterprise は 2 つの検証モードをサポートしています：

- **Invisible**：ユーザー操作なしで自動的にバックグラウンドで実行されるスコアベースの検証です。これがデフォルトモードです。
- **Checkbox**：「私はロボットではありません」というクラシックなチェックボックスウィジェットが表示され、ユーザー操作が必要です。

:::note
Logto で選択する検証モードは、Google Cloud Console で作成したキータイプと一致している必要があります。スコアベースのキーを作成した場合は **Invisible** を選択してください。チェックボックスチャレンジキーを作成した場合は **Checkbox** を選択してください。
:::

## Bring your UI {#bring-your-ui}

[Bring your UI](/customization/bring-your-ui/) を利用している場合、Logto はカスタムフロントエンドに自動で reCAPTCHA を挿入・実行できません。Logto Console で CAPTCHA を有効化した後、カスタム UI 側で reCAPTCHA Enterprise スクリプトを読み込み、CAPTCHA トークンを取得し、それを Experience API へ送信する必要があります。

**Invisible** モードの場合、サイトキーを使ってスクリプトを読み込みます：

```html
<script src="https://www.google.com/recaptcha/enterprise.js?render=<siteKey>" async defer></script>
```

Logto でカスタムドメインを設定している場合は、`www.google.com` をそのドメイン（例：`recaptcha.net`）に置き換えてください。

インタラクション開始前に、固定アクション `interaction` で reCAPTCHA を実行し、返されたトークンを `PUT /api/experience` の `captchaToken` として渡します：

```js
const captchaToken = await grecaptcha.enterprise.execute('<siteKey>', {
  action: 'interaction',
});

await fetch('/api/experience', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    interactionEvent: 'SignIn',
    captchaToken,
  }),
});
```

**Checkbox** モードの場合は、`render=explicit` でスクリプトを読み込み、ページ内にウィジェットを表示し、コールバックトークンを `PUT /api/experience` の `captchaToken` として利用します。

## カスタムドメイン {#custom-domain}

デフォルトでは、Logto は `www.google.com` から reCAPTCHA スクリプトを読み込みます。ただし、一部の地域では Google の標準ドメインにアクセスできない場合があるため、代替ドメインを設定できます。

サポートされているドメイン：

- `www.google.com`（デフォルト）
- `recaptcha.net`

カスタムドメインを設定するには、Logto Console で reCAPTCHA Enterprise をセットアップする際に **Domain** フィールドにドメインを入力してください。

## CAPTCHA の有効化 {#enable-captcha}

CAPTCHA プロバイダーのセットアップ後、CAPTCHA ボット対策を有効化するのを忘れないでください。

セキュリティページに移動し、CAPTCHA タブを見つけて「Enable CAPTCHA」のトグルボタンをオンにします。
