package com.example.demo.entity;
import javax.persistence.*;

@Entity
@Table(name = "education")
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

    // Degree
    @Column(name="degree")
    private String degree;

    //boolean current
    @Column(name="current")
    private boolean current;


    //Foreign Key resume_Id
    //one-to-one
    @ManyToOne
    @JoinColumn(name = "resume_Id", nullable = false)
    private Resume resume;


    public Education(int educationID, String school, String location, String startDate, String endDate, String degree, boolean current, Resume resume){
        this.educationID = educationID;
        this.school = school;
        this.location = location;
        this.startDate = startDate;
        this.endDate = endDate;
        this.degree = degree;
        this.current = current;
        this.resume = resume;
    }


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

    public String getDegree() {
        return degree;
    }

    public boolean getCurrent(){
        return current;
    }

    //setters

    // Resume Setter
    public void setResume(Resume resume) {
        this.resume = resume;
    }

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

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public void setCurrent(boolean current) {
        this.current = current;
    }


    //override toString method here
    @Override
    public String toString() {
        return "Education{" +
                "educationID=" + educationID +
                ", school='" + school + '\'' +
                ", location='" + location + '\'' +
                ", startDate='" + startDate + '\'' +
                ", endDate='" + endDate + '\'' +
                ", degree='" + degree + '\'' +
                ", current=" + current +
                //", resume=" + resume +
                '}';
    }

    //empty constructor
    public Education(){}

    public boolean emptyObject() {
        if(this.educationID==0 && 
        		this.school.equals("") && 
        		this.location.equals("") && 
        		this.startDate.equals("") && 
        		this.degree.equals("")) {
            return true;
        }else {
            return false;
        }
    }
}
