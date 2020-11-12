package com.example.demo.entity;
import javax.persistence.*;

@Entity
@Table(name = "")
public class Education {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="education_Id")
    private int educationID;

    @Column(name="school")
    private String school;

    @Column(name="location")
    private String location;

    //date as String
    @Column(name="start_date")
    private String startDate;

    //date as String
    @Column(name="end_date")
    private String endDate;

    @Column(name="description")
    private String description;

    //boolean current
    @Column(name="current")
    private boolean current;


    //Foreign Key resume_Id
    //one-to-one


    //getters

    public int getEducationID() {
        return educationID;
    }

    public String getSchool() {
        return school;
    }

    public String getLocation() {
        return location;
    }

    public String getStartDate() {
        return startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public String getDescription() {
        return description;
    }

    public boolean getCurrent(){
        return current;
    }

    //setters


    public void setEducationID(int educationID) {
        this.educationID = educationID;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCurrent(boolean current) {
        this.current = current;
    }

    //empty constructor
    public Education(){}
}
