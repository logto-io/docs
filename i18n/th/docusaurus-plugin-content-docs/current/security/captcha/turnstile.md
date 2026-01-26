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
   - **Widget Mode**: ปล่อยไว้ตามค่าเริ่มต้น

## รับ site key และ secret key {#get-the-site-key-and-secret-key}

1. ไปที่ widget ที่คุณเพิ่งสร้าง แล้วคลิก **Manage widget**
2. เลื่อนลงไปด้านล่างและคัดลอก **Site key** และ **Secret key**

## เปิดใช้งาน CAPTCHA {#enable-captcha}

อย่าลืมเปิดใช้งานการป้องกันบอท CAPTCHA หลังจากที่คุณตั้งค่าผู้ให้บริการ CAPTCHA แล้ว

ไปที่หน้าความปลอดภัย (Security) ค้นหาแท็บ CAPTCHA และเปิดสวิตช์ "Enable CAPTCHA"
