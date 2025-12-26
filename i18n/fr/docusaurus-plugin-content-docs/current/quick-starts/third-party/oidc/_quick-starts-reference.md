Sous le capot, une application tierce est un client OAuth 2.0 / OIDC standard. Cela signifie que vous (ou le développeur tiers) pouvez utiliser n'importe quelle bibliothèque ou framework OAuth 2.0 / OIDC pour intégrer Logto.

Quelques points à garder à l'esprit :

1. Lors de la création d'une application tierce, sélectionnez le type d'application approprié en fonction de l'architecture de l'application :
   - **Web traditionnel** : Utilise un secret client pour l'authentification.
   - **Application monopage / Native** : Utilise PKCE pour une autorisation sécurisée sans secret client.
2. La plupart de nos guides de démarrage rapide sont rédigés pour des applications propriétaires, mais vous pouvez tout de même les utiliser comme référence pour l'intégration d'une application tierce.
3. La principale différence est que les applications tierces afficheront un écran de consentement (Consent screen), demandant aux utilisateurs une autorisation explicite pour accéder à leurs données.

Consultez [Applications tierces](/integrate-logto/third-party-applications) pour un guide d'intégration complet.
