package com.example.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "Admin_Login")
public class AdminLogin {
    private String name;
    
    @Id
    private String email;
    
    private String password;
    
    public AdminLogin() {}

    public AdminLogin(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    @Column(nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(nullable = false, unique = true) 
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(nullable = false)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}