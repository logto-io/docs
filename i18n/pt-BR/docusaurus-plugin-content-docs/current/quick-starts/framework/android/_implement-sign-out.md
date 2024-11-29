Similar ao login, adicionamos um método `signOut` ao `LogtoViewModel.kt` para chamar a API `logtoClient.signOut`:

```kotlin
//...com outros imports
class LogtoViewModel(application: Application) : AndroidViewModel(application) {
    // ...outros códigos
    fun signOut() {
        logtoClient.signOut { logtoException ->
            logtoException?.let { println(it) }
        }
    }
}
```

Após sair, o Logto SDK limpará todas as credenciais locais, mesmo que ocorram exceções do Logto ao chamar a API `logtoClient.signOut`.

Em seguida, podemos adicionar um botão para chamar o método `signOut` em `MainActivity.kt`:

```kotlin
//...com outros imports
class MainActivity : AppCompatActivity() {
    //...outros códigos
    override fun onCreate(savedInstanceState: Bundle?) {
        //...outros códigos
        //...códigos do botão de login

        // Suponha que você tenha um botão com id `sign_out_button` no seu layout
        val signOutButton = findViewById<Button>(R.id.sign_out_button)
        signOutButton.setOnClickListener {
            logtoViewModel.signOut()
        }
    }
}
```
