<details>
  <summary>

### flutter_web_auth

</summary>

[flutter_web_auth](https://pub.dev/packages/flutter_web_auth) wird hinter dem flutter SDK von Logto verwendet. Wir verlassen uns auf seine webview-basierte Interaktionsschnittstelle, um die Autorisierungsseiten von Logto zu öffnen.

:::note
Dieses Plugin verwendet ASWebAuthenticationSession auf iOS 12+ und macOS 10.15+, SFAuthenticationSession auf iOS 11, Chrome Custom Tabs auf Android und öffnet ein neues Fenster im Web.
Du kannst es mit iOS 8+ bauen, aber es wird derzeit nur von iOS 11 oder höher unterstützt.
:::

### Registriere die Callback-URL auf Android

Um die Callback-URL von Logtos Anmelde-Webseite zu erfassen, musst du deine Anmelde-redirectUri in der AndroidManifest.xml registrieren.

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
