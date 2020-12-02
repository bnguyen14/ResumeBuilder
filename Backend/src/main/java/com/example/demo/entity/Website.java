package com.example.demo.entity;
import javax.persistence.*;

@Entity
@Table(name = "website")
public class Website {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="website_id")
    private int websiteID;

    @Column(name="site")
    private String site;


    //Foreign Key resume_Id
    //one-to-one
    @ManyToOne
    @JoinColumn(name = "resume_Id", nullable = false)
    private Resume resume;


    public Website(int websiteID, String site, Resume resume){
        this.websiteID = websiteID;
        this.site = site;
        this.resume = resume;
    }

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


    //override toString method here


    //empty constructor
    public Website(){}
}
