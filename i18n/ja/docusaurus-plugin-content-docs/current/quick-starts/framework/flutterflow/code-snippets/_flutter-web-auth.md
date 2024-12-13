<details>
  <summary>

### flutter_web_auth

</summary>

[flutter_web_auth](https://pub.dev/packages/flutter_web_auth) は Logto の flutter SDK の背後で使用されます。Logto の認可 (Authorization) ページを開くために、その webview ベースのインタラクションインターフェースに依存しています。

:::note
このプラグインは、iOS 12+ および macOS 10.15+ では ASWebAuthenticationSession、iOS 11 では SFAuthenticationSession、Android では Chrome Custom Tabs を使用し、Web では新しいウィンドウを開きます。
iOS 8+ でビルドできますが、現在サポートされているのは iOS 11 以上のみです。
:::

### Android でコールバック URL を登録する

Logto のサインインウェブページからコールバック URL をキャプチャするためには、サインイン redirectUri を AndroidManifest.xml に登録する必要があります。

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
