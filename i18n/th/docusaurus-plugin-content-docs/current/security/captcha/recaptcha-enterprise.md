---
slug: /security/captcha/recaptcha-enterprise
sidebar_label: reCAPTCHA Enterprise
---

# reCAPTCHA Enterprise

reCAPTCHA Enterprise คือบริการจาก Google ที่ช่วยปกป้องเว็บไซต์จากการฉ้อโกงและการใช้งานที่ไม่เหมาะสมด้วยการตรวจจับบอทขั้นสูงโดยไม่รบกวนประสบการณ์ผู้ใช้ คู่มือนี้จะแนะนำขั้นตอนการตั้งค่า reCAPTCHA Enterprise กับ Logto

## ข้อกำหนดเบื้องต้น {#prerequisites}

- โปรเจกต์ Google Cloud

## ตั้งค่าคีย์ reCAPTCHA {#setup-a-recaptcha-key}

1. ไปที่ [หน้าของ reCAPTCHA ใน Google Cloud Console](https://console.cloud.google.com/security/recaptcha)
2. คลิกปุ่ม **Create key** ใกล้กับ "reCAPTCHA keys"
3. กรอกแบบฟอร์มด้วยรายละเอียดต่อไปนี้:
   - **Display name**: ชื่อใดก็ได้ที่คุณต้องการตั้งให้กับคีย์นี้
   - **Application type**: Website
   - **Domain list**: เพิ่มโดเมน endpoint ของ Logto
   - **Verification type**: เลือกระหว่าง **Score-based (invisible)** หรือ **Checkbox challenge** ซึ่งจะกำหนดว่าจะแสดง reCAPTCHA ให้ผู้ใช้อย่างไร ดูรายละเอียดเพิ่มเติมที่ [โหมดการตรวจสอบ (Verification mode)](#verification-mode)
4. หลังจากสร้างคีย์แล้ว คุณจะถูกนำไปยังหน้ารายละเอียดคีย์ ให้คัดลอก **ID**

## ตั้งค่า API key {#setup-an-api-key}

1. ไปที่ [หน้าข้อมูลรับรอง (Credentials) ของ Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. คลิกปุ่ม **Create credentials** และเลือก **API key**
3. คัดลอก API key
4. คุณสามารถเลือกจำกัด API key ให้ใช้กับ **reCAPTCHA Enterprise API** เพื่อความปลอดภัยมากขึ้น
5. อย่าลืมตั้งค่า "Application restrictions" เป็น **None** หากคุณไม่เข้าใจว่าคืออะไร

## รับ Project ID {#get-project-id}

1. คัดลอก **Project ID** จาก [หน้าแรกของ Google Cloud Console](https://console.cloud.google.com/welcome)

## โหมดการตรวจสอบ (Verification mode) {#verification-mode}

reCAPTCHA Enterprise รองรับโหมดการตรวจสอบ 2 แบบ:

- **Invisible**: การตรวจสอบแบบให้คะแนนที่ทำงานอัตโนมัติในพื้นหลังโดยไม่ต้องมีการโต้ตอบจากผู้ใช้ นี่คือโหมดเริ่มต้น
- **Checkbox**: แสดงวิดเจ็ตกล่องติ๊ก "ฉันไม่ใช่หุ่นยนต์" แบบคลาสสิกที่ต้องการการโต้ตอบจากผู้ใช้

:::note
โหมดการตรวจสอบที่คุณเลือกใน Logto ต้องตรงกับประเภทคีย์ที่คุณสร้างใน Google Cloud Console หากคุณสร้างคีย์แบบให้คะแนน ให้เลือก **Invisible** หากคุณสร้างคีย์แบบ Checkbox challenge ให้เลือก **Checkbox**
:::

## นำ UI ของคุณมาใช้ (Bring your UI) {#bring-your-ui}

หากคุณใช้ [Bring your UI](/customization/bring-your-ui/), Logto จะไม่สามารถแทรกหรือรัน reCAPTCHA ใน frontend แบบกำหนดเองของคุณโดยอัตโนมัติ หลังจากเปิดใช้งาน CAPTCHA ใน Logto Console แล้ว UI ของคุณต้องโหลดสคริปต์ reCAPTCHA Enterprise, รับ CAPTCHA token และส่งไปยัง Experience API

สำหรับโหมด **Invisible** ให้โหลดสคริปต์ด้วย site key ของคุณ:

```html
<script src="https://www.google.com/recaptcha/enterprise.js?render=<siteKey>" async defer></script>
```

หากคุณตั้งค่า custom domain ใน Logto ให้แทนที่ `www.google.com` ด้วยโดเมนนั้น เช่น `recaptcha.net`

ก่อนเริ่มการโต้ตอบ ให้ execute reCAPTCHA ด้วย action คงที่ `interaction` และส่ง token ที่ได้เป็น `captchaToken` ใน `PUT /api/experience`:

```js
const captchaToken = await grecaptcha.enterprise.execute('<siteKey>', {
  action: 'interaction',
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

สำหรับโหมด **Checkbox** ให้โหลดสคริปต์ด้วย `render=explicit` แสดงวิดเจ็ตในหน้าของคุณ และใช้ callback token เป็น `captchaToken` เมื่อเรียก `PUT /api/experience`

## โดเมนแบบกำหนดเอง (Custom domain) {#custom-domain}

โดยปกติ Logto จะโหลดสคริปต์ reCAPTCHA จาก `www.google.com` อย่างไรก็ตาม ในบางภูมิภาคที่ไม่สามารถเข้าถึงโดเมนมาตรฐานของ Google ได้ คุณสามารถกำหนดโดเมนทางเลือกได้

โดเมนที่รองรับ:

- `www.google.com` (ค่าเริ่มต้น)
- `recaptcha.net`

หากต้องการกำหนด custom domain ให้กรอกโดเมนในช่อง **Domain** ขณะตั้งค่า reCAPTCHA Enterprise ใน Logto Console

## เปิดใช้งาน CAPTCHA {#enable-captcha}

อย่าลืมเปิดใช้งานการป้องกันบอท CAPTCHA หลังจากตั้งค่าผู้ให้บริการ CAPTCHA แล้ว

ไปที่หน้า Security ค้นหาแท็บ CAPTCHA และเปิดสวิตช์ "Enable CAPTCHA"
