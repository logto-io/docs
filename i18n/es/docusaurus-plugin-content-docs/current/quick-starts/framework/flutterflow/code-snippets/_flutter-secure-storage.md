<details>
<summary>

### flutter_secure_storage {#flutter_secure_storage}

</summary>

Usamos [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage) para implementar el almacenamiento seguro persistente de tokens multiplataforma. Bajo el capó:

- Se utiliza Keychain para iOS
- Se utiliza cifrado AES para Android.

### Configurar la versión de Android: {#config-android-version}

En [project]/android/app/build.gradle establece minSdkVersion a >= 18.

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

### Desactivar la copia de seguridad automática: {#disable-autobackup}

:::note

Por defecto, Android realiza copias de seguridad de los datos en Google Drive. Esto puede causar la excepción java.security.InvalidKeyException:Failed to unwrap key.

:::

Para evitar esto, puedes desactivar la copia de seguridad automática para tu aplicación o excluir sharedprefs de FlutterSecureStorage.

1. Para desactivar la copia de seguridad automática, ve a tu archivo de manifiesto de la aplicación y establece el valor booleano android:allowBackup:

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

2. Excluir sharedprefs de FlutterSecureStorage.

   Si necesitas habilitar el android:fullBackupContent para tu aplicación. Configura una regla de copia de seguridad para [excluir](https://developer.android.com/guide/topics/data/autobackup#IncludingFiles) las preferencias utilizadas por el plugin:

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

   Por favor, consulta [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage#configure-android-version) para más detalles.

</details>
