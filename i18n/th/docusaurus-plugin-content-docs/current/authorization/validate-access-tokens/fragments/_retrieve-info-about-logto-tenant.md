คุณจะต้องใช้ค่าต่อไปนี้เพื่อยืนยันโทเค็นที่ออกโดย Logto:

- URI ของ JSON Web Key Set (JWKS): URL ไปยัง public keys ของ Logto ใช้สำหรับตรวจสอบลายเซ็นของ JWT
- ผู้ออก (Issuer): ค่าผู้ออกที่คาดหวัง (OIDC URL ของ Logto)

ขั้นแรก ให้ค้นหา endpoint ของ Logto tenant ของคุณ คุณสามารถหาได้จากหลายที่:

- ใน Logto Console ที่ **Settings** → **Domains**
- ในการตั้งค่าแอปพลิเคชันใด ๆ ที่คุณตั้งค่าใน Logto, **Settings** → **Endpoints & Credentials**

### ดึงค่าจาก OpenID Connect discovery endpoint \{#fetch-from-openid-connect-discovery-endpoint}

ค่าทั้งหมดนี้สามารถดึงได้จาก OpenID Connect discovery endpoint ของ Logto:

```
https://<your-logto-endpoint>/oidc/.well-known/openid-configuration
```

ตัวอย่างการตอบกลับ (ละเว้นฟิลด์อื่นเพื่อความกระชับ):

```json
{
  "jwks_uri": "https://your-tenant.logto.app/oidc/jwks",
  "issuer": "https://your-tenant.logto.app/oidc"
}
```

### เขียนค่าคงที่ในโค้ดของคุณ (ไม่แนะนำ) \{#hardcode-in-your-code-not-recommended}

เนื่องจาก Logto ไม่อนุญาตให้ปรับแต่ง JWKS URI หรือผู้ออก (issuer) คุณสามารถเขียนค่าคงที่เหล่านี้ไว้ในโค้ดของคุณได้ อย่างไรก็ตาม ไม่แนะนำให้ใช้วิธีนี้ในแอปพลิเคชัน production เพราะอาจเพิ่มภาระในการดูแลรักษาหากมีการเปลี่ยนแปลงค่าคอนฟิกในอนาคต

- JWKS URI: `https://<your-logto-endpoint>/oidc/jwks`
- ผู้ออก (Issuer): `https://<your-logto-endpoint>/oidc`
