<details>
  <summary>

### flutter_web_auth {#flutter_web_auth}

</summary>

[flutter_web_auth](https://pub.dev/packages/flutter_web_auth) ถูกใช้เบื้องหลังใน SDK ของ Logto สำหรับ flutter เราอาศัยอินเทอร์เฟซการโต้ตอบแบบ webview ของมันเพื่อเปิดหน้าการอนุญาต (authorization) ของ Logto

:::note
ปลั๊กอินนี้ใช้ ASWebAuthenticationSession บน iOS 12+ และ macOS 10.15+, SFAuthenticationSession บน iOS 11, Chrome Custom Tabs บน Android และเปิดหน้าต่างใหม่บน Web
คุณสามารถ build ได้กับ iOS 8+ แต่ปัจจุบันรองรับเฉพาะ iOS 11 ขึ้นไปเท่านั้น
:::

### ลงทะเบียน callback url บน Android {#register-the-callback-url-on-android}

เพื่อจับ callback url จากหน้าลงชื่อเข้าใช้ของ Logto คุณจะต้องลงทะเบียน redirectUri สำหรับการลงชื่อเข้าใช้ของคุณใน AndroidManifest.xml

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
