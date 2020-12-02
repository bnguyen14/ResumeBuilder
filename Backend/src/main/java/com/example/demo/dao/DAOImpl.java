package com.example.demo.dao;

import com.example.demo.entity.*;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class DAOImpl implements DAO {
    private EntityManager entityManager;
    private Session session;

    @Autowired
    public DAOImpl(EntityManager entityManager){this.entityManager = entityManager;}

    @Override
    @Transactional
    public User findUserEmail(String email) {
        session = entityManager.unwrap(Session.class);
        //User user = session.get(User.class, email);

        List<User> users = session.createQuery("FROM User WHERE email=:email").setParameter("email", email).getResultList();


        return users.get(0);
    }

    @Override
    @Transactional
    public User findUserPassword(String password) {
        session = entityManager.unwrap(Session.class);
        User user = session.get(User.class, password);

        return user;
    }

    @Override
    @Transactional
    public List<Achievement> findAchievementID(int achievementID) {
        session = entityManager.unwrap(Session.class);
        //User user = session.get(User.class, email);

        List<Achievement> achievements = session.createQuery("FROM achievement WHERE id=:achievementID").setParameter("achievementID", achievementID).getResultList();


        return achievements;
    }

    @Override
    @Transactional
    public List<Education> findEducationID(int educationID) {
        session = entityManager.unwrap(Session.class);
        //User user = session.get(User.class, email);

        List<Education> education = session.createQuery("FROM education WHERE id=:educationID").setParameter("educationID", educationID).getResultList();


        return education;
    }

    @Override
    @Transactional
    public List<Experience> findExperienceID(int experienceID) {
        session = entityManager.unwrap(Session.class);
        //User user = session.get(User.class, email);

        List<Experience> experience = session.createQuery("FROM experience WHERE id=:experienceID").setParameter("experienceID", experienceID).getResultList();


        return experience;
    }

    @Override
    @Transactional
    public List<Project> findProjectID(int projectID) {
        session = entityManager.unwrap(Session.class);
        //User user = session.get(User.class, email);

        List<Project> project = session.createQuery("FROM project WHERE id=:projectID").setParameter("projectID", projectID).getResultList();


        return project;
    }

    @Override
    @Transactional
    public List<User> findUserID(int userId) {
        session = entityManager.unwrap(Session.class);
        //User user = session.get(User.class, email);

        List<User> user = session.createQuery("FROM project WHERE id=:userId").setParameter("userId", userId).getResultList();


        return user;
    }

    @Override
    @Transactional
    public List<Website> findWebsiteID(int websiteId) {
        session = entityManager.unwrap(Session.class);
        //User user = session.get(User.class, email);

        List<Website> website = session.createQuery("FROM project WHERE id=:userId").setParameter("userId", websiteId).getResultList();


        return website;
    }


    //WIP [might delete later ;)]
//    @Override
//    @Transactional
//    public User findUserLogin(String email, String password) {
//        session = entityManager.unwrap(Session.class);
//        //code goes here
//        return session.get(User.class, email) ;
//    }

    @Override
    @Transactional
    public void addUser(User user) {
        session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(user);
    }

    @Override
    @Transactional
    public void addResume(Resume resume) {
        session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(resume);
    }

    //WIP
    //needs to be implemented once the entity(s) foreign keys have been properly configured
    //passes through foreign key user_Id to return a list of resumes containing that user_Id
    @Override
    @Transactional
    public List <Resume> showAllResumesByID(int userID) {
        session = entityManager.unwrap(Session.class);
        //code goes here
        //List <Resume> resumeList = session.createQuery("FROM Resume WHERE user_Id=:user_Id").setParameter("user_Id", userID).getResultList();

        return session.createQuery("FROM Resume WHERE user_Id=:user_Id").setParameter("user_Id", userID).getResultList();
    }


    @Override
    @Transactional
    public List <Resume>  findResumeID(int resumeID) {
        session = entityManager.unwrap(Session.class);
        List <Resume> resumeList = session.createQuery("FROM Resume WHERE resume_Id=:resume_Id").setParameter("resume_Id", resumeID).getResultList();
        //Resume resume = session.get(Resume.class, resumeID);



        return resumeList; //session.createQuery("FROM Resume WHERE resume_Id=:resume_Id").setParameter("resume_Id", resumeID).getResultList();
    }



    /**
     *TEST METHOD FOR DEBUGGING
     **/
    @Override
    @Transactional
    public Resume findResViaID(int resumeID) {
        session = entityManager.unwrap(Session.class);
        Resume resume = session.get(Resume.class, resumeID);
        return resume;
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    @Transactional
    public void deleteResumeByID(int resumeID) {
        session = entityManager.unwrap(Session.class);
        Resume resume = session.get(Resume.class, resumeID);
        session.delete(resume);

    }

    @Override
    public Achievement findAchievementByID(int achievementID) {
        session = entityManager.unwrap(Session.class);
        Achievement achievement = session.get(Achievement.class, achievementID);

        return achievement;
    }

    @Override
    public void deleteAchievementByID(int achievementID) {
        session = entityManager.unwrap(Session.class);
        Achievement achievement = session.get(Achievement.class, achievementID);
        session.delete(achievement);

    }

    @Override
    public Education findEducationByID(int educationID) {
        session = entityManager.unwrap(Session.class);
        Education education = session.get(Education.class, educationID);

        return education;
    }

    @Override
    public void deleteEducationByID(int educationID) {
        session = entityManager.unwrap(Session.class);
        Education education = session.get(Education.class, educationID);

        session.delete(education);
    }

    @Override
    public Experience findExperienceByID(int experienceID) {
        session = entityManager.unwrap(Session.class);
        Experience experience = session.get(Experience.class, experienceID);
        return experience;
    }

    @Override
    public void deleteExperienceByID(int experienceID) {
        session = entityManager.unwrap(Session.class);
        Experience experience = session.get(Experience.class, experienceID);
        session.delete(experience);
    }

    @Override
    public Project findProjectByID(int projectID) {
        session = entityManager.unwrap(Session.class);
        Project project = session.get(Project.class, projectID);

        return project;
    }

    @Override
    public void deleteProjectByID(int projectID) {
        session = entityManager.unwrap(Session.class);
        Project project = session.get(Project.class, projectID);
        session.delete(project);

    }

    @Override
    public Website findWebsiteByID(int websiteID) {
        session = entityManager.unwrap(Session.class);

        Website website = session.get(Website.class, websiteID);
        return website;
    }

    @Override
    public void deleteWebsiteByID(int websiteID) {
        session = entityManager.unwrap(Session.class);
        Website website = session.get(Website.class, websiteID);

        session.delete(website);

    }


    //deletes any given object by its ID
    @Override
    @Transactional
    public void deleteUserByID(int userID) {
        session = entityManager.unwrap(Session.class);
        User user = session.get(User.class, userID);
        session.delete(user);
    }

    @Override
    @Transactional
    public User findID(int userID) {
        session = entityManager.unwrap(Session.class);
        User user =  session.get(User.class, userID);
        return user;
    }

}
