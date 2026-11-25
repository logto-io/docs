---
slug: /security/captcha/geetest
sidebar_label: GeeTest
---

# GeeTest

[GeeTest](https://www.geetest.com) CAPTCHA v4 เป็นบริการ CAPTCHA แบบปรับเปลี่ยนตามสถานการณ์ พร้อมแบบทดสอบที่เหมาะกับแต่ละพื้นที่ ได้รับความนิยมอย่างมากในจีนแผ่นดินใหญ่ซึ่งผู้ให้บริการระดับโลกอย่าง Google reCAPTCHA อาจเข้าถึงได้ยาก คู่มือนี้จะแนะนำขั้นตอนการตั้งค่า GeeTest CAPTCHA v4 กับ Logto

## ข้อกำหนดเบื้องต้น {#prerequisites}

- บัญชี GeeTest ที่เปิดใช้งาน CAPTCHA v4 แล้ว

## รับ CAPTCHA ID และ key {#get-the-captcha-id-and-key}

1. เข้าสู่ระบบ [แดชบอร์ด GeeTest](https://auth.geetest.com/login)
2. สร้างแอปพลิเคชันและเหตุการณ์ **CAPTCHA v4**
3. คัดลอก **CAPTCHA ID** และ **CAPTCHA key** จากแดชบอร์ด

## ตั้งค่า Logto {#configure-logto}

1. ไปที่ **Console > Security > CAPTCHA**
2. เลือก **GeeTest** เป็นผู้ให้บริการ CAPTCHA
3. กรอก **CAPTCHA ID** และ **CAPTCHA key** ที่คัดลอกมาจากแดชบอร์ด GeeTest แล้วบันทึกการเปลี่ยนแปลง

หรือคุณสามารถตั้งค่า GeeTest ผ่าน Management API (`PUT /api/captcha-provider`) โดยตั้งค่า `type` เป็น `"Geetest"` , `siteKey` เป็น CAPTCHA ID ของคุณ และ `secretKey` เป็น CAPTCHA key ของคุณ:

```json
{
  "config": {
    "type": "Geetest",
    "siteKey": "<captchaId>",
    "secretKey": "<captchaKey>"
  }
}
```

:::note
ประสบการณ์การลงชื่อเข้าใช้ในตัวของ Logto จะเริ่มต้น GeeTest v4 ในโหมด `bind` กำหนดภาษาของ UI อัตโนมัติ และอัปเดต Content Security Policy headers เพื่ออนุญาตต้นทางของ GeeTest SDK, API และ static ขณะเปิดใช้งาน GeeTest
:::

## นำ UI ของคุณมาใช้ {#bring-your-ui}

หากคุณใช้ [Bring your UI](/customization/bring-your-ui/) Logto จะไม่สามารถแทรกหรือรัน GeeTest ใน frontend แบบกำหนดเองของคุณโดยอัตโนมัติ หลังจากเปิดใช้งาน CAPTCHA ใน Logto Console แล้ว UI ของคุณต้องโหลดสคริปต์ GeeTest v4 เรียกใช้งาน challenge และส่งผลลัพธ์การตรวจสอบที่ serialize แล้วเป็น `captchaToken` ไปยัง Experience API

โหลดสคริปต์ GeeTest v4 ใน UI ของคุณ:

```html
<script src="https://static.geetest.com/v4/gt4.js" async defer></script>
```

ก่อนเริ่มโต้ตอบ ให้เริ่มต้น GeeTest v4 ในโหมด `bind` ด้วย `window.initGeetest4` เรียก `captcha.showCaptcha()` และอ่านผลลัพธ์การตรวจสอบจาก `captcha.getValidate()` ใน `onSuccess` เนื่องจาก `captcha.getValidate()` จะคืนค่า 4 ฟิลด์ (`lot_number`, `captcha_output`, `pass_token`, และ `gen_time`) ให้ serialize อ็อบเจกต์ด้วย `JSON.stringify(validate)` และส่งเป็น `captchaToken` ใน `PUT /api/experience`:

```js
const captchaToken = await new Promise((resolve, reject) => {
  window.initGeetest4(
    {
      captchaId: '<captchaId>',
      product: 'bind',
      onError: reject,
    },
    (captcha) => {
      captcha
        .onReady(() => {
          captcha.showCaptcha();
        })
        .onSuccess(() => {
          const validate = captcha.getValidate();

          if (!validate) {
            reject(new Error('Missing GeeTest validation result'));
            return;
          }

          // `validate` ประกอบด้วย: lot_number, captcha_output, pass_token, gen_time
          resolve(JSON.stringify(validate));
        })
        .onError(reject)
        .onClose(() => {
          reject(new Error('GeeTest CAPTCHA ถูกปิด'));
        });
    }
  );
});

await fetch('/api/experience', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    interactionEvent: 'SignIn',
    captchaToken,
  }),
});
```

## เปิดใช้งาน CAPTCHA {#enable-captcha}

อย่าลืมเปิดการป้องกันบอท CAPTCHA หลังจากตั้งค่าผู้ให้บริการ CAPTCHA แล้ว

ไปที่หน้า Security ค้นหาแท็บ CAPTCHA และเปิดสวิตช์ "Enable CAPTCHA"
