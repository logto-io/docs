```dart
// lib/auth/custom_auth/custom_auth_manager.dart

import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:logto_dart_sdk/logto_client.dart';
import 'package:logto_dart_sdk/src/modules/id_token.dart';

import 'custom_auth_user_provider.dart';

export 'custom_auth_manager.dart';


class CustomAuthManager {
  late LogtoClient logtoClient;

  final logtoConfig = const LogtoConfig(
      appId: '<YOUR-APP-ID>',
      endpoint: '<YOUR-LOGTO-ENDPOINT>');


  // ...

  FlutterFlowAuthAuthUser? _updateCurrentUser(
      {bool loggedIn = false, String? uid, OpenIdClaims? idToken}) {
    // Mettre à jour le flux de l'utilisateur actuel.
    final updatedUser = FlutterFlowAuthAuthUser(
      loggedIn: loggedIn,
      uid: uid,
      idToken: idToken,
    );

    flutterFlowAuthAuthUserSubject.add(updatedUser);

    return updatedUser;
  }

  Future initialize() async {
    logtoClient = LogtoClient(config: logtoConfig, httpClient: http.Client());

    late OpenIdClaims? idToken;

    try {
      idToken = await logtoClient.idTokenClaims;
    } catch (e) {
      if (kDebugMode) {
        print('Erreur lors de l\'initialisation de l\'authentification : $e');
      }
    }

    _updateCurrentUser(
        loggedIn: idToken != null, uid: idToken?.subject, idToken: idToken);
  }
}

FlutterFlowAuthAuthUser? currentUser;
bool get loggedIn => currentUser?.loggedIn ?? false;

```
