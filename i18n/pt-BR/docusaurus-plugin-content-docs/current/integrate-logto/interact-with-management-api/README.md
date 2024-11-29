---
sidebar_position: 4
---

import logtoManagementApiResourceSrc from './assets/logto-management-api-resource.webp';
import logtoManagementApiDetailsSrc from './assets/logto-management-api-details.webp';

import BasicsAboutAccessTokenRequest from '../../quick-starts/generic/machine-to-machine/fragments/\_basics-about-access-token-request.mdx';
import FetchAccessTokenForLogtoManagementApi from '../../quick-starts/generic/machine-to-machine/fragments/\_fetch-access-token-for-logto-management-api.mdx';
import AccessTokenUsage from '../../quick-starts/generic/machine-to-machine/fragments/\_access-token-usage.mdx';
import AccessLogtoManagementApiUsingAccessToken from '../../quick-starts/generic/machine-to-machine/fragments/\_access-logto-management-api-using-access-token.mdx';
import M2mAccessTokenNote from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-access-token-sub-note.mdx';
import M2mRoleAssignment from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-role-assignment.mdx';

# Interagir com a Management API

## O que é a Logto Management API?

A Logto Management API é um conjunto abrangente de APIs que oferece aos desenvolvedores controle total sobre sua implementação para atender às necessidades de seus produtos e pilha tecnológica. Ela é pré-construída, listada na lista de recursos de API no Logto Console, e não pode ser excluída ou modificada.

Seu identificador segue o padrão `https://[tenant-id].logto.app/api`

<img alt="Recurso da Logto Management API" src={logtoManagementApiResourceSrc} />

<img alt="Detalhes da Logto Management API" src={logtoManagementApiDetailsSrc} />

Com a Logto Management API, você pode acessar os robustos serviços de backend do Logto, que são altamente escaláveis e podem ser utilizados em uma infinidade de cenários. Ela vai além do que é possível com as capacidades de low-code do Admin Console.

Algumas APIs frequentemente usadas estão listadas abaixo:

- Usuário
- Aplicativo
- Logs
- Papéis (Roles)
- Recursos
- Conectores
- Organizações

Para saber mais sobre as APIs disponíveis, visite https://openapi.logto.io/.

## Como acessar a Logto Management API

### Criar um aplicativo M2M

:::note
Se você não está familiarizado com o fluxo de autenticação M2M (Máquina para Máquina), recomendamos ler [Entendendo o fluxo de autenticação](/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow) primeiro para entender os conceitos básicos.
:::

Vá para <CloudLink to="/applications">Console > Aplicativos</CloudLink>, selecione o tipo de aplicativo M2M e inicie o processo de criação.

<M2mRoleAssignment />

No módulo de atribuição de papéis, você pode ver que todos os papéis M2M estão incluídos, e os papéis indicados por um ícone do Logto significam que esses papéis incluem permissões da Logto Management API.

Agora atribua papéis M2M que incluem permissões da Logto Management API para seu aplicativo M2M.

### Obter um token de acesso

#### Noções básicas sobre solicitação de token de acesso

<BasicsAboutAccessTokenRequest />

#### Obter token de acesso para a Logto Management API

<FetchAccessTokenForLogtoManagementApi />

#### Resposta do token de acesso

Um corpo de resposta de acesso bem-sucedido seria assim:

```json
{
  "access_token": "eyJhbG...2g", // Use este token para acessar a Logto Management API
  "expires_in": 3600, // Expiração do token em segundos
  "token_type": "Bearer", // Tipo de autenticação para sua solicitação ao usar o token de acesso
  "scope": "all" // escopo `all` para a Logto Management API
}
```

<M2mAccessTokenNote />

### Acessar a Logto Management API usando o token de acesso

<AccessTokenUsage />

<AccessLogtoManagementApiUsingAccessToken />

## Cenários típicos para usar a Logto Management API

Nossos desenvolvedores implementaram muitos recursos adicionais usando a Logto Management API. Acreditamos que nossa API é altamente escalável e pode suportar uma ampla gama de suas necessidades. Aqui estão alguns exemplos de cenários que não são possíveis com o Logto Admin Console, mas podem ser alcançados através da Logto Management API.

### Implementar perfil de usuário por conta própria

Atualmente, o Logto não fornece uma solução de interface de usuário pré-construída para perfis de usuário. Reconhecemos que os perfis de usuário estão intimamente ligados aos atributos de negócios e produtos. Enquanto trabalhamos para determinar a melhor abordagem, sugerimos usar nossas APIs para criar sua própria solução. Por exemplo, você pode utilizar nossa API de interação, API de perfil e API de código de verificação para desenvolver uma solução personalizada que atenda às suas necessidades.

### Pesquisa avançada de usuários

O Logto Admin Console suporta funções básicas de pesquisa e filtragem. Para opções de pesquisa avançada, como pesquisa difusa, correspondência exata e sensibilidade a maiúsculas e minúsculas, confira nossos tutoriais e guias de [Pesquisa Avançada de Usuários](/user-management/advanced-user-search).

### Implementar gerenciamento de organização por conta própria

Se você estiver usando o recurso de [organizações](/organizations) para construir seu aplicativo multi-tenant, pode precisar da Logto Management API para tarefas como convites para organizações e gerenciamento de membros. Para seu produto SaaS, onde você tem tanto administradores quanto membros no tenant, a Logto Management API pode ajudá-lo a criar um portal de administração personalizado adaptado às suas necessidades de negócios. Confira [este](/end-user-flows/organization-experience/) para mais detalhes.

## Dicas para usar a Logto Management API

### Gerenciando respostas de API paginadas

Algumas das respostas da API podem incluir muitos resultados, os resultados serão paginados. O Logto fornece 2 tipos de informações de paginação.

#### Usando cabeçalhos de link

Um cabeçalho de resposta paginada será assim:

```
Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"
```

O cabeçalho de link fornece a URL para a página anterior, próxima, primeira e última de resultados:

- A URL para a página anterior é seguida por rel="prev".
- A URL para a próxima página é seguida por rel="next".
- A URL para a última página é seguida por rel="last".
- A URL para a primeira página é seguida por rel="first".

#### Usando cabeçalho de número total

Além dos cabeçalhos de link padrão, o Logto também adicionará um cabeçalho `Total-Number`:

```
Total-Number: 216
```

Isso seria muito conveniente e útil para mostrar números de página.

#### Alterando número da página e tamanho da página

Existem 2 parâmetros de consulta opcionais:

- `page`: indica o número da página, começa em 1, o valor padrão é 1.
- `page_size`: indica o número de itens por página, o valor padrão é 20.

### Limite de taxa

:::note
Isso é apenas para Logto Cloud.
:::

Para garantir a confiabilidade e segurança de nossos serviços para todos os usuários, empregamos um firewall geral que monitora e gerencia o tráfego para nosso site. Embora não imponhamos um limite de taxa estrito, recomendamos que os usuários limitem sua atividade a aproximadamente 200 solicitações a cada 10 segundos para evitar acionar nossas medidas de proteção.
