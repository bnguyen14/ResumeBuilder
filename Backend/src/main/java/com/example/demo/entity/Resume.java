package com.example.demo.entity;

import javax.persistence.*;

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
                "userID:" +
                "} ";
    }
}
