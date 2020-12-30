package com.example.demo.entity;
import javax.persistence.*;

@Entity
@Table(name = "website")
public class Website {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="website_Id")
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

    // Resume Setter for Resume Object
    public void setResume(Resume resume) {
        this.resume = resume;
    }

    public void setWebsiteID(int websiteID) {
        this.websiteID = websiteID;
    }

    public void setSite(String site) {
        this.site = site;
    }


    //override toString method here
    @Override
    public String toString() {
        return "Website{" +
                "websiteID=" + websiteID +
                ", site='" + site + '\'' +
                //", resume=" + resume +
                '}';
    }

    //empty constructor
    public Website(){}
    
    public boolean isEmpty() {
    	if(this.websiteID==0 && this.site=="") {
    		return true;
    	}else {
    		return false;
    	}
    }
}
