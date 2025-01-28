---
description: Management API を利用して Logto のバックエンドサービスにアクセスし、ユーザー管理、アカウント設定、アイデンティティ検証、マルチテナントアーキテクチャで CIAM システムを拡張します。
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

## Logto Management API とは？ {#what-is-logto-management-api}

Logto Management API は、開発者が製品のニーズや技術スタックに合わせて実装を完全にコントロールできる包括的な API セットです。これは事前に構築されており、<CloudLink to="/api-resources">Console > API リソース > Logto Management API</CloudLink> にリストされており、削除や変更はできません。

その識別子は `https://[tenant-id].logto.app/api` のパターンです。

<img alt="Logto Management API Resource" src={logtoManagementApiResourceSrc} />

<img alt="Logto Management API Details" src={logtoManagementApiDetailsSrc} />

Logto Management API を使用すると、Logto の強力なバックエンドサービスにアクセスできます。これらは非常にスケーラブルで、多くのシナリオで利用可能です。これは、Admin Console のローコード機能で可能なことを超えています。

以下は、よく使用される API の一部です：

- [User](https://openapi.logto.io/operation/operation-getuser)
- [Application](https://openapi.logto.io/operation/operation-listapplications)
- [Audit logs](https://openapi.logto.io/operation/operation-listlogs)
- [Roles](https://openapi.logto.io/operation/operation-listroles)
- [Resources](https://openapi.logto.io/operation/operation-listresources)
- [Connectors](https://openapi.logto.io/operation/operation-listconnectors)
- [Organizations](https://openapi.logto.io/operation/operation-listorganizations)

利用可能な API について詳しく知るには、https://openapi.logto.io/ を訪問してください。

## Logto Management API へのアクセス方法 {#how-to-access-logto-management-api}

### M2M アプリを作成する {#create-an-m2m-app}

:::note
M2M (Machine-to-Machine) 認証 (Authentication) フローに慣れていない場合は、基本的な概念を理解するために [認証 (Authentication) フローの理解](/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow) を最初に読むことをお勧めします。
:::

<CloudLink to="/applications">Console > Applications</CloudLink> に移動し、「Machine-to-machine」アプリケーションタイプを選択して作成プロセスを開始します。

<M2mRoleAssignment />

ロール割り当てモジュールでは、すべての M2M ロールが含まれていることがわかります。Logto アイコンで示されているロールは、Logto Management API 権限を含むことを意味します。

今、M2M アプリに Logto Management API 権限を含む M2M ロールを割り当てます。

### アクセス トークンを取得する {#fetch-an-access-token}

#### アクセス トークンリクエストの基本 {#basics-about-access-token-request}

<BasicsAboutAccessTokenRequest />

#### Logto Management API のアクセス トークンを取得する {#fetch-access-token-for-logto-management-api}

<FetchAccessTokenForLogtoManagementApi />

#### アクセス トークンレスポンス {#access-token-response}

成功したアクセスレスポンスボディは次のようになります：

```json
{
  "access_token": "eyJhbG...2g", // Logto Management API にアクセスするためにこのトークンを使用します
  "expires_in": 3600, // トークンの有効期限（秒）
  "token_type": "Bearer", // アクセス トークンを使用する際のリクエストの認証タイプ
  "scope": "all" // Logto Management API のスコープ `all`
}
```

<M2mAccessTokenNote />

### アクセス トークンを使用して Logto Management API にアクセスする {#access-logto-management-api-using-access-token}

<AccessTokenUsage />

<AccessLogtoManagementApiUsingAccessToken />

## Logto Management API を使用する典型的なシナリオ {#typical-scenarios-for-using-logto-management-api}

私たちの開発者は、Logto Management API を使用して多くの追加機能を実装しています。私たちは、API が非常にスケーラブルであり、さまざまなニーズをサポートできると信じています。ここでは、Logto Admin Console では不可能なシナリオのいくつかを紹介しますが、Logto Management API を通じて実現できます。

### 独自のユーザープロファイルを実装する {#implement-user-profile-on-your-own}

Logto は現在、ユーザープロファイルのための事前構築された UI ソリューションを提供していません。ユーザープロファイルはビジネスや製品属性に密接に関連していることを認識しています。最適なアプローチを決定するために作業を進めている間、API を使用して独自のソリューションを作成することをお勧めします。たとえば、インタラクション API、プロファイル API、検証コード API を利用して、ニーズに合ったカスタムソリューションを開発できます。

### 高度なユーザー検索 {#advanced-user-search}

Logto Admin Console は基本的な検索およびフィルタリング機能をサポートしています。ファジー検索、完全一致、大文字小文字の区別などの高度な検索オプションについては、[高度なユーザー検索](/user-management/advanced-user-search) のチュートリアルとガイドを確認してください。

### 独自の組織管理を実装する {#implement-organization-management-on-your-own}

マルチテナントアプリを構築するために [組織 (Organizations)](/organizations) 機能を使用している場合、組織の招待やメンバー管理などのタスクに Logto Management API が必要になることがあります。テナントに管理者とメンバーの両方がいる SaaS 製品の場合、Logto Management API はビジネスニーズに合わせたカスタム管理ポータルを作成するのに役立ちます。詳細については [こちら](/end-user-flows/organization-experience/) を確認してください。

## Logto Management API を使用するためのヒント {#tips-for-using-logto-management-api}

### ページネーションされた API レスポンスの管理 {#managing-paginated-api-responses}

一部の API レスポンスには多くの結果が含まれる場合があり、結果はページネーションされます。Logto は 2 種類のページネーション情報を提供します。

#### リンクヘッダーを使用する {#using-link-headers}

ページネーションされたレスポンスヘッダーは次のようになります：

```
Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"
```

リンクヘッダーは、結果の前のページ、次のページ、最初のページ、最後のページの URL を提供します：

- 前のページの URL は rel="prev" に続きます。
- 次のページの URL は rel="next" に続きます。
- 最後のページの URL は rel="last" に続きます。
- 最初のページの URL は rel="first" に続きます。

#### トータルナンバーヘッダーを使用する {#using-total-number-header}

標準のリンクヘッダーに加えて、Logto は `Total-Number` ヘッダーも追加します：

```
Total-Number: 216
```

これはページ番号を表示するのに非常に便利で役立ちます。

#### ページ番号とページサイズの変更 {#changing-page-number-and-page-size}

2 つのオプションのクエリパラメータがあります：

- `page`: ページ番号を示し、1 から始まります。デフォルト値は 1 です。
- `page_size`: ページごとのアイテム数を示し、デフォルト値は 20 です。

### レート制限 {#rate-limit}

:::note
これは Logto Cloud のみです。
:::

すべてのユーザーに対するサービスの信頼性とセキュリティを確保するために、ウェブサイトへのトラフィックを監視および管理する一般的なファイアウォールを使用しています。厳密なレート制限は設けていませんが、保護措置を発動しないように、ユーザーが約 10 秒ごとに 200 リクエストに活動を制限することをお勧めします。

## 関連リソース {#related-resources}

<Url href="https://blog.logto.io/management-api">
  Logto Management API を使用する：ステップバイステップガイド
</Url>

<Url href="https://blog.logto.io/use-postman-to-obtain-m2m-access-token">Postman を使用して数分で M2M アクセス トークンを取得する</Url>
