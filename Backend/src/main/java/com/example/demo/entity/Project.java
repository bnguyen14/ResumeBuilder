package com.example.demo.entity;
import javax.persistence.*;


@Entity
@Table(name = "project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="project_Id")
    private int projectID;

    @Column(name="title")
    private String title;

    @Column(name="description")
    private String description;


    //Foreign Key resume_Id
    //one-to-one
    @ManyToOne
    @JoinColumn(name = "resume_Id", nullable = false)
    private Resume resume;


    public Project(int projectID, String title, String description, Resume resume){
        this.projectID = projectID;
        this.title = title;
        this.description = description;
        this.resume = resume;
    }

    //getters

    public int getProjectID() {
        return projectID;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    //setters

    // Resume Setter for Resume Object
    public void setResume(Resume resume) {
        this.resume = resume;
    }

    public void setProjectID(int projectID) {
        this.projectID = projectID;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    //override toString method here
    @Override
    public String toString() {
        return "Project{" +
                "projectID=" + projectID +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                //", resume=" + resume +
                '}';
    }

    //empty constructor
    public Project(){}

    public boolean emptyObject() {
        if(this.projectID==0 && this.title.equals("") && this.description.equals("")) {
            return true;
        }else {
            return false;
        }
    }

}
