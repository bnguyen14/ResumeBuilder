package com.example.demo.entity;
import javax.persistence.*;

@Entity
@Table(name = "")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_Id")
    private int userID;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;


    //getters

    public int getUserID() {
        return userID;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    //setters


    public void setUserID(int userID) {
        this.userID = userID;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    //override of toString method to display object values for Postman testing
    @Override
    public String toString(){
        return "User{" +
                "userID: " + userID +
                "email: " + email +
                "password: " + password +
                "}";
    }


    //empty constructor
    public User(){}
}
