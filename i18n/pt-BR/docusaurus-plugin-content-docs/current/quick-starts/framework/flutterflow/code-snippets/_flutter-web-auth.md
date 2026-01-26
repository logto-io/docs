<details>
  <summary>

### flutter_web_auth {#flutter_web_auth}

</summary>

[flutter_web_auth](https://pub.dev/packages/flutter_web_auth) é usado por trás do SDK flutter do Logto. Nós confiamos em sua interface de interação baseada em webview para abrir as páginas de autorização do Logto.

:::note
Este plugin usa ASWebAuthenticationSession no iOS 12+ e macOS 10.15+, SFAuthenticationSession no iOS 11, Chrome Custom Tabs no Android e abre uma nova janela na Web.
Você pode construí-lo com iOS 8+, mas atualmente é suportado apenas por iOS 11 ou superior.
:::

### Registrar a URL de callback no Android {#register-the-callback-url-on-android}

Para capturar a URL de callback da página de login do Logto, você precisará registrar seu redirectUri de login no AndroidManifest.xml.

```xml
<activity android:name="com.linusu.flutter_web_auth.CallbackActivity" android:exported="true">
    <intent-filter android:label="flutter_web_auth">
        <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:scheme="io.logto"/>
    </intent-filter>
</activity>
```

</details>
