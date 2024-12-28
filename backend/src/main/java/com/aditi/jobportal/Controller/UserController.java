package com.aditi.jobportal.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.aditi.jobportal.Service.UserService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.aditi.jobportal.Model.UserModel;


@RestController
public class UserController {
    
    @Autowired
    private UserService service;

    @PostMapping("/register")
    public String registerUser(@RequestBody UserModel user) {
        service.registerUser(user);
        return "user registered successfully";
    }
    
}
