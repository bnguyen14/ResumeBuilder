package com.example.demo.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "resume")
public class Resume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name="resume_Id")
    private int resumeID;

//    //testing
//    @Column(name = "user_Id")
//    private int userID;

//    @Column(name="user_Id")
//    private int userID;

    @Column(name = "resume_name")
    private String resumeName;

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

    @Column(name = "save_date")
    private java.time.LocalDate saveDate;

    /**
     * Reference this, dumba$$
    **/
    //WIP Section
    //Foreign Key user_Id
    //one-to-many
    @ManyToOne
    @JoinColumn(name = "user_Id", nullable = false)
    private User user;
    //private int userID;


    /**
     * map resume table to all other entities EXCLUDING User
     **/
    //achievement
    @OneToMany(mappedBy = "resume")
    private List<Achievement> achievements;

    //education
    @OneToMany(mappedBy = "resume")
    private List<Education> educationList;

    //experience
    @OneToMany(mappedBy = "resume")
    private List<Experience> experiences;

    //project
    @OneToMany(mappedBy = "resume")
    private List<Project> projects;

    //website
    @OneToMany(mappedBy = "resume")
    private List<Website> websites;



    //constructor
    public Resume(int resumeID, String resumeName, String name, String email, String location, String summary, String skills, LocalDate saveDate, List<Achievement> achievements, List<Education> educationList, List<Experience> experiences, List<Project> projects, List<Website> websites){
        this.resumeID = resumeID;
        this.resumeName = resumeName;


        this.name = name;
        this.email = email;
        this.location = location;
        this.summary = summary;
        this.skills = skills;
        this.saveDate = saveDate;


        //WIP Section
        //this.user = user;
        //this.userID = userID;

        this. achievements = achievements;
        this.educationList = educationList;
        this.experiences = experiences;
        this.projects = projects;
        this.websites = websites;
    }


    //getters

    public int getResumeID() {
        return resumeID;
    }

    public String getResumeName() {
        return resumeName;
    }

    //testing
    //public int getUserID(){return userID; }
    /////////////////////////

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

    public LocalDate getSaveDate() {
        return saveDate;
    }


    //WIP Section

//    public User getUser() {
//        return user;
//    } ////////////////WIP

    public List<Achievement> getAchievements() {
        return achievements;
    }

    public List<Education> getEducationList() {
        return educationList;
    }

    public List<Experience> getExperiences() {
        return experiences;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public List<Website> getWebsites() {
        return websites;
    }

    //setters


    public void setResumeID(int resumeID) {
        this.resumeID = resumeID;
    }


//    //testing
//    public void setUserID(int userID) {
//        this.userID = userID;
//    }
//
//    //////////////////
    public void setUser(User user) {
    	this.user=user;
    }
    
    public void setName(String name) {
        this.name = name;
    }

    public void setResumeName(String resumeName) {
        this.resumeName = resumeName;
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

    //WIP Section

//    public void setUser(User user) { this.user = user; } //WIP

    public void setAchievements(List<Achievement> achievements) {
        this.achievements = achievements;
    }

    public void setEducationList(List<Education> educationList) {
        this.educationList = educationList;
    }

    public void setExperiences(List<Experience> experiences) {
        this.experiences = experiences;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    public void setWebsites(List<Website> websites) {
        this.websites = websites;
    }

    public void setSaveDate(LocalDate saveDate) {
        this.saveDate = saveDate;
    }


    //empty constructor
    public Resume(){}

    //override of toString method to display object values for Postman testing
    @Override
    public String toString(){
        return "Resume{" +
                "resumeID: " + resumeID +
                "userID: " + user +
                "name: " + name +
                "resumeName: " + resumeName +
                "email: " + email +
                "location: " + location +
                "summary: " + summary +
                "skills: " + skills +

                //WIP section
                /*"userID: " + user +*/
                "achievement: " + achievements +
                "education: " + educationList +
                "experience: " + experiences +
                "project: " + projects +
                "website: " + websites +
                "saveDate: " + saveDate +
                "} ";
    }


}
