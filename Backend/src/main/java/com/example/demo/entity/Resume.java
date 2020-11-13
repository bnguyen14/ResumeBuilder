package com.example.demo.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Resume")
public class Resume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="resume_id")
    private int resumeID;

    @Column(name="name")
    private String name;

    @Column(name="email")
    private String email;

    //concat of City & State (Ex: 'Test, TX')
    @Column(name="location")
    private String location;

    @Column(name="summary")
    private String summary;

    @Column(name="skills")
    private String skills;

    //Foreign Key user_Id
    //one-to-many
    @ManyToOne
    @JoinColumn(name = "user_Id", nullable = false)
    private User user;


    //constructor
    public Resume (int resumeID, String name, String email, String location, String summary, String skills, User user){
        this.resumeID = resumeID;
        this.name = name;
        this.email = email;
        this.location = location;
        this.summary = summary;
        this.skills = skills;
        this.user = user;
    }


    //getters

    public int getResumeID() {
        return resumeID;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getLocation() {
        return location;
    }

    public String getSummary() {
        return summary;
    }

    public String getSkills() {
        return skills;
    }

    public User getUser() {
        return user;
    }

    //setters


    public void setResumeID(int resumeID) {
        this.resumeID = resumeID;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public void setUser(User user) { this.user = user; }

    //empty constructor
    public Resume(){}

    //override of toString method to display object values for Postman testing
    @Override
    public String toString(){
        return "Resume{" +
                "resumeID: " + resumeID +
                "name: " + name +
                "email: " + email +
                "location: " + location +
                "summary: " + summary +
                "skills: " + skills +
                "userID:" + user +
                "} ";
    }
}
