"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[87577],{85108:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"logto-oss/develop-your-connector/implement-connectors","title":"Connectors implementieren","description":"Nachdem wir uns die Dateistruktur des Connectors angesehen haben, lassen Sie uns die Implementierung und die Hauptidee der Entwicklung eines Connectors besprechen.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/logto-oss/develop-your-connector/implement-connectors.mdx","sourceDirName":"logto-oss/develop-your-connector","slug":"/logto-oss/develop-your-connector/implement-connectors","permalink":"/de/logto-oss/develop-your-connector/implement-connectors","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/logto-oss/develop-your-connector/implement-connectors.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Connector-Dateistruktur","permalink":"/de/logto-oss/develop-your-connector/connector-file-structure"},"next":{"title":"Schritt-f\xfcr-Schritt-Anleitung zur Entwicklung eines sozialen Connectors","permalink":"/de/logto-oss/develop-your-connector/step-by-step-guide"}}');var i=r(86070),o=r(15658);const s={sidebar_position:2},c="Connectors implementieren",d={},l=[{value:"Einen sozialen Connector erstellen",id:"einen-sozialen-connector-erstellen",level:2},{value:"getAuthorizationUri",id:"getauthorizationuri",level:3},{value:"getAccessToken",id:"getaccesstoken",level:3},{value:"getUserInfo",id:"getuserinfo",level:3},{value:"Einen passwortlosen Connector erstellen",id:"einen-passwortlosen-connector-erstellen",level:2},{value:"sendMessage",id:"sendmessage",level:3},{value:"Was noch?",id:"was-noch",level:2},{value:"Installiere deine eigenen Connectors",id:"installiere-deine-eigenen-connectors",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"connectors-implementieren",children:"Connectors implementieren"})}),"\n",(0,i.jsx)(n.p,{children:"Nachdem wir uns die Dateistruktur des Connectors angesehen haben, lassen Sie uns die Implementierung und die Hauptidee der Entwicklung eines Connectors besprechen."}),"\n",(0,i.jsx)(n.p,{children:"Wir werden ein einfaches Beispiel f\xfcr soziale und passwortlose Connectors durchgehen, damit Sie Ihren Connector mit fast derselben Idee erstellen k\xf6nnen."}),"\n",(0,i.jsxs)(n.p,{children:["In diesem Teil gehen wir nicht tief in die Details spezifischer Parameter (wie ",(0,i.jsx)(n.code,{children:"config"}),") ein, da dies nicht der Punkt dieses Leitfadens ist. Entwickler, die neue Connectors implementieren, sollten die von Drittanbietern bereitgestellten Dokumente lesen, und diese Dokumente sollten die Parameter im Detail erl\xe4utern."]}),"\n",(0,i.jsx)(n.h2,{id:"einen-sozialen-connector-erstellen",children:"Einen sozialen Connector erstellen"}),"\n",(0,i.jsx)(n.p,{children:"Nehmen wir den GitHub-Connector als Beispiel."}),"\n",(0,i.jsxs)(n.p,{children:["Der Autorisierungsfluss der meisten sozialen Connectors folgt dem ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-basic-1_0.html",children:"OAuth Authorization Code Flow"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["Die Mehrheit der ",(0,i.jsx)(n.em,{children:"sozialen Connectors"})," folgt einem zweistufigen Schema, um ein Benutzerprofil mit der Authentifizierung der Endbenutzer zu erhalten (angenommen, dass alle Schritte erfolgreich sind):"]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Eine Authentifizierungsanfrage starten und die Authentifizierung des Benutzers erhalten."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Zugangstoken (Access token)"})," mit einem vom Connector-Anbieter gew\xe4hrten ",(0,i.jsx)(n.code,{children:"authCode"})," abrufen."]}),"\n",(0,i.jsxs)(n.li,{children:["Ein \xf6ffentlich zug\xe4ngliches Benutzerprofil mit ",(0,i.jsx)(n.code,{children:"Zugangstoken (Access token)"})," anfordern."]}),"\n"]})]}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\n\tactor user as Endbenutzer\n\tparticipant logto as Logto\n\tparticipant platform as Drittanbieter soziale Plattform\n\n\tuser ->> logto: Benutzer initiiert soziale Anmeldung\n\tlogto ->> platform: Logto leitet zur Drittanbieter sozialen Plattform weiter\n\tplatform --\x3e> user: Soziale Plattform fordert den Benutzer zur Anmeldung auf\n\tuser ->> platform: Benutzer meldet sich an und autorisiert den Zugriff von Logto\n\tplatform --\x3e> logto: Zur\xfcckleitung zur Logto-Callback-URI mit einem Autorisierungscode\n\tlogto ->> platform: Logto tauscht den Code gegen ein Zugangstoken aus\n\tplatform --\x3e> logto: Soziale Plattform gibt das Zugangstoken zur\xfcck\n\tlogto ->> platform: Logto ruft Benutzerinformationen mit dem Zugangstoken ab\n\tplatform --\x3e> logto: Soziale Plattform gibt die Benutzerinformationen zur\xfcck\n\tlogto --\x3e> user: Logto gibt die Benutzerinformationen an die Benutzer-App zur\xfcck, <br> schlie\xdft den Anmeldevorgang ab"}),"\n",(0,i.jsx)(n.p,{children:"Um den Fluss zu vervollst\xe4ndigen, ben\xf6tigen wir die folgenden drei Methoden:"}),"\n",(0,i.jsx)(n.h3,{id:"getauthorizationuri",children:"getAuthorizationUri"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"getAuthorizationUri"})," generiert eine Umleitungs-URL, die Endbenutzer zur Seite leiten kann, die die Authentifizierung der Benutzer erfordert."]}),"\n",(0,i.jsxs)(n.p,{children:["Die Schnittstelle ist als ",(0,i.jsx)(n.code,{children:"GetAuthorizationUri"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/logto/blob/master/packages/toolkit/connector-kit/src/types.ts",children:(0,i.jsx)(n.code,{children:"@logto/connector-kit"})})," definiert."]}),"\n",(0,i.jsxs)(n.p,{children:["Sie d\xfcrfen wesentliche Informationen zur Anmeldung mit ",(0,i.jsx)(n.code,{children:"setSession"})," (dem zweiten Eingabeparameter von ",(0,i.jsx)(n.code,{children:"GetAuthorizationUri"}),") speichern, um der ",(0,i.jsx)(n.code,{children:"getUserInfo"}),"-Methode zu dienen."]}),"\n",(0,i.jsx)(n.p,{children:"Folgende Parameter sind erforderlich:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"authorizationEndpoint"})," kann in der GitHub OAuth-Dokumentationsseite gefunden werden, dies ist die Seite, zu der der Endbenutzer zur Authentifizierung gehen sollte"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config"}),", das ",(0,i.jsx)(n.code,{children:"clientId"})," und ",(0,i.jsx)(n.code,{children:"clientSecret"})," im GitHub-Szenario enth\xe4lt"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"state"}),", ein zuf\xe4lliger String zur CSRF-Pr\xfcfung"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"redirectUri"})," der Zielseite nach erfolgreicher Authentifizierung des Endbenutzers"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const getAuthorizationUri = async ({ state, redirectUri }) => {\n  const queryParameters = new URLSearchParams({\n    client_id: config.clientId, // `config` enth\xe4lt Ihre GitHub-Anwendungsanmeldeinformationen\n    redirect_uri: redirectUri,\n    state,\n  });\n\n  return `${authorizationEndpoint}?${queryParameters.toString()}`;\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"getaccesstoken",children:"getAccessToken"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"getAccessToken"})," erh\xe4lt das Zugangstoken mit dem Autorisierungscode, der nach erfolgreicher Authentifizierung der Endbenutzer ausgestellt wurde."]}),"\n",(0,i.jsxs)(n.p,{children:["Neben ",(0,i.jsx)(n.code,{children:"config"}),", das wir in der vorherigen ",(0,i.jsx)(n.code,{children:"getAuthorizationUri"}),"-Methode erw\xe4hnt haben, m\xf6chten wir auch Folgendes erhalten:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Autorisierungs-",(0,i.jsx)(n.code,{children:"code"})," aus den Parametern, die zur Umleitungszielseite gebracht werden"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"accessTokenEndpoint"}),", das der Endpunkt ist, um das Zugangstoken mit dem Autorisierungscode zu erhalten"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const getAccessToken = async (config: GithubConfig, code: string) => {\n  const { clientId: client_id, clientSecret: client_secret } = config;\n\n  const httpResponse = await got.post({\n    url: accessTokenEndpoint,\n    json: {\n      client_id,\n      client_secret,\n      code,\n    },\n    timeout: defaultTimeout,\n  });\n\n  const result = accessTokenResponseGuard.safeParse(qs.parse(httpResponse.body));\n\n  if (!result.success) {\n    throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);\n  }\n\n  const { access_token: accessToken } = result.data;\n\n  assert(accessToken, new ConnectorError(ConnectorErrorCodes.SocialAuthCodeInvalid));\n\n  return { accessToken };\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"getuserinfo",children:"getUserInfo"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"getUserInfo"})," ruft Benutzerinformationen mit dem in den vorherigen Schritten erhaltenen Zugangstoken ab."]}),"\n",(0,i.jsxs)(n.p,{children:["Die Schnittstelle ist als ",(0,i.jsx)(n.code,{children:"GetUserInfo"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/logto/blob/master/packages/toolkit/connector-kit/src/types.ts",children:(0,i.jsx)(n.code,{children:"@logto/connector-kit"})})," definiert."]}),"\n",(0,i.jsxs)(n.p,{children:["F\xfcr Anmeldezwecke k\xf6nnen Sie notwendige Informationen mit der Funktion ",(0,i.jsx)(n.code,{children:"getSession"})," abrufen."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"userInfoEndpoint"})," ist der Endpunkt, der verwendet wird, um Benutzerinformationen zu erhalten."]}),"\n",(0,i.jsx)(n.p,{children:"Sie k\xf6nnen offizielle Dokumente \xfcberpr\xfcfen, um spezifische Benutzerinformationen zu finden, die am Benutzerinfo-Endpunkt zug\xe4nglich sind, und die entsprechende Berechtigung."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"id"}),", das vom Identit\xe4tsanbieter des Connectors (in diesem Fall GitHub) zugewiesen wird, ist erforderlich; andere Informationen sind optional. Wenn Sie ",(0,i.jsx)(n.code,{children:"email"})," oder ",(0,i.jsx)(n.code,{children:"phone"}),' aus dem Benutzerprofil erhalten k\xf6nnen, STELLEN SIE SICHER, dass sie "verifiziert" sind. Sie m\xfcssen auch die zur\xfcckgegebenen Schl\xfcssel mit den Feldnamen im ',(0,i.jsx)(n.a,{href:"/user-management/user-data/#basic-data",children:"Logto-Benutzerprofil"})," abgleichen."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const getUserInfo = async (\n  data: { code: string; config: GithubConfig },\n  getSession: GetSession,\n  { set: SetStorageValue, get: GetStorageValue }\n) => {\n  const { code, config } = data;\n  const { accessToken } = await getAccessToken(config, code);\n\n  try {\n    const httpResponse = await got.get(userInfoEndpoint, {\n      headers: {\n        authorization: `token ${accessToken}`,\n      },\n      timeout: defaultTimeout,\n    });\n\n    const result = userInfoResponseGuard.safeParse(parseJson(httpResponse.body));\n\n    if (!result.success) {\n      throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);\n    }\n\n    const { id, avatar_url: avatar, email, name } = result.data;\n\n    return {\n      id: String(id),\n      avatar: conditional(avatar),\n      email: conditional(email),\n      name: conditional(name),\n    };\n  } catch (error: unknown) {\n    if (error instanceof HTTPError) {\n      const { statusCode, body: rawBody } = error.response;\n\n      if (statusCode === 401) {\n        throw new ConnectorError(ConnectorErrorCodes.SocialAccessTokenInvalid);\n      }\n\n      throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(rawBody));\n    }\n\n    throw error;\n  }\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Die vollst\xe4ndige Implementierung finden Sie ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/connectors/blob/master/packages/connector-github/src/index.ts",children:"hier"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"F\xfcr weitere Details zu konfigurierbaren Parametern siehe GitHub-Connector-README oder die offiziellen GitHub-Dokumente."}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"Das Beispiel, das wir besprochen haben, basiert auf dem Autorisierungscode-Grant-Typ des OAuth-Protokolls, der im GitHub-Connector von Logto verwendet wird. Es ist jedoch erw\xe4hnenswert, dass ein anderer Grant-Typ, der implizite Grant-Typ, ebenfalls verwendet werden kann, um das Profil eines Benutzers abzurufen, und tats\xe4chlich ein Zugangstoken direkt in der Authentifizierungsantwort bereitstellt. Trotz dieser Bequemlichkeit wird der Autorisierungscode-Grant-Typ im Allgemeinen gegen\xfcber dem impliziten Typ aufgrund seiner st\xe4rkeren Sicherheit empfohlen."}),(0,i.jsx)(n.p,{children:"Sie k\xf6nnen auch einen Connector basierend auf OIDC oder einigen anderen offenen Protokollen erstellen, es h\xe4ngt von Ihrem Anwendungsfall sowie der Kompatibilit\xe4t des sozialen Anbieters ab, mit dem Sie sich verbinden m\xf6chten."})]}),"\n",(0,i.jsx)(n.h2,{id:"einen-passwortlosen-connector-erstellen",children:"Einen passwortlosen Connector erstellen"}),"\n",(0,i.jsx)(n.p,{children:"Lassen Sie uns die Implementierung des Aliyun Direct Mail Connectors durchgehen, um den Prozess des Aufbaus eines passwortlosen Connectors zu verstehen."}),"\n",(0,i.jsxs)(n.p,{children:["Passwortlose Connectors werden verwendet, um einen zuf\xe4lligen Code an die E-Mail oder das Telefon der Endbenutzer zu senden. Daher ist eine ",(0,i.jsx)(n.code,{children:"sendMessage"}),"-Methode erforderlich."]}),"\n",(0,i.jsx)(n.h3,{id:"sendmessage",children:"sendMessage"}),"\n",(0,i.jsxs)(n.p,{children:["Um eine Nachricht zu senden, m\xfcssen ",(0,i.jsx)(n.code,{children:"config"})," und ",(0,i.jsx)(n.code,{children:"endpoint"})," korrekt eingerichtet sein."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"endpoint"})," ist der Endpunkt, mit dem Ihre API-Aufrufe verbunden werden"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config"})," enth\xe4lt ",(0,i.jsx)(n.code,{children:"templates"})," (Inhaltsschablonen zum Senden von Passcodes in verschiedenen Benutzerfl\xfcssen), ",(0,i.jsx)(n.code,{children:"clientId"})," und ",(0,i.jsx)(n.code,{children:"clientSecret"})," (zum Zugriff auf API-Anfragen)"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const sendMessage = async (data, inputConfig) => {\n  const { to, type, payload } = data;\n  const config = inputConfig ?? (await getConfig(defaultMetadata.id));\n  validateConfig<AliyunDmConfig>(config, aliyunDmConfigGuard);\n  const { accessKeyId, accessKeySecret, accountName, fromAlias, templates } = config;\n  const template = templates.find((template) => template.usageType === type);\n\n  assert(\n    template,\n    new ConnectorError(\n      ConnectorErrorCodes.TemplateNotFound,\n      `Cannot find template for type: ${type}`\n    )\n  );\n\n  const parameters = {\n    AccessKeyId: accessKeyId,\n    AccountName: accountName,\n    ReplyToAddress: 'false',\n    AddressType: '1',\n    ToAddress: to,\n    FromAlias: fromAlias,\n    Subject: template.subject,\n    HtmlBody:\n      typeof payload.code === 'string'\n        ? template.content.replace(/{{code}}/g, payload.code)\n        : template.content,\n  };\n\n  try {\n    const httpResponse = await request(\n      endpoint,\n      { Action: 'SingleSendMail', ...staticConfigs, ...parameters },\n      accessKeySecret\n    );\n\n    const result = sendEmailResponseGuard.safeParse(parseJson(httpResponse.body));\n\n    if (!result.success) {\n      throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);\n    }\n\n    return result.data;\n  } catch (error: unknown) {\n    if (error instanceof HTTPError) {\n      const {\n        response: { body: rawBody },\n      } = error;\n\n      assert(typeof rawBody === 'string', new ConnectorError(ConnectorErrorCodes.InvalidResponse));\n\n      errorHandler(rawBody);\n    }\n\n    throw error;\n  }\n};\n\nconst request = async (\n  url: string,\n  parameters: PublicParameters & Record<string, string>,\n  accessKeySecret: string\n) => {\n  const finalParameters: Record<string, string> = {\n    ...parameters,\n    SignatureNonce: String(Math.random()),\n    Timestamp: new Date().toISOString(),\n  };\n  const signature = getSignature(finalParameters, accessKeySecret, 'POST');\n\n  const payload = new URLSearchParams();\n\n  for (const [key, value] of Object.entries(finalParameters)) {\n    payload.append(key, value);\n  }\n  payload.append('Signature', signature);\n\n  return got.post({\n    url,\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n    },\n    form: payload,\n  });\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Die vollst\xe4ndige Implementierung finden Sie ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/connectors/blob/master/packages/connector-aliyun-dm/src/index.ts",children:"hier"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"F\xfcr weitere Details zu konfigurierbaren Parametern siehe Aliyun Direct Mail Connector README oder die offiziellen Aliyun Direct Mail-Dokumente."}),"\n",(0,i.jsx)(n.h2,{id:"was-noch",children:"Was noch?"}),"\n",(0,i.jsxs)(n.p,{children:["Um die Definition der Connector-Methoden zu sehen und ein Bild des Connector-Schnittstellendesigns zu erstellen, siehe ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/toolkit/connector-kit",children:(0,i.jsx)(n.code,{children:"@logto/connector-kit"})}),". Sie k\xf6nnen auch die ",(0,i.jsx)(n.em,{children:"ConnectorMetadata"}),'-Referenz unter "',(0,i.jsx)(n.a,{href:"/connectors/connector-data-structure/#connectors-local-storage-connectormetadata",children:"Connectors - ConnectorMetadata"}),'" und "',(0,i.jsx)(n.a,{href:"/logto-oss/develop-your-connector/connector-file-structure/",children:"Connector-Dateistruktur"}),'" finden, die Ihnen helfen kann, Ihre Implementierung zu organisieren.']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ein Connector-Config-",(0,i.jsx)(n.em,{children:"Zod"}),"-Schema ist f\xfcr alle Connectors obligatorisch. Dies ist sehr wichtig, da wir einen Typencheck durchf\xfchren, bevor wir ",(0,i.jsx)(n.code,{children:"config"})," in der Datenbank speichern und APIs aufrufen, die ",(0,i.jsx)(n.code,{children:"config"}),"-Informationen erfordern."]}),"\n",(0,i.jsxs)(n.li,{children:["Alle ",(0,i.jsx)(n.em,{children:"SMS-Connectors"})," und ",(0,i.jsx)(n.em,{children:"E-Mail-Connectors"})," erfordern eine ",(0,i.jsx)(n.code,{children:"sendMessage"}),"-Methode, um die Nachrichtensende-APIs der Dienstanbieter mit Konfigurationen aus der Datenbank aufzurufen. Entwickler k\xf6nnen diese Methode auch wiederverwenden, um eine Testnachricht mit nicht gespeicherter Konfiguration zu senden, w\xe4hrend sie Connectors in der Admin-Konsole einrichten."]}),"\n",(0,i.jsxs)(n.li,{children:["Der Autorisierungs-URL-Generator ",(0,i.jsx)(n.code,{children:"getAuthorizationUri"})," und der Benutzerprofil-Abruf ",(0,i.jsx)(n.code,{children:"getUserInfo"})," sind f\xfcr alle ",(0,i.jsx)(n.em,{children:"sozialen Connectors"})," erforderlich (",(0,i.jsx)(n.code,{children:"getAccessToken"})," wird als optionaler Schritt in ",(0,i.jsx)(n.code,{children:"getUserInfo"})," angesehen)."]}),"\n",(0,i.jsx)(n.li,{children:"Alle Methoden der Connectors arbeiten \xfcber API-Aufrufe, daher m\xfcssen Connector-Entwickler Dokumente \xfcberpr\xfcfen und m\xf6gliche erfolglose API-Antworten behandeln."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installiere-deine-eigenen-connectors",children:"Installiere deine eigenen Connectors"}),"\n",(0,i.jsx)(n.p,{children:"Wir gehen davon aus, dass Sie bereits Ihren eigenen Connector erstellt haben. Gehen Sie die folgenden Schritte durch, um ihn manuell zu installieren:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Kopieren Sie den von Ihnen implementierten Connector-Ordner in das Verzeichnis ",(0,i.jsx)(n.code,{children:"/packages/connectors"})," von ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/logto",children:(0,i.jsx)(n.code,{children:"logto-io/logto"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Installieren Sie die Abh\xe4ngigkeiten des Connector-Repositorys, indem Sie ",(0,i.jsx)(n.code,{children:"pnpm pnpm:devPreinstall && pnpm i"})," im Stammverzeichnis des Logto-Ordners eingeben."]}),"\n",(0,i.jsxs)(n.li,{children:["Bauen Sie den Connector mit ",(0,i.jsx)(n.code,{children:"pnpm connectors build"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Verkn\xfcpfen Sie lokale Connectors mit ",(0,i.jsx)(n.code,{children:"pnpm cli connector link"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Starten Sie die Logto-Instanz mit ",(0,i.jsx)(n.code,{children:"pnpm dev"})," im Stammverzeichnis von ",(0,i.jsx)(n.code,{children:"logto-io/logto"})," neu, und Sie k\xf6nnen sehen, dass die Connectors erfolgreich installiert wurden."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Sie k\xf6nnen nun Ihren Connector testen und ausprobieren, um zu sehen, ob er wie erwartet funktioniert."}),"\n",(0,i.jsxs)(n.p,{children:["Wenn Sie Connectors hinzuf\xfcgen m\xf6chten, die bereits auf NPM oder Logto offiziellen Connectors ver\xf6ffentlicht wurden, k\xf6nnen Sie ",(0,i.jsx)(n.a,{href:"/logto-oss/using-cli/manage-connectors/#add-connectors",children:"Using Logto CLI - Manage connectors"})," \xfcberpr\xfcfen."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},15658:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var t=r(30758);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);