package com.aditi.jobportal.secutiy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import javax.crypto.spec.SecretKeySpec;
import javax.crypto.SecretKey;

@Configuration
@EnableWebSecurity
public class securityConfig {

    @Autowired
    private UserDetailsService userService;

    private JwtDecoder jwtDecode;

    @Bean
    public AuthenticationProvider authProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userService);
        provider.setPasswordEncoder(new BCryptPasswordEncoder(12));
        return provider;
    }

    @Bean
    public JwtDecoder jwtDecoder() {
        String secretKey = "N4kXp2J7uVv9Qs3Ykq6DfEwTzC8MvLrQGp5XnZbAyK7PwF6tH9oJgRm2VyBd8Wx1jsbfs3234b9fsdfhuhfhuhfsud934hhun92";
        SecretKey key = new SecretKeySpec(secretKey.getBytes(), "HmacSHA256");
        jwtDecode = NimbusJwtDecoder.withSecretKey(key).build();
        return NimbusJwtDecoder.withSecretKey(key).build();
    }

    @Bean
    public SecurityFilterChain getRouteSecurity(HttpSecurity http) throws Exception {
        http
                .csrf(csrfCustomizer -> csrfCustomizer.disable())
                .authorizeHttpRequests(authorizer -> authorizer
                        .requestMatchers("/register", "/login").permitAll()
                        .anyRequest().authenticated())
                .httpBasic(Customizer.withDefaults())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .oauth2ResourceServer(oauth2 -> oauth2
                        .jwt(jwt -> jwt
                                .decoder(jwtDecode)));

        return http.build();
    }

    @Bean
    public AuthenticationManager getAuthenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
