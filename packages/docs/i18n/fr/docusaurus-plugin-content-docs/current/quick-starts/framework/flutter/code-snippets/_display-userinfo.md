```dart title="lib/main.dart"
class _MyHomePageState extends State<MyHomePage> {
  // ...

  @override
  Widget build(BuildContext context) {
    // ...

    Widget getUserInfoButton = TextButton(
      onPressed: () async {
        // highlight-start
        final userClaims = await logtoClient.idTokenClaims;
        print(userInfo);
        // highlight-end
      },
      child: const Text('Obtenir les informations de l’utilisateur'),
    );

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SelectableText('Mon application de démonstration'),
            isAuthenticated == true ? signOutButton : signInButton,
            isAuthenticated == true ? getUserInfoButton : const SizedBox.shrink(),
          ],
        ),
      ),
    );
  }
}
```
