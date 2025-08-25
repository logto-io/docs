```python title="flask.py"
# แทนที่พารามิเตอร์ด้วยรหัสองค์กรที่ถูกต้อง
# รหัสองค์กรที่ถูกต้องสำหรับผู้ใช้สามารถดูได้ในการอ้างสิทธิ์ (claim) ของโทเค็น ID (`organizations`)
organizationToken = await client.getOrganizationToken(organization_id)
# หรือ
organizationTokenClaims = await client.getOrganizationTokenClaims(organization_id)
```
