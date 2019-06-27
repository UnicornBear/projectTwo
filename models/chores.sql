USE mjfr80itxjqpuyol;

-- Drops the chores_db if it exists currently --
DROP DATABASE IF EXISTS chores_db;

Create DATABASE chores_db;

USE chores_db;

DROP TABLE IF EXISTS chore;

CREATE TABLE chores
(
	id INT NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    description TEXT,
    points INT NOT NULL,
    completed  BOOLEAN DEFAULT false,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
    UserId INT,
    PRIMARY KEY(id)
);

INSERT INTO chores (title, description, points, completed) VALUES ('Clean the guest bedroom', "tree", 10, 0);
INSERT INTO chores (title, description, points, completed) VALUES ('Organize the basement toy closet', "tree", 10,  0);

