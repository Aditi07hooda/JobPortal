package com.aditi.jobportal.Service;

import java.util.Date;

import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

@Service
public class JwtService {

    private static final String SECRET_KEY = "N4kXp2J7uVv9Qs3Ykq6DfEwTzC8MvLrQGp5XnZbAyK7PwF6tH9oJgRm2VyBd8Wx1jsbfs3234b9fsdfhuhfhuhfsud934hhun92";
    private static final long EXPIRATION_TIME = 24 * 60 * 60 * 1000;

    public String getJwtToken(String username) {
        return JWT.create().withSubject(username).withIssuedAt(new Date())
                .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .sign(Algorithm.HMAC256(SECRET_KEY));
    }
}