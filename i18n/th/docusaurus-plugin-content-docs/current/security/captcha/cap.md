---
slug: /security/captcha/cap
sidebar_label: Cap
---

# Cap

[Cap](https://capjs.js.org) คือโซลูชัน CAPTCHA แบบโอเพ่นซอร์สที่โฮสต์เอง โดยอาศัยหลักฐานการทำงาน (proof-of-work) โดยไม่ต้องใช้ปริศนาภาพหรือบริการจากบุคคลที่สาม เหมาะสำหรับภูมิภาคที่ไม่สามารถเข้าถึงบริการ CAPTCHA ภายนอกได้ คู่มือนี้จะแนะนำวิธีตั้งค่า Cap กับ Logto

## ข้อกำหนดเบื้องต้น {#prerequisites}

- มีอินสแตนซ์ [Cap Standalone](https://capjs.js.org/guide/capd/index.html) ที่เข้าถึงได้จากสาธารณะผ่าน HTTPS เนื่องจากทั้งหน้าลงชื่อเข้าใช้ในเบราว์เซอร์และ Logto ต้องเข้าถึงได้

## สร้าง site key {#create-a-site-key}

1. เปิดแดชบอร์ดของอินสแตนซ์ Cap Standalone ของคุณและเข้าสู่ระบบด้วย admin key
2. สร้าง site key ใหม่ หากคุณจำกัด CORS origins ให้เพิ่มโดเมน endpoint ของ Logto เช่น `https://[tenant-id].logto.app`
3. คัดลอก **Site key** และ **Secret key** โดย secret key จะแสดงเพียงครั้งเดียวเท่านั้น

## ตั้งค่า Logto {#configure-logto}

ใน **Console > Security > CAPTCHA** เลือก **Cap** และกรอกรายละเอียดดังต่อไปนี้:

- **Cap endpoint**: URL หลักของอินสแตนซ์ Cap Standalone ของคุณ เช่น `https://cap.example.com`
- **Site key**: site key ที่คุณคัดลอกไว้ข้างต้น
- **Secret key**: secret key ที่คุณคัดลอกไว้ข้างต้น

หรือคุณสามารถตั้งค่า Cap ผ่าน Management API ด้วย `PUT /api/captcha-provider`:

```json
{
  "config": {
    "type": "Cap",
    "endpoint": "https://cap.example.com",
    "siteKey": "<siteKey>",
    "secretKey": "<secretKey>"
  }
}
```

:::note
ควรใช้ HTTPS สำหรับ Cap endpoint ของคุณในสภาพแวดล้อม production เบราว์เซอร์จะบล็อกคำขอ HTTP แบบผสมจากหน้าลงชื่อเข้าใช้ที่เป็น HTTPS และ HTTP จะส่ง secret key แบบไม่เข้ารหัส
:::

## หมายเหตุด้านความปลอดภัย {#security-note}

กลไก challenge ของ Cap จะประเมินสคริปต์ในเบราว์เซอร์เพื่อตรวจจับบอท ขณะที่ Cap ถูกเปิดใช้งาน หน้าลงชื่อเข้าใช้ในตัวของ Logto จะอนุญาต Cap origin, blob workers, WebAssembly (`'wasm-unsafe-eval'`) และการประเมิน JavaScript แบบไดนามิก (`'unsafe-eval'`) ใน Content Security Policy

## นำ UI ของคุณมาใช้เอง {#bring-your-ui}

หากคุณใช้ [Bring your UI](/customization/bring-your-ui/) Logto จะไม่สามารถแทรกหรือรัน Cap ใน frontend แบบกำหนดเองของคุณโดยอัตโนมัติ หลังจากเปิดใช้งาน CAPTCHA ใน Logto Console แล้ว UI ของคุณต้องโหลด `@cap.js/widget` แสดง widget และส่งโทเค็นที่แก้ไขแล้วไปยัง Experience API

โหลด `@cap.js/widget` ใน UI ของคุณเอง (หรือติดตั้งและ bundle ใน build frontend ของคุณ):

```html
<script src="https://cdn.jsdelivr.net/npm/@cap.js/widget" async></script>
```

:::note
หากคุณโหลด `@cap.js/widget` จาก CDN แทนที่จะ bundle เอง ให้เพิ่ม origin ของ CDN (เช่น `https://cdn.jsdelivr.net`) ไปที่ `scriptSrc` และ `connectSrc` ใน [custom CSP sources](/customization/bring-your-ui/#configure-custom-csp-sources) ของคุณ เพื่อให้ widget script และ WebAssembly solver โหลดได้
:::

เพิ่ม element `<cap-widget>` ที่ชี้ไปยัง Cap Standalone endpoint และ site key ของคุณ:

```html
<cap-widget data-cap-api-endpoint="https://cap.example.com/<siteKey>/"></cap-widget>
```

ฟัง event `solve` (`event.detail.token`) ส่งโทเค็นแบบใช้ครั้งเดียวเป็น `captchaToken` ใน `PUT /api/experience` และรีเซ็ต widget ด้วย `widget.reset()` หลังใช้งานโทเค็นแล้ว:

```js
await customElements.whenDefined('cap-widget');
const widget = document.querySelector('cap-widget');

const captchaToken =
  widget.token ??
  (await new Promise((resolve, reject) => {
    const cleanup = () => {
      widget.removeEventListener('solve', onSolve);
      widget.removeEventListener('error', onError);
    };

    const onSolve = (event) => {
      cleanup();
      resolve(event.detail.token);
    };

    const onError = (event) => {
      cleanup();
      reject(new Error(event.detail?.message ?? 'Cap verification failed'));
    };

    widget.addEventListener('solve', onSolve);
    widget.addEventListener('error', onError);
    widget.solve().catch((error) => {
      cleanup();
      reject(error);
    });
  }));

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
  // Cap tokens are single-use; reset the widget after consuming the token.
  widget.reset();
}
```

## เปิดใช้งาน CAPTCHA {#enable-captcha}

อย่าลืมเปิดใช้งานการป้องกันบอท CAPTCHA หลังจากตั้งค่าผู้ให้บริการ CAPTCHA แล้ว

ไปที่หน้า Security ค้นหาแท็บ CAPTCHA และเปิดสวิตช์ "Enable CAPTCHA"
