---
slug: /security/blocklist
sidebar_label: Blocklist
sidebar_position: 3
---

# 封鎖清單 (Blocklist)

## 電子郵件封鎖清單 {#email-blocklist}

電子郵件封鎖清單政策允許自訂電子郵件封鎖清單設定，以防止帳戶註冊濫用。它會監控用於註冊和帳戶設定的電子郵件地址。如果使用者嘗試註冊或連結違反任何封鎖清單規則的電子郵件地址，系統將拒絕該請求，從而有助於減少垃圾帳戶並增強整體帳戶安全性。

訪問 <CloudLink to="/security/blocklist"> Console > Security > Blocklist</CloudLink> 以配置電子郵件封鎖清單設定。

### 封鎖電子郵件子地址 {#block-email-subaddressing}

電子郵件子地址允許使用者透過在電子郵件地址中添加加號（+）和其他字元來創建變體（例如，user+tag@example.com）。惡意使用者可能會利用此功能來繞過封鎖清單限制。啟用封鎖電子郵件子地址功能後，系統將拒絕任何使用子地址電子郵件格式的註冊或帳戶連結嘗試。

### 自訂電子郵件封鎖清單 {#custom-email-blocklist}

你可以透過指定要封鎖的電子郵件地址或網域列表來創建自訂電子郵件封鎖清單。系統將拒絕任何與這些條目匹配的註冊或帳戶連結嘗試。封鎖清單支援完整的電子郵件地址和網域匹配。

例如，將 `@example.com` 添加到封鎖清單中將封鎖所有使用該網域的電子郵件地址。同樣，添加 `foo@example.com` 將專門封鎖該電子郵件地址。

### 封鎖一次性電子郵件地址 {#block-disposable-email-addresses}

這是一個 **僅限雲端** 的功能。啟用後，系統將自動驗證提供的電子郵件地址的網域是否在已知的一次性電子郵件網域列表中。如果該網域在列表中，請求將被拒絕。一次性電子郵件網域列表會定期更新以確保其有效性。
