<details>
  <summary>

### flutter_web_auth {#flutter_web_auth}

</summary>

[flutter_web_auth](https://pub.dev/packages/flutter_web_auth) is used behind Logto's flutter SDK. We rely on its webview-based interaction interface to open Logto's authorization pages.

:::note
This plugin uses ASWebAuthenticationSession on iOS 12+ and macOS 10.15+, SFAuthenticationSession on iOS 11, Chrome Custom Tabs on Android and opens a new window on Web.
You can build it with iOS 8+, but it is currently only supported by iOS 11 or higher.
:::

### Register the callback url on Android {#register-the-callback-url-on-android}

In order to capture the callback url from Logto's sign-in web page, you will need to register your sign-in redirectUri to the AndroidManifest.xml.

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
