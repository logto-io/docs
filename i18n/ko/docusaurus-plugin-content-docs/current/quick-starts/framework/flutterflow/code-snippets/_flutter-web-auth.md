<details>
  <summary>

### flutter_web_auth {#flutter_web_auth}

</summary>

[flutter_web_auth](https://pub.dev/packages/flutter_web_auth) 는 Logto의 flutter SDK 뒤에서 사용됩니다. 우리는 Logto의 인가 (Authorization) 페이지를 열기 위해 웹뷰 기반 상호작용 인터페이스에 의존합니다.

:::note
이 플러그인은 iOS 12+ 및 macOS 10.15+에서는 ASWebAuthenticationSession을, iOS 11에서는 SFAuthenticationSession을, Android에서는 Chrome Custom Tabs를 사용하며, 웹에서는 새 창을 엽니다.
iOS 8+로 빌드할 수 있지만, 현재는 iOS 11 이상에서만 지원됩니다.
:::

### Android에서 콜백 URL 등록하기 {#register-the-callback-url-on-android}

Logto의 로그인 웹 페이지에서 콜백 URL을 캡처하려면, AndroidManifest.xml에 로그인 redirectUri를 등록해야 합니다.

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
