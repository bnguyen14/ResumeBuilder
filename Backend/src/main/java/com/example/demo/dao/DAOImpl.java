package com.example.demo.dao;

import com.example.demo.entity.Resume;
import com.example.demo.entity.User;
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
    public Resume findResumeID(int resumeID) {
        session = entityManager.unwrap(Session.class);
        Resume resume = session.get(Resume.class, resumeID);

        return resume;
    }

}
