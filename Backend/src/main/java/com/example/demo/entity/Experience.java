package com.example.demo.entity;
import javax.persistence.*;

@Entity
@Table(name = "")
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="experience_id")
    private int experienceID;

    @Column(name="company")
    private String company;


    @Column(name="location")
    private String location;

    @Column(name="job_title")
    private String jobTitle;

    @Column(name="start_date")
    private String startDate;

    @Column(name="end_date")
    private String endDate;

    @Column(name="description")
    private String description;

    @Column(name="current")
    private boolean current;


    //Foreign Key resume_Id
    //one-to-one


    //getters

    public String getCompany() {
        return company;
    }

    public String getLocation() {
        return location;
    }

    public String getJobTitle() {
        return jobTitle;
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


    public void setCompany(String company) {
        this.company = company;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
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
    public Experience(){}
}
