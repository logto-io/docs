---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile é um serviço CAPTCHA que ajuda a proteger seu site contra spam e abuso. Este guia irá orientá-lo no processo de configuração do Turnstile com Logto.

## Pré-requisitos {#prerequisites}

- Uma conta Cloudflare

## Configuração {#setup}

1. Acesse o [Painel do Cloudflare](https://dash.cloudflare.com/login) e selecione sua conta.
2. Navegue até **Turnstile** > **Add widget**.
3. Preencha o formulário com os seguintes detalhes:
   - **Nome do widget**: Qualquer nome que você queira dar ao widget
   - **Hostname**: Domínio do endpoint do Logto, por exemplo, https://[tenant-id].logto.app
   - **Modo do widget**: Deixe como padrão

## Obtenha a chave do site e a chave secreta {#get-the-site-key-and-secret-key}

1. Navegue até um widget que você acabou de criar e clique em **Manage widget**.
2. Role até o final e copie a **Chave do site** e a **Chave secreta**.

## Ativar CAPTCHA {#enable-captcha}

Lembre-se de ativar a proteção contra bots CAPTCHA após configurar o provedor CAPTCHA.

Vá para a página de Segurança, encontre a aba CAPTCHA e ative o botão de alternância "Enable CAPTCHA".
