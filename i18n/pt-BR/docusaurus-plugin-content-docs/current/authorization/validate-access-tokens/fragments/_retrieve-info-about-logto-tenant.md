Você precisará dos seguintes valores para validar tokens emitidos pelo Logto:

- URI do JSON Web Key Set (JWKS): A URL para as chaves públicas do Logto, usada para verificar assinaturas de JWT.
- Emissor (Issuer): O valor esperado do emissor (URL OIDC do Logto).

Primeiro, encontre o endpoint do seu tenant Logto. Você pode encontrá-lo em vários lugares:

- No Logto Console, em **Configurações** → **Domínios**.
- Em qualquer configuração de aplicativo onde você configurou no Logto, **Configurações** → **Endpoints & Credenciais**.

### Buscar no endpoint de descoberta do OpenID Connect \{#fetch-from-openid-connect-discovery-endpoint}

Esses valores podem ser obtidos no endpoint de descoberta do OpenID Connect do Logto:

```
https://<seu-endpoint-logto>/oidc/.well-known/openid-configuration
```

Aqui está um exemplo de resposta (outros campos omitidos para brevidade):

```json
{
  "jwks_uri": "https://your-tenant.logto.app/oidc/jwks",
  "issuer": "https://your-tenant.logto.app/oidc"
}
```

### Definir manualmente no seu código (não recomendado) \{#hardcode-in-your-code-not-recommended}

Como o Logto não permite personalizar o URI do JWKS ou o emissor, você pode definir esses valores manualmente no seu código. No entanto, isso não é recomendado para aplicações em produção, pois pode aumentar a sobrecarga de manutenção caso alguma configuração mude no futuro.

- URI do JWKS: `https://<seu-endpoint-logto>/oidc/jwks`
- Emissor: `https://<seu-endpoint-logto>/oidc`
