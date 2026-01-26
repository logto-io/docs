---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile est un service CAPTCHA qui aide à protéger votre site web contre le spam et les abus. Ce guide vous guidera à travers le processus de configuration de Turnstile avec Logto.

## Prérequis {#prerequisites}

- Un compte Cloudflare

## Configuration {#setup}

1. Allez sur le [Tableau de bord Cloudflare](https://dash.cloudflare.com/login) et sélectionnez votre compte.
2. Naviguez vers **Turnstile** > **Ajouter un widget**.
3. Remplissez le formulaire avec les détails suivants :
   - **Nom du widget** : N'importe quel nom que vous souhaitez donner au widget
   - **Nom d'hôte** : Domaine de l'endpoint de Logto, par exemple https://[tenant-id].logto.app
   - **Mode du widget** : Laissez par défaut

## Obtenez la clé de site et la clé secrète {#get-the-site-key-and-secret-key}

1. Naviguez vers un widget que vous venez de créer, et cliquez sur **Gérer le widget**.
2. Faites défiler vers le bas et copiez la **Clé de site** et la **Clé secrète**.

## Activer CAPTCHA {#enable-captcha}

N'oubliez pas d'activer la protection CAPTCHA contre les robots après avoir configuré le fournisseur CAPTCHA.

Allez à la page Sécurité, trouvez l'onglet CAPTCHA, et activez le bouton bascule de "Activer CAPTCHA".
