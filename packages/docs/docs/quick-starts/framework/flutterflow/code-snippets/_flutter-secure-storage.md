<details>
<summary>

### flutter_secure_storage {#flutter_secure_storage}

</summary>

We use [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage) to implement the cross-platform persistent secure token storage. Under the hood:

- Keychain is used for iOS
- AES encryption is used for Android.

### Config Android version: {#config-android-version}

In [project]/android/app/build.gradle set minSdkVersion to >= 18.

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

### Disable autobackup: {#disable-autobackup}

:::note

By default Android backups data on Google Drive. It can cause exception java.security.InvalidKeyException:Failed to unwrap key.

:::

To avoid this, you can disable auto backup for your app or exclude sharedprefs from the FlutterSecureStorage.

1. To disable auto backup, go to your app manifest file and set the boolean value android:allowBackup:

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

2. Exclude sharedprefs from FlutterSecureStorage.

   If you need to enable the android:fullBackupContent for your app. Set up a backup rule to [exclude](https://developer.android.com/guide/topics/data/autobackup#IncludingFiles) the prefs used by the plugin:

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

   Please check [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage#configure-android-version) for more details.

</details>
