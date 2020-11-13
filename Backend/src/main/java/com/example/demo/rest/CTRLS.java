package com.example.demo.rest;

import com.example.demo.dao.DAO;
import com.example.demo.entity.Resume;
import com.example.demo.entity.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class CTRLS {
    private final DAO dao;

    public CTRLS(DAO dao){this.dao=dao;}


    //Request mappings below



    /**************
     * GET requests below
     *************
     */
    //grabs a user by email
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
