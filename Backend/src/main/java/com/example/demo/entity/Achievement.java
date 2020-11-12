package com.example.demo.entity;
import javax.persistence.*;

@Entity
@Table(name = "")
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


    //empty constructor
    public Achievement(){}


}
