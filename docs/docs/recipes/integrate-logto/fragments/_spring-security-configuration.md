```yaml
# path/to/project/src/main/resources/application.yaml
spring:
  security:
    oauth2:
      client:
        registration:
          logto:
            client-id: <your-app-id>
            client-secret: <your-app-secret> # Copy from application details in Admin Console
            scope:
              - offline_access
              - openid
              - profile
        provider:
          logto:
            issuer-uri: <your-issuer-uri> # e.g. `http://localhost:3001/oidc`. Replace it with your logto issuer URI.
```
