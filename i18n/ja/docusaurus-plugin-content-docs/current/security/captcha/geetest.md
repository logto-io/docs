---
slug: /security/captcha/geetest
sidebar_label: GeeTest
---

# GeeTest

[GeeTest](https://www.geetest.com) CAPTCHA v4 は、ローカライズされたチャレンジを提供するアダプティブ CAPTCHA サービスであり、Google reCAPTCHA などのグローバルプロバイダーへのアクセスが難しい中国本土で広く利用されています。このガイドでは、Logto で GeeTest CAPTCHA v4 を設定する手順を説明します。

## 前提条件 {#prerequisites}

- CAPTCHA v4 が有効になっている GeeTest アカウント

## CAPTCHA ID とキーの取得 {#get-the-captcha-id-and-key}

1. [GeeTest ダッシュボード](https://auth.geetest.com/login) にログインします。
2. アプリケーションを作成し、**CAPTCHA v4** イベントを作成します。
3. ダッシュボードから **CAPTCHA ID** と **CAPTCHA key** をコピーします。

## Logto の設定 {#configure-logto}

1. **Console > Security > CAPTCHA** に移動します。
2. CAPTCHA プロバイダーとして **GeeTest** を選択します。
3. GeeTest ダッシュボードからコピーした **CAPTCHA ID** と **CAPTCHA key** を入力し、変更を保存します。

または、Management API（`PUT /api/captcha-provider`）を使って GeeTest を設定することもできます。`type` を `"Geetest"`、`siteKey` を CAPTCHA ID、`secretKey` を CAPTCHA key に設定します：

```json
{
  "config": {
    "type": "Geetest",
    "siteKey": "<captchaId>",
    "secretKey": "<captchaKey>"
  }
}
```

:::note
Logto の組み込みサインイン体験は GeeTest v4 を `bind` モードで初期化し、UI 言語を自動でマッピングし、GeeTest が有効な間は GeeTest SDK・API・静的オリジンを許可するよう Content Security Policy ヘッダーを更新します。
:::

## 独自 UI の利用 {#bring-your-ui}

[Bring your UI](/customization/bring-your-ui/) を利用している場合、Logto は GeeTest をカスタムフロントエンドに自動で挿入・実行できません。Logto Console で CAPTCHA を有効化した後、カスタム UI 側で GeeTest v4 スクリプトを読み込み、チャレンジを実行し、シリアライズした検証結果を `captchaToken` として Experience API に送信する必要があります。

カスタム UI で GeeTest v4 スクリプトを読み込みます：

```html
<script src="https://static.geetest.com/v4/gt4.js" async defer></script>
```

インタラクション開始前に、`window.initGeetest4` で GeeTest v4 を `bind` モードで初期化し、`captcha.showCaptcha()` を呼び出し、`onSuccess` 内で `captcha.getValidate()` から検証結果を取得します。`captcha.getValidate()` は 4 つのフィールド（`lot_number`、`captcha_output`、`pass_token`、`gen_time`）を返すため、オブジェクトを `JSON.stringify(validate)` でシリアライズし、`PUT /api/experience` の `captchaToken` として渡します：

```js
const captchaToken = await new Promise((resolve, reject) => {
  window.initGeetest4(
    {
      captchaId: '<captchaId>',
      product: 'bind',
      onError: reject,
    },
    (captcha) => {
      captcha
        .onReady(() => {
          captcha.showCaptcha();
        })
        .onSuccess(() => {
          const validate = captcha.getValidate();

          if (!validate) {
            reject(new Error('Missing GeeTest validation result'));
            return;
          }

          // `validate` には lot_number, captcha_output, pass_token, gen_time が含まれます
          resolve(JSON.stringify(validate));
        })
        .onError(reject)
        .onClose(() => {
          reject(new Error('GeeTest CAPTCHA was closed'));
        });
    }
  );
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

CAPTCHA プロバイダーの設定後、CAPTCHA ボット対策を有効にするのを忘れないでください。

Security ページで CAPTCHA タブを開き、「Enable CAPTCHA」のトグルボタンをオンにします。
