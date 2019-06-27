USE mjfr80itxjqpuyol;

-- Drops the chores_db if it exists currently --
DROP DATABASE IF EXISTS chores_db;

Create DATABASE chores_db;

USE chores_db;

DROP TABLE IF EXISTS chore;

CREATE TABLE chore
(
	id INT NOT NULL AUTO_INCREMENT,
    chore_name varchar(255) NOT NULL,
    chore_completed BOOLEAN DEFAULT false,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    UserId INT,
    PRIMARY KEY(id)
);