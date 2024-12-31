package com.aditi.jobportal.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aditi.jobportal.Model.UserModel;


@Repository
public interface UserRepo extends JpaRepository<UserModel, Integer> {
    
    UserModel findByUsername(String name);
    UserModel findByEmail(String email);
}
