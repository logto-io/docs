Sous le capot, une application tierce n'est qu'un client OAuth 2.0 / OIDC standard. Cela signifie que vous (ou le développeur tiers) pouvez utiliser n'importe quelle bibliothèque ou framework OAuth 2.0 / OIDC pour intégrer Logto.

Si vous n'êtes pas familier avec OAuth 2.0 ou OIDC, vous pouvez commencer par suivre l'un de nos guides de démarrage rapide “Web traditionnel”.

Quelques points à garder à l'esprit :

1. Logto exige actuellement que les applications tierces soient des applications “Web traditionnel”. En d'autres termes, l'application doit disposer d'un serveur backend (ou backend-for-frontend) pour stocker en toute sécurité le secret client.
2. La plupart de nos guides de démarrage rapide sont rédigés pour des applications propriétaires, mais vous pouvez tout de même les utiliser comme référence pour l'intégration d'applications tierces.
3. La principale différence est que les applications tierces afficheront un écran de consentement (Consent screen), demandant aux utilisateurs une permission explicite pour accéder à leurs données.

Vous pouvez trouver plus d'informations dans nos [guides de démarrage rapide](https://docs.logto.io/quick-starts).
