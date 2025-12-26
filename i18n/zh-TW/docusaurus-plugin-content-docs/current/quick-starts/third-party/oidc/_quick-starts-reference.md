在底層，第三方應用程式是一個標準的 OAuth 2.0 / OIDC 用戶端。這表示你（或第三方開發者）可以使用任何 OAuth 2.0 / OIDC 函式庫或框架來整合 Logto。

幾點注意事項：

1. 建立第三方應用程式時，請根據應用架構選擇合適的應用程式類型：
   - **傳統網頁 (Traditional web)**：使用 client secret 進行驗證。
   - **單頁應用程式 / 原生應用程式 (Single page app / Native)**：使用 PKCE 進行安全授權，無需 client secret。
2. 我們的大多數快速入門指南是針對第一方應用程式撰寫，但你仍可將其作為第三方應用程式整合的參考。
3. 主要差異在於第三方應用程式會顯示使用者授權頁面 (Consent screen)，請求使用者明確授權存取其資料。

完整整合指南請參閱 [第三方應用程式 (Third-party applications)](/integrate-logto/third-party-applications)。
