`postLogoutRedirectUri` เป็นตัวเลือกเสริม และหากไม่ได้ระบุไว้ ผู้ใช้จะถูกเปลี่ยนเส้นทางไปยังหน้าพื้นฐานของ Logto หลังจากออกจากระบบสำเร็จ (โดยจะไม่เปลี่ยนเส้นทางกลับไปยังแอปพลิเคชันของคุณ)

> **หมายเหตุ**
> ชื่อ `postLogoutRedirectUri` มาจากข้อกำหนด [OpenID Connect RP-Initiated Logout](https://openid.net/specs/openid-connect-rpinitiated-1_0.html) แม้ว่า Logto จะใช้คำว่า "sign-out" แทน "logout" แต่แนวคิดยังคงเหมือนเดิม
