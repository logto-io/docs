---
sidebar_position: 4
---

import logtoManagementApiResourceSrc from './assets/logto-management-api-resource.webp';
import logtoManagementApiDetailsSrc from './assets/logto-management-api-details.webp';

import BasicsAboutAccessTokenRequest from '../../quick-starts/generic/machine-to-machine/fragments/\_basics-about-access-token-request.mdx';
import FetchAccessTokenForLogtoManagementApi from '../../quick-starts/generic/machine-to-machine/fragments/\_fetch-access-token-for-logto-management-api.mdx';
import AccessTokenUsage from '../../quick-starts/generic/machine-to-machine/fragments/\_access-token-usage.mdx';
import AccessLogtoManagementApiUsingAccessToken from '../../quick-starts/generic/machine-to-machine/fragments/\_access-logto-management-api-using-access-token.mdx';
import M2mAccessTokenNote from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-access-token-sub-note.mdx';
import M2mRoleAssignment from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-role-assignment.mdx';

# Management API と対話する

## Logto Management API とは？

Logto Management API は、開発者が製品のニーズや技術スタックに合わせて実装を完全にコントロールできる包括的な API セットです。これは事前に構築され、<CloudLink to="/api-resources">コンソール > API リソース > Logto Management API</CloudLink> にリストされており、削除や変更はできません。

その識別子は `https://[tenant-id].logto.app/api` のパターンです。

<img alt="Logto Management API リソース" src={logtoManagementApiResourceSrc} />

<img alt="Logto Management API 詳細" src={logtoManagementApiDetailsSrc} />

Logto Management API を使用すると、Logto の強力なバックエンドサービスにアクセスできます。これらは非常にスケーラブルで、多くのシナリオで利用可能です。これは、Admin Console のローコード機能で可能なことを超えています。

以下は、よく使用される API の一部です：

- [ユーザー](https://openapi.logto.io/operation/operation-getuser)
- [アプリケーション](https://openapi.logto.io/operation/operation-listapplications)
- [監査ログ](https://openapi.logto.io/operation/operation-listlogs)
- [ロール](https://openapi.logto.io/operation/operation-listroles)
- [リソース](https://openapi.logto.io/operation/operation-listresources)
- [コネクター](https://openapi.logto.io/operation/operation-listconnectors)
- [組織](https://openapi.logto.io/operation/operation-listorganizations)

利用可能な API について詳しく知るには、https://openapi.logto.io/ を訪問してください。

## Logto Management API へのアクセス方法

### M2M アプリを作成する

:::note
M2M (マシン間通信) 認証 (Authentication) フローに慣れていない場合は、基本的な概念を理解するために [認証 (Authentication) フローを理解する](/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow) を最初に読むことをお勧めします。
:::

<CloudLink to="/applications">コンソール > アプリケーション</CloudLink> に移動し、「マシン間通信」アプリケーションタイプを選択して作成プロセスを開始します。

<M2mRoleAssignment />

ロール割り当てモジュールでは、すべての M2M ロールが含まれており、Logto アイコンで示されているロールは Logto Management API 権限を含むことを示しています。

今、あなたの M2M アプリに Logto Management API 権限を含む M2M ロールを割り当てます。

### アクセス トークンを取得する

#### アクセス トークンリクエストの基本

<BasicsAboutAccessTokenRequest />

#### Logto Management API のアクセス トークンを取得する

<FetchAccessTokenForLogtoManagementApi />

#### アクセス トークンレスポンス

成功したアクセスレスポンスボディは次のようになります：

```json
{
  "access_token": "eyJhbG...2g", // Logto Management API にアクセスするためにこのトークンを使用します
  "expires_in": 3600, // トークンの有効期限（秒単位）
  "token_type": "Bearer", // アクセス トークンを使用する際のリクエストの認証タイプ
  "scope": "all" // Logto Management API のスコープ `all`
}
```

<M2mAccessTokenNote />

### アクセス トークンを使用して Logto Management API にアクセスする

<AccessTokenUsage />

<AccessLogtoManagementApiUsingAccessToken />

## Logto Management API を使用する典型的なシナリオ

私たちの開発者は、Logto Management API を使用して多くの追加機能を実装しました。私たちは、API が非常にスケーラブルで、さまざまなニーズをサポートできると信じています。ここでは、Logto Admin Console では不可能ですが、Logto Management API を通じて実現できるシナリオの例をいくつか紹介します。

### 独自のユーザープロフィールを実装する

Logto は現在、ユーザープロフィールのための事前構築された UI ソリューションを提供していません。ユーザープロフィールはビジネスや製品の属性と密接に関連していることを認識しています。最適なアプローチを決定するために作業を進めている間、API を使用して独自のソリューションを作成することをお勧めします。たとえば、インタラクション API、プロフィール API、検証コード API を利用して、ニーズに合ったカスタムソリューションを開発できます。

### 高度なユーザー検索

Logto Admin Console は基本的な検索とフィルタリング機能をサポートしています。あいまい検索、完全一致、ケースセンシティブなどの高度な検索オプションについては、[高度なユーザー検索](/user-management/advanced-user-search) のチュートリアルとガイドを確認してください。

### 独自の組織管理を実装する

マルチテナントアプリを構築するために [組織](/organizations) 機能を使用している場合、組織の招待やメンバー管理などのタスクに Logto Management API が必要になることがあります。テナントに管理者とメンバーの両方がいる SaaS 製品の場合、Logto Management API を使用してビジネスニーズに合わせたカスタム管理ポータルを作成できます。詳細については [こちら](/end-user-flows/organization-experience/) を確認してください。

## Logto Management API を使用するためのヒント

### ページネーションされた API レスポンスの管理

一部の API レスポンスには多くの結果が含まれる場合があり、結果はページネーションされます。Logto は 2 種類のページネーション情報を提供します。

#### リンクヘッダーを使用する

ページネーションされたレスポンスヘッダーは次のようになります：

```
Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"
```

リンクヘッダーは、結果の前のページ、次のページ、最初のページ、最後のページの URL を提供します：

- 前のページの URL は rel="prev" に続きます。
- 次のページの URL は rel="next" に続きます。
- 最後のページの URL は rel="last" に続きます。
- 最初のページの URL は rel="first" に続きます。

#### トータルナンバーヘッダーを使用する

標準のリンクヘッダーに加えて、Logto は `Total-Number` ヘッダーも追加します：

```
Total-Number: 216
```

これはページ番号を表示するのに非常に便利で役立ちます。

#### ページ番号とページサイズの変更

2 つのオプションのクエリパラメーターがあります：

- `page`: ページ番号を示し、1 から始まります。デフォルト値は 1 です。
- `page_size`: 1 ページあたりのアイテム数を示し、デフォルト値は 20 です。

### レート制限

:::note
これは Logto Cloud のみです。
:::

すべてのユーザーに対するサービスの信頼性とセキュリティを確保するために、私たちはウェブサイトへのトラフィックを監視および管理する一般的なファイアウォールを採用しています。厳格なレート制限は設けていませんが、保護措置を発動しないように、ユーザーが 10 秒ごとに約 200 リクエストに活動を制限することをお勧めします。

## 関連リソース

<Url href="https://blog.logto.io/management-api">
  Logto Management API を使用する：ステップバイステップガイド
</Url>

<Url href="https://blog.logto.io/use-postman-to-obtain-m2m-access-token">Postman を使用して数分で M2M アクセス トークンを取得する</Url>
