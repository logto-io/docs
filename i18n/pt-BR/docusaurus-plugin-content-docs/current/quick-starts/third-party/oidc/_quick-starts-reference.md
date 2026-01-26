Por trás dos bastidores, um aplicativo de terceiros é um cliente padrão OAuth 2.0 / OIDC. Isso significa que você (ou o desenvolvedor de terceiros) pode usar qualquer biblioteca ou framework OAuth 2.0 / OIDC para integrar com o Logto.

Algumas coisas para ter em mente:

1. Ao criar um aplicativo de terceiros, selecione o tipo de aplicativo apropriado com base na arquitetura do app:
   - **Web tradicional**: Usa segredo do cliente para autenticação.
   - **Aplicativo de página única / Nativo**: Usa PKCE para autorização segura sem um segredo do cliente.
2. A maioria dos nossos guias de início rápido são escritos para aplicativos de primeira parte, mas você ainda pode usá-los como referência para integração de aplicativos de terceiros.
3. A principal diferença é que aplicativos de terceiros exibirão uma tela de consentimento (Consent screen), solicitando permissão explícita dos usuários para acessar seus dados.

Veja [Aplicativos de terceiros](/integrate-logto/third-party-applications) para o guia completo de integração.
