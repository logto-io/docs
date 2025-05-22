---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# Proteção contra bots CAPTCHA

A proteção contra bots CAPTCHA ajuda a proteger seus fluxos de usuário verificando se os usuários são humanos, reduzindo significativamente os ataques de bots. Logto suporta provedores líderes como Google reCAPTCHA Enterprise e Cloudflare Turnstile.

## Ativando a proteção contra bots CAPTCHA {#enabling-captcha-bot-protection}

Siga estas etapas para ativar o CAPTCHA para seus fluxos de usuário (login, registro e recuperação de senha):

1. **Navegue até as configurações**: Vá para **Console > Security > Bot protection**.
2. **Selecione o provedor**: Escolha seu provedor de CAPTCHA preferido (por exemplo, Google reCAPTCHA Enterprise ou Cloudflare Turnstile).
3. **Configuração**: Siga as instruções no lado esquerdo da página para configurar o provedor de CAPTCHA selecionado.
4. **Salvar**: Clique em **Save and done** para aplicar suas configurações.
5. **(Opcional) Ativar CAPTCHA**: O CAPTCHA será automaticamente ativado na página de segurança assim que um provedor for configurado. No entanto, você pode verificar ou ajustar manualmente as configurações conforme necessário.

## Visualizando a integração do CAPTCHA {#previewing-captcha-integration}

Você tem duas opções para visualizar e testar a integração do CAPTCHA:

1. **Use seu aplicativo**: Navegue até as páginas de login, registro ou recuperação de senha do seu aplicativo e tente as respectivas ações do usuário.
2. **Aplicativo de demonstração**: Vá para **Get started** e use o aplicativo de demonstração fornecido para testar a funcionalidade do CAPTCHA.

Certifique-se de que o desafio CAPTCHA apareça conforme esperado em qualquer uma das opções.

## Provedores suportados {#supported-providers}

Atualmente, suportamos:

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
