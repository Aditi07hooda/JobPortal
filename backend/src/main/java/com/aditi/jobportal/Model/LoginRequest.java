package com.aditi.jobportal.Model;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
