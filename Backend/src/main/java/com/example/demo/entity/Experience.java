package com.example.demo.entity;
import org.hibernate.type.StringNVarcharType;

import javax.persistence.*;

@Entity
@Table(name = "experience")
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="experience_Id")
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
    @ManyToOne
    @JoinColumn(name = "resume_Id", nullable = false)
    private Resume resume;


    public Experience (int experienceID, String company, String location, String jobTitle, String startDate, String endDate, String description, boolean current, Resume resume){
        this.experienceID = experienceID;
        this.company = company;
        this.location = location;
        this.jobTitle = jobTitle;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.current = current;
        this.resume = resume;
    }


    //getters


    public int getExperienceID() {return experienceID; }

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

    // Resume Setter for Resume Object
    public void setResume(Resume resume) {
        this.resume = resume;
    }

    public void setExperienceID(int experienceID) { this.experienceID = experienceID; }

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


    //override toString method here
    @Override
    public String toString() {
        return "Experience{" +
                "experienceID=" + experienceID +
                ", company='" + company + '\'' +
                ", location='" + location + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", startDate='" + startDate + '\'' +
                ", endDate='" + endDate + '\'' +
                ", description='" + description + '\'' +
                ", current=" + current +
                //", resume=" + resume +
                '}';
    }

    //empty constructor
    public Experience(){}
}
