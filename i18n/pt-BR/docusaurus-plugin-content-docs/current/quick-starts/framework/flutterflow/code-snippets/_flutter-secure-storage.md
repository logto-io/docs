<details>
<summary>flutter_secure_storage</summary>

Usamos [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage) para implementar o armazenamento seguro persistente de tokens em várias plataformas. Sob o capô:

- Keychain é usado para iOS
- Criptografia AES é usada para Android.

### Configurar versão do Android:

Em [project]/android/app/build.gradle defina minSdkVersion para >= 18.

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

### Desativar backup automático:

:::note

Por padrão, o Android faz backup dos dados no Google Drive. Isso pode causar a exceção java.security.InvalidKeyException:Failed to unwrap key.

:::

Para evitar isso, você pode desativar o backup automático para seu aplicativo ou excluir sharedprefs do FlutterSecureStorage.

1. Para desativar o backup automático, vá para o arquivo de manifesto do seu aplicativo e defina o valor booleano android:allowBackup:

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

2. Excluir sharedprefs do FlutterSecureStorage.

   Se você precisar habilitar o android:fullBackupContent para seu aplicativo. Configure uma regra de backup para [excluir](https://developer.android.com/guide/topics/data/autobackup#IncludingFiles) as prefs usadas pelo plugin:

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

   Por favor, verifique [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage#configure-android-version) para mais detalhes.

</details>
