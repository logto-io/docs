ใน Logto SDK เราสามารถใช้ `logtoClient.isAuthenticated` เพื่อตรวจสอบสถานะการยืนยันตัวตน (authentication status) หากผู้ใช้ลงชื่อเข้าใช้แล้ว ค่านี้จะเป็น `true` หากยังไม่ได้ลงชื่อเข้าใช้ ค่านี้จะเป็น `false`

ตอนนี้ มาเพิ่ม live data ใน `LogtoViewModel.kt` เพื่อสังเกตสถานะการยืนยันตัวตน และอัปเดตสถานะเมื่อผู้ใช้ลงชื่อเข้าใช้หรือออกจากระบบ:

```kotlin
//...with other imports
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...other codes

    // เพิ่ม live data เพื่อสังเกตสถานะการยืนยันตัวตน
    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)
    val authenticated: LiveData<Boolean>
        get() = _authenticated

    fun signIn(context: Activity) {
        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->
            logtoException?.let { println(it) }
            // อัปเดต live data
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }

    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
            // อัปเดต live data
            _authenticated.postValue(logtoClient.isAuthenticated)
        }
    }
}
```

จากนั้น เราจะสังเกต live data `authenticated` ใน `MainActivity.kt` เมื่อผู้ใช้ลงชื่อเข้าใช้แล้ว เราจะซ่อนปุ่ม sign-in และแสดงปุ่ม sign-out และในทางกลับกัน:

```kotlin
//...with other imports
class MainActivity : AppCompatActivity() {
    //...other codes
    override fun onCreate(savedInstanceState: Bundle?) {
        //...other codes
        val signInButton = findViewById<Button>(R.id.sign_in_button)
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        // ...handle button click codes

        // สังเกตสถานะการยืนยันตัวตน
        logtoViewModel.authenticated.observe(this) { authenticated ->
            if (authenticated) {
                // ผู้ใช้ได้รับการยืนยันตัวตนแล้ว
                signInButton.visibility = View.GONE
                signOutButton.visibility = View.VISIBLE
            } else {
                // ผู้ใช้ยังไม่ได้รับการยืนยันตัวตน
                signInButton.visibility = View.VISIBLE
                signOutButton.visibility = View.GONE
            }
        }
    }
}
```
