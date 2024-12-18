<details>
<summary>

### flutter_secure_storage {#flutter_secure_storage}

</summary>

Wir verwenden [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage), um die plattformübergreifende, persistente sichere Token-Speicherung zu implementieren. Unter der Haube:

- Keychain wird für iOS verwendet
- AES-Verschlüsselung wird für Android verwendet.

### Android-Version konfigurieren: {#config-android-version}

In [project]/android/app/build.gradle setze minSdkVersion auf >= 18.

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

### Autobackup deaktivieren: {#disable-autobackup}

:::note

Standardmäßig sichert Android Daten auf Google Drive. Dies kann die Ausnahme java.security.InvalidKeyException:Failed to unwrap key verursachen.

:::

Um dies zu vermeiden, kannst du das automatische Backup für deine App deaktivieren oder sharedprefs von FlutterSecureStorage ausschließen.

1. Um das automatische Backup zu deaktivieren, gehe zu deiner App-Manifestdatei und setze den booleschen Wert android:allowBackup:

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

2. Schließe sharedprefs von FlutterSecureStorage aus.

   Wenn du android:fullBackupContent für deine App aktivieren musst. Richte eine Backup-Regel ein, um die vom Plugin verwendeten Prefs [auszuschließen](https://developer.android.com/guide/topics/data/autobackup#IncludingFiles):

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

   Bitte sieh dir [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage#configure-android-version) für weitere Details an.

</details>
