package com.example.demo.entity;
import javax.persistence.*;

@Entity
@Table(name = "achievement")
public class Achievement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="achievement_Id")
    private int achievementID;

    @Column(name="issuer")
    private String issuer;

    @Column(name="name")
    private String name;

    @Column(name="date")
    private String date;


    //Foreign Key resume_Id
    //one-to-one
    @ManyToOne
    @JoinColumn(name = "resume_Id", nullable = false)
    private Resume resume;

    public Achievement(int achievementID, String issuer, String name, String date, Resume resume){
        this.achievementID = achievementID;
        this.issuer = issuer;
        this.name = name;
        this.date = date;
        this.resume = resume;
    }

    //getters

    public int getAchievementID() {
        return achievementID;
    }

    public String getIssuer() {
        return issuer;
    }

    public String getName() {
        return name;
    }

    public String getDate() {
        return date;
    }

    //setters

    // Resume Setter for Resume Object
    public void setResume(Resume resume) {
        this.resume = resume;
    }

    public void setAchievementID(int achievementID) {
        this.achievementID = achievementID;
    }

    public void setIssuer(String issuer) {
        this.issuer = issuer;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDate(String date) {
        this.date = date;
    }


    //override toString method here
    @Override
    public String toString() {
        return "Achievement{" +
                "achievementID=" + achievementID +
                ", issuer='" + issuer + '\'' +
                ", name='" + name + '\'' +
                ", date='" + date + '\'' +
                //", resume=" + resume +
                '}';
    }

    //empty constructor
    public Achievement(){}

    public boolean emptyObject() {
        if(this.achievementID==0 && this.issuer.equals("") && this.name.equals("") && this.date.equals("")) {
            return true;
        }else {
            return false;
        }
    }


}
