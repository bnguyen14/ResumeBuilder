CREATE DATABASE  IF NOT EXISTS `resumedatabase`;
USE `resumedatabase`;

--
-- Table structure for table `resume`
-- Table structure for table `user`
-- Table structure for table `experience`
-- Table structure for table `project`
-- Table structure for table `Achievement`
-- Table structure for table `education`
-- Table structure for table `website`
--

DROP TABLE IF EXISTS `Education`;
DROP TABLE IF EXISTS `Experience`;
DROP TABLE IF EXISTS `Project`;
DROP TABLE IF EXISTS `Achievement`;
DROP TABLE IF EXISTS `Website`;
DROP TABLE IF EXISTS `Resume`;
DROP TABLE IF EXISTS `User`;


CREATE TABLE User (
                user_Id INT Unique AUTO_INCREMENT NOT NULL,
                email VARCHAR(45) unique not NULL,
                password varchar(45) Not Null,
                PRIMARY KEY (user_Id)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


CREATE TABLE Resume (
                resume_Id INT Unique AUTO_INCREMENT NOT NULL,
                user_Id INT NOT NULL,
                resume_name varchar(45) NOT NULL,
                name VARCHAR(45) ,
                email VARCHAR(45) ,
                location VARCHAR(45) ,
                summary VARCHAR(10000) ,
                skills VARCHAR(10000) ,
                save_date date null,
                PRIMARY KEY (resume_Id, user_Id)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


CREATE TABLE Website (
                website_Id INT Unique AUTO_INCREMENT NOT NULL,
                resume_Id INT NOT NULL,
                site VARCHAR(200) ,
                PRIMARY KEY (website_Id, resume_Id)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


CREATE TABLE Achievement (
                achievement_Id INT Unique AUTO_INCREMENT NOT NULL,
                resume_Id INT NOT NULL,
                issuer VARCHAR(45) ,
                name VARCHAR(45) ,
                date DATE ,
                PRIMARY KEY (achievement_Id, resume_Id)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


CREATE TABLE Project (
                project_Id INT Unique AUTO_INCREMENT NOT NULL,
                resume_Id INT NOT NULL,
                title VARCHAR(100) ,
                description VARCHAR(10000) ,
                PRIMARY KEY (project_Id, resume_Id)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


CREATE TABLE Experience (
                experience_Id INT Unique AUTO_INCREMENT NOT NULL,
                resume_Id INT NOT NULL,
                company VARCHAR(100) ,
                location VARCHAR(100) ,
                job_title VARCHAR(100) ,
                start_date DATE ,
                end_date DATE ,
                description VARCHAR(10000) ,
                current BOOLEAN ,
                PRIMARY KEY (experience_Id, resume_Id)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


CREATE TABLE Education (
                education_Id INT Unique AUTO_INCREMENT NOT NULL,
                resume_Id INT NOT NULL,
                school VARCHAR(100) ,
                location VARCHAR(100) ,
                start_date DATE ,
                end_date DATE ,
                degree VARCHAR(1000) ,
                current BOOLEAN ,
                PRIMARY KEY (education_Id, resume_Id)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


ALTER TABLE Resume ADD CONSTRAINT resume_user_fk
FOREIGN KEY (user_Id)
REFERENCES User (user_Id)
ON DELETE CASCADE
ON UPDATE NO ACTION;

ALTER TABLE Education ADD CONSTRAINT resume_education_fk
FOREIGN KEY (resume_Id)
REFERENCES Resume (resume_Id)
ON DELETE CASCADE
ON UPDATE NO ACTION;

ALTER TABLE Experience ADD CONSTRAINT resume_experience_fk
FOREIGN KEY (resume_Id)
REFERENCES Resume (resume_Id)
ON DELETE CASCADE
ON UPDATE NO ACTION;

ALTER TABLE Project ADD CONSTRAINT resume_project_fk
FOREIGN KEY (resume_Id)
REFERENCES Resume (resume_Id)
ON DELETE CASCADE
ON UPDATE NO ACTION;

ALTER TABLE Achievement ADD CONSTRAINT resume_achievement_fk
FOREIGN KEY (resume_Id)
REFERENCES Resume (resume_Id)
ON DELETE CASCADE
ON UPDATE NO ACTION;

ALTER TABLE Website ADD CONSTRAINT resume_website_fk
FOREIGN KEY (resume_Id)
REFERENCES Resume (resume_Id)
ON DELETE CASCADE
ON UPDATE NO ACTION;