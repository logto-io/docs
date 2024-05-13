Calling `.signOut()` will clear all the Logto data in memory and localStorage if they exist.

After signing out, it'll be great to redirect your user back to your website. Let's add `http://localhost:3000` as one of the Post Sign-out URIs in Admin Console (shows under Redirect URIs), and use the URL as the parameter when calling `.signOut()`.
