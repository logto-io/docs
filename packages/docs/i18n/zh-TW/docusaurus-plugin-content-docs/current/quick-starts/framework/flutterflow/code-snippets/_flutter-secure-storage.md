<details>
<summary>

### flutter_secure_storage {#flutter_secure_storage}

</summary>

我們使用 [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage) 來實現跨平台的持久安全權杖存儲。在底層：

- iOS 使用 Keychain
- Android 使用 AES 加密。

### 配置 Android 版本：{#config-android-version}

在 [project]/android/app/build.gradle 中將 minSdkVersion 設置為 >= 18。

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

### 禁用自動備份：{#disable-autobackup}

:::note

預設情況下，Android 會在 Google Drive 上備份數據。這可能會導致例外 java.security.InvalidKeyException:Failed to unwrap key。

:::

為避免此情況，你可以禁用應用程式的自動備份或從 FlutterSecureStorage 中排除 sharedprefs。

1. 要禁用自動備份，請前往應用程式的 manifest 文件並設置布林值 android:allowBackup：

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

2. 從 FlutterSecureStorage 中排除 sharedprefs。

   如果你需要為應用程式啟用 android:fullBackupContent，請設置備份規則以 [排除](https://developer.android.com/guide/topics/data/autobackup#IncludingFiles) 插件使用的 prefs：

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

   請查看 [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage#configure-android-version) 以獲取更多詳細資訊。

</details>
