---
slug: /security/blocklist
sidebar_label: Lista de bloqueio
sidebar_position: 3
---

# Lista de bloqueio

## Lista de bloqueio de email {#email-blocklist}

A política de lista de bloqueio de email permite a personalização das configurações de lista de bloqueio de email para prevenir abusos no cadastro de contas. Ela monitora endereços de email usados para cadastro e configurações de conta. Se um usuário tentar se cadastrar ou vincular um endereço de email que viole qualquer regra da lista de bloqueio, o sistema rejeitará a solicitação, ajudando a mitigar contas de spam e a melhorar a segurança geral da conta.

Visite o <CloudLink to="/security/blocklist"> Console > Segurança > Lista de bloqueio</CloudLink> para configurar as configurações da lista de bloqueio de email.

### Bloquear subendereçamento de email {#block-email-subaddressing}

O subendereçamento de email permite que os usuários criem variações de seus endereços de email adicionando um sinal de mais (+) seguido por caracteres adicionais (por exemplo, usuario+tag@exemplo.com). Esse recurso pode ser explorado por usuários mal-intencionados para contornar restrições da lista de bloqueio. Ao habilitar o recurso de bloqueio de subendereçamento de email, o sistema rejeitará qualquer tentativa de cadastro ou vinculação de conta que utilize formatos de email subendereçados.

### Lista de bloqueio de email personalizada {#custom-email-blocklist}

Você pode criar uma lista de bloqueio de email personalizada especificando uma lista de endereços de email ou domínios a serem bloqueados. O sistema rejeitará qualquer tentativa de cadastro ou vinculação de conta que corresponda a essas entradas. A lista de bloqueio suporta tanto endereços de email completos quanto correspondência de domínios.

Por exemplo, adicionar `@exemplo.com` à lista de bloqueio bloqueará todos os endereços de email com esse domínio. Da mesma forma, adicionar `foo@exemplo.com` bloqueará especificamente esse endereço de email.

### Bloquear endereços de email descartáveis {#block-disposable-email-addresses}

Este é um recurso **exclusivo da nuvem**. Uma vez habilitado, o sistema validará automaticamente o domínio do endereço de email fornecido em relação a uma lista de domínios de email descartáveis conhecidos. Se o domínio for encontrado na lista, a solicitação será rejeitada. A lista de domínios de email descartáveis é atualizada regularmente para garantir sua eficácia.
