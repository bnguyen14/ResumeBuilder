-- Resume SQL commands
select resume_Id, user_Id, name, email, location, summary, skills
from resume
where resume.resume_id = 1;

-- Education Table SQL Command
select education_Id, resume_Id, school, location, start_date, end_date, degree, current
from education
where education.resume_id = 1;

-- Achievement Table SQL Command
select achievement_Id, resume_Id, issuer, name, date
from achievement
where achievement.resume_Id = 1;

-- User Table SQL Command
select user_Id, email, password
from user
where user.user_Id = 1;

-- Experience Table SQL Command
select experience_Id, resume_Id, company, location, job_title, start_date, end_date, description, current
from experience
where experience.resume_Id = 1;

-- Project Table SQL Command
select project_Id, resume_Id, title, description
from project
where project.resume_Id = 1;

-- Website Table SQL Command
select website_Id, resume_Id, site
from website
where website.resume_Id = 1;


