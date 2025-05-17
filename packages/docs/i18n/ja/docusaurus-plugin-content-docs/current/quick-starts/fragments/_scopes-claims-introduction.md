デフォルトでは、限られたクレーム (Claims) が返されます。より多くの情報が必要な場合は、追加のスコープ (Scopes) をリクエストして、より多くのクレーム (Claims) にアクセスできます。

:::info
「クレーム (Claim)」はサブジェクトについての主張であり、「スコープ (Scope)」はクレーム (Claims) のグループです。現在のケースでは、クレーム (Claim) はユーザーに関する情報の一部です。
:::

スコープ (Scope) とクレーム (Claim) の関係の非規範的な例を示します：

```mermaid
classDiagram
  class openid {
    +sub
  }

  class profile {
    +name
    +username
    +picture
    +...
  }

  class email {
    +email
    +email_verified
  }

  class phone {
    +phone_number
    +phone_number_verified
  }
```

:::tip
「sub」クレーム (Claim) は「サブジェクト (Subject)」を意味し、ユーザーの一意の識別子（つまり、ユーザー ID）です。
:::

Logto SDK は常に 3 つのスコープ (Scopes) をリクエストします：`openid`、`profile`、および `offline_access`。
