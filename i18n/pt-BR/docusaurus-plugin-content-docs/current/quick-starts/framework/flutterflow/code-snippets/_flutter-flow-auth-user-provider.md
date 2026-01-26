```dart
// lib/auth/custom_auth/custom_auth_user_provider.dart

import 'package:logto_dart_sdk/src/modules/id_token.dart';
import 'package:rxdart/rxdart.dart';

import 'custom_auth_manager.dart';

class FlutterFlowAuthAuthUser {
  FlutterFlowAuthAuthUser({required this.loggedIn, this.uid, this.idToken});

  bool loggedIn;
  String? uid;
  OpenIdClaims? idToken;
}

/// Gera um fluxo do usuário autenticado.
BehaviorSubject<FlutterFlowAuthAuthUser> flutterFlowAuthAuthUserSubject =
    BehaviorSubject.seeded(FlutterFlowAuthAuthUser(loggedIn: false));
Stream<FlutterFlowAuthAuthUser> flutterFlowAuthAuthUserStream() =>
    flutterFlowAuthAuthUserSubject
        .asBroadcastStream()
        .map((user) => currentUser = user);

```
