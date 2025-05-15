<details>
  <summary>

### flutter_web_auth {#flutter_web_auth}

</summary>

[flutter_web_auth](https://pub.dev/packages/flutter_web_auth) 在 Logto 的 flutter SDK 中被使用。我們依賴其基於 webview 的互動介面來開啟 Logto 的授權頁面。

:::note
此插件在 iOS 12+ 和 macOS 10.15+ 上使用 ASWebAuthenticationSession，在 iOS 11 上使用 SFAuthenticationSession，在 Android 上使用 Chrome Custom Tabs，並在 Web 上開啟新視窗。
你可以在 iOS 8+ 上構建它，但目前僅支援 iOS 11 或更高版本。
:::

### 在 Android 上註冊回呼 URL {#register-the-callback-url-on-android}

為了從 Logto 的登入網頁捕獲回呼 URL，你需要將你的登入 redirectUri 註冊到 AndroidManifest.xml 中。

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
