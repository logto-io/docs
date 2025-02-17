```python title="flask.py"
accessToken = await client.getAccessToken("https://shopping.your-app.com/api")
# или
claims = await client.getAccessTokenClaims("https://shopping.your-app.com/api")
```
