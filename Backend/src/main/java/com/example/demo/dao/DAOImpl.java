package com.example.demo.dao;

import com.example.demo.entity.*;
import org.hibernate.Query;
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

    // Test API
    @Override
    @Transactional
    public List<Resume> TestFindAPI(String name) {
        session = entityManager.unwrap(Session.class);

        List<Resume> achievements = session.createQuery("FROM user WHERE password=:name")
                .setParameter("name", name).getResultList();

        return achievements;
    }


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
    public User findByLogin(String email, String password) {
        Session session = entityManager.unwrap(Session.class);
        Query<User> query = session.createQuery("FROM User WHERE email=:email AND password=:password");
        query.setParameter("email", email);
        query.setParameter("password", password);
        List<User> temp = query.getResultList();

        return temp.get(0);
    }

    @Override
    @Transactional
    public List <Resume> findResumesByUserID(int userID) {
        session = entityManager.unwrap(Session.class);
        List <Resume> resumeList = session.createQuery("FROM Resume WHERE user_Id=:user_Id").setParameter("user_Id", userID).getResultList();
        //Resume resume = session.get(Resume.class, resumeID);



        return resumeList; //session.createQuery("FROM Resume WHERE resume_Id=:resume_Id").setParameter("resume_Id", resumeID).getResultList();
    }

    @Override
    @Transactional
    public List<Achievement> findAchievementID(int achievementID) {
        session = entityManager.unwrap(Session.class);
        //User user = session.get(User.class, email);

        //List <Resume> resumeList = session.createQuery("FROM Resume WHERE resume_Id=:resume_Id").setParameter("resume_Id", resumeID).getResultList();
        List<Achievement> achievements = session.createQuery("FROM achievement WHERE achievement_Id=:achievementID")
                .setParameter("achievementID", achievementID).getResultList();

        return achievements;
    }

    @Override
    @Transactional
    public void addAchievement(Achievement achievement) {
        session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(achievement);
    }

    @Override
    @Transactional
    public List<Education> findEducationID(int educationID) {
        session = entityManager.unwrap(Session.class);
        //User user = session.get(User.class, email);

        List<Education> education = session.createQuery("FROM education WHERE education_Id=:educationID").setParameter("educationID", educationID).getResultList();


        return education;
    }

    @Override
    @Transactional
    public void addEducation(Education education) {
        session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(education);
    }

    @Override
    @Transactional
    public List<Experience> findExperienceID(int experienceID) {
        session = entityManager.unwrap(Session.class);
        //User user = session.get(User.class, email);

        List<Experience> experience = session.createQuery("FROM experience WHERE experience_id=:experienceID").setParameter("experienceID", experienceID).getResultList();


        return experience;
    }

    @Override
    @Transactional
    public void addExperience(Experience experience) {
        session = entityManager.unwrap(Session.class);
        session.save(experience);
    }

    @Override
    @Transactional
    public List<Project> findProjectID(int projectID) {
        session = entityManager.unwrap(Session.class);
        //User user = session.get(User.class, email);

        List<Project> project = session.createQuery("FROM project WHERE project_Id=:projectID").setParameter("projectID", projectID).getResultList();


        return project;
    }

    @Override
    public void addProject(Project project) {
        session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(project);
    }

    @Override
    @Transactional
    public List<User> findUserID(int userId) {
        session = entityManager.unwrap(Session.class);
        //User user = session.get(User.class, email);

        List<User> user = session.createQuery("FROM user WHERE user_Id=:userId").setParameter("userId", userId).getResultList();


        return user;
    }

    @Override
    @Transactional
    public List<Website> findWebsiteID(int websiteId) {
        session = entityManager.unwrap(Session.class);
        //User user = session.get(User.class, email);

        List<Website> website = session.createQuery("FROM website WHERE website_id=:websiteId").setParameter("websiteId", websiteId).getResultList();


        return website;
    }

    // Put Save commands
    @Override
    public void addWebsite(Website website) {
        session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(website);
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public void saveAchievement(Achievement theAchievement) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theAchievement);

    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public void saveEducation(Education theEducation) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theEducation);

    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public void saveExperience(Experience theExperience) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theExperience);

    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public void saveProject(Project theProject) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theProject);

    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public void saveResume(Resume theResume) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theResume);

    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public void saveUser(User theUser) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theUser);

    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public void saveWebsite(Website theWebsite) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theWebsite);

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
    public List<ResumeSave> showAllResumesByID(int userID) {
        session = entityManager.unwrap(Session.class);
        //code goes here
        //List <Resume> resumeList = session.createQuery("FROM Resume WHERE user_Id=:user_Id").setParameter("user_Id", userID).getResultList();
        String query = "SELECT NEW com.example.demo.entity.ResumeSave(resumeID,resumeName,saveDate) "
        			 + "FROM Resume "
        			 + "WHERE user_Id=:user_Id";
        List<ResumeSave> resumeSaveList = session.createQuery(query).setParameter("user_Id", userID).getResultList();
        return resumeSaveList;
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
