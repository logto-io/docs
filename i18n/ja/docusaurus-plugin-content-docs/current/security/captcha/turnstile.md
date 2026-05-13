---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile は、ウェブサイトをスパムや悪用から保護するための CAPTCHA サービスです。このガイドでは、Logto で Turnstile を設定する手順を説明します。

## 前提条件 {#prerequisites}

- Cloudflare アカウント

## 設定手順 {#setup}

1. [Cloudflare ダッシュボード](https://dash.cloudflare.com/login) にアクセスし、アカウントを選択します。
2. **Turnstile** > **Add widget** に移動します。
3. 次の詳細を入力します：
   - **Widget name**：ウィジェットに付けたい任意の名前
   - **Hostname**：Logto のエンドポイントドメイン（例: https://[tenant-id].logto.app）
   - **Widget Mode**：デフォルトのままにします

## サイトキーとシークレットキーの取得 {#get-the-site-key-and-secret-key}

1. 作成したウィジェットに移動し、**Manage widget** をクリックします。
2. 下までスクロールし、**Site key** と **Secret key** をコピーします。

## Bring your UI を利用する場合 {#bring-your-ui}

[Bring your UI](/customization/bring-your-ui/) を利用している場合、Logto はカスタムフロントエンドに自動で Turnstile を挿入・実行できません。Logto Console で CAPTCHA を有効にした後、カスタム UI で Turnstile スクリプトを読み込み、ウィジェットを表示し、返されたトークンを Experience API に送信する必要があります。

カスタム UI で Turnstile スクリプトを読み込みます：

```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```

ウィジェット用のコンテナを追加します：

```html
<div id="turnstile-container"></div>
```

インタラクションを開始する前に、サイトキーで Turnstile をレンダリングし、コールバックトークンを `PUT /api/experience` の `captchaToken` として渡します：

```js
const captchaToken = await new Promise((resolve, reject) => {
  window.turnstile.render('#turnstile-container', {
    sitekey: '<siteKey>',
    callback: resolve,
    'error-callback': reject,
    size: 'flexible',
  });
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

## CAPTCHA の有効化 {#enable-captcha}

CAPTCHA プロバイダーの設定が完了したら、CAPTCHA ボット対策を有効にすることを忘れないでください。

セキュリティページに移動し、CAPTCHA タブを見つけ、「Enable CAPTCHA」のトグルボタンをオンにします。
