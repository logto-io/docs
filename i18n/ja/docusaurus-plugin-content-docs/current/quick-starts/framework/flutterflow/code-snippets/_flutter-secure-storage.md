<details>
<summary>flutter_secure_storage</summary>

クロスプラットフォームの永続的なセキュアトークンストレージを実装するために、[flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage) を使用しています。内部では：

- iOS では Keychain が使用されます
- Android では AES 暗号化が使用されます。

### Android バージョンの設定：

[project]/android/app/build.gradle で minSdkVersion を >= 18 に設定します。

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

### 自動バックアップを無効にする：

:::note

デフォルトでは、Android は Google Drive にデータをバックアップします。これにより、例外 java.security.InvalidKeyException:Failed to unwrap key が発生する可能性があります。

:::

これを避けるために、アプリの自動バックアップを無効にするか、FlutterSecureStorage から sharedprefs を除外することができます。

1. 自動バックアップを無効にするには、アプリのマニフェストファイルに移動し、ブール値 android:allowBackup を設定します：

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

2. FlutterSecureStorage から sharedprefs を除外します。

   アプリの android:fullBackupContent を有効にする必要がある場合は、プラグインで使用される prefs を [除外](https://developer.android.com/guide/topics/data/autobackup#IncludingFiles) するバックアップルールを設定します：

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

   詳細については、[flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage#configure-android-version) を確認してください。

</details>
