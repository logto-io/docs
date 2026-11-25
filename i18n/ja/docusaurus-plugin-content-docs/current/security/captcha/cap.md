---
slug: /security/captcha/cap
sidebar_label: Cap
---

# Cap

[Cap](https://capjs.js.org) は、オープンソースかつセルフホスト型の CAPTCHA 代替ソリューションで、プルーフ・オブ・ワークに基づき、視覚的なパズルやサードパーティサービスへの依存がありません。そのため、外部 CAPTCHA サービスにアクセスできない地域でも適しています。このガイドでは、Logto で Cap をセットアップする手順を説明します。

## 前提条件 {#prerequisites}

- ブラウザのサインインページと Logto の両方がアクセスできる、HTTPS 経由で公開されている [Cap Standalone](https://capjs.js.org/guide/capd/index.html) インスタンス。

## サイトキーの作成 {#create-a-site-key}

1. Cap Standalone インスタンスのダッシュボードを開き、管理者キーでログインします。
2. 新しいサイトキーを作成します。CORS オリジンを制限する場合は、Logto のエンドポイントドメイン（例：`https://[tenant-id].logto.app`）を追加してください。
3. **Site key** と **Secret key** をコピーします。Secret key は一度しか表示されません。

## Logto の設定 {#configure-logto}

**Console > Security > CAPTCHA** で **Cap** を選択し、以下の情報を入力します：

- **Cap endpoint**：Cap Standalone インスタンスのベース URL（例：`https://cap.example.com`）
- **Site key**：上記でコピーしたサイトキー
- **Secret key**：上記でコピーしたシークレットキー

または、Management API の `PUT /api/captcha-provider` を使って Cap を設定することもできます：

```json
{
  "config": {
    "type": "Cap",
    "endpoint": "https://cap.example.com",
    "siteKey": "<siteKey>",
    "secretKey": "<secretKey>"
  }
}
```

:::note
本番環境では Cap エンドポイントに HTTPS を使用してください。ブラウザは HTTPS サインインページからの混在 HTTP リクエストをブロックし、HTTP ではシークレットキーが暗号化されずに送信されます。
:::

## セキュリティに関する注意 {#security-note}

Cap のインストゥルメンテーションチャレンジは、ブラウザ内でスクリプトを評価してボットを検出します。Cap が有効な間、Logto の組み込みサインインページは、Cap オリジン、blob ワーカー、WebAssembly（`'wasm-unsafe-eval'`）、および動的 JavaScript 評価（`'unsafe-eval'`）を Content Security Policy で許可します。

## 独自 UI の利用 {#bring-your-ui}

[Bring your UI](/customization/bring-your-ui/) を利用している場合、Logto は Cap をカスタムフロントエンドに自動で挿入・実行できません。Logto Console で CAPTCHA を有効にした後、カスタム UI で `@cap.js/widget` を読み込み、ウィジェットをレンダリングし、解決済みトークンを Experience API に送信する必要があります。

カスタム UI で `@cap.js/widget` を読み込む（またはフロントエンドビルドにインストール・バンドルする）：

```html
<script src="https://cdn.jsdelivr.net/npm/@cap.js/widget" async></script>
```

:::note
`@cap.js/widget` を CDN から読み込む場合は、ウィジェットスクリプトとその WebAssembly ソルバーが読み込めるよう、CDN オリジン（例：`https://cdn.jsdelivr.net`）を [カスタム CSP ソース](/customization/bring-your-ui/#configure-custom-csp-sources) の `scriptSrc` および `connectSrc` に追加してください。
:::

Cap Standalone エンドポイントとサイトキーを指定して `<cap-widget>` 要素を追加します：

```html
<cap-widget data-cap-api-endpoint="https://cap.example.com/<siteKey>/"></cap-widget>
```

`solve` イベント（`event.detail.token`）をリッスンし、使い捨てトークンを `PUT /api/experience` の `captchaToken` として送信し、消費後に `widget.reset()` でウィジェットをリセットします：

```js
await customElements.whenDefined('cap-widget');
const widget = document.querySelector('cap-widget');

const captchaToken =
  widget.token ??
  (await new Promise((resolve, reject) => {
    const cleanup = () => {
      widget.removeEventListener('solve', onSolve);
      widget.removeEventListener('error', onError);
    };

    const onSolve = (event) => {
      cleanup();
      resolve(event.detail.token);
    };

    const onError = (event) => {
      cleanup();
      reject(new Error(event.detail?.message ?? 'Cap verification failed'));
    };

    widget.addEventListener('solve', onSolve);
    widget.addEventListener('error', onError);
    widget.solve().catch((error) => {
      cleanup();
      reject(error);
    });
  }));

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
  // Cap トークンは使い捨てです。トークン消費後はウィジェットをリセットしてください。
  widget.reset();
}
```

## CAPTCHA の有効化 {#enable-captcha}

CAPTCHA プロバイダーのセットアップ後、CAPTCHA ボット対策を有効にするのを忘れないでください。

セキュリティページで CAPTCHA タブを開き、「Enable CAPTCHA」のトグルボタンをオンにします。
