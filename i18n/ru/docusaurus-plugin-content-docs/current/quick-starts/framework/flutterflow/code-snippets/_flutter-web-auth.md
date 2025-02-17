<details>
  <summary>

### flutter_web_auth {#flutter_web_auth}

</summary>

[flutter_web_auth](https://pub.dev/packages/flutter_web_auth) используется в Logto's flutter SDK. Мы полагаемся на его интерфейс взаимодействия на основе webview для открытия страниц авторизации Logto.

:::note
Этот плагин использует ASWebAuthenticationSession на iOS 12+ и macOS 10.15+, SFAuthenticationSession на iOS 11, Chrome Custom Tabs на Android и открывает новое окно в Web.
Вы можете собрать его с iOS 8+, но в настоящее время он поддерживается только iOS 11 или выше.
:::

### Регистрация callback URL на Android {#register-the-callback-url-on-android}

Чтобы захватить callback URL со страницы входа Logto, вам нужно зарегистрировать ваш redirectUri для входа в AndroidManifest.xml.

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
