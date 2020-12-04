package com.example.demo.dao;

import com.example.demo.entity.*;

import java.util.List;

public interface DAO {
    User findUserEmail(String email);
    User findUserPassword(String password);
    //User findUserLogin(String email, String password);
    List<Achievement> findAchievementID(int id);
    List<Education> findEducationID(int id);
    List<Experience> findExperienceID(int id);
    List<Project> findProjectID(int id);
    List<User> findUserID(int id);
    List<Website> findWebsiteID(int id);

    // Put Update Calls
    void saveAchievement(Achievement theAchievement);
    void saveEducation(Education theEducation);
    void saveExperience(Experience theExperience);
    void saveProject(Project theProject);
    void saveResume(Resume theResume);
    void saveUser(User theUser);
    void saveWebsite(Website theWebsite);

    void addUser (User user);
    void addResume (Resume resume);

    List<Resume> showAllResumesByID(int userID);  //WIP
    //Resume findResumeID(int resumeID);
    //Resume findResumeByUserID(int userID) //find userName by foreign key user_id


    /**
    * Find and delete user by ID
     **/
    //re-usable delete
    void deleteUserByID(int userID);

    //finds a user by his/her userID
    User findID(int userID);


    /**
     * Find and delete resume by ID
     **/
    //find resume by ID
    List <Resume> findResumeID(int resumeID);
    Resume findResViaID(int resumeID);

    //delete resume by ID
    void deleteResumeByID(int resumeID);


    /**
     * Find and delete achievement by ID
     **/
    //find achievement by ID
    Achievement findAchievementByID(int achievementID);

    //delete achievement by ID
    void deleteAchievementByID(int achievementID);


    /**
     * Find and delete education by ID
     **/
    //find education by ID
    Education findEducationByID(int educationID);

    //delete education by ID
    void deleteEducationByID(int educationID);


    /**
     * Find and delete experience by ID
     **/
    //find experience by ID
    Experience findExperienceByID(int experienceID);

    //deletes experience by ID
    void deleteExperienceByID(int experienceID);


    /**
     * Find and delete project by ID
     **/
    //finds project by ID
    Project findProjectByID(int projectID);

    //deletes project by ID
    void deleteProjectByID(int projectID);


    /**
     * Find and delete website by ID
     **/
    //finds website by ID
    Website findWebsiteByID(int websiteID);

    //deletes website by ID
    void deleteWebsiteByID(int websiteID);


}
