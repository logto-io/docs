---
slug: /security/blocklist
sidebar_label: 封鎖清單 (Blocklist)
sidebar_position: 3
---

# 封鎖清單 (Blocklist)

## 電子郵件封鎖清單 (Email blocklist) {#email-blocklist}

電子郵件封鎖清單政策允許你自訂電子郵件封鎖規則，以防止帳號註冊濫用。系統會監控用於註冊與帳號設定的電子郵件地址。若使用者嘗試註冊或連結違反任何封鎖規則的電子郵件地址，系統將拒絕該請求，有助於減少垃圾帳號並提升整體帳號安全性。

請前往 <CloudLink to="/security/blocklist">主控台 > 安全性 > 封鎖清單 (Blocklist)</CloudLink> 設定電子郵件封鎖規則。

### 封鎖一次性電子郵件地址 (Block disposable email addresses) {#block-disposable-email-addresses}

這是 **僅限雲端 (cloud-only)** 的功能。啟用後，系統會自動將所提供電子郵件地址的網域與已知一次性電子郵件網域清單比對。若該網域在清單中，請求將被拒絕。一次性電子郵件網域清單會定期更新，以確保其有效性。

### 封鎖電子郵件子地址 (Block email subaddressing) {#block-email-subaddressing}

電子郵件子地址 (subaddressing) 允許使用者在電子郵件地址中加入加號（+）及額外字元（例如 user+tag@example.com）來產生變化。惡意使用者可能利用此功能繞過封鎖規則。啟用封鎖電子郵件子地址功能後，系統將拒絕所有使用子地址格式進行註冊或帳號連結的請求。

### 自訂電子郵件封鎖清單 (Custom email blocklist) {#custom-email-blocklist}

你可以自訂電子郵件封鎖清單，指定要封鎖的電子郵件地址或網域。系統會拒絕所有符合這些條件的註冊或帳號連結請求。封鎖清單同時支援完整電子郵件地址與網域比對。

例如，將 `@example.com` 加入封鎖清單，將封鎖所有該網域的電子郵件地址。若加入 `foo@example.com`，則僅封鎖該特定電子郵件地址。

:::note

一次性電子郵件、子地址與自訂電子郵件封鎖規則，會在[新使用者註冊](/end-user-flows/sign-up-and-sign-in/sign-up)、[社交登入時收集註冊識別資訊](/end-user-flows/sign-up-and-sign-in/social-sign-in#collect-sign-up-identifiers)、以及透過 [Account API](/end-user-flows/account-settings/by-account-api#update-or-link-new-email) 更新電子郵件時生效。已存在的使用者若已綁定這些電子郵件地址，仍可登入。

- 管理員可於 <CloudLink to="/users">主控台 > 使用者管理</CloudLink> 或透過 [Management API](https://openapi.logto.io/operation/operation-createuser)「繞過限制」手動新增使用者。例如：在封鎖子地址時，仍可建立使用子地址的帳號。
- 若要封鎖現有帳號，請於 <CloudLink to="/users">主控台 > 使用者管理</CloudLink> 刪除或停用該帳號。

:::

## 相關資源 (Related resources) {#related-resources}

<Url href="https://blog.logto.io/disposable-email">什麼是一次性電子郵件？如何在你的應用程式中處理？</Url>
