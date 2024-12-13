<details>
  <summary>

### flutter_web_auth

</summary>

[flutter_web_auth](https://pub.dev/packages/flutter_web_auth) 在 Logto 的 flutter SDK 中使用。我们依赖其基于 webview 的交互界面来打开 Logto 的授权页面。

:::note
这个插件在 iOS 12+ 和 macOS 10.15+ 上使用 ASWebAuthenticationSession，在 iOS 11 上使用 SFAuthenticationSession，在 Android 上使用 Chrome Custom Tabs，并在 Web 上打开一个新窗口。
你可以在 iOS 8+ 上构建它，但目前仅支持 iOS 11 或更高版本。
:::

### 在 Android 上注册回调 url

为了从 Logto 的登录网页捕获回调 url，你需要将你的登录 redirectUri 注册到 AndroidManifest.xml 中。

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
