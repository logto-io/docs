---
slug: /security/captcha/friendly-captcha
sidebar_label: Friendly Captcha
---

# Friendly Captcha

[Friendly Captcha](https://friendlycaptcha.com) v2 は、視覚的なパズルを使わずにプルーフ・オブ・ワークに基づいた、プライバシー重視かつ GDPR 準拠の CAPTCHA サービスです。このガイドでは、Friendly Captcha を Logto で設定する手順を説明します。

## 前提条件 {#prerequisites}

- Friendly Captcha アカウント

## sitekey と API キーの取得 {#get-the-sitekey-and-api-key}

1. [Friendly Captcha ダッシュボード](https://app.friendlycaptcha.com) にログインし、**Applications** に移動します。
2. **+ New Application** をクリックし、**v2** を選択します。
3. アプリケーションで許可するオリジンを制限する場合は、Logto エンドポイントドメイン（例： `https://[tenant-id].logto.app`）を追加します。
4. グローバルエンドポイント（`global.frcapi.com`）は有効のままにします。sitekey を [EU エンドポイント](https://developer.friendlycaptcha.com/docs/v2/guides/eu-endpoint)（`eu.frcapi.com`、Advanced および Enterprise プランで利用可能）に制限する場合のみ変更し、**Sitekey**（`FC` で始まる）をコピーします。
5. ダッシュボードの **API Keys** を開き、新しい **API key** を作成してコピーします。

## Logto の設定 {#configure-logto}

1. **Console > Security > CAPTCHA** に移動し、**Friendly Captcha** を選択して **Site key** と **API key** を入力します。**API endpoint** は **Global** のままにするか、sitekey を EU エンドポイントに制限している場合は **EU** を選択します。
2. または、Management API（`PUT /api/captcha-provider`）経由で設定できます。`apiEndpoint` はオプションで、`"global"`（デフォルト）または `"eu"` を指定できます：

```json
{
  "config": {
    "type": "FriendlyCaptcha",
    "siteKey": "<siteKey>",
    "secretKey": "<apiKey>",
    "apiEndpoint": "global"
  }
}
```

## Bring your UI の場合 {#bring-your-ui}

[Bring your UI](/customization/bring-your-ui/) を利用している場合、Logto はカスタムフロントエンドに Friendly Captcha を自動で挿入・実行できません。Logto Console で CAPTCHA を有効化した後、カスタム UI 側で `@friendlycaptcha/sdk` を読み込み、ウィジェットをマウントし、完了トークンを待って Experience API に送信する必要があります。

カスタム UI プロジェクトに Friendly Captcha v2 SDK をインストールします：

```bash
npm install @friendlycaptcha/sdk
```

ウィジェット用のコンテナを追加します：

```html
<div id="friendly-captcha-container"></div>
```

`FriendlyCaptchaSDK` でウィジェットをマウントし、`frc:widget.complete` で `event.detail.response` を取得し、その使い捨てトークンを `PUT /api/experience` の `captchaToken` として渡します。トークン使用後は `widget.reset()` でリセットし、再試行時に新しいトークンを取得できるようにします：

```js
import { FriendlyCaptchaSDK } from '@friendlycaptcha/sdk';

// SDK のインスタンス化
const sdk = new FriendlyCaptchaSDK();
const element = document.querySelector('#friendly-captcha-container');

const widget = sdk.createWidget({
  element,
  sitekey: '<siteKey>',
  // Logto で EU API endpoint を選択した場合は 'eu' に設定
  apiEndpoint: 'global',
});

const getCaptchaToken = () => {
  if (widget.getState() === 'completed') {
    return Promise.resolve(widget.getResponse());
  }

  return new Promise((resolve, reject) => {
    const cleanup = () => {
      widget.removeEventListener('frc:widget.complete', onComplete);
      widget.removeEventListener('frc:widget.error', onError);
    };

    const onComplete = (event) => {
      cleanup();
      resolve(event.detail.response);
    };

    const onError = (event) => {
      cleanup();
      reject(new Error(event.detail.error.detail || event.detail.error.code));
    };

    widget.addEventListener('frc:widget.complete', onComplete);
    widget.addEventListener('frc:widget.error', onError);

    if (['init', 'reset', 'unactivated'].includes(widget.getState())) {
      widget.start();
    }
  });
};

// インタラクション開始前に使い捨てトークンを取得
const captchaToken = await getCaptchaToken();

try {
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
} finally {
  // トークンは使い捨てなので、再試行時はウィジェットをリセットして新しいトークンを取得
  widget.reset();
}
```

## CAPTCHA の有効化 {#enable-captcha}

CAPTCHA プロバイダーの設定後、CAPTCHA ボット対策を有効化するのを忘れないでください。

Security ページの CAPTCHA タブに移動し、「Enable CAPTCHA」のトグルボタンをオンにします。
