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

    void addUser (User user);
    void addResume (Resume resume);

    List<Resume> showAllResumesByID(int userID);  //WIP
    Resume findResumeID(int resumeID);
    //Resume findResumeByUserID(int userID) //find userName by foregin key user_id
}
