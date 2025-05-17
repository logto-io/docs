<details>
<summary>

### flutter_secure_storage {#flutter_secure_storage}

</summary>

我们使用 [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage) 来实现跨平台的持久安全令牌存储。其底层实现：

- iOS 使用 Keychain
- Android 使用 AES 加密。

### 配置 Android 版本： {#config-android-version}

在 [project]/android/app/build.gradle 中将 minSdkVersion 设置为 >= 18。

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

### 禁用自动备份： {#disable-autobackup}

:::note

默认情况下，Android 会在 Google Drive 上备份数据。这可能导致异常 java.security.InvalidKeyException:Failed to unwrap key。

:::

为避免这种情况，你可以禁用应用的自动备份或从 FlutterSecureStorage 中排除 sharedprefs。

1. 要禁用自动备份，请转到应用的 manifest 文件并设置布尔值 android:allowBackup：

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

2. 从 FlutterSecureStorage 中排除 sharedprefs。

   如果你需要为应用启用 android:fullBackupContent。设置一个备份规则以 [排除](https://developer.android.com/guide/topics/data/autobackup#IncludingFiles) 插件使用的 prefs：

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

   请查看 [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage#configure-android-version) 了解更多详情。

</details>
