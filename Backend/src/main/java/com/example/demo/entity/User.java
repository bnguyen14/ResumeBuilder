package com.example.demo.entity;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_Id")
    private int userID;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    //maps user table to resumes table (w/ Hibernate?)
    @OneToMany(mappedBy = "user")
    private List<Resume> resumes;


    //constructor

    public User(int userID, String email, String password, List <Resume> resumes){
        this.userID = userID;
        this.email = email;
        this.password = password;
        this.resumes = resumes;
    }


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

    public List<Resume> getResumes() {
        return resumes;
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


    public void setResumes(List<Resume> resumes) {
        this.resumes = resumes;
    }

    //override of toString method to display object values for Postman testing
    @Override
    public String toString(){
        return "User{" +
                "userID: " + userID +
                "email: " + email +
                "password: " + password +
                "resumes:" + resumes +
                "}";
    }


    //empty constructor
    public User(){}
}
