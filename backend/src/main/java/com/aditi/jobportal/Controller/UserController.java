package com.aditi.jobportal.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aditi.jobportal.Model.LoginRequest;
import com.aditi.jobportal.Model.UserModel;
import com.aditi.jobportal.Service.JwtService;
import com.aditi.jobportal.Service.UserService;

@RestController
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    AuthenticationManager authManager;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/register")
    public String registerUser(@RequestBody UserModel user) {
        service.registerUser(user);
        Authentication auth = authManager
                .authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

        if (auth.isAuthenticated()) {
            return jwtService.getJwtToken(user.getUsername());
        }
        return "user registered successfully";
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody LoginRequest login) {
        UserDetails userDetails = service.loadUserByEmail(login.getEmail());

        Authentication auth = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(userDetails.getUsername(), login.getPassword()));

        if (auth.isAuthenticated()) {
            return jwtService.getJwtToken(userDetails.getUsername());
        }
        return "login failed";
    }
}
