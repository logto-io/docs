```java
// path/to/project/src/main/java/io/logto/springboot/sample/configuration/SecurityConfiguration.java
package io.logto.springboot.sample.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.web.DefaultOAuth2AuthorizationRequestResolver;
import org.springframework.security.oauth2.client.web.OAuth2AuthorizationRequestCustomizers;
import org.springframework.security.oauth2.client.web.OAuth2AuthorizationRequestResolver;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
public class SecurityConfiguration {

    @Bean
    public OAuth2AuthorizationRequestResolver authorizationRequestResolver(
            ClientRegistrationRepository clientRegistrationRepository
    ) {
        DefaultOAuth2AuthorizationRequestResolver authorizationRequestResolver =
                new DefaultOAuth2AuthorizationRequestResolver(clientRegistrationRepository, "/oauth2/authorization");
        authorizationRequestResolver.setAuthorizationRequestCustomizer(OAuth2AuthorizationRequestCustomizers.withPkce()
                .andThen(customizer -> customizer.additionalParameters(params -> params.put("prompt", "consent"))));
        return  authorizationRequestResolver;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http,
            OAuth2AuthorizationRequestResolver authorizationRequestResolver
    ) throws Exception {
        http.authorizeRequests()
                // Anyone can access the home page.
                // (At least one mapping is required. Change it as you need.)
                .mvcMatchers("/").permitAll()
                .and().oauth2Login(oauth2LoginCustomizer -> oauth2LoginCustomizer
                        .authorizationEndpoint()
                        .authorizationRequestResolver(authorizationRequestResolver)
                );
        return http.build();
    }
}
```
