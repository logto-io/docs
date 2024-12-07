---
sidebar_position: 3
---

# Passkeys (WebAuthn)

[Passkey](https://auth.wiki/passkey) offre une alternative plus sécurisée et conviviale aux mots de passe traditionnels. En utilisant la cryptographie à clé publique, le passkey améliore la sécurité en reliant l'appareil de l'utilisateur, le domaine du service et l'ID utilisateur, contrant efficacement le phishing et les attaques par mot de passe. Compatible avec divers appareils ou navigateurs, il permet aux utilisateurs d'employer des fonctionnalités biométriques et de sécurité matérielle pour une authentification pratique. [WebAuthn](https://auth.wiki/webauthn) fournit l'API permettant aux sites web de mettre en œuvre le passkey.

Logto prend désormais en charge le passkey (Webauthn) pour l'authentification multi-facteurs (MFA). La fonctionnalité de connexion par passkey arrive bientôt. Restez à l'écoute pour les mises à jour.

## Concepts

Les clients connaissent toujours les Passkeys plutôt que WebAuthn, alors quelle est la relation entre eux et comment les utiliser ? Explorons ces concepts :

- **Passkeys** : Un passkey est un identifiant résistant au phishing basé sur FIDO pour remplacer les mots de passe. Il utilise la cryptographie asymétrique à clé publique pour une sécurité renforcée. Il peut s'agir de jetons matériels ou de clés de sécurité, tels que des appareils USB ou Bluetooth. Étant donné que "Passkeys" est la méthode d'authentification affichée aux utilisateurs, elle doit être utilisée dans le client de votre produit.
- **WebAuthn** : C'est une API JavaScript développée par le W3C et la FIDO Alliance, qui permet l'authentification des applications web avec les normes FIDO2. Passkeys est l'une des méthodes d'authentification prises en charge par WebAuthn. Dans la console Logto, nous nous référons professionnellement à cette intégration sous le nom de "WebAuthn".

WebAuthn offre divers authentificateurs parmi lesquels les utilisateurs peuvent choisir, disponibles en deux types pour une utilisation locale et cloud :

- **Authentificateur de plateforme (Authentificateur interne)** : Il est lié à un système d'exploitation d'appareil unique et spécifique, tel qu'un ordinateur, un ordinateur portable, un téléphone ou une tablette, avec lequel l'utilisateur se connecte. Il fonctionne exclusivement sur l'appareil pour l'autorisation en utilisant des méthodes telles que la biométrie ou un code d'accès de l'appareil, ce qui en fait un moyen rapide d'authentifier. Par exemple, iCloud Keychain vérifié par Touch ID, Face ID ou code d'accès de l'appareil sur macOS ou iOS ; Windows Hello vérifié par reconnaissance faciale, empreinte digitale ou code PIN convivial.
- **Authentificateur itinérant (Authentificateur externe, Authentificateur multiplateforme)** : C'est un appareil ou une application logicielle séparé et portable, tel qu'une clé de sécurité matérielle ou un smartphone. Il doit lier l'appareil en utilisant USB ou en gardant NFC ou Bluetooth activé. L'authentificateur itinérant n'est pas limité à un seul appareil ou navigateur, offrant une plus grande flexibilité.

Pour approfondir les principes et processus de WebAuthn, vous pouvez vous référer à nos articles de blog : [WebAuthn et Passkeys 101](https://blog.logto.io/web-authn-and-passkey-101/) et [Ce que vous devez savoir avant d'intégrer WebAuthn](https://blog.logto.io/webauthn-base-knowledge/).

## Faites attention aux limitations

Il est essentiel d'être conscient de certaines limitations lors de la mise en œuvre de WebAuthn :

1. **Limitation de la plateforme et du navigateur** : Il est important de noter que Logto ne propose actuellement pas de support WebAuthn pour les applications natives. De plus, la disponibilité des authentificateurs WebAuthn dépend des capacités du navigateur et de l'appareil ([Vérifiez la liste](https://caniuse.com/?search=webauthn)). Par conséquent, WebAuthn n'est pas toujours la seule option pour mettre en œuvre l'authentification multi-facteurs (MFA), sinon, vous pouvez contrôler quels navigateurs et appareils peuvent accéder à votre produit.
2. **Limitation de domaine** : Changer de domaine peut entraver la vérification des utilisateurs via leurs comptes WebAuthn existants. Les passkeys sont liés au domaine spécifique de la page web actuelle et ne peuvent pas être utilisés sur différents domaines.
3. **Limitation de l'appareil** : Perdre l'appareil peut entraîner une perte d'accès à leurs comptes, en particulier pour ceux qui dépendent des authentificateurs de plateforme "Cet appareil". Pour améliorer l'accès à l'authentification, il est conseillé de fournir aux utilisateurs plus d'un facteur d'authentification.

## Flux d'authentification

La spécification Passkeys exige que les utilisateurs cliquent activement sur le bouton de la page actuelle pour initier le composant d'authentification. Cela signifie que dans les flux de configuration et de vérification, les utilisateurs doivent être redirigés vers la page d'accueil pour initier WebAuthn.

- **Flux de configuration des passkeys**

![Flux de configuration WebAuthn](./assets/webauthn-setup-flow.png)

- **Flux de vérification des passkeys**

![Flux de vérification WebAuthn](./assets/webauthn-verification-flow.png)

## Ressources connexes

<Url href="https://blog.logto.io/webauthn-base-knowledge">
  Ce que vous devez savoir avant d'intégrer WebAuthn
</Url>

<Url href="https://blog.logto.io/web-authn-and-passkey-101">
  WebAuthn et Passkey 101
</Url>
