<details>
  <summary>

### flutter_web_auth

</summary>

[flutter_web_auth](https://pub.dev/packages/flutter_web_auth) est utilisé derrière le SDK flutter de Logto. Nous nous appuyons sur son interface d'interaction basée sur webview pour ouvrir les pages d'Autorisation (Authorization) de Logto.

:::note
Ce plugin utilise ASWebAuthenticationSession sur iOS 12+ et macOS 10.15+, SFAuthenticationSession sur iOS 11, Chrome Custom Tabs sur Android et ouvre une nouvelle fenêtre sur le Web.
Vous pouvez le construire avec iOS 8+, mais il est actuellement uniquement pris en charge par iOS 11 ou supérieur.
:::

### Enregistrer l'URL de rappel sur Android

Afin de capturer l'URL de rappel depuis la page de connexion de Logto, vous devrez enregistrer votre redirectUri de connexion dans le fichier AndroidManifest.xml.

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
