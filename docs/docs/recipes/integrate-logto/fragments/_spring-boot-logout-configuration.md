```java
// path/to/project/src/main/java/io/logto/springboot/sample/configuration/SecurityConfiguration.java

// ...
import io.logto.springboot.sample.handler.LogoutHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@EnableWebSecurity
public class SecurityConfiguration {
    // ...

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http,
            LogoutHandler logoutHandler,
            OAuth2AuthorizationRequestResolver authorizationRequestResolver
    ) throws Exception {
        http.authorizeRequests()
                // ...
                .logout(logoutCustomizer -> logoutCustomizer
                        // Use `/sign-out` path for logout requests.
                        .logoutRequestMatcher(new AntPathRequestMatcher("/sign-out"))
                        .addLogoutHandler(logoutHandler)
                );
        return http.build();
    }
}
```
