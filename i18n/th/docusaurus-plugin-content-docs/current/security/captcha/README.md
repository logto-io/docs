---
slug: /security/captcha
sidebar_label: CAPTCHA
sidebar_position: 2
---

# การป้องกันบอทด้วย CAPTCHA

การป้องกันบอทด้วย CAPTCHA ช่วยเพิ่มความปลอดภัยให้กับกระบวนการของผู้ใช้โดยการตรวจสอบว่าผู้ใช้เป็นมนุษย์ ซึ่งช่วยลดการโจมตีจากบอทได้อย่างมีนัยสำคัญ Logto รองรับผู้ให้บริการชั้นนำ เช่น Google reCAPTCHA Enterprise และ Cloudflare Turnstile

:::note
CAPTCHA จะถูกนำไปใช้กับการดำเนินการเกี่ยวกับ identifier, password, verification-code, การลงทะเบียน และการกู้คืนรหัสผ่าน แต่จะไม่ถูกนำไปใช้กับ [magic link](/end-user-flows/one-time-token) หรือ [การลงชื่อเข้าใช้ด้วย passkey](/end-user-flows/sign-up-and-sign-in/passkey-sign-in) ดังนั้นผู้ใช้ที่ลงชื่อเข้าใช้ด้วย magic link หรือ passkey จะไม่ต้องแก้โจทย์ CAPTCHA เพิ่มเติม
:::

:::note
หากคุณใช้ [Bring your UI](/customization/bring-your-ui/) การผสาน CAPTCHA ที่มีมาในระบบจะไม่ทำงานใน frontend ที่คุณปรับแต่งเอง UI ของคุณต้องโหลดสคริปต์ของผู้ให้บริการ CAPTCHA ดำเนินการ challenge และส่งโทเค็นเป็น `captchaToken` ใน `PUT /api/experience`
:::

## การเปิดใช้งานการป้องกันบอทด้วย CAPTCHA {#enabling-captcha-bot-protection}

ทำตามขั้นตอนเหล่านี้เพื่อเปิดใช้งาน CAPTCHA สำหรับกระบวนการของผู้ใช้ (การลงชื่อเข้าใช้ด้วย identifier, การลงชื่อเข้าใช้ด้วยรหัสผ่าน, การลงทะเบียน และการกู้คืนรหัสผ่าน):

1. **ไปที่การตั้งค่า**: ไปที่ **Console > Security > Bot protection**
2. **เลือกผู้ให้บริการ**: เลือกผู้ให้บริการ CAPTCHA ที่คุณต้องการ (เช่น Google reCAPTCHA Enterprise หรือ Cloudflare Turnstile)
3. **กำหนดค่า**: ทำตามคำแนะนำทางด้านซ้ายของหน้าเพื่อกำหนดค่าผู้ให้บริการ CAPTCHA ที่เลือก
4. **บันทึก**: คลิก **Save and done** เพื่อบันทึกการตั้งค่า
5. **(ไม่บังคับ) เปิดใช้งาน CAPTCHA**: CAPTCHA จะถูกเปิดใช้งานโดยอัตโนมัติในหน้าความปลอดภัยเมื่อมีการกำหนดค่าผู้ให้บริการแล้ว อย่างไรก็ตาม คุณสามารถตรวจสอบหรือปรับแต่งการตั้งค่าได้ตามต้องการ

## การพรีวิวการผสาน CAPTCHA {#previewing-captcha-integration}

คุณมีสองตัวเลือกในการพรีวิวและทดสอบการผสาน CAPTCHA:

1. **ใช้แอปพลิเคชันของคุณ**: ไปที่หน้าลงชื่อเข้าใช้ ลงทะเบียน หรือกู้คืนรหัสผ่านของแอปพลิเคชันของคุณ แล้วลองดำเนินการตามขั้นตอนของผู้ใช้
2. **แอปสาธิต**: ไปที่ **Get started** และใช้แอปสาธิตที่มีให้เพื่อทดสอบการทำงานของ CAPTCHA

ตรวจสอบให้แน่ใจว่าโจทย์ CAPTCHA ปรากฏตามที่คาดหวังในแต่ละตัวเลือก

## ผู้ให้บริการที่รองรับ {#supported-providers}

ขณะนี้เรารองรับ:

- **Google reCAPTCHA Enterprise**
- **Cloudflare Turnstile**
