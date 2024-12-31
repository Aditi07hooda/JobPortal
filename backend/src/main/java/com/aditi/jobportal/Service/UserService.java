package com.aditi.jobportal.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.aditi.jobportal.Model.UserModel;
import com.aditi.jobportal.Repo.UserRepo;
import com.aditi.jobportal.secutiy.UserPrincipal;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepo repo;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel user = repo.findByUsername(username);
        if (user == null) {
            System.out.println("User not found");
            throw new UsernameNotFoundException("User not found");
        }
        return new UserPrincipal(user);
    }

    public UserDetails loadUserByEmail(String email) {
        UserModel user = repo.findByEmail(email);
        if (user == null) {
            System.out.println("User not found");
        }
        return new UserPrincipal(user);
    }

    public void registerUser(UserModel user) {
        user.setPassword(encoder.encode(user.getPassword()));
        repo.save(user);
    }

    public UserModel getUserByEmail(String email) {
        return repo.findByEmail(email);
    }
}
