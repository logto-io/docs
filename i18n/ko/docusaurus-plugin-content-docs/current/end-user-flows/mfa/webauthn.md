---
sidebar_position: 3
---

# 패스키 (WebAuthn)

[패스키](https://auth.wiki/passkey)는 전통적인 비밀번호에 대한 더 안전하고 사용자 친화적인 대안을 제공합니다. 공개 키 암호화를 사용하여 패스키는 사용자의 장치, 서비스 도메인 및 사용자 ID를 연결하여 피싱 및 비밀번호 공격을 효과적으로 방지합니다. 다양한 장치나 브라우저와 호환되며, 사용자가 생체 인식 및 하드웨어 보안 기능을 사용하여 편리하게 인증할 수 있도록 합니다. [WebAuthn](https://auth.wiki/webauthn)은 웹사이트가 패스키를 구현할 수 있도록 API를 제공합니다.

Logto는 이제 다단계 인증 (MFA)을 위해 패스키 (Webauthn)를 지원합니다. 패스키 로그인 기능은 곧 제공될 예정입니다. 업데이트를 기대해 주세요.

## 개념 {#concepts}

고객들은 항상 WebAuthn보다는 패스키를 알고 있습니다. 그렇다면 이들 간의 관계는 무엇이며, 어떻게 사용할 수 있을까요? 이러한 개념을 탐구해 봅시다:

- **패스키**: 패스키는 비밀번호를 대체하기 위한 FIDO 기반의 피싱 저항 자격 증명입니다. 비대칭 공개 키 암호화를 사용하여 보안을 강화합니다. USB 또는 Bluetooth 장치와 같은 하드웨어 토큰이나 보안 키일 수 있습니다. "패스키"는 사용자에게 표시되는 인증 방법이므로, 제품 클라이언트 내에서 사용해야 합니다.
- **WebAuthn**: W3C와 FIDO Alliance가 개발한 JavaScript API로, FIDO2 표준을 사용하여 웹 애플리케이션 인증을 가능하게 합니다. 패스키는 WebAuthn이 지원하는 인증 방법 중 하나입니다. Logto 콘솔에서는 이 통합을 "WebAuthn"이라고 전문적으로 지칭합니다.

WebAuthn은 사용자가 선택할 수 있는 다양한 인증기를 제공하며, 로컬 및 클라우드 사용을 위한 두 가지 유형으로 제공됩니다:

- **플랫폼 인증기 (내부 인증기)**: 컴퓨터, 노트북, 전화기 또는 태블릿과 같은 단일 및 특정 장치 OS에 연결됩니다. 생체 인식 또는 장치 암호와 같은 방법을 사용하여 인가를 위해 장치에서만 작동하므로 빠르게 인증할 수 있는 방법입니다. 예를 들어, macOS 또는 iOS에서 Touch ID, Face ID 또는 장치 암호로 확인되는 iCloud 키체인; 얼굴 인식, 지문 또는 친숙한 PIN으로 확인되는 Windows Hello.
- **로밍 인증기 (외부 인증기, 크로스 플랫폼 인증기)**: 하드웨어 보안 키나 스마트폰과 같은 별도의 휴대용 장치 또는 소프트웨어 애플리케이션입니다. USB를 사용하거나 NFC 또는 Bluetooth를 켜서 장치를 연결해야 합니다. 로밍 인증기는 단일 장치나 브라우저에 제한되지 않아 더 큰 유연성을 제공합니다.

WebAuthn의 원리와 프로세스에 대해 더 깊이 알고 싶다면, 우리의 블로그 게시물: [WebAuthn과 패스키 101](https://blog.logto.io/web-authn-and-passkey-101/) 및 [WebAuthn 통합 전에 알아야 할 것들](https://blog.logto.io/webauthn-base-knowledge/)을 참조할 수 있습니다.

## 제한 사항에 주의하세요 {#pay-attention-to-limitations}

WebAuthn을 구현할 때 몇 가지 제한 사항을 인지하는 것이 중요합니다:

1. **플랫폼 및 브라우저 제한**: Logto는 현재 네이티브 애플리케이션에 대한 WebAuthn 지원을 제공하지 않습니다. 또한, WebAuthn 인증기의 가용성은 브라우저 및 장치 기능에 따라 다릅니다 ([목록 확인](https://caniuse.com/?search=webauthn)). 따라서 WebAuthn은 항상 다단계 인증 (MFA)을 구현하기 위한 유일한 옵션이 아니며, 그렇지 않으면 제품에 접근할 수 있는 브라우저와 장치를 제어할 수 있습니다.
2. **도메인 제한**: 도메인을 변경하면 기존 WebAuthn 계정을 통한 사용자 확인이 방해될 수 있습니다. 패스키는 현재 웹 페이지의 특정 도메인에 바인딩되며, 다른 도메인 간에 사용할 수 없습니다.
3. **장치 제한**: 장치를 잃어버리면 특히 "이 장치" 플랫폼 인증기에 의존하는 경우 계정에 대한 접근을 잃을 수 있습니다. 인증 접근을 강화하기 위해 사용자에게 하나 이상의 인증 요소를 제공하는 것이 좋습니다.

## 인증 흐름 {#authentication-flows}

패스키 사양은 사용자가 현재 페이지에서 버튼을 적극적으로 클릭하여 인증 구성 요소를 시작해야 한다고 요구합니다. 이는 설정 및 확인 흐름 모두에서 사용자가 WebAuthn을 시작하기 위해 랜딩 페이지로 리디렉션되어야 함을 의미합니다.

- **패스키 설정 흐름**

![WebAuthn 설정 흐름](./assets/webauthn-setup-flow.png)

- **패스키 확인 흐름**

![WebAuthn 확인 흐름](./assets/webauthn-verification-flow.png)

## 관련 리소스 {#related-resources}

<Url href="https://blog.logto.io/webauthn-base-knowledge">
  WebAuthn 통합 전에 알아야 할 것들
</Url>

<Url href="https://blog.logto.io/web-authn-and-passkey-101">
  WebAuthn과 패스키 101
</Url>
