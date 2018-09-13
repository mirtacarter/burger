CREATE DATABASE burgers_db;
USE burgers_db;

-- Drop if table exists
DROP TABLE IF EXISTS burgers;

-- Create the burgers table
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
