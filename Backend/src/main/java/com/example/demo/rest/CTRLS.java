package com.example.demo.rest;

import com.example.demo.dao.DAO;
import com.example.demo.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
//@RequestMapping("/api")
public class CTRLS {

    private final DAO dao;

    @Autowired
    public CTRLS(DAO dao){this.dao=dao;}


    //Request mappings below



    /**************
     * GET requests below
     *************
     */
    //grabs a user by email
    //    http://localhost:8080/getUserByEmail/{email}
    @GetMapping("/getUserByEmail/{email}")
    public User getUser(@PathVariable String email){
        User user = dao.findUserEmail(email);
        if(user == null){
            throw new RuntimeException("Couldn't find use with email: " + email);
        }

        return user;
    }

    //grabs a resume by its respective id
    @GetMapping("/getResumeByID/{resumeID}")
    public Resume getResume(@PathVariable int resumeID){
        Resume resume = dao.findResumeID(resumeID);
        if(resume == null){
            throw new RuntimeException(("Couldn't find a resume with ID " + resumeID + " , mate."));
        }
        return resume;
    }

    //    http://localhost:8080/getAchievementByID/{achievementID}
    @GetMapping("/getAchievementByID/{achievementID}")
    public List<Achievement> getAchievementByID(@PathVariable int achievementID){
        List<Achievement> achievement = dao.findAchievementID(achievementID);
        if(achievement == null){
            throw new RuntimeException(("Couldn't find a achievement with ID " + achievementID + " , mate."));
        }
        return achievement;
    }

    //    http://localhost:8080/getEducationByID/{educationID}
    @GetMapping("/getEducationByID/{educationID}")
    public List<Education> getEducationByID(@PathVariable int educationID){
        List<Education> education = dao.findEducationID(educationID);
        if(education == null){
            throw new RuntimeException(("Couldn't find a education with ID " + educationID + " , mate."));
        }
        return education;
    }

    //    http://localhost:8080/getExperienceByID/{experienceID}
    @GetMapping("/getExperienceByID/{experienceID}")
    public List<Experience> getExperienceByID(@PathVariable int experienceID){
        List<Experience> experience = dao.findExperienceID(experienceID);
        if(experience == null){
            throw new RuntimeException(("Couldn't find a experience with ID " + experienceID + " , mate."));
        }
        return experience;
    }

    //    http://localhost:8080/getProjectByID/{projectID}
    @GetMapping("/getProjectByID/{projectID}")
    public List<Project> getProjectByID(@PathVariable int projectID){
        List<Project> project = dao.findProjectID(projectID);
        if(project == null){
            throw new RuntimeException(("Couldn't find a project with ID " + projectID + " , mate."));
        }
        return project;
    }





    //WIP
    //lists ALL resumes belonging to a particular userID
    @GetMapping("/listAllResumesByUser/{userID}")
    public List <Resume> listResumes(@PathVariable int userID){
        List<Resume> resumeList = dao.showAllResumesByID(userID);
        if(resumeList == null){
            throw new RuntimeException("User with ID " + userID + " has no existing resumes..");
        }
        return resumeList;
    }



    /*********
     * POST Requests below
     ********
     */

    //adds a new user
    @PostMapping("/addUser")
    public User addUser(@RequestBody User user){
        dao.addUser(user);
        System.out.println("LOOK HERE FOR THAT [FRESHLY ADDED] USER INFO, FOO: " + user.toString().toUpperCase()); //for backend visualization
        return user;
    }

    //adds a new resume entity
    public Resume addResume(@RequestBody Resume resume){
        dao.addResume(resume);
        System.out.println("LOOK HERE FOR THAT [FRESHLY ADDED] RESUME INFO, MY GUY: " + resume.toString().toUpperCase()); //for backend visualization;
        return resume;
    }

}
