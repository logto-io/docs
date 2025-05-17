```ruby
token = @client.access_token(organization_id: "organization_id")
```

#### Ressources API d’organisation {#organization-api-resources}

Pour obtenir un jeton d’accès pour une ressource API dans une organisation, vous pouvez utiliser la méthode `access_token` avec à la fois la ressource API et l’ID de l’organisation comme paramètres :

```ruby
token = @client.access_token(
  api_resource: "https://shopping.your-app.com/api",
  organization_id: "organization_id"
)
```
