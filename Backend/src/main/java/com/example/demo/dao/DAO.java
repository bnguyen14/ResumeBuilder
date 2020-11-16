package com.example.demo.dao;

import com.example.demo.entity.Resume;
import com.example.demo.entity.User;

import java.util.List;

public interface DAO {
    User findUserEmail(String email);
    User findUserPassword(String password);
    //User findUserLogin(String email, String password);




    void addUser (User user);
    void addResume (Resume resume);

    List<Resume> showAllResumesByID(int userID);  //WIP
    Resume findResumeID(int resumeID);
    //Resume findResumeByUserID(int userID) //find userName by foregin key user_id


    /**
    * Find and delete
     **/

    //re-usable delete
    void deleteByID(int id);

    //finds a user by his/her userID
    User findID(int userID);

}
