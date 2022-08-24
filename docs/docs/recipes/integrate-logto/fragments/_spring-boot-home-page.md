```html
<!-- path/to/project/src/main/resources/templates/index.html -->
<!DOCTYPE html>
<html
  lang="en"
  xmlns:th="http://www.thymeleaf.org"
  xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity5"
>
  <body>
    <div sec:authorize="!isAuthenticated()">
      <a th:href="@{/oauth2/authorization/logto}">Sign in</a>
    </div>
    <div sec:authorize="isAuthenticated()">
      <p>Signed in</p>
    </div>
  </body>
</html>
```
