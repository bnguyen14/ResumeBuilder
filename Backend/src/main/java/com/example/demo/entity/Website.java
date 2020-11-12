package com.example.demo.entity;
import javax.persistence.*;

@Entity
@Table(name = "")
public class Website {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="website_id")
    private int websiteID;

    @Column(name="site")
    private String site;


    //Foreign Key resume_Id
    //one-to-one


    //getters

    public int getWebsiteID() {
        return websiteID;
    }

    public String getSite() {
        return site;
    }

    //setters


    public void setWebsiteID(int websiteID) {
        this.websiteID = websiteID;
    }

    public void setSite(String site) {
        this.site = site;
    }

    //empty constructor
    public Website(){}
}
