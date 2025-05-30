내부적으로, 서드파티 앱은 표준 OAuth 2.0 / OIDC 클라이언트일 뿐입니다. 즉, 여러분(또는 서드파티 개발자)은 어떤 OAuth 2.0 / OIDC 라이브러리나 프레임워크도 사용하여 Logto와 통합할 수 있습니다.

OAuth 2.0 또는 OIDC에 익숙하지 않다면, 우리의 “전통적인 웹” 빠른 시작 가이드 중 하나를 따라 시작할 수 있습니다.

유의해야 할 몇 가지 사항:

1. Logto는 현재 서드파티 앱이 “전통적인 웹” 앱이어야 합니다. 즉, 앱에는 클라이언트 시크릿을 안전하게 저장할 백엔드 서버(또는 백엔드-포-프론트엔드)가 필요합니다.
2. 대부분의 빠른 시작 가이드는 퍼스트파티 앱을 대상으로 작성되어 있지만, 서드파티 앱 통합에도 참고 자료로 사용할 수 있습니다.
3. 주요 차이점은 서드파티 앱은 동의 화면 (Consent screen)을 표시하여 사용자의 데이터 접근에 대한 명시적 권한을 요청한다는 점입니다.

더 많은 정보는 우리의 [빠른 시작 가이드](/quick-starts)에서 확인할 수 있습니다.
