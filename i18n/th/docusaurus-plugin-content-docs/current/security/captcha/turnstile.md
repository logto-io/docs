---
slug: /security/captcha/turnstile
sidebar_label: Cloudflare Turnstile
---

# Cloudflare Turnstile

Turnstile คือบริการ CAPTCHA ที่ช่วยปกป้องเว็บไซต์ของคุณจากสแปมและการใช้งานในทางที่ผิด คู่มือนี้จะแนะนำขั้นตอนการตั้งค่า Turnstile กับ Logto

## ข้อกำหนดเบื้องต้น {#prerequisites}

- บัญชี Cloudflare

## การตั้งค่า {#setup}

1. ไปที่ [Cloudflare Dashboard](https://dash.cloudflare.com/login) และเลือกบัญชีของคุณ
2. ไปที่ **Turnstile** > **Add widget**
3. กรอกแบบฟอร์มด้วยรายละเอียดต่อไปนี้:
   - **Widget name**: ชื่อใดก็ได้ที่คุณต้องการตั้งให้ widget
   - **Hostname**: โดเมน endpoint ของ Logto เช่น https://[tenant-id].logto.app
   - **Widget Mode**: ปล่อยไว้เป็นค่าเริ่มต้น

## รับ site key และ secret key {#get-the-site-key-and-secret-key}

1. ไปที่ widget ที่คุณเพิ่งสร้าง แล้วคลิก **Manage widget**
2. เลื่อนลงไปด้านล่างและคัดลอก **Site key** และ **Secret key**

## นำ UI ของคุณมาใช้ {#bring-your-ui}

หากคุณใช้ [Bring your UI](/customization/bring-your-ui/), Logto ไม่สามารถแทรกหรือรัน Turnstile ใน frontend แบบกำหนดเองของคุณโดยอัตโนมัติ หลังจากเปิดใช้ CAPTCHA ใน Logto Console แล้ว UI ของคุณต้องโหลดสคริปต์ Turnstile แสดง widget และส่งโทเค็นที่ได้กลับไปยัง Experience API

โหลดสคริปต์ Turnstile ใน UI ของคุณ:

```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```

เพิ่ม container สำหรับ widget:

```html
<div id="turnstile-container"></div>
```

ก่อนเริ่มการโต้ตอบ ให้แสดง Turnstile ด้วย site key ของคุณ และส่ง callback token เป็น `captchaToken` ใน `PUT /api/experience`:

```js
const captchaToken = await new Promise((resolve, reject) => {
  window.turnstile.render('#turnstile-container', {
    sitekey: '<siteKey>',
    callback: resolve,
    'error-callback': reject,
    size: 'flexible',
  });
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

อย่าลืมเปิดใช้งานการป้องกันบอท CAPTCHA หลังจากตั้งค่าผู้ให้บริการ CAPTCHA แล้ว

ไปที่หน้า Security ค้นหาแท็บ CAPTCHA และเปิดสวิตช์ "Enable CAPTCHA"
