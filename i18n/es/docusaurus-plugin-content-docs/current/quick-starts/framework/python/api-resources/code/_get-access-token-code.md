```python title="flask.py"
accessToken = await client.getAccessToken("https://shopping.your-app.com/api")
# o
claims = await client.getAccessTokenClaims("https://shopping.your-app.com/api")
```
