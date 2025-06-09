Após extrair o token e buscar a configuração OIDC, valide o seguinte:

- **Assinatura:** O JWT deve ser válido e assinado pelo Logto (via JWKS).
- **Emissor (Issuer):** Deve corresponder ao emissor do seu tenant Logto.
- **Público (Audience):** Deve corresponder ao indicador de recurso da API registrado no Logto, ou ao contexto da organização se aplicável.
- **Expiração:** O token não pode estar expirado.
- **Permissões (escopos) (Permissions (scopes)):** O token deve incluir os escopos necessários para sua API / ação. Os escopos são strings separadas por espaço na reivindicação `scope`.
- **Contexto da organização:** Se estiver protegendo recursos de API em nível de organização, valide a reivindicação `organization_id`.

Veja [JSON Web Token](https://auth.wiki/jwt) para saber mais sobre a estrutura e reivindicações do JWT.

### O que verificar para cada modelo de permissão \{#what-to-check-for-each-permission-model}

As reivindicações e regras de validação diferem conforme o modelo de permissão:

| Modelo de permissão                     | Reivindicação de público (`aud`)                                      | Reivindicação de organização (`organization_id`)   | Escopos (permissões) a verificar (`scope`) |
| --------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------ |
| Recursos de API globais                 | Indicador de recurso de API                                           | _Não presente_                                     | Permissões do recurso de API               |
| Permissões de organização (não-API)     | `urn:logto:organization:<id>` (contexto da organização está em `aud`) | _Não presente_                                     | Permissões da organização                  |
| Recursos de API em nível de organização | Indicador de recurso de API                                           | ID da organização (deve corresponder à requisição) | Permissões do recurso de API               |

<small>
  Para permissões de organização que não são de API, o contexto da organização é representado pela reivindicação `aud`
  (por exemplo, `urn:logto:organization:abc123`). A reivindicação `organization_id` só está presente para
  tokens de recursos de API em nível de organização.
</small>

:::tip
Sempre valide tanto as permissões (escopos) quanto o contexto (público, organização) para APIs multi-tenant seguras.
:::
