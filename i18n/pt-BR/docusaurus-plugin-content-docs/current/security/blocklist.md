---
slug: /security/blocklist
sidebar_label: Lista de bloqueio
sidebar_position: 3
---

# Lista de bloqueio (Blocklist)

## Lista de bloqueio de e-mails (Email blocklist) {#email-blocklist}

A política de lista de bloqueio de e-mails permite a personalização das configurações de bloqueio para evitar abusos no cadastro de contas. Ela monitora os endereços de e-mail usados para cadastro e configurações de conta. Se um usuário tentar se cadastrar ou vincular um endereço de e-mail que viole alguma regra da lista de bloqueio, o sistema rejeitará a solicitação, ajudando a mitigar contas de spam e aumentar a segurança geral das contas.

Acesse o <CloudLink to="/security/blocklist">Console > Segurança > Lista de bloqueio</CloudLink> para configurar as definições da lista de bloqueio de e-mails.

### Bloquear endereços de e-mail descartáveis (Block disposable email addresses) {#block-disposable-email-addresses}

Este é um recurso **exclusivo da nuvem**. Uma vez ativado, o sistema validará automaticamente o domínio do endereço de e-mail fornecido em relação a uma lista de domínios de e-mail descartáveis conhecidos. Se o domínio estiver na lista, a solicitação será rejeitada. A lista de domínios descartáveis é atualizada regularmente para garantir sua eficácia.

### Bloquear subendereçamento de e-mail (Block email subaddressing) {#block-email-subaddressing}

O subendereçamento de e-mail permite que os usuários criem variações de seus endereços de e-mail adicionando um sinal de mais (+) seguido de caracteres adicionais (por exemplo, usuario+tag@exemplo.com). Esse recurso pode ser explorado por usuários mal-intencionados para contornar restrições da lista de bloqueio. Ao ativar o bloqueio de subendereçamento, o sistema rejeitará qualquer tentativa de cadastro ou vinculação de conta que utilize formatos de e-mail com subendereçamento.

### Lista de bloqueio de e-mails personalizada (Custom email blocklist) {#custom-email-blocklist}

Você pode criar uma lista de bloqueio personalizada especificando uma lista de endereços de e-mail ou domínios a serem bloqueados. O sistema rejeitará qualquer tentativa de cadastro ou vinculação de conta que corresponda a essas entradas. A lista de bloqueio suporta tanto correspondência de endereço de e-mail completo quanto de domínio.

Por exemplo, ao adicionar `@example.com` à lista de bloqueio, todos os endereços de e-mail com esse domínio serão bloqueados. Da mesma forma, ao adicionar `foo@example.com`, apenas esse endereço de e-mail será bloqueado.

:::note

E-mails descartáveis, subendereçamento e e-mails personalizados são restritos durante o registro e a vinculação de contas. Usuários existentes com esses endereços de e-mail ainda podem fazer login.

- Os administradores podem "ignorar restrições" adicionando usuários manualmente em <CloudLink to="/users">Console > Gerenciamento de usuários</CloudLink>, ou via [Management API](https://openapi.logto.io/operation/operation-createuser). Exemplo: Criar um usuário com e-mail subendereçado quando o subendereçamento está bloqueado.
- Bloqueie contas existentes excluindo ou suspendendo-as em <CloudLink to="/users">Console > Gerenciamento de usuários</CloudLink>.

:::

## Recursos relacionados {#related-resources}

<Url href="https://blog.logto.io/disposable-email">O que é e-mail descartável? Como lidar com eles em seu aplicativo?</Url>
