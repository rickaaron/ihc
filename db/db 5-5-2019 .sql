/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 8.0.13 : Database - db_consultorio
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_consultorio` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;

USE `db_consultorio`;

/*Table structure for table `t_dat_patients` */

DROP TABLE IF EXISTS `t_dat_patients`;

CREATE TABLE `t_dat_patients` (
  `id_patient` int(10) NOT NULL AUTO_INCREMENT,
  `f_id_user` int(10) NOT NULL,
  `name` varchar(40) NOT NULL,
  `lastname_1` varchar(40) DEFAULT NULL,
  `lastname_2` varchar(40) DEFAULT NULL,
  `sex` enum('hombre','mujer','indefinido') DEFAULT NULL,
  `age` int(10) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `civil_status` enum('soltero','casado','divorciado','viudo') DEFAULT NULL,
  `children` int(10) DEFAULT NULL,
  `direction` varchar(40) DEFAULT NULL,
  `colony` varchar(20) DEFAULT NULL,
  `cp` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `telephone` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `office` varchar(10) DEFAULT NULL,
  `cellphone` varchar(40) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `record` text,
  `status` enum('deleted','active') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'active',
  PRIMARY KEY (`id_patient`),
  KEY `t_dat_patients_ibfk_1` (`f_id_user`),
  CONSTRAINT `t_dat_patients_ibfk_1` FOREIGN KEY (`f_id_user`) REFERENCES `t_dat_users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `t_dat_patients` */

LOCK TABLES `t_dat_patients` WRITE;

insert  into `t_dat_patients`(`id_patient`,`f_id_user`,`name`,`lastname_1`,`lastname_2`,`sex`,`age`,`birthdate`,`civil_status`,`children`,`direction`,`colony`,`cp`,`city`,`telephone`,`office`,`cellphone`,`email`,`record`,`status`) values (4,11,'Arturo Ramirez','Ramirez','Carrizales','indefinido',18,'2019-05-03','soltero',2,'Nuevo Leon, Mexico','Aspreso #2015','6764','Monterrey','789789789','456456456','123123123','alan@gmail.com','Pesadillas','active'),(5,11,'Arturo Ramirez','Ramirez','Carrizales','indefinido',18,'2019-05-03','soltero',2,'Nuevo Leon, Mexico','Aspreso #2015','6764','Monterrey','789789789','456456456','123123123','alan@gmail.com','Pesadillas','active'),(6,11,'Arturo Ramirez','Ramirez','Carrizales','indefinido',18,'2019-05-03','soltero',2,'Nuevo Leon, Mexico','Aspreso #2015','6764','Monterrey','789789789','456456456','123123123','alan@gmail.com','Pesadillas','active'),(7,11,'Arturo Ramirez','Ramirez','Carrizales','indefinido',18,'2019-05-03','soltero',2,'Nuevo Leon, Mexico','Aspreso #2015','6764','Monterrey','789789789','456456456','123123123','alan@gmail.com','Pesadillas','active'),(8,11,'Arturo Ramirez','Ramirez','Carrizales','indefinido',18,'2019-05-03','soltero',2,'Nuevo Leon, Mexico','Aspreso #2015','6764','Monterrey','789789789','456456456','123123123','alan@gmail.com','Pesadillas','active'),(9,11,'Arturo Ramirez','Ramirez','Carrizales','indefinido',18,'2019-05-03','soltero',2,'Nuevo Leon, Mexico','Aspreso #2015','6764','Monterrey','789789789','456456456','123123123','alan@gmail.com','Pesadillas','active');

UNLOCK TABLES;

/*Table structure for table `t_dat_quotes` */

DROP TABLE IF EXISTS `t_dat_quotes`;

CREATE TABLE `t_dat_quotes` (
  `id_quote` int(11) NOT NULL AUTO_INCREMENT,
  `f_id_patient` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `hour` int(11) DEFAULT NULL,
  `period` enum('pm','am') DEFAULT NULL,
  `min` int(11) DEFAULT NULL,
  `status` enum('active') DEFAULT NULL,
  `reason` text,
  PRIMARY KEY (`id_quote`),
  KEY `f_id_patient` (`f_id_patient`),
  CONSTRAINT `t_dat_quotes_ibfk_1` FOREIGN KEY (`f_id_patient`) REFERENCES `t_dat_patients` (`id_patient`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `t_dat_quotes` */

LOCK TABLES `t_dat_quotes` WRITE;

UNLOCK TABLES;

/*Table structure for table `t_dat_specialties` */

DROP TABLE IF EXISTS `t_dat_specialties`;

CREATE TABLE `t_dat_specialties` (
  `id_spe` int(11) NOT NULL AUTO_INCREMENT,
  `f_id_user` int(11) DEFAULT NULL,
  `specialtie` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id_spe`),
  KEY `f_id_user` (`f_id_user`),
  CONSTRAINT `t_dat_specialties_ibfk_1` FOREIGN KEY (`f_id_user`) REFERENCES `t_dat_users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `t_dat_specialties` */

LOCK TABLES `t_dat_specialties` WRITE;

UNLOCK TABLES;

/*Table structure for table `t_dat_treatments` */

DROP TABLE IF EXISTS `t_dat_treatments`;

CREATE TABLE `t_dat_treatments` (
  `id_treatment` int(11) NOT NULL AUTO_INCREMENT,
  `f_id_quote` int(11) DEFAULT NULL,
  `symptom` text,
  `
treatment` text,
  `status` enum('active','deleted') DEFAULT NULL,
  `reason` text,
  PRIMARY KEY (`id_treatment`),
  KEY `f_id_quote` (`f_id_quote`),
  CONSTRAINT `t_dat_treatments_ibfk_1` FOREIGN KEY (`f_id_quote`) REFERENCES `t_dat_quotes` (`id_quote`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `t_dat_treatments` */

LOCK TABLES `t_dat_treatments` WRITE;

UNLOCK TABLES;

/*Table structure for table `t_dat_users` */

DROP TABLE IF EXISTS `t_dat_users`;

CREATE TABLE `t_dat_users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `lastname_1` varchar(30) DEFAULT NULL,
  `lastname_2` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `direction` varchar(50) DEFAULT NULL,
  `telephone` varchar(10) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `t_dat_users` */

LOCK TABLES `t_dat_users` WRITE;

insert  into `t_dat_users`(`id_user`,`name`,`lastname_1`,`lastname_2`,`email`,`direction`,`telephone`,`password`) values (1,'qweqwe','qweqwe','qweqwe','asdasdasd',NULL,NULL,NULL),(11,'ricardo',NULL,NULL,'ricardoaaron_@hotmail.com',NULL,NULL,'qweqweqwe');

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
