---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

O reCAPTCHA Enterprise é um serviço do Google que protege sites contra fraudes e abusos usando detecção avançada de bots sem prejudicar a experiência do usuário. Este guia irá orientá-lo no processo de configuração do reCAPTCHA Enterprise com o Logto.

## Pré-requisitos {#prerequisites}

- Um projeto no Google Cloud

## Configurar uma chave reCAPTCHA {#setup-a-recaptcha-key}

1. Acesse a [página do reCAPTCHA no Google Cloud Console](https://console.cloud.google.com/security/recaptcha).
2. Clique no botão **Criar chave** próximo a "Chaves reCAPTCHA".
3. Preencha o formulário com os seguintes detalhes:
   - **Nome de exibição**: Qualquer nome que você queira dar à chave
   - **Tipo de aplicação**: Website
   - **Lista de domínios**: Adicione o domínio do endpoint do Logto
   - **Tipo de verificação**: Escolha entre **Baseado em pontuação (invisível)** ou **Desafio de caixa de seleção**. Isso determina como o reCAPTCHA será exibido aos usuários. Veja [Modo de verificação](#verification-mode) para mais detalhes.
4. Após criar a chave, você será redirecionado para a página de detalhes da chave, copie o **ID**.

## Configurar uma chave de API {#setup-an-api-key}

1. Acesse a [página de credenciais do Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Clique no botão **Criar credenciais** e selecione **Chave de API**.
3. Copie a chave de API.
4. Opcionalmente, você pode restringir a chave de API para **API do reCAPTCHA Enterprise** para torná-la mais segura.
5. Lembre-se de deixar "Restrições de aplicação" como **Nenhuma** se você não souber o que é.

## Obter o ID do projeto {#get-project-id}

1. Copie o **ID do projeto** na [página inicial do Google Cloud Console](https://console.cloud.google.com/welcome).

## Modo de verificação {#verification-mode}

O reCAPTCHA Enterprise suporta dois modos de verificação:

- **Invisível**: Verificação baseada em pontuação que roda automaticamente em segundo plano sem interação do usuário. Este é o modo padrão.
- **Caixa de seleção**: Exibe o clássico widget de caixa de seleção "Não sou um robô" que exige interação do usuário.

:::note
O modo de verificação que você selecionar no Logto deve corresponder ao tipo de chave criada no Google Cloud Console. Se você criou uma chave baseada em pontuação, selecione **Invisível**. Se você criou uma chave de desafio de caixa de seleção, selecione **Caixa de seleção**.
:::

## Domínio personalizado {#custom-domain}

Por padrão, o Logto carrega o script do reCAPTCHA de `www.google.com`. No entanto, em algumas regiões onde o domínio padrão do Google é inacessível, você pode configurar um domínio alternativo.

Domínios suportados:

- `www.google.com` (padrão)
- `recaptcha.net`

Para configurar um domínio personalizado, insira o domínio no campo **Domínio** ao configurar o reCAPTCHA Enterprise no Logto Console.

## Ativar CAPTCHA {#enable-captcha}

Lembre-se de ativar a proteção contra bots CAPTCHA após configurar o provedor de CAPTCHA.

Acesse a página de Segurança, encontre a aba CAPTCHA e ative o botão de alternância "Ativar CAPTCHA".
