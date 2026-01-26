หลังจากผู้ใช้ลงชื่อเข้าใช้แล้ว Logto จะเปลี่ยนเส้นทางผู้ใช้ไปยัง callback URL ที่คุณตั้งค่าไว้ใน Logto Console ในตัวอย่างนี้ เราใช้ `/callback` เป็น callback URL:

```python
@app.route("/callback")
async def callback():
    try:
        await client.handleSignInCallback(request.url) # จัดการกระบวนการต่าง ๆ
        return redirect("/") # เปลี่ยนเส้นทางผู้ใช้ไปยังหน้าแรกหลังลงชื่อเข้าใช้สำเร็จ
    except Exception as e:
        # เปลี่ยนส่วนนี้เป็นตรรกะจัดการข้อผิดพลาดของคุณ
        return "Error: " + str(e)
```
