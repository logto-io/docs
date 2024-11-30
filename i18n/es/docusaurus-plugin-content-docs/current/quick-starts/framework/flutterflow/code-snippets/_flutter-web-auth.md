<details>
  <summary>flutter_web_auth</summary>

[flutter_web_auth](https://pub.dev/packages/flutter_web_auth) se utiliza detrás del SDK de flutter de Logto. Confiamos en su interfaz de interacción basada en webview para abrir las páginas de autorización de Logto.

:::note
Este plugin utiliza ASWebAuthenticationSession en iOS 12+ y macOS 10.15+, SFAuthenticationSession en iOS 11, Chrome Custom Tabs en Android y abre una nueva ventana en Web. Puedes construirlo con iOS 8+, pero actualmente solo es compatible con iOS 11 o superior.
:::

### Registrar la URL de callback en Android

Para capturar la URL de callback desde la página web de inicio de sesión de Logto, necesitarás registrar tu redirectUri de inicio de sesión en el AndroidManifest.xml.

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
