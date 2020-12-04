package com.example.demo.rest;

import com.example.demo.dao.DAO;
import com.example.demo.dao.DAOImpl;
import com.example.demo.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
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
    public List <Resume> getResume(@PathVariable int resumeID){
        List <Resume> resume = dao.findResumeID(resumeID);
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

    //    http://localhost:8080/getUserByID/{userID}
    @GetMapping("/getUserByID/{userID}")
    public List<User> getUserByID(@PathVariable int userID){
        List<User> user = dao.findUserID(userID);
        if(user == null){
            throw new RuntimeException(("Couldn't find a project with ID " + userID + " , mate."));
        }
        return user;
    }

    //    http://localhost:8080/getWebsiteByID/{websiteID}
    @GetMapping("/getWebsiteByID/{websiteID}")
    public List<Website> getWebsiteByID(@PathVariable int websiteID){
        List<Website> website = dao.findWebsiteID(websiteID);
        if(website == null){
            throw new RuntimeException(("Couldn't find a project with ID " + websiteID + " , mate."));
        }
        return website;
    }

    /**************
     * Put requests below
     *************
     */

    //This is a PUT request to update an existing Achievement.
    //http://localhost:8080/updateAchievement
    @PutMapping("/updateAchievement")
    public Achievement updateAchievement(@RequestBody Achievement theAchievement) {

        dao.saveAchievement(theAchievement);
        return theAchievement;
    }

    //http://localhost:8080/updateEducation
    @PutMapping("/updateEducation")
    public Education updateEducation(@RequestBody Education theEducation) {

        dao.saveEducation(theEducation);
        return theEducation;
    }

    //http://localhost:8080/updateExperience
    @PutMapping("/updateExperience")
    public Experience updateExperience(@RequestBody Experience theExperience) {

        dao.saveExperience(theExperience);
        return theExperience;
    }

    //http://localhost:8080/updateProject
    @PutMapping("/updateProject")
    public Project updateProject(@RequestBody Project theProject) {

        dao.saveProject(theProject);
        return theProject;
    }

    //http://localhost:8080/updateResume
    @PutMapping("/updateResume")
    public Resume updateResume(@RequestBody Resume theResume) {

        dao.saveResume(theResume);
        return theResume;
    }

    //http://localhost:8080/updateUser
    @PutMapping("/updateUser")
    public User updateUser(@RequestBody User theUser) {

        dao.saveUser(theUser);
        return theUser;
    }

    //http://localhost:8080/updateWebsite
    @PutMapping("/updateWebsite")
    public Website updateWebsite(@RequestBody Website theWebsite) {

        dao.saveWebsite(theWebsite);
        return theWebsite;
    }




    @GetMapping("/getResViaID/{resumeID}")
    public Resume getRes(@PathVariable int resumeID){
        Resume res = dao.findResViaID(resumeID);

        return res;
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


    //GET for Resume dependents

    //achievement

    //edu

    //exp

    //proj

    //site



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
    @PostMapping("/addResume")
    public Resume addResume(@RequestBody Resume resume){
        dao.addResume(resume);
        System.out.println("LOOK HERE FOR THAT [FRESHLY ADDED] RESUME INFO, MY GUY: " + resume.toString().toUpperCase()); //for backend visualization;
        return resume;
    }

    //adds new achievement
    @PostMapping("addAchievement")
    public Achievement addAchievements(@RequestBody Achievement achievement){
        dao.addAchievement(achievement);
        System.out.println("Added dat achievement doe" + "NO toString() OVERRIDE YET");
        return achievement;
    }

    //adds new edu
    @PostMapping("addEducation")
    public Education addEducation(@RequestBody Education education){
        dao.addEducation(education);
        //System.out.println("" + NO toString() OVERRIDE YET");
        return education;
    }

    //adds new exp
    @PostMapping("addExperience")
    public Experience addExperience(@RequestBody Experience experience){
        dao.addExperience(experience);
        //System.out.println("" + "NO toString() OVERRIDE YET");
        return experience;
    }

    //adds new project
    @PostMapping("addProjects")
    public Project addProject(@RequestBody Project project){
        dao.addProject(project);
        //System.out.println("" + "NO toString() OVERRIDE YET");
        return project;
    }

    //adds new Website
    @PostMapping("addWebsite")
    public Website addWebsite(@RequestBody Website website){
        dao.addWebsite(website);
        //System.out.println("" + "NO toString() OVERRIDE YET");
        return website;
    }


    /*********
     * DELETE Requests below
     ********
     */

    //deletes User entity by id
    @DeleteMapping("/deleteUserByID/{userID}")
    public String deleteUserByID(@PathVariable int userID){
        User user = dao.findID(userID);
        if (user == null){
            throw new RuntimeException("Couldn't find USER with ID: " + userID);
        }
        dao.deleteUserByID(userID);
        return "Deleted user with ID:" + userID;
    }

}
