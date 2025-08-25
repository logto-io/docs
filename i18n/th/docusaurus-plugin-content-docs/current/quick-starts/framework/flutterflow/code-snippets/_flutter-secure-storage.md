<details>
<summary>

### flutter_secure_storage {#flutter_secure_storage}

</summary>

เราใช้ [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage) เพื่อสร้างการจัดเก็บโทเค็นที่ปลอดภัยแบบถาวรข้ามแพลตฟอร์ม เบื้องหลัง:

- ใช้ Keychain สำหรับ iOS
- ใช้การเข้ารหัส AES สำหรับ Android

### ตั้งค่าเวอร์ชัน Android: {#config-android-version}

ใน [project]/android/app/build.gradle ตั้งค่า minSdkVersion เป็น >= 18

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

### ปิดใช้งาน autobackup: {#disable-autobackup}

:::note

โดยปกติ Android จะสำรองข้อมูลไปยัง Google Drive อัตโนมัติ ซึ่งอาจทำให้เกิด exception java.security.InvalidKeyException:Failed to unwrap key

:::

เพื่อหลีกเลี่ยงปัญหานี้ คุณสามารถปิดการสำรองข้อมูลอัตโนมัติสำหรับแอปของคุณ หรือยกเว้น sharedprefs จาก FlutterSecureStorage

1. หากต้องการปิดการสำรองข้อมูลอัตโนมัติ ให้ไปที่ไฟล์ manifest ของแอปและตั้งค่าค่า boolean android:allowBackup:

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

2. ยกเว้น sharedprefs จาก FlutterSecureStorage

   หากคุณจำเป็นต้องเปิดใช้งาน android:fullBackupContent สำหรับแอปของคุณ ให้ตั้งค่ากฎการสำรองข้อมูลเพื่อ [ยกเว้น](https://developer.android.com/guide/topics/data/autobackup#IncludingFiles) prefs ที่ปลั๊กอินนี้ใช้:

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

   โปรดตรวจสอบรายละเอียดเพิ่มเติมที่ [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage#configure-android-version)

</details>
