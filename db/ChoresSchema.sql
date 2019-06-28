-- database for the projecttwo072019 on Heroku
-- USE bvapjiwoj3fi7nln;
USE chores_db;

CREATE TABLE chores
(
	id INT AUTO_INCREMENT NOT NULL ,
	chore_name varchar(255) NOT NULL ,
    instructions varchar(255) ,
	completed BOOLEAN DEFAULT false ,
  	points INT DEFAULT 0,

	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
  	updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
	userId int ,
	
  	PRIMARY KEY(id)
);

-- seed data --  chores that have not been completed
INSERT INTO chores (chore_name, instructions, completed, points) VALUES ('Clean the guest bedroom', 'place instructios here', false, 10);
INSERT INTO chores (chore_name, instructions, completed, points) VALUES ('Organize the basement toy closet', 'place instructios here',  false, 10);
INSERT INTO chores (chore_name, instructions, completed, points) VALUES ('find three toys to give to Goodwill', 'place instructios here',  false, 10);
INSERT INTO chores (chore_name, instructions, completed, points) VALUES ('Vacuum the upstairs', 'place instructios here', false, 10);
INSERT INTO chores (chore_name, instructions, completed, points) VALUES ('Mow the lawn', 'place instructios here',  false, 10);

-- seed data -- chores that 'HAVE' been completed
INSERT INTO chores (chore_name, completed) VALUES ('Blow out the garage', true);
INSERT INTO chores (chore_name, completed) VALUES ('Clean and Organize the basement laudry room', true);
