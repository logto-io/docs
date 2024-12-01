"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[62580],{8527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,contentTitle:()=>x,default:()=>w,frontMatter:()=>f,metadata:()=>i,toc:()=>k});const i=JSON.parse('{"id":"quick-starts/framework/flutterflow/README","title":"Anpassen des FlutterFlow CustomAuthManager mit Logto SDK","description":"FlutterFlow verf\xfcgt \xfcber eine integrierte benutzerdefinierte Authentifizierung, die es erm\xf6glicht, Benutzer \xfcber dein eigenes Backend zu authentifizieren. Der integrierte benutzerdefinierte Authentifizierungsablauf wurde jedoch so konzipiert, dass er mit einem einzigen Authentifizierungs-API-Aufruf funktioniert. Wenn du einen Drittanbieter-Identit\xe4tsanbieter (IdP) verwendest, kann die Authentifizierungsanfrage nur mit dem Resource Owner Password Credentials Grant-Typ durchgef\xfchrt werden, was f\xfcr die Produktion nicht empfohlen wird. Siehe Veralteter ropc Grant-Typ f\xfcr weitere Details.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/quick-starts/framework/flutterflow/README.mdx","sourceDirName":"quick-starts/framework/flutterflow","slug":"/quick-starts/flutter-flow","permalink":"/de/quick-starts/flutter-flow","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/quick-starts/framework/flutterflow/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/quick-starts/flutter-flow","sidebar_label":"FlutterFlow","sidebar_custom_props":{"description":"FlutterFlow ist ein Low-Code-Framework zum Erstellen hybrider Flutter-Apps."}},"sidebar":"quickStartSidebar","previous":{"title":"Flutter","permalink":"/de/quick-starts/flutter"},"next":{"title":"Go","permalink":"/de/quick-starts/go"}}');var r=t(86070),s=t(15658);function d(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"// lib/auth/custom_auth/custom_auth_manager.dart\n\nimport 'dart:async';\n\nimport 'package:flutter/foundation.dart';\nimport 'package:http/http.dart' as http;\nimport 'package:logto_dart_sdk/logto_client.dart';\nimport 'package:logto_dart_sdk/src/modules/id_token.dart';\n\nimport 'custom_auth_user_provider.dart';\n\nexport 'custom_auth_manager.dart';\n\n\nclass CustomAuthManager {\n  late LogtoClient logtoClient;\n\n  final logtoConfig = const LogtoConfig(\n      appId: '<YOUR-APP-ID>',\n      endpoint: '<YOUR-LOGTO-ENDPOINT>');\n\n\n  // ...\n\n  FlutterFlowAuthAuthUser? _updateCurrentUser(\n      {bool loggedIn = false, String? uid, OpenIdClaims? idToken}) {\n    // Aktualisiere den aktuellen Benutzerstream.\n    final updatedUser = FlutterFlowAuthAuthUser(\n      loggedIn: loggedIn,\n      uid: uid,\n      idToken: idToken,\n    );\n\n    flutterFlowAuthAuthUserSubject.add(updatedUser);\n\n    return updatedUser;\n  }\n\n  Future initialize() async {\n    logtoClient = LogtoClient(config: logtoConfig, httpClient: http.Client());\n\n    late OpenIdClaims? idToken;\n\n    try {\n      idToken = await logtoClient.idTokenClaims;\n    } catch (e) {\n      if (kDebugMode) {\n        print('Fehler bei der Initialisierung der Authentifizierung: $e');\n      }\n    }\n\n    _updateCurrentUser(\n        loggedIn: idToken != null, uid: idToken?.subject, idToken: idToken);\n  }\n}\n\nFlutterFlowAuthAuthUser? currentUser;\nbool get loggedIn => currentUser?.loggedIn ?? false;\n\n"})})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function l(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"// lib/auth/custom_auth/custom_auth_user_provider.dart\n\nimport 'package:logto_dart_sdk/src/modules/id_token.dart';\nimport 'package:rxdart/rxdart.dart';\n\nimport 'custom_auth_manager.dart';\n\nclass FlutterFlowAuthAuthUser {\n  FlutterFlowAuthAuthUser({required this.loggedIn, this.uid, this.idToken});\n\n  bool loggedIn;\n  String? uid;\n  OpenIdClaims? idToken;\n}\n\n/// Generiert einen Stream des authentifizierten Benutzers.\nBehaviorSubject<FlutterFlowAuthAuthUser> flutterFlowAuthAuthUserSubject =\n    BehaviorSubject.seeded(FlutterFlowAuthAuthUser(loggedIn: false));\nStream<FlutterFlowAuthAuthUser> flutterFlowAuthAuthUserStream() =>\n    flutterFlowAuthAuthUserSubject\n        .asBroadcastStream()\n        .map((user) => currentUser = user);\n\n"})})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function o(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"flutter_secure_storage"}),(0,r.jsxs)(n.p,{children:["Wir verwenden ",(0,r.jsx)(n.a,{href:"https://pub.dev/packages/flutter_secure_storage",children:"flutter_secure_storage"}),", um die plattform\xfcbergreifende, persistente sichere Token-Speicherung zu implementieren. Unter der Haube:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Keychain wird f\xfcr iOS verwendet"}),"\n",(0,r.jsx)(n.li,{children:"AES-Verschl\xfcsselung wird f\xfcr Android verwendet."}),"\n"]}),(0,r.jsx)(n.h3,{id:"android-version-konfigurieren",children:"Android-Version konfigurieren:"}),(0,r.jsx)(n.p,{children:"In [project]/android/app/build.gradle setze minSdkVersion auf >= 18."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"  android {\n      ...\n\n      defaultConfig {\n          ...\n          minSdkVersion 18\n          ...\n      }\n  }\n"})}),(0,r.jsx)(n.h3,{id:"autobackup-deaktivieren",children:"Autobackup deaktivieren:"}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Standardm\xe4\xdfig sichert Android Daten auf Google Drive. Dies kann die Ausnahme java.security.InvalidKeyException",":Failed"," to unwrap key verursachen."]})}),(0,r.jsx)(n.p,{children:"Um dies zu vermeiden, kannst du das automatische Backup f\xfcr deine App deaktivieren oder sharedprefs von FlutterSecureStorage ausschlie\xdfen."}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Um das automatische Backup zu deaktivieren, gehe zu deiner App-Manifestdatei und setze den booleschen Wert android:allowBackup:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<manifest ... >\n    ...\n    <application\n      android:allowBackup="false"\n      android:fullBackupContent="false"\n      ...\n    >\n        ...\n    </application>\n</manifest>\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Schlie\xdfe sharedprefs von FlutterSecureStorage aus."}),"\n",(0,r.jsxs)(n.p,{children:["Wenn du android",":fullBackupContent"," f\xfcr deine App aktivieren musst. Richte eine Backup-Regel ein, um die vom Plugin verwendeten Prefs ",(0,r.jsx)(n.a,{href:"https://developer.android.com/guide/topics/data/autobackup#IncludingFiles",children:"auszuschlie\xdfen"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<application ...\n  android:fullBackupContent="@xml/backup_rules">\n</application>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<full-backup-content>\n  <exclude domain="sharedpref" path="FlutterSecureStorage"/>\n</full-backup-content>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Bitte sieh dir ",(0,r.jsx)(n.a,{href:"https://pub.dev/packages/flutter_secure_storage#configure-android-version",children:"flutter_secure_storage"})," f\xfcr weitere Details an."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function h(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"flutter_web_auth"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://pub.dev/packages/flutter_web_auth",children:"flutter_web_auth"})," wird hinter dem flutter SDK von Logto verwendet. Wir verlassen uns auf seine webview-basierte Interaktionsschnittstelle, um die Autorisierungsseiten von Logto zu \xf6ffnen."]}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Dieses Plugin verwendet ASWebAuthenticationSession auf iOS 12+ und macOS 10.15+, SFAuthenticationSession auf iOS 11, Chrome Custom Tabs auf Android und \xf6ffnet ein neues Fenster im Web.\nDu kannst es mit iOS 8+ bauen, aber es wird derzeit nur von iOS 11 oder h\xf6her unterst\xfctzt."})}),(0,r.jsx)(n.h3,{id:"registriere-die-callback-url-auf-android",children:"Registriere die Callback-URL auf Android"}),(0,r.jsx)(n.p,{children:"Um die Callback-URL von Logtos Anmelde-Webseite zu erfassen, musst du deine Anmelde-redirectUri in der AndroidManifest.xml registrieren."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<activity android:name="com.linusu.flutter_web_auth.CallbackActivity" android:exported="true">\n    <intent-filter android:label="flutter_web_auth">\n        <action android:name="android.intent.action.VIEW"/>\n        <category android:name="android.intent.category.DEFAULT"/>\n        <category android:name="android.intent.category.BROWSABLE"/>\n        <data android:scheme="io.logto"/>\n    </intent-filter>\n</activity>\n'})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}const m=t.p+"assets/images/flutter-flow-custom-authentication-29ea475c8e52fe77ef9348d6a769ffa8.png",p=t.p+"assets/images/flutter-flow-github-push-ac7fd20f25760f669a19dd9fe61906b3.png",f={slug:"/quick-starts/flutter-flow",sidebar_label:"FlutterFlow",sidebar_custom_props:{description:"FlutterFlow ist ein Low-Code-Framework zum Erstellen hybrider Flutter-Apps."}},x="Anpassen des FlutterFlow CustomAuthManager mit Logto SDK",j={},k=[{value:"Voraussetzungen",id:"voraussetzungen",level:2},{value:"Aktivieren des benutzerdefinierten Codes in FlutterFlow",id:"aktivieren-des-benutzerdefinierten-codes-in-flutterflow",level:2},{value:"Erstelle dein UI in FlutterFlow",id:"erstelle-dein-ui-in-flutterflow",level:2},{value:"Passe den CustomAuthManager an",id:"passe-den-customauthmanager-an",level:2},{value:"Installiere die Logto SDK-Abh\xe4ngigkeit",id:"installiere-die-logto-sdk-abh\xe4ngigkeit",level:3},{value:"Aktualisiere den UserProvider",id:"aktualisiere-den-userprovider",level:3},{value:"Initialisiere den Logto-Client im CustomAuthManager",id:"initialisiere-den-logto-client-im-customauthmanager",level:3},{value:"Implementiere die Anmeldemethode",id:"implementiere-die-anmeldemethode",level:3},{value:"Implementiere die Abmeldemethode",id:"implementiere-die-abmeldemethode",level:3},{value:"Aktualisiere die Auth-Util-Methoden",id:"aktualisiere-die-auth-util-methoden",level:3},{value:"Integriere die benutzerdefinierte Authentifizierung in dein UI",id:"integriere-die-benutzerdefinierte-authentifizierung-in-dein-ui",level:2},{value:"Startseite",id:"startseite",level:3},{value:"Benutzerprofilseite",id:"benutzerprofilseite",level:3},{value:"Weiterf\xfchrende Lekt\xfcre",id:"weiterf\xfchrende-lekt\xfcre",level:2},{value:"Abh\xe4ngigkeitsprobleme beheben",id:"abh\xe4ngigkeitsprobleme-beheben",level:2},{value:"Android-Version konfigurieren:",id:"android-version-konfigurieren",level:3},{value:"Autobackup deaktivieren:",id:"autobackup-deaktivieren",level:3},{value:"Registriere die Callback-URL auf Android",id:"registriere-die-callback-url-auf-android",level:3}];function b(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"anpassen-des-flutterflow-customauthmanager-mit-logto-sdk",children:"Anpassen des FlutterFlow CustomAuthManager mit Logto SDK"})}),"\n",(0,r.jsxs)(n.p,{children:["FlutterFlow verf\xfcgt \xfcber eine integrierte ",(0,r.jsx)(n.a,{href:"https://docs.flutterflow.io/data-and-backend/custom-authentication",children:"benutzerdefinierte Authentifizierung"}),", die es erm\xf6glicht, Benutzer \xfcber dein eigenes Backend zu authentifizieren. Der integrierte benutzerdefinierte Authentifizierungsablauf wurde jedoch so konzipiert, dass er mit einem einzigen Authentifizierungs-API-Aufruf funktioniert. Wenn du einen Drittanbieter-Identit\xe4tsanbieter (IdP) verwendest, kann die Authentifizierungsanfrage nur mit dem ",(0,r.jsx)(n.code,{children:"Resource Owner Password Credentials"})," Grant-Typ durchgef\xfchrt werden, was f\xfcr die Produktion nicht empfohlen wird. Siehe ",(0,r.jsx)(n.a,{href:"https://blog.logto.io/deprecated-ropc-grant-type/",children:"Veralteter ropc Grant-Typ"})," f\xfcr weitere Details."]}),"\n",(0,r.jsxs)(n.p,{children:["Ein standardm\xe4\xdfiger OpenID Connect (OIDC) Authentifizierungsablauf umfasst mehrere Schritte, wie Autorisierung, Token-Austausch und Abruf von Benutzerinformationen. Um einen standardm\xe4\xdfigen OIDC-Authentifizierungsablauf mit einem IdP wie Logto zu implementieren, musst du die ",(0,r.jsx)(n.code,{children:"CustomAuthManager"}),"-Klasse in FlutterFlow anpassen."]}),"\n",(0,r.jsxs)(n.p,{children:["Dieses Tutorial zeigt dir, wie du die ",(0,r.jsx)(n.code,{children:"CustomAuthManager"}),"-Klasse in FlutterFlow mit dem Logto ",(0,r.jsx)(n.a,{href:"/de/quick-starts/flutter",children:"Flutter SDK"})," anpasst. Du kannst die Vorteile des Logto SDK f\xfcr den standardm\xe4\xdfigen OIDC-Authentifizierungsablauf nutzen und gleichzeitig die Vorteile des FlutterFlow UI-Builders beibehalten."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Das Logto SDK-Paket ist auf ",(0,r.jsx)(n.a,{href:"https://pub.dev/packages/logto_dart_sdk",children:"pub.dev"})," und im Logto ",(0,r.jsx)(n.a,{href:"https://github.com/logto-io/dart",children:"GitHub-Repository"})," verf\xfcgbar."]}),"\n",(0,r.jsx)(n.li,{children:"Das SDK ist derzeit nur f\xfcr Android- und iOS-Plattformen geeignet."}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"voraussetzungen",children:"Voraussetzungen"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ein ",(0,r.jsx)(n.a,{href:"https://cloud.logto.io",children:"Logto Cloud"})," Konto oder ein ",(0,r.jsx)(n.a,{href:"/introduction/set-up-logto-oss",children:"selbst gehostetes Logto"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Erstelle eine Logto Flutter-Anwendung."}),"\n",(0,r.jsx)(n.li,{children:"Ein FlutterFlow-Projekt."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"aktivieren-des-benutzerdefinierten-codes-in-flutterflow",children:"Aktivieren des benutzerdefinierten Codes in FlutterFlow"}),"\n",(0,r.jsxs)(n.p,{children:["Um die ",(0,r.jsx)(n.code,{children:"CustomAuthManager"}),"-Klasse anzupassen, musst du die benutzerdefinierte Code-Funktion in FlutterFlow aktivieren. Folge dem Leitfaden ",(0,r.jsx)(n.a,{href:"https://docs.flutterflow.io/customizing-your-app/manage-custom-code-in-github",children:"Manage Custom Code In GitHub"}),", um dein FlutterFlow-Projekt mit GitHub zu synchronisieren."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Das Verwalten von benutzerdefiniertem Code in GitHub ist eine Premium-Funktion in FlutterFlow. Du musst dein FlutterFlow auf den Pro-Plan upgraden, um diese Funktion zu aktivieren."})}),"\n",(0,r.jsx)(n.p,{children:"Sobald dies erledigt ist, hast du drei verschiedene Branches in deinem GitHub FlutterFlow-Repository:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"main"}),": Der Hauptbranch f\xfcr das Flutter-Projekt. Du ben\xf6tigst diesen Branch, um dein Projekt bereitzustellen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"flutterflow"}),": Der Branch, in dem ",(0,r.jsx)(n.code,{children:"FlutterFlow"})," die \xc4nderungen aus dem FlutterFlow-Editor synchronisiert."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"develop"}),": Der Branch, in dem du deinen benutzerdefinierten Code \xe4ndern kannst."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"erstelle-dein-ui-in-flutterflow",children:"Erstelle dein UI in FlutterFlow"}),"\n",(0,r.jsxs)(n.p,{children:["Erstelle zuerst dein UI in FlutterFlow. Du kannst der ",(0,r.jsx)(n.a,{href:"https://docs.flutterflow.io/",children:"FlutterFlow-Dokumentation"})," folgen, um dein UI basierend auf deinen Anforderungen zu erstellen. F\xfcr dieses Tutorial erstellen wir als Mindestanforderung zwei Seiten:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Eine einfache Startseite mit einem Login-Button."}),"\n",(0,r.jsx)(n.li,{children:"Eine Benutzerprofilseite, um Benutzerinformationen und einen Logout-Button anzuzeigen."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Gehe zur Seite ",(0,r.jsx)(n.code,{children:"App Settings"})," -> ",(0,r.jsx)(n.code,{children:"Authentication"})," und aktiviere die benutzerdefinierte Authentifizierung. Dadurch wird eine ",(0,r.jsx)(n.code,{children:"CustomAuthManager"}),"-Klasse in deinem FlutterFlow-Projekt erstellt."]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:m,alt:"FlutterFlow benutzerdefinierte Authentifizierung"})}),"\n",(0,r.jsxs)(n.p,{children:["Sobald du das UI fertig hast, navigiere zur Seite ",(0,r.jsx)(n.code,{children:"integrations"})," -> ",(0,r.jsx)(n.code,{children:"GitHub"})," und klicke auf den Button ",(0,r.jsx)(n.code,{children:"Push to Repository"}),", um die \xc4nderungen in den ",(0,r.jsx)(n.code,{children:"flutterflow"})," Branch zu \xfcbertragen."]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:p,alt:"FlutterFlow GitHub Push"})}),"\n",(0,r.jsx)(n.h2,{id:"passe-den-customauthmanager-an",children:"Passe den CustomAuthManager an"}),"\n",(0,r.jsxs)(n.p,{children:["Wechsle zum ",(0,r.jsx)(n.code,{children:"develop"})," Branch in deinem GitHub-Repository und f\xfchre die neuesten \xc4nderungen aus dem ",(0,r.jsx)(n.code,{children:"flutterflow"})," Branch zusammen. Einschlie\xdflich deiner UI-Seiten und der vorgefertigten ",(0,r.jsx)(n.code,{children:"CustomAuthManager"}),"-Klasse."]}),"\n",(0,r.jsx)(n.h3,{id:"installiere-die-logto-sdk-abh\xe4ngigkeit",children:"Installiere die Logto SDK-Abh\xe4ngigkeit"}),"\n",(0,r.jsx)(n.p,{children:"F\xfcge die Logto SDK-Abh\xe4ngigkeit zu deinem Projekt hinzu."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  flutter pub add logto_dart_sdk\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"Optionales Http-Paket:"}),(0,r.jsxs)(n.p,{children:["Der Logto-Client ben\xf6tigt einen Http-Client, um API-Aufrufe zu t\xe4tigen. Du kannst das ",(0,r.jsx)(n.code,{children:"http"}),"-Paket oder ein anderes Http-Client-Paket deiner Wahl verwenden."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  flutter pub add http\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"aktualisiere-den-userprovider",children:"Aktualisiere den UserProvider"}),"\n",(0,r.jsxs)(n.p,{children:["F\xfcge die ",(0,r.jsx)(n.code,{children:"OpenIdClaims"}),"-Klasse zur ",(0,r.jsx)(n.code,{children:"CustomAuthUserProvider"}),"-Klasse hinzu, um die Benutzerinformationen zu speichern."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Die ",(0,r.jsx)(n.code,{children:"OpenIdClaims"}),"-Klasse ist Teil des Logto SDK, das die ",(0,r.jsx)(n.code,{children:"id_token"})," Anspr\xfcche f\xfcr den authentifizierten Benutzer bereitstellt."]}),"\n"]}),"\n",(0,r.jsx)(u,{}),"\n",(0,r.jsx)(n.h3,{id:"initialisiere-den-logto-client-im-customauthmanager",children:"Initialisiere den Logto-Client im CustomAuthManager"}),"\n",(0,r.jsxs)(n.p,{children:["Initialisiere den Logto-Client in der ",(0,r.jsx)(n.code,{children:"CustomAuthManager"}),"-Klasse."]}),"\n",(0,r.jsx)(a,{}),"\n",(0,r.jsxs)(n.p,{children:["Die ",(0,r.jsx)(n.code,{children:"initialize"}),"-Methode initialisiert den Logto-Client und aktualisiert den aktuellen Benutzerstream mit dem in der lokalen Speicherung gespeicherten Authentifizierungsstatus des Benutzers."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Das Logto SDK verwendet das ",(0,r.jsx)(n.a,{href:"https://pub.dev/packages/flutter_secure_storage",children:"flutter_secure_storage"})," Paket, um die Benutzer-Authentifizierungsinformationen sicher zu speichern."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"implementiere-die-anmeldemethode",children:"Implementiere die Anmeldemethode"}),"\n",(0,r.jsxs)(n.p,{children:["Der Aufruf der ",(0,r.jsx)(n.code,{children:"LogtoClient.signIn"}),"-Methode wird einen standardm\xe4\xdfigen OIDC-Authentifizierungsablauf einleiten. Die Logto-Anmeldeseite wird in einer Webansicht mit ",(0,r.jsx)(n.a,{href:"https://pub.dev/packages/flutter_web_auth",children:"flutter_web_auth"})," ge\xf6ffnet."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"// lib/auth/custom_auth/custom_auth_manager.dart\n\nFuture<FlutterFlowAuthAuthUser?> signIn(\n    String redirectUri,\n  ) async {\n    await logtoClient.signIn(redirectUri);\n\n    var idTokenClaims = await logtoClient.idTokenClaims;\n\n    return _updateCurrentUser(\n      loggedIn: idTokenClaims != null,\n      uid: idTokenClaims?.subject,\n      idToken: idTokenClaims,\n    );\n  }\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Der LogtoClient wird die Schritte der Autorisierung, des Token-Austauschs und des Abrufs von Benutzerinformationen handhaben. Sobald der Benutzer authentifiziert ist, werden die ",(0,r.jsx)(n.code,{children:"idTokenClaims"})," in der lokalen Speicherung gespeichert.\nRufe die ",(0,r.jsx)(n.code,{children:"idTokenClaims"})," vom LogtoClient ab und aktualisiere den aktuellen Benutzerstream."]}),"\n",(0,r.jsx)(n.h3,{id:"implementiere-die-abmeldemethode",children:"Implementiere die Abmeldemethode"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"// lib/auth/custom_auth/custom_auth_manager.dart\n\nFuture signOut() async {\n    await logtoClient.signOut();\n\n    flutterFlowAuthAuthUserSubject.add(\n      FlutterFlowAuthAuthUser(loggedIn: false),\n    );\n  }\n"})}),"\n",(0,r.jsx)(n.h3,{id:"aktualisiere-die-auth-util-methoden",children:"Aktualisiere die Auth-Util-Methoden"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["F\xfcge den ",(0,r.jsx)(n.code,{children:"authManager"})," Getter hinzu, um auf die ",(0,r.jsx)(n.code,{children:"CustomAuthManager"}),"-Instanz zuzugreifen."]}),"\n",(0,r.jsxs)(n.li,{children:["F\xfcge den ",(0,r.jsx)(n.code,{children:"currentUserUid"})," Getter hinzu, um die aktuelle Benutzer-UID zu erhalten."]}),"\n",(0,r.jsxs)(n.li,{children:["F\xfcge den ",(0,r.jsx)(n.code,{children:"currentUserData"})," Getter hinzu, um die aktuellen Benutzerdaten zu erhalten."]}),"\n",(0,r.jsxs)(n.li,{children:["F\xfcge den ",(0,r.jsx)(n.code,{children:"logtoClient"})," Getter hinzu, um auf die Logto-Client-Instanz zuzugreifen."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"// lib/auth/custom_auth/auth_util.dart\n\nimport 'package:logto_dart_sdk/logto_client.dart';\nimport 'package:logto_dart_sdk/src/modules/id_token.dart';\n\nimport 'custom_auth_manager.dart';\n\nexport 'custom_auth_manager.dart';\n\nfinal _authManager = CustomAuthManager();\nCustomAuthManager get authManager => _authManager;\nString get currentUserUid => currentUser?.uid ?? '';\nOpenIdClaims? get currentUserData => currentUser?.idToken;\nLogtoClient get logtoClient => _authManager.logtoClient;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"integriere-die-benutzerdefinierte-authentifizierung-in-dein-ui",children:"Integriere die benutzerdefinierte Authentifizierung in dein UI"}),"\n",(0,r.jsx)(n.h3,{id:"startseite",children:"Startseite"}),"\n",(0,r.jsxs)(n.p,{children:["Rufe die ",(0,r.jsx)(n.code,{children:"authManager.signIn"}),"-Methode auf, um den Authentifizierungsablauf zu starten, wenn der Benutzer auf den Anmeldebutton klickt."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"redirectUri"})," ist die Callback-URL, die verwendet wird, um den Autorisierungs-Callback von der Logto-Anmeldeseite zu erfassen.\nSiehe das ",(0,r.jsx)(n.a,{href:"/de/quick-starts/flutter#implement-sign-in",children:"Flutter SDK"})," f\xfcr weitere Details zur redirectUri."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"// lib/pages/home_page/home_page_widget.dart\n\nfinal redirectUri = 'io.logto://callback';\n\n// ...\n\nFFButtonWidget(\n  onPressed: () async {\n    GoRouter.of(context).prepareAuthEvent();\n\n    await authManager.signIn(redirectUri);\n\n    context.replaceNamed('user');\n  },\n  text: 'Sign In',\n  // ...\n)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"benutzerprofilseite",children:"Benutzerprofilseite"}),"\n",(0,r.jsx)(n.p,{children:"Verwende die Auth-Util-Getter, um auf die aktuellen Benutzerdaten und die Logto-Client-Instanz zuzugreifen."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"// lib/pages/user/user_widget.dart\n\nimport '/auth/custom_auth/auth_util.dart';\n\n// ...\n\nchildren: [\n  Text(\n    'User ID: $currentUserUid',\n  ),\n  Text(\n    'Display Name: ${currentUserData?.name}',\n  ),\n  Text(\n    'Username: ${currentUserData?.username}',\n  ),\n  Text(\n    'Email: ${currentUserData?.emailVerified ?? currentUserData?.email}',\n  ),\n]\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Implementiere die Abmeldemethode, wenn der Benutzer auf den Abmeldebutton klickt."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"// lib/pages/user/user_widget.dart\n\nFFButtonWidget(\n  onPressed: () async {\n    await authManager.signOut();\n\n    context.replaceNamed('HomePage');\n  },\n  text: 'Sign Out',\n  // ...\n)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"weiterf\xfchrende-lekt\xfcre",children:"Weiterf\xfchrende Lekt\xfcre"}),"\n",(0,r.jsxs)(n.p,{children:["Das Logto SDK bietet weitere Methoden zur Interaktion mit der Logto API. Du kannst die ",(0,r.jsx)(n.code,{children:"CustomAuthManager"}),"-Klasse weiter anpassen, um weitere Funktionen zu implementieren."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/de/quick-starts/flutter#get-user-information",children:"Benutzerprofil"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/de/quick-starts/flutter#api-resources",children:"API-Ressourcen"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/de/quick-starts/flutter#organization",children:"Organisation"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"abh\xe4ngigkeitsprobleme-beheben",children:"Abh\xe4ngigkeitsprobleme beheben"}),"\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(g,{})]})}function w(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},15658:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var i=t(30758);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);