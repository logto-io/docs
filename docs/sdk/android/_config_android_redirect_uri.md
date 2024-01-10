In Android, the Redirect URI follows the pattern: `$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback`.

:::note
The `LOGTO_REDIRECT_SCHEME` should be a custom scheme in the reverse domain format.  
The `YOUR_APP_PACKAGE` is your app package name.
:::

Assuming you treat `io.logto.android` as the custom `LOGTO_REDIRECT_SCHEME`, and `io.logto.sample` is your app package name, the Redirect URI should be `io.logto.android://io.logto.sample/callback`.

Now you can configure the Redirect URI in the admin console (Take `io.logto.android://io.logto.sample/callback` as an example).
