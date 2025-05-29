Por baixo dos panos, um aplicativo de terceiros é apenas um cliente padrão OAuth 2.0 / OIDC. Isso significa que você (ou o desenvolvedor de terceiros) pode usar qualquer biblioteca ou framework OAuth 2.0 / OIDC para integrar com o Logto.

Se você não está familiarizado com OAuth 2.0 ou OIDC, pode começar seguindo um dos nossos guias rápidos de “Web tradicional”.

Alguns pontos para ter em mente:

1. O Logto atualmente exige que aplicativos de terceiros sejam aplicativos “Web tradicional”. Em outras palavras, o aplicativo precisa de um servidor backend (ou backend-for-frontend) para armazenar o client secret com segurança.
2. A maioria dos nossos guias rápidos são escritos para aplicativos de primeira parte, mas você ainda pode usá-los como referência para integração de aplicativos de terceiros.
3. A principal diferença é que aplicativos de terceiros exibirão uma tela de consentimento (consent screen), solicitando permissão explícita dos usuários para acessar seus dados.

Você pode encontrar mais informações em nossos [guias rápidos](/quick-starts).
