---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# Proteção contra bots com CAPTCHA

A proteção contra bots com CAPTCHA ajuda a proteger seus fluxos de usuário, verificando se os usuários são humanos e reduzindo significativamente ataques de bots. O Logto oferece suporte a provedores líderes como Google reCAPTCHA Enterprise e Cloudflare Turnstile.

:::note
O CAPTCHA se aplica às ações de identificador, senha, código de verificação, registro e recuperação de senha. Não se aplica ao [magic link](/end-user-flows/one-time-token) ou ao [login com passkey](/end-user-flows/sign-up-and-sign-in/passkey-sign-in), portanto, usuários que completam o login com magic link ou passkey não precisam resolver um desafio CAPTCHA adicional.
:::

:::note
Se você usar [Traga sua UI](/customization/bring-your-ui/), a integração CAPTCHA incorporada não é executada no seu frontend personalizado. Sua UI personalizada deve carregar o script do provedor de CAPTCHA, executar o desafio e enviar o token como `captchaToken` em `PUT /api/experience`.
:::

## Ativando a proteção contra bots com CAPTCHA {#enabling-captcha-bot-protection}

Siga estes passos para ativar o CAPTCHA nos seus fluxos de usuário (login por identificador, login por senha, registro e recuperação de senha):

1. **Navegue até as configurações**: Vá para **Console > Segurança > Proteção contra bots**.
2. **Selecione o provedor**: Escolha seu provedor de CAPTCHA preferido (por exemplo, Google reCAPTCHA Enterprise ou Cloudflare Turnstile).
3. **Configuração**: Siga as instruções no lado esquerdo da página para configurar o provedor de CAPTCHA selecionado.
4. **Salvar**: Clique em **Salvar e concluir** para aplicar suas configurações.
5. **(Opcional) Ativar CAPTCHA**: O CAPTCHA será ativado automaticamente na página de segurança assim que um provedor for configurado. No entanto, você pode verificar ou ajustar as configurações manualmente, se necessário.

## Visualizando a integração do CAPTCHA {#previewing-captcha-integration}

Você tem duas opções para visualizar e testar a integração do CAPTCHA:

1. **Use seu aplicativo**: Navegue até as páginas de login, registro ou recuperação de senha do seu aplicativo e tente as respectivas ações de usuário.
2. **Aplicativo de demonstração**: Vá para **Primeiros passos** e use o aplicativo de demonstração fornecido para testar a funcionalidade do CAPTCHA.

Certifique-se de que o desafio CAPTCHA apareça conforme esperado em qualquer uma das opções.

## Provedores suportados {#supported-providers}

Atualmente, oferecemos suporte a:

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
