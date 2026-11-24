---
slug: /security/captcha/friendly-captcha
sidebar_label: Friendly Captcha
---

# Friendly Captcha

[Friendly Captcha](https://friendlycaptcha.com) v2 เป็นบริการ CAPTCHA ที่เน้นความเป็นส่วนตัวและสอดคล้องกับ GDPR โดยใช้หลักฐานการทำงาน (proof-of-work) โดยไม่มีปริศนาภาพให้แก้ คู่มือนี้จะแนะนำวิธีตั้งค่า Friendly Captcha กับ Logto

## ข้อกำหนดเบื้องต้น {#prerequisites}

- บัญชี Friendly Captcha

## รับ sitekey และ API key {#get-the-sitekey-and-api-key}

1. เข้าสู่ระบบ [Friendly Captcha dashboard](https://app.friendlycaptcha.com) แล้วไปที่ **Applications**
2. คลิก **+ New Application** และเลือก **v2**
3. หากคุณจำกัด allowed origins ในแอปพลิเคชัน ให้เพิ่มโดเมนปลายทาง Logto ของคุณ (เช่น `https://[tenant-id].logto.app`)
4. ให้เปิดใช้งาน global endpoint (`global.frcapi.com`) ไว้ เว้นแต่คุณจะจำกัด sitekey เฉพาะ [EU endpoint](https://developer.friendlycaptcha.com/docs/v2/guides/eu-endpoint) (`eu.frcapi.com` ใช้ได้ในแผน Advanced และ Enterprise) แล้วคัดลอก **Sitekey** (ขึ้นต้นด้วย `FC`)
5. เปิด **API Keys** ใน dashboard สร้าง **API key** ใหม่ แล้วคัดลอก

## ตั้งค่า Logto {#configure-logto}

1. ไปที่ **Console > Security > CAPTCHA** เลือก **Friendly Captcha** แล้วกรอก **Site key** และ **API key** โดยให้ **API endpoint** เป็น **Global** หรือเลือก **EU** หาก sitekey ของคุณถูกจำกัดเฉพาะ EU endpoint
2. หรือจะตั้งค่าผ่าน Management API (`PUT /api/captcha-provider`) ก็ได้ โดย `apiEndpoint` เป็นตัวเลือกและรับค่า `"global"` (ค่าเริ่มต้น) หรือ `"eu"`:

```json
{
  "config": {
    "type": "FriendlyCaptcha",
    "siteKey": "<siteKey>",
    "secretKey": "<apiKey>",
    "apiEndpoint": "global"
  }
}
```

## นำ UI ของคุณมาใช้ {#bring-your-ui}

หากคุณใช้ [Bring your UI](/customization/bring-your-ui/) Logto จะไม่สามารถแทรกหรือรัน Friendly Captcha ใน frontend แบบกำหนดเองของคุณโดยอัตโนมัติ หลังจากเปิดใช้งาน CAPTCHA ใน Logto Console แล้ว UI ของคุณต้องโหลด `@friendlycaptcha/sdk` ติดตั้ง widget รอรับ completion token และส่งไปยัง Experience API

ติดตั้ง Friendly Captcha v2 SDK ในโปรเจกต์ UI ของคุณ:

```bash
npm install @friendlycaptcha/sdk
```

เพิ่ม container สำหรับ widget:

```html
<div id="friendly-captcha-container"></div>
```

ติดตั้ง widget ด้วย `FriendlyCaptchaSDK` รอ `frc:widget.complete` เพื่ออ่าน `event.detail.response` ส่งโทเค็นแบบใช้ครั้งเดียวนี้เป็น `captchaToken` ใน `PUT /api/experience` และรีเซ็ตด้วย `widget.reset()` หลังใช้โทเค็น เพื่อให้การลองใหม่ได้โทเค็นใหม่:

```js
import { FriendlyCaptchaSDK } from '@friendlycaptcha/sdk';

// สร้าง SDK instance
const sdk = new FriendlyCaptchaSDK();
const element = document.querySelector('#friendly-captcha-container');

const widget = sdk.createWidget({
  element,
  sitekey: '<siteKey>',
  // ตั้งค่าเป็น 'eu' หากคุณเลือก API endpoint เป็น EU ใน Logto
  apiEndpoint: 'global',
});

const getCaptchaToken = () => {
  if (widget.getState() === 'completed') {
    return Promise.resolve(widget.getResponse());
  }

  return new Promise((resolve, reject) => {
    const cleanup = () => {
      widget.removeEventListener('frc:widget.complete', onComplete);
      widget.removeEventListener('frc:widget.error', onError);
    };

    const onComplete = (event) => {
      cleanup();
      resolve(event.detail.response);
    };

    const onError = (event) => {
      cleanup();
      reject(new Error(event.detail.error.detail || event.detail.error.code));
    };

    widget.addEventListener('frc:widget.complete', onComplete);
    widget.addEventListener('frc:widget.error', onError);

    if (['init', 'reset', 'unactivated'].includes(widget.getState())) {
      widget.start();
    }
  });
};

// ก่อนเริ่มอินเทอร์แอคชัน ให้รับโทเค็นแบบใช้ครั้งเดียว:
const captchaToken = await getCaptchaToken();

try {
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
} finally {
  // โทเค็นใช้ได้ครั้งเดียว รีเซ็ต widget เพื่อให้การลองใหม่ได้โทเค็นใหม่
  widget.reset();
}
```

## เปิดใช้งาน CAPTCHA {#enable-captcha}

อย่าลืมเปิดใช้งานการป้องกันบอท CAPTCHA หลังจากตั้งค่าผู้ให้บริการ CAPTCHA แล้ว

ไปที่หน้า Security เลือกแท็บ CAPTCHA แล้วเปิดสวิตช์ "Enable CAPTCHA"
