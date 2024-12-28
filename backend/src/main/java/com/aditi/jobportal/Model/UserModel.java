package com.aditi.jobportal.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class UserModel {
    @Id
    private int id;
    private String username;
    private String email;
    private String password;
    private String role;
}
