<details>
<summary>

### flutter_secure_storage

</summary>

Nous utilisons [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage) pour implémenter le stockage sécurisé persistant de jetons multiplateforme. Sous le capot :

- Keychain est utilisé pour iOS
- Le chiffrement AES est utilisé pour Android.

### Configurer la version Android :

Dans [project]/android/app/build.gradle, définissez minSdkVersion sur >= 18.

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

### Désactiver la sauvegarde automatique :

:::note

Par défaut, Android sauvegarde les données sur Google Drive. Cela peut provoquer l'exception java.security.InvalidKeyException:Failed to unwrap key.

:::

Pour éviter cela, vous pouvez désactiver la sauvegarde automatique pour votre application ou exclure sharedprefs de FlutterSecureStorage.

1. Pour désactiver la sauvegarde automatique, allez dans le fichier manifeste de votre application et définissez la valeur booléenne android:allowBackup :

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

2. Exclure sharedprefs de FlutterSecureStorage.

   Si vous devez activer android:fullBackupContent pour votre application. Configurez une règle de sauvegarde pour [exclure](https://developer.android.com/guide/topics/data/autobackup#IncludingFiles) les prefs utilisées par le plugin :

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

   Veuillez consulter [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage#configure-android-version) pour plus de détails.

</details>
