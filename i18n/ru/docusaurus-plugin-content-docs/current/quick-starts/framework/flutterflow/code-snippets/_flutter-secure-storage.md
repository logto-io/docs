<details>
<summary>

### flutter_secure_storage {#flutter_secure_storage}

</summary>

Мы используем [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage) для реализации кроссплатформенного постоянного безопасного хранения токенов. Под капотом:

- Keychain используется для iOS
- AES шифрование используется для Android.

### Настройка версии Android: {#config-android-version}

В [project]/android/app/build.gradle установите minSdkVersion на >= 18.

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

### Отключение автокопирования: {#disable-autobackup}

:::note

По умолчанию Android создает резервные копии данных на Google Drive. Это может вызвать исключение java.security.InvalidKeyException:Failed to unwrap key.

:::

Чтобы избежать этого, вы можете отключить автоматическое копирование для вашего приложения или исключить sharedprefs из FlutterSecureStorage.

1. Чтобы отключить автоматическое копирование, перейдите в файл манифеста вашего приложения и установите логическое значение android:allowBackup:

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

2. Исключите sharedprefs из FlutterSecureStorage.

   Если вам нужно включить android:fullBackupContent для вашего приложения. Настройте правило резервного копирования, чтобы [исключить](https://developer.android.com/guide/topics/data/autobackup#IncludingFiles) prefs, используемые плагином:

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

   Пожалуйста, ознакомьтесь с [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage#configure-android-version) для получения более подробной информации.

</details>
