CREATE DATABASE IF NOT EXISTS `challenge_champs`;
USE `challenge_champs`;
--
-- Table structure for tables challenges, users 
--
DROP TABLE IF EXISTS `challenges`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `participating`;
DROP TABLE IF EXISTS `completed`;

CREATE TABLE `challenges` (
`cid` INT NOT NULL,
`title` VARCHAR(80) NOT NULL,
`description` VARCHAR(775) NOT NULL,
`image` VARCHAR(100) NOT NULL,
PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE TABLE `participating` (
    `pid` INT NOT NULL,
    `id` INT NOT NULL,
    `cid` INT NOT NULL,
    PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE TABLE `completed` (
    `pid` INT NOT NULL,
    `id` INT NOT NULL,
    `cid` INT NOT NULL,
    PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE TABLE `users` (
`id` INT NOT NULL,
`name` VARCHAR(20) NOT NULL,
`email` VARCHAR(30) NOT NULL,
`password` VARCHAR(20) NOT NULL,
`bio` VARCHAR(120) NOT NULL,
`image` VARCHAR(100) NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


INSERT INTO `challenge_champs`.`users` (`id`, `name`, `email`, `password`, `bio`, `image`) 
    VALUES (1, "Tyler", "tyler@gmail.com", "password", "ISU undergrad into tech and fitness!", "");

INSERT INTO `challenge_champs`.`users` (`id`, `name`, `email`, `password`, `bio`, `image`) 
    VALUES (2, "Kaden", "kaden@gmail.com", "javascript", "Kaden's super unique bio...", "");

INSERT INTO `challenge_champs`.`challenges` (`cid`, `title`, `description`, `image`) 
    VALUES (1, "Grace Challenge", "30 Clean and Jerk reps to be completed as fast as possible", "https://github.com/TSSchaef/CS319-Midterm/blob/main/images/grace.png" );
