---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise é um serviço do Google que protege sites contra fraudes e abusos usando detecção avançada de bots sem interromper a experiência do usuário. Este guia irá orientá-lo no processo de configuração do reCAPTCHA Enterprise com Logto.

## Pré-requisitos {#prerequisites}

- Um projeto no Google Cloud

## Configurar uma chave reCAPTCHA {#setup-a-recaptcha-key}

1. Vá para a [página reCAPTCHA do Google Cloud Console](https://console.cloud.google.com/security/recaptcha).
2. Clique no botão **Criar chave** próximo a "Chaves reCAPTCHA".
3. Preencha o formulário com os seguintes detalhes:
   - **Nome de exibição**: Qualquer nome que você queira dar à chave
   - **Tipo de aplicação**: Website
   - **Lista de domínios**: Adicione o domínio do endpoint do Logto
4. Após criar a chave, você será redirecionado para a página de detalhes da chave, copie o **ID**.

## Configurar uma chave de API {#setup-an-api-key}

1. Vá para a [página de Credenciais do Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Clique no botão **Criar credenciais** e selecione **Chave de API**.
3. Copie a chave de API.
4. Opcionalmente, você pode restringir a chave de API para **reCAPTCHA Enterprise API** para torná-la mais segura.
5. Lembre-se de deixar "Restrições de aplicação" como **Nenhuma** se você não entender o que é.

## Obter ID do projeto {#get-project-id}

1. Copie o **ID do Projeto** da [página inicial do Google Cloud Console](https://console.cloud.google.com/welcome).

## Habilitar CAPTCHA {#enable-captcha}

Lembre-se de habilitar a proteção contra bots CAPTCHA após configurar o provedor de CAPTCHA.

Vá para a página de Segurança, encontre a aba CAPTCHA e ative o botão de alternância "Habilitar CAPTCHA".
