"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[34806],{3210:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>s});var o=t(86070),i=t(15658);const s=[{value:"Register a Facebook developer account",id:"register-a-facebook-developer-account",level:3},{value:"Set up a Facebook app",id:"set-up-a-facebook-app",level:3},{value:"Test sign-in with Facebook&#39;s test users",id:"test-sign-in-with-facebooks-test-users",level:3},{value:"Publish Facebook sign-in settings",id:"publish-facebook-sign-in-settings",level:3},{value:"References",id:"references",level:3},{value:"Config types",id:"config-types",level:4},{value:"Facebook developer docs",id:"facebook-developer-docs",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"register-a-facebook-developer-account",children:"Register a Facebook developer account"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/register/",children:"Register as a Facebook Developer"})," if you don't have one."]}),"\n",(0,o.jsx)(n.h3,{id:"set-up-a-facebook-app",children:"Set up a Facebook app"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Visit the ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/apps",children:"Apps"})," page."]}),"\n",(0,o.jsxs)(n.li,{children:["Click your existing app or ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/create-an-app",children:"create a new one"})," if needed.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The selected ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/create-an-app/app-dashboard/app-types",children:"app type"})," is up to you, but it should have the product ",(0,o.jsx)(n.em,{children:"Facebook Login"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:'On the app dashboard page, scroll to the "Add a product" section and click the "Set up" button on the "Facebook Login" card.'}),"\n",(0,o.jsx)(n.li,{children:'Skip the Facebook Login Quickstart page, and click the sidebar -> "Products" -> "Facebook Login" -> "Settings".'}),"\n",(0,o.jsxs)(n.li,{children:["In the Facebook Login Settings page, fill ",(0,o.jsx)(n.code,{children:"${your_logto_origin}/callback/${connector_id}"}),' in the "Valid OAuth Redirect URIs" field. The ',(0,o.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page. E.g.:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"https://your-logto-domain.com/callback/${connector_id}"})," for production"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"https://localhost:3001/callback/${connector_id}"})," for testing in the local environment"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:'Click the "Save changes" button at the bottom right corner.'}),"\n",(0,o.jsxs)(n.li,{children:['In the Facebook app dashboard page, click the sidebar -> "Settings" -> "Basic" and then you will get the ',(0,o.jsx)(n.strong,{children:"App ID"})," and ",(0,o.jsx)(n.strong,{children:"App secret"}),". The ",(0,o.jsx)(n.em,{children:"App ID"})," is the ",(0,o.jsx)(n.code,{children:"clientId"})," in your Logto connector conifg and the ",(0,o.jsx)(n.em,{children:"App secret"})," is the ",(0,o.jsx)(n.code,{children:"clientSecret"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"test-sign-in-with-facebooks-test-users",children:"Test sign-in with Facebook's test users"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the accounts of the test, developer, and admin users to test sign-in with the related app under both development and live ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes",children:"app modes"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:['You can also set the app to "live mode" by ',(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#switching-modes",children:"switching modes"})," so that any Facebook user can sign in with the app."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'In the app dashboard page, click the sidebar -> "Roles" -> "Test Users".'}),"\n",(0,o.jsx)(n.li,{children:'Click the "Create test users" button to create a testing user.'}),"\n",(0,o.jsx)(n.li,{children:'Click the "Options" button of the existing test user, and you will see more operations, e.g., "Change name and password".'}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"publish-facebook-sign-in-settings",children:"Publish Facebook sign-in settings"}),"\n",(0,o.jsxs)(n.p,{children:["Usually, only the test, admin, and developer users can sign in with the related app under ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#development-mode",children:"development mode"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To enable normal Facebook users sign-in with the app in the production environment, you may need to switch your Facebook app to ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#live-mode",children:"live mode"})}),", depending on the app type.\nE.g., the pure ",(0,o.jsx)(n.em,{children:"business type"})," app doesn't have the \"live\" switch button, but it won't block you from using it."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:'In the Facebook app dashboard page, click the sidebar -> "Settings" -> "Basic".'}),"\n",(0,o.jsx)(n.li,{children:'Fill out the "Privacy Policy URL" and "User data deletion" fields on the panel if required.'}),"\n",(0,o.jsx)(n.li,{children:'Click the "Save changes" button at the bottom right corner.'}),"\n",(0,o.jsx)(n.li,{children:'Click the "Live" switch button on the app top bar.'}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,o.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientSecret"}),(0,o.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"facebook-developer-docs",children:"Facebook developer docs"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/",children:"Facebook Login - Documentation - Facebook for Developers"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/guides/advanced/manual-flow/",children:"Manually Build a Login Flow"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/guides/permissions",children:"Permissions Guide"})}),"\n"]})]})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},2634:(e,n,t)=>{t.d(n,{Ay:()=>R,RM:()=>y});var o=t(86070),i=t(15658);function s(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The example is based on ",(0,o.jsx)(n.a,{href:"https://developer.android.com/reference/android/view/View",children:"View system"})," and ",(0,o.jsx)(n.a,{href:"https://developer.android.com/topic/libraries/architecture/viewmodel",children:"View Model"}),", but the concepts are the same when using ",(0,o.jsx)(n.a,{href:"https://developer.android.com/jetpack/compose",children:"Jetpack Compose"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"The example is written in Kotlin, but the concepts are the same for Java."}),"\n",(0,o.jsxs)(n.li,{children:["Both ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/kotlin/tree/master/android-sample-kotlin",children:"Kotlin"})," and ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/kotlin/tree/master/android-sample-java",children:"Java"})," sample projects are available on our ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/kotlin",children:"SDK repository"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The tutorial video is available on our ",(0,o.jsx)(n.a,{href:"https://youtu.be/_GSiYqTLnak",children:"YouTube channel"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}function r(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In Logto SDK, we can use ",(0,o.jsx)(n.code,{children:"logtoClient.isAuthenticated"})," to check the authentication status, if the user is signed in, the value will be ",(0,o.jsx)(n.code,{children:"true"}),", otherwise, the value will be ",(0,o.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Now, let's add a live data to ",(0,o.jsx)(n.code,{children:"LogtoViewModel.kt"})," to observe the authentication status, and update the status when the user signed in or signed out:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n\n    // Add a live data to observe the authentication status\n    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)\n    val authenticated: LiveData<Boolean>\n        get() = _authenticated\n\n    fun signIn(context: Activity) {\n        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->\n            logtoException?.let { println(it) }\n            // Update the live data\n            _authenticated.postValue(logtoClient.isAuthenticated)\n        }\n    }\n\n    fun signOut() {\n        logtoClient.signOut { logtoException ->\n            logtoException?.let { println(it) }\n            // Update the live data\n            _authenticated.postValue(logtoClient.isAuthenticated)\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Then, we observe the ",(0,o.jsx)(n.code,{children:"authenticated"})," live data in ",(0,o.jsx)(n.code,{children:"MainActivity.kt"}),", when the user is signed in, we hide the sign-in button and show the sign-out button and vice versa:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    //...other codes\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n        val signInButton = findViewById<Button>(R.id.sign_in_button)\n        val signOutButton = findViewById<Button>(R.id.sign_out_button)\n        // ...handle button click codes\n\n        // Observe the authentication status\n        logtoViewModel.authenticated.observe(this) { authenticated ->\n            if (authenticated) {\n                // The user is authenticated\n                signInButton.visibility = View.GONE\n                signOutButton.visibility = View.VISIBLE\n            } else {\n                // The user is not authenticated\n                signInButton.visibility = View.VISIBLE\n                signOutButton.visibility = View.GONE\n            }\n        }\n    }\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}const c=t.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png";var d=t(69043);const h=[...d.RM];function p(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Before starting, you need to add a redirect URI in the Admin Console for your application."}),"\n",(0,o.jsxs)(n.p,{children:["In Android, the redirect URI follows the pattern: ",(0,o.jsx)(n.code,{children:"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"LOGTO_REDIRECT_SCHEME"})," should be a custom scheme in the reverse domain format."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"YOUR_APP_PACKAGE"})," is your app package name."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Assuming you treat ",(0,o.jsx)(n.code,{children:"io.logto.android"})," as the custom ",(0,o.jsx)(n.code,{children:"LOGTO_REDIRECT_SCHEME"}),", and ",(0,o.jsx)(n.code,{children:"io.logto.sample"})," is your app package name, the Redirect URI should be ",(0,o.jsx)(n.code,{children:"io.logto.android://io.logto.sample/callback"}),"."]}),"\n",(0,o.jsx)(d.Ay,{figureSrc:c,redirectUri:"io.logto.android://io.logto.sample/callback"}),"\n",(0,o.jsxs)(n.p,{children:["After the redirect URI is configured, we add a ",(0,o.jsx)(n.code,{children:"signIn"})," method to your ",(0,o.jsx)(n.code,{children:"LogtoViewModel.kt"}),", which will call ",(0,o.jsx)(n.code,{children:"logtoClient.signIn"})," API to invoke the Logto sign-in page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n    fun signIn(context: Activity) {\n        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->\n            logtoException?.let { println(it) }\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Now setup on-click listener for the sign-in button in your ",(0,o.jsx)(n.code,{children:"MainActivity.kt"})," to call the ",(0,o.jsx)(n.code,{children:"signIn"})," method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n\n        // Assume you have a button with id `sign_in_button` in your layout\n        val signInButton = findViewById<Button>(R.id.sign_in_button)\n        signInButton.setOnClickListener {\n            logtoViewModel.signIn(this)\n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"When you click the button, the Logto SDK will navigate to the Logto sign-in page."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}function g(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Similar to sign-in, we add a ",(0,o.jsx)(n.code,{children:"signOut"})," method to ",(0,o.jsx)(n.code,{children:"LogtoViewModel.kt"})," to call ",(0,o.jsx)(n.code,{children:"logtoClient.signOut"})," API:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n    fun signOut() {\n        logtoClient.signOut { logtoException ->\n            logtoException?.let { println(it) }\n        }\n    }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After you signed out, the Logto SDK will clear all local credentials even though Logto exceptions occurred when calling ",(0,o.jsx)(n.code,{children:"logtoClient.signOut"})," API."]}),"\n",(0,o.jsxs)(n.p,{children:["Then, we can add a button to call the ",(0,o.jsx)(n.code,{children:"signOut"})," method in ",(0,o.jsx)(n.code,{children:"MainActivity.kt"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    //...other codes\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n        //...sign-in button codes\n\n        // Assume you have a button with id `sign_out_button` in your layout\n        val signOutButton = findViewById<Button>(R.id.sign_out_button)\n        signOutButton.setOnClickListener {\n            logtoViewModel.signOut()\n        }\n    }\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}function x(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:"LogtoViewModel.kt"})," and init ",(0,o.jsx)(n.code,{children:"LogtoClient"})," in this view model:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="LogtoViewModel.kt"',children:'//...with other imports\nimport io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\n\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    private val logtoConfig = LogtoConfig(\n          endpoint = "<your-logto-endpoint>",\n          appId = "<your-app-id>",\n          scopes = null,\n          resources = null,\n          usingPersistStorage = true,\n    )\n\n    private val logtoClient = LogtoClient(logtoConfig, application)\n\n    companion object {\n        val Factory: ViewModelProvider.Factory = object : ViewModelProvider.Factory {\n            @Suppress("UNCHECKED_CAST")\n            override fun <T : ViewModel> create(\n                modelClass: Class<T>,\n                extras: CreationExtras\n            ): T {\n                // Get the Application object from extras\n                val application = checkNotNull(extras[APPLICATION_KEY])\n                return LogtoViewModel(application) as T\n            }\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["then, create a ",(0,o.jsx)(n.code,{children:"LogtoViewModel"})," for your ",(0,o.jsx)(n.code,{children:"MainActivity.kt"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="MainActivity.kt"',children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    private val logtoViewModel: LogtoViewModel by viewModels { LogtoViewModel.Factory }\n    //...other codes\n}\n"})})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}var b=t(78551),f=t(77501);function v(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"The minimum supported Android API level of Logto Android SDK is level 24."})}),"\n",(0,o.jsxs)(n.p,{children:["Before you install Logto Android SDK, ensure ",(0,o.jsx)(n.code,{children:"mavenCentral()"})," is added to your repository configuration in the Gradle project build file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="settings.gradle.kts"',children:"dependencyResolutionManagement {\n  repositories {\n    mavenCentral()\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Add Logto Android SDK to your dependencies:"}),"\n",(0,o.jsxs)(f.A,{children:[(0,o.jsx)(b.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.gradle.kts"',children:'dependencies {\n  implementation("io.logto.sdk:android:1.1.3")\n}\n'})})}),(0,o.jsx)(b.A,{value:"groovy",label:"Groovy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:"dependencies {\n  implementation 'io.logto.sdk:android:1.1.3'\n}\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Since the SDK needs internet access, you need to add the following permission to your ",(0,o.jsx)(n.code,{children:"AndroidManifest.xml"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",metastring:'title="AndroidManifest.xml"',children:'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n  xmlns:tools="http://schemas.android.com/tools">\n\n  \x3c!-- add internet permission --\x3e\n  <uses-permission android:name="android.permission.INTERNET" />\n\n  \x3c!-- other configurations... --\x3e\n</manifest>\n'})})]})}function k(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(v,{...e})}):v(e)}var w=t(92409);const y=[{value:"Installation",id:"installation",level:3},{value:"Init LogtoClient",id:"init-logtoclient",level:3},{value:"Implement sign-in",id:"implement-sign-in",level:3},...h,{value:"Implement sign-out",id:"implement-sign-out",level:3},{value:"Handle authentication status",id:"handle-authentication-status",level:3},...w.RM];function A(e){const n={h3:"h3",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(k,{}),"\n",(0,o.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,o.jsx)(j,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,o.jsx)(u,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,o.jsx)(m,{}),"\n",(0,o.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,o.jsx)(l,{}),"\n",(0,o.jsx)(w.Ay,{sdk:"Android"})]})}function R(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(A,{...e})}):A(e)}},37391:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function a(e){const n={img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social connectors". From there, click "Add social connector".'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Connector tab",src:t(28084).A+"",width:"3352",height:"1226"})}),"\n",(0,o.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,o.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,o.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},23471:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>a});var o=t(86070),i=t(15658);const s=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",a=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function r(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Get Started",src:t(13885).A+"",width:"2354",height:"588"})}),"\n",(0,o.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,o.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,o.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Framework List",src:t(81684).A+"",width:"3626",height:"2804"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,o.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,o.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,o.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},42969:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function a(e){const n={admonition:"admonition",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(16906).A+"",width:"3502",height:"1794"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Save changes",src:t(3466).A+"",width:"2474",height:"188"})}),"\n",(0,o.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},4914:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function a(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n",(0,o.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,o.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,o.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,o.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,o.jsx)(n.a,{href:"/introduction",children:"introduction page"})," to get started."]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["Basic knowledge of ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},37448:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function a(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},92409:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function a(e){const n={admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,o.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},52878:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function a(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},69191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,connector:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var o=t(74749),i=t(86070),s=t(15658);t(4914),t(23471),t(37391),t(37448),t(42969),t(52878),t(2634),t(3210);const a={slug:"how-to-build-facebook-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","facebook","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Facebook sign-in with Android and Logto"},r=void 0,l={authorsImageUrls:[void 0]},c="Facebook",d=[];function h(e){return(0,i.jsx)(i.Fragment,{})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h()}},69043:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function a(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Let's switch to the Application details page of Logto Console. Add a Redirect URI ",(0,o.jsx)("code",{children:e.redirectUri}),' and click "Save changes".']}),"\n",(0,o.jsx)("img",{alt:"Redirect URI in Logto Console",src:e.figureSrc,width:"600px"})]})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},78551:(e,n,t)=>{t.d(n,{A:()=>a});t(30758);var o=t(13526);const i={tabItem:"tabItem_PGP0"};var s=t(86070);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(i.tabItem,a),hidden:t,children:n})}},77501:(e,n,t)=>{t.d(n,{A:()=>w});var o=t(30758),i=t(13526),s=t(65052),a=t(25557),r=t(77469),l=t(50873),c=t(62230),d=t(60196);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:i}}=e;return{value:n,label:t,attributes:o,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=p(e),[a,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[c,h]=g({queryString:t,groupId:i}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),j=(()=>{const e=c??m;return u({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),x(e)}),[h,x,s]),tabValues:s}}var x=t(13887);const j={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var b=t(86070);function f(e){let{className:n,block:t,selectedValue:o,selectValue:a,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=r[t].value;i!==o&&(c(n),a(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,i.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,b.jsx)(k,{...e,children:h(e.children)},String(n))}},28084:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},81684:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},13885:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},3466:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},16906:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},15658:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(30758);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}},74749:e=>{e.exports=JSON.parse('{"permalink":"/pt-BR/tutorial/how-to-build-facebook-sign-in-with-android-and-logto","source":"@site/tutorial/build-with-logto/generated-android-facebook.mdx","title":"How to build Facebook sign-in with Android and Logto","description":"{/*","date":"2024-12-01T01:38:57.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/pt-BR/tutorial/tags/authentication"},{"inline":true,"label":"facebook","permalink":"/pt-BR/tutorial/tags/facebook"},{"inline":true,"label":"android","permalink":"/pt-BR/tutorial/tags/android"},{"inline":true,"label":"kotlin/java","permalink":"/pt-BR/tutorial/tags/kotlin-java"},{"inline":true,"label":"social-sign-in","permalink":"/pt-BR/tutorial/tags/social-sign-in"},{"inline":true,"label":"sign-in","permalink":"/pt-BR/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/pt-BR/tutorial/tags/login"}],"readingTime":1.28,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-facebook-sign-in-with-android-and-logto","authors":"logto","tags":["authentication","facebook","android","kotlin/java","social-sign-in","sign-in","login"],"title":"How to build Facebook sign-in with Android and Logto"},"unlisted":false,"prevItem":{"title":"How to build Discord sign-in with Android and Logto","permalink":"/pt-BR/tutorial/how-to-build-discord-sign-in-with-android-and-logto"},"nextItem":{"title":"How to build GitHub sign-in with Android and Logto","permalink":"/pt-BR/tutorial/how-to-build-github-sign-in-with-android-and-logto"}}')}}]);