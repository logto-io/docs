<details>
<summary>

### flutter_secure_storage {#flutter_secure_storage}

</summary>

우리는 [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage) 를 사용하여 크로스 플랫폼 지속 가능한 보안 토큰 저장소를 구현합니다. 내부적으로:

- iOS에서는 Keychain이 사용됩니다.
- Android에서는 AES 암호화가 사용됩니다.

### Android 버전 구성: {#config-android-version}

[project]/android/app/build.gradle 에서 minSdkVersion 을 >= 18 로 설정하세요.

```kotlin
  android {
      ...

      defaultConfig {
          ...
          minSdkVersion 18
          ...
      }
  }
```

### 자동 백업 비활성화: {#disable-autobackup}

:::note

기본적으로 Android는 Google Drive에 데이터를 백업합니다. 이는 예외 java.security.InvalidKeyException:Failed to unwrap key 를 발생시킬 수 있습니다.

:::

이를 피하기 위해, 앱에 대한 자동 백업을 비활성화하거나 FlutterSecureStorage 에서 sharedprefs 를 제외할 수 있습니다.

1. 자동 백업을 비활성화하려면, 앱 매니페스트 파일로 이동하여 boolean 값 android:allowBackup 을 설정하세요:

   ```xml
   <manifest ... >
       ...
       <application
         android:allowBackup="false"
         android:fullBackupContent="false"
         ...
       >
           ...
       </application>
   </manifest>

   ```

2. FlutterSecureStorage 에서 sharedprefs 를 제외하세요.

   앱에 대해 android:fullBackupContent 를 활성화해야 하는 경우, 플러그인이 사용하는 prefs 를 [제외](https://developer.android.com/guide/topics/data/autobackup#IncludingFiles) 하는 백업 규칙을 설정하세요:

   ```xml
   <application ...
     android:fullBackupContent="@xml/backup_rules">
   </application>
   ```

   ```xml
   <?xml version="1.0" encoding="utf-8"?>
   <full-backup-content>
     <exclude domain="sharedpref" path="FlutterSecureStorage"/>
   </full-backup-content>
   ```

   자세한 내용은 [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage#configure-android-version) 를 확인하세요.

</details>
