```dart title="lib/main.dart"
class _MyHomePageState extends State<MyHomePage> {
  // ...

  @override
  Widget build(BuildContext context) {
    // ...

    Widget getUserInfoButton = TextButton(
      onPressed: () async {
        // highlight-start
        final userInfo = await logtoClient.getUserInfo();
        print(userInfo);
        // highlight-end
      },
      child: const Text('Benutzerinformationen abrufen'),
    );

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SelectableText('Meine Demo-App'),
            isAuthenticated == true ? signOutButton : signInButton,
            isAuthenticated == true ? getUserInfoButton : const SizedBox.shrink(),
          ],
        ),
      ),
    );
  }
}
```
